import React from 'react';
import AccordionFaq from '../../../../components/ui/AccordionFaq';
import { faqPricingLists } from '@/app/constants';
import { Button } from '@nextui-org/react';
import Link from 'next/link';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';

const FaqSection = () => {
  return (
    <section className=" relative bg-white px-5 py-8 md:py-20 xl:px-20">
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="mx-auto flex flex-col items-center justify-center gap-4 text-center md:max-w-[583px]">
            <p className="text-sm font-medium text-primary-500 md:text-base">FAQ</p>
            <h2 className="text-[28px] font-medium text-neutral-600 md:text-h2">Frequently Asked Question</h2>
            <p className="text-sm text-neutral-500 md:px-12 md:text-base">
              Whether you&apos;re wondering about our product features, pricing plans, or technical support, we&apos;ve
              got you covered.
            </p>
          </div>
          <AccordionFaq data={faqPricingLists} />
          <Button
            as={Link}
            className="mx-auto flex h-auto w-fit bg-primary-500 px-8 py-[13px] text-lg font-medium text-white"
            href="#"
            variant="flat"
            endContent={<ChevronRightIcon size={20} />}
          >
            See more
          </Button>
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
