import Loading from "@/app/[locale]/loading";
import VisionMission from "@/components/common/Pages/AboutUs/vision-mision";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <VisionMission initialData={[]} />
    </Suspense>
  );
}
