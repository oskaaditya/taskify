'use client';

import { FC, useState } from 'react';
import type { Swiper as SwiperType } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import { IntegrateCardProps } from '@/interfaces/IIntegrate';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay } from 'swiper/modules';
import CardIntegrate from './CardIntegrate';

interface ISliderIntegrate {
  data: IntegrateCardProps[];
}

const SliderCardIntegrate: FC<ISliderIntegrate> = ({ data }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <div className="relative h-auto w-full ">
      <Swiper
        slidesPerView={7}
        autoplay={{
          delay: 200,
          disableOnInteraction: false,
        }}
        spaceBetween={48}
        centeredSlides
        centeredSlidesBounds
        loop
        className="flex items-center overflow-visible"
        modules={[Autoplay]}
        onSlideChange={(swiper: SwiperType) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`relative flex justify-center transition-all duration-300 ${
              index === activeIndex ? 'min-w-[344px]' : 'w-144'
            }`}
          >
            <CardIntegrate
              img={item.logo}
              name={item.title}
              description={item.description}
              active={index === activeIndex}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SliderCardIntegrate;
