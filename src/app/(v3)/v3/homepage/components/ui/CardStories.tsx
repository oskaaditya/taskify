import { IStoriesCard } from '@/interfaces/IStories';
import Image from 'next/image';
import { FC } from 'react';

const CardStories: FC<IStoriesCard> = ({ background, name, stories, position }) => {
  return (
    <div className="flex min-h-[400px] flex-col items-center justify-center gap-4 rounded-[20px] bg-neutral-50">
      <Image src={background} fill alt={name} className="rounded-[20px] object-cover" />
      <div className="relative flex max-w-[771px] flex-col items-center justify-center space-y-10 px-4 py-6 phone:space-y-5">
        <p className="text-center text-h3 font-medium text-white">{stories}</p>
        <div className="space-y-1">
          <p className="text-center text-sm font-medium text-white">{name}</p>
          <p className="text-center text-sm text-white">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStories;
