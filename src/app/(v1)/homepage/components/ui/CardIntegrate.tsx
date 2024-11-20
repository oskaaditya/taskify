import { Image } from '@nextui-org/react';
import { FC } from 'react';

interface ICardIntegrateProps {
  img: string;
  name: string;
  description: string;
}

const CardIntegrate: FC<ICardIntegrateProps> = ({ img, name, description }) => {
  return (
    <div className="flex w-fit flex-col items-center justify-center gap-6 rounded-3xl bg-white px-12 py-8">
      <Image src={img} className="max-w-11" alt={name} />
      <div className="mx-auto max-w-[248px] space-y-2 text-center text-neutral-900">
        <p className="text-xl font-medium text-neutral-900">{name}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default CardIntegrate;
