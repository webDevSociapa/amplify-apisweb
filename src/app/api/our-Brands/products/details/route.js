import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "our-Brand";
const collectionName = "ourBrand_01";

// AWS S3 Configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

// Helper: Connect to MongoDB
async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// Helper: Upload file to S3


 
// POST API: Handle image upload and save to S3 & MongoDB
export async function POST(req) {
    try {
      const formData = await req.formData();
      const bannerFile = formData.get("bannerImage");
      const headline = formData.get("headline");
      const productDescription = formData.get("productDescription");
  
      // Defensive checks for form data
      if (!bannerFile) {
        return NextResponse.json(
          { message: "Banner image is required and missing in the request" },
          { status: 400 }
        );
      }
  
      if (!headline || !productDescription) {
        return NextResponse.json(
          { message: "Headline and product description are required" },
          { status: 400 }
        );
      }
  
      // Attempt to access file properties safely
      const uniqueFileName = `${uuidv4()}_${bannerFile.name}`;
      const uploadParams = {
        Bucket: bucketName,
        Key: `productDetails/${uniqueFileName}`,
        Body: Buffer.from(await bannerFile.arrayBuffer()),
        ContentType: bannerFile.type,
      };
  
      const uploadResult = await s3.upload(uploadParams).promise();
      const imageUrl = uploadResult.Location;
  
      const collection = await connectToDb();
      await collection.updateOne(
        {},
        {
          $set: {
            bannerFile: imageUrl,
            headline,
            productDescription,
            hideShow: true,
          },
        },
        { upsert: true }
      );
  
      return NextResponse.json({ message: "Banner uploaded successfully", imageUrl });
    } catch (error) {
      console.error("Error uploading banner file:", error);
      return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
  }
  

// PUT API: Update hideShow, headline, and productDescription
export async function PUT(req) {
  try {
    const { hideShow, headline, productDescription } = await req.json();

    if (typeof hideShow !== "boolean" || !headline || !productDescription) {
      return NextResponse.json(
        { message: "Invalid input: hideShow must be boolean, headline, and product description are required" },
        { status: 400 }
      );
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      {},
      { $set: { hideShow, headline, productDescription } },
      { upsert: true }
    );

    return NextResponse.json({ message: "Data updated successfully", result });
  } catch (error) {
    console.error("Error updating data:", error);
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}

// GET API: Retrieve headline, product description, and banner image
export async function GET() {
  try {
    const collection = await connectToDb();
    const data = await collection.findOne(
      {},
      {
        projection: {
          bannerImage: 1,
          headline: 1,
          productDescription: 1,
          hideShow: 1,
        },
      }
    );

    if (!data) {
      return NextResponse.json({ message: "Data not found" }, { status: 404 });
    }
    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json({ message: "An error occurred", error: error.message }, { status: 500 });
  }
}
