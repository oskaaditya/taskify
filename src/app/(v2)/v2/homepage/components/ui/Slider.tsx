'use client';

import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import { Button } from '@nextui-org/react';
import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import { IStoriesCard } from '@/interfaces/IStories';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import CardStories from './CardStories';

interface ISliderStories {
  data: IStoriesCard[];
}

const SliderStories: FC<ISliderStories> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <div className="relative md:hidden">
      <Swiper
        slidesPerView={1}
        autoplay={false}
        loop={false}
        spaceBetween={24}
        speed={1200}
        navigation={{
          prevEl: '.slidePrev-btn',
          nextEl: '.slideNext-btn',
        }}
        modules={[Navigation]}
        className="overflow-visible "
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <CardStories key={index} {...item} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="mt-8 flex items-center justify-center gap-4">
        <Button
          isIconOnly
          radius="full"
          className="slidePrev-btn bg-primary-500 text-white"
          onClick={() => swiper?.slidePrev()}
        >
          <ArrowLeftIcon />
        </Button>
        <Button
          isIconOnly
          radius="full"
          className="slideNext-btn bg-primary-500 text-white"
          onClick={() => swiper?.slideNext()}
        >
          <ArrowRightIcon />
        </Button>
      </div>
    </div>
  );
};

export default SliderStories;
