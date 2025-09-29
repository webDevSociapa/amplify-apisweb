"use client"

import { useEffect, useState } from "react";
import ManBack1 from "@/assets/images/AboutUs/ManBack1.png";
import ManBack2 from "@/assets/images/AboutUs/ManBack2.png";
import Frame1 from "@/assets/images/AboutUs/Frame1.png";
import Frame2 from "@/assets/images/AboutUs/Frame2.png";
import Ring1 from "@/assets/images/OurBrands/Ring-4.png";
import Image from "next/image";
import axios from "axios";

export default function OurDirectors() {
    const [ourDirector1,setOurDirector1] = useState([])
    const [ourDirector2,setOurDirector2] = useState([])

    useEffect(()=>{
        const fetchMisionData = async()=>{
            try {
              const response = await axios.get("/api/AboutUs/ourDirectors");    
              console.log("ourDirector",response.data);       
              setOurDirector1(response.data.data[0])
              setOurDirector2(response.data.data[1])
            } catch (error) { 
            }
          }
          fetchMisionData()
      },[])
    //   console.log("ourDirector.data[0].Name",ourDirector.data[0].AddImage);
      
    return (
      <>
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
                                src={ourDirector1.AddImage}
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
                            {ourDirector1.Name}
                        </h3>
                        <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
                            {ourDirector1.Designation}
                        </p>
                        <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
                            {ourDirector1.Description}
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
                        {ourDirector2.Name}
                    </h3>
                    <p className="text-center text-[#373737] font-normal text-[16px] md:text-[19px] font-literata">
                        {ourDirector2.Designation}
                    </p>
                    <p className="text-center text-[#373737] font-medium w-[85%] md:w-[70%] text-[14px] md:text-[22px] font-jost text-justify">
                        {ourDirector2.Description}
                    </p>
                </div>
                <div className="w-full mt-4 md:mt-0 md:w-1/2 flex items-center justify-center">
                    <div className="relative w-[300px] md:w-[440px] flex justify-center items-center">
                        <Image
                            src={ourDirector2.AddImage}
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
      </>
    )
}