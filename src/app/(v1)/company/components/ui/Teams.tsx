'use client';

import InstgramIcon from '@/components/icons/InstagramIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterBirdIcon from '@/components/icons/TwitterBirdIcon';
import { ITeamsCompany } from '@/interfaces/ICompany';
import { Image } from '@nextui-org/react';
import { FC } from 'react';
import Slider from './Slider';
import SocialMediaLinks from './SocialMediaLinks';

interface ITeams {
  data: ITeamsCompany[];
}

const Teams: FC<ITeams> = ({ data }) => {
  return (
    <>
      <div className="hidden grid-cols-1 gap-8 md:grid md:grid-cols-2 lg:grid-cols-3">
        {data.map((team, index) => (
          <div key={index}>
            <Image src={team.photo} radius="none" className="mb-6 h-[400px] w-full object-cover md:h-full" />
            <div className="mb-4 space-y-2">
              <p className="text-h3 font-medium text-neutral-600">{team.name}</p>
              <p className="text-lg text-neutral-600">{team.position}</p>
            </div>
            <p className="mb-8 text-lg text-neutral-500">{team.description}</p>
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
        ))}
      </div>
      <Slider data={data} />
    </>
  );
};

export default Teams;
