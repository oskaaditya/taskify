import { IconsProps } from '@/interfaces/IIcon';
import { FC } from 'react';

const UserCentricIcon: FC<IconsProps> = ({ fill = 'currentColor', size, height, width }) => {
  return (
    <svg
      width={size || width || 48}
      height={size || height || 48}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M41.8463 14.2401C41.8463 11.7801 39.9663 9.06012 37.6663 8.20012L27.6863 4.46012C26.0263 3.84012 23.3063 3.84012 21.6463 4.46012L11.6663 8.22012C9.36633 9.08012 7.48633 11.8001 7.48633 14.2401V29.1001C7.48633 31.4601 9.04633 34.5601 10.9463 35.9801L19.5463 42.4001C22.3663 44.5201 27.0063 44.5201 29.8263 42.4001L38.4263 35.9801C40.3263 34.5601 41.8863 31.4601 41.8863 29.1001V22.0601"
        stroke={fill}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default UserCentricIcon;
