import { Image } from '@nextui-org/react';
import { motion, useAnimationControls } from 'framer-motion';
import { useEffect } from 'react';

interface ImageMarqueProps {
  images: string[];
  direction?: 'up' | 'down';
}

const ImageMarque = ({ images, direction = 'up' }: ImageMarqueProps) => {
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
      {/* Duplicate images for seamless loop */}
      {[...images, ...images].map((src, index) => (
        <Image key={index} className="w-full" src={src} alt={`Parallax image ${index + 1}`} />
      ))}
    </motion.div>
  );
};

export default ImageMarque;
