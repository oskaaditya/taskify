import { IStoriesCard } from '@/interfaces/IStories';
import Image from 'next/image';
import { FC } from 'react';

const CardStories: FC<IStoriesCard> = ({ logo, background, name, stories, position }) => {
  return (
    <div className="w-full min-w-[518px] rounded-[20px] bg-neutral-100 p-6">
      <div className="relative rounded-2xl bg-black p-8">
        <Image fill alt="img-stories-bg" src={background} className="absolute h-auto w-full rounded-2xl object-cover" />
        <div className="relative flex h-full min-h-[470px] flex-col justify-between">
          <Image src={logo} alt={name} width={190} height={80} className="h-auto w-full max-w-[193px]" />
          <div className="max-w-[332px] space-y-[14px]">
            <p className="text-sm font-medium text-white">{name}</p>
            <p className="text-xl font-bold text-white">{stories}</p>
            <p className="text-sm text-white">{position}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardStories;
