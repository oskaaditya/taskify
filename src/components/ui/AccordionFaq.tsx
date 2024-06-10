'use client';

import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { TFaq } from '@/types/TPricing';
import { Accordion, AccordionItem } from '@nextui-org/react';
import React, { FC } from 'react';

interface IAccordion {
  data: TFaq[];
}

const AccordionFaq: FC<IAccordion> = ({ data }) => {
  const itemClasses = {
    base: 'px-4 py-6 border-b border-b-neutral-200 data-[open=true]:border data-[open=true]:border-b-transparent data-[open=true]:border-primary-500 data-[open=true]:rounded-2xl w-full ',
    title: 'font-medium text-lg md:text-2xl text-neutral-600 py-0',
    trigger: 'md:px-6 py-0 bg-transparent rounded-lg flex items-center',
    indicator: 'text-neutral-600',
    content: `md:px-6 text-base md:text-lg text-neutral-500 max-w-[984px] pt-6 pb-0`,
  };

  return (
    <div>
      <Accordion isCompact selectionMode="single" showDivider={false} className="!px-0">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`question ${index}`}
            title={item.title}
            indicator={({ isOpen }) => (isOpen ? <MinusIcon /> : <PlusIcon />)}
            disableIndicatorAnimation
            classNames={itemClasses}
          >
            {item.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionFaq;
