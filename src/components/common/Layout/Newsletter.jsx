'use client'
import React, { useState,useEffect } from 'react';
import axios from 'axios';
import Image from 'next/image'
import HoneyMug from '@/assets/images/heart-of-bavaria-section/honey-mug.png'
import HoneyNest from '@/assets/images/heart-of-bavaria-section/honey-nest.png'

const Newsletter = () => {
  const [formData, setFormData] = useState('');
  const [popupMessage, setPopupMessage] = useState('');
  const [messageInfo, setMessageInfo] = useState(false);

  const handleChange = (e) => {
    setFormData(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('/api/subscribeNews', { email: formData }, {
        headers: { 'Content-Type': 'application/json' },
      });
      console.log("respmse",response);
      
      if (response.status) {
        setPopupMessage('Thank you! Successfully subscribed to our email.');
        setMessageInfo(true);
        setFormData('');
      } else {
        setPopupMessage('Failed to subscribe. Please try again.');
      }
    } catch (error) {
      setPopupMessage('An error occurred. Please try again.');
    }
  };

  // Timer for message disappearance
  useEffect(() => {
    if (messageInfo) {
      const timer = setTimeout(() => {
        setPopupMessage('');
        setMessageInfo(false); // Reset the messageInfo state
      }, 3000); // 3 seconds delay

      return () => clearTimeout(timer); // Clean up timer on component unmount or messageInfo change
    }
  }, [messageInfo]); // Dependency on messageInfo

  // Close the toast manually
  const closeToast = () => {
    setPopupMessage('');
    setMessageInfo(false);
  };

  return (
  <>
    <div className="w-full py-10">
      <div className="relative h-[300px] md:h-[448px] bg-[#9F7B49] px-6 py-4">
        <Image
          src={HoneyMug}
          width={330}
          height={376}
          alt="Honey Mug"
          className="absolute hidden sm:inline left-2 lg:left-0 bottom-4 lg:bottom-0 h-[200px] w-[200px] lg:h-[376px] lg:w-[330px] object-contain object-center"
        />
        <Image
          src={HoneyNest}
          width={330}
          height={400}
          alt="Honey Nest"
          className="absolute hidden sm:inline right-0 bottom-3 lg:-bottom-6 h-[200px] w-[200px] lg:h-[400px] lg:w-[330px] object-contain object-center"
        />
        <div className="absolute left-0 top-[65px] h-[164px] md:h-[318px] w-[23px] bg-white"></div>
        <div className="absolute right-0 top-[65px] h-[164px] md:h-[318px] w-[23px] bg-white"></div>

        <div className="flex h-full flex-col items-center justify-center bg-white">
          <p className="text-[12px] font-jost text-center md:text-[22px] font-medium uppercase text-[#585858]">
            Stay in the loop!
          </p>
          <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49]">
            Subscribe To Our Newsletter
          </p>
          <p className="text-center font-jost text-[12px] md:text-[20px] font-medium text-[#666666]">
            Subscribe to our newsletter for the latest updates, exclusive offers, and insider insights delivered
          </p>
          <p className="text-center text-[12px] font-jost md:text-[20px] font-medium text-[#666666]">
            straight to your inbox.
          </p>
          <form onSubmit={handleSubmit}> {/* Corrected the form tag */}
            <div className="flex items-center pt-4 md:pt-10">
              <input
                type="email" // Changed type to "email" for better validation
                placeholder="Enter Your Email Address"
                className="h-[30px] font-jost md:h-[50px] w-[170px] md:w-[350px] border border-[#9F7B49] px-2 py-1 md:px-4 md:py-2 text-xs md:text-base placeholder-[#666666] outline-none"
                value={formData}
                onChange={handleChange}
                required
              />
              <button type="submit" className="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white">
                Subscribe
              </button>
            </div>
          </form>
          {popupMessage && (
            <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow mt-5" role="alert">
              <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg bg-white">
                <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="#835415" viewBox="0 0 20 20">
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
                </svg>
              </div>
              <div className="ms-3 text-sm font-normal">{popupMessage}</div>
              <button type="button" onClick={closeToast} className="ms-auto -mx-1.5 -my-1.5 bg-white text-gray-400 hover:text-gray-900 rounded-lg focus:ring-2 focus:ring-gray-300 p-1.5 hover:bg-gray-100 inline-flex items-center justify-center h-8 w-8">
                <span className="sr-only">Close</span>
                <svg className="w-3 h-3" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 14">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
                </svg>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  </>
  );
}

export default Newsletter;
