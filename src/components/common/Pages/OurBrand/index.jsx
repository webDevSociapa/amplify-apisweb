"use client";

import { useRouter } from "next/navigation";
import PropTypes from "prop-types";
import { useEffect, useState, useRef } from "react";
import { PRODUCT_DATA } from "@/lib/constants";
import Link from "next/link";
import Head from "next/head";

export default function OurBrand({ onProductClick }) {
  const BRAND_DATA = [
    { id: 1, title: "Health & Wellness" },
    { id: 2, title: "Breakfast Range" },
    { id: 3, title: "Kitchen Mix" },
  ];
  const router = useRouter();
  const [activeTab, setActiveTab] = useState("Apis");
  const [selectedBrand, setSelectedBrand] = useState(BRAND_DATA[0].id);
  const [openDropdown, setOpenDropdown] = useState(null); // NEW: track open dropdown

  const TAB_DATA = ["Apis", "Misk"];

  const [hoveredProduct, setHoveredProduct] = useState(null);

  const handleProductClick = (brandId, productId) => {
    const brand = PRODUCT_DATA.find((b) => b.id == brandId);
    const product = brand?.products.find((p) => p.id == productId);
    if (!product) return;

    const productSlug = product.slug ?? slugify(product.name);
    console.log("productSlug", productSlug);

    // ✅ Correct route
    router.push(`/en/our-brand/product-details/${productSlug}`);

    if (onProductClick) onProductClick();
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  // Close dropdown when clicking outside
  const dropdownRef = useRef(null);
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpenDropdown(null);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <>
      <Head>
        <title>
          Pure And Natural Products - Best Honey, Best Jam, Best Pickle, Quality
          Dates | Apis India
        </title>
        <meta charSet="utf-8" />
        <meta
          name="description"
          content="Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves."
        />
        <meta name="robots" content="index, follow" />
        <meta name="googlebot" content="index, follow" />
        <meta name="msnbot" content="index, follow" />
        <meta name="YahooSeeker" content="index, follow" />
        <meta
          property="og:title"
          content="Pure And Natural Products - Best Honey, Best Jam, Best Pickle, Quality Dates | Apis India"
        />
        <meta
          property="og:description"
          content="Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves."
        />
        <meta
          property="og:site_name"
          content="https://www.apisIndia.com/product.php"
        />
        <meta
          name="twitter:title"
          content="Pure And Natural Himalayan Products | Apis India"
        />
        <meta
          name="twitter:description"
          content="Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves."
        />
        <meta
          itemProp="title"
          content="Pure And Natural Himalayan Products | Apis India"
        />
        <meta
          itemProp="description"
          content="Right from the heart of nature Apis brings you pure and natural himalyan products. Apis manufactures products like  Natural Honey, Dates, Jam, Pickle, Green Tea and Preserves."
        />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        <meta name="format-detection" content="telephone=no" />
      </Head>
      <div className="relative bg-white p-6 mx-5">
        {/* Tabs Section */}
        <div className="flex justify-center gap-8 border-b-2 border-[#9F7B49] pb-4">
          {TAB_DATA.map((tab, index) => {
            const isActive = tab === activeTab;
            const baseClasses = "text-lg font-bold px-4 py-2";
            const activeClasses = "text-[#9F7B49] border-b-4 border-[#9F7B49]";
            const inactiveClasses =
              "text-gray-400 opacity-50 cursor-not-allowed";

            const tabContent = (
              <div
                key={index}
                onClick={() => {
                  setActiveTab(tab);
                }}
                className={`${baseClasses} ${isActive ? activeClasses : inactiveClasses}`}
                style={{ cursor: tab === "Misk" ? "pointer" : "default" }}
              >
                {tab}
              </div>
            );

            // Make Misk redirect on click
            return tab === "Misk" ? (
              <a href="/our-brand/misk" key={index}>
                {tabContent}
              </a>
            ) : (
              tabContent
            );
          })}
        </div>
        {/* Product Section */}
        <div className="mt-6 grid grid-cols-3 gap-16">
          {PRODUCT_DATA.filter((brand) => brand.title !== "Organic").map(
            (brand) => (
              <div key={brand.id} className="space-y-2">
                {/* Brand Title */}
                <h3
                  className={`text-base sm:text-xl md:text-2xl font-bold cursor-pointer ${selectedBrand === brand.id ? "text-[#9F7B49]" : "text-[#A57F5A]"}`}
                  onClick={() => setSelectedBrand(brand.id)}
                >
                  {brand.title}
                </h3>

                {/* Products List */}
                <div className="space-y-2">
                  {brand.products
                    .filter(
                      (product) =>
                        product.name !== "Apis Organic Honey" &&
                        product.name !== "Royal Zahidi" &&
                        product.name !== "Shehenshah Date" &&
                        product.name !== "Arabian Pearls Date" &&
                        product.name !== "Select Date" &&
                        product.name !== "ClassicDate" &&
                        product.name !== "Shaan e Khajoor" &&
                        product.name !== "KalmiDates" &&
                        product.name !== "DesertBliss" &&
                        product.name !== "DeseededDate" &&
                        product.name !== "Premium Dates"
                    )
                    .map((product) => {
                      // Unique ref for each dropdown
                      const thisDropdownRef = useRef(null);

                      useEffect(() => {
                        function handleClickOutside(event) {
                          if (
                            thisDropdownRef.current &&
                            !thisDropdownRef.current.contains(event.target)
                          ) {
                            setOpenDropdown(null);
                          }
                        }
                        if (openDropdown === `${brand.id}-${product.id}`) {
                          document.addEventListener(
                            "mousedown",
                            handleClickOutside
                          );
                        }
                        return () =>
                          document.removeEventListener(
                            "mousedown",
                            handleClickOutside
                          );
                      }, [openDropdown]);

                      return (
                        <div
                          key={product.id}
                          className="relative"
                          ref={thisDropdownRef}
                        >
                          {product.name === "Honey" ||
                          product.name === "Dates" ? (
                            <>
                              <button
                                className="text-base text-[#373737] hover:text-[#9F7B49] transition-all"
                                onClick={() =>
                                  setOpenDropdown(
                                    openDropdown === `${brand.id}-${product.id}`
                                      ? null
                                      : `${brand.id}-${product.id}`
                                  )
                                }
                              >
                                {product.name}
                                <span className="ml-2">&#9662;</span>
                              </button>
                              {openDropdown === `${brand.id}-${product.id}` && (
                                <div className="absolute top-8 left-0 w-[220px] z-20 bg-white shadow-lg border rounded-md p-4">
                                  <ul className="text-sm text-gray-600 space-y-2">
                                    {product.name === "Honey" && (
                                      <>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(1, 1);
                                            }}
                                          >
                                            Organic Honey
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(1, 2);
                                            }}
                                          >
                                            Himalaya Honey
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 1);
                                            }}
                                          >
                                            Regular Honey
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(1, 3);
                                            }}
                                          >
                                            Infused Honey
                                          </button>
                                        </li>
                                      </>
                                    )}
                                    {product.name === "Dates" && (
                                      <>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 3);
                                            }}
                                          >
                                            Shahenshah Dates
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 7);
                                            }}
                                          >
                                            Royal Zahidi
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 4);
                                            }}
                                          >
                                            Arabian Dates
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 5);
                                            }}
                                          >
                                            Select Date
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 6);
                                            }}
                                          >
                                            Classic Date
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 8);
                                            }}
                                          >
                                            Shaan e Khajoor
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 9);
                                            }}
                                          >
                                            Kalmi Dates
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 10);
                                            }}
                                          >
                                            DesertBliss
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 11);
                                            }}
                                          >
                                            Deseeded Date
                                          </button>
                                        </li>
                                        <li>
                                          <button
                                            className="hover:underline text-left w-full"
                                            onClick={() => {
                                              setOpenDropdown(null);
                                              handleProductClick(2, 12);
                                            }}
                                          >
                                            Premium Dates
                                          </button>
                                        </li>
                                      </>
                                    )}
                                  </ul>
                                </div>
                              )}
                            </>
                          ) : (
                            <button
                              className="text-base text-[#373737] hover:text-[#9F7B49] transition-all"
                              onClick={() =>
                                handleProductClick(brand.id, product.id)
                              }
                            >
                              {product.name}
                            </button>
                          )}
                        </div>
                      );
                    })}
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </>
  );
}

OurBrand.propTypes = {
  onProductClick: PropTypes.func,
};
