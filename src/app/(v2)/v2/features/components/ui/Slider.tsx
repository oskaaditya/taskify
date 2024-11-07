'use client';

import { IFeatures } from '@/interfaces/IFeatures';
import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { FC } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import CardProducts from './CardProducts';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ISliderProduct {
  data: IFeatures[];
}

const Slider: FC<ISliderProduct> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <div>
      <Swiper
        slidesPerView={1}
        autoplay={false}
        loop={false}
        navigation={{
          prevEl: '.slidePrev',
          nextEl: '.slideNext',
        }}
        modules={[Autoplay, Navigation]}
        className="overflow-visible "
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <CardProducts
              key={item.id}
              id={item.id}
              title={item.title}
              description={item.description}
              image={item.image}
            />
          </SwiperSlide>
        ))}
        <div className="mb-10 mt-8 flex items-center justify-center gap-4">
          <Button
            isIconOnly
            radius="full"
            className="slidePrev bg-primary-500 text-white"
            onClick={() => swiper?.slidePrev()}
          >
            <ArrowLeftIcon />
          </Button>
          <Button
            isIconOnly
            radius="full"
            className="slideNext z-10 bg-primary-500 text-white"
            onClick={() => swiper?.slideNext()}
          >
            <ArrowRightIcon />
          </Button>
        </div>
      </Swiper>
    </div>
  );
};

export default Slider;
