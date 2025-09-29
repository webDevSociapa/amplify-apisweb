import { NextResponse } from "next/server";
import { jsPDF } from "jspdf";
import fs from 'fs/promises';
import path from 'path';

export async function POST(req) {
    try {
        const body = await req.json();
        const { batch_number } = body;

        console.log(`Searching for batch number: ${batch_number} in hardcoded data`);

        // ✅ Hardcoded data array
        const data = [
            {"id":"1","batch_number":"DS21KF255","packed_on":"Nov-23","report_no":"IFS-231230089","report_no1":"FA20231205-056-092\r\nAIL/FG/2916/2023"},
            {"id":"2","batch_number":"DS28KF257","packed_on":"Dec-23","report_no":"IFS-231130088","report_no1":"FA20231205-056-093\r\nAIL/FG/2919/2023"},
            {"id":"3","batch_number":"DS20AG280","packed_on":"Jan-24","report_no":"IFS-240212152R1\r\nIFS-240201007","report_no1":"FA20240131-077-313\r\nAIL/FG/2984/2024"},
            {"id":"4","batch_number":"DS31AG285","packed_on":"Feb-24","report_no":"IFS-240216011","report_no1":"FA20240214-040-116\r\nAIL/FG/2999/2023"},
            {"id":"5","batch_number":"DS23BG292","packed_on":"Feb-24","report_no":"IFS-240301003\r\nIFS-240301003S","report_no1":"FA20240305-019-056\r\nAIL/FG/3048/2024"},
            {"id":"18","batch_number":"DS31HG043","packed_on":"Sept-24","report_no":"IFS-240902093","report_no1":"AIL/FG/4064/2024"},
            {"id":"19","batch_number":"DS02LG091","packed_on":"Nov-24","report_no":"IFS-241205170","report_no1":"AIL/FG/4344/2024"},
            {"id":"20","batch_number":"DS04AH099","packed_on":"Jan-25","report_no":"IFS-250108004","report_no1":"AIL/FG/4406/2025"},
            {"id":"21","batch_number":"DS13BH115","packed_on":"Feb-25","report_no":"IFS-250217004","report_no1":"AIL/FG/4456/2025"}
        ];

        // ✅ Find batch data from hardcoded array
        const specificBatchData = data.find(item => item.batch_number === batch_number);

        if (specificBatchData) {
            console.log("Specific batch data found:", specificBatchData);

            // Create PDF with fixed images and batch data
            const pdf = await createPDF(specificBatchData);

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
        format: [210, 297] // A4
    });

    const imagePaths = [
        path.join(process.cwd(), 'public', 'Organic01.jpg'),
        path.join(process.cwd(), 'public', 'Organic02.jpg'),
        path.join(process.cwd(), 'public', 'Organic03.jpg'),
    ];

    for (let i = 0; i < imagePaths.length; i++) {
        if (i > 0) doc.addPage();

        const imageData = await fs.readFile(imagePaths[i]);
        const base64Image = imageData.toString('base64');
        doc.addImage('data:image/jpeg;base64,' + base64Image, 'JPEG', 0, 0, 210, 297);

        const batchText = batchData.batch_number || '';
        const reportNo = batchData.report_no || '';
        const reportNo1 = batchData.report_no1 || '';

        if (i === 0) {
            doc.setFontSize(10);
            doc.setTextColor(0, 0, 0);

            // ✅ First location for Batch No. on Page 0
            doc.text(batchText, 38, 148); // existing Green block Batch No.

            doc.setFontSize(9);
            doc.text(reportNo, 108, 234); // Certificate header report number

            // ✅ Second location for Batch No. just below reportNo
            doc.text(batchText, 108, 244); // adjust y as per design

            doc.setFontSize(10);
        }

        if (i === 1) {
            doc.setFontSize(11);
            doc.setTextColor(0, 0, 0);
            doc.text(batchText, 110, 54); // Batch No. in Page 2 layout
        }
    }

    const pdfBuffer = doc.output('arraybuffer');
    return Buffer.from(pdfBuffer);
}
