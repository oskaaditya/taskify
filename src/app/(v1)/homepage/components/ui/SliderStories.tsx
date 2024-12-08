'use client';

import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { FC } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';

// Import Swiper styles
import { IStoriesCard } from '@/interfaces/IStories';
import 'swiper/css';
import 'swiper/css/navigation';
import CardStories from './CardStories';

interface ISliderStories {
  data: IStoriesCard[];
}

const SliderStories: FC<ISliderStories> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <div className="relative mt-8">
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
            <CardStories
              background={item.background}
              logo={item.logo}
              name={item.name}
              position={item.position}
              stories={item.stories}
              key={index}
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

export default SliderStories;
