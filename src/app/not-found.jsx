'use client';

import './globals.css';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

const NotFound = () => {
  const routerPath = usePathname();
  const locale = routerPath.split('/')[1];

  return (
    <html lang={locale}>
      <head>
        <title>Page Not Found</title>
        <meta charSet='UTF-8' />
        <meta name='viewport' content='width=device-width, initial-scale=1.0' />
      </head>
      <body>
        <div className='flex h-screen flex-col items-center justify-center pb-12 pt-16 font-satoshi'>
          <main className='mx-auto flex w-full max-w-7xl flex-grow flex-col items-center justify-center px-4 sm:px-6 lg:px-8'>
            <p className='text-xl font-semibold text-black dark:text-white'>
              404
            </p>
            <h1 className='mt-2 text-4xl font-bold capitalize tracking-tight text-activeGreen-500 dark:text-activeGreen-200 sm:text-5xl'>
              Page not found!
            </h1>
            <p className='mt-2 text-base font-medium text-gray-700 dark:text-gray-300'>
              Sorry, we couldn’t find the page you’re looking for.
            </p>
            <div className='mt-6'>
              <Link
                href={`/${locale}`}
                className='flex gap-1 rounded-full bg-accent-foreground px-4 py-2 text-base font-medium text-white hover:shadow-md dark:bg-white dark:text-black'
              >
                Go back home
                <span aria-hidden='true'> &rarr;</span>
              </Link>
            </div>
          </main>
        </div>
      </body>
    </html>
  );
};

export default NotFound;
