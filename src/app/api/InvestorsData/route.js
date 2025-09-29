import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "InvestorData";
const collectionName = "InvestorData01";

// AWS S3 Configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// POST: Upload PDF and save metadata
export async function POST(req) {
  try {
    const formData = await req.formData();
    const title = formData.get("title");
    const pdfFile = formData.get("pdfFile");
    const mainCategory = formData.get("mainCategory");
    const subCategory = formData.get("subCategory");

    const financialsSubcategories = ["Associates", "Subsidiary Financials"];

    if (!title || !pdfFile || !mainCategory) {
      return NextResponse.json(
        { message: "Title, PDF file, and main category are required" },
        { status: 400 }
      );
    }

    // Validate subCategory for Financials
    if (mainCategory === "Financials" && !financialsSubcategories.includes(subCategory)) {
      return NextResponse.json(
        { message: `Subcategory is required and must be one of: ${financialsSubcategories.join(", ")}` },
        { status: 400 }
      );
    }

    // Generate unique S3 path
    const uniqueFileName = `${uuidv4()}_${pdfFile.name}`;
    const uploadPath =
      mainCategory === "Financials" ? `${mainCategory}/${subCategory}/${uniqueFileName}` : `${mainCategory}/${uniqueFileName}`;
    const uploadParams = {
      Bucket: bucketName,
      Key: uploadPath,
      Body: Buffer.from(await pdfFile.arrayBuffer()),
      ContentType: pdfFile.type,
    };

    const uploadResult = await s3.upload(uploadParams).promise();
    const pdfUrl = uploadResult.Location;

    const collection = await connectToDb();

    // Check for duplicate entry
    const existingDocument = await collection.findOne({ title, mainCategory, subCategory });
    if (existingDocument) {
      return NextResponse.json(
        { message: "A document with the same title and category already exists" },
        { status: 400 }
      );
    }

    await collection.insertOne({
      title,
      mainCategory,
      subCategory,
      pdfUrl,
      createdAt: new Date(),
    });

    return NextResponse.json({
      message: "PDF uploaded successfully",
      pdfUrl,
    });
  } catch (error) {
    console.error("Error uploading PDF:", error.message || error);
    return NextResponse.json(
      { message: `An error occurred: ${error.message}` },
      { status: 500 }
    );
  }
}

// GET: Retrieve PDFs based on category and subcategory
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const mainCategory = url.searchParams.get("mainCategory");
    const subCategory = url.searchParams.get("subCategory");

    const collection = await connectToDb();
    let query = {};

    if (mainCategory) {
      query.mainCategory = mainCategory;
    }

    if (mainCategory === "Financials" && subCategory) {
      query.subCategory = subCategory;
    }

    const data = await collection.find(query).toArray();

    if (!data || data.length === 0) {
      return NextResponse.json({ message: "No data found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}

// DELETE: Remove a PDF and its metadata
export async function DELETE(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    if (!id) {
      return NextResponse.json({ message: "ID is required" }, { status: 400 });
    }

    const collection = await connectToDb();
    const document = await collection.findOne({ _id: new ObjectId(id) });

    if (!document) {
      return NextResponse.json({ message: "Document not found" }, { status: 404 });
    }

    // Properly extract the S3 key
    const s3UrlPattern = `https://${bucketName}.s3.${process.env.AWS_REGION}.amazonaws.com/`;
    const s3Key = document.pdfUrl.replace(s3UrlPattern, "");

    if (!s3Key) {
      return NextResponse.json({ message: "S3 Key extraction failed" }, { status: 500 });
    }

    // Delete the file from S3
    const deleteParams = {
      Bucket: bucketName,
      Key: s3Key,
    };

    await s3.deleteObject(deleteParams).promise();

    // Remove the metadata from the database
    await collection.deleteOne({ _id: new ObjectId(id) });

    return NextResponse.json({ message: "PDF and metadata deleted successfully" });
  } catch (error) {
    console.error("Error deleting data:", error);
    return NextResponse.json(
      { message: `An error occurred: ${error.message}` },
      { status: 500 }
    );
  }
}
