import { IntegrateCardProps } from '@/interfaces/IIntegrate';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';
import CardIntegrate from './CardIntegrate';

interface CardMarqueProps {
  data: IntegrateCardProps[];
  direction?: 'up' | 'down';
}

const CardMarque = ({ data, direction = 'up' }: CardMarqueProps) => {
  const controls = useAnimationControls();
  const yOffset = 1000;

  const startY = direction === 'up' ? 0 : -yOffset;
  const endY = direction === 'up' ? -yOffset : 0;

  useEffect(() => {
    controls.start({
      y: [startY, endY],
      transition: {
        y: {
          repeat: Infinity,
          repeatType: 'loop',
          duration: 20,
          ease: 'linear',
        },
      },
    });
  }, []);

  return (
    <motion.div
      className={`relative ${direction === 'up' ? '-top-8' : '-top-4'} flex max-w-[149px] flex-col gap-2 sm:max-w-[250px] xl:max-w-[384px] xl:gap-6`}
      animate={controls}
      initial={{ y: startY }}
    >
      {/* Duplicate data for seamless loop */}
      {[...data, ...data].map((item, index) => (
        <CardIntegrate key={index} description={item.description} logo={item.logo} title={item.title} />
      ))}
    </motion.div>
  );
};

export default CardMarque;
