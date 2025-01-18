'use client';

import { Marquee } from '@/components/ui/Marquee';
import { IStoriesCard } from '@/interfaces/IStories';
import { FC } from 'react';
import CardStories from './CardStories';

interface IStoriesMarquee {
  data: IStoriesCard[];
}

const StoriesMarquee: FC<IStoriesMarquee> = ({ data }) => {
  return (
    <Marquee pauseOnHover className="mt-14">
      {data.map((item, index) => (
        <CardStories
          background={item.background}
          logo={item.logo}
          name={item.name}
          position={item.position}
          stories={item.stories}
          key={index}
        />
      ))}
    </Marquee>
  );
};

export default StoriesMarquee;
