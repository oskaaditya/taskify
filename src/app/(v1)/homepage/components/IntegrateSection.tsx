import { integrateLists } from '@/app/constants';
import { Button } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import SliderCardIntegrate from './ui/SliderCardIntegrate';

const IntegrateSection = () => {
  return (
    <div className="relative overflow-hidden bg-neutral-50  pt-14 md:py-20 md:pb-40">
      <div className="container mx-auto px-[5%]">
        <div className="mx-auto max-w-[600px] space-y-4 text-center">
          <p className="text-sm font-medium uppercase text-primary-500 md:text-base">INTEGRATE</p>
          <h2 className="text-h3 font-medium md:text-h2">Seamlessly integrated with all tools</h2>
          <p className="mx-auto text-sm text-neutral-500 md:px-12 md:text-base">
            Get the full data picture, combine your community tools with your business data to provide a single source
            of insight.
          </p>
        </div>
      </div>
      <div className="mt-14 flex justify-center gap-8">
        <SliderCardIntegrate data={integrateLists} />
      </div>
      <Button
        as={Link}
        href="#"
        className="mx-auto mt-14 flex h-auto w-fit bg-primary-500 px-4 py-2.5 text-base text-white sm:text-lg"
        variant="flat"
        endContent={<ChevronRight className="size-5" />}
      >
        More Integrations
      </Button>
    </div>
  );
};

export default IntegrateSection;
