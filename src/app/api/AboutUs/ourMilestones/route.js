import { MongoClient,ObjectId  } from "mongodb";
import { NextResponse } from "next/server";

// Connection URI and Database/Collection Names
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "AboutusBanner";
const collectionName = "ourMilestones";

// Helper function to connect to the database
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// POST method to add data
export async function POST(req) {
    try {
        const body = await req.json();
        const { addYear,addImage } = body;
        
        if (!addYear || !addImage) {
            return NextResponse.json(
                { message: "addYear & addImage is required." },
                { status: 400 }
            );
        }
        const collection = await connectToDb();
        
        const Getdata = await collection.find({}).toArray();  
              
        if(Getdata.length === 0){
            const data = await collection.insertOne(body);
        }
        else{
            return NextResponse.json({message: "data Already Exist"})
        }
        return NextResponse.json(
            { message: "Data added successfully!",data: body }
        );
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}

// GET method to retrieve data
export async function GET(req) {
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
// PUT method to update data
export async function PUT(req) {
    try {
        const body = await req.json();
        const { addYear,addImage } = body;

        if (!addYear || !addImage) {
            return NextResponse.json(
                { message: " addYear & addImage are required." },
                { status: 400 }
            );
        }
        const collection = await connectToDb();
        const result = await collection.updateOne({},
            { $set: { addYear,addImage } }
        );
        if (result.modifiedCount === 0) {
            return NextResponse.json(
                { message: "No document found with the provided ID." },
                { status: 404 }
            );
        }

        return NextResponse.json({ message: "Data updated successfully!",data: body });
    } catch (error) {
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        await client.close();
    }
}
