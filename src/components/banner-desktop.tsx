import { BannerProps } from '@/interfaces/IBanner';
import { Button } from '@nextui-org/react';
import { ArrowRightIcon } from 'lucide-react';
import Link from 'next/link';
import { FC } from 'react';
import CloseIcon from './icons/CloseIcon';

const BannerDesktop: FC<BannerProps> = ({ onClose, title, href }) => {
  return (
    <div className="hidden h-full w-full max-w-[full] rounded-none bg-primary-500 py-[11px] text-center text-sm text-white transition-all sm:order-first md:block">
      <div className="relative flex w-full items-center justify-center gap-[9px]">
        <div className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white shadow-sm shadow-white/50 -shadow-x-[1px] -shadow-y-[1px]">
          NEW
        </div>
        <p>{title}</p>
        <Button
          as={Link}
          href={href}
          className="bg-transparent p-0 text-sm text-white"
          variant="flat"
          endContent={<ArrowRightIcon size={16} />}
        >
          Learn More
        </Button>
        <Button onClick={onClose} className="absolute right-6 bg-transparent p-0 text-sm text-white" isIconOnly>
          <CloseIcon size={16} />
        </Button>
      </div>
    </div>
  );
};

export default BannerDesktop;
