import OurBlogPage from "@/components/common/Pages/Our-Blog";
import { Suspense } from "react";
import Loading from "../../loading";


export const metadata = {
  title: 'Apis India Newsletter - Purity Is Our Essence In Food',
  description: 'Purity Is Our Essence In Food',
  metadataBase: new URL('https://blog.apisindia.com'),
  alternates: {
    canonical: '/',
    next: '/page/2/',
  },
  openGraph: {
    title: 'Apis India Newsletter',
    description: 'Purity Is Our Essence In Food',
    url: '/',
    siteName: 'Apis India Newsletter',
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    site: '@apis_india',
    title: 'Apis India Newsletter',
    description: 'Purity Is Our Essence In Food',
  },
};


export default function OurBlog(){
    return(
        <Suspense fallback={<Loading />}>
      <OurBlogPage initialData={[]} />
    </Suspense>
    )
}
