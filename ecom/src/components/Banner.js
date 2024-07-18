import React, { useState, useEffect } from 'react';

const Banner = () => {
  const [currSlide, setCurrSlide] = useState(0);
  const data = [
    "https://marketplace.canva.com/EAFZzTbRz-g/1/0/1600w/canva-brown-minimalist-fashion-sale-banner-c4P9XubM0YE.jpg",
    "https://marketplace.canva.com/EAFGKRRskMs/1/0/1600w/canva-brown-and-beige-minimalist-fashion-banner-lYcbGpUSVGo.jpg",
    "https://marketplace.canva.com/EAFHHDwoO6M/1/0/1600w/canva-brown-and-grey-minimalist-fashion-collection-sale-banner-UGM0UgciPLs.jpg",
    "https://marketplace.canva.com/EAFEH3mIUaM/1/0/1600w/canva-dark-grey-and-white-minimalist-new-fashion-collection-banner-nvaqxg-8iXI.jpg",
    "https://marketplace.canva.com/EAFVHstxnwk/1/0/1600w/canva-beige-aesthetic-exclusive-fashion-wear-collection-clothing-banner-BZb4KkCdNP0.jpg",
    "https://marketplace.canva.com/EAFoEJMTGiI/1/0/1600w/canva-beige-aesthetic-new-arrival-fashion-banner-landscape-cNjAcBMeF9s.jpg",
  ];

  useEffect(() => {
    const slideInterval = setInterval(() => {
      setCurrSlide((prev) => (prev === data.length - 1 ? 0 : prev + 1));
    }, 3000);

    return () => clearInterval(slideInterval);
  }, [data.length]);

  return (
    <div className='w-full h-auto overflow-x-hidden'>
      <div className='w-screen h-full relative'>
        <div
          style={{ transform: `translateX(-${currSlide * 100}vw)` }}
          className='w-[600vw] md:w-[400vw] h-full flex transition-transform duration-1000'
        >
          {data.map((src, index) => (
            <img
              key={index}
              className='w-screen h-full object-cover'
              src={src}
              alt={`Img${index + 1}`}
              loading='priority'
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
