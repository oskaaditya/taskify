'use client';

import { IStoriesCard } from '@/interfaces/IStories';
import { motion, useAnimationControls } from 'framer-motion';
import { FC, useRef } from 'react';
import CardStories from './CardStories';

interface IStoriesMarquee {
  data: IStoriesCard[];
}

const StoriesMarquee: FC<IStoriesMarquee> = ({ data }) => {
  const controls = useAnimationControls();
  const containerRef = useRef<HTMLDivElement>(null);
  const doubledData = [...data, ...data];

  return (
    <div
      ref={containerRef}
      className="relative mt-14 overflow-hidden"
      onMouseEnter={() => {
        controls.stop();
      }}
      onMouseLeave={() => {
        const currentX = containerRef.current?.querySelector('div')?.getBoundingClientRect().x || 0;
        controls.start({
          x: [currentX, '-50%'],
          transition: {
            duration: 20,
            ease: 'linear',
            repeat: Infinity,
          },
        });
      }}
    >
      <motion.div
        className="flex gap-8"
        animate={controls}
        initial={{ x: 0 }}
        transition={{
          duration: 20,
          ease: 'linear',
          repeat: Infinity,
        }}
        style={{ x: 0 }}
      >
        {doubledData.map((item, index) => (
          <CardStories
            background={item.background}
            logo={item.logo}
            name={item.name}
            position={item.position}
            stories={item.stories}
            key={index}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default StoriesMarquee;
