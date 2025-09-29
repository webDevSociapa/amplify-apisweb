import Loading from "@/app/[locale]/loading";
import JoinOurTeam from "@/components/common/Pages/Careers/joinOurTeam";
import LifeAtApis from "@/components/common/Pages/Careers/lifeAtApis";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <JoinOurTeam initialData={[]} />
    </Suspense>
  );
}
