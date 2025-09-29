import { Suspense } from 'react';

import ContactUs from '@/components/common/Pages/ContactUs';

import FactoryAddress from '@/components/common/Pages/ContactUs/factoryAddress';
import Loading from '@/app/[locale]/loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <FactoryAddress initialData={[]} />
    </Suspense>
  );
}
