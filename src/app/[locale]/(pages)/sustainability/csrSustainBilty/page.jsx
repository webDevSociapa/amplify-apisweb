import Loading from "@/app/[locale]/loading";
import CsrSustainBility from "@/components/common/Pages/Sustainability/csrSustainBility";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <CsrSustainBility initialData={[]} />
    </Suspense>
  );
}
