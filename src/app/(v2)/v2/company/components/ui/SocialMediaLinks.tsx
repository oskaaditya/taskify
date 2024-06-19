import { Button } from '@nextui-org/react';
import Link from 'next/link';
import React, { FC } from 'react';

interface ISocialMediaLinks {
  icon: React.ReactNode;
  link: string;
}

const SocialMediaLinks: FC<ISocialMediaLinks> = ({ icon, link }) => {
  return (
    <Button
      as={Link}
      href={link}
      isIconOnly
      className="border border-neutral-200 bg-neutral-100 p-2.5 text-primary-500"
      radius="full"
    >
      {icon}
    </Button>
  );
};

export default SocialMediaLinks;
