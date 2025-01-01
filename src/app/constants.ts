import { Icons } from '@/components/icons';
import { ITeamsCompany } from '@/interfaces/ICompany';
import { IFeatures, IHightlights, IHightlightsTag } from '@/interfaces/IFeatures';
import { IntegrateCardProps } from '@/interfaces/IIntegrate';
import { FooterLinks, LinksProps } from '@/interfaces/ILinks';
import { INations } from '@/interfaces/INation';
import { IFaq, IPlan } from '@/interfaces/IPricing';
import { IProductsCardProps } from '@/interfaces/IProduct';
import { IStoriesCard } from '@/interfaces/IStories';

export const navbarItems: LinksProps[] = [
  {
    url: '/',
    name: 'Home',
    submenu: [
      {
        name: 'Home V1',
        url: '/',
      },
      {
        name: 'Home V2',
        url: '/v2',
      },
      {
        name: 'Home V3',
        url: '/v3',
      },
    ],
  },
  {
    url: '/features',
    name: 'Features',
    submenu: [
      {
        name: 'Features V1',
        url: '/features',
      },
      {
        name: 'Features V2',
        url: '/v2/features',
      },
      {
        name: 'Features V3',
        url: '/v3/features',
      },
    ],
  },
  {
    url: '/pricing',
    name: 'Pricing',
  },
  {
    url: '/company',
    name: 'Company',
    submenu: [
      {
        name: 'Company V1',
        url: '/company',
      },
      {
        name: 'Company V2',
        url: '/v2/company',
      },
    ],
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

export const productsList: IProductsCardProps[] = [
  {
    id: 1,
    title: 'Task Management',
    description:
      "Streamline Your To-Do's. Taskify’s effortlessly organizes your tasks, prioritizes them, and sets deadlines—all with a few clicks. It's like having a personal assistant who knows your schedule inside and out.",
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png',
  },
  {
    id: 2,
    title: 'Collaborate',
    description:
      'Taskify’s collaboration tools make teamwork a breeze. Share tasks, track progress, and celebrate victories with ease, ensuring everyone stays on the same page.',
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png',
  },
  {
    id: 3,
    title: 'Mobile-Friendly Design',
    description:
      "Work Anywhere, Anytime! Taskify’s is designed to be mobile-friendly, so you can manage your tasks on the go. Whether you're on your smartphone or tablet, access Taskify seamlessly from any device and stay productive wherever you are.",
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-2.png',
  },
  {
    id: 4,
    title: 'Customize Workspace',
    description:
      "With Taskify, customize your workspace to fit your workflow perfectly. Drag, drop, and personalize your tools to create a workspace that's uniquely yours.",
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-2.png',
  },
];

export const productsHomeList: IProductsCardProps[] = [
  {
    id: 1,
    title: 'Kanban',
    description:
      'Make it easy for your team to focus on tasks currently at hand. Define each stage of work to see what’s important.',
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-1.png',
  },
  {
    id: 2,
    title: 'Timeline',
    description:
      'See how work maps out over time. Manage dependent, overlapping, and unscheduled tasks and create plans.',
    image:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1722237079/taskify/assets/images/dashboard-features-2.png',
  },
];

export const highlightList: IHightlights[] = [
  {
    total: 200,
    title: 'Companies',
    description: 'using our products',
  },
  {
    total: 100,
    title: 'Active',
    description: 'Product Manager',
  },
  {
    total: 4.8,
    title: 'Rating',
    description: 'from over 500K users',
  },
];

export const highlightTagList: IHightlightsTag[] = [
  {
    Icon: Icons.collab,
    title: 'Collab',
    description: 'Collaboration Team',
  },
  {
    Icon: Icons.secure,
    title: 'Secure',
    description: 'Encrypted Data',
  },
  {
    Icon: Icons.stars2,
    title: 'Customable',
    description: 'Customizable Block',
  },
];

export const upwardImagesFeaturesV3 = [
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851368/taskify/assets/images/tugv0sh9af8xlnvizfb0.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/system-v3-img-2.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851369/taskify/assets/images/jr5mdcl4ywylnbi0sj2f.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851368/taskify/assets/images/tugv0sh9af8xlnvizfb0.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/system-v3-img-2.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851369/taskify/assets/images/jr5mdcl4ywylnbi0sj2f.webp',
];

export const downwardImagesFeaturesV3 = [
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/qy5c1gbr05qetv6cohnp.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851032/taskify/assets/images/ntz8mn66jnrnn8bj512g.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/hmqdcp4pl7sqxqqgicyt.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/qy5c1gbr05qetv6cohnp.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851032/taskify/assets/images/ntz8mn66jnrnn8bj512g.webp',
  'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731851033/taskify/assets/images/hmqdcp4pl7sqxqqgicyt.webp',
];

export const dummyLogosHome = [
  {
    src: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731987115/taskify/assets/images/nuvn3lwbhdkj16daemen.png',
  },
  {
    src: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731987115/taskify/assets/images/qodychfgibkhcrx84bvj.png',
  },
  {
    src: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731987116/taskify/assets/images/cmu6hzdgqjjuykhqwiuc.png',
  },
  {
    src: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731987116/taskify/assets/images/awj1wixpfiipeffeamrr.png',
  },
  {
    src: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1731987116/taskify/assets/images/hjzjjbddlmeonqez1d46.png',
  },
];

export const integrateLists: IntegrateCardProps[] = [
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065800/taskify/assets/images/oqozxb4ug1ijmakgdgyz.png',
    description: 'This powerful GitLab integration keeps your work in sync in both applications and website.',
  },
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065801/taskify/assets/images/nyxniidzzjjd2o8eilbr.png',
    description: 'Collaborate, manage projects, and reach new productivity peaks workflows.',
  },
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065800/taskify/assets/images/jy0g8x4dmjdbt0s7dzzy.png',
    description: 'designed to be user-friendly and allowing users to personalize the layout.',
  },
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065801/taskify/assets/images/a2nq4gm13gw2mkfyoswt.png',
    description: 'a cloud-based platform that provides a variety of tools and services for building.',
  },
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065800/taskify/assets/images/vbwx2iixtwrjmhzagjiz.png',
    description: 'Build software to meet customer needs, set your team, and keep your business in sync.',
  },
  {
    title: 'Lorem Ipsum',
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1732065801/taskify/assets/images/gl27g2qofqjb9wjczt70.png',
    description: 'Keeping your track of upcoming meetings, deadlines, and milestones.',
  },
];

export const storiesList: IStoriesCard[] = [
  {
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381438/taskify/assets/images/krbqalqegsxbdfhbeynk.svg',
    background:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381462/taskify/assets/images/mjgko901nrt5hwydgmvn.png',
    name: 'Eric Garcia',
    stories: '“Simple and seamless processing. reduces the number of third parties we work with”',
    position: 'Project Manager at Open AI',
  },
  {
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381439/taskify/assets/images/vxnza93nvx8u8xdympq1.svg',
    background:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381457/taskify/assets/images/brnoxas980yrasirmojq.png',
    name: 'Martin Young',
    stories: '“Ramp got the funding they needed to complete an acquisition in less than 48 hours”',
    position: 'General Manager at Ramp',
  },
  {
    logo: 'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381438/taskify/assets/images/gq2rnasa4ohtisuls9mp.svg',
    background:
      'https://res.cloudinary.com/diuj6zd9p/image/upload/v1733381464/taskify/assets/images/rrrutmv9abgvfysqxx0b.png',
    name: 'Vincent John',
    stories: '“Simple and seamless processing. reduces the number of third parties we work with”',
    position: 'Product Owner at Zendesk',
  },
];
