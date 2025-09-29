import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "AboutusBanner";
const collectionName = "AboutusBanner_01";

const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
    await client.connect();
    return client.db(dbName).collection(collectionName);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const bannerImage = formData.get('bannerImage'); // File field

        if (!bannerImage) {
            return NextResponse.json({ message: "Banner image is required" }, { status: 400 });
        }

        // Generate a unique filename for the banner image
        const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
        const uploadParams = {
            Bucket: bucketName,
            Key: `AboutUs/${uniqueFileName}`,
            Body: Buffer.from(await bannerImage.arrayBuffer()),
            ContentType: bannerImage.type
        };
        

        // Upload banner image to S3
        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location;

        // Save banner image URL to MongoDB
        const collection = await connectToDb();
        await collection.updateOne(
            {},
            { $set: { bannerImage: imageUrl, hideShow: true } },
            { upsert: true }
        );

        return NextResponse.json({ message: "Banner uploaded successfully", imageUrl });
    } catch (error) {
        console.error("Error uploading banner image:", error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function GET() {
    try {
        const collection = await connectToDb();
        const data = await collection.findOne({}, { projection: { bannerImage: 1, hideShow: 1 } });

        if (!data) {
            return NextResponse.json({ message: "No banner data found" }, { status: 404 });
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving banner data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    } finally {
        await client.close();
    }
}

export async function PUT(req) {
    try {
        const formData = await req.formData();
        const bannerImage = formData.get('bannerImage'); // Extract the bannerImage from formData

        if (!bannerImage) {
            return NextResponse.json({ message: "bannerImage is required" }, { status: 400 });
        }

        // Generate a unique filename for the banner image
        const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
        const uploadParams = {
            Bucket: bucketName,
            Key: `AboutUs/${uniqueFileName}`,
            Body: Buffer.from(await bannerImage.arrayBuffer()),
            ContentType: bannerImage.type
        };

        // Upload banner image to S3
        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location;

        // Save banner image URL to MongoDB
        const collection = await connectToDb();
        const result = await collection.updateOne(
            {},
            { $set: { bannerImage: imageUrl } },
            { upsert: true }
        );

        return NextResponse.json({ message: "Banner image updated successfully", imageUrl });
    } catch (error) {
        console.error("Error updating banner image:", error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    } finally {
        await client.close();
    }
}
