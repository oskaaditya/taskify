import { Image } from '@nextui-org/react';
import { FC } from 'react';

interface ICardIntegrateProps {
  img: string;
  name: string;
  description: string;
  active?: boolean;
}

const CardIntegrate: FC<ICardIntegrateProps> = ({ img, name, description, active }) => {
  return (
    <div
      className={`flex w-full flex-col items-center justify-center gap-6 rounded-3xl bg-white px-12 ${active ? 'py-8' : 'py-12'} `}
    >
      <Image src={img} className="max-w-11" alt={name} />
      <div
        className={`description-integrate mx-auto max-w-[248px] space-y-2 text-center ${active ? 'block' : 'hidden'}`}
      >
        <p className={`text-xl font-medium text-neutral-900`}>{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardIntegrate;
