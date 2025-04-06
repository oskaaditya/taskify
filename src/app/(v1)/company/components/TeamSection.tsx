'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { teamsList } from '@/app/constants';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Teams from './ui/Teams';

const TeamSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="relative overflow-hidden px-5 py-14 md:py-[124.5px] xl:p-20"
    >
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="mx-auto max-w-[584px] space-y-4 text-center">
            <motion.p
              variants={fadeUpChildVariants}
              className="text-sm font-medium uppercase text-primary-500 md:text-base"
            >
              TEAMS
            </motion.p>
            <motion.h2 variants={fadeUpChildVariants} className="text-h3 font-medium md:text-h2">
              Meet the team behind our great products
            </motion.h2>
            <motion.p variants={fadeUpChildVariants} className="text-sm text-neutral-500 md:px-12 md:text-base">
              Comprised of passionate individuals with diverse backgrounds and expertise, our team is united by a shared
              commitment to excellence and innovation.
            </motion.p>
          </div>
          <Teams data={teamsList} />
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

export default TeamSection;
