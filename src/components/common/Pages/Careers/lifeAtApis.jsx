"use client"

import Banner from "@/assets/images/Careers/careerBanner.png";
import ImageBanner from "../../Layout/Banner";
import { useEffect, useState } from "react";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function LifeAtApis() {
  const router = useRouter();
  const [apisLifeData, setApisLifeData] = useState([])

  const handleImageClick = (item) => {
    localStorage.setItem('imageGroup', JSON.stringify(item));
    router.push('/careers/careerGallary');
  };

  useEffect(() => {
    const fetchLifeApis = async () => {
      try {
        const response = await axios.get("/api/careers/apisLife");
        console.log("responseLifeAt", response);
        setApisLifeData(response.data)
      } catch (error) {
        console.log("error", error);
      }
    }
    fetchLifeApis()
  }, [])

  return (
    <>
      <ImageBanner banner={Banner} />
      <div id="life-at-apis" className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Life @Apis
        </p>
        <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center font-jost">
        At AIL, we foster a collaborative and innovative work culture where every team member's ideas are valued, and growth opportunities are embraced with enthusiasm.
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
    </>
  )
}