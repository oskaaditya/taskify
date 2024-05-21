import { TIconsProps } from '@/types/icon';
import React, { FC } from 'react';

const ArrowRightIcon: FC<TIconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M3.75 12H20.25" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
      <path d="M13.5 5.25L20.25 12L13.5 18.75" stroke={fill} strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default ArrowRightIcon;
