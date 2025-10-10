"use client";

import Image from "next/image";
import useEmblaCarousel from "embla-carousel-react";
import AutoScroll from "embla-carousel-auto-scroll";
import PropTypes from "prop-types";
import HoneyMug from "@/assets/images/heart-of-bavaria-section/honey-mug.png";
import HoneyNest from "@/assets/images/heart-of-bavaria-section/honey-nest.png";
import Banner from "@/assets/images/Careers/sustainBannerNew.png";
import Award from "@/assets/images/Careers/Award.png";
import Celebrations from "@/assets/images/Careers/Celebrations.png";
import Engagements from "@/assets/images/Careers/Engagements.png";

// sustain
import sustainBility01 from "@/assets/images/Careers/s1.png";
import sustainBility02 from "@/assets/images/Careers/s2.png";
import sustainBility03 from "@/assets/images/Careers/s3.png";
import sustainBility04 from "@/assets/images/Careers/s4.png";
import sustainBility05 from "@/assets/images/Careers/s5.png";
import sustainBility06 from "@/assets/images/Careers/s6.png";
// import TrainingSession from "@/assets/images/Careers/Training&Session.png";
import ImageBanner from "../../Layout/Banner";
import {
  NextButton,
  PrevButton,
  usePrevNextButtons,
} from "../../Carousel/EmblaCarouselArrowButtons";
import { useEffect, useState } from "react";
import axios from "axios";
import EmblaCarousel from "../../Carousel/Carousel";
import Head from "next/head";
import { Button } from "@mui/material";

const SUSTAINABILITY_DATA = [
  {
    video: "https://www.youtube.com/embed/WrVpkXNKN0s?si=3KELcA1Kg-kkOWb8",
    title: "Celebrating Raksha Bandhan with the children of Mala Smriti Home.",
  },
  {
    video: "https://www.youtube.com/embed/pdy5gJ36egw?si=XkMlb7RXfhCyegaQ",
    title: "It was a pleasure to associate with Lotus Petal Foundation",
  },
  {
    video: "https://www.youtube.com/embed/o1A2uGBuVRs?si=gk_zkJN1CtIWlTPk",
    title: "Sweet deal alert! Apis Organic Honey",
  },
  {
    video: "https://www.youtube.com/embed/GApcDNHtgnE?si=iq73ny88KY04wK2X",
    title: "Celebrating Father’s Day",
  },
  {
    video: "https://www.youtube.com/embed/U6pkoQRrcNk?si=z7ZDd9KQWnBuouRO",
    title: "We celebrated mothers with Grihshobha",
  },
  {
    video: "https://www.youtube.com/embed/Vn6jwbZqfhA?si=iPz3NjklLnXpIBTI",
    title: "Apis Shapes The Future",
  },
];

const SUSTAINBILITY_IMAGE = [
  { image: sustainBility01 },
  { image: sustainBility02 },
  { image: sustainBility03 },
  { image: sustainBility04 },
  { image: sustainBility05 },
  { image: sustainBility06 },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/2_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/3_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/4_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/5_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/6_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/7_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/8_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/9_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/10_CSR+Images.jpg",
  },
  {
    image:
      "https://apisindia.s3.ap-south-1.amazonaws.com/sustainBilitys/11_CSR+Images.jpg",
  },
];

export default function Sustainability() {
  const [sustainBiltyData, setSustainBiltyData] = useState([]);
  const [activeTab, setActiveTab] = useState("image"); // Manage active tab  const [sustainBiltyData, setSustainBiltyData] = useState([])
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: false }),
  ]);
  const [imageSet, setImageSet] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [showAllImages, setShowAllImages] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const imagesPerPage = 8;

  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };
  const OPTIONS1 = { loop: true };

  const [currentIndex, setCurrentIndex] = useState(0);

  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = imageSet.slice(indexOfFirstImage, indexOfLastImage);

  // Pagination logic
  const totalPages = Math.ceil(imageSet.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };
  const VideoSection = ({ videos, emblaRef }) => (
    <section className="embla flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container py-8">
          {videos.map((itm, index) => (
            <div className="embla__slide" key={index}>
              <div className="rounded-xl p-4 border border-[#85673D]">
                <iframe
                  width="100%"
                  height="240"
                  className="h-[240px] md:h-[300px] rounded-2xl w-full bg-opacity-40"
                  src={itm.videoUrl}
                  title={itm.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allowFullScreen
                  style={{ aspectRatio: "16/9" }}
                ></iframe>
                <p className="text-xs md:text-base font-normal mt-2">
                  {itm.title}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const ImageSection = ({ images, emblaRef }) => (
    <section className="embla flex items-center justify-center">
      <div className="embla__viewport w-full" ref={emblaRef}>
        <div className="embla__container py-8">
          {images.map((item, index) => (
            <div className="embla__slide" key={index}>
              <div className="rounded-xl p-4 border border-[#85673D]">
                <Image
                  src={item.image || "/Eovibb.png"} // Use a valid path here
                  alt={`CSR Image ${index + 1}`}
                  className="w-full rounded-lg border border-[#85673D]"
                  width={300}
                  height={200}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );

  const Pagination = ({
    currentIndex,
    onPrevButtonClick,
    onNextButtonClick,
    totalItems,
    handleNumberClick,
  }) => (
    <div className="pagination w-[90%] mt-4 flex justify-between space-x-2">
      <PrevButton
        onClick={() => {
          onPrevButtonClick();
          handleNumberClick(currentIndex - 1);
        }}
        disabled={currentIndex === 0}
      />
      <div className="flex items-center justify-center">
        {Array.from({ length: totalItems }).map((_, index) => (
          <p
            key={index}
            onClick={() => handleNumberClick(index)} // Add this onClick handler
            className={`text-base md:text-3xl border-black px-2 md:px-6 cursor-pointer ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"}
              ${index === 0 ? "" : "border-l"}`}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
      <NextButton
        onClick={() => {
          handleNumberClick(currentIndex + 1);
          onNextButtonClick();
        }}
        disabled={currentIndex + 1 === totalItems}
      />
    </div>
  );

  useEffect(() => {
    const fetchSustainBilty = async () => {
      try {
        const response = await axios.get("/api/sustainBility");
        console.log("response", response);

        setSustainBiltyData(response.data);
      } catch (error) {}
    };
    fetchSustainBilty();
  }, []);

  return (
    <>
      <Head>
        <title> Work Culture | Apis India</title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Apis A leading FMCG company which has been thrice awarded the prestigious APEDA Export Award by Ministry of Commerce, Government of India, for our achievement in exports of honey."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />
        <meta property="og:title" content=" Work Culture | Apis India" />
        <meta
          property="og:description"
          content="Apis A leading FMCG company which has been thrice awarded the prestigious APEDA Export Award by Ministry of Commerce, Government of India, for our achievement in exports of honey."
        />
        <meta
          property="og:site_name"
          content="http://www.apisindia.com/efo.php"
        />
        <meta name="twitter:title" content=" Work Culture | Apis India" />
        <meta
          name="twitter:description"
          content="Apis A leading FMCG company which has been thrice awarded the prestigious APEDA Export Award by Ministry of Commerce, Government of India, for our achievement in exports of honey."
        />
        <meta itemprop="title" content=" Work Culture | Apis India" />
        <meta
          itemprop="description"
          content="Apis A leading FMCG company which has been thrice awarded the prestigious APEDA Export Award by Ministry of Commerce, Government of India, for our achievement in exports of honey. "
        />
      </Head>
      <ImageBanner banner={Banner} />

      {/* Heading and Description */}
      <div className="w-full flex flex-col items-center justify-center gap-4 md:gap-10 px-4">
        <p className="text-[20px] text-center md:text-[40px] font-bold text-[#9F7B49] font-literata">
          CSR @AIL
        </p>
        <p className="w-full md:w-[75%] text-sm md:text-xl text-center font-jost">
          {sustainBiltyData[0]?.csrContent || "Loading..."}
        </p>
      </div>

      {/* Tabs */}
      <div className="w-full flex justify-center items-center my-4">
        <div className="flex gap-4">
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "image"
                ? "bg-[#85673D] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("image")}
          >
            Images
          </button>
          <button
            className={`px-4 py-2 rounded ${
              activeTab === "video"
                ? "bg-[#85673D] text-white"
                : "bg-gray-200 text-black"
            }`}
            onClick={() => setActiveTab("video")}
          >
            Videos
          </button>
        </div>
      </div>

      {/* Image Carousel */}
      {activeTab === "image" && (
        <div className="flex justify-center mt-8 px-2 md:px-4">
          <div className="w-full max-w-6xl">
            <EmblaCarousel
              options={{ loop: true, align: "center", slidesToScroll: 1 }}
              autoScroll
            >
              {SUSTAINBILITY_IMAGE?.map((image, index) => (
                <div key={index} className="embla__slide flex justify-center">
                  <div
                    className="w-[85%] sm:w-[250px] md:w-[300px] lg:w-[350px] aspect-square overflow-hidden cursor-pointer rounded-xl"
                    onClick={() => handleImageClick(image)}
                  >
                    <Image
                      src={image.image || "/Eovibb.png"}
                      alt={image}
                      width={400}
                      height={400}
                      className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                    />
                  </div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
        </div>
      )}

      {/* Video Section */}
      {activeTab === "video" && (
        <section className="embla flex items-center justify-center px-2 md:px-0">
          <div className="embla__viewport w-full" ref={emblaRef}>
            <div className="embla__container py-8 gap-6">
              {sustainBiltyData.map((itm, index) => (
                <div className="embla__slide" key={index}>
                  <div className="rounded-xl p-4 border border-[#85673D] max-w-md mx-auto">
                    <iframe
                      className="rounded-2xl w-full h-[220px] md:h-[300px] bg-opacity-40"
                      src={itm.videoUrl}
                      title={itm.title}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                      referrerPolicy="strict-origin-when-cross-origin"
                      allowFullScreen
                    ></iframe>
                    <p className="text-xs md:text-base font-normal mt-2 text-center">
                      {itm.title}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Pagination */}
      {/* <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-lg">Page {currentPage} of {totalPages}</span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 text-black rounded disabled:opacity-50"
        >
          Next
        </button>
      </div> */}

      {/* View More Button */}
      <div className="flex justify-center">
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 text-lg bg-[#855B3D] text-white rounded-md hover:bg-[#734C33] transition-colors duration-300 mt-8"
        >
          View More
        </button>
      </div>
      {isModalOpen && (
        <div className="fixed inset-0 z-50 bg-black bg-opacity-60 flex items-center justify-center px-2 mt-40">
          <div className="bg-white rounded-2xl max-h-[90vh] w-full max-w-6xl overflow-y-auto p-6 relative">
            {/* Close Icon */}
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-4 right-4 text-2xl font-bold text-black hover:text-[#855B3D]"
            >
              &times;
            </button>

            <h2 className="text-center text-2xl font-semibold text-[#855B3D] mb-6">
              All CSR Images
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
              {SUSTAINBILITY_IMAGE?.map((image, index) => (
                <div
                  key={index}
                  className="w-full aspect-square overflow-hidden rounded-xl cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image.image || "/Eovibb.png"}
                    alt={`CSR ${index + 1}`}
                    width={400}
                    height={400}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

Sustainability.propTypes = {
  initialData: PropTypes.object,
};
