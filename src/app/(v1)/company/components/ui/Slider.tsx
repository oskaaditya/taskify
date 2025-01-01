import ArrowLeftIcon from '@/components/icons/ArrowLeftIcon';
import ArrowRightIcon from '@/components/icons/ArrowRightIcon';
import InstgramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterBirdIcon from '@/components/icons/TwitterBirdIcon';
import { ITeamsCompany } from '@/interfaces/ICompany';
import { Button, Image } from '@nextui-org/react';
import { FC } from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide, useSwiper } from 'swiper/react';
import SocialMediaLinks from './SocialMediaLinks';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

interface ISliderTeams {
  data: ITeamsCompany[];
}

const Slider: FC<ISliderTeams> = ({ data }) => {
  const swiper = useSwiper();

  return (
    <div className="relative md:hidden">
      <Swiper
        slidesPerView={1}
        autoplay={false}
        loop={false}
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
            <div className="h-full w-full rounded-lg border-none">
              <Image
                alt="Woman listing to music"
                className="h-[400px] w-full object-cover"
                radius="none"
                src={item.photo}
              />
            </div>
            <div className="mt-6 space-y-4">
              <div className="space-y-2">
                <p className="text-2xl font-medium text-neutral-600">{item.name}</p>
                <p className="font-medium text-neutral-600">{item.position}</p>
              </div>
              <p className="mb-8 text-sm text-neutral-500 md:text-lg">{item.description}</p>
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
          </SwiperSlide>
        ))}
      </Swiper>
      <Button
        isIconOnly
        radius="full"
        className="slidePrev-btn absolute -left-[10px] top-52 z-[99] bg-primary-500 text-white"
        onClick={() => swiper?.slidePrev()}
      >
        <ArrowLeftIcon />
      </Button>
      <Button
        isIconOnly
        radius="full"
        className="slideNext-btn absolute -right-[10px] top-52 z-[99] bg-primary-500 text-white"
        onClick={() => swiper?.slideNext()}
      >
        <ArrowRightIcon />
      </Button>
    </div>
  );
};

export default Slider;
