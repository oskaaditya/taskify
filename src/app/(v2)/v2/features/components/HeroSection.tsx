import { highlightList } from '@/app/constants';
import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 pt-14 md:pb-40 md:pt-20">
      {/* <BackgroundHero /> */}
      <div className="container mx-auto">
        <div className="space-y-4">
          <p className="font-medium uppercase text-primary-500">COMPANY</p>
          <div className="item-start flex w-full flex-col justify-between gap-4 lg:flex-row">
            <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">Taskify help upgrade your company</h1>
            <div className="space-y-6">
              <p className="max-w-[490px] text-base font-medium text-neutral-500">
                Our platform isn&apos;t just a tool—it&apos;s a game-changer that empowers your team to work smarter,
                collaborate better, and achieve more.
              </p>
              <Button
                as={Link}
                href="#"
                className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                variant="flat"
              >
                Get to know us
              </Button>
            </div>
          </div>
        </div>
        <Image
          className="mt-14 w-screen object-cover object-bottom"
          radius="none"
          src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1718938655/taskify/assets/images/dashboard-features.png"
        />
        <div className="mt-[72px] grid grid-cols-1 gap-10 lg:grid-cols-3 lg:gap-24">
          {highlightList.map((item, index) => (
            <div
              key={index}
              className="flex flex-col items-center gap-2 font-medium text-primary-500 md:gap-6 lg:flex-row"
            >
              <p className="inline-flex text-[56px]">
                {item.title === 'Companies'
                  ? `${item.total}+`
                  : item.title === 'Active'
                    ? `${item.total}K+`
                    : item.total}
              </p>
              <div className="space-y-1 text-center md:text-start">
                <p className="text-2xl text-neutral-600">{item.title}</p>
                <p className="text-lg text-neutral-500">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
