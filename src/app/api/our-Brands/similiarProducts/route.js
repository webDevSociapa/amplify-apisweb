import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "our-Brand";
const collectionName = "socialReviews";

async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// POST: Add or update card data
export async function POST(req) {
  try {
    const body = await req.json();
    const { cardId, uploadVideoUrl } = body;

    if (!cardId || !uploadVideoUrl) {
      return new NextResponse("Missing cardId or uploadVideoUrl", { status: 400 });
    }

    const collection = await connectToDb();

    // Check if the card data already exists
    const existingCard = await collection.findOne({ cardId });

    if (existingCard) {
      return NextResponse.json({ message: "Card data already exists" }, { status: 409 });
    }

    const result = await collection.insertOne(body);
    return NextResponse.json({ message: "Card data added successfully", data: result }, { status: 201 });

  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// GET: Fetch all cards
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

// PUT: Update data for a specific card
export async function PUT(req) {
  try {
    const body = await req.json();
    const { cardId, uploadVideoUrl } = body;

    if (!cardId || !uploadVideoUrl) {
      return NextResponse.json({ message: "Missing cardId or uploadVideoUrl" }, { status: 400 });
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      { cardId },
      { $set: { uploadVideoUrl } }
    );

    if (result.modifiedCount === 0) {
      return NextResponse.json({ message: "No matching card found" }, { status: 404 });
    }

    return NextResponse.json({ message: "Card data updated successfully" });
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}
