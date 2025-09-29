
import {MongoClient, ObjectId} from "mongodb";
import { NextResponse } from "next/server";

const uri ="mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client =  new MongoClient(uri)
const dbName =  "sustainBility";
const collectionName = "sustainBility_01";

async function connectToDb(){
    await  client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}


export async function POST(req){
    try{
        const body = await  req.json();
        const {title,videoUrl,csrContent,imageUrl} = body;

        if(!videoUrl || !title){
            return new NextResponse("Please enter title && videoUrl", {status: 400})
        }
        const collection = await connectToDb();
        const Getdata = await collection.find({}).toArray();  
        
        // if(Getdata.leng){
            const  result = await collection.insertOne(body);
        // }else{
        //     return NextResponse.json({message: "data Already Exist"})
        // }

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
        // Parse the incoming request body
        const body = await req.json();
        console.log("body", body);

        const { id, videoUrl, title,csrContent } = body;

        // Ensure 'id' is provided for updating the document
        if (!id) {
            return NextResponse.json({ message: "ID is required to update the document" }, { status: 400 });
        }

        // Check if at least one field (videoUrl or title) is provided for update
        if (!videoUrl && !title) {
            return NextResponse.json({ message: "No fields provided for update" }, { status: 400 });
        }

        // Connect to the database
        const collection = await connectToDb();

        // Prepare the update object, only including fields that are provided
        const updateData = {};

        if (videoUrl) updateData.videoUrl = videoUrl;
        if (title) updateData.title = title;
        if(csrContent) updateData.csrContent = csrContent;

        // Perform the update operation in MongoDB
        const result = await collection.updateOne(
            { _id: new ObjectId(id) }, // Find document by ID
            { $set: updateData } // Update only the fields provided
        );

        // Handle case where no document was found to update
        if (result.modifiedCount === 0) {
            return NextResponse.json(
                { message: "No document found with the provided ID." },
                { status: 404 }
            );
        }

        // Return success response with updated data
        return NextResponse.json({ message: "Data updated successfully!", data: updateData });

    } catch (error) {
        // Handle any errors that occur during the process
        return NextResponse.json({ message: error.message }, { status: 500 });
    } finally {
        // Ensure database connection is properly closed
        await client.close();
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