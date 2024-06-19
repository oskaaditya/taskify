import React from 'react';
import { faqCompanyLists } from '@/app/constants';
import AccordionFaq from '@/components/ui/AccordionFaq';

const FaqSection = () => {
  return (
    <section className=" relative bg-white px-5 py-8 md:py-20 xl:px-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-start">
          <div className="mx-auto flex flex-col items-start justify-start gap-4 md:max-w-[583px]">
            <p className="text-sm font-medium text-primary-500 md:text-base">FAQ</p>
            <h2 className="text-[28px] font-medium text-neutral-600 md:text-h2">Frequently Asked Question</h2>
            <p className="text-sm text-neutral-500 md:text-base">
              Whether you&apos;re wondering about our product features, pricing plans, or technical support, we&apos;ve
              got you covered.
            </p>
          </div>
          <AccordionFaq data={faqCompanyLists} />
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
