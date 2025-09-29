import { Suspense } from "react";
import { PRODUCT_NAME } from "@/lib/constants";
import { cn } from "@/lib/utils";
import QueryProviders from "@/providers/QueryProvider";
import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";
import { Bebas_Neue } from "next/font/google";
import NextTopLoader from "nextjs-toploader";
import PropTypes from "prop-types";
import Head from "next/head";


import BrewerLoginHeader from "@/components/common/Layout/BrewerLoginHeader";
import MainFooter from "@/components/common/Layout/MainFooter";
import MainHeader from "@/components/common/Layout/MainHeader";

import Loading from "./loading";
import Newsletter from "@/components/common/Layout/Newsletter";

export const metadata = {
  title: PRODUCT_NAME,
  description: "AIL",
};

const bebas = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
});

export default async function MainLayout({ children, params: { locale } }) {
  const messages = await getMessages();

  return (
    <html lang={locale}>
     <head>
        {/* Google Site Verification */}
        <meta name="google-site-verification" content="h0iHtFuY87Z7LyV_7QoRurcDdlS9gDYme7XPrcPiqCY" />

        {/* Google Analytics */}
        <script async src="https://www.googletagmanager.com/gtag/js?id=G-8L8XBHW1R2"></script>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-8L8XBHW1R2');
            `,
          }}
        />
      </head>

      <body
        className={cn(
          "min-h-screen overflow-auto bg-background font-satoshi antialiased",
          bebas.variable
        )}
      >
        <NextIntlClientProvider messages={messages}>
          <QueryProviders>
            <NextTopLoader
              height={3}
              speed={200}
              crawl={true}
              easing="ease"
              color="#0D744B"
              crawlSpeed={200}
              showSpinner={false}
              initialPosition={0.08}
              shadow="0 0 10px #0D744B,0 0 5px #0D744B"
            />
            <main className="md:max-7xl relative mx-auto flex h-full w-full flex-col items-center justify-center">
              <BrewerLoginHeader />
              <MainHeader />
              <Suspense fallback={<Loading />}>{children}</Suspense>
              <Newsletter />
              <MainFooter />
            </main>
          </QueryProviders>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}

MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
  params: PropTypes.object,
};
