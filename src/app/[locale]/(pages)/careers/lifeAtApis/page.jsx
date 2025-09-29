import Loading from "@/app/[locale]/loading";
import LifeAtApis from "@/components/common/Pages/Careers/lifeAtApis";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <LifeAtApis initialData={[]} />
    </Suspense>
  );
}
