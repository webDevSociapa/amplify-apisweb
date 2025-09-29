import Loading from "@/app/[locale]/loading";
import ApisInTheNews from "@/components/common/Pages/Media/apisIntheNews";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ApisInTheNews initialData={[]} />
    </Suspense>
  );
}
