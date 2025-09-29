/** @type {import('next').NextConfig} */

import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin();

const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        '*.svg': {
          loaders: ['@svgr/webpack'],
          as: '*.js',
        },
      },
      resolveExtensions: [
        '.mdx',
        '.tsx',
        '.ts',
        '.jsx',
        '.js',
        '.mjs',
        '.json',
      ],
      resolveAlias: {
        underscore: 'lodash',
        mocha: { browser: 'mocha/browser-entry.js' },
      },
    },
  },

  // ✅ Add this block
  async redirects() {
    return [
      {
        source: '/en/product.php',
        destination: '/en/our-brand/product-details?brand_id=1&product_id=2', // 🔁 update this if the actual new route is different
        permanent: true,
      },
      {
        source: '/en/aboutus',
        destination: '/en/about-us', // example
        permanent: true,
      },
      {
        source: '/en/contact',
        destination: '/en/contact-us',
        permanent: true,
      },
      {
        source: '/en/join-our-squad',
        destination: '/en/careers/joinOurTeam',
        permanent: true,
      },

 {
        source: '/en/organic-honey',
        destination: '/en/our-brand/product-details?brand_id=1&product_id=1',
        permanent: true,
      },


 {
        source: '/en/brochure/APIS-Brochure-2023.pdf',
        destination: 'https://apisindia.s3.ap-south-1.amazonaws.com/APIS-Brochure-2023.pdf',
        permanent: true,
      },


 {
        source: '/en/emp_portal',
        destination: '/en/careers/joinOurTeam',
        permanent: true,
      },

 {
        source: '/en/annual-Report',
        destination: '/en/investors',
        permanent: true,
      },

 {
        source: '/en/our-business',
        destination: '/en/about-us',
        permanent: true,
      },

 {
        source: '/en/video',
        destination: 'https://youtu.be/PcS4SUF77Sk',
        permanent: true,
      },

 {
        source: '/en/media.php',
        destination: '/en/media',
        permanent: true,
      },

      {
        source: '/en/honey',
        destination: '/en/our-brand/product-details?brand_id=1&product_id=2',
        permanent: true,
      },

{
        source: '/en/contact.php',
        destination: '/en/careers/joinOurTeam',
        permanent: true,
      },


{
        source: '/en/Vision&Mission',
        destination: '/en/about-us/mission-vision',
        permanent: true,
      },

{
        source: '/en/recipes',
        destination: '/en/our-brand/recipes',
        permanent: true,
      },

{
        source: '/en/dates',
        destination: '/en/our-brand/product-details?brand_id=2&product_id=2',
        permanent: true,
      },

{
        source: '/en/royal-zahidi-dates.php',
        destination: '/en/our-brand/product-details?brand_id=2&product_id=7',
        permanent: true,
      },


{
  source: '/en/pdf-certificate.php',
  destination: '/en/our-brand/product-details/certificate',
  permanent: true,
},


 {
          source: '/en/honey-himalaya',
          destination: '/en/our-brand/product-details?brand_id=1&product_id=2',
          permanent: true,
        },

    ];
  },

  webpack: (config) => {
    config.module.rules.push({
      test: /\.svg$/i,
      issuer: /\.[jt]sx?$/,
      use: [
        {
          loader: "@svgr/webpack",
          options: {
            prettier: false,
            svgo: true,
            svgoConfig: {
              plugins: [
                {
                  name: "removeViewBox",
                  active: false,
                },
              ],
            },
            titleProp: true,
          },
        },
      ],
    });

    return config;
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
};

export default withNextIntl(nextConfig);
