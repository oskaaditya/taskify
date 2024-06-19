import React from 'react';
import Teams from './ui/Teams';
import { teamsList } from '@/app/constants';

const TeamSection = () => {
  return (
    <section className=" relative overflow-hidden px-5 py-14 md:py-[124.5px] xl:p-20">
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="max-w-[584px] space-y-4">
            <p className="text-sm font-medium uppercase text-primary-500 md:text-base">TEAMS</p>
            <h2 className="text-h3 font-medium md:text-h2">Meet the team behind our great products</h2>
            <p className="max-w-[481px] text-sm text-neutral-500 md:text-base">
              Comprised of passionate individuals with diverse backgrounds and expertise, our team is united by a shared
              commitment to excellence and innovation.
            </p>
          </div>
          <Teams data={teamsList} />
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
