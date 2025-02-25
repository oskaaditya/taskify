import { dummyLogosHome, highlightTagList } from '@/app/constants';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import { BackgroundHero } from './ui/Background';
import HighlightTag from './ui/HighlightTag';

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
        <div className="mt-14 space-y-10">
          <div className="lg:gap-24` mx-auto grid max-w-[860px] gap-6 md:grid-cols-3 phone:hidden">
            {highlightTagList.map((item, index) => (
              <div key={index} className="flex w-auto items-start gap-4 font-medium md:gap-6">
                {item.Icon && <item.Icon className="size-6 text-primary-500 md:size-8" />}
                <div className="space-y-1 text-start">
                  <p className="text-xl text-neutral-600">{item.title}</p>
                  <p className="text-lg text-neutral-500">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <Image
            className="w-screen object-cover object-bottom"
            radius="none"
            src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
          />
        </div>
        <div className="mt-2 hidden grid-cols-3 gap-2 phone:grid">
          {highlightTagList.map((item, index) => (
            <HighlightTag key={index} Icon={item.Icon} title={item.title} />
          ))}
        </div>

        <div className="mt-[72px] flex flex-col items-center justify-center gap-6 phone:hidden">
          <p className="text-xl text-neutral-500">{`Trusted by world's best companies`}</p>
          <div className="flex flex-wrap justify-center gap-6 lg:justify-start">
            {dummyLogosHome.map((item, index) => (
              <Image
                key={index}
                src={item.src}
                className="h-auto w-full max-w-[190px] phone:max-w-20"
                alt={`dummy logo ${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
