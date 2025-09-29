import Loading from "@/app/[locale]/loading";
import OurRecipisData from "@/components/common/Pages/Our-Blog/ourRecipis";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurRecipisData initialData={[]} />
    </Suspense>
  );
}
