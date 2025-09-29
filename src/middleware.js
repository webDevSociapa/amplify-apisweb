import createMiddleware from 'next-intl/middleware';
import { NextResponse } from 'next/server';

import { PRIVATE_ROUTES } from './lib/constants';

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon* (favicon files)
     */
    '/((?!api|_next/static|_next/image|site.webmanifest|favicon*).*)',
    '/',
    '/(en|de|es|it|fr)/:path*',
  ],
};

const nextIntlMiddleware = createMiddleware({
  locales: ['en', 'de', 'es', 'it', 'fr'],
  defaultLocale: 'en',
});

export async function middleware(request) {
  const { pathname, searchParams } = request.nextUrl;

  if (pathname.startsWith('/fonts') || pathname.startsWith('/_next/static')) {
    return NextResponse.next();
  }

  const queryEmail = searchParams?.get('email');
  const queryToken = searchParams?.get('token');
  const queryPath = searchParams?.get('path');
  const queryPreviousUrl = searchParams?.get('previousUrl');

  const authToken = request.cookies.get('buyer-auth-token')?.value;
  const userData = request.cookies.get('buyer-user')?.value;

  const userLoggedIn = authToken && userData;

  // Strip the locale prefix from the pathname for the private route check
  const strippedPathname = pathname.replace(/^\/(en|de|es|it|fr)/, '');

  if (strippedPathname === '/reset-password' && !queryEmail && !queryToken) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  if (strippedPathname.startsWith('/redirected') && !queryPath) {
    return NextResponse.redirect(new URL('/', request.url));
  }

  const isPrivateRoute = PRIVATE_ROUTES.some((privatePath) =>
    strippedPathname.startsWith(privatePath.url)
  );

  if (isPrivateRoute && !userLoggedIn) {
    const loginUrl = new URL('/redirected?path=login', request.url);

    loginUrl.searchParams.set(
      'previousUrl',
      encodeURIComponent(strippedPathname)
    );

    return NextResponse.redirect(loginUrl);
  }

  if (userLoggedIn && queryPreviousUrl) {
    return NextResponse.redirect(
      new URL(decodeURIComponent(queryPreviousUrl), request.url)
    );
  }

  // Run next-intl middleware
  const response = await nextIntlMiddleware(request);

  if (response) {
    return response;
  }

  return NextResponse.next();
}
