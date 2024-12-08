import { storiesList } from '@/app/constants';
import { Button } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SliderStories from './ui/SliderStories';
import StoriesMarquee from './ui/StoriesMarquee';

const StoriesSection = () => {
  return (
    <div className="relative overflow-hidden bg-neutral-50 px-5 pt-14 md:py-20 md:pb-40">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[486px] space-y-4 text-center">
          <p className="text-sm font-medium uppercase text-primary-500 md:text-base">STORIES</p>
          <h2 className="text-h3 font-medium md:text-h2">Let’s see what founders are saying</h2>
          <p className="mx-auto text-sm text-neutral-500 md:px-12 md:text-base">
            Join hundreds of all sizes and across all industries have made a big improvements with us.
          </p>
          <Button
            as={Link}
            href="#"
            className="mx-auto mt-14 flex h-auto w-fit bg-primary-500 px-4 py-2.5 text-base text-white sm:text-lg"
            variant="flat"
            endContent={<ChevronRight className="size-5" />}
          >
            All Stories
          </Button>
        </div>
      </div>
      <div className="hidden sm:block">
        <StoriesMarquee data={storiesList} />
      </div>
      <div className="block sm:hidden">
        <SliderStories data={storiesList} />
      </div>
    </div>
  );
};

export default StoriesSection;
