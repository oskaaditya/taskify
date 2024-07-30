import { ReactNode } from 'react';

export interface ICompanyHiglight {
  icon: ReactNode;
  title: string;
  description: string;
}

export interface ITeamsCompany {
  name: string;
  position: string;
  description: string;
  photo: string;
  socialMedia: {
    linkedin?: string;
    instagram?: string;
    twitter?: string;
  };
}
