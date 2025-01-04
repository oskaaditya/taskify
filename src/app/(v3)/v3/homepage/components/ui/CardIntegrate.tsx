import { IntegrateCardProps } from '@/interfaces/IIntegrate';
import Image from 'next/image';
import { FC } from 'react';

const CardIntegrate: FC<IntegrateCardProps> = ({ logo, title, description }) => {
  return (
    <div className="flex flex-col items-start space-y-6 rounded-3xl border border-neutral-300 bg-white p-6">
      <div className="rounded-2xl border border-neutral-300 p-4">
        <Image quality={100} width={24} height={24} src={logo} alt={title} />
      </div>
      <div className="space-y-2">
        <p className="text-xl font-bold">{title}</p>
        <p className="text-sm text-neutral-500">{description}</p>
      </div>
    </div>
  );
};

export default CardIntegrate;
