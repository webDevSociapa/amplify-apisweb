'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ReCAPTCHA from 'react-google-recaptcha';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    cityLocation: '',
    emailAddress: '',
    phoneNumber: '',
    message: '',
  });

  const [popupMessage, setPopupMessage] = useState('');
  const [messageInfo, setMessageInfo] = useState(false);
  const [captchaToken, setCaptchaToken] = useState(null);

  const SITE_KEY = '6LeHKxkrAAAAAFAzoQ_3UtVfYP_pN3soiwp-8wma'; // 🔴 Replace with your actual site key from Google reCAPTCHA

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleCaptcha = (token) => {
    setCaptchaToken(token);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

 const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(formData.emailAddress)) {
    setPopupMessage('Please enter a valid email address.');
    setMessageInfo(true);
    return;
  }

  const phoneRegex = /^[6-9]\d{9}$/;
  if (!phoneRegex.test(formData.phoneNumber)) {
    setPopupMessage('Please enter a valid 10-digit phone number.');
    setMessageInfo(true);
    return;
  }


    if (!captchaToken) {
      setPopupMessage('Please confirm you are not a robot.');
      setMessageInfo(true);
      return;
    }

    try {
      const response = await axios.post('/api/sendMail', { ...formData, captchaToken }, {
        headers: { 'Content-Type': 'application/json' },
      });

      if (response.data.status) {
        setPopupMessage("Thank you! We've received your query. Our team will be in touch with you shortly!");
        setMessageInfo(true);
        setFormData({
          fullName: '',
          cityLocation: '',
          emailAddress: '',
          phoneNumber: '',
          message: '',
        });
        setCaptchaToken(null); // Reset CAPTCHA
      } else {
        setPopupMessage('Failed to send query. Please try again.');
      }
    } catch (error) {
      setPopupMessage('An error occurred. Please try again.');
    }
  };

  useEffect(() => {
    if (messageInfo) {
      const timer = setTimeout(() => {
        setPopupMessage('');
        setMessageInfo(false);
      }, 3000);
      return () => clearTimeout(timer);
    }
  }, [messageInfo]);

  const closeToast = () => {
    setPopupMessage('');
    setMessageInfo(false);
  };

  return (
    <div className="w-full bg-[#EECB9A] py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h2 className="text-center text-3xl font-bold text-black mb-2">Share Your Views For Apis</h2>
        <p className="text-center text-lg text-black mb-8">Enter the following details and share your views</p>

        {popupMessage && (
          <div id="toast-success" className="flex items-center w-full max-w-xs p-4 mb-4 text-gray-500 bg-white rounded-lg shadow mt-5" role="alert">
            <div className="inline-flex items-center justify-center flex-shrink-0 w-8 h-8 text-green-500 bg-green-100 rounded-lg bg-white">
              <svg className="w-5 h-5" aria-hidden="true" fill="#835415" viewBox="0 0 20 20">
                <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Zm3.707 8.207-4 4a1 1 0 0 1-1.414 0l-2-2a1 1 0 0 1 1.414-1.414L9 10.586l3.293-3.293a1 1 0 0 1 1.414 1.414Z" />
              </svg>
            </div>
            <div className="ms-3 text-sm font-normal">{popupMessage}</div>
            <button onClick={closeToast} className="ms-auto -mx-1.5 -my-1.5 text-gray-400 hover:text-gray-900 rounded-lg p-1.5">
              <span className="sr-only">Close</span>
              <svg className="w-3 h-3" viewBox="0 0 14 14" fill="none">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6" />
              </svg>
            </button>
          </div>
        )}

        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-sm font-normal mb-1">Full Name</label>
              <input type="text" name="fullName" value={formData.fullName} onChange={handleChange} className="w-full p-2 border border-black rounded bg-transparent" required />
            </div>
            <div>
              <label className="block text-black text-sm font-normal mb-1">City Location</label>
              <input type="text" name="cityLocation" value={formData.cityLocation} onChange={handleChange} className="w-full p-2 border border-black rounded bg-transparent" required />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block text-black text-sm font-normal mb-1">Email Address</label>
              <input type="email" name="emailAddress" value={formData.emailAddress} onChange={handleChange} className="w-full p-2 border border-black rounded bg-transparent" required />
            </div>
            <div>
              <label className="block text-black text-sm font-normal mb-1">Phone Number</label>
              <input type="tel" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} className="w-full p-2 border border-black rounded bg-transparent" required />
            </div>
          </div>

          <div>
            <label className="block text-black text-sm font-normal mb-1">Message for Apis</label>
            <textarea name="message" value={formData.message} onChange={handleChange} className="w-full p-2 border border-black rounded bg-transparent h-32 placeholder-black placeholder-opacity-60" placeholder="Write complete message here" required />
          </div>

          <div className="flex justify-center">
            <ReCAPTCHA sitekey={SITE_KEY} onChange={handleCaptcha} />
          </div>

          <div className="text-center">
            <button type="submit" className="bg-[#AE844A] text-white py-2 px-8 rounded font-medium hover:bg-[#835415]">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
