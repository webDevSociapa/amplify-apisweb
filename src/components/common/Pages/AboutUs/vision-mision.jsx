"use client"

import Image from "next/image";
import MissionBanner from "@/assets/images/AboutUs/vision-mision-banner.png";
import { useEffect, useState } from "react";
import Curv from "@/assets/images/AboutUs/Curv.png";
import axios from "axios";
import Banner from "@/assets/images/AboutUs/apis-banner-09.jpg";


export default function VisionMission() {
  const [activeTab, setActiveTab] = useState("vision");
  const [apisDataNumber, setApisDataNumber] = useState();


  const [counts, setCounts] = useState({
    productRanges: 0,
    yearsOfLegacy: 0,
    newCustomers: 0,
    numberOfOutlets: 0
  });


  const LEGACY_DATA = [
    {
      count: 12,
      title: "Product Ranges",
      key: "productRanges"
    },
    {
      count: 100,
      title: "Years Of Legacy",
      key: "yearsOfLegacy"
    },
    {
      count: 2000,
      title: "Distributors",
      key: "distributors"
    },
    {
      count: "2.5L",
      title: "Outlets",
      key: "numberOfOutlets"
    },
  ];

  
    const renderContent = () => {
    switch (activeTab) {
      case "vision":
  return (
    <p className="text-justify text-xs md:text-base leading-snug">
      To inspire consumers with products that enable living a healthier and fitter lifestyle through continuous product innovation.
    </p>
  );

           case "mission":
  return (
    <div className="space-y-2 text-justify text-xs md:text-base leading-snug">
      <p>We relentlessly will continue to pursue exceptional value for our customers, fueled by innovation and unwavering ethical practices.</p>
      <p>We champion responsible business practices, driving profitability and will continue to secure the well-being of our customers and stakeholders.</p>
      <p>We cultivate a thriving workplace and upkeep high standards that promote a strong sense of belonging, hence empowering our people to achieve their life and our business goals.</p>
    </div>
  );

        case "values":
  return (
    <ul className="pl-5 space-y-2 text-justify text-xs md:text-base leading-snug">
      <li><strong>U</strong>nwavering Integrity: We hold ourselves accountable to the highest ethical standards in everything we intend, plan, say or do.</li>
      <li><strong>P</strong>eople First: We cultivate an empowered and thriving people-centric environment that inspires excellence and fosters growth.</li>
      <li><strong>L</strong>ifelong Learning: We embrace a culture of continuous learning and development, and equip our team with the knowledge and skills to excel.</li>
      <li><strong>I</strong>nnovative Thinking: We challenge the status quo and explore newer, out-of-the-box and unconventional ways to deliver excellence.</li>
      <li><strong>F</strong>uturistic Focus: We are committed to staying ahead of the curve, by using cutting-edge technology and best global quality practices.</li>
      <li><strong>T</strong>rusted Excellence: We are committed to building trust and exceeding expectations for all our stakeholders both internally and externally.</li>
    </ul>
  );

      default:
        return "";
    }
  };

      useEffect(() => {
        const interval = setInterval(() => {
          setCounts(prevCounts => {
            const newCounts = { ...prevCounts };
            let allReached = true;
            LEGACY_DATA.forEach(item => {
              if (newCounts[item.key] < item.count) {
                newCounts[item.key] += Math.ceil((item.count - newCounts[item.key]) / 10);
                allReached = false;
              } else {
                newCounts[item.key] = item.count;
              }
            });
            if (allReached) {
              clearInterval(interval);
            }
            return newCounts;
          });
        }, 50);
    
        return () => clearInterval(interval);
      }, []);




  return (

      <>
   <div id="mission-values" className="relative mt-14 flex flex-col items-center justify-center w-full">
  {/* Mission Banner */}
  <div className="relative w-full">
    <Image
      src={MissionBanner}
      alt="Mission Banner"
      width={1440}
      className="object-cover w-full h-[390px] xs:h-[350px] sm:h-[450px] md:h-[500px] lg:h-[550px] xl:h-[600px]"
    />

    {/* Overlay Content */}
    <div className="absolute inset-0 flex flex-col justify-start items-center px-4 sm:px-6 md:px-10 pt-4 sm:pt-8 md:pt-10">
      {/* Tabs */}
      <div className="flex flex-row justify-center items-center gap-3 md:gap-10 mb-4 sm:mb-6">
        {["vision", "mission", "values"].map((tab) => (
          <button
            key={tab}
            className={`text-black text-center font-literata font-bold leading-normal ${
              activeTab === tab
                ? "text-base xs:text-lg md:text-3xl xl:text-4xl underline"
                : "text-sm md:text-xl"
            }`}
            onClick={() => setActiveTab(tab)}
          >
            {tab.charAt(0).toUpperCase() + tab.slice(1)}
          </button>
        ))}
      </div>

      {/* Content Box */}
      <div className="w-full flex justify-center mt-2 sm:mt-4 md:mt-6 xl:mt-12">
        <div
          key={activeTab}
          className="w-[95%] sm:w-[90%] md:w-[80%] lg:w-[70%] bg-white rounded-xl shadow-lg px-4 sm:px-6 md:px-8 py-4 sm:py-6 md:py-8 animate-slideInLeft"
        >
          {renderContent()}
        </div>
      </div>
    </div>
  </div>

  {/* Curved Bottom and Legacy Data */}
  <div className="w-full relative mt-10 lg:mt-0">
    <Image
      src={Curv}
      alt="Curved Bottom"
      className="object-cover hidden lg:block w-full h-auto max-h-[670px]"
    />

    <div className="lg:absolute bottom-[124px] left-0 right-0 flex flex-wrap justify-around items-center gap-4 px-4 py-6  z-10">
      {LEGACY_DATA?.map((item) => (
        <div
          key={item.key}
          className="w-[130px] sm:w-[160px] lg:w-[200px] xl:w-[275px] h-[110px] xl:h-[170px] border border-[#9F7B49] rounded-[1.875rem] shadow-md bg-white flex flex-col items-center justify-center"
        >
          <p className="text-[14px] lg:text-[20px] xl:text-[34px] text-[#9F7B49] font-bold">
            {counts[item.key]}+
          </p>
          <p className="text-[12px] lg:text-base xl:text-[24px] text-[#131313] font-semibold font-jost text-center">
            {item.title}
          </p>
        </div>
      ))}
    </div>
  </div>
</div>
      </>
  );
}