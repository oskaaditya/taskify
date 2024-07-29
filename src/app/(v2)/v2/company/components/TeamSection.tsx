import React from 'react';
import Teams from './ui/Teams';
import { teamsList } from '@/app/constants';
import { Button } from '@nextui-org/react';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import Link from 'next/link';

const TeamSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-5 py-14 md:py-[124.5px] xl:p-20">
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

export default TeamSection;
