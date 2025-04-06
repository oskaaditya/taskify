'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { featuresList } from '@/app/constants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import CardFeatures from './ui/CardFeatures';

const FeaturesSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.4 }}
      className="px-5 py-20"
    >
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-[647px] space-y-4 text-center">
          <motion.p
            variants={fadeUpChildVariants}
            className="text-sm font-medium uppercase text-primary-500 md:text-base"
          >
            FEATURES
          </motion.p>
          <motion.h2 variants={fadeUpChildVariants} className="text-h3 font-medium md:text-h2">
            Managing task and projects never been so easy
          </motion.h2>
          <motion.p variants={fadeUpChildVariants} className="text-sm text-neutral-500 md:px-12 md:text-base">
            From seamless project planning to streamlined task elegation, our software empowers you to take control of
            your projects like never befores
          </motion.p>
        </div>
        <div className="space-y-16">
          {featuresList.map((feature) => {
            return (
              <CardFeatures
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            );
          })}
        </div>
      </div>
    </motion.section>
  );
};

export default FeaturesSection;
