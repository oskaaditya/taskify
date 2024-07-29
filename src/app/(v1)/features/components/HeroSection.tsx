import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:py-[124.5px] xl:py-[144px]">
      <div className="container mx-auto">
        <div className="mb-8 max-w-[584px] space-y-8 md:mx-8 md:mb-0">
          <div className="space-y-4">
            <h1 className="text-[28px] font-medium md:text-h1">Step up your companies game</h1>
            <p className="max-w-[490px] text-base font-medium text-neutral-500">
              Say hello to efficient workflows and goodbye to unnecessary stress. With our user-friendly interface and
              powerful features, tackling tasks never been more enjoyable.
            </p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <Button
              as={Link}
              href="#"
              className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
              variant="flat"
            >
              Get started
            </Button>
            <Button
              as={Link}
              href="#"
              className="h-auto w-full bg-transparent px-9 py-[13px] text-lg text-primary-500 md:w-fit"
              variant="flat"
            >
              See all features
            </Button>
          </div>
        </div>
      </div>
      <Image
        quality={100}
        alt="dashboard-img"
        className="-right-[40%] top-20 max-h-[724px] w-auto sm:static sm:h-auto sm:w-full lg:absolute 2xl:-right-1/4"
        width={4752}
        height={2970}
        src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
      />
    </section>
  );
};

export default HeroSection;
