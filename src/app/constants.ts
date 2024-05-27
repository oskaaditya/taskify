import { FooterLinks, LinksProps } from '@/types/TLinks';
import { TNations } from '@/types/TNation';
import { TFaq, TPlan } from '@/types/TPricing';

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

export const pricingPlanList: Array<TPlan> = [
  {
    id: 1,
    name: 'Startup Plan',
    price: '$999',
    description: 'Good start for a new starter startup and small business',
    features: [
      {
        name: 'Basic  Customization',
      },
      {
        name: 'Integrations Support',
      },
      {
        name: 'Task Tracking',
      },
      {
        name: 'Standard user permissions',
      },
      {
        name: '30 Team Collaborations',
      },
    ],
  },
  {
    id: 2,
    name: 'Full-stack plan',
    price: '$4,999',
    description: 'Good start for a new starter startup and small business',
    features: [
      {
        name: 'Workspace Customization',
      },
      {
        name: 'Integrations Support',
      },
      {
        name: 'Task Tracking',
      },
      {
        name: 'Role-Based Access',
      },
      {
        name: '50 Team Collaborations',
      },
    ],
  },
  {
    id: 3,
    name: 'Enterprise',
    price: 'Custom',
    description: 'For big company or organizations with growing completely',
    features: [
      {
        name: 'Workspace Customization',
      },
      {
        name: 'Advance Integrations Support',
      },
      {
        name: 'Task Tracking',
      },
      {
        name: 'Flexible Role-Based Access',
      },
      {
        name: 'Unlimited Team Collaborations',
      },
    ],
  },
];

export const faqPricingLists: Array<TFaq> = [
  {
    title: "Can I customize my workspace according to my team's specific needs?",
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'Does your platform offer API access for integration with other tools?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'Does your platform provide comprehensive task tracking capabilities?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'Does your platform support role-based access control?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'What payment methods do you accept for subscription plans?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'What kind of customer support is available for users?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'How do you ensure the security and privacy of our data on your platform?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'Can I upgrade or downgrade my subscription plan at any time?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
  {
    title: 'Is there a limit to the number of team members who can collaborate on the platform?',
    description:
      'Absolutely! Our platform lets you tailor your workspace to fit your team perfectly. From organizing tasks to setting up project boards, you have the flexibility to create an environment that suits your workflow like a glove.',
  },
];
