import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { BackgroundHero } from './ui/Background';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-14 md:px-5 md:py-[124.5px] xl:p-[186.5px]">
      <BackgroundHero />
      <div className="bg-company-hero absolute right-0 top-0 order-last hidden object-cover md:block md:h-full md:w-4/12 md:bg-left-bottom xl:w-5/12" />
      <div className="container mx-auto">
        <div className="mb-8 max-w-[584px] space-y-4 px-5 md:mx-8 md:mb-0">
          <h1 className="text-[28px] font-medium md:text-h1">Taskify help upgrade your company</h1>
          <p className="max-w-[490px] text-base font-medium text-neutral-500">
            Our platform isn&apos;t just a tool—it&apos;s a game-changer that empowers your team to work smarter,
            collaborate better, and achieve more.
          </p>
          <Button
            as={Link}
            href="#"
            className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
            variant="flat"
          >
            Get to know us
          </Button>
        </div>
        <Image
          className="max-h-[320px] w-screen bg-bottom object-cover md:hidden"
          radius="none"
          src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1716795755/taskify/assets/images/company-hero-bg.jpg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
