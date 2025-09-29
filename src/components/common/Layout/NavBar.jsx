'use client';

import { PATH_DATA } from '@/lib/constants';
import { isActive } from '@/lib/helpers';
import { cn } from '@/lib/utils';
import { usePathname, useRouter } from 'next/navigation';
import PropTypes from 'prop-types';
import { useState } from 'react';
import OurBrand from '../Pages/OurBrand/index';
import Link from 'next/link';
import Image from 'next/image';
import Rectangle2 from "@/assets/images/OurBrands/Rectangle2.png";
import Cgallery from "@/assets/images/Careers/engage.png"
import AboutusMini from "@/assets/images/AboutUs/FinalAboutus.png"
import CareerMini from "@/assets/images/Careers/CareerMini.png"
import MediaMini from "@/assets/images/Media/MediaMini.png"
import sustainabilityMini from "@/assets/images/sustainabilityMini.png"
import ResourcesMini from "@/assets/images/resourcesMini.png"
import ContactusMini from "@/assets/images/ContactUs/new-contact-small.png"
import AboutusMini11 from "@/assets/images/AboutUs/about-us-dropdown-01.jpg"

const NavBar = ({ className, linkClass }) => {
  const routerPath = usePathname();
  const router = useRouter();
  const locale = routerPath.split('/')[1];

  const [hoveredItem, setHoveredItem] = useState(null);

  const handleMouseEnter = (itemName) => {
    setHoveredItem(itemName);
  };

  const handleMouseLeave = () => {
    // Do nothing when leaving a menu item
  };

  const handleOurBrandContentMouseEnter = () => {
    setHoveredItem('Brand');
  };

  const handleAboutUsMouseEnter = () => {
    setHoveredItem('About Us');
  };

  const handleCareerMouseEnter = () => {
    setHoveredItem('Careers');
  };

  const handleMediaMouseEnter = () => {
    setHoveredItem('Media');
  };

  const handleSustainabilityMouseEnter = () => {
    setHoveredItem('Sustainability');
  };

  const handleOurBlogMouseEnter = () => {
    setHoveredItem('Resources');
  };


  const handleOurContactUsEnter = () => {
    setHoveredItem('Contact Us');
  };


  const handleOurBrandContentMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleAboutUsMouseLeave = () => {
    setHoveredItem(null);
  };


  const handleCareerUsMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleMediaUsMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleSustainabilityMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleOurBlogMouseLeave = () => {
    setHoveredItem(null);
  };

  const handleOurContactUsLeave = () => {
    setHoveredItem(null);
  };

  const handleCareerContentClick = () => {
    setHoveredItem(null);
  };

  const handleMediaContentClick = () => {
    setHoveredItem(null);
  };

  const handleSustainabilityContentClick = () => {
    setHoveredItem(null);
  };

  const handleRecipesContentClick = () => {
    setHoveredItem(null);
  };

  const handleContactContentClick = () => {
    setHoveredItem(null);
  };

  const handleNavigateToOurBrand = (event) => {
    event.preventDefault(); // Prevent default navigation
    setHoveredItem('Brand'); // Show hover content
  };

  const isOurBrandActive = () => {
    return routerPath.includes('/our-brand');
  };

  const handleOurBrandContentClick = (event) => {
    // Close the hover content
    setHoveredItem(null);
    // Navigate to the clicked product
    // The navigation is handled by the Link component in OurBrand
  };

  // const handleAboutUsApis = () => {
  //   router.push('/about-us/mission-vision');
  // };

  return (
    <nav className={cn(className, 'h-full gap-x-8')}>
      {PATH_DATA.map((path) => {
        const tabUrlWithLocale = `/${locale}${path.url}`;

        return (
          <>
            <div
              key={path.url}
              onMouseEnter={() => handleMouseEnter(path.name)}
              onMouseLeave={handleMouseLeave}
              className="navabarMobileView"
            >
              {!PATH_DATA.includes(path.name) ? (
                <Link href={tabUrlWithLocale} className={cn(linkClass)}>
                  <div className='mt-3 flex flex-col items-center'>
                    <span
                      className={isActive(routerPath, path)
                        ? 'font-bold text-[#3D3D3D] w-max uppercase'
                        : 'font-medium text-[#3D3D3D] hoverHeader w-max'}>
                      {path.name}
                    </span>
                  </div>
                </Link>
              ) : (
                <div className="mt-3 flex flex-col items-center cursor-default">
                  <span className={cn(
                    "font-medium text-[#3D3D3D] w-max",
                    isOurBrandActive() ? 'font-bold uppercase' : 'hoverHeader'
                  )}>
                    {path.name}
                  </span>
                </div>
              )}

              {path.name === 'Brand' && hoveredItem === 'Brand' && (
                <div
                  className="absolute top-full left-0 w-full bg-white z-1000"
                  onMouseEnter={handleOurBrandContentMouseEnter}
                  onMouseLeave={handleOurBrandContentMouseLeave}
                >
                  <OurBrand onProductClick={handleOurBrandContentClick} />
                </div>
              )}

            </div>
            {path.name === 'About Us' && hoveredItem === 'About Us' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleAboutUsMouseEnter}
                onMouseLeave={handleAboutUsMouseLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16" onProductClick={handleOurBrandContentClick}>
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={AboutusMini11} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2">Corporate Profile</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleOurBrandContentClick}>
                            <Link href="/about-us/mission-vision" className="hover:underline">
                              Vision and Mission
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleOurBrandContentClick}>
                            <Link href="/about-us/journey" className="hover:underline">
                              Milestone
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleOurBrandContentClick}>
                            <Link href="/about-us/ourDirectors" className="hover:underline">
                              Board of Directors
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}

                  </div>
                </div>
              </div>
            )}
            {path.name === 'Careers' && hoveredItem === 'Careers' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleCareerMouseEnter}
                onMouseLeave={handleCareerUsMouseLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16">
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={CareerMini} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2">Careers</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleCareerContentClick}>
                            <Link href="/careers/lifeAtApis" className="hover:underline">
                              Life @ AIL
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleCareerContentClick}>
                            <Link href="/careers/joinOurTeam" className="hover:underline">
                              Work With Us
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}

                  </div>
                </div>
              </div>
            )}
            {path.name === 'Media' && hoveredItem === 'Media' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleMediaMouseEnter}
                onMouseLeave={handleMediaUsMouseLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16">
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={MediaMini} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2">Media</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleMediaContentClick}>
                            <Link href="/media/apisInTheNews" className="hover:underline">
                              Apis in the news
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleMediaContentClick}>
                            <Link href="/media/mediaGallery" className="hover:underline">
                              Media Library
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleMediaContentClick}>
                            <Link href="/our-blog/ourBlogs" className="hover:underline">
                              Blogs
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}

                  </div>
                </div>
              </div>
            )}
            {path.name === 'Sustainability' && hoveredItem === 'Sustainability' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleSustainabilityMouseEnter}
                onMouseLeave={handleSustainabilityMouseLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16">
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={sustainabilityMini} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2">Sustainability</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleSustainabilityContentClick}>
                            <Link href="/sustainability/" className="hover:underline">
                              CSR @AIL
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}

                  </div>
                </div>
              </div>
            )}
            {path.name === 'Resources' && hoveredItem === 'Resources' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleOurBlogMouseEnter}
                onMouseLeave={handleOurBlogMouseLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16">
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={ResourcesMini} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2"> Resources</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleRecipesContentClick}>
                            <Link href="/our-blog/ourRecipis" className="hover:underline">
                              Recipes
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}
                  </div>
                </div>
              </div>
            )}
            {path.name === 'Contact Us' && hoveredItem === 'Contact Us' && (
              <div
                className="absolute top-full left-0 w-full bg-white z-50 flex "
                onMouseEnter={handleOurContactUsEnter}
                onMouseLeave={handleOurContactUsLeave}
              >
                <div className="w-full max-w-[800px] bg-white p-16">
                  <div className="flex flex-row gap-6 justify-between">
                    <div className="flex flex-col">
                      <Image src={ContactusMini} width={400} height={400} />
                    </div>
                    {/* Left Section: Image and Description */}
                    <div className="flex flex-col w-1/3 gap-4">
                      <h4 className="font-bold text-[#A57F5A] mb-2 border-l-2 border-[#9F7B49] px-2">Connect</h4>
                      <ul className="text-sm text-gray-600 space-y-4">
                        <li>
                          <div onClick={handleContactContentClick}>
                            <Link href="/contact-us" className="hover:underline">
                              Registered Office / Overseas Operation
                            </Link>
                          </div>
                        </li>
                        <li>
                          <div onClick={handleContactContentClick}>
                            <Link href="/contact-us/factoryAddress" className="hover:underline">
                              Factory Address
                            </Link>
                          </div>
                        </li>
                      </ul>

                    </div>
                    {/* Right Section: Leadership */}
                  </div>
                </div>
              </div>
            )}
          </>
        );
      })}
    </nav>
  );
};

export default NavBar;

NavBar.propTypes = {
  className: PropTypes.string,
  linkClass: PropTypes.string,
};
