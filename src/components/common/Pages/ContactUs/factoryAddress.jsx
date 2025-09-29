'use client'

import PropTypes from 'prop-types'
import ContactForm from './ContactForm'
import Banner from '@/assets/images/ContactUs/contactus-banner.png'
import Tabs from './Tabs'
import ImageBanner from '../../Layout/Banner'
import FactoryTabs from './Tabs1'
export default function FactoryAddress() {
  return (
    <>
      <ImageBanner banner={Banner} />
      <div className="bg-white w-full text-center py-8 shadow">
        <div className="flex justify-center mt-6 ">
          <FactoryTabs />
        </div>
      </div>
      <ContactForm />
    </>
  )
}

FactoryAddress.propTypes = {
  initialData: PropTypes.object,
}
