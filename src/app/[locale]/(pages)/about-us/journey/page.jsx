import Loading from "@/app/[locale]/loading";
import Journey from "@/components/common/Pages/AboutUs/Journey";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Journey initialData={[]} />
    </Suspense>
  );
}
