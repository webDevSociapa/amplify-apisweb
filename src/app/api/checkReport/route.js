import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        const body = await req.json();
        const { batch_number } = body;

        const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
        const client = new MongoClient(uri);

        try {
            console.log("Attempting to connect to MongoDB...");
            await client.connect();
            console.log("Successfully connected to MongoDB.");

            const database = client.db('ProductReport');
            const collection = database.collection('product_report01');

            console.log(`Searching for batch number: ${batch_number}`);

            // ✅ Updated query to search directly at root level
            const batchData = await collection.findOne(
                { batch_number: batch_number } // assuming batch_number is at root level
            );

            if (batchData) {
                console.log("Specific batch data found:", batchData);

                // Create PDF with fixed images and batch data
                const pdf = await createPDF(batchData);

                return new NextResponse(pdf, {
                    status: 200,
                    headers: {
                        'Content-Type': 'application/pdf',
                        'Content-Disposition': `attachment; filename="batch_${batch_number}.pdf"`,
                    },
                });
            } else {
                console.log("No batch data found for batch number:", batch_number);
                return NextResponse.json(
                    { message: 'Batch not found' },
                    { status: 404 },
                );
            }
        } catch (dbError) {
            console.error("Database operation failed:", dbError);
            return NextResponse.json(
                { message: 'Database operation failed', error: dbError.message },
                { status: 500 },
            );
        } finally {
            await client.close();
            console.log("MongoDB connection closed.");
        }
    } catch (error) {
        console.error("Request processing failed:", error);
        return NextResponse.json(
            { message: 'Request processing failed', error: error.message },
            { status: 500 },
        );
    }
}

async function createPDF(batchData) {
    const doc = new jsPDF({
        orientation: 'portrait',
        unit: 'mm',
        format: [210, 297] // Standard A4 size
    });

    const imagePaths = [
        path.join(process.cwd(), 'public', 'apispdf03.jpg'),
        path.join(process.cwd(), 'public', 'apispdf01.jpg'),
        path.join(process.cwd(), 'public', 'apispdf02.jpg'),
    ];

    for (let i = 0; i < imagePaths.length; i++) {
        if (i > 0) {
            doc.addPage();
        }
        const imageData = await fs.readFile(imagePaths[i]);
        doc.addImage(imageData, 'JPEG', 10, 10, 190, 277); // Full page image with margins

        if (i === 0) {
            console.log(batchData, "batchData");
            doc.setFontSize(8);
            doc.setFont(undefined, 'normal');

            const batchText = `${batchData.batch_number || ''}`;
            const reportNo = `${batchData.report_no || ''}`;
            const reportNo1 = `${batchData.report_no1 || ''}`;

            const textWidth = doc.getStringUnitWidth(batchText) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            const textX = (doc.internal.pageSize.width - textWidth) / 2 - 20;

            const textWidth1 = doc.getStringUnitWidth(reportNo) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            const textX1 = (doc.internal.pageSize.width - textWidth1) / 2 + 10;

            const textWidth2 = doc.getStringUnitWidth(reportNo1) * doc.internal.getFontSize() / doc.internal.scaleFactor;
            const textX2 = (doc.internal.pageSize.width - textWidth2) / 2 - 10;

            // ✅ Position each piece of text on separate lines
            doc.text(batchText, textX, 135);
            doc.text(batchText, textX, 225);
            doc.text(reportNo, textX1, 215);
            doc.text(reportNo1, textX2, 219);
        }
    }

    const pdfBuffer = doc.output('arraybuffer');
    return Buffer.from(pdfBuffer);
}
