import { MongoClient } from "mongodb";
import nodemailer from 'nodemailer';
import { NextResponse } from "next/server";

export  async function POST (req, res) {

  try {
    const body = await req.json();
    
    const {email} = body;

    // MongoDB connection
    const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
    const client = new MongoClient(uri);


  try {
    // Connect to the database and insert form data
    const database = client.db('subscribeEmail');
    const formData = database.collection('subscribeEmail_01');
    const data = await formData.insertOne(body);
    

    // Setup Nodemailer to send an email
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'webdev@sociapa.com', // ✅ Full Gmail
        pass: 'oilihgfduptzvxyp',         // ✅ App password (no spaces)
      },
    });
    

    const mailOptions = {
      from: email, // Sender email (user's email)
      to: ['care@apisindia.com','web@sociapa.com'], // Your email to receive the message
      subject: 'New Message from Subscribe Newsletter',
      text: `
        Email Address: ${email}`,
    };

    await transporter.sendMail(mailOptions);

    // Return success response after saving and sending email
    return NextResponse.json(
      { message: 'Email Subscribe successfully',status: 200, body},
      // { status: 200 }
    );

  } finally {
    await client.close();
  }
} catch (error) {
  console.error('Error handling POST request:', error);
  return NextResponse.json(
    { message: error.message },
    { status: 500 }
  );
}
}




