import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "mediaSection";
const collectionName = "mediaSection_01";

// AWS S3 Configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const desc = formData.get('desc');
    const mediaImage = formData.get('mediaImage');
    const link = formData.get('link');
    // const contentData = formData.get('contentData');
    // const blogDate = formData.get('blogDate');
    const date = formData.get('date');

    if (!desc || !mediaImage || !link || !date) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const uniqueFileName = `${uuidv4()}_${mediaImage.name}`;
    const uploadParams = {
      Bucket: bucketName,
      Key: `mediSection/${uniqueFileName}`,
      Body: Buffer.from(await mediaImage.arrayBuffer()),
      ContentType: mediaImage.type
    };

    const uploadResult = await s3.upload(uploadParams).promise();
    const imageUrl = uploadResult.Location;

    const collection = await connectToDb();
    await collection.insertOne({
      // blogImage: imageUrl,
      // blogTitle,
      // contentData,
      link,
      date,
      mediaImage: imageUrl,
      desc,
      hideShow: true,
      createdAt: new Date()
    });

    return NextResponse.json({ message: "Blog data uploaded successfully", imageUrl });
  } catch (error) {
    console.error("Error uploading blog data:", error.message || error);
    return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
  }
}

export async function PUT(req) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');
    const desc = formData.get('desc');
    const mediaImage = formData.get('mediaImage');
    const link = formData.get('link');
    const date = formData.get('date');

    if (!id || !desc || !mediaImage || !link || !date) {
      return NextResponse.json({ message: "All fields are required" }, { status: 400 });
    }

    const uniqueFileName = `${uuidv4()}_${mediaImage.name}`;
    const uploadParams = {
      Bucket: bucketName,
      Key: `mediSection/${uniqueFileName}`,
      Body: Buffer.from(await mediaImage.arrayBuffer()),
      ContentType: mediaImage.type
    };

    const uploadResult = await s3.upload(uploadParams).promise();
    const imageUrl = uploadResult.Location;

    const collection = await connectToDb();

    const updateData = {
      link,
      date,
      mediaImage: imageUrl,
      desc,
      hideShow: true, // Default to true or change as per logic
      updatedAt: new Date(),
    };

    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Find the document by its ID
      { $set: updateData } // Update the fields provided
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "No document found with the provided ID" }, { status: 404 });
    }

    return NextResponse.json({ message: "Content updated successfully", imageUrl });
  } catch (error) {
    console.error("Error updating content:", error.message || error);
    return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
  }
}



export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const collection = await connectToDb();

    let data;
    if (id) {
      data = await collection.findOne({ _id: new ObjectId(id) });
      if (!data) {
        return NextResponse.json({ message: "No document found with the provided ID" }, { status: 404 });
      }
    } else {
      data = await collection.find({}).toArray();
      if (data.length === 0) {
        return NextResponse.json({ message: "No data found" }, { status: 404 });
      }
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving data:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  }
}
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: "Missing required field: id" }, { status: 400 });
    }

    const collection = await connectToDb();

    // Delete the document from MongoDB
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Slide not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Slide deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}