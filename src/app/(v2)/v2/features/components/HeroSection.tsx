'use client';
import { containerVariants, fadeInVariants, fadeUpChildVariants } from '@/animations/variants';
import { highlightList } from '@/app/constants';
import CountUp from '@/components/counts-up';
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
      className="relative overflow-hidden bg-white px-5 pt-14 md:pb-40 md:pt-20"
    >
      <BackgroundHero />
      <div className="container mx-auto">
        <div className="space-y-4">
          <motion.p variants={fadeUpChildVariants} className="font-medium uppercase text-primary-500">
            FEATURES
          </motion.p>
          <div className="item-start flex w-full flex-col justify-between gap-4 lg:flex-row">
            <motion.h1 variants={fadeUpChildVariants} className="max-w-[486px] text-[28px] font-medium md:text-h1">
              Step up your companies game
            </motion.h1>
            <div className="space-y-6">
              <motion.p variants={fadeUpChildVariants} className="max-w-[380px] text-base font-medium text-neutral-500">
                Say hello to efficient workflows and goodbye to unnecessary stress.
              </motion.p>
              <div className="flex flex-col items-center gap-6 lg:flex-row">
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
                    className="flex items-center justify-center gap-[10px] bg-transparent px-9 py-[13px] text-lg text-primary-500  md:w-fit"
                  >
                    <p className="text-lg">See all features</p>
                  </Button>
                </motion.div>
              </div>
            </div>
          </div>
        </div>
        <motion.div variants={fadeInVariants}>
          <Image
            className="mt-14 w-screen object-cover object-bottom"
            radius="none"
            src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
          />
        </motion.div>
        <div className="mt-4 grid grid-cols-3 gap-10 lg:mt-[72px] lg:gap-24">
          {highlightList.map((item, index) => (
            <motion.div
              variants={fadeUpChildVariants}
              key={index}
              className="flex flex-col items-center gap-2 font-medium text-primary-500 md:gap-6 lg:flex-row"
            >
              <p className="inline-flex text-2xl lg:text-[56px]">
                {item.title === 'Companies' ? (
                  <>
                    <CountUp
                      from={0}
                      to={item.total}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    +
                  </>
                ) : item.title === 'Active' ? (
                  <>
                    <CountUp
                      from={0}
                      to={item.total}
                      separator=","
                      direction="up"
                      duration={0.2}
                      className="count-up-text"
                    />
                    K+
                  </>
                ) : (
                  <CountUp
                    from={0}
                    to={item.total}
                    separator="."
                    direction="up"
                    duration={0.2}
                    className="count-up-text"
                  />
                )}
              </p>
              <div className="space-y-1 text-center md:text-start">
                <p className="text-sm text-neutral-600 md:text-2xl">{item.title}</p>
                <p className="hidden text-lg text-neutral-500 lg:block">{item.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </motion.section>
  );
};

export default HeroSection;
