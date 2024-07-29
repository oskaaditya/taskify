import { featuresList } from '@/app/constants';
import React from 'react';
import CardFeatures from './ui/CardFeatures';

const FeaturesSection = () => {
  return (
    <section className="px-5 py-20">
      <div className="container mx-auto">
        <div className="mx-auto mb-14 max-w-[647px] space-y-4 text-center">
          <p className="text-sm font-medium uppercase text-primary-500 md:text-base">FEATURES</p>
          <h2 className="text-h3 font-medium md:text-h2">Managing task and projects never been so easy</h2>
          <p className="text-sm text-neutral-500 md:px-12 md:text-base">
            From seamless project planning to streamlined task elegation, our software empowers you to take control of
            your projects like never befores
          </p>
        </div>
        <div className="space-y-16">
          {featuresList.map((feature) => {
            return (
              <CardFeatures
                key={feature.id}
                id={feature.id}
                title={feature.title}
                description={feature.description}
                image={feature.image}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
