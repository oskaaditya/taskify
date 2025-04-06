'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { faqCompanyLists } from '@/app/constants';
import AccordionFaq from '@/components/ui/AccordionFaq';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { motion } from 'framer-motion';

const FaqSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative bg-neutral-50 px-5 py-8 md:py-20 xl:px-20"
    >
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start">
          <div className="mx-auto flex flex-col items-start justify-start gap-4 md:max-w-[481px]">
            <motion.p variants={fadeUpChildVariants} className="text-sm font-medium text-primary-500 md:text-base">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUpChildVariants} className="text-[28px] font-medium text-neutral-600 md:text-h2">
              Frequently Asked Question
            </motion.h2>
            <motion.p variants={fadeUpChildVariants} className="text-sm text-neutral-500 md:text-base">
              Whether you&apos;re wondering about our product features, pricing plans, or technical support, we&apos;ve
              got you covered.
            </motion.p>
          </div>
          <AccordionFaq data={faqCompanyLists} version={2} />
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
