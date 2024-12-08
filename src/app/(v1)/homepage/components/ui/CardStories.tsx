import { IStoriesCard } from '@/interfaces/IStories';
import Image from 'next/image';
import { FC } from 'react';

const CardStories: FC<IStoriesCard> = ({ logo, background, name, stories, position }) => {
  return (
    <div className="w-full rounded-[20px] bg-neutral-100 p-2 sm:p-6 md:min-w-[518px]">
      <div className="relative rounded-2xl bg-black p-5 md:p-8">
        <Image fill alt="img-stories-bg" src={background} className="absolute h-auto w-full rounded-2xl object-cover" />
        <div className="relative flex h-full min-h-[262px] flex-col justify-between md:min-h-[470px]">
          <Image
            src={logo}
            alt={name}
            width={190}
            height={80}
            className="h-auto w-full max-w-[108px] sm:max-w-[193px]"
          />
          <div className="max-w-[225px] space-y-1.5 md:max-w-[332px] md:space-y-[14px]">
            <p className="text-xs font-medium text-white md:text-sm">{name}</p>
            <p className="text-xs font-bold text-white md:text-xl">{stories}</p>
            <p className="text-xs text-white md:text-sm">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStories;
