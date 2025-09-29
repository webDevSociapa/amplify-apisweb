import PropTypes from 'prop-types';

import './globals.css';

import { Literata } from '@next/font/google';


const literata = Literata({
  subsets: ['latin'],
  weight: ['400', '700'], // Specify the weights you want to include
});

export default async function RootLayout({ children }) {
  return (
    <html lang='en'>
      <body className={literata.className}>{children}</body>
    </html>
  );
}

RootLayout.propTypes = {
  children: PropTypes.node,
};
