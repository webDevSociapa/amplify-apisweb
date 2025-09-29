'use client'

import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import Banner from '@/assets/images/ContactUs/contactus-banner.png'
import Tabs from './Tabs'
import ImageBanner from '../../Layout/Banner'
import Head from 'next/head'
export default function ContactUs() {
  return (
    <>
      <Head>
        <title>Apis Honey | Contact Us</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />

        <meta property="og:title" content="Apis India | Contact Us" />
        <meta
          property="og:description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />
        <meta property="og:site_name" content="http://www.apisindia.com/en/contact-us" />

        <meta name="twitter:title" content="Apis India | Contact Us" />
        <meta
          name="twitter:description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta itemProp="title" content="Apis India | Contact Us" />
        <meta
          itemProp="description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />

      </Head>
      <ImageBanner banner={Banner} />
      <div className="bg-white w-full text-center py-8 shadow">
        <div className="flex justify-center mt-6 ">
          <Tabs />
        </div>
      </div>
      <ContactForm />
    </>
  )
}

ContactUs.propTypes = {
  initialData: PropTypes.object,
}
