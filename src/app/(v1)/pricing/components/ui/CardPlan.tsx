'use client';
import { fadeUpChildVariants } from '@/animations/variants';
import CheckList from '@/components/icons/CheckList';
import { IPlan } from '@/interfaces/IPricing';
import { Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { FC } from 'react';
import { BackgroundPlanEnterprisePattern } from './Background';

interface ICardPlan {
  data: IPlan[];
}

const CardPlan: FC<ICardPlan> = ({ data }) => {
  return (
    <>
      {data.map((plan) => (
        <motion.div variants={fadeUpChildVariants} key={plan.id} className="space-y-4">
          {/* Card Top */}
          <div
            className={`relative flex flex-col gap-8 overflow-hidden rounded-2xl border border-neutral-200 px-6 pb-4 pt-6 ${plan.id === 3 ? 'bg-primary-600' : 'bg-white'}`}
          >
            {plan.id === 3 && <BackgroundPlanEnterprisePattern />}
            <h4
              className={`text-xl font-medium text-neutral-600 md:text-h4 ${plan.id === 2 && 'text-primary-500'} ${plan.id === 3 && 'text-white'}`}
            >
              {plan.name}
            </h4>
            <div className="space-y-2">
              <p className={`text-xl ${plan.id === 3 ? 'text-primary-300' : 'text-neutral-500'}`}>Starts at</p>
              <p className={`text-h2 ${plan.id === 3 && 'text-white'} ${plan.id === 2 && 'text-primary-500'}`}>
                {plan.price}
                <span className={`ml-2 text-lg ${plan.id === 3 ? 'text-primary-300' : 'text-neutral-500'}`}>
                  per months
                </span>
              </p>
            </div>
            <p className={`text-lg text-neutral-600 md:text-xl ${plan.id === 3 ? 'text-white' : 'text-neutral-600'}`}>
              {plan.description}
            </p>
            <Button
              as={Link}
              href="#"
              className={`h-auto w-full bg-primary-500 font-medium text-white ${plan.id === 3 && 'bg-white'} ${plan.id === 3 && 'text-primary-500'} px-8 py-[13px] text-lg`}
              variant="flat"
            >
              {plan.id === 3 ? 'Contact Us' : 'Get Started'}
            </Button>
          </div>
          {/* Card Top */}
          <div className="flex flex-col gap-8 rounded-2xl border border-neutral-200 bg-white px-6 pb-4 pt-6">
            {plan.features.map((item, index) => (
              <div key={index} className="flex items-center gap-4">
                <CheckList active={plan.id !== 1 || (index !== 0 && index !== 1)} />
                <p>{item.name}</p>
              </div>
            ))}
          </div>
        </motion.div>
      ))}
      ;
    </>
  );
};

export default CardPlan;
