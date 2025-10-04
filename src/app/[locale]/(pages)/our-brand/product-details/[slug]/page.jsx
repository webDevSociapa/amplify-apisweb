export async function generateMetadata({ params }) {
  const { slug } = params;

  // Map your product slugs to meta info (fill in from your sheet)
  const metaDataMap = {
    "himalaya-honey": {
      title: "Himalaya Honey | Pure, Raw & Natural Honey from Apis India",
      description:
        "Apis India offers Himalaya Pure Honey – raw, natural, and rich in antioxidants for your health & wellness. Buy authentic honey online today.",
      keywords:
        "Himalaya Honey, Himalaya Pure Honey, Himalaya Raw Honey, Himalaya Natural Honey",
    },
    "regular-honey": {
      title:
        "Apis India Honey – Highest Selling & Most Preferred Squeezy Pack Online | Regular Honey",
      description:
        "Apis India Honey – Buy the highest selling & most preferred squeezy packs. Pure, natural, and fresh honey delivered to your doorstep.",
      keywords: "Highest Selling Squeezy Pack, Most Preferred Squeezy Pack",
    },
    "organic-honey": {
      title:
        "Apis India Honey – Best Honey for Health & Fitness | Natural & Pure Organic Honey",
      description:
        "Apis India Organic Honey – Boost health & fitness with pure, natural honey. Perfect for daily wellness and energy. Order your organic honey online now.",
      keywords: "Honey for Health, Best honey for fitness",
    },
    "infused-honey": {
      title: "Apis India Honey – 500g & 1kg Most Preferred Honey Packs Online",
      description:
        "Apis India Honey – Buy 500g & 1kg most preferred honey packs online. Pure, natural, and fresh honey delivered to your doorstep.",
      keywords:
        "Honey 500g, Honey 1kg, Most preferred honey in 1kg, Most preferred honey in 500g",
    },
    en: {
      title:
        "Apis India Honey – 100g, 250g, 500g & Small Packs | Jam, Best Pickle & Quality Dates",
      description:
        "Apis India Honey – 100g, 250g, 500g & small packs. Shop jam, best pickles & quality dates online. Fresh, natural, and premium quality.",
      keywords:
        "Honey 250g, Honey 100g, Honey small, Jam, Best Pickle, Quality Dates, Honey 500g, Honey 250g",
    },
    // Add more products as needed
  };

  const meta = metaDataMap[slug] || {
    title: "Apis India Honey",
    description: "Discover our range of honey products.",
    keywords: "Honey, Apis India",
  };

  return {
    title: meta.title,
    description: meta.description,
    keywords: meta.keywords,
  };
}

import Loading from "@/app/[locale]/loading";
import React, { Suspense } from "react";
import ProductDetails from "../../../../../../components/common/Pages/OurBrand/product-details/[slug]/page";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails initialData={[]} />
    </Suspense>
  );
};

export default Page;
