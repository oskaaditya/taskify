'use client';
import { containerVariants, fadeInVariants, fadeUpChildVariants } from '@/animations/variants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Button, Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
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
      className="relative overflow-hidden bg-white pt-14 md:px-5 md:py-[124.5px] xl:p-[186.5px]"
    >
      <BackgroundHero />
      <motion.div
        variants={fadeInVariants}
        className="absolute right-0 top-0 order-last hidden bg-company-hero object-cover md:block md:h-full md:w-4/12 md:bg-left-bottom xl:w-5/12"
      />
      <div className="container mx-auto">
        <div className="mb-8 max-w-[584px] space-y-4 px-5 md:mx-8 md:mb-0">
          <motion.h1 variants={fadeUpChildVariants} className="text-[28px] font-medium md:text-h1">
            Taskify help upgrade your company
          </motion.h1>
          <motion.p variants={fadeUpChildVariants} className="max-w-[490px] text-base font-medium text-neutral-500">
            Our platform isn&apos;t just a tool—it&apos;s a game-changer that empowers your team to work smarter,
            collaborate better, and achieve more.
          </motion.p>
          <motion.div variants={fadeUpChildVariants}>
            <Button
              as={Link}
              href="#"
              className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
              variant="flat"
            >
              Get to know us
            </Button>
          </motion.div>
        </div>
        <motion.div variants={fadeInVariants}>
          <Image
            className="max-h-[320px] w-screen bg-bottom object-cover md:hidden"
            radius="none"
            src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1716795755/taskify/assets/images/company-hero-bg.jpg"
          />
        </motion.div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
