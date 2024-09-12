import { ITeamsCompany } from '@/interfaces/ICompany';
import { IFeatures } from '@/interfaces/IFeatures';
import { FooterLinks, LinksProps } from '@/interfaces/ILinks';
import { INations } from '@/interfaces/INation';
import { IFaq, IPlan } from '@/interfaces/IPricing';

export const navbarItems: LinksProps[] = [
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

export const linksFooterBottom: LinksProps[] = [
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

export const linksFooterTop: FooterLinks[] = [
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

export const languageLists: INations[] = [
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

export const pricingPlanList: IPlan[] = [
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

export const faqPricingLists: IFaq[] = [
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
export const faqCompanyLists: IFaq[] = [
  {
    title: 'What are the key features of your product?',
    description:
      'Our product boasts a range of key features designed to streamline task management, enhance collaboration, and boost productivity. Some highlights include intuitive task organization, real-time collaboration tools, customizable workflows, deadline reminders, and seamless integration capabilities.',
  },
  {
    title: 'How can I sign up for your service?',
    description:
      'Signing up is easy! Just click the "Get Started" button on our website, choose a plan that suits your needs, and follow the simple registration process.',
  },
  {
    title: "Can I customize the software to fit my company's specific needs?",
    description:
      "Absolutely! Our software is highly customizable, allowing you to tailor workflows, tasks, and tools to perfectly match your team's unique processes.",
  },
  {
    title: 'Is technical support available, and how can I access it',
    description:
      'Yes, we offer comprehensive technical support. You can reach our support team 24/7 via chat, email, or phone. We’re here to help with any issues or questions you may have.',
  },
  {
    title: 'Do you offer a free trial period?',
    description:
      'Yes, we offer a 14-day free trial so you can explore all the features and see how our product fits your needs before committing.',
  },
  {
    title: 'How secure is my data on your platform?',
    description:
      'OYour data security is our top priority. We use industry-leading encryption and security protocols to ensure that your information is always protected.',
  },
  {
    title: 'Can I integrate your product with other tools we already use?',
    description:
      'Yes, our product seamlessly integrates with a wide range of popular tools, including Slack, Trello, and Google Workspace. This ensures a smooth workflow across all your platforms.',
  },
  {
    title: 'What training or resources do you provide for new users?',
    description:
      'We offer a variety of resources to help you get started, including onboarding guides, video tutorials, and webinars. Our support team is also available to provide personalized assistance.',
  },
  {
    title: 'How can I upgrade or downgrade my subscription plan?',
    description:
      'Upgrading or downgrading your subscription is simple. Just log in to your account, go to the billing section, and select the plan that best fits your current needs.',
  },
];

export const teamsList: ITeamsCompany[] = [
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

export const featuresList: IFeatures[] = [
  {
    id: 1,
    title: 'Effortless Task Juggling',
    description:
      "Streamline Your To-Do's. Taskify’s effortlessly organizes your tasks, prioritizes them, and sets deadlines—all with a few clicks. It's like having a personal assistant who knows your schedule inside and out.",
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png',
  },
  {
    id: 2,
    title: 'Collaborate Like Never Before',
    description:
      'Taskify’s collaboration tools make teamwork a breeze. Share tasks, track progress, and celebrate victories with ease, ensuring everyone stays on the same page.',
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png',
  },
  {
    id: 3,
    title: 'Customize Your Workspace',
    description:
      "With Taskify, customize your workspace to fit your workflow perfectly. Drag, drop, and personalize your tools to create a workspace that's uniquely yours.",
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-2.png',
  },
];
