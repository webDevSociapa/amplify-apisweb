import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "jobOpening";  // Updated to reflect job openings database
const collectionName = "jobOpening_01";  // Collection for job openings

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// Add a new job opening
export async function POST(req) {
    try {
        const body = await req.json();
        const collection = await connectToDb();

        // Validate required fields
        if (!body.position || !body.location || !body.ctc) {
            return new NextResponse("Missing required fields", { status: 400 });
        }

        // Insert new job opening
        const result = await collection.insertOne(body);
        return NextResponse.json({ message: "Job opening added successfully", data: result });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

// Update an existing job opening
export async function PUT(req) {
    try {
        const body = await req.json();
        const { _id, ...updateData } = body; // Assuming `_id` is passed for the document to update

        if (!_id) {
            return NextResponse.json({ message: "Job ID (_id) is required" }, { status: 400 });
        }

        const collection = await connectToDb();
        const result = await collection.updateOne({ _id: new MongoClient.ObjectId(_id) }, { $set: updateData });

        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "No job opening found with the provided ID" }, { status: 404 });
        }

        return NextResponse.json({ message: "Job opening updated successfully", data: result });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

// Retrieve all job openings
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
