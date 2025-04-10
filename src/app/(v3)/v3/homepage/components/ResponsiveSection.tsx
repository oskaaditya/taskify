import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

const ResponsiveSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-5 py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="flex gap-2 rounded-[10px] bg-additional-navy px-[12px] py-10 lg:max-w-[480px] lg:rounded-2xl lg:px-[26px] lg:py-[70px] xl:max-w-[540px]">
            <Image
              className="h-auto w-full max-w-[387px]"
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png"
            />
            <Image
              className="h-auto max-h-[217px] w-full"
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722225628/taskify/assets/images/dashboard-mobile.png"
            />
          </div>
          <div className="max-w-[720px] space-y-4">
            <p className="font-medium uppercase text-primary-500">RESPONSIVE</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[640px] text-[28px] font-medium md:text-h2">
                Mobile Friendly Features Simplify User Experience
              </h1>
              <div className="space-y-8">
                <p className="text-lg text-neutral-500 lg:max-w-[490px]">
                  Discover the convenience of our user-friendly software, designed to seamlessly adapt to all your
                  devices. Whether you&apos;re on your laptop, tablet, or smartphone, accessing our platform is a
                  breeze.
                </p>
                <Button
                  as={Link}
                  href="#"
                  className="h-auto w-full bg-primary-500 px-9 py-[13px] text-lg text-white md:w-fit"
                  variant="flat"
                >
                  Learn more
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResponsiveSection;
