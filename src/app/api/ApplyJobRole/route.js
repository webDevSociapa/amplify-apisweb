import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import nodemailer from 'nodemailer';

export async function POST(req){
    try{
        const formData = await req.formData();
        const selectJob = formData.get('selectJob');
        const fullName = formData.get('fullName');
        const emailAddress = formData.get('emailAddress');
        const phoneNumber = formData.get('phoneNumber');
        const resume = formData.get('resume');

        let resumeFileName = '';
        let resumeBase64 = '';
        if (resume && resume.name) {
            const bytes = await resume.arrayBuffer();
            const buffer = Buffer.from(bytes);
            resumeFileName = resume.name;
            resumeBase64 = buffer.toString('base64');
        }

        const body = {
            selectJob,
            fullName,
            emailAddress,
            phoneNumber,
            resumeFileName
        };

        const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
        const client = new MongoClient(uri);

        try{
            const database = client.db('JobRole');
            const formDataCollection = database.collection('JobRole01');
            const data = await formDataCollection.insertOne(body);
            
            const transporter = nodemailer.createTransport({
                service: 'gmail',
               auth: {
              user: 'webdev@sociapa.com', // ✅ Full Gmail
              pass: 'oilihgfduptzvxyp',         // ✅ App password (no spaces)
            },
              });
              
              const mailOptions = {
                from: emailAddress,
                to: 'recruitment@apisindia.com',
                subject: 'New Job Application',
                html: `
                  <p><strong>Applying Job:</strong> ${selectJob}</p>
                  <p><strong>Full Name:</strong> ${fullName}</p>
                  <p><strong>Email Address:</strong> ${emailAddress}</p>
                  <p><strong>Phone Number:</strong> ${phoneNumber}</p>
                  <p><strong>Resume:</strong> ${resumeFileName}</p>
                `,
                attachments: resumeBase64 ? [
                  {
                    filename: resumeFileName,
                    content: resumeBase64,
                    encoding: 'base64'
                  }
                ] : []
              };
              
              await transporter.sendMail(mailOptions);
              
              return NextResponse.json({ message: 'Application submitted successfully', data: body, status: 200 }); 
        }
        catch(error){
            console.log("error", error);
            return NextResponse.json({ message: 'Failed to submit application' }, { status: 500 });
        }
        finally{
            await client.close();
        }
    }
    catch(error){
        console.log("error", error);
        return NextResponse.json({ message: error.message }, { status: 500 });
    }       
}
