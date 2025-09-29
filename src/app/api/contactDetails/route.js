
import {MongoClient} from "mongodb";
import { NextResponse } from "next/server";

const uri ="mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client =  new MongoClient(uri)
const dbName =  "contactDetails";
const collectionName = "contactDetails_01";

async function connectToDb(){
    await  client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}


export async function POST(req){
    try{
        const body = await  req.json();
        const {headOffice,regOffice} = body;

       
        const collection = await connectToDb();
        const Getdata = await collection.find({}).toArray();  
        
        if(Getdata.length === 0){
            const  result = await collection.insertOne(body);
        }else{
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
export async function PUT(req) {
    try {
        const body = await req.json();
        console.log("Received data:", body);
        
        const { headOffice, regOffice } = body;

        // Validation to ensure necessary fields are provided
        if (!headOffice || !regOffice) {
            return NextResponse.json({ message: "All fields (headOffice, regOffice, email) are required" }, { status: 400 });
        }

        const collection = await connectToDb();
        
        // Update only the necessary fields in the document
        const result = await collection.updateOne(
            {}, // Empty filter matches the first document
            { $set: { headOffice, regOffice } } // Only set the fields to be updated
        );

        if (result.modifiedCount === 0) {
            return NextResponse.json({ message: "No document found to update" }, { status: 404 });
        }

        return NextResponse.json({ message: "Data updated successfully!" });

    } catch (error) {
        console.error("Error updating contact details:", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }
}
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