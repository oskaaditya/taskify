import { IFeatures } from '@/interfaces/IFeatures';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';

const CardProducts: FC<IFeatures> = ({ title, description, image, id }) => {
  return (
    <div
      className={cn(
        'relative flex h-auto min-h-[448px] w-full flex-col gap-10 overflow-hidden rounded-2xl px-7 pt-7 md:min-h-[500px] md:gap-12 lg:px-12 lg:py-14',
        {
          'bg-primary-500': id === 1,
          'bg-additional-navy': id === 2,
          'bg-additional-purple': id === 3,
          'shadow-md': id === 4, // {{ edit_1 }} Added box-shadow for id 4
        },
      )}
    >
      <div className="relative z-10 min-h-[170px] space-y-4">
        <h2 className={`text-[28px] font-medium ${id === 4 ? 'text-neutral-900' : 'text-white'} lg:text-5xl`}>
          {title}
        </h2>
        <p className={`mx-auto max-w-[519px] text-sm ${id === 4 ? 'text-neutral-900' : 'text-white'} lg:text-base`}>
          {description}
        </p>
      </div>
      <Image
        quality={100}
        src={image}
        alt="title"
        width={2880}
        height={800}
        className="absolute -bottom-8 -mb-[20px] h-auto w-full max-w-[720px] md:-mb-[40px] lg:-mb-[125px]"
      />
    </div>
  );
};

export default CardProducts;
