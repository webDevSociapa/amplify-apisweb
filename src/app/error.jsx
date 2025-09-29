'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import PropTypes from 'prop-types';

import './globals.css';

export default function Error({ error }) {
  const routerPath = usePathname();
  const locale = routerPath.split('/')[1];

  return (
    <html lang={locale}>
      <head>
        <title>Error</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>
        <div className='flex h-screen flex-col items-center justify-center bg-activeGreen-50 font-satoshi'>
          <h1 className='mb-4 text-3xl font-bold capitalize text-activeGreen-500'>
            Something went wrong...
          </h1>
          <p className='mb-8 text-lg text-darkGreen-500'>
            Error: {error.message}
          </p>
          <div className='flex space-x-4'>
            <Link
              href={`/${locale}`}
              className='rounded-full bg-activeGreen-500 px-4 py-2 font-medium text-white hover:shadow-md'
            >
              Go to Home
            </Link>
          </div>
        </div>
      </body>
    </html>
  );
}

Error.propTypes = {
  error: PropTypes.object.isRequired,
  reset: PropTypes.func.isRequired,
};
