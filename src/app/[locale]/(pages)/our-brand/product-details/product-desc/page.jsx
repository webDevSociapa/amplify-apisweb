import { Suspense } from 'react';

import ProductDesc from '@/components/common/Pages/OurBrand/product-desc';
import Loading from '@/app/[locale]/loading';


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <ProductDesc initialData={[]} />
    </Suspense>
  );
}
