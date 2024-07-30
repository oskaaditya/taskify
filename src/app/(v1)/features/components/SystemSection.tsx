import { Icons } from '@/components/icons';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import { Avatar, AvatarGroup, Button } from '@nextui-org/react';
import Image from 'next/image';
import Link from 'next/link';

const SystemSection = () => {
  return (
    <section className="px-5 py-20">
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="mx-auto max-w-[647px] space-y-4 text-center">
            <p className="text-sm font-medium uppercase text-primary-500 md:text-base">SYSTEM</p>
            <h2 className="text-h3 font-medium md:text-h2">Boost Your Team&apos;s with Our All-in-One System</h2>
            <p className="text-sm text-neutral-500 md:px-12 md:text-base">
              Our tools humanize every aspect of your process, backed by a dedicated support team ready to assist.
            </p>
          </div>
          <div className="flex flex-col items-stretch gap-8 lg:flex-row">
            <div className="order-last max-w-[379px] space-y-8 lg:order-first">
              <div className="flex flex-col items-center justify-center gap-10 rounded-2xl bg-additional-navy px-[42.5px] py-[50px] lg:min-h-[460px] lg:py-0">
                <p className="text-center text-[28px] font-medium leading-[120%] text-white lg:text-[40px]">
                  Integrated task to all division in the company
                </p>
                <Button
                  as={Link}
                  className="mx-auto flex h-auto w-fit bg-primary-500 px-8 py-[13px] text-lg font-medium text-white"
                  href="#"
                  variant="flat"
                  endContent={<ChevronRightIcon size={20} />}
                >
                  Try Now
                </Button>
              </div>
              <div className="hidden items-center justify-center gap-[21px] rounded-2xl bg-primary-100 px-12 py-[58px] shadow-sm lg:flex">
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.shield width={32} height={32} />
                </div>
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.stars width={32} height={32} />
                </div>
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.cursorClick width={32} height={32} />
                </div>
              </div>
            </div>
            <div className="order-first flex w-full flex-col gap-[32px] lg:order-last">
              <div className="relative flex h-full items-center gap-[21px] overflow-hidden rounded-2xl bg-primary-100 p-6 shadow-sm lg:px-[72px] lg:py-14">
                <div className="min-h-[291px] max-w-[288px] space-y-4 text-center lg:min-h-0 lg:text-start">
                  <p className="text-xl font-medium leading-[120%] text-primary-500 lg:text-[40px]">Mobile Friendly</p>
                  <p className="text-2xl text-[#546078]">
                    Access your tasks, update progress, and collaborate from any device.
                  </p>
                </div>
                <Image
                  src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722225628/taskify/assets/images/dashboard-mobile.png"
                  alt="dashboard-mobile"
                  className="absolute -bottom-[250px] mx-auto h-auto max-w-[194px] lg:-top-[250px] lg:right-[72px] lg:max-w-none"
                  quality={100}
                  width={305}
                  height={535}
                />
              </div>
              <div className="grid grid-cols-2 gap-8">
                <div className="flex flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-primary-100 p-6 shadow-sm lg:gap-12 lg:px-[46px] lg:py-[70px]">
                  <AvatarGroup>
                    <Avatar
                      className="lg:size-[60px]"
                      radius="full"
                      src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-1.png"
                    />
                    <Avatar
                      className="lg:size-[60px]"
                      radius="full"
                      src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-2.png"
                    />
                    <Avatar
                      className="lg:size-[60px]"
                      radius="full"
                      src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-3.png"
                    />
                    <Avatar
                      className="lg:size-[60px]"
                      radius="full"
                      src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/plus-ava.png"
                    />
                  </AvatarGroup>
                  <p className="text-center text-xs font-medium leading-[120%] text-primary-500 lg:text-[32px]">
                    Real-time collaboration
                  </p>
                </div>
                <div className="flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-primary-500 p-6 shadow-sm lg:gap-6 lg:px-[52px] lg:py-[44px]">
                  {/* TODO: <p className="pattern-system-2x text-[80px] leading-[120%] text-white ">2X</p> */}
                  <Image
                    src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722235294/taskify/assets/images/2x-pattern.png"
                    alt="pattern2x"
                    quality={100}
                    width={908}
                    height={384}
                    className="h-auto w-full"
                  />
                  <p className="text-center text-[8px] font-medium leading-[150%] text-white lg:text-xl">
                    Save time and build faster with apps that make teamwork easy, no matter where you&apos;re working
                    from.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SystemSection;
