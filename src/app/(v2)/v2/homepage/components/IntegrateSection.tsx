import { integrateLists } from '@/app/constants';
import { Button } from '@nextui-org/react';
import { ChevronRight } from 'lucide-react';
import Link from 'next/link';
import CardIntegrate from './ui/CardIntegrate';

const IntegrateSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-5 py-20">
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="space-y-4">
            <p className="font-medium uppercase text-primary-500">INTEGRATE</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[600px] text-[28px] font-medium md:text-h2">Seamlessly integrated with all tools</h1>
              <div className="space-y-6">
                <p className="max-w-[490px] text-base font-medium text-neutral-500">
                  Get the full data picture, combine your community tools with your business data to provide a single
                  source of insight.
                </p>
              </div>
            </div>
          </div>
          <div className="phone:grid-cols-1 grid grid-cols-3 gap-6">
            {integrateLists.map((item, index) => (
              <CardIntegrate key={index} {...item} />
            ))}
          </div>
          <Button
            as={Link}
            href="#"
            className="mt-14 flex h-auto w-fit bg-primary-500 px-4 py-2.5 text-base text-white sm:text-lg"
            variant="flat"
            endContent={<ChevronRight className="size-5" />}
          >
            More Integrations
          </Button>
        </div>
      </div>
    </section>
  );
};

export default IntegrateSection;
