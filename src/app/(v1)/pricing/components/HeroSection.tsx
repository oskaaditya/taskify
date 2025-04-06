'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import { BackgroundHeroPattern } from './ui/Background';

const HeroSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);

  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.1 }}
      className=" relative overflow-hidden bg-white px-5 py-14 md:py-[124.5px] xl:px-20"
    >
      <div className="container mx-auto">
        <BackgroundHeroPattern />
        <div className="mx-auto max-w-[584px] space-y-4">
          <motion.h1 variants={fadeUpChildVariants} className="text-center text-[28px] font-medium md:text-h1">
            Our pricing for products and services
          </motion.h1>
          <motion.p
            variants={fadeUpChildVariants}
            className="text-center text-base font-medium text-neutral-500 md:px-10 md:text-lg"
          >
            Our platform isn&apos;t just a tool—it&apos;s a game-changer that empowers your team to work smarter,
            collaborate better, and achieve more.
          </motion.p>
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
