"use client";
import ImageBanner from "@/components/common/Layout/Banner";
import Image from "next/image";
import Banner from "@/assets/images/OurBrands/HoneyBack.png";
import React, { useState } from "react";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import GurrentyBadge from "@/assets/images/OurBrands/GurrentyBadge.png";
import { useRouter } from "next/navigation";
import PureHoneyIcon1 from "@/assets/images/OurBrands/pureHoneyIcon1.png";
import PureHoneyIcon2 from "@/assets/images/OurBrands/pureHoneyIcon2.png";

const page = () => {
  const [batchNumber, setBatchNumber] = useState("");
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    setError("");

    // ❌ Disallowed batch numbers list
    const disallowedBatchNumbers = [
      "DS21KF255",
      "DS28KF257",
      "DS20AG280",
      "DS31AG285",
      "DS23BG292",
      "DS31HG043",
      "DS02LG091",
      "DS04AH099",
      "DS13BH115",
    ];

    // ✅ Check if entered batch number is in the disallowed list
    if (disallowedBatchNumbers.includes(batchNumber)) {
      setError(
        "This batch number is not allowed. Please check and enter a valid batch number."
      );
      return;
    }

    try {
      const response = await fetch("/api/checkReport", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ batch_number: batchNumber }),
      });
      console.log("response", response);

      if (response.ok) {
        setMessage("Batch Number is valid");
        router.push(`/generate-pdf?batchNumber=${batchNumber}`);
      } else {
        setError("Batch number not found. Please check and try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      setError("An error occurred. Please try again later.");
    }
  };

  return (
    <>
      <div className="w-full relative h-full">
        <ImageBanner banner={Banner} className="h-full w-full" />
        <Image
          src={GurrentyBadge}
          className="hidden z-0 -bottom-[100px] right-0 lg:inline absolute h-[375px] w-[375px]"
        />
      </div>
      <p className="font-bold text-[#84663C] md:text-[40px] text-[20px] w-[75%] capitalize text-center">
        Bringing Purity and Responsibility with every jar we deliver
      </p>
      <div className="w-full flex flex-col items-center justify-center">
        <div className="w-[90%] md:w-[50%]">
          <p className="text-center text-base md:text-xl py-6 font-jost">
            Please enter your batch code written on side of Apis Honey pack to
            get your purity certificate.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="px-10 flex flex-col gap-3 md:gap-6">
              <div>
                <p className="font-jost text-xs md:text-base pb-2">
                  Batch Number
                </p>
                <input
                  type="text"
                  value={batchNumber}
                  onChange={(e) => setBatchNumber(e.target.value)}
                  className="border border-black outline-none w-full font-jost rounded-md p-1 md:p-2"
                  required
                />
              </div>
              <div>
                <p className="font-jost text-xs md:text-base pb-2">Name</p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="border border-black outline-none w-full font-jost rounded-md p-1 md:p-2"
                  required
                />
              </div>
              <div>
                <p className="font-jost text-xs md:text-base pb-2">
                  Phone Number:
                </p>
                <input
                  type="tel"
                  value={phoneNumber}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                  className="border border-black outline-none w-full font-jost rounded-md p-1 md:p-2"
                  required
                />
              </div>
              <button
                className="border mt-3 self-center border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 w-max text-xs md:text-xl py-1 md:py-3 font-bold text-white"
                type="submit"
              >
                Check Report
              </button>
              {error && (
                <p className="text-red-500 text-center mt-2">{error}</p>
              )}
            </div>
          </form>
          {message && (
            <p className="text-green-500 text-center mt-2">{message}</p>
          )}
        </div>
        <div className="font-jost flex flex-col lg:flex-row gap-8 mt-8 md:mt-16 items-center justify-center">
          <div className="w-[90%] md:w-[510px] shadow-lg p-3 md:p-6 border border-[#9F7B49] bg-[#FFFBF6] h-[300px] flex flex-col">
            <div className="w-full flex items-center justify-center mb-4 h-[82px]">
              <Image
                src={PureHoneyIcon1}
                alt="Pure Honey Icon 1"
                className="h-full w-auto"
              />
            </div>
            <p className="text-center text-sm md:text-xl flex-grow flex items-center justify-center">
              Each batch of apis honey is 100% pure, free from adulterates or
              Added sugar & passes all quality test parameters.
            </p>
          </div>
          <div className="w-[90%] md:w-[510px] shadow-lg p-3 md:p-6 border border-[#9F7B49] bg-[#FFFBF6] h-[300px] flex flex-col">
            <div className="w-full flex items-center justify-center mb-4 h-[82px]">
              <Image
                src={PureHoneyIcon2}
                alt="Pure Honey Icon 2"
                className="h-full w-auto"
              />
            </div>
            <p className="text-center text-sm md:text-lg flex-grow flex items-center justify-center">
              We do not collect any personal information unless you provide it
              voluntarily. In case you opt to provide the details, it will only
              be used to share promotional offers, discounts, product launch
              information, and updates on the contact number timely.
            </p>
          </div>
        </div>
        <div
          className="relative bg-[#FFFBF6] overflow-hidden flex flex-col items-center justify-center"
          style={{ borderRadius: "0 0 0 150px" }}
        >
          <div className="w-[80%] md:w-[60%] mt-8  md:mt-16">
            <p className="font-bold text-[#84663C] md:text-[30px] text-[15px] capitalize text-center">
              9/10 Home Test Club Members recommend Apis Honey
            </p>
            <p className="text-center font-jost underline text-sm  md:text-xl text-[#454545] my-8">
              According to the survey conducted in 9 cities (NCR, Mumbai,
              Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad & Lucknow)
              with 725 regular honey consumer members of the Home Tester Club
              Between Apr'19- June'19. This may not be true representation of
              the universe. Click for more detail
            </p>
            <iframe
              className="rounded  w-full h-[400px]"
              src="https://www.youtube.com/embed/190uqQHhazY?si=hHakkU8ZNvdxri0d"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              referrerpolicy="strict-origin-when-cross-origin"
              allowfullscreen
            ></iframe>
            <div>
              <Image
                src={Ring1}
                className="hidden z-0 lg:inline absolute -left-[160px] -bottom-[160px] h-[331px] w-[331px] rotate-animation"
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
