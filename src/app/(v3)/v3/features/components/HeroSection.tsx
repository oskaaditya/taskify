import { highlightList, highlightTagList } from '@/app/constants';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';
import HighlightTag from './ui/HighlightTag';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:pb-40 md:pt-20">
      {/* <BackgroundHero /> */}
      <div className="container mx-auto">
        <div className="flex flex-col items-start gap-8 xl:flex-row xl:gap-20">
          <div className="space-y-4 xl:max-w-[567px]">
            <Image
              className="w-screen object-cover object-bottom"
              radius="none"
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
            />
            <div className="grid grid-cols-3 gap-2">
              {highlightTagList.map((item, index) => (
                <HighlightTag key={index} Icon={item.Icon} title={item.title} />
              ))}
            </div>
          </div>
          <div className="order-first w-full max-w-[720px] space-y-4 xl:order-last">
            <p className="font-medium uppercase text-primary-500">FEATURES</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">Step up your companies game</h1>
              <div className="space-y-6">
                <p className="max-w-[490px] text-lg font-medium text-neutral-500">
                  Say hello to efficient workflows and goodbye to unnecessary stress.
                </p>
                <div className="flex flex-col items-center gap-2 lg:flex-row">
                  <Button
                    as={Link}
                    href="#"
                    className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                    variant="flat"
                  >
                    Get to know us
                  </Button>
                  <Button
                    as={Link}
                    href="#"
                    className="h-auto w-full bg-transparent px-9 py-[13px] text-lg text-primary-500 md:w-fit"
                    variant="flat"
                  >
                    See all features
                  </Button>
                </div>
                <div className="grid grid-cols-3 gap-10 lg:mt-[48px] lg:gap-24">
                  {highlightList.map((item, index) => (
                    <div key={index} className="flex flex-col items-start gap-2 font-medium text-primary-500">
                      <p className="inline-flex text-2xl lg:text-5xl">
                        {item.title === 'Companies'
                          ? `${item.total}+`
                          : item.title === 'Active'
                            ? `${item.total}K+`
                            : item.total}
                      </p>
                      <div className="space-y-1 text-center md:text-start">
                        <p className="text-sm font-medium text-neutral-600 md:text-2xl">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
