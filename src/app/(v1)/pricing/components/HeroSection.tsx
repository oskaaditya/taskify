import React from 'react';
import { BackgroundHeroPattern } from './ui/Background';

const HeroSection = () => {
  return (
    <section className=" relative overflow-hidden bg-white px-5 py-14 md:py-[124.5px] xl:px-20">
      <div className="container mx-auto">
        <BackgroundHeroPattern />
        <div className="mx-auto max-w-[584px] space-y-4">
          <h1 className="text-center text-[28px] font-medium md:text-h1">Our pricing for products and services</h1>
          <p className="text-center text-base font-medium text-neutral-500 md:px-10 md:text-lg">
            Our platform isn&apos;t just a tool—it&apos;s a game-changer that empowers your team to work smarter,
            collaborate better, and achieve more.
          </p>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
