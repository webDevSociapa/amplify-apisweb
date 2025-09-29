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
