'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { desc, tag, title } from '../constants';

const Cta = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-additional-navy px-5 py-10 md:pb-[94px] md:pt-[70px] xl:px-20"
    >
      <Image
        quality={100}
        fill
        style={{
          objectFit: 'cover',
          objectPosition: 'top left',
        }}
        alt="Cta-pattern"
        src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1716276278/taskify/assets/images/Cta-pattern.png"
        className="absolute z-0 h-auto w-full"
      />
      <div className="container z-10 mx-auto">
        <div className=" flex flex-col justify-between gap-4 md:flex-row md:items-center">
          <div className="flex max-w-[450px] flex-col gap-4">
            <motion.p variants={fadeUpChildVariants} className="text-sm font-medium text-white md:text-base">
              {tag}
            </motion.p>
            <motion.h2
              variants={fadeUpChildVariants}
              className="text-[28px] font-medium !leading-[120%] tracking-tighter text-white md:text-5xl"
            >
              {title}
            </motion.h2>
          </div>
          <div className="flex max-w-[380px] flex-col gap-6">
            <motion.p variants={fadeUpChildVariants} className="text-white">
              {desc}
            </motion.p>
            <motion.div variants={fadeUpChildVariants}>
              <Button
                as={Link}
                href="#"
                className="h-auto bg-primary-500 px-8 py-[14px] text-lg text-white md:w-fit"
                variant="flat"
              >
                Get Started
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default Cta;
