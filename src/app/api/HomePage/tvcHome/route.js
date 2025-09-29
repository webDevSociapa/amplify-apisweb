
import {MongoClient} from "mongodb";
import { NextResponse } from "next/server";
import { ObjectId } from 'mongodb'; // Import ObjectId


const uri ="mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client =  new MongoClient(uri)
const dbName =  "tvcHome";
const collectionName = "tvcHome_01";

async function connectToDb(){
    await  client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}


export async function POST(req){
    try{
        const body = await  req.json();
        const {thumbnail,videoUrl} = body;

        if(!thumbnail || !videoUrl){
            return new NextResponse("Please enter thumbnail && videoUrl", {status: 400})
        }
        const collection = await connectToDb();
        const Getdata = await collection.find({}).toArray();  
        
        // if(Getdata.length === 0 && bannerText.length > 6){
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
      const body = await req.json();
      const { id, videoUrl, thumbnail } = body;
  
      if (!id) {
        return NextResponse.json(
          { message: "ID is required." },
          { status: 400 }
        );
      }
  
      // Validate MongoDB ObjectId format
      if (!ObjectId.isValid(id)) {
        return NextResponse.json(
          { message: "Invalid ID format." },
          { status: 400 }
        );
      }
  
      const updateFields = {};
      if (videoUrl) updateFields.videoUrl = videoUrl;
      if (thumbnail) updateFields.thumbnail = thumbnail;
  
      if (Object.keys(updateFields).length === 0) {
        return NextResponse.json(
          { message: "At least one of videoUrl or thumbnail is required." },
          { status: 400 }
        );
      }
  
      const collection = await connectToDb();
      const result = await collection.updateOne(
        { _id: new ObjectId(id) }, // Use the provided id to find the document
        { $set: updateFields }
      );
  
      if (result.matchedCount === 0) {
        return NextResponse.json(
          { message: "No document found with the provided ID." },
          { status: 404 }
        );
      }
  
      return NextResponse.json({
        message: "Data updated successfully!",
        data: { id, ...updateFields },
      });
    } catch (error) {
      return NextResponse.json(
        { message: error.message },
        { status: 500 }
      );
    } finally {
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