import { TFeatures } from '@/types/TFeatures';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import React, { FC } from 'react';

const CardFeatures: FC<TFeatures> = ({ id, title, image, description }) => {
  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-center gap-12 overflow-hidden rounded-2xl pt-7 lg:pt-14',
        {
          'bg-additional-navy': id === 1,
          'bg-primary-500': id === 2,
          'bg-additional-purple': id === 3,
        },
      )}
    >
      <div className="space-y-4 px-6 text-center">
        <h2 className="text-[28px] font-medium text-white lg:text-5xl">{title}</h2>
        <p className="mx-auto max-w-[519px] text-sm text-white lg:text-base">{description}</p>
      </div>
      <Image
        quality={100}
        src={image}
        alt="title"
        width={2880}
        height={800}
        className="-mb-[80px] h-auto w-full max-w-[720px] lg:-mb-[225px]"
      />
    </div>
  );
};

export default CardFeatures;
