"use client"

import { RECIPIES_DATA1 } from "@/lib/constants";
import EmblaCarousel from "../../Carousel/Carousel";
import Link from "next/link";
import Head from "next/head";

export default function OurRecipisData() {
    const OPTIONS = { loop: true };
    return (
        <>
            <Head>
                <Head>
                    <title>Best Recipes of Honey, Jam, Pickle, Dates & Soya Chunks</title>
                    <meta charSet="utf-8" />
                    <meta
                        name="description"
                        content="Cooking delicious meals with less worry and more fun is what APIS Recipes is all about. It's no secret that we at Apis India enjoy food and are always looking for innovative methods to make tasty dishes. check the recipes NOW!"
                    />
                    <meta name="robots" content="index, follow" />
                    <meta name="googlebot" content="index, follow" />
                    <meta name="msnbot" content="index, follow" />
                    <meta name="YahooSeeker" content="index, follow" />
                    <meta
                        property="og:title"
                        content="Best Recipes of Honey, Jam, pickle, Dates & Soya Chunks"
                    />
                    <meta
                        property="og:description"
                        content="Cooking delicious meals with less worry and more fun is what APIS Recipes is all about. It's no secret that we at Apis India enjoy food and are always looking for innovative methods to make tasty dishes. check the recipes NOW!"
                    />
                    <meta property="og:site_name" content="http://www.apisindia.com/greentea.php" />
                    <meta
                        name="twitter:title"
                        content="Best Recipes of Honey, Jam, pickle, Dates & Soya Chunks"
                    />
                    <meta
                        name="twitter:description"
                        content="Cooking delicious meals with less worry and more fun is what APIS Recipes is all about. It's no secret that we at Apis India enjoy food and are always looking for innovative methods to make tasty dishes. check the recipes NOW!"
                    />
                    <meta
                        itemProp="title"
                        content="Best Recipes of Honey, Jam, pickle, Dates & Soya Chunks"
                    />
                    <meta
                        itemProp="description"
                        content="Cooking delicious meals with less worry and more fun is what APIS Recipes is all about. It's no secret that we at Apis India enjoy food and are always looking for innovative methods to make tasty dishes. check the recipes NOW!"
                    />
                    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
                </Head>

            </Head>
            <div className="bg-[#FFF9F0] py-10 w-full flex flex-col items-center">
                <p className="text-[20px] md:text-[40px] text-[#9F7B49] font-bold">
                    Recipes
                </p>
                <div className="w-[90%] gap-10 py-10 flex items-center justify-center media-apis">
                    <EmblaCarousel options={OPTIONS} autoScroll>
                        {RECIPIES_DATA1.map((itm) => {
                            return (
                                <div className="embla__slide">
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
                                            <p className="text-sm lg:text-xl font-normal text-[#373737] font-jost">
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
                    </EmblaCarousel>
                </div>
                <Link href={"/our-brand/recipes"}>
                    <button className="border border-[#9F7B49] bg-[#9F7B49] px-3 md:px-12 text-xs md:text-base py-1 md:py-3 font-bold text-white">
                        View All
                    </button>
                </Link>
            </div>
        </>
    )
}
