'use client';
import { containerVariants, fadeUpChildVariants } from '@/animations/variants';
import { Icons } from '@/components/icons';
import ChevronRightIcon from '@/components/icons/ChevronRightIcon';
import { useInViewAnimation } from '@/hooks/useInViewAnimation';
import { Avatar, AvatarGroup, Button } from '@nextui-org/react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import { BackgroundIntegrated } from './ui/Background';

const SystemSection = () => {
  const [ref, animationState] = useInViewAnimation(containerVariants);
  return (
    <motion.section
      ref={ref}
      variants={containerVariants}
      initial="initial"
      animate={animationState}
      whileInView="animate"
      viewport={{ once: true, amount: 0.2 }}
      className="px-5 py-20"
    >
      <div className="container mx-auto">
        <div className="space-y-14">
          <div className="mx-auto max-w-[647px] space-y-4 text-center">
            <motion.p
              variants={fadeUpChildVariants}
              className="text-sm font-medium uppercase text-primary-500 md:text-base"
            >
              SYSTEM
            </motion.p>
            <motion.h2 variants={fadeUpChildVariants} className="text-h3 font-medium md:text-h2">
              Boost Your Team&apos;s with Our All-in-One System
            </motion.h2>
            <motion.p variants={fadeUpChildVariants} className="text-sm text-neutral-500 md:px-12 md:text-base">
              Our tools humanize every aspect of your process, backed by a dedicated support team ready to assist.
            </motion.p>
          </div>
          <div className="flex flex-col items-stretch gap-8 lg:flex-row">
            <div className="order-last max-w-[379px] space-y-12 lg:order-first">
              <motion.div
                variants={fadeUpChildVariants}
                className="relative flex flex-col items-center justify-center gap-10 rounded-2xl bg-additional-navy px-[42.5px] py-[50px] lg:min-h-[460px] lg:py-0"
              >
                <motion.p
                  variants={fadeUpChildVariants}
                  className="text-center text-[28px] font-medium leading-[120%] text-white lg:text-[40px]"
                >
                  Integrated task to all division in the company
                </motion.p>
                <Button
                  as={Link}
                  className="mx-auto flex h-auto w-fit bg-primary-500 px-8 py-[13px] text-lg font-medium text-white"
                  href="#"
                  variant="flat"
                  endContent={<ChevronRightIcon size={20} />}
                >
                  Try Now
                </Button>
                <BackgroundIntegrated />
              </motion.div>
              <motion.div
                variants={fadeUpChildVariants}
                className="hidden items-center justify-center gap-[21px] rounded-2xl bg-primary-100 px-12 py-[58px] shadow-sm lg:flex"
              >
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.shield width={32} height={32} />
                </div>
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.stars width={32} height={32} />
                </div>
                <div className="flex size-[60px] items-center justify-center rounded-xl border-2 border-[#E3E8F1] bg-white p-2.5 text-primary-500">
                  <Icons.cursorClick width={32} height={32} />
                </div>
              </motion.div>
            </div>
            <div className="order-first flex w-full flex-col gap-[32px] lg:order-last">
              <motion.div
                variants={fadeUpChildVariants}
                className="relative flex h-full items-center gap-[21px] overflow-hidden rounded-2xl bg-primary-100 p-6 shadow-sm lg:px-[72px] lg:py-14"
              >
                <div className="min-h-[291px] space-y-4 text-center md:max-w-[288px] lg:min-h-0 lg:text-start">
                  <p className="text-xl font-medium leading-[120%] text-primary-500 lg:text-[40px]">Mobile Friendly</p>
                  <p className="text-2xl text-[#546078]">
                    Access your tasks, update progress, and collaborate from any device.
                  </p>
                </div>
                <Image
                  src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722225628/taskify/assets/images/dashboard-mobile.png"
                  alt="dashboard-mobile"
                  className="absolute -bottom-[200px] left-[24%] mx-auto h-auto max-w-[194px] lg:-top-[250px] lg:left-auto lg:right-[72px] lg:max-w-none"
                  quality={100}
                  width={305}
                  height={535}
                />
              </motion.div>
              <div className="grid grid-cols-2 gap-8">
                <motion.div
                  variants={fadeUpChildVariants}
                  className="flex flex-col items-center justify-center gap-5 overflow-hidden rounded-2xl bg-primary-100 p-6 shadow-sm lg:gap-12 lg:px-[46px] lg:py-[46px]"
                >
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
                </motion.div>
                <motion.div
                  variants={fadeUpChildVariants}
                  className="flex flex-col items-center justify-center gap-2.5 overflow-hidden rounded-2xl bg-primary-500 p-6 shadow-sm lg:gap-6 lg:px-[52px] lg:py-[44px]"
                >
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
                </motion.div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.section>
  );
};

export default SystemSection;
