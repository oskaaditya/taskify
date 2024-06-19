import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import React from 'react';
import { BackgroundHero } from './ui/Background';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:py-20">
      <BackgroundHero />
      <div className="container mx-auto">
        <div className="space-y-4">
          <p className="font-medium uppercase text-primary-500">COMPANY</p>
          <div className="item-start flex w-full flex-col justify-between gap-4 lg:flex-row">
            <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">Taskify help upgrade your company</h1>
            <div className="space-y-6">
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
          </div>
        </div>
        <Image
          className="mt-14 max-h-[560px] w-screen rounded-2xl object-cover object-bottom"
          radius="none"
          src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1716795755/taskify/assets/images/company-hero-bg.jpg"
        />
      </div>
    </section>
  );
};

export default HeroSection;
