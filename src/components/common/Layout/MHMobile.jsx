"use client";

import { useEffect, useRef, useState } from "react";
import { getInitials, useWindowDimensions } from "@/lib/helpers";
import Logo from "@/assets/images/logo.png";
import BarImg from "@/assets/images/bar.png";
import FbImg from "@/assets/images/social/fb.png";
import InstaImg from "@/assets/images/social/insta.png";
import LinkImg from "@/assets/images/social/link-din.png";
import UtubeImg from "@/assets/images/social/utube.png";
import Xcom from "@/assets/images/social/xcom.png";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { PATH_DATA } from "@/lib/constants";
import { usePathname } from "next/navigation";

// import { Button } from "@/components/ui/button";

// import MobileNav from "../MobileNav";

const MHMOBILE = () => {
  const headerRef = useRef(null);
  const [showNav, setShowNav] = useState(false);
  const [showFullSearch, setShowFullSearch] = useState(false);

  const routerPath = usePathname();
  const locale = routerPath.split("/")[1];

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (headerRef.current && !headerRef.current.contains(event.target)) {
        setShowNav(false);
        // clearGlobalSearchQuery();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      {/* Menu */}
      {!showFullSearch && (
        // <Button
        //   size="icon"
        //   variant="ghost"
        //   className="ml-2 bg-transparent hover:bg-transparent"
        //   onClick={() => {
        //     setShowSheet(true);
        //     setSheetPosition("left");
        //     // setSheetContent(<MobileNav />);
        //   }}
        // >
        <>
          <button
            onClick={() => {
              setShowNav(!showNav);
              // setSheetContent(<MobileNav />);
            }}
          >
            <Image
              src={BarImg}
              alt="FbImg"
              height={21}
              width={20}
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
            />
          </button>
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link href="/" className="flex items-center">
              <Image
                src={Logo}
                alt="Logo"
                className="object-contain w-[120px] h-[55px] object-center"
              />
            </Link>
          </div>
        </>
        // </Button>
      )}

      {/* Global Search */}
      <div
        className="flex w-full items-center justify-end gap-1"
        ref={headerRef}
      >
        <div
          className={cn(
            "flex flex-col items-center overflow-hidden bg-white",
            showFullSearch
              ? "w-full max-w-[340px] fold:max-w-[360px] normal:max-w-[400px] xs:max-w-[450px] sm:max-w-[500px]"
              : "w-0"
          )}
        >
          {/* <GlobalSearch
            className={cn(
              "flex w-full flex-col bg-white transition-all duration-300",
              showFullSearch ? "pl-2 opacity-100 xs:pl-0" : "px-0 opacity-0"
            )}
            placeholder="Search for beer, breweries"
            searchTerm={globalSearchQuery}
            setSearchTerm={setGlobalSearchQuery}
          /> */}
        </div>
      </div>

      {/* Settings */}
      <div className="mr-2 flex items-center gap-2">
        {!showFullSearch && (
          <>
            {/* Cart Icon */}
            {/* cog button for screen < 768 */}
            {/* <Button
              size="icon"
              variant="ghost"
              className="bg-transparent hover:bg-transparent md:hidden"
              onClick={() => {
                setShowSheet(true);
                setSheetPosition("right");
                setSheetContent(<MobileSettings />);
                setSheetClassName("!max-w-[400px]");
              }}
                
            > */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="25"
              viewBox="0 0 24 25"
              fill="none"
            >
              <path
                d="M15.755 14.6118H14.965L14.685 14.3418C15.665 13.2018 16.255 11.7218 16.255 10.1118C16.255 6.52182 13.345 3.61182 9.755 3.61182C6.165 3.61182 3.255 6.52182 3.255 10.1118C3.255 13.7018 6.165 16.6118 9.755 16.6118C11.365 16.6118 12.845 16.0218 13.985 15.0418L14.255 15.3218V16.1118L19.255 21.1018L20.745 19.6118L15.755 14.6118ZM9.755 14.6118C7.26501 14.6118 5.255 12.6018 5.255 10.1118C5.255 7.62182 7.26501 5.61182 9.755 5.61182C12.245 5.61182 14.255 7.62182 14.255 10.1118C14.255 12.6018 12.245 14.6118 9.755 14.6118Z"
                fill="#3D3D3D"
              />
            </svg>
            {/* </Button> */}
          </>
        )}
      </div>

      <div
        className={cn(
          {
            "transition-transform duration-300 ease-in-out transform": true,
            "-translate-x-0": showNav,
            "-translate-x-full": !showNav,
          },
          "h-screen p-4 -top-[56px] sm:-top-[64px] left-0 absolute bg-[#FFFBF6] w-[200px] border"
        )}
      >
        {/* <div>
          <Link href={"/"} className="mb-0.5 flex items-center justify-center">
            <Image
              src={Logo}
              // width={120}
              // height={55}
              alt="header-logo"
              className="object-contain w-[120px] h-[55px] object-center"
            />
          </Link>
        </div> */}
        <nav className={cn("mt-6 flex flex-col gap-3")}>
          {PATH_DATA.map((path) => {
            const tabUrlWithLocale = `/${locale}${path.url}`;

            return (
              <a
                key={path.url}
                href={tabUrlWithLocale}
                onClick={() => setShowNav(false)}
                className="flex text-[#3D3D3D] flex-col hover:font-bold"
              >
                <span className="truncate" onClick={tabUrlWithLocale}>{path.name}</span>
                <div className={cn("mt-1 w-8 rounded-full")} />
              </a>
            );
          })}
        </nav>
        <div className="flex mt-4 flex-flex-wrap items-center justify-center gap-5">
          <a href={"https://www.facebook.com/apisindialtd"} target="_blank">
            <Image
              src={FbImg}
              alt="FbImg"
              height={21}
              width={20}
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
            />
          </a>
          <a href={"https://x.com/apis_india"} target="_blank">
            <Image
              src={Xcom}
              height={21}
              width={20}
              alt="Xcom"
              className="h-[21px] w-[20px] cursor-pointer object-contain object-center"
            />
          </a>
          <a
            href={"https://www.youtube.com/channel/UCbSF_MEdOdshf3QvglvBflQ"}
            target="_blank"
          >
            <Image
              src={UtubeImg}
              alt="UtubeImg"
              height={20}
              width={27}
              className="h-[20px] w-[27px] cursor-pointer object-contain object-center"
            />
          </a>
          <a href={"https://www.instagram.com/apisindialtd/"} target="_blank">
            <Image
              src={InstaImg}
              width={21}
              height={21}
              alt="InstaImg"
              className="h-[21px] w-[21px] cursor-pointer object-contain object-center"
            />
          </a>
          <a
            href={"https://www.linkedin.com/company/apis-india-ltd"}
            target="_blank"
          >
            <Image
              src={LinkImg}
              alt="LinkImg"
              height={21}
              width={21}
              className="h-[21px] w-[21px] cursor-pointer object-contain object-center"
            />
          </a>
        </div>
      </div>
    </>
  );
};

export default MHMOBILE;
