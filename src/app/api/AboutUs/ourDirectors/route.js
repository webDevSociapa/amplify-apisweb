import { MongoClient, ObjectId } from 'mongodb';
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';
import { NextResponse } from 'next/server';

// MongoDB configuration
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "AboutusBanner";
const collectionName = "ourDirectors";

// AWS S3 configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const bucketName = process.env.AWS_BUCKET_NAME;

// Helper function to connect to MongoDB
async function connectToDb() {
    await client.connect();
    const database = client.db(dbName);
    return database.collection(collectionName);
}

// GET API: Fetch all person details
export async function GET(req) {
    try {
        const collection = await connectToDb();
        const data = await collection.find({}).toArray();

        if (!data || data.length === 0) {
            return NextResponse.json({ message: "No data found" }, { status: 404 });
        }

        return NextResponse.json({ data }, { status: 200 });
    } catch (error) {
        console.error("Error fetching data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// PUT API: Update person details
export async function PUT(req) {
    try {
        const formData = await req.formData();
        const id = formData.get('id');
        const personName = formData.get('person[Name]');
        const personDesignation = formData.get('person[Designation]');
        const personDescription = formData.get('person[Description]');
        const bannerImage = formData.get('bannerImage');

        if (!id) {
            return NextResponse.json({ message: "ID is required for updating details" }, { status: 400 });
        }

        const collection = await connectToDb();

        const updateFields = {};
        if (personName) updateFields.Name = personName;
        if (personDesignation) updateFields.Designation = personDesignation;
        if (personDescription) updateFields.Description = personDescription;

        if (bannerImage) {
            const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
            const uploadParams = {
                Bucket: bucketName,
                Key: `AboutUs/${uniqueFileName}`,
                Body: Buffer.from(await bannerImage.arrayBuffer()),
                ContentType: bannerImage.type,
            };

            const uploadResult = await s3.upload(uploadParams).promise();
            updateFields.AddImage = uploadResult.Location;
        }

        const result = await collection.updateOne(
            { _id: new ObjectId(id) },
            { $set: updateFields }
        );

        if (result.matchedCount === 0) {
            return NextResponse.json({ message: "Person not found" }, { status: 404 });
        }

        return NextResponse.json({ message: "Person details updated successfully" }, { status: 200 });
    } catch (error) {
        console.error("Error updating data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}

// POST API: Add a new person
export async function POST(req) {
    try {
        const formData = await req.formData();
        const personName = formData.get('person[Name]');
        const personDesignation = formData.get('person[Designation]');
        const personDescription = formData.get('person[Description]');
        const bannerImage = formData.get('bannerImage');

        if (!personName || !personDesignation || !personDescription || !bannerImage) {
            return NextResponse.json({
                message: "All fields (Name, Designation, Description, bannerImage) are required",
            }, { status: 400 });
        }

        const uniqueFileName = `${uuidv4()}_${bannerImage.name}`;
        const uploadParams = {
            Bucket: bucketName,
            Key: `AboutUs/${uniqueFileName}`,
            Body: Buffer.from(await bannerImage.arrayBuffer()),
            ContentType: bannerImage.type,
        };

        const uploadResult = await s3.upload(uploadParams).promise();
        const imageUrl = uploadResult.Location;

        const collection = await connectToDb();
        const result = await collection.insertOne({
            AddImage: imageUrl,
            Name: personName,
            Designation: personDesignation,
            Description: personDescription,
            createdAt: new Date(),
        });

        return NextResponse.json({
            message: "Person added successfully",
            data: result.insertedId,
        }, { status: 201 });
    } catch (error) {
        console.error("Error adding data:", error);
        return NextResponse.json({ message: "Internal Server Error" }, { status: 500 });
    }
}
