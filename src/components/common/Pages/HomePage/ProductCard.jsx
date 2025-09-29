'use client';

import { formattedPrice } from '@/lib/helpers';
import { getCookie } from 'cookies-next';
import { useTranslations } from 'next-intl';
import Image from 'next/image';
import Link from 'next/link';
import PropTypes from 'prop-types';

import DummyProduct from '@/assets/images/heart-of-bavaria-section/dummycan.png';

const ProductCard = ({ sell }) => {
  const t = useTranslations('HomePage');
  const locale = getCookie('NEXT_LOCALE');

  return (
    <Link
      href={`${locale}/beers/${sell?.product_stock?.product?.slug}`}
      className='flex cursor-pointer flex-col overflow-hidden rounded-[20px] border border-zinc-300 font-satoshi hover:shadow-lg'
    >
      <div className='h-[150px] w-full bg-neutral-100 p-3 xl:h-[250px]'>
        <Image
          src={sell?.product_stock?.image || DummyProduct}
          height={250}
          width={350}
          alt='bottle'
          className='mx-auto h-full max-h-[250px] w-full object-contain'
        />
      </div>
      <div className='flex flex-col gap-y-1 bg-white px-4 py-5 xl:gap-y-4'>
        <div className='flex flex-col'>
          <span className='text-sm font-medium leading-[18px] text-stone-500'>
            {sell?.product_stock?.product?.category?.name}
          </span>
          <p className='m-0 truncate break-words p-0 text-lg font-bold text-neutral-800 md:text-sm lg:text-sm xl:text-xl xl:leading-7'>
            {sell?.product_stock?.product?.name}
          </p>
        </div>
        <div className='flex items-center justify-between'>
          <span className='text-sm font-medium leading-5 xl:text-[16px]'>
            {t('product-price')}
          </span>
          <span className='text-lg font-bold leading-8 text-activeGreen-500 xl:text-2xl'>
            {sell?.offered_price
              ? formattedPrice(parseFloat(sell.offered_price), locale)
              : formattedPrice(parseFloat(sell.base_price), locale)}{' '}
            {sell?.offered_price && (
              <span className='text-sm text-gray-500 line-through md:text-base'>
                {formattedPrice(parseFloat(sell.base_price), locale)}
              </span>
            )}
          </span>
        </div>
      </div>
    </Link>
  );
};

export default ProductCard;

ProductCard.propTypes = {
  sell: PropTypes.object,
};
