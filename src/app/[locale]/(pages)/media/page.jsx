import { Suspense } from 'react';

import Media from '@/components/common/Pages/Media';

import Loading from '../../loading';


export const metadata = {
  title: 'Media - A digital tale of our journey | Apis India',
  description:
    'Himalayan Flora Honey. From the foothills of the Himalayan Mountains, comes a honey that is as pure as the Himalayas. Enjoy the taste of fresh Himalayan honey from Apis India.',
  robots: 'index, follow',
  openGraph: {
    title: 'Best & Pure Honey | FSSAI Approved | Apis India',
    description:
      'Himalayan Flora Honey. From the foothills of the Himalayan Mountains, comes a honey that is as pure as the Himalayas. Enjoy the taste of fresh Himalayan honey from Apis India.',
    url: 'http://www.apisIndia.com/media.php',
    siteName: 'Apis India',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title: 'Best & Pure Honey | FSSAI Approved | Apis India',
    description:
      'Himalayan Flora Honey. From the foothills of the Himalayan Mountains, comes a honey that is as pure as the Himalayas. Enjoy the taste of fresh Himalayan honey from Apis India.',
    card: 'summary',
  },
  metadataBase: new URL('http://www.apisIndia.com'),
  viewport: 'width=device-width, initial-scale=1, shrink-to-fit=no',
  formatDetection: {
    telephone: false,
  },
};


export default async function Page() {
  return (
    <Suspense fallback={<Loading />}>
      <Media initialData={[]} />
    </Suspense>
  );
}
