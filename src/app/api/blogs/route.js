import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "ApisBlog";
const collectionName = "ApisBlog01";

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID, 
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY, 
    region: process.env.AWS_REGION 
});

const bucketName = "apisindia";

async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

export async function POST(req) {
    try {
        const formData = await req.formData();
        const blogImage = formData.get('blogImage');
        const blogTitle = formData.get('blogTitle');
        const contentData = formData.get('contentData');
        const blogDate = formData.get('blogDate');
        const desc = formData.get('desc');

        if (!blogImage || !blogTitle || !contentData || !blogDate || !desc) {
            return NextResponse.json({ message: "All fields are required" }, { status: 400 });
        }

        const uniqueFileName = `${uuidv4()}_${blogImage.name}`;
        const uploadParams = {
            Bucket: bucketName,
            Key: `blogs/${uniqueFileName}`,
            Body: Buffer.from(await blogImage.arrayBuffer()),
            ContentType: blogImage.type
        };

        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location;

        const collection = await connectToDb();
        await collection.insertOne({
            blogImage: imageUrl,
            blogTitle,
            contentData,
            blogDate,
            desc,
            hideShow: true,
            createdAt: new Date()
        });

        return NextResponse.json({ message: "Blog data uploaded successfully", imageUrl });
    } catch (error) {
        console.error("Error uploading blog data:", error.message || error);
        return NextResponse.json({ message: `An error occurred: ${error.message}` }, { status: 500 });
    }
}

export async function PUT(req) {
    try {
        const formData = await req.formData();

        // Destructure the fields from the form data
        const { id, blogTitle, contentData, blogDate, desc, hideShow } = Object.fromEntries(formData.entries());
        // Get the blog image from form data (optional)
        const blogImage = formData.get('blogImage');

        // Check if ID and other required fields are provided
        if (!id || !blogTitle || !contentData || !blogDate || !desc) {
            return NextResponse.json({ message: "All fields except the image are required" }, { status: 400 });
        }

        // Create an object to hold the fields to be updated
        const updateData = {};

        // Check if the fields are provided and update them accordingly
        if (blogTitle) updateData.blogTitle = blogTitle;
        if (contentData) updateData.contentData = contentData;
        if (blogDate) updateData.blogDate = blogDate;
        if (desc) updateData.desc = desc;
        if (typeof hideShow === "boolean") updateData.hideShow = hideShow; // Ensure the hideShow is a boolean before updating

        // If the image is provided, upload it to AWS S3 and add the image URL to the update data
        if (blogImage) {
            const uniqueFileName = `${uuidv4()}_${blogImage.name}`;
            const uploadParams = {
                Bucket: bucketName,
                Key: `blogs/${uniqueFileName}`,
                Body: Buffer.from(await blogImage.arrayBuffer()),
                ContentType: blogImage.type
            };

            const uploadResult = await s3.upload(uploadParams).promise();
            const imageUrl = uploadResult.Location; // Get the S3 URL of the uploaded image

            // Add the image URL to the update data
            updateData.blogImage = imageUrl;
        }

        // Connect to the MongoDB database and update the document by its ID
        const collection = await connectToDb();
        const result = await collection.updateOne(
            { _id: new ObjectId(id) }, // Find document by ID
            { $set: updateData } // Update only the fields that have been provided
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ message: "No document found with the provided ID" }, { status: 404 });
        }

        return NextResponse.json({ message: "Content updated successfully", result });
    } catch (error) {
        console.error("Error updating content:", error);
        return NextResponse.json({ message: "An error occurred while updating the content" }, { status: 500 });
    }
}


export async function GET(req) {
    try {
        const url = new URL(req.url);
        const id = url.searchParams.get("id");

        const collection = await connectToDb();
        
        let data;
        if (id) {
            data = await collection.findOne({ _id: new ObjectId(id) });
            if (!data) {
                return NextResponse.json({ message: "No document found with the provided ID" }, { status: 404 });
            }
        } else {
            data = await collection.find({}).toArray();
            if (data.length === 0) {
                return NextResponse.json({ message: "No data found" }, { status: 404 });
            }
        }

        return NextResponse.json(data);
    } catch (error) {
        console.error("Error retrieving data:", error);
        return NextResponse.json({ message: "An error occurred" }, { status: 500 });
    }
}
