import { IconsProps } from '@/interfaces/IIcon';
import { FC } from 'react';

const ArrowLeftIcon: FC<IconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M20.25 12H3.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M10.5 5.25L3.75 12L10.5 18.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowLeftIcon;
