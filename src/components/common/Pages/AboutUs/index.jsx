"use client";
import Image from "next/image";
import PropTypes from "prop-types";
import Banner from "@/assets/images/AboutUs/mainAboutusBanner.png";
import MissionBanner from "@/assets/images/AboutUs/vision-mision-banner.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Curv from "@/assets/images/AboutUs/Curv.png";
import ManBack1 from "@/assets/images/AboutUs/ManBack1.png";
import ManBack2 from "@/assets/images/AboutUs/ManBack2.png";
import VimalAnand from "@/assets/images/AboutUs/VimalAnand.png";
import Frame1 from "@/assets/images/AboutUs/Frame1.png";
import Frame2 from "@/assets/images/AboutUs/Frame2.png";
import AmitAnand from "@/assets/images/AboutUs/AmitAnand.png";
import { useState, useEffect } from "react";
import Link from "next/link";
import AboutusLogo from '@/assets/images/AboutUs/aboutusLogo.png';
import AboutStreak from '@/assets/images/AboutUs/aboutStreak.png'
import HexaGonalPage from "../../Pages/AboutUs/Hexagonal";
import Head from 'next/head';


export default function AboutUsPage({ }) {
  const [activeTab, setActiveTab] = useState("vision");
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
    window.scroll(0, 0);
  }, [])

  return (
    <>
      <Head>
        <title>Buy Best Organic Honey in India | Apis India</title>
        <meta charSet="utf-8" />
        <meta name="description" content="Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves." />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />
        <meta property="og:title" content="Buy Best Organic Honey in India | Apis India" />
        <meta property="og:description" content="Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves." />
        <meta property="og:site_name" content="http://www.apisindia.com/aboutus.php" />
        <meta name="twitter:title" content="Buy Best Organic Honey in India | Apis India" />
        <meta name="twitter:description" content="Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves." />
        <meta itemProp="title" content="Buy Best Organic Honey in India | Apis India" />
        <meta itemProp="description" content="Apis is a growing FMCG company to manufacture products like Honey, Dates, Jam, Pickle, Green Tea and Preserves." />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="format-detection" content="telephone=no" />
      </Head>


      <main className="flex flex-col items-center justify-center w-full">
        <div className="relative w-full">
          <Image
            src={Banner}
            alt="Banner Image"
            width={1440}
            height={1440}
            className="object-cover w-full h-100"
          />
        </div>
      </main>
      <div className="static">
        <Image src={AboutStreak} className="absolute top-[500px] right-4 aboutStrek" /> {/* Adjusted top value */}
        {/* <Image src={AboutusLogo} className="absolute top-[680px] right-4 aboutslogo" /> */}
      </div>
      <div className="bg-white text-gray-800">
        <div className="relative w-full">
          <div className="inset-0 flex items-center justify-center">
            <h1 className="text-[#585858] text-center text-shadow-4xl stroke-1 stroke-black font-jost text-sm md:text-[1.375rem] font-medium uppercase">
              ABOUT APIS
            </h1>
          </div>
        </div>
      </div>
      {/* <div className="">
        <div className="static top-0">
        <Image 
        src={AboutusLogo}
        />
        </div>
       <div className="absolute top-180">
       <Image 
        src={AboutStreak}
        />
       </div>
      </div> */}
      <section className="p-4 text-center">
        <h2 className="text-[#9F7B49] text-center font-literata text-[20px] md:text-[40px] font-bold">
          Purely Crafted Natural Flavors
        </h2>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto text-justify">
          With a legacy of doing business spanning 100 years, Apis India Limited has been a name synonymous with honeyed
          quality and modernism in the global market. We are listed one of the pioneer, spanning three generations of bee-loving
          entrepreneurs, has built an empire of sweetness, transforming into one of the renowned brand leaders in Global
          organized honey trade.
          Our dedication to excellence shines through our infrastructure. We boast a formidable network of 13 state-of-the-art
          manufacturing and supply chain facilities across India, with the crown jewel being our behemoth 7-acre Roorkee
          manufacturing facility, capable of processing many hundred tonnes of honey daily.
          From intricate testing labs to state-of-art automation, every step adheres to the highest international standards of
          Hygiene and Quality, evident in our multiple certifications, including ISO 22000, FSSAI, and USFDA. We cultivate ethical
          partnerships with beekeepers, ensuring responsible sourcing and sustainable practices.
          Our rigorous commitment to quality has propelled us to the forefront of honey exports, gracing institutional customers,
          private label, retail and homes in the EU, USA, Canada, SEA, Africa, and the Middle East. To cater to the existing global
          demand, market expansion and growing demand, we have set up a state-of-art manufacturing facility in the UAE,
          situated in Dubai
          We are renowned for our diverse FMCG product portfolio; unwavering commitment to quality, and responsible sourcing
          practices, AIL brands are synonymous with well-being and has products that cater to every Indian household.
        </p>
      </section>
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
                  className={`text-black text-center font-literata font-bold leading-normal ${activeTab === tab
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


      <div>
        {/* */}
        <div className="w-full manager-back-1-bg flex flex-col items-center justify-between bg-vimal relative">
          <Image
            src={ManBack1}
            className="hidden lg:inline z-0 -top-8 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <p className="font-bold z-10 text-[20px] md:text-[40px] text-center text-[#9F7B49]">
            Our Directors
          </p>
          <div className="flex flex-col md:flex-row items-center justify-between mt-4 md:mt-0">
            <div className="w-full md:w-1/2 flex items-center justify-center">
              <div className="relative w-[300px] md:w-[440px] flex justify-center items-center">
                <Image
                  src={VimalAnand}
                  alt="Banner Image"
                  width={240}
                  height={240}
                  className="object-cover h-[240px] w-[240px] md:h-[416px] md:w-[342px] z-50 cursor-pointer"
                />
                <Image
                  src={Frame1}
                  alt="Banner Image"
                  className="object-cover hidden md:inline absolute -top-8 z-20 h-[260px] left-6 w-[290px] md:w-[420px] md:h-[460px] cursor-pointer"
                />
                <Image
                  src={Ring1}
                  className="hidden lg:inline z-10 absolute -left-14 -bottom-28 h-[331px] w-[331px] rotate-animation"
                />
              </div>
            </div>
            <div className="w-full mt-4 md:mt-0 md:w-1/2 z-10 flex flex-col gap-2 items-center justify-center">
              <h3 className="text-center font-bold text-[#9F7B49] text-[18px] md:text-[24px] font-literata">
                VIMAL ANAND
              </h3>
              <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
                Managing Director
              </p>
              <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
                Driven by his passion and conviction, Mr. Vimal Anand has received formal training in beekeeping and Honey processing from the University of Warmia Olystyn Poland. Gradually he built a global presence & a robust structure supported by a state-of-the-art production factory to cater to the global markets. His undeterred leadership and vision have led the company to reach its heights today, becoming a leading player in the world's organized honey trade.
              </p>
            </div>
          </div>
        </div>
        <div className="w-full flex-col md:flex-row manager-back-2-bg relative flex items-end pb-8 justify-between">
          <Image
            src={ManBack2}
            className="hidden lg:inline z-0 top-0 absolute left-1/2 h-[600px] w-full transform -translate-x-1/2"
          />
          <div className="w-full mt-8 md:w-1/2 z-10 flex flex-col gap-2 items-center justify-center">
            <h3 className="text-center font-bold text-[#9F7B49] text-[18px] md:text-[24px] font-literata">
              AMIT ANAND
            </h3>
            <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
              Managing Director
            </p>
            <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
              A Delhi University Graduate from Kirori Mal College in Commerce, he spearheads key functions of Overall Plant Management; Human Resources; and Finance. The Managing Director of the company and the younger one of the two siblings, he has played the perfect foil to the elder in initiating the GREEN FIELD initiative of the factory in Roorkee. Leading from the front in all factory operations a person with hands-on expertise in executing all details at the plant level
            </p>
          </div>
          <div className="w-full mt-4 md:mt-0 md:w-1/2 flex items-center justify-center">
            <div className="relative w-[300px] md:w-[440px] flex justify-center items-center">
              <Image
                src={AmitAnand}
                height={240}
                width={240}
                alt="Banner Image"
                className="object-cover z-50 absolute h-[240px] w-[240px] md:h-[416px] md:w-[342px] cursor-pointer"
              />

              <Image
                src={Frame2}
                alt="Banner Image"
                className="object-cover -top-10 z-10 h-[240px] left-0 w-[240px] md:w-[420px] md:h-[460px] cursor-pointer"
              />

              <Image
                src={Ring1}
                className="hidden lg:inline z-0 absolute -left-20 -top-6 h-[331px] w-[331px] rotate-animation"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="my-10">
        <p className="text-center text-[14px] font-jost md:text-[22px] uppercase text-[#585858]">
          Celebrating a Legacy of Quality and Growth
        </p>
        <h3 className="text-center text-[20px] md:text-[40px] font-bold text-[#9F7B49] mt-2">
          Journey
        </h3>
        <p className="mt-4 text-customDarkGray text-center font-jost text-sm md:text-xl font-medium max-w-4xl mx-auto sm: px-4">
          From humble beginnings to a leading FMCG brand, Apis India’s journey is defined by a commitment to quality, innovation, and customer satisfaction. Join us as we continue to grow and inspire
        </p>
        <HexaGonalPage />
      </div>

      {/* <div classNamelass="relative h-screen">
        <div className="flex flex-wrap -ml-12 -mt-0 sm: ">
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
            // <div
            //   key={index}
            //   class="hexagon_jorney"
            //   style={{ backgroundImage: `url(${itm.image})` }}
            // ></div>
          ))}
        </div>
        <div className="flex flex-wrap -ml-12 -mt-8 even:ml-0" style={{ marginLeft: "57px" }}>
          {ImageDataJourney1.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
        <div className="flex flex-wrap -ml-12 -mt-8 even:ml-0">
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
        <div className="flex flex-wrap -ml-30 -mt-8 even:ml-0" style={{ marginLeft: "57px" }}>
          {ImageDataJourney.map((itm, index) => (
            <Image
              src={itm.image}
              class="hexagon_jorney"
            />
          ))}
        </div>
      </div>  */}
      {/* <Link href={"/our-brand/product-details/recipies"}>
          <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
            View All
          </button>
          ""
        </Link> */}
      <Link href={"/about-us/journey"}>
        <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 mt-2 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{ fontFamily: "Literata" }}>Check Our Milestone</button>
      </Link>

      {/* <button type="submit" class="bg-[#9F7B49] px-2 py-[7px] md:px-3 md:py-[11px] md:text-xl text-xs font-bold text-white" onClick style={{fontFamily:"Literata"}}>Check Our Milestone</button> */}
      {/* <div>Check Our Milestone</div> */}
    </>
  );
}


AboutUsPage.propTypes = {
  initialData: PropTypes.object,
};




