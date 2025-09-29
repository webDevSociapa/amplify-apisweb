import { MongoClient } from 'mongodb';
import { NextResponse } from 'next/server';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);

const dbName = "AboutusBanner";
const collectionName = "ApisDataNumbers";

// Function to connect to MongoDB
async function connectToDb() {
  await client.connect();
  const database = client.db(dbName);
  return database.collection(collectionName);
}

// POST Request to add data (handling an array of records)
export async function POST(req) {
  try {
    const body = await req.json();

    // Validate if the data is an array and if it's not empty
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json({ message: "Please provide an array of data", status: 400 });
    }

    // Validate each record to ensure `title` and `count` exist
    for (let item of body) {
      if (!item.title || !item.count) {
        return NextResponse.json({ message: "Each record must have a title and count", status: 400 });
      }
    }

    const collection = await connectToDb();

    // Check if any record with the same title already exists
    const existingData = await collection.find({ title: { $in: body.map(item => item.title) } }).toArray();

    if (existingData.length > 0) {
      return NextResponse.json({ message: "One or more titles already exist", status: 409 });
    }

    // Insert all records
    const result = await collection.insertMany(body);
    return NextResponse.json({ message: "Data added successfully!", data: body });
    
  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}

// GET Request to fetch all data
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

// PUT Request to update data (handling updates by title)
export async function PUT(req) {
  try {
    const body = await req.json();

    // Validate if the data is an array and if it's not empty
    if (!Array.isArray(body) || body.length === 0) {
      return NextResponse.json({ message: "Please provide an array of data", status: 400 });
    }

    // Validate each record to ensure `title` and `count` exist
    for (let item of body) {
      if (!item.title || !item.count) {
        return NextResponse.json({ message: "Each record must have a title and count", status: 400 });
      }
    }

    const collection = await connectToDb();

    // Loop over each record to update based on title
    for (let item of body) {
      const { title, count } = item;

      // Update the record if it exists
      const result = await collection.updateOne(
        { title }, // Find by title
        { $set: { count } } // Update count field
      );

      // If the record doesn't exist, return a 404 error
      if (result.matchedCount === 0) {
        return NextResponse.json({ message: `Record with title ${title} not found`, status: 404 });
      }
    }

    return NextResponse.json({ message: "Data updated successfully!", data: body });

  } catch (error) {
    return NextResponse.json({ message: error.message }, { status: 500 });
  } finally {
    await client.close();
  }
}
