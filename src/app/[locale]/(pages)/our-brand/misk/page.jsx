import Loading from "@/app/[locale]/loading";
import React, { Suspense } from "react";
import MiskDetails from "@/components/common/Pages/OurBrand/miskDetails";

const Misk = () => {
  return (
    <Suspense fallback={<Loading />}>
      <MiskDetails initialData={[]} />
    </Suspense>
  );
};

export default Misk;
