'use client';
import { containerVariants } from '@/animations/variants';
import { pricingPlanList } from '@/app/constants';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';
import CardPlan from './ui/CardPlan';

const PlanSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className=" bg-neutral-50 px-5 py-10 md:pb-20 md:pt-6 xl:px-20"
    >
      <div className="container mx-auto">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
          <CardPlan data={pricingPlanList} />
        </div>
      </div>
    </motion.section>
  );
};

export default PlanSection;
