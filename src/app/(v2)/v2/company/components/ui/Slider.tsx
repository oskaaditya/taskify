import { TTeamsCompany } from '@/types/TCompany';
import { Button, Image } from '@nextui-org/react';
import React, { FC } from 'react';
import { Autoplay, Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SocialMediaLinks from './SocialMediaLinks';
import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import TwitterBirdIcon from '@/components/icons/TwitterBirdIcon';
import InstgramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';

interface ISliderTeams {
  data: TTeamsCompany[];
}

const SliderV2: FC<ISliderTeams> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <div className="relative md:hidden">
      <Swiper
        slidesPerView={1}
        autoplay={true}
        loop={true}
        navigation={{
          prevEl: '.prev',
          nextEl: '.next',
        }}
        modules={[Autoplay, Navigation]}
        className="overflow-visible "
        // onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {data.map((item, index) => (
          <SwiperSlide key={index} className="relative">
            <div key={index} className="relative">
              <Image src={item.photo} radius="none" className="mb-6 min-h-[640px] w-full object-cover md:h-full" />
              <div className="absolute bottom-8 z-20 px-4">
                <div className="mb-4 space-y-2">
                  <p className="text-h3 font-medium text-white">{item.name}</p>
                  <p className="text-lg text-white">{item.position}</p>
                </div>
                <div className="flex items-center gap-2">
                  {item.socialMedia.linkedin && (
                    <SocialMediaLinks link={item.socialMedia.linkedin} icon={<LinkedinIcon />} />
                  )}
                  {item.socialMedia.instagram && (
                    <SocialMediaLinks link={item.socialMedia.instagram} icon={<InstgramIcon size={20} />} />
                  )}
                  {item.socialMedia.twitter && (
                    <SocialMediaLinks link={item.socialMedia.twitter} icon={<TwitterBirdIcon />} />
                  )}
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
        <div className="flex w-full items-center justify-center gap-4">
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
      </Swiper>
    </div>
  );
};

export default SliderV2;
