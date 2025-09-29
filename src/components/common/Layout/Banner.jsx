'use client'

import Image from 'next/image'

const ImageBanner = (banner) => {
  return (
    <main className="flex flex-col items-center justify-center w-full">
      <div className="relative w-full">
        <Image
          src={banner.banner.src}
          alt="Banner Image"
          width={1440}
          height={1440}
          className="object-cover w-full h-100"
        />
      </div>
    </main>
  )
}

export default ImageBanner
