import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "LifeAtApis";
const collectionName = "LifeAtApis_01";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

// Helper function to connect to DB
async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// Helper function to upload file to S3
async function uploadToS3(file, folder) {
  const uniqueName = `${uuidv4()}_${file.name}`;
  const params = {
    Bucket: bucketName,
    Key: `${folder}/${uniqueName}`,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type,
  };
  const uploadResult = await s3.upload(params).promise();
  return uploadResult.Location;
}

// POST handler
export async function POST(req) {
  try {
    const formData = await req.formData();
    const videoUrl = formData.get('videoUrl');

    if (!videoUrl) {
      return NextResponse.json({ message: "Missing required fields: thumbnail or videoUrl" }, { status: 400 });
    }


    const collection = await connectToDb();
    await collection.insertOne({
      videoUrl,
    });

    return NextResponse.json({ message: "Data added successfully!" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// PUT handler
export async function PUT(req) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');
    const thumbnail = formData.get('thumbnail');
    const videoUrl = formData.get('videoUrl');

    if (!id) {
      return NextResponse.json({ message: "Missing required field: id" }, { status: 400 });
    }

    const updateData = {};
    if (videoUrl) updateData.videoUrl = videoUrl;

    // Upload thumbnail if provided
    if (thumbnail) {
      const thumbnailUrl = await uploadToS3(thumbnail, 'homeProduct');
      updateData.thumbnail = thumbnailUrl; // Updated image URL
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      { _id: new ObjectId(id) }, // Ensure id is converted to ObjectId
      { $set: updateData }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Slide not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Slide updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// GET handler
export async function GET() {
  try {
    const collection = await connectToDb();
    const data = await collection.find({}).toArray();
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
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