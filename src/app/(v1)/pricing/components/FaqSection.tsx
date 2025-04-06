'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { faqPricingLists } from '@/app/constants';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import AccordionFaq from '../../../../components/ui/AccordionFaq';

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
      className=" relative bg-white px-5 py-8 md:py-20 xl:px-20"
    >
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center md:max-w-[583px]">
            <motion.p variants={fadeUpChildVariants} className="text-sm font-medium text-primary-500 md:text-base">
              FAQ
            </motion.p>
            <motion.h2 variants={fadeUpChildVariants} className="text-[28px] font-medium text-neutral-600 md:text-h2">
              Frequently Asked Question
            </motion.h2>
            <motion.p variants={fadeUpChildVariants} className="text-sm text-neutral-500 md:px-12 md:text-base">
              Whether you&apos;re wondering about our product features, pricing plans, or technical support, we&apos;ve
              got you covered.
            </motion.p>
          </div>
          <AccordionFaq data={faqPricingLists} />
          <motion.div variants={fadeUpChildVariants}>
            <Button
              as={Link}
              className="mx-auto flex h-auto w-fit bg-primary-500 px-8 py-[13px] text-lg font-medium text-white"
              href="#"
              variant="flat"
              endContent={<ChevronRightIcon size={20} />}
            >
              See more
            </Button>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default FaqSection;
