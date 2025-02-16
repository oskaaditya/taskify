import { IFeatures } from '@/interfaces/IFeatures';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';

const CardProducts: FC<IFeatures> = ({ title, description, image, id }) => {
  return (
    <div
      className={cn(
        `relative flex h-auto min-h-[448px] w-full flex-col gap-10 overflow-hidden rounded-2xl px-7 pt-7 md:min-h-[500px] md:gap-12 lg:px-12 lg:py-14  ${id === 3 ? 'col-span-2' : ''}`,
        {
          'bg-primary-500': id === 1,
          'bg-white shadow-md': id === 2,
          'bg-additional-navy': id === 3,
        },
      )}
    >
      <div className={`relative z-10 min-h-[170px] space-y-4 `}>
        <h2
          className={`text-[28px] font-medium ${id === 2 ? 'text-neutral-900' : 'text-white'} ${id === 3 ? 'text-center' : 'text-center lg:text-start'} lg:text-5xl`}
        >
          {title}
        </h2>
        <p
          className={`mx-auto max-w-[519px] text-sm ${id === 2 ? 'text-neutral-900' : 'text-white'} ${id === 3 ? 'text-center' : 'text-center lg:text-start'} lg:text-base`}
        >
          {description}
        </p>
      </div>
      {id !== 3 ? (
        <Image
          quality={100}
          src={image}
          alt="title"
          width={2880}
          height={800}
          className="absolute -bottom-8 -mb-[20px] h-auto w-full max-w-[335px] md:-mb-24 md:max-w-[720px] lg:-mb-[125px]"
        />
      ) : (
        <div className="absolute -bottom-8 -mb-[20px] flex h-auto w-full max-w-5xl gap-8 sm:-left-[20%] md:-mb-24 lg:left-[10%] lg:-mb-[125px]">
          <Image
            quality={100}
            src={image}
            alt="title"
            width={2880}
            height={800}
            className="h-auto w-full max-w-[720px]"
          />
          <Image
            src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722225628/taskify/assets/images/dashboard-mobile.png"
            alt="dashboard-mobile"
            className="max-w-[235px]"
            quality={100}
            width={470}
            height={809}
          />
        </div>
      )}
    </div>
  );
};

export default CardProducts;
