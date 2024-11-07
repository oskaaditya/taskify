import { IHightlightsTag } from '@/interfaces/IFeatures';
import { FC } from 'react';

const HighlightTag: FC<IHightlightsTag> = ({ Icon, title }) => {
  return (
    <div className="flex items-center justify-center gap-2 rounded-xl border border-neutral-200 py-2 text-primary-500">
      {Icon && <Icon className="size-[14px] lg:size-6" />}
      <p className="text-[10px] lg:text-lg">{title}</p>
    </div>
  );
};

export default HighlightTag;
