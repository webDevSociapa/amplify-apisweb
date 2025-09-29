"use client"

import axios from "axios";
import Banner from "@/assets/images/Careers/careerBanner.png";
import { useEffect, useRef, useState } from "react";
import ImageBanner from "../../Layout/Banner";
import PhoneInput from "react-phone-input-2";

export default function JoinOurTeam() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedJob, setSelectedJob] = useState(null);
  const [jobOpening, setJobOpening] = useState([])
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

    const handleApplyNow = (job) => {
    setSelectedJob(job);
    setIsModalOpen(true);
    setShowSuccess(false);
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
  }, [])


  return (
    <>
      <ImageBanner banner={Banner} />
      <div id="join-us" className="w-full mt-14 flex flex-col items-center justify-center">
        <div className="bg-[#9F7B49] flex flex-col items-center justify-center w-full p-2 md:p-5">
          <div className="bg-[#FFFBF6] w-full py-6 md:py-12 overflow-hidden flex flex-col items-center gap-6 md:gap-12 justify-center relative">
            <div className="flex flex-col items-center justify-center">
              <p className="text-center font-bold text-[20px] md:text-[40px] text-[#9F7B49]">
                Join Us
              </p>
              <p className="text-center text-xs md:text-lg text-[#353535] mt-4 w-[90%] md:w-[80%]">
                Join us at AIL and become part of a dynamic team where innovation, collaboration, and personal growth are at the heart of everything we do
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
                  {jobOpening.map((job, index) => (
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
  )
}
