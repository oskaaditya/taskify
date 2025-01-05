import { IntegrateCardProps } from '@/interfaces/IIntegrate';
import Image from 'next/image';
import { FC } from 'react';

const CardIntegrate: FC<IntegrateCardProps> = ({ logo, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-6 rounded-3xl border border-neutral-300 bg-white p-6 phone:space-y-2.5 phone:rounded-[9px] phone:p-2.5">
      <div className="rounded-2xl border border-neutral-300 p-4 phone:rounded-[6px] phone:p-1.5">
        <Image quality={100} width={24} height={24} src={logo} alt={title} className="phone:size-2" />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold phone:text-[8px]">{title}</p>
        <p className="text-sm text-neutral-500 phone:text-[5px]">{description}</p>
      </div>
    </div>
  );
};

export default CardIntegrate;
