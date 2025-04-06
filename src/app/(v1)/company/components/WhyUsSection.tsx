'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import { BackgroundHiglight } from './ui/Background';
import Highlight from './ui/Highlight';

const WhyUsSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden bg-primary-500 px-5 py-14 md:py-[124.5px] xl:p-20"
    >
      <div className="container mx-auto">
        <BackgroundHiglight />
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <motion.p variants={fadeUpChildVariants} className="text-sm font-medium uppercase text-white md:text-base">
              WHY US?
            </motion.p>
            <motion.h2 variants={fadeUpChildVariants} className="text-h3 font-medium text-white md:text-h2">
              Why use taskify?
            </motion.h2>
          </div>
          <Highlight />
        </div>
      </div>
    </motion.section>
  );
};

export default WhyUsSection;
