import { MongoClient, ObjectId } from 'mongodb';
import { NextResponse } from 'next/server';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const dbName = "mediaGallery";
const collectionName = "mediaGallery_01";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
  try {
    const client = new MongoClient(uri);
    await client.connect();
    return client.db(dbName).collection(collectionName);
  } catch (error) {
    throw new Error('Failed to connect to database');
  }
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const mediaImage = formData.get('mediaImage');
    const title = formData.get("title");


    if (!mediaImage) {
      return NextResponse.json({ error: 'No media image provided' }, { status: 400 });
    }

    // Generate unique filename
    const uniqueFileName = `${uuidv4()}_${mediaImage.name}`;

    // Prepare S3 upload parameters
    const uploadParams = {
      Bucket: bucketName,
      Key: `mediaGallery/${uniqueFileName}`,
      Body: Buffer.from(await mediaImage.arrayBuffer()),
      ContentType: mediaImage.type,
    };

    // Upload to S3
    const uploadResult = await s3.upload(uploadParams).promise();
    const imageUrl = uploadResult.Location;

    // Insert image URL into MongoDB
    const collection = await connectToDb();
    const insertResult = await collection.insertOne({ mediaGallery: imageUrl,title });

    return NextResponse.json({
      message: "Media Gallery Added",
      data: insertResult,
    });
  } catch (error) {
    console.error("Error uploading media data:", error.message || error);
    return NextResponse.json({ error: `An error occurred: ${error.message}` }, { status: 500 });
  }
}

export async function GET(req) {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();

        return NextResponse.json(data);
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
    // } finally {
    //     await client.close();
    // }
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