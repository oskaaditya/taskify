import { TIconsProps } from '@/types/TIcon';
import React, { FC } from 'react';

const CloseIcon: FC<TIconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M18 6L6 18" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M6 6L18 18" stroke={fill} strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
};

export default CloseIcon;
