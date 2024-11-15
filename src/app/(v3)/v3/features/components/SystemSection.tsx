import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

const SystemSection = () => {
  return (
    <section className="relative overflow-hidden bg-white px-5 py-10 lg:px-0 lg:py-[213px] lg:pl-5">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="max-w-[720px] space-y-4">
            <p className="font-medium uppercase text-primary-500">SYSTEM</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">
                A system that help all the people in team
              </h1>
              <div className="space-y-8">
                <p className="text-lg text-neutral-500 lg:max-w-[490px]">
                  With tools to make every part of your process more human and a support team excited to help you.
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
          <div className="absolute right-0 top-0 order-first rounded-[10px] bg-primary-300 px-[12px] py-[18px] lg:order-last lg:max-w-[384px] lg:rounded-2xl lg:px-[22px] lg:py-[31px] xl:max-w-[540px]">
            <Image
              className="w-full"
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-2.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
