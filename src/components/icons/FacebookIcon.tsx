import { TIconsProps } from '@/types/icon';
import React, { FC } from 'react';

const FacebookIcon: FC<TIconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M21.6 0H2.4C1.07452 0 0 1.07452 0 2.4V21.6C0 22.9255 1.07452 24 2.4 24H21.6C22.9255 24 24 22.9255 24 21.6V2.4C24 1.07452 22.9255 0 21.6 0ZM12.0004 14.9645V23.9998H15.6004V14.9645H18.6759L19.1693 11.5763H15.6004V10.1284C15.6004 8.82955 15.9668 8.18804 17.2072 8.18804H19.2004V4.94776L19.1794 4.94497C18.8207 4.89751 18.0824 4.7998 16.7103 4.7998C13.788 4.7998 12.0004 6.31209 12.0004 9.75679V11.5763H8.40039V14.9645H12.0004Z"
        fill={fill}
      />
    </svg>
  );
};

export default FacebookIcon;
