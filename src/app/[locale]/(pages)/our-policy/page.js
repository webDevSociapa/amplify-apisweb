import { Suspense } from 'react';


import Loading from '../../loading';
import OurPolicy from '@/components/common/Pages/OurPolicy';

export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurPolicy initialData={[]} />
    </Suspense>
  );
}
