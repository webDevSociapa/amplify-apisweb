'use client';

import { useEffect, useState } from 'react';
import { useWindowDimensions } from '@/lib/helpers';
import { cn } from '@/lib/utils';

import MHFull from './MHFull';
import MHMOBILE from './MHMobile';

('next/navigation');

const MainHeader = () => {
  const { width } = useWindowDimensions();

  const [showMobileData, setShowMobileData] = useState(false);

  useEffect(() => {
    if (width < 1024) {
      setShowMobileData(true);
    } else {
      setShowMobileData(false);
    }
  }, [width]);

  return (
    <header
      className={cn(
        'sticky top-[32px] sm:top-[32px] z-[100] flex h-16 sm:h-20 w-full items-center justify-between bg-white px-4 shadow lg:px-8'
      )}
    >
      {showMobileData ? <MHMOBILE /> : <MHFull />}
    </header>
  );
};

export default MainHeader;
