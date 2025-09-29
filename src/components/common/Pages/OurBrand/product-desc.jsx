"use client";
import { useSearchParams } from "next/navigation";
import HimalayaHoney0001 from "@/assets/images/OurBrands/himalayaHoney001.jpg";
import Image from "next/image";
import Link from "next/link";

export default function ProductDesc() {
  const searchParams = useSearchParams();
  const rawSelectedProduct = searchParams.get("selectedProduct") || "";

  let selectedProduct;
  try {
    selectedProduct = JSON.parse(rawSelectedProduct);
  } catch (error) {
    selectedProduct = { name: rawSelectedProduct };
  }

  const { product_img_1 } = selectedProduct;

  const defaultDescription = {
    name: "Apis Himalaya Honey",
    image: HimalayaHoney0001,
    description:
      "We are the third-generation entrepreneurs with extensive hands-on knowledge of the trade. Apis brings to you pure natural honey sourced from the beautiful valleys of the Himalayas & across different locations of India. Our amazing range of honey is now also available in convenient packaging!",
    weight: ["100gm", "225gm", "500gm", "1kg"],
    rate: ["₹10", "₹40"],
    nutritionalInfo: [
      { nutrient: "Energy", value: "319 kcal" },
      { nutrient: "Protein", value: "0.3 g" },
      { nutrient: "Carbohydrate", value: "79.5 g" },
      { nutrient: "of which sugars", value: "0.9 g" },
      { nutrient: "Total Fat", value: "0.0 g" },
    ],
    shelfLife: "24 Months",
  };

  const productData =
    selectedProduct.name === "HimalayaHoney"
      ? defaultDescription
      : {
        name: selectedProduct.title || "Organic Honey",
        description:
          selectedProduct.product_desc ||
          "Sourced from the beautiful Kashmir Valley, Apis Organic Honey is an allegory of organic purity. With consistent & delectable natural taste, Apis Organic Honey is patiently extracted & packaged to retain its untouched goodness and flavor!",
        weight: selectedProduct.weight || ["250g", "500g", "1kg"],
        nutritionalInfo: selectedProduct.nutritionalInfo || [],
      };

  return (
    <div className="container mx-auto px-4 py-8 flex flex-col justify-between h-full">
      <div className="flex flex-col items-center">

        {selectedProduct.name === "HimalayaHoney" ? (
          <Image src={HimalayaHoney0001} alt="Himalaya Honey" width={400} height={300} />
        ) : (
          <Image src={product_img_1?.src} alt="Product Image" width={400} height={300} />
        )}
        <div className="mt-auto flex justify-center mb-4">
          <Link
            href="https://www.amazon.in/s?k=organic+honey+apis&crid=219JTIFPTZQV0&sprefix=organic+honey+apis%2Caps%2C209&ref=nb_sb_noss_1"
            target="_blank"
          >
            <button className="border border-[#9F7B49] bg-[#9F7B49] px-6 md:px-12 text-xs md:text-base py-2 md:py-3 font-bold text-white">
              Available on
            </button>
          </Link>
        </div>
        <h1 className="text-3xl font-semibold mt-4">{productData.name}</h1>
        <p className="text-gray-700 text-center mt-2">{productData.description}</p>
      </div>

      <div className="mt-8">
        <h2 className="text-xl font-semibold">Product Details</h2>
        <table className="table-auto border-collapse border border-gray-300 w-full mt-4 text-left">
          <thead>
            <tr className="bg-gray-100">
              <th className="border px-4 py-2">Attribute</th>
              <th className="border px-4 py-2">Details</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border px-4 py-2">Available Weights</td>
              <td className="border px-4 py-2">
                {productData.weight.join(", ")}
              </td>
            </tr>
            {selectedProduct.name === "HimalayaHoney" && (
              <tr>
                <td className="border px-4 py-2">Prices</td>
                <td className="border px-4 py-2">
                  {productData.rate.join(", ")}
                </td>
              </tr>
            )}
            <tr>
              <td className="border px-4 py-2">Shelf Life</td>
              <td className="border px-4 py-2">{productData.shelfLife || "24 months"}</td>
            </tr>
          </tbody>
        </table>
      </div>

      {selectedProduct.name === "HimalayaHoney" && (
        <div className="mt-8">
          <h2 className="text-xl font-semibold">Nutritional Information</h2>
          <table className="table-auto border-collapse border border-gray-300 w-full mt-4 text-left">
            <thead>
              <tr className="bg-gray-100">
                <th className="border px-4 py-2">Nutrient</th>
                <th className="border px-4 py-2">Value</th>
              </tr>
            </thead>
            <tbody>
              {productData.nutritionalInfo.map((info, index) => (
                <tr key={index}>
                  <td className="border px-4 py-2">{info.nutrient}</td>
                  <td className="border px-4 py-2">{info.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}


    </div>

  );
}
