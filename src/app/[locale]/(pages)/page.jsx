import { Suspense } from 'react';

import HomePage from '@/components/common/Pages/HomePage';

import Loading from '../loading';

export const metadata = {
  title: 'Pure And Natural Products - Best Honey, Best Jam, Best Pickle, Quality Dates | Apis India',
  description:
    "Discover the exceptional range of natural honey, dates, jam, pickle, green tea, and preserves at APIS India's official website. Experience the perfect blend of taste, quality, and authenticity in every product.",
  keywords:
    'Natural Honey, Pure Honey, Dates, Jam, Pickle, Green Tea, APIS, APIS India, Apisindia.com',
  robots: 'index, follow',
  openGraph: {
    title:
      'India`s Leading Natural Honey Brand. Discover Dates, Jams, Pickles, Green Tea, Preserves & More - APIS',
    description:
      'APIS is an iconic FMCG brand in India and manufacturer of superior-quality Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves in India. Explore our complete product range at Apisindia.com',
    url: 'http://www.apisindia.com',
    siteName: 'Apis India',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title:
      'India`s Leading Natural Honey Brand. Discover Dates, Jams, Pickles, Green Tea, Preserves & More - APIS',
    description:
      "Discover the exceptional range of natural honey, dates, jam, pickle, green tea, and preserves at APIS India's official website. Experience the perfect blend of taste, quality, and authenticity in every product.",
    card: 'summary',
  },
  metadataBase: new URL('http://www.apisindia.com'),
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  formatDetection: {
    telephone: false,
  },
  verification: {
    google: 'h0iHtFuY87Z7LyV_7QoRurcDdlS9gDYme7XPrcPiqCY',
  },
};


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <HomePage initialData={[]} />
    </Suspense>
  );
}
