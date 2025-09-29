import { MongoClient, ObjectId } from "mongodb";
import { NextResponse } from "next/server";
import AWS from 'aws-sdk';
import { v4 as uuidv4 } from 'uuid';

// AWS S3 Configuration
const s3 = new AWS.S3({
    accessKeyId: process.env.AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
    region: process.env.AWS_REGION,
});
const bucketName = process.env.AWS_BUCKET_NAME;

// MongoDB Configuration
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri, { useUnifiedTopology: true });
let dbCollection;

async function getDbCollection() {
    if (!dbCollection) {
        await client.connect();
        const db = client.db("HomeBanner");
        dbCollection = db.collection("HomeBanner_01");
    }
    return dbCollection;
}

// POST API - Upload Video
export async function POST(req) {
    try {
        const formData = await req.formData();
        const videoFile = formData.get('videoFile');

        if (!videoFile) {
            return NextResponse.json({ message: "Video file is required" }, { status: 400 });
        }

        // Generate unique file name
        const uniqueFileName = `${uuidv4()}_${videoFile.name}`;

        // Upload video to S3
        const uploadParams = {
            Bucket: bucketName,
            Key: `homeBanner/${uniqueFileName}`,
            Body: Buffer.from(await videoFile.arrayBuffer()),
            ContentType: videoFile.type,
        };
        const uploadResult = await s3.upload(uploadParams).promise();

        // Save video URL and metadata in MongoDB
        const collection = await getDbCollection();
        const videoData = {
            videoFile: uploadResult.Location,
            hideShow: true,
            createdAt: new Date(),
        };
        const result = await collection.insertOne(videoData);

        return NextResponse.json({
            message: "Video uploaded successfully",
            videoUrl: uploadResult.Location,
            videoId: result.insertedId,
        });
    } catch (error) {
        console.error("Error uploading video:", error.message || error);
        return NextResponse.json({ message: `Error during upload: ${error.message}` }, { status: 500 });
    }
}

// GET API - Retrieve Videos
export async function GET() {
    try {
        const collection = await getDbCollection();
        const videos = await collection.find({}, { projection: { videoFile: 1, hideShow: 1 } }).toArray();
        return NextResponse.json(videos);
    } catch (error) {
        console.error("Error retrieving videos:", error.message || error);
        return NextResponse.json({ message: `Error retrieving data: ${error.message}` }, { status: 500 });
    }
}

// DELETE API - Delete Video
export async function DELETE(req) {
    try {
        const { id } = await req.json();
        if (!id) {
            return NextResponse.json({ message: "Video ID is required" }, { status: 400 });
        }

        const collection = await getDbCollection();
        const video = await collection.findOne({ _id: new ObjectId(id) });

        if (!video) {
            return NextResponse.json({ message: "Video not found" }, { status: 404 });
        }

        const videoKey = video.videoFile.split('.com/')[1];

        // Delete video from S3
        await s3.deleteObject({ Bucket: bucketName, Key: videoKey }).promise();

        // Delete video metadata from MongoDB
        const result = await collection.deleteOne({ _id: new ObjectId(id) });

        return NextResponse.json({
            message: "Video deleted successfully",
            result,
        });
    } catch (error) {
        console.error("Error deleting video:", error.message || error);
        return NextResponse.json({ message: `Error deleting video: ${error.message}` }, { status: 500 });
    }
}
