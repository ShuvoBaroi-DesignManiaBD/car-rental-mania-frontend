import React, { useState } from 'react';
import { Button, Checkbox } from 'antd';
import { TCar } from '@/types/car.type';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Navigation, Thumbs } from 'swiper/modules';
import { Swiper as SwiperCore } from 'swiper';
import ImageMagnifier from '@/components/ui/ImageMagnifier';
import 'swiper/swiper-bundle.css';
import DesignToken from '@/lib/providers/antDesign/DesignToken';

const CarDetails = ({ car }: { car: TCar }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState<SwiperCore | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  const images: string[] = car?.images || [];

  const handleThumbnailClick = (index: number) => {
    if (thumbsSwiper) {
      setCurrentIndex(index);
      thumbsSwiper.slideTo(index);
    }
  };

  return (
    <div className="p-6 rounded-md shadow-md max-w-[50vw]" style={{backgroundColor: DesignToken().colorBgContainer}}>
      {/* Main Image Carousel with Zoom */}
      <Swiper
        loop={true}
        spaceBetween={10}
        navigation
        thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
        modules={[FreeMode, Navigation, Thumbs]}
        className=" bg-primaryLight/50 shadow-md w-full rounded-lg"
        onSlideChange={(swiper) => setCurrentIndex(swiper.activeIndex)}
      >
        {images.map((image, index) => (
          <SwiperSlide key={index} className='w-full'>
            <div className="flex h-full w-full items-center justify-center [&_div]:w-[100%] [&_div]:h-[55vh]">
              <ImageMagnifier
                src={image}
                alt={`Car Image ${index + 1}`}
                className="block h-full w-full !object-cover"
              />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Thumbnail Swiper */}
      <Swiper
        onSwiper={setThumbsSwiper}
        loop={true}
        spaceBetween={12}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Navigation, Thumbs]}
        className="thumbs mt-3 h-20 w-full rounded-lg"
      >
        {images.map((image, index) => (
          <SwiperSlide key={index}>
            <button
              className="relative flex h-full w-full items-center justify-center"
              onClick={() => handleThumbnailClick(index)}
            >
              {currentIndex !== index && (
                <div className="absolute inset-0 bg-black opacity-50"></div>
              )}
              <img
                src={image}
                alt={`Thumbnail ${index + 1}`}
                className="block h-full w-full object-cover"
              />
            </button>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Car Details */}
      <h2 className="text-2xl font-bold my-4">{car.name}</h2>
      <p>{car.description}</p>

      {/* Options */}
      <div className="my-4">
        <Checkbox>Full Insurance</Checkbox>
        <Checkbox>Cancellation Protection</Checkbox>
      </div>

      {/* Booking Button */}
      <Button type="primary" className="w-full">
        Book Now
      </Button>
    </div>
  );
};

export default CarDetails;
