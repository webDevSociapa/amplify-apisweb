import { MongoClient } from "mongodb";
import { NextResponse } from "next/server";
import AWS from "aws-sdk";
import { v4 as uuidv4 } from "uuid";

// MongoDB configuration
const uri = "mongodb+srv://webdev:2OmPVj8DUdEaU1wR@apisindia.38dfp.mongodb.net";
const client = new MongoClient(uri);
const dbName = "our-Brand";
const collectionName = "productDetails";

// AWS S3 configuration
const s3 = new AWS.S3({
  accessKeyId: process.env.AWS_ACCESS_KEY_ID,
  secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY,
  region: process.env.AWS_REGION,
});

const bucketName = process.env.AWS_BUCKET_NAME;

async function connectToDb() {
  await client.connect();
  return client.db(dbName).collection(collectionName);
}

// Helper function to upload an image to S3
async function uploadImageToS3(file) {
  const uniqueFileName = `${uuidv4()}_${file.name}`;
  const uploadParams = {
    Bucket: bucketName,
    Key: `products/${uniqueFileName}`,
    Body: Buffer.from(await file.arrayBuffer()),
    ContentType: file.type,
  };

  const uploadResult = await s3.upload(uploadParams).promise();
  return uploadResult.Location;
}

// POST: Add a new product with image upload
export async function POST(req) {
  try {
    const formData = await req.formData();

    const title = formData.get("title");
    const products = JSON.parse(formData.get("products")); // Assuming `products` is passed as a JSON string
    const bannerImage = formData.get("bannerImage"); // File object

    if (!bannerImage || !title) {
      return NextResponse.json(
        { message: "Title and Banner image are required" },
        { status: 400 }
      );
    }
    const updatedProducts = await Promise.all(
      products.map(async (product) => {
        const imageFields =  ["img", "back_img", "product_img_1", "product_img_2"];
        const updatedProduct = { ...product };
        console.log("updatedProduct",updatedProduct);
        for (const field of imageFields) {
          const image = formData.get(field);
          if (image) {
            const uniqueImageFileName = `${uuidv4()}_${image.name}`;
            const uploadParams = {
              Bucket: bucketName,
              Key: `products/${uniqueImageFileName}`,
              Body: Buffer.from(await image.arrayBuffer()),
              ContentType: image.type,
            };
            const uploadResult = await s3.upload(uploadParams).promise();
            updatedProduct[field] = uploadResult.Location;
            console.log("uploadResult",uploadResult);
            
          }
        }
        return updatedProduct;
      })
    );
    console.log("updatedProducts",updatedProducts);
    
    const collection = await connectToDb();
    const newProduct = {
      title,
      products: updatedProducts,
      // bannerImage: bannerImageUrl,
      createdAt: new Date(),
    };

    console.log("newProduct",newProduct);
    

    // Insert product details and retrieve the inserted _id
    const result = await collection.insertOne(newProduct);
    const insertedId = result.insertedId;

    // Update the products array to include the _id
    const finalProducts = updatedProducts.map((product) => ({
      ...product,
      _id: insertedId, // Attach the MongoDB _id to each product
    }));

    // Update the MongoDB document with the new products array
    await collection.updateOne(
      { _id: insertedId },
      { $set: { products: finalProducts } }
    );

    return NextResponse.json({ message: "Product added successfully", result });
  } catch (error) {
    console.error("Error adding product:", error);
    return NextResponse.json(
      { message: `An error occurred: ${error.message}` },
      { status: 500 }
    );
  } finally {
    await client.close();
  }
}


// GET: Retrieve all products or a specific one by ID
export async function GET(req) {
  try {
    const url = new URL(req.url);
    const id = url.searchParams.get("id");

    const collection = await connectToDb();
    let query = {};
    if (id) {
      query = { id: parseInt(id, 10) };
    }

    const data = await collection.find(query).toArray();
    if (data.length === 0) {
      return NextResponse.json({ message: "No product found" }, { status: 404 });
    }

    return NextResponse.json(data);
  } catch (error) {
    console.error("Error retrieving product data:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } finally {
    await client.close();
  }
}

// PUT: Update product details by ID
export async function PUT(req) {
  try {
    const body = await req.json();
    const { id, ...updateData } = body;

    if (!id) {
      return NextResponse.json({ message: "Product ID is required" }, { status: 400 });
    }

    const collection = await connectToDb();
    const result = await collection.updateOne(
      { id: parseInt(id, 10) },
      { $set: { ...updateData, updatedAt: new Date() } },
      { upsert: false }
    );

    if (result.matchedCount === 0) {
      return NextResponse.json({ message: "No product found to update" }, { status: 404 });
    }

    return NextResponse.json({ message: "Product updated successfully", result });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json({ message: "An error occurred" }, { status: 500 });
  } finally {
    await client.close();
  }
}
