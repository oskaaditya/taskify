import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { desc, tag, title } from '../constants';

const CTAThree = () => {
  return (
    <section className="relative  px-5 py-10 md:pb-[94px] md:pt-[70px] xl:px-20">
      <div className="container mx-auto">
        <div className="relative rounded-xl bg-additional-navy px-5 py-10 md:px-14">
          <Image
            quality={100}
            fill
            style={{
              objectFit: 'cover',
              objectPosition: 'top left',
            }}
            alt="cta-pattern"
            src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1716281153/taskify/assets/images/cta-pattern-2.png"
            className="absolute z-0 h-auto w-full"
          />
          <div className=" flex flex-col justify-between gap-4 md:flex-row md:items-center">
            <div className="flex max-w-[450px] flex-col gap-4">
              <p className="text-sm font-medium text-white md:text-base">{tag}</p>
              <h2 className="text-[28px] font-medium !leading-[120%] tracking-tighter text-white md:text-5xl">
                {title}
              </h2>
              <p className="text-white">{desc}</p>
            </div>
            <div className="flex max-w-[380px] flex-col gap-6">
              <Button
                as={Link}
                href="#"
                className="h-auto bg-primary-500 px-8 py-[14px] text-lg text-white md:w-fit"
                variant="flat"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTAThree;
