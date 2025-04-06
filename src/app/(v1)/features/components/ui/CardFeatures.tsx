'use client';
import { fadeUpChildVariants } from '@/animations/variants';
import { IFeatures } from '@/interfaces/IFeatures';
import { cn } from '@/utils/utils';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { FC } from 'react';
import { BackgroundFirstFeatures, BackgroundSecondFeatures, BackgroundThirdFeatures } from './Background';

const CardFeatures: FC<IFeatures> = ({ id, title, image, description }) => {
  const renderBackground = (id: number) => {
    switch (id) {
      case 1:
        return <BackgroundFirstFeatures />;
      case 2:
        return <BackgroundSecondFeatures />;
      case 3:
        return <BackgroundThirdFeatures />;
      default:
        return null;
    }
  };

  return (
    <motion.div
      variants={fadeUpChildVariants}
      className={cn(
        'relative flex w-full flex-col items-center justify-start gap-12 overflow-hidden rounded-2xl pt-7 lg:pt-14 xl:min-h-[500px]',
        {
          'bg-additional-navy': id === 1,
          'bg-primary-500': id === 2,
          'bg-additional-purple': id === 3,
        },
      )}
    >
      {renderBackground(id)}
      <div className="relative space-y-4 px-6 text-center">
        <h2 className="text-[28px] font-medium text-white lg:text-5xl">{title}</h2>
        <p className="mx-auto max-w-[519px] text-sm text-white lg:text-base">{description}</p>
      </div>
      <Image
        quality={100}
        src={image}
        alt="title"
        width={2880}
        height={800}
        className="-mb-[80px] h-auto w-full max-w-[720px] lg:-mb-[225px] "
      />
    </motion.div>
  );
};

export default CardFeatures;
