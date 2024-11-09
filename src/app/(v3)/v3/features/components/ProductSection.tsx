import { Button, Image } from '@nextui-org/react';
import Link from 'next/link';

const ProductSection = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-50 px-5 py-10 lg:py-20">
      <div className="container mx-auto">
        <div className="flex flex-col items-center gap-8 lg:flex-row lg:gap-14">
          <div className="rounded-[10px] bg-primary-500 px-[12px] py-[18px] lg:rounded-2xl lg:px-[22px] lg:py-[31px]">
            <Image
              className="w-full lg:max-w-[480px] xl:max-w-[540px]"
              src="https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png"
            />
          </div>
          <div className="w-full max-w-[720px] space-y-4">
            <p className="font-medium uppercase text-primary-500">PRODUCTS</p>
            <div className="item-start flex w-full flex-col justify-between gap-4">
              <h1 className="max-w-[640px] text-[28px] font-medium md:text-h1">Task Management</h1>
              <div className="space-y-8">
                <p className="text-lg text-neutral-500 lg:max-w-[490px]">
                  Streamline Your To-Do&apos;s. Taskify’s effortlessly organizes your tasks, prioritizes them, and sets
                  deadlines—all with a few clicks. It&apos;s like having a personal assistant who knows your schedule
                  inside and out.
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

export default ProductSection;
