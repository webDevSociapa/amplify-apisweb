
import {MongoClient} from "mongodb";
import { NextResponse } from "next/server";

const uri ="mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client =  new MongoClient(uri)
const dbName =  "BannerText";
const collectionName = "BannerText_01";

async function connectToDb(){
    await  client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}


export async function POST(req){
    try{
        const body = await  req.json();
        const {bannerText} = body;

        if(!bannerText){
            return new NextResponse("Please enter banner text", {status: 400})
        }
        const collection = await connectToDb();
        const Getdata = await collection.find({}).toArray();  
        
        if(Getdata.length === 0 && bannerText.length > 6){
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
export async function PUT(req){
    try{
        const body = await req.json();
        console.log("body",body);
        
        const {bannerText} = body;

        if(!bannerText){
            return NextResponse.json({message:"Edit Successfully"},{status: 400})
        }
        const collection = await  connectToDb()
        const result =  await collection.updateOne({},{$set:{bannerText}});

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