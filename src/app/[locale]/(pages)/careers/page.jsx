import { Suspense } from 'react';

import Careers from '@/components/common/Pages/Careers';

import Loading from '../../loading';

export const metadata = {
  title: 'Apis India | Join Our Squad',
  description:
    'Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apis India | Join Our Squad',
    description:
      'Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form.',
    url: 'http://www.apisindia.com/en/careers',
    siteName: 'Apis India',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title: 'Apis India | Join Our Squad',
    description:
      'Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form.',
    card: 'summary',
  },
  metadataBase: new URL('http://www.apisindia.com'),
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  formatDetection: {
    telephone: false,
  },
};


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Careers initialData={[]} />
    </Suspense>
  );
}
