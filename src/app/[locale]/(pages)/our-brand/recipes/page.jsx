"use client";

import ImageBanner from "@/components/common/Layout/Banner";
import React, { useState, useEffect, useRef } from "react";
import Brand from "@/assets/images/OurBrands/Brand.png";
import Apple from "@/assets/images/OurBrands/Apple.png";
import Berry from "@/assets/images/OurBrands/Berry.png";
import HOMEJAM from "@/assets/images/OurBrands/apisJam1.jpg"
import MIXEDFRUIT from "@/assets/images/OurBrands/apisJam3.jpg"
import JAMFILLED from "@/assets/images/OurBrands/apisjam4.jpg"
import RICEPUDDING from "@/assets/images/OurBrands/apisJam2.jpg"
import BriDate from "@/assets/images/OurBrands/apisDate2.jpg"
import WalnutCake from "@/assets/images/OurBrands/apisDate3.jpg"
import Otmeal from "@/assets/images/OurBrands/apisDate1.jpg"
import Chocolate from "@/assets/images/OurBrands/chocolateApis.jpg"
import GreenBeans from "@/assets/images/OurBrands/gingerApis2.jpg"
import SpicyLentil from "@/assets/images/OurBrands/gingerApis3.jpg"
import GingerApis from "@/assets/images/OurBrands/gingerApis.jpg"
import ChickenCurry from "@/assets/images/OurBrands/apisGinger.jpg"
import TeaLeaf from "@/assets/images/OurBrands/Tealeaf.jpg"
import GreenTreePeach from "@/assets/images/OurBrands/greentea-small.jpg"
import StrawBerry from "@/assets/images/OurBrands/Strawberry-Peach.jpg"
import LemonyTea from "@/assets/images/OurBrands/LemonyTea.jpg"
// import TeaLeaf from "@/assets/images/OurBrands/Tealeaf.jpg"
import MacaroniSalad from "@/assets/images/OurBrands/macaroni-salad.jpg"
import MasalaMacaroni from "@/assets/images/OurBrands/Masala-macaroni.jpg"
// import LemonyTea from "@/assets/images/OurBrands/LemonyTea"
import AchaariPaneer from "@/assets/images/OurBrands/paneer.jpg"
import AchaariChicken from "@/assets/images/OurBrands/achariChicken.jpg"
import AchaariParatha from "@/assets/images/OurBrands/paratha.jpg"
import Gobi from "@/assets/images/OurBrands/gobi.jpg"
import LemonHoney from "@/assets/images/OurBrands/lemonHoney.jpg"
import GingerHoney from "@/assets/images/OurBrands/gingerHoney.jpg"
import TulsiHoney from "@/assets/images/OurBrands/tulsiHoney.jpg"
import LycheeHoney from "@/assets/images/OurBrands/LycheeHoney.jpg"

import SoyaCurry from "@/assets/images/OurBrands/soyaCurry.jpg"
import SoyaFriedRice from "@/assets/images/OurBrands/soyaFriedRice.jpg"
import SoyaChunks from "@/assets/images/OurBrands/SoyaChunks.png"
import SoyaChilli from "@/assets/images/OurBrands/soyaChilli.jpg"

import HoneyBeetSalad from "@/assets/images/OurBrands/honeyBestSalad.jpg"
import HotHoney from "@/assets/images/OurBrands/hotHoney.jpg"
import HoneyApple from "@/assets/images/OurBrands/HoneyApple.jpg"
import ChickenSweet from "@/assets/images/OurBrands/chickenSweet.jpg"
import Image from "next/image";
import EmblaCarousel from "@/components/common/Carousel/Carousel";
import {RECEIPE_DATA,RECIPIES_DATA} from '@/lib/constants'

const page = () => {

  const OPTIONS = { loop: true };

 
  // const [selectedReceipeType, setSelectedReceipeType] = useState(
  //   RECEIPE_TYPE_DATA[0]
  // );
  const [selectedReceipe, setSelectedReceipe] = useState(RECEIPE_DATA[0]);  

  const [visibleRecipes, setVisibleRecipes] = useState(6); // Number of recipes to show initially
  const observerRef = useRef(); // Create a ref for the observer

  const loadMoreRecipes = () => {
    setVisibleRecipes((prev) => prev + 6); // Load 6 more recipes
  };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        loadMoreRecipes(); // Load more recipes when the observer is triggered
      }
    });

    if (observerRef.current) {
      observer.observe(observerRef.current); // Observe the loading element
    }

    return () => {
      if (observerRef.current) {
        observer.unobserve(observerRef.current); // Clean up the observer
      }
    };
  }, []);

  if(RECIPIES_DATA.length === 0) {
    return <div>Robin khan</div>  }
  

  return (
    <>
      <ImageBanner banner={Brand} className="h-full w-full" />
      <p className="font-bold text-[#84663C] md:text-[40px] text-[20px] w-[75%] capitalize text-center">
        make your dine complete with our recipes
      </p>
      <p className="text-center w-[55%] font-jost text-sm  md:text-xl text-[#454545] my-8 rgba(0, 0, 0, 1)">
        Explore a world of delicious possibilities with AIL! Our curated
        recipes, crafted using the finest Apis honey and other natural products,
        are perfect for every palate. Whether you're whipping up a quick snack
        or a gourmet meal, our products bring health, flavor, and quality to
        your kitchen. Discover new culinary delights with Apis India today!
      </p>

      {/* Recipe Type Horizontal Scrollable (Mobile Only) */}
      {/* isme mujhe RECEIPE_DATA ke according  */}
      {/* <div className="md:flex-wrap md:justify-center flex overflow-x-scroll hide-scrollbar mt-8 gap-8 w-full items-center justify-start">
        {RECEIPE_TYPE_DATA.map((itm) => {
          return (
            <div
              key={itm}
              className={`cursor-pointer whitespace-nowrap text-xl font-bold px-6 py-3 rounded-[20px] ${
                selectedReceipeType === itm
                  ? "bg-[#84663C] text-white shadow-xl"
                  : "bg-[#DBDBDB] text-black"
              }`}
              onClick={() => {
                setSelectedReceipeType(itm);
              }}
            >
              {itm}
            </div>
          );
        })}
      </div> */}

      {/* Brand Specific Section */}
      <div className="bg-[#FFF9F0] p-6 mt-12 w-full">
        <p className="text-2xl font-bold">Product Specific</p>

        {/* Recipe Data Horizontal Scrollable (Mobile Only) */}
        <div className="md:flex-wrap flex overflow-x-scroll hide-scrollbar mt-8 gap-8 w-full items-center">
          {RECEIPE_DATA.map((itm) => {
            return (
              <div
                key={itm}
                className={`cursor-pointer whitespace-nowrap text-xl font-bold px-6 py-3 rounded-[5px] ${
                  selectedReceipe === itm
                    ? "bg-[#84663C] text-white shadow-xl border border-[#84663C]"
                    : "bg-[#FFF9F0] border border-black text-black"
                }`}
                onClick={() => {
                  setSelectedReceipe(itm);
                }}
              >
                {itm}
              </div>
            );
          })}
        </div>
      </div>
      <div className="w-[90%] mx-auto gap-10 py-10 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center justify-center media-apis">
        {RECIPIES_DATA.filter((itm) => itm.name === selectedReceipe)
          .slice(0, visibleRecipes) // Show only the visible recipes
          .map((itm, index) => {
            return (
              <div className="embla__slide h-[500px]" key={index} >
                <div className="w-full">
                  <div className="w-full">
                    <iframe
                      src={itm.video}
                      height={400}
                      alt="header-logo"
                      className="bg-opacity-40 w-full max-h-[363px] max-w-[514px] rounded-tl-[50px] rounded-br-[50px] rounded-tr-[25px]"
                    />
                  </div>
                  <div className="border-2 max-w-[514px] bg-white border-[hsl(35,37%,45%)] mt-4 lg:mt-6 flex flex-col gap-1 lg:gap-3 py-3 px-2 lg:px-4">
                    <p className="text-sm lg:text-xl font-bold text-[#373737] font-jost">
                      {itm?.title}
                    </p>
                    <p className="text-sm lg:text-xl font-normal text-[#373737]">
                      {itm?.time}
                    </p>
                    <p className="text-[#666666] text-xs lg:text-sm font-jost">
                      {itm?.descreption}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
      </div>
      <div ref={observerRef} className="h-10" /> {/* Loading element for the observer */}
    </>
  );
};

export default page;