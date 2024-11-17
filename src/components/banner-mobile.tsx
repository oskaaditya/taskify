import { BannerProps } from '@/interfaces/IBanner';
import { Button } from '@nextui-org/react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';

const BannerMobile: FC<BannerProps> = ({ title, href }) => {
  return (
    <div className="order-last flex h-full w-full max-w-[full] flex-col rounded-none bg-primary-500 py-[11px] text-center text-sm text-white transition-all ">
      <div className="relative flex w-full flex-wrap items-center justify-center gap-[9px] px-6">
        <div className="flex items-center gap-2">
          <div className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white shadow-sm shadow-white/50 -shadow-x-[1px] -shadow-y-[1px]">
            NEW
          </div>
          <p className="text-xs">{title}</p>
        </div>
        <Button
          as={Link}
          href={href}
          className="bg-transparent p-0 text-sm text-white"
          variant="flat"
          endContent={<ArrowRightIcon size={16} />}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
};

export default BannerMobile;
