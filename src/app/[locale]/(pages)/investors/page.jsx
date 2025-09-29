import { Suspense } from 'react';

import Investors from '@/components/common/Pages/Investors';

import Loading from '../../loading';

export const metadata = {
  title: 'AIL - Investors'
};


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Investors initialData={[]} />
    </Suspense>
  );
}
