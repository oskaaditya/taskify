import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { desc, tag, title } from '../constants';

const Cta = () => {
  return (
    <section className="relative px-5 py-10 md:pb-[94px] md:pt-[70px] xl:px-20">
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
              <p className="text-sm font-medium text-white md:hidden md:text-base">{tag}</p>
              <h2 className="text-[28px] font-medium !leading-[120%] tracking-tighter text-white md:text-5xl">
                {title}
              </h2>
              <p className="text-white">{desc}</p>
            </div>
            <div className="relative flex w-full max-w-[400px] rounded-lg bg-white">
              <input
                type="email"
                name="email"
                className="md:py-18px w-full rounded-lg border-none px-4 py-[13px] placeholder:text-[#929CA1] focus:outline-none md:py-[18px]"
                placeholder="Email address"
              />
              <Button
                as={Link}
                href="#"
                className="absolute right-[8px] top-1 h-auto bg-primary-500 px-4 py-[10.5px] text-white md:top-[9px] md:w-fit"
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

export default Cta;
