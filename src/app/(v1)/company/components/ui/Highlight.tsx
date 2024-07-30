import CraftmanShipIcon from '@/components/icons/CraftmanshipIcon';
import InnovationIcon from '@/components/icons/InnovationIcon';
import UserCentricIcon from '@/components/icons/UserCentricIcon';
import { ICompanyHiglight } from '@/interfaces/ICompany';
import { Button } from '@nextui-org/react';
import Link from 'next/link';

const Highlight = () => {
  const highlightLists: Array<ICompanyHiglight> = [
    {
      icon: <CraftmanShipIcon />,
      title: 'Expert Craftmanship',
      description:
        'Taskify is meticulously crafted by seasoned professionals with years of hands-on experience in project management. Their deep understanding allows them to design features that truly address real-world needs.',
    },
    {
      icon: <UserCentricIcon />,
      title: 'User-Centric Approach',
      description:
        'The team behind Taskify is passionate about creating a seamless user experience. They prioritize user feedback and continuously iterate on the platform to make it more intuitive, efficient, and enjoyable to use.',
    },
    {
      icon: <InnovationIcon />,
      title: 'Expert Craftmanship',
      description:
        'Taskify is meticulously crafted by seasoned professionals with years of hands-on experience in project management. Their deep understanding allows them to design features that truly address real-world needs.',
    },
  ];

  return (
    <div className="grid grid-cols-1 gap-20 md:grid-cols-3 md:gap-8">
      {highlightLists.map((item, index) => {
        return (
          <div key={index} className="space-y-6 text-white">
            {item.icon}
            <div className="flex flex-col space-y-4 text-start">
              <p className="text-h3 font-medium">{item.title}</p>
              <p className="text-lg text-primary-200">{item.description}</p>
              <Button
                as={Link}
                href="#"
                className="h-auto bg-white px-4 py-[10px] text-primary-500 md:w-fit"
                variant="flat"
              >
                Learn More
              </Button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Highlight;
