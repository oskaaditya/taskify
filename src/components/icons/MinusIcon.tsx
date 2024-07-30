import { IconsProps } from '@/interfaces/IIcon';
import { FC } from 'react';

const MinusIcon: FC<IconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M5 12H19" stroke={fill} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default MinusIcon;
