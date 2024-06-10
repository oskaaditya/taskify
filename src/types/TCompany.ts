import { ReactNode } from 'react';

export type TCompanyHiglight = {
  icon: ReactNode;
  title: string;
  description: string;
};

export type TTeamsCompany = {
  name: string;
  position: string;
  description: string;
  photo: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
};
