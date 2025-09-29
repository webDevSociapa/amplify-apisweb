import Loading from "@/app/[locale]/loading";
import OurBlogPage from "@/components/common/Pages/Our-Blog";
import OurBlogsData from "@/components/common/Pages/Our-Blog/ourBlog";
import { Suspense } from "react";

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurBlogPage initialData={[]} />
    </Suspense>
  );
}
