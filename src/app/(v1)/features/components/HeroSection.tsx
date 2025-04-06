'use client';
import { containerVariants, fadeInVariants, fadeUpChildVariants } from '@/animations/variants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundHero } from './ui/Background';

const HeroSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-white px-5 pt-14 md:py-[124.5px] xl:py-[144px]"
    >
      <BackgroundHero />
      <div className="container mx-auto">
        <div className="relative mb-8 max-w-[584px] space-y-8 md:mx-8 md:mb-0">
          <div className="space-y-4">
            <motion.h1 variants={fadeUpChildVariants} className="text-[28px] font-medium md:text-h1">
              Step up your companies game
            </motion.h1>
            <motion.p variants={fadeUpChildVariants} className="max-w-[490px] text-base font-medium text-neutral-500">
              Say hello to efficient workflows and goodbye to unnecessary stress. With our user-friendly interface and
              powerful features, tackling tasks never been more enjoyable.
            </motion.p>
          </div>
          <div className="flex flex-col items-center gap-2 lg:flex-row">
            <motion.div variants={fadeUpChildVariants}>
              <Button
                as={Link}
                href="#"
                className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                variant="flat"
              >
                Get started
              </Button>
            </motion.div>
            <motion.div variants={fadeUpChildVariants}>
              <Button
                as={Link}
                href="#"
                className="h-auto w-full bg-transparent px-9 py-[13px] text-lg text-primary-500 md:w-fit"
                variant="flat"
              >
                See all features
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
      <motion.div variants={fadeInVariants}>
        <Image
          quality={100}
          alt="dashboard-img"
          className="relative z-10 max-h-[724px] w-full max-w-none sm:-right-[70%] sm:top-20 sm:h-auto sm:w-auto md:max-w-[1188px] lg:absolute xl:-right-[40%] 2xl:-right-1/4"
          width={4752}
          height={2970}
          src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
        />
      </motion.div>
    </motion.section>
  );
};

export default HeroSection;
