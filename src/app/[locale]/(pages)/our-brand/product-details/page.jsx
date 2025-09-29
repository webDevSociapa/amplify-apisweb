import Loading from "@/app/[locale]/loading";
import React, { Suspense } from "react";
import ProductDetails from "@/components/common/Pages/OurBrand/ProductDetails.jsx";

const Page = () => {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDetails initialData={[]} />
    </Suspense>
  );
};

export default Page;
