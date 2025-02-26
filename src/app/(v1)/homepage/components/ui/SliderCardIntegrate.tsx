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
    <div id="SliderCardIntegrate" className="relative h-auto w-full overflow-hidden phone:px-[5%]">
      <Swiper
        slidesPerView={1}
        breakpoints={{
          991: { slidesPerView: 'auto' },
        }}
        speed={1200}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        spaceBetween={48}
        centeredSlides={true} // Keep the slides centered
        roundLengths={true}
        loop={true}
        className="relative flex items-center justify-center overflow-visible"
        modules={[Autoplay]}
        onSlideChange={(swiper: SwiperType) => {
          const realIndex = swiper.realIndex;
          setActiveIndex(realIndex);
        }}
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            className={`relative flex !w-[144px] justify-center transition-all duration-300 phone:!w-full ${
              index === activeIndex ? '!min-w-[344px] phone:!min-w-0' : ''
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
