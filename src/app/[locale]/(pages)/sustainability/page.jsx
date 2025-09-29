import { Suspense } from 'react';

import Sustainability from '@/components/common/Pages/Sustainability';

import Loading from '../../loading';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Sustainability initialData={[]} />
    </Suspense>
  );
}
