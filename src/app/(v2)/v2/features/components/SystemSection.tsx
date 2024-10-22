import { BackgroundIntegrated } from '@/app/(v1)/features/components/ui/Background';
import { Avatar, AvatarGroup } from '@nextui-org/react';
import Image from 'next/image';

const SystemSection = () => {
  return (
    <div className="relative overflow-hidden bg-white px-5 pt-14 md:py-[120px] md:pb-40">
      <div className="container mx-auto">
        <div className="mx-auto max-w-[550px] space-y-4 text-center">
          <p className="text-sm font-medium uppercase text-primary-500 md:text-base">SYSTEM</p>
          <h2 className="text-h3 font-medium md:text-h2">
            A system that help <br></br>all the people in team
          </h2>
          <p className="text-sm text-neutral-500 md:px-12 md:text-base">
            With tools to make every part of your process more human and a support team excited to help you.
          </p>
        </div>
        <div className="mt-14 grid grid-cols-3 gap-8">
          <div className="lg:py-72px relative z-10 col-span-2 row-span-2 flex auto-cols-fr flex-col items-center justify-start gap-10 overflow-hidden rounded-2xl bg-additional-navy px-[42.5px] py-[50px] lg:min-h-[460px]">
            <div className="min-h-[291px] space-y-4 text-center lg:min-h-0">
              <p className="text-xl font-medium leading-[120%] text-white lg:text-h2">Mobile Friendly</p>
              <p className="text-xl text-white">Access your tasks, update progress, and collaborate from any device.</p>
            </div>
            <Image
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722225628/taskify/assets/images/dashboard-mobile.png"
              alt="dashboard-mobile"
              className="absolute -bottom-[400px] z-10"
              quality={100}
              width={470}
              height={809}
            />
            <BackgroundIntegrated />
          </div>
          <div className="flex h-full auto-cols-auto flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-primary-100 p-6 shadow-sm lg:gap-12 lg:px-[46px] lg:py-[46px]">
            <AvatarGroup>
              <Avatar
                className="h-20 w-20 text-large"
                radius="full"
                src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-1.png"
              />
              <Avatar
                className="h-20 w-20 text-large"
                radius="full"
                src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-2.png"
              />
              <Avatar
                className="h-20 w-20 text-large"
                radius="full"
                src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/avatar-3.png"
              />
              <Avatar
                className="h-20 w-20 text-large"
                radius="full"
                src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722227022/taskify/assets/images/plus-ava.png"
              />
            </AvatarGroup>
            <p className="text-center text-xs font-medium leading-[120%] text-primary-500 lg:text-[32px]">
              Real-time collaboration
            </p>
          </div>
          <div className="flex auto-cols-auto flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-primary-500 p-6 shadow-sm lg:gap-6 lg:px-[52px] lg:py-[44px]">
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
              Save time and build faster with apps that make teamwork easy, no matter where you&apos;re working from.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SystemSection;
