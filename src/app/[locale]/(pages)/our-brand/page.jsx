import { Suspense } from 'react';

import OurBrand from '@/components/common/Pages/OurBrand';

import Loading from '../../loading';

export const metadata = {
  title: 'Pure And Natural Products - Best Honey, Best Jam, Best Pickle, Quality Dates | Apis India',
  description:
    'Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
  openGraph: {
    title: 'Pure And Natural Products - Best Honey, Best Jam, Best Pickle, Quality Dates | Apis India',
    description:
      'Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
    siteName: 'https://www.apisIndia.com/product.php',
  },
  twitter: {
    title: 'Pure And Natural Himalayan Products | Apis India',
    description:
      'Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
  },
  other: {
    'robots': 'index, follow',
    'googlebot': 'index, follow',
    'msnbot': 'index, follow',
    'YahooSeeker': 'index, follow',
    'itemProp:title': 'Pure And Natural Himalayan Products | Apis India',
    'itemProp:description':
      'Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves.',
    'format-detection': 'telephone=no',
  },
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
};


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <OurBrand initialData={[]} />
    </Suspense>
  );
}
