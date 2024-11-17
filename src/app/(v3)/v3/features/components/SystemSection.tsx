'use client';

import { downwardImagesFeaturesV3, upwardImagesFeaturesV3 } from '@/app/constants';
import ImageMarque from '@/components/ui/ImageMarquee';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const SystemSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 lg:max-h-[616px] lg:py-[170px] lg:pl-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="max-w-[720px] space-y-4">
            <p className="font-medium uppercase text-primary-500">SYSTEM</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">
                A system that help all the people in team
              </h1>
              <div className="space-y-8">
                <p className="text-lg text-neutral-500 lg:max-w-[490px]">
                  With tools to make every part of your process more human and a support team excited to help you.
                </p>
                <Button
                  as={Link}
                  href="#"
                  className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                  variant="flat"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
          <div className="relative right-0 top-0 order-first max-h-[294px] gap-4 overflow-hidden sm:absolute sm:max-h-none lg:order-last lg:rounded-2xl">
            <div className="relative flex gap-2 sm:-right-[25%] sm:gap-4 xl:-right-20 xl:gap-6">
              <ImageMarque images={upwardImagesFeaturesV3} direction="up" />
              <ImageMarque images={downwardImagesFeaturesV3} direction="down" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
