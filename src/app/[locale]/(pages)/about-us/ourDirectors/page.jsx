import Loading from "@/app/[locale]/loading";
import OurDirectors from "@/components/common/Pages/AboutUs/ourDirectors";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurDirectors initialData={[]} />
    </Suspense>
  );
}
