import React from 'react';
import Highlight from './ui/Highlight';
import { BackgroundHiglight } from './ui/Background';

const WhyUsSection = () => {
  return (
    <section className="relative overflow-hidden bg-primary-500 px-5 py-14 md:py-[124.5px] xl:p-20">
      <div className="container mx-auto">
        <BackgroundHiglight />
        <div className="space-y-16">
          <div className="space-y-4 text-center">
            <p className="text-sm font-medium uppercase text-white md:text-base">WHY US?</p>
            <h2 className="text-h3 font-medium text-white md:text-h2">Why use taskify?</h2>
          </div>
          <Highlight />
        </div>
      </div>
    </section>
  );
};

export default WhyUsSection;
