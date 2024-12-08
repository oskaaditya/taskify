import { highlightList } from '@/app/constants';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { BackgroundHero } from './ui/Background';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:pb-40 md:pt-20">
      <BackgroundHero />
      <div className="container mx-auto">
        <div className="space-y-4">
          <p className="font-medium uppercase text-primary-500">#1 TOP PRODUCTS</p>
          <div className="item-start flex w-full flex-col justify-between gap-4 lg:flex-row">
            <h1 className="max-w-[493px] text-[28px] font-medium md:text-h2">
              The better way for your customer needs.
            </h1>
            <div className="space-y-6">
              <p className="max-w-[380px] text-base font-medium text-neutral-500">
                Flexible and easy for all teams to use, so you can deliver quality work together faster.
              </p>
              <Button
                as={Link}
                href="#"
                className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                variant="flat"
              >
                Get Started
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="mt-14 w-screen object-cover object-bottom"
          radius="none"
          src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
        />
        <div className="mt-4 grid grid-cols-3 gap-10 lg:mt-[72px] lg:gap-24">
          {highlightList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 font-medium text-primary-500 md:gap-6 lg:flex-row"
            >
              <p className="inline-flex text-2xl lg:text-[56px]">
                {item.title === 'Companies'
                  ? `${item.total}+`
                  : item.title === 'Active'
                    ? `${item.total}K+`
                    : item.total}
              </p>
              <div className="space-y-1 text-center md:text-start">
                <p className="text-sm text-neutral-600 md:text-2xl">{item.title}</p>
                <p className="hidden text-lg text-neutral-500 lg:block">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
