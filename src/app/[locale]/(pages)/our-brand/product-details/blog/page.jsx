"use client";

import {
  NextButton,
  PrevButton,
} from "@/components/common/Carousel/EmblaCarouselArrowButtons";
import ImageBanner from "@/components/common/Layout/Banner";
import Image from "next/image";
import React, { useState } from "react";
import Blog from "@/assets/images/OurBrands/TheBlog.png";
import Blog1 from "@/assets/images/OurBrands/Blog1.png";
import Blog2 from "@/assets/images/OurBrands/Blog2.png";
import Blog3 from "@/assets/images/OurBrands/Blog3.png";
import Blog4 from "@/assets/images/OurBrands/Blog4.png";
import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";

const page = () => {
  const BLOG_DATA = [
    {
      img: Blog1,
      title: "The More The Natural Taste Will Be the More You Will Miss Apis",
      date: "23-07-2024",
      specification: "Nature's golden nectar, pure and organic",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
    },
    {
      img: Blog2,
      title: "The More The Natural Taste Will Be the More You Will Miss Apis",
      date: "23-07-2024",
      specification: "Nature's golden nectar, pure and organic",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
    },
    {
      img: Blog3,
      title: "The More The Natural Taste Will Be the More You Will Miss Apis",
      date: "23-07-2024",
      specification: "Nature's golden nectar, pure and organic",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
    },
    {
      img: Blog4,
      title: "The More The Natural Taste Will Be the More You Will Miss Apis",
      date: "23-07-2024",
      specification: "Nature's golden nectar, pure and organic",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
    },
    {
      img: Blog1,
      title: "The More The Natural Taste Will Be the More You Will Miss Apis",
      date: "23-07-2024",
      specification: "Nature's golden nectar, pure and organic",
      desc: "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui",
    },
  ];

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true }, [
    AutoScroll({ playOnInit: false }),
  ]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNumberClick = (index) => {
    setCurrentIndex(index);
  };
  return (
    <>
      <ImageBanner banner={Blog} className="h-full w-full" />
      <p className="font-bold text-[#84663C] md:text-[40px] text-[20px] w-[75%] capitalize text-center">
        The blog
      </p>
      <p className="text-center w-[55%] font-jost text-sm  md:text-xl text-[#454545] my-8">
        Welcome to the AIL blog, your go-to resource for all things
        related to health, nutrition, and culinary inspiration. Here, we share
        expert tips, delicious recipes, and the latest trends to help you make
        the most of our premium products. Our blog is designed to inform and
        inspire. Stay tuned for regular updates that will keep you engaged and
        empowered on your journey to better health and wellness with Apis India.
      </p>
      <div className="flex flex-col items-center justify-center w-[1235px]">
        <div className="flex">
          <div className="p-8 pt-0 pl-0 border-r border-b border-dotted border-[#000000] ">
            <div className="w-[581px] flex flex-col items-center justify-center border-2 border-[#9F7B49] p-4">
              <Image src={Blog1} alt="header-logo" className="h-[363px]" />
              <p className="font-semibold text-xl mt-2">
                The More The Natural Taste Will Be the More You Will Miss Apis
              </p>
              <p className="mt-2 w-full font-jost text-sm">23-07-2024</p>
              <p className="mt-2 w-full font-jost text-[15px]">
                Nature's golden nectar, pure and organic
              </p>
              <p className="mt-2 text-[#454545] font-jost text-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui{" "}
              </p>
            </div>
          </div>
          <div className="p-8 pr-0 pt-0 border-b border-dotted border-[#000000] ">
            <div className="w-[581px] flex flex-col items-center justify-center border-2 border-[#9F7B49] p-4">
              <Image src={Blog2} alt="header-logo" className="h-[363px]" />
              <p className="font-semibold text-xl mt-2">
                The More The Natural Taste Will Be the More You Will Miss Apis
              </p>
              <p className="mt-2 w-full font-jost text-sm">23-07-2024</p>
              <p className="mt-2 w-full font-jost text-[15px]">
                Nature's golden nectar, pure and organic
              </p>
              <p className="mt-2 text-[#454545] font-jost text-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="flex">
          <div className="p-8 pl-0 border-r border-b border-dotted border-[#000000] ">
            <div className="w-[581px] flex flex-col items-center justify-center border-2 border-[#9F7B49] p-4">
              <Image src={Blog1} alt="header-logo" className="h-[363px]" />
              <p className="font-semibold text-xl mt-2">
                The More The Natural Taste Will Be the More You Will Miss Apis
              </p>
              <p className="mt-2 w-full font-jost text-sm">23-07-2024</p>
              <p className="mt-2 w-full font-jost text-[15px]">
                Nature's golden nectar, pure and organic
              </p>
              <p className="mt-2 text-[#454545] font-jost text-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui{" "}
              </p>
            </div>
          </div>
          <div className="p-8 pr-0 border-b border-dotted border-[#000000] ">
            <div className="w-[581px] flex flex-col items-center justify-center border-2 border-[#9F7B49] p-4">
              <Image src={Blog2} alt="header-logo" className="h-[363px]" />
              <p className="font-semibold text-xl mt-2">
                The More The Natural Taste Will Be the More You Will Miss Apis
              </p>
              <p className="mt-2 w-full font-jost text-sm">23-07-2024</p>
              <p className="mt-2 w-full font-jost text-[15px]">
                Nature's golden nectar, pure and organic
              </p>
              <p className="mt-2 text-[#454545] font-jost text-xl">
                Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                accusantium doloremque laudantium, totam rem aperiam, eaque ipsa
                quae ab illo inventore veritatis et quasi architecto beatae
                vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia
                voluptas sit aspernatur aut odit aut fugit, sed quia
                consequuntur magni dolores eos qui{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="w-full">
          <div className="flex items-center justify-center">
            <section className="embla flex items-center justify-between !w-full">
              <div className="embla__viewport w-full" ref={emblaRef}>
                <div className="embla__container !ml-0 blog flex items-center justify-center w-full py-8">
                  {BLOG_DATA.map((itm, index) => (
                    <div
                      className="embla__slide pointer-events-none"
                      key={index}
                    >
                      <div className="embla__slide__number pointer-events-none">
                        <div className="flex gap-8 justify-center border-2 border-[#9F7B49] p-4">
                          <Image
                            src={itm.img}
                            alt="header-logo"
                            className="h-[363px]"
                          />
                          <div>
                            <p className="font-semibold text-xl mt-2">
                              {itm?.title}
                            </p>
                            <p className="mt-2 w-full font-jost text-sm font-normal">
                              {itm.date}
                            </p>
                            <p className="mt-2 w-full font-jost text-[15px] font-normal">
                              {itm.specification}
                            </p>
                            <p className="mt-2 text-[#454545] font-jost font-normal text-xl">
                              {itm.desc}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          </div>
          <div className="pagination˚ mt-4 flex justify-between space-x-2">
            {
              <PrevButton
                onClick={() => {
                  onPrevButtonClick();
                  handleNumberClick(currentIndex - 1);
                }}
                disabled={currentIndex === 0}
              />
            }
            <div className="flex items-center justify-center">
              {BLOG_DATA.map((_, index) => (
                <p
                  key={index}
                  // onClick={() => handleNumberClick(index)}
                  className={`text-base md:text-3xl  border-black px-2 md:px-6 ${index === currentIndex ? "font-bold" : "font-normal text-gray-600"} ${index === 0 ? "" : "border-l"}`}
                  aria-label={`Go to slide ${index + 1}`}
                >
                  {index + 1}
                </p>
              ))}
            </div>
            <NextButton
              onClick={() => {
                handleNumberClick(currentIndex + 1);
                onNextButtonClick();
              }}
              disabled={currentIndex + 1 === BLOG_DATA.length}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default page;
