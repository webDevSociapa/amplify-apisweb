'use client';

import Image from 'next/image';
import Link from 'next/link';

import LogoMobile from '@/assets/images/logo-mobile.png';

import { SheetHeader } from '../ui/sheet';
import NavBar from './Layout/NavBar';

const MobileNav = () => {
  return (
    <>
      <SheetHeader>
        <div className='flex h-10 w-full'>
          <Link href={'/'} className='mb-0.5'>
            <Image
              src={LogoMobile}
              width={81}
              height={60}
              alt='header-logo'
              className='h-full w-full object-contain object-center'
            />
          </Link>
        </div>
      </SheetHeader>
      <div>
        <NavBar
          className='mt-6 flex flex-col items-start gap-y-2 lg:hidden'
          linkClass='text-lg w-full items-start flex'
        />
      </div>
    </>
  );
};

export default MobileNav;
