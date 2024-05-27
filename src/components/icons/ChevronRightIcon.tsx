import { TIconsProps } from '@/types/TIcon';
import React, { FC } from 'react';

const ChevronRightIcon: FC<TIconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M9 18L15 12L9 6" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ChevronRightIcon;
