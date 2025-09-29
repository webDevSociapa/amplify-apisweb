import { MongoClient } from "mongodb";
import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req) {
  try {
    const body = await req.json();
    const { fullName, cityLocation, emailAddress, phoneNumber, message } = body;

    // MongoDB connection
    const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
    const client = new MongoClient(uri);

    try {
      await client.connect(); // ✅ Ensure connection before using
      const database = client.db("newApis");
      const formData = database.collection("newApis01");
      await formData.insertOne(body);

      // Setup Nodemailer transporter
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "webdev@sociapa.com",
          pass: "oilihgfduptzvxyp", // ✅ App password
        },
      });

      // Email content
      const mailOptions = {
        from: "webdev@sociapa.com", // ✅ Always your verified sender
        to: ["care@apisindia.com", "hr@apisindia.com"],
        replyTo: emailAddress, // ✅ Use replyTo instead
        subject: "New Message from Contact Form",
        text: `
Full Name: ${fullName}
City Location: ${cityLocation}
Email Address: ${emailAddress}
Phone Number: ${phoneNumber}

Message:
${message}
        `,
      };

      // Send email
      await transporter.sendMail(mailOptions);

      return NextResponse.json(
        {
          message: "Message sent and email delivered successfully",
          status: 200,
          body,
        },
        { status: 200 }
      );
    } finally {
      await client.close(); // ✅ Always close connection
    }
  } catch (error) {
    console.error("Error handling POST request:", error);
    return NextResponse.json({ message: error.message }, { status: 500 });
  }
}
