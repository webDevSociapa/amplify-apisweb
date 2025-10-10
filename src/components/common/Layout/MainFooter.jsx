"use client";

import { PATH_DATA } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Logo from "@/assets/images/logo.png";
import FbImg from "@/assets/images/social/fb.png";
import InstaImg from "@/assets/images/social/insta.png";
import LinkImg from "@/assets/images/social/link-din.png";
import UtubeImg from "@/assets/images/social/utube.png";
import Xcom from "@/assets/images/social/xcom.png";
import {
  faLocationDot,
  faPhone,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";

const MainFooter = () => {
  const routerPath = usePathname();
  const locale = routerPath.split("/")[1];

  const [contactDetails, setContactDetails] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("/api/contactDetails");
        console.log("contactDetails", contactDetails);

        setContactDetails(response.data[0]);
      } catch (error) {}
    };
    fetchData();
  }, []);

  return (
    <footer className="bottom-0 z-10 w-full bg-[#FFF9F0]">
      <div className="mx-auto flex w-full flex-col">
        <div className="flex flex-col items-center md:items-start md:flex-row">
          {/* Logo */}
          <div className="mx-4 md:mx-10 my-4 md:my-10 w-[100px] md:w-[155px]">
            <Link href={"/"}>
              <Image
                src={Logo}
                width={155}
                height={80}
                alt="footer-logo"
                className="h-full w-full object-contain object-center"
              />
            </Link>
          </div>

          {/* Quick Links */}
          <div className="my-4 md:my-10 flex flex-col items-center md:items-start text-center md:text-left border-s border-[#000000] px-4 md:px-10 max-[800px]:border-s-0">
            {/* <div className="flex flex-wrap justify-center md:justify-start gap-x-6 md:gap-x-12 gap-y-2 md:gap-y-4 sm:gap-y-16">
          {PATH_DATA.map((path) => {
            const tabUrlWithLocale = `/${locale}${path.url}`;
            return (
              <Link
                key={path.url}
                href={path.url === "/our-brand" ? "#" : tabUrlWithLocale}
                className="text-sm md:text-base font-medium text-[#9F7B49]"
              >
                {path.name}
              </Link>
            );
          })}
        </div> */}

            {/* Contact Info Blocks */}
            <div className="mt-6 flex flex-col gap-6 text-[#4B4B4B] text-sm md:text-base w-full">
              <div>
                <p className="font-bold">AIL Registered Office:</p>
                <p>18/32 East Patel Nagar, New Delhi - 110008</p>
              </div>
              <div className="flex gap-3 items-start">
                <FontAwesomeIcon
                  icon={faPhone}
                  className="pt-1 text-[#9F7B49]"
                />
                <div>
                  <p className="inline font-bold">Toll Free Number:</p>
                  <span className="inline">+91-11-43206666</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-t-zinc-300 p-4 md:px-6 lg:py-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="flex flex-col md:flex-row md:items-center justify-center gap-4 text-sm text-[#9F7B49] font-normal md:justify-start lg:gap-8">
              <span>CopyRight Reserved By ApisIndia.com</span>
              <Link href={"/our-policy?policy=terms"}>
                <span className="hover:text-activeGreen-500 cursor-pointer">
                  Terms & Conditions
                </span>
              </Link>
              <Link href={"/our-policy?policy=privacy"}>
                <span className="hover:text-activeGreen-500 cursor-pointer">
                  Privacy Policy
                </span>
              </Link>
            </div>
            {/* Social Icons */}
            <div className="flex items-center gap-5">
              <a href={"https://www.facebook.com/apisindialtd"} target="_blank">
                <Image
                  src={FbImg}
                  alt="FbImg"
                  height={21}
                  width={20}
                  className="cursor-pointer"
                />
              </a>
              <a href={"https://x.com/apis_india"} target="_blank">
                <Image
                  src={Xcom}
                  alt="Xcom"
                  height={21}
                  width={20}
                  className="cursor-pointer"
                />
              </a>
              <a
                href={
                  "https://www.youtube.com/channel/UCbSF_MEdOdshf3QvglvBflQ"
                }
                target="_blank"
              >
                <Image
                  src={UtubeImg}
                  alt="UtubeImg"
                  height={20}
                  width={27}
                  className="cursor-pointer"
                />
              </a>
              <a
                href={"https://www.instagram.com/apisindialtd/"}
                target="_blank"
              >
                <Image
                  src={InstaImg}
                  alt="InstaImg"
                  height={21}
                  width={21}
                  className="cursor-pointer"
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
                  className="cursor-pointer"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default MainFooter;
