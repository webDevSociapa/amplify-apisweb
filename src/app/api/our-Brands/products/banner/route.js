import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid'



const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "Careers";
const collectionName = "apisLife";

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION 
});

const bucketName = process.env.AWS_BUCKET_NAME;
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

export async function POST(req) {
    try {
        const formData = await req.formData();

        // Get data from the form
        const selectedProduct = formData.get('selectedProduct'); // Product selected from dropdown
        const title = formData.get('title'); // Title field
        const productInfo = formData.get('productInfo'); // Product info field
        const bannerImage = formData.get('bannerImage'); // File field

        const bucketName = process.env.AWS_BUCKET_NAME;


       


        if (!selectedProduct) {
            return NextResponse.json({ message: "Product is required" }, { status: 400 });
        }

        const updateData = {
            title,
            productInfo,
            hideShow: true, // Assuming you want to show the updated data by default
        };

        // If a banner image is provided, upload it to S3
        if (bannerImage) {
            const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
            const uploadParams = {
                Bucket: bucketName,
                Key: `product/${uniqueFileName}`,
                Body: Buffer.from(await bannerImage.arrayBuffer()),
                ContentType: bannerImage.type,
            };

            const uploadResult = await s3.upload(uploadParams).promise();
            updateData.bannerImage = uploadResult.Location; // Save uploaded image URL
        }

        // Save data to MongoDB
        const collection = await connectToDb();
        await collection.updateOne(
            { productName: selectedProduct }, // Match by product name
            { $set: updateData },
            { upsert: true } // Create if it doesn't exist
        );

        return NextResponse.json({ message: "Product updated successfully", data: updateData });
    } catch (error) {
        console.error("Error updating product:", error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}
