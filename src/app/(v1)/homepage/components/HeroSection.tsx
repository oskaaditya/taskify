import { Icons } from '@/components/icons';
import { Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundHero } from './ui/Background';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:py-[124.5px] xl:py-[144px]">
      <BackgroundHero />
      <div className="container mx-auto">
        <div className="mb-8 max-w-[584px] space-y-8 md:mx-8 md:mb-0">
          <div className="space-y-4">
            <h1 className="text-[28px] font-medium md:text-h1">The better way for your customer needs.</h1>
            <p className="max-w-[490px] text-base font-medium text-neutral-500">
              Flexible and easy for all teams to use, so you can deliver quality work together faster.
            </p>
          </div>
          <div className="flex flex-col items-center gap-6 lg:flex-row">
            <Button
              as={Link}
              href="#"
              className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
              variant="flat"
            >
              Get started
            </Button>
            <div className="flex items-center justify-center gap-[10px] text-primary-500">
              <Icons.discount className="text-primary size-8" />
              <p className="text-lg">100% Free Demo</p>
            </div>
          </div>
        </div>
      </div>
      <Image
        quality={100}
        alt="dashboard-img"
        className="relative z-10 max-h-[724px] w-full max-w-none sm:-right-[70%] sm:top-20 sm:h-auto sm:w-auto md:max-w-[1188px] lg:absolute xl:-right-[40%] 2xl:-right-1/4"
        width={4752}
        height={2970}
        src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
      />
    </section>
  );
};

export default HeroSection;
