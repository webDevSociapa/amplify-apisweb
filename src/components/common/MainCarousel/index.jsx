import React, { Component } from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";

export default class Carasol extends Component {
  // Hardcoded video banner URLs
  banners = [
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/638993b4-7545-496d-815c-5d7d81c22ea4_Main+Banner+Video+02.mp4",
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/9b9afe8e-8323-4eea-9406-469b710acb5e_Dates+1440-698.mp4",
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/f70925c7-972d-4c27-83bf-d82477e3202e_Jam+1440-698.mp4",
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/e3c07020-f0f4-4b14-a33c-5ffd278aae15_Saffron+1440-698.mp4",
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/2caf608c-c935-44bb-af41-c45f36c67fc4_Green+Tea+1440-698.mp4",
    "https://apisindia.s3.ap-south-1.amazonaws.com/homeBanner/e8edb7bc-225d-4d5d-b7d6-a6a739822069_Main+Banner+Video+2+(3).mp4",
  ];

  render() {
    return (
      <div className="carousel-wrapper">
        <Carousel
          autoPlay
          showThumbs={false}
          infiniteLoop
          interval={2500}
          showStatus={false}
          showArrows={false}
        >
          {this.banners.map((videoUrl, index) => (
            <div
              className="carousel_banner home-shadow"
              style={{ width: "100%" }}
              key={index}
            >
              <video
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                className="video-img1"
                src={videoUrl}
                style={{ width: "100%",  objectFit: "cover" }}
              />
            </div>
          ))}
        </Carousel>
      </div>
    );
  }
}
