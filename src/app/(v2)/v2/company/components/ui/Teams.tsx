'use client';

import { fadeInVariants, fadeUpChildVariants } from '@/animations/variants';
import InstgramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterBirdIcon from '@/components/icons/TwitterBirdIcon';
import { ITeamsCompany } from '@/interfaces/ICompany';
import { Image } from '@nextui-org/react';
import { motion } from 'framer-motion';
import { FC } from 'react';
import SliderV2 from './Slider';
import SocialMediaLinks from './SocialMediaLinks';
interface ITeams {
  data: ITeamsCompany[];
}

const Teams: FC<ITeams> = ({ data }) => {
  return (
    <>
      <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((team, index) => (
          <motion.div variants={fadeUpChildVariants} key={index} className="relative">
            <Image src={team.photo} radius="none" className="mb-6 min-h-[640px] w-full object-cover md:h-full" />
            <div className="absolute bottom-12 z-20 px-4">
              <div className="mb-4 space-y-2">
                <p className="text-h3 font-medium text-white">{team.name}</p>
                <p className="text-lg text-white">{team.position}</p>
              </div>
              <div className="flex items-center gap-2">
                {team.socialMedia.linkedin && (
                  <SocialMediaLinks link={team.socialMedia.linkedin} icon={<LinkedinIcon />} />
                )}
                {team.socialMedia.instagram && (
                  <SocialMediaLinks link={team.socialMedia.instagram} icon={<InstgramIcon size={20} />} />
                )}
                {team.socialMedia.twitter && (
                  <SocialMediaLinks link={team.socialMedia.twitter} icon={<TwitterBirdIcon />} />
                )}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
      <motion.div variants={fadeInVariants}>
        <SliderV2 data={data} />
      </motion.div>
    </>
  );
};

export default Teams;
