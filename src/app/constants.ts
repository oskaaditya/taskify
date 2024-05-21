import { FooterLinks, LinksProps } from '@/types/link';
import { TNations } from '@/types/nation';

export const navbarItems: Array<LinksProps> = [
  {
    url: '/features',
    name: 'Features',
  },
  {
    url: '/pricing',
    name: 'Pricing',
  },
  {
    url: '/company',
    name: 'Company',
  },
];

export const linksFooterBottom: Array<LinksProps> = [
  {
    url: '#',
    name: 'Privacy',
  },
  {
    url: '#',
    name: 'Terms',
  },
  {
    url: '#',
    name: 'Legal',
  },
];

export const linksFooterTop: Array<FooterLinks> = [
  {
    title: 'Platform',
    links: [
      {
        url: '#',
        name: 'Changelog',
      },
      {
        url: '#',
        name: 'Customer Success',
      },
      {
        url: '#',
        name: 'Integration',
      },
    ],
  },
  {
    title: 'Resources',
    links: [
      {
        url: '#',
        name: 'Developers & API',
      },
      {
        url: '#',
        name: 'Guide',
      },
      {
        url: '#',
        name: 'Support',
      },
      {
        url: '#',
        name: 'Community',
      },
    ],
  },
  {
    title: 'Company',
    links: [
      {
        url: '#',
        name: 'About Us',
      },
      {
        url: '#',
        name: 'Career',
      },
      {
        url: '#',
        name: 'Blogs',
      },
    ],
  },
];

export const languageLists: Array<TNations> = [
  {
    name: 'English',
    countryCode: 'GB',
  },
  {
    name: 'Indonesia',
    countryCode: 'ID',
  },
  {
    name: 'Spain',
    countryCode: 'ES',
  },
];
