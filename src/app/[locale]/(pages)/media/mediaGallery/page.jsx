import Loading from "@/app/[locale]/loading";
import MediaGallery from "@/components/common/Pages/Media/mediaGallery";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <MediaGallery initialData={[]} />
    </Suspense>
  );
}
