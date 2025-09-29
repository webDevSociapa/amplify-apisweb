import { Suspense } from 'react';

import ContactUs from '@/components/common/Pages/ContactUs';

import Loading from '../../loading';


export const metadata = {
  title: 'Apis Honey | Contact Us',
  description:
    'Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form.',
  robots: 'index, follow',
  openGraph: {
    title: 'Apis India | Contact Us',
    description:
      'Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form.',
    url: 'http://www.apisindia.com/en/contact-us',
    siteName: 'Apis India',
    locale: 'en_IN',
    type: 'website',
  },
  twitter: {
    title: 'Apis India | Contact Us',
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
      <ContactUs initialData={[]} />
    </Suspense>
  );
}
