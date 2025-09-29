"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import EmblaCarousel from "@/components/common/Carousel/Carousel";

const Modal = ({ image, onClose }) => (
  <div className="fixed inset-0 bg-black bg-opacity-75 flex items-center justify-center z-50 p-4">
    <div className="relative max-w-4xl w-full">
      <button
        onClick={onClose}
        className="absolute top-2 right-2 text-white text-xl bg-black bg-opacity-50 rounded-full w-8 h-8 flex items-center justify-center"
      >
        &times;
      </button>
      <Image
        src={image}
        alt="Modal image"
        width={1200}
        height={800}
        className="w-full h-auto object-contain"
      />
    </div>
  </div>
);

export default function Album() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageSet, setImageSet] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const imagesPerPage = 8;
  const OPTIONS1 = { loop: true }


  // Set the image set from localStorage if available
  useEffect(() => {
    const storedData = localStorage.getItem("imageGroup");
    if (storedData) {
      // Parse the JSON string to an actual object
      const parsedData = JSON.parse(storedData);
      setImageSet(parsedData.imageGroup || []);
    }
  }, []);

  // Calculate the images to display for the current page
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;

  const currentImages = imageSet.slice(indexOfFirstImage, indexOfLastImage);

  // Pagination logic
  const totalPages = Math.ceil(imageSet.length / imagesPerPage);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const handleImageClick = (image) => {
    setSelectedImage(image);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  return (
    <>
      <div className="flex flex-col items-center justify-center">
        <p className="font-bold text-[20px] md:text-[40px] text-center text-[#9F7B49] font-literata">
          Life @Apis
        </p>
        <p className="text-sm w-[95%] md:text-xl md:w-[70%] md:leading-8 mt-3 md:mt-6 text-center font-jost">
          At AIL, we foster a collaborative and innovative work culture
          where every team member's ideas are valued, and growth opportunities
          are embraced with enthusiasm.
        </p>
      </div>

      {/* <p className="text-center mt-10 font-bold text-[#9F7B49] text-3xl py-4 sm:py-4 sm:mt-2 font-literata">
        {title}
      </p> */}

      <div className="flex justify-center mt-8 px-4">
        <div className="w-full max-w-5xl">
          <EmblaCarousel options={OPTIONS1} autoScroll>
            {currentImages?.map((image, index) => (
              <div key={index} className="embla__slide flex justify-center">
                <div
                  className="w-[250px] md:w-[300px] lg:w-[350px]   aspect-square overflow-hidden cursor-pointer"
                  onClick={() => handleImageClick(image)}
                >
                  <Image
                    src={image}
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


      {/* {selectedImage && <Modal image={selectedImage} onClose={closeModal} />} */}
      {/* Pagination Controls */}
      <div className="flex justify-center mt-8">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
          className="px-4 py-2 mx-2 bg-gray-300 text-black rounded"
        >
          Previous
        </button>
        <span className="px-4 py-2 text-lg">
          Page {currentPage} of {totalPages}
        </span>
        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
          className="px-4 py-2 mx-2 bg-gray-300 text-black rounded"
        >
          Next
        </button>
      </div>
    </>
  );
}
