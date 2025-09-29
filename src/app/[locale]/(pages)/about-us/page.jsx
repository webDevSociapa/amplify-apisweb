import { Suspense } from 'react';

import AboutUs from '@/components/common/Pages/AboutUs';

import Loading from '../../loading';


export const metadata = {
  title: 'Buy Best Organic Honey in India | Apis India',
  description:
    'Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
  robots: 'index, follow',
  openGraph: {
    title: 'Buy Best Organic Honey in India | Apis India',
    description:
      'Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
    url: 'http://www.apisindia.com/aboutus.php',
    siteName: 'Apis India',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title: 'Buy Best Organic Honey in India | Apis India',
    description:
      'Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
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
      <AboutUs initialData={[]} />
    </Suspense>
  );
}
