import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";

export async function POST(req, res) {
    try {
        const body = await req.json();

        const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
        const client = new MongoClient(uri);

        try {
            const database = client.db('newApis');
            const formData = database.collection('newApis01');
            const data = await formData.insertOne(body);
            return NextResponse.json(
                { message: 'Message Sent Successfully' },
                { status: 200 },
            );
        } finally {
            await client.close();
        }
    } catch (error) {
        return NextResponse.json(
            { message: error.message },
            { status: 500 },
        );
    }
}