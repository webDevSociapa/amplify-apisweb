import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';



const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "tasteProduct";
const collectionName = "tasteProduct_01";

const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
})

const bucketName = process.env.AWS_BUCKET_NAME;


async function connectToDb() {
  if (!client.isConnected) await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// POST: Add a new slide
export async function POST(req) {
  try {
    // const body = await req.json();

    const formData = await req.formData();
    const  imageFile = formData.get('imageFile');
    const title = formData.get('title');
    const content = formData.get('content');
    const path = formData.get('path');
    
    // const { title, img, content, path } = body;
     

    if (!imageFile || !title || !content) {
      return new NextResponse("Missing required fields", { status: 400 });
    }

    const uniqueName = `${uuidv4()}_${imageFile.name}`;

    const uploadParams = {
      Bucket: bucketName,
      Key:`homeProduct/${uniqueName}`,
      Body: Buffer.from(await imageFile.arrayBuffer()),
      ContentType: imageFile.type,
    }

   const uploadResult = await s3.upload(uploadParams).promise();
   
   const imageUrl = uploadResult.Location;


    const collection = await connectToDb();
    await collection.insertOne({
            
      imageFile: imageUrl,
      content,
      title,
      path
});
    // if (existingSlide) {
    //   return NextResponse.json({ message: "Slide already exists" }, { status: 409 });
    // }

    // const result = await collection.insertOne(body);
    return NextResponse.json({ message: "Slide added successfully", data: uploadResult }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// GET: Fetch all slides
export async function GET() {
  try {
    const collection = await connectToDb();
    const data = await collection.find({}).toArray();
    return NextResponse.json(data, { status: 200 });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// PUT: Update slide data by title
export async function PUT(req) {
  try {
    const formData = await req.formData();
    const id = formData.get('id');
    const title = formData.get('title');
    const content = formData.get('content');
    const path = formData.get('path');
    const imageFile = formData.get('imageFile'); // Optional for update

    if (!id) {
      return NextResponse.json({ message: "Missing required field: id" }, { status: 400 });
    }

    const updateData = {};
    if (title) updateData.title = title;
    if (content) updateData.content = content;
    if (path) updateData.path = path;

    if (imageFile) {
      const uniqueName = `${uuidv4()}_${imageFile.name}`;
      const uploadParams = {
        Bucket: bucketName,
        Key: `homeProduct/${uniqueName}`,
        Body: Buffer.from(await imageFile.arrayBuffer()),
        ContentType: imageFile.type,
      };

      const uploadResult = await s3.upload(uploadParams).promise();
      updateData.imageFile = uploadResult.Location; // Updated image URL
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