'use client';

import MinusIcon from '@/components/icons/MinusIcon';
import PlusIcon from '@/components/icons/PlusIcon';
import { IFaq } from '@/interfaces/IPricing';
import { Accordion, AccordionItem } from '@nextui-org/react';
import { FC } from 'react';

interface IAccordion {
  data: IFaq[];
  version?: 1 | 2;
}

const AccordionFaq: FC<IAccordion> = ({ data, version = 1 }) => {
  const faqStyleV1 = {
    base: 'px-4 py-6 border-b border-b-neutral-200 data-[open=true]:border data-[open=true]:border-b-transparent data-[open=true]:border-primary-500 data-[open=true]:rounded-2xl w-full ',
    title: 'font-medium text-lg md:text-2xl text-neutral-600 py-0',
    trigger: 'md:px-6 py-0 bg-transparent rounded-lg flex items-center',
    indicator: 'text-neutral-600',
    content: `md:px-6 text-base md:text-lg text-neutral-500 max-w-[984px] pt-6 pb-0`,
  };

  const faqStyleV2 = {
    base: 'p-6 border-b border-b-neutral-200 w-full max-w-[663px] data-[open=true]:bg-white',
    title: 'font-medium text-lg md:text-2xl text-neutral-600 py-0',
    trigger: 'py-0 bg-transparent rounded-lg flex items-center',
    indicator: 'text-neutral-600',
    content: `text-base md:text-lg text-neutral-500 pt-6 max-w-[599px] pb-0`,
  };

  return (
    <div className="rounded-2xl">
      <Accordion isCompact selectionMode="single" showDivider={false} className="!px-0">
        {data.map((item, index) => (
          <AccordionItem
            key={index}
            aria-label={`question ${index}`}
            title={item.title}
            indicator={({ isOpen }) => (isOpen ? <MinusIcon /> : <PlusIcon />)}
            disableIndicatorAnimation
            classNames={version === 1 ? faqStyleV1 : faqStyleV2}
          >
            {item.description}
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
};

export default AccordionFaq;
