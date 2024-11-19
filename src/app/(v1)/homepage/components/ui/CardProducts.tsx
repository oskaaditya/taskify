import { IProductsCardProps } from '@/interfaces/IProduct';
import { cn } from '@/utils/utils';
import Image from 'next/image';
import { FC } from 'react';
import { BackgroundFirstProducts, BackgroundSecondProducts } from './Background';

const CardProducts: FC<IProductsCardProps> = ({ id, title, image, description }) => {
  const renderBackground = (id: number) => {
    switch (id) {
      case 1:
        return <BackgroundFirstProducts />;
      case 2:
        return <BackgroundSecondProducts />;
      default:
        return null;
    }
  };

  return (
    <div
      className={cn(
        'relative flex w-full flex-col items-center justify-start gap-12 overflow-hidden rounded-2xl pt-7 lg:pt-14 xl:min-h-[500px]',
        {
          'bg-primary-500': id === 1,
          'bg-white shadow-md': id === 2,
        },
      )}
    >
      {renderBackground(id)}
      <div className="space-y-4 px-6 text-center">
        <h2
          className={cn('text-[28px] font-medium lg:text-5xl', {
            'text-white': id === 1,
            'text-neutral-900': id === 2,
          })}
        >
          {title}
        </h2>
        <p
          className={cn('mx-auto max-w-[519px] text-sm lg:text-base', {
            'text-white': id === 1,
            'text-neutral-500': id === 2,
          })}
        >
          {description}
        </p>
      </div>
      <Image
        quality={100}
        src={image}
        alt="title"
        width={2880}
        height={800}
        className="relative -mb-[80px] h-auto w-full max-w-[720px] lg:-mb-[225px]"
      />
    </div>
  );
};

export default CardProducts;
