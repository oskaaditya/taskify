import { storiesList } from '@/app/constants';
import { Button } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SliderStories from './ui/SliderStories';

const StoriesSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-20">
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="flex items-center justify-between gap-6 phone:flex-col phone:items-start">
            <div className="space-y-4">
              <p className="font-medium uppercase text-primary-500">STORIES</p>
              <div className="item-start flex w-full flex-col justify-between gap-4">
                <h1 className="max-w-[486px] text-[28px] font-medium md:text-h2">Let’s see what founders are saying</h1>
              </div>
            </div>
            <div className="space-y-6">
              <p className="max-w-[490px] text-base font-medium text-neutral-500">
                Join hundreds of all sizes and across all industries have made a big improvements with us.
              </p>
              <Button
                as={Link}
                href="#"
                className="mt-14 flex h-auto w-fit bg-primary-500 px-4 py-2.5 text-base text-white sm:text-lg phone:w-full"
                variant="flat"
                endContent={<ChevronRight className="size-5" />}
              >
                All Stories
              </Button>
            </div>
          </div>
          <SliderStories data={storiesList} />
        </div>
      </div>
    </section>
  );
};

export default StoriesSection;
