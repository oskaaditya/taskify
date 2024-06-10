import { TTeamsCompany } from '@/types/TCompany';
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
export const faqCompanyLists: Array<TFaq> = [
  {
    title: 'What are the key features of your product?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'How can I sign up for your service',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: "Can I customize the software to fit my company's specific needs?",
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'Is technical support available, and how can I access it',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'Do you offer a free trial period?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'How secure is my data on your platform?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'Can I integrate your product with other tools we already use?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'What training or resources do you provide for new users?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'How can I upgrade or downgrade my subscription plan?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
];

export const teamsList: Array<TTeamsCompany> = [
  {
    name: 'Rudy Bosman',
    position: 'Founder of Taskify',
    description:
      "With over two decades of experience in the tech industry, Rudy is a visionary leader known for his strategic foresight and business acumen. As the CEO of our company, he provides guidance and direction, ensuring that our products align with the company's overall vision and goals",
    photo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1717340654/taskify/assets/images/rudy-bosman.png',
    socialMedia: {
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://www.x.com',
    },
  },
  {
    name: 'Jill Valentine',
    position: 'Product Manager',
    description:
      'Jill is a dynamic product manager with a keen eye for detail and a knack for understanding user needs. With a background in software development and project management, Jill brings a wealth of experience to the team. From conceptualization to launch, oversees every aspect of the product lifecycle.',
    photo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1717340645/taskify/assets/images/jill-valentine.png',
    socialMedia: {
      linkedin: 'https://www.linkedin.com',
      instagram: 'https://www.instagram.com',
      twitter: 'https://www.x.com',
    },
  },
  {
    name: 'Michael Chang',
    position: 'Lead Developer',
    description:
      'Michael is a seasoned software engineer with a passion for building innovative solutions that make a difference. With a degree in computer science and years of experience in software development, Michael leads our team of developers with expertise and dedication.',
    photo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1717340658/taskify/assets/images/michael-chang.png',
    socialMedia: {
      linkedin: 'https://www.linkedin.com',
      twitter: 'https://www.x.com',
    },
  },
];
