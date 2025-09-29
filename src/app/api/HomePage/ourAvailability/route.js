import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import { v4 as uuidv4 } from 'uuid';
import AWS from 'aws-sdk';


const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "ourAvailability";
const collectionName = "ourAvailability_01";


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
    const formData = await req.formData();
    const uploadLogo = formData.get('uploadLogo')
    const path = formData.get('path')
    
    // const {imgPath } = body;

    if (!uploadLogo) {
      return new NextResponse("Missing required fields", { status: 400 });
    }


    const uniqueFileName = `${uuidv4()}_${uploadLogo.name}`;
    const uploadParams = {
      Bucket: bucketName ,
      Key:`e-commerceLogo/${uniqueFileName}`,
      Body: Buffer.from(await uploadLogo.arrayBuffer()),
      ContentType: uploadLogo.type
  }

  const uploadResult = await s3.upload(uploadParams).promise();
  const logoPath = uploadResult.Location;



    const collection = await connectToDb();

    await collection.insertOne({
            
      uploadLogo: logoPath,
      path,
    
});
    // const existingSlide = await collection.findOne({ title });

    // if (existingSlide) {
    //   return NextResponse.json({ message: "Slide already exists" }, { status: 409 });
    // }

    // const result = await collection.insertOne(body);
    return NextResponse.json({ message: "added successfully" }, { status: 201 });
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
    const body = await req.json();
    const {imgPath} = body;

    if (!imgPath) {
      return NextResponse.json({ message: "Missing required fields" }, { status: 400 });
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      {},
      { $set: {imgPath} }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "Slide not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Slide updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}

// DELETE: Remove slide by ID
// DELETE: Remove slide by ID
export async function DELETE(req) {
  try {
    const { searchParams } = new URL(req.url);
    const id = searchParams.get('id'); // Get id from query params
    
    if (!id) {
      return NextResponse.json({ message: "Missing required id" }, { status: 400 });
    }

    const collection = await connectToDb();
    
    // Attempt to delete the document by _id
    const result = await collection.deleteOne({ _id: new ObjectId(id) });

    if (result.deletedCount === 0) {
      return NextResponse.json({ message: "Slide not found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Slide deleted successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}


