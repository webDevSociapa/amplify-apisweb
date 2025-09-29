"use client";

import PropTypes from "prop-types";
import Banner from "@/assets/images/Careers/careerBanner.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Award from "@/assets/images/Careers/Award.png";
// import Celebrations from "@/assets/images/Careers/Celebrations.png";
import Engagements from "@/assets/images/Careers/Engagements.png";
// import TrainingSession from "@/assets/images/Careers/Training&Session.png";
import CareerGallery3 from '@/assets/images/Careers/cgallary3.png'
import BirthDayCelebration3 from '@/assets/images/Careers/birthdayCelebration3.jpg'
import Engage from '@/assets/images/Careers/engage.png';
import Celebrations from '@/assets/images/Careers/celebrationss.png'
import TrainningSession from '@/assets/images/Careers/trainningSession.png'
import CareerGallery1 from '@/assets/images/Careers/cgallary1.png'
import MeetGreet1 from '@/assets/images/Careers/hrMeet1.jpg'
import EngageMent1 from '@/assets/images/Careers/engageMent1.webp'
import ImageBanner from "../../Layout/Banner";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation"
import { useState, useRef, useEffect } from "react";
import PhoneInput from 'react-phone-input-2';
import 'react-phone-input-2/lib/style.css';
import axios from "axios";
import employeAward from '@/assets/images/Careers/employeAward.png'
import Head from "next/head";


const CAREER_DATA = [
  {
    img: employeAward,
    title: "Employ Award",
    type: 0,
    gallery: 1
  },
  {
    img: Engage,
    title: "Meet & Greet",
    type: 0,
    gallery: 2

  },
  {
    img: EngageMent1,
    title: "Engagements",
    type: 1,
    gallery: 3

  },
  {
    img: BirthDayCelebration3,
    title: "Celebrations",
    type: 1,
    gallery: 4

  },
];

const JOB_OPENINGS = [
  {
    position: "SO & KAE- MT",
    location: "Bangalore",
    territory: "Bangalore",
    experience: "4- 15 Yrs",
    relevantExp: "2+ yrs in MT & Ecommerce",
    ctc: "4.5- 6.5 LPA",
    education: "Graduate/ MBA",
    skills: "1-Having good exp. in FMCG Food Industry\n2- Handled SAMT, MT & Ecommerce.\n3- National & Regional level exp.\n4- Must have Job stability\n5- Exp. of handling respective location",
  },
  {
    position: "ASM",
    location: "Mumbai",
    territory: "Mumbai",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-9 LPA",
    education: "Graduate",
    skills: "1-Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability.\n4-Exp. of handling whole Mumbai",
  },
  {
    position: "ASM",
    location: "Hyderabad",
    territory: "Hyderabad",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-9 LPA",
    education: "MBA",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Hyderabad",
  },
  {
    position: "TSM",
    location: "Amritsar",
    territory: "Amritsar",
    experience: "4 - 20 Yrs",
    relevantExp: "4+ Yrs in Core GT",
    ctc: "4-6 LPA",
    education: "Graduate",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Amritsar & near by location",
  },
  {
    position: "TSM",
    location: "Delhi",
    territory: "Delhi",
    experience: "4-15 yrs",
    relevantExp: "4+ Yrs in Core GT Retail",
    ctc: "4- 5 LPA",
    education: "Graduate",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole East & Delhi",
  },
  {
    position: "ASM",
    location: "Kurukshetra",
    territory: "Kurukshetra",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-7.5 LPA",
    education: "Graduate",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Kurukshetra & near by Location",
  },
  {
    position: "ASM",
    location: "Ahmedabad",
    territory: "Ahmedabad",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-7.5 LPA",
    education: "Graduate",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Ahmedabad & near by location",
  },
  {
    position: "ASM",
    location: "Visakhapatnam",
    territory: "Visakhapatnam",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-7.5 LPA",
    education: "MBA",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Visakhapatnam & near by location",
  },
  {
    position: "ASM",
    location: "Vijayawada",
    territory: "Vijayawada",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-7.5 LPA",
    education: "MBA",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Vijayawada & near by location",
  },
  {
    position: "ASM",
    location: "Anantapur",
    territory: "Anantapur",
    experience: "6 - 20 Yrs",
    relevantExp: "5+ Yrs in Core GT",
    ctc: "6-7.5 LPA",
    education: "MBA",
    skills: "1- Having good exp. in FMCG Food Industry\n2-Handled GT (Retail- Provision Store/General Trade/Superstore/Mart).\n3-Must have Job stability\n4-Exp. of handling whole Anantapur & near by location",
  },
  {
    position: "TSM",
    location: "Raghunathganj/ Domkal/ Murshidabad",
    territory: "Raghunathganj/ Domkal/ Murshidabad",
    experience: "4 - 20 Yrs",
    relevantExp: "4+ Yrs in Core GT",
    ctc: "4-6 LPA",
    education: "Graduate",
    skills: "1- Having good Exp. In FMCG Food Industry\n2- Handling GT (Retail- Provision store/General Trade/Superstore/Mart).\n3- Must have Job stability\n4- Having exp. of handling whole Hyderabad",
  },
  {
    position: "MT Sales",
    location: "Mumbai, Kochi, Chandigarh/ Amritsar, Jaipur, Delhi/ NCR, Chennai/ ROTN, Kolkata",
    territory: "Mumbai, Kerala, Punjab, Rajasthan, Delhi, Tamilnadu, Kolkata",
    experience: "7 - 20 Yrs",
    relevantExp: "7+ yrs in MT & Ecommerce",
    ctc: "6-10 LPA",
    education: "Graduate",
    skills: "1-Having good Exp. In FMCG Food Industry\n2- Handling SAMT, MT & Ecommerce, Having exp in National & Regional.\n3- Must have Job stability\n4- Having exp. of handling respective location",
  },
  {
    position: "MT Sales",
    location: "Goa, Kochi, Chandigarh/ Amritsar, Ahmedabad/ Surat, Panipat, Delhi/ NCR, Bangalore, Bhopal, Chennai/ ROTN, Lucknow/ Agra, Bihar/ Jharkhand, Kolkata",
    territory: "Goa, Kerala, Punjab, Gujarat, Haryana, Delhi, Bangalore, MP, Tamilnadu, UP, Patna/ Ranchi, Kolkata",
    experience: "4- 15 Yrs",
    relevantExp: "4+ yrs in MT & Ecommerce",
    ctc: "4.5- 6.5 LPA",
    education: "Graduate",
    skills: "1-Having good Exp. In FMCG Food Industry\n2- Handling SAMT, MT & Ecommerce, Having exp in National & Regional.\n3- Must have Job stability\n4- Having exp. of handling respective location",
  },
  // ... add other job openings here
];

export default function Careers() {
  const router = useRouter()
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobOpening, setJobOpening] = useState([])
  const [apisLifeData, setApisLifeData] = useState([])
  // const [phone, setPhone] = useState("");
  const [showSuccess, setShowSuccess] = useState(false);
  const modalRef = useRef(null);
  const [formData, setFormData] = useState({
    selectJob: '',
    fullName: '',
    emailAddress: '',
    phoneNumber: '',
    resume: 'null',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const formDataToSend = new FormData();
      formDataToSend.append('selectJob', formData.selectJob);
      formDataToSend.append('fullName', formData.fullName);
      formDataToSend.append('emailAddress', formData.emailAddress);
      formDataToSend.append('phoneNumber', formData.phoneNumber);
      formDataToSend.append('resume', formData.resume);

      const response = await axios.post('/api/ApplyJobRole', formDataToSend, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });
      if (response.data.status === 200) {
        setShowSuccess(true);
        setIsModalOpen(false);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      setPopupMessage('An error occurred. Please try again.');
    }
  }
  const handleChange = (e) => {
    const { name, value, type, files } = e.target;

    setFormData(prevData => ({
      ...prevData,
      [name]: type === 'file' ? files[0] : value
    }));
  };

  const handlePhoneChange = (value) => {
    setFormData(prevData => ({
      ...prevData,
      phoneNumber: value
    }));
  };

  useEffect(() => {
    const CareersData = async () => {
      try {
        const response = await axios.get("/api/careers/jobOpening/");
        setJobOpening(response.data)
        console.log("responseDatajobbb", response.data);
      }
      catch (error) {
        console.log("Error");
      }
    }
    CareersData()

    const fetchLifeApis = async () => {
      try {
        const response = await axios.get("/api/careers/apisLife");
        console.log("responseLifeAt", response);
        setApisLifeData(response.data)
      } catch (error) {

      }
    }
    fetchLifeApis()

    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        setIsModalOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleImageClick = (item) => {
    localStorage.setItem('imageGroup', JSON.stringify(item));
    router.push('/careers/careerGallary');
  };

  const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setShowSuccess(false);
  };



  return (
    <>

      <Head>
        <title>Apis India | Join Our Squad</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />

        <meta property="og:title" content="Apis India | Join Our Squad" />
        <meta
          property="og:description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />
        <meta property="og:site_name" content="http://www.apisindia.com/en/careers" />

        <meta name="twitter:title" content="Apis India | Join Our Squad" />
        <meta
          name="twitter:description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta itemProp="title" content="Apis India | Join Our Squad" />
        <meta
          itemProp="description"
          content="Apis India has also forayed into Tea; Pickles, Jam, Dates & Preserves considering the changing purchase dynamics & growing need of the quality branded packaged products. For any other information on the products kindly fill the contact form."
        />

        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />

      </Head>
      <ImageBanner banner={Banner} />
      <div id="life-at-apis" className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Life @Apis
        </p>
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center font-jost">
          At AIL, we foster a collaborative and innovative work culture
          where every team member's ideas are valued, and growth opportunities
          are embraced with enthusiasm.
        </p>
      </div>
      {/* <Link href={"/careers/careerGallary"}> */}
      <div className="flex mt-7 md:mt-14 flex-wrap items-center justify-center gap-5 md:gap-10 w-[80%] m-auto">
        {apisLifeData?.map((itm, index) => (
          <div key={index} className="border p-2 md:p-3 px-1 border-[#85673D]" onClick={() => handleImageClick(itm)}>
            {itm.type === "1" && (
              <div className="p-3 pt-0 text-[#85673D] font-bold text-sm md:text-2xl pb-5 font-jost">
                <p>{itm.title}</p>
              </div>
            )}
            <div>
              <Image
                src={itm.titleImage}
                alt={itm.titleImage}
                width={495}
                height={443}
                className="object-cover h-[260px] w-[290px] md:w-[495px] md:h-[443px] cursor-pointer"
              />
            </div>
            {itm.type === "0" && (
              <div className="p-3 pb-0 text-[#85673D] font-bold text-sm md:text-2xl pt-5 font-jost">
                <p className="font-jost">{itm.title}</p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* </Link> */}
      <div id="join-us" className="w-full mt-14 flex flex-col items-center justify-center">
        <div className="bg-[#9F7B49] flex flex-col items-center justify-center w-full p-2 md:p-5">
          <div className="bg-[#FFFBF6] w-full py-6 md:py-12 overflow-hidden flex flex-col items-center gap-6 md:gap-12 justify-center relative">
            <div className="flex flex-col items-center justify-center">
              <p className="text-center font-bold text-[20px] md:text-[40px] text-[#9F7B49]">
                Join Us
              </p>
              <p className="text-center text-xs md:text-lg text-[#353535] mt-4 w-[90%] md:w-[80%]">
                Join us at AIL and become part of a dynamic team where
                innovation, collaboration, and personal growth are at the heart
                of everything we do
              </p>
            </div>
            <div className="w-full overflow-x-auto">
              <table className="w-full border-collapse text-sm md:text-base">
                <thead>
                  <tr className="bg-[#9F7B49] text-white">
                    <th className="p-2 border">Position</th>
                    <th className="p-2 border">Job Location</th>
                    <th className="p-2 border">Territory Exp.</th>
                    <th className="p-2 border">Experience Required</th>
                    <th className="p-2 border">Relevant Exp</th>
                    <th className="p-2 border">Offered CTC (LPA)</th>
                    <th className="p-2 border">Education Required</th>
                    <th className="p-2 border">Skills Required</th>
                    <th className="p-2 border">Action</th>
                  </tr>
                </thead>
                <tbody>
                  {jobOpening ? (
                    jobOpening.length > 0 ? (
                      jobOpening.map((job, index) => (
                        <tr key={index} className={index % 2 === 0 ? "bg-[#FFFBF6]" : "bg-[#F5EBD8]"}>
                          <td className="p-2 border">{job.position}</td>
                          <td className="p-2 border">{job.location}</td>
                          <td className="p-2 border">{job.territory}</td>
                          <td className="p-2 border">{job.experience}</td>
                          <td className="p-2 border">{job.relevantExp}</td>
                          <td className="p-2 border">{job.ctc}</td>
                          <td className="p-2 border">{job.education}</td>
                          <td className="p-2 border whitespace-pre-line">{job.skills}</td>
                          <td className="p-2 border">
                            <button
                              onClick={() => handleApplyNow(job)}
                              className="bg-[#9F7B49] text-white px-2 py-1 md:px-4 md:py-2 rounded text-xs md:text-base"
                              data-backdrop="static"
                            >
                              Apply Now
                            </button>
                          </td>
                        </tr>
                      ))
                    ) : (
                      <tr>
                        <td colSpan="9" className="text-center p-4">Loading Job Portal...</td>
                      </tr>
                    )
                  ) : (
                    <tr>
                      <td colSpan="9" className="text-center p-4">Loading Job Portal...</td>
                    </tr>
                  )}

                </tbody>
              </table>
            </div>
            {/* <Image src={Ring1} className="hidden md:inline absolute  -left-20 -bottom-22 h-[300px] w-[298px] rotate-animation opacity-30" /> */}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div ref={modalRef} className="bg-white p-4 md:p-8 rounded-lg w-full max-w-md">
            <h2 className="text-xl md:text-2xl font-bold mb-4">Apply for {selectedJob.position}</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base">Select profile applied for</label>
                <select
                  className="w-full p-2 border rounded text-sm md:text-base"
                  onChange={handleChange}
                  value={formData.selectJob}
                  name="selectJob"
                  id="selectJob"
                  required
                >
                  <option value="">Select a profile</option>
                  {JOB_OPENINGS.map((job, index) => (
                    <option key={index} value={job.position}>{job.position}</option>
                  ))}
                </select>
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base">Full Name</label>
                <input
                  type="text"
                  name="fullName"
                  className="w-full p-2 border rounded text-sm md:text-base"
                  placeholder="Enter your full name"
                  required
                  onChange={handleChange}
                  value={formData.fullName}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base">Email Address</label>
                <input
                  type="email"
                  name="emailAddress"
                  className="w-full p-2 border rounded text-sm md:text-base"
                  placeholder="Enter your email address"
                  required
                  onChange={handleChange}
                  value={formData.emailAddress}
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base">Phone Number</label>
                <PhoneInput
                  country={'in'}
                  inputStyle={{ width: '100%' }}
                  containerClass="w-full"
                  onChange={handlePhoneChange}
                  value={formData.phoneNumber}
                  required
                />
              </div>
              <div className="mb-4">
                <label className="block mb-2 text-sm md:text-base">Resume</label>
                <input
                  type="file"
                  name="resume"
                  className="w-full p-2 border rounded text-sm md:text-base"
                  onChange={(e) => setFormData({ ...formData, resume: e.target.files[0] })}
                  required
                />
              </div>
              <div className="flex justify-end">
                <button type="button" onClick={() => setIsModalOpen(false)} className="mr-2 px-3 py-1 md:px-4 md:py-2 bg-gray-200 rounded text-sm md:text-base">
                  Cancel
                </button>
                <button type="submit" className="bg-[#9F7B49] text-white px-3 py-1 md:px-4 md:py-2 rounded text-sm md:text-base">
                  Submit Application
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {showSuccess && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white p-6 rounded-lg max-w-md w-full text-center">
            <div className="text-green-500 text-5xl mb-4">✓</div>
            <h2 className="text-2xl font-bold mb-2">Application Submitted!</h2>
            <p className="mb-4">Thank you for applying. We will review your application and get back to you soon.</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-[#9F7B49] text-white px-4 py-2 rounded text-base"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </>
  );
}

Careers.propTypes = {
  initialData: PropTypes.object,
};