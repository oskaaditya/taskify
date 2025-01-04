'use client';

import { Button } from '@nextui-org/react';
import { ArrowLeftIcon, ArrowRightIcon } from 'lucide-react';
import { FC } from 'react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
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
        effect={'fade'}
        speed={1200}
        loop={false}
        navigation={{
          prevEl: '.slidePrev',
          nextEl: '.slideNext',
        }}
        fadeEffect={{ crossFade: true }}
        modules={[Autoplay, Navigation, EffectFade]}
        className="relative flex flex-col items-center justify-center overflow-visible"
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
        <div className="absolute bottom-10 mt-8 flex w-full items-center justify-center gap-4 text-center phone:bottom-5">
          <Button
            isIconOnly
            radius="full"
            className="slidePrev z-10 bg-primary-500 text-white"
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
