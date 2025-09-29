"use client"

import { useEffect, useState } from "react";
import EmblaCarousel from "../../Carousel/Carousel";
import ImageBanner from "../../Layout/Banner";
import MediaBannerNew from "@/assets/images/Media/mediaBannerNew.png";
import axios from "axios";
import Image from "next/image";

export default function ApisInTheNews() {
    const OPTIONS = { loop: true };
    const [mediaData, setMediaData] = useState([])
    const [mediaSection, setMediaSection] = useState([]);


    useEffect(() => {
        const fetchMediaData = async () => {
            try {
                const response = await axios.get("/api/mediaGallery");
                console.log("response", response);

                setMediaData(response.data)
                console.log("ApisMedia", response.data);

            } catch (error) {
            }
        }
        fetchMediaData()
        const getMediaSection = async () => {
            try {
                const response = await axios.get("/api/HomePage/mediaSection");
                console.log("response", response);
                setMediaSection(response.data)
                console.log("responseDataMedia", response);
            }
            catch (error) {
                console.log("Error");

            }
        }
        getMediaSection()
    }, [])
    return (
        <>
            <ImageBanner banner={MediaBannerNew} />
            <div className="flex flex-col items-center justify-center">
                <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
                    Apis in the News
                </p>
                <p className="text-sm w-[95%]  md:text-xl md:w-[70%] md:leading-8 mt-3  md:mt-6 text-center font-jost">
                    AIL has consistently shined in the news, with press releases highlighting our commitment to quality, innovation, and sustainability. Our brand’s achievements and initiatives capture media attention and resonate with audiences.
                </p>
            </div>
            {/* News Items Grid */}
            <div className="w-full py-6 md:py-14 flex items-center justify-center flex-wrap gap-x-8 gap-y-10 md:gap-y-24">
                <EmblaCarousel options={OPTIONS}>
                    {mediaSection?.map((itm, index) => (
                        <div key={index} className="embla__slide flex cursor-pointer flex-col gap-1 w-[280px] md:w-[340px] 2xl:w-[383px] mb-8"
                        // onClick={() => openModal(itm)} // Open modal on click
                        >
                            <a
                                key={index}
                                href={itm.link}
                                target="_blank"
                            >
                                <div className="h-[260px] md:h-[370px] 2xl:h-[409px]">
                                    <Image
                                        src={itm.mediaImage}
                                        alt="News Image"
                                        width={440}
                                        height={440}
                                        className="h-[260px] md:h-[370px] 2xl:h-[409px]"
                                    />
                                </div>
                                {/* <div className="w-[140px] md:w-[180px]">
                  <Image src={itm.name} alt="News Name" />
                </div> */}
                                <div className="text-xs md:text-base pt-1">{itm.desc}</div>
                                <span>{itm.date}</span>
                                {/*  */}
                                <div className="relative border-b-2 mt-2 md:mt-4 border-[#000000] w-[220px] cursor-pointer text-xs">
                                    Read More
                                    <div className="absolute -end-6 top-1.5 md:-end-10 md:top-0 d-0 w-[20px] h-[20px] md:h-[33px] md:w-[33px] rounded-full border border-black bg-[#FFFBF6] hover:bg-[#9F7B49] hover:border-none"></div>
                                </div>
                            </a>
                        </div>
                    ))}
                </EmblaCarousel>
            </div>
        </>
    )
}