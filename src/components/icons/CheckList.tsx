import { TIconsProps } from '@/types/TIcon';
import { FC } from 'react';

interface ICheckList extends TIconsProps {
  active: boolean;
}

const CheckList: FC<ICheckList> = ({ fill = '#E6E7E8', size, height, width, active }) => {
  return (
    <svg
      width={size || width || 24}
      height={size || height || 24}
      viewBox="0 0 24 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 24.5C18.6274 24.5 24 19.1274 24 12.5C24 5.87258 18.6274 0.5 12 0.5C5.37258 0.5 0 5.87258 0 12.5C0 19.1274 5.37258 24.5 12 24.5ZM17.7134 9.20071C18.1004 8.80668 18.0947 8.17354 17.7007 7.78655C17.3067 7.39956 16.6735 7.40527 16.2866 7.79929L10.125 14.0729L7.71345 11.6175C7.32646 11.2234 6.69332 11.2177 6.29929 11.6047C5.90527 11.9917 5.89956 12.6249 6.28655 13.0189L9.41155 16.2007C9.59958 16.3922 9.85666 16.5 10.125 16.5C10.3933 16.5 10.6504 16.3922 10.8384 16.2007L17.7134 9.20071Z"
        fill={active ? '#0171FF' : fill}
      />
    </svg>
  );
};

export default CheckList;
