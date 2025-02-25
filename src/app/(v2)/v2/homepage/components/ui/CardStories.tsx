import { IStoriesCard } from '@/interfaces/IStories';
import Image from 'next/image';
import { FC } from 'react';

const CardStories: FC<IStoriesCard> = ({ logo, background, name, stories, position }) => {
  return (
    <div className="flex gap-4 rounded-[20px] bg-neutral-50 phone:flex-col">
      <div className="relative flex w-full max-w-[204px] flex-col items-center justify-center phone:min-h-[200px] phone:max-w-none">
        <Image src={background} fill alt={name} className="object-cover sm:rounded-l-[20px] phone:rounded-t-[20px]" />
        <Image
          src={logo}
          alt={name}
          width={190}
          height={80}
          className="absolute bottom-4 h-auto w-full max-w-[104px] text-center"
        />
      </div>
      <div className="space-y-16 px-4 py-6">
        <p className="text-xl font-medium text-neutral-600">{stories}</p>
        <div className="space-y-1">
          <p className="text-sm text-neutral-600">{name}</p>
          <p className="text-sm text-neutral-500">{position}</p>
        </div>
      </div>
    </div>
  );
};

export default CardStories;
