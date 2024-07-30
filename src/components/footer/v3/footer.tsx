'use client';

import { linksFooterBottom, linksFooterTop } from '@/app/constants';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Logo from '@/components/logo';
import { LinksProps } from '@/interfaces/ILinks';
import { Link } from '@nextui-org/react';

const Footer = () => {
  const socialMediaLink: Array<LinksProps> = [
    {
      url: '#',
      name: 'Facebook',
      icon: <FacebookIcon />,
    },
    {
      url: '#',
      name: 'Facebook',
      icon: <LinkedinIcon />,
    },
    {
      url: '#',
      name: 'Twitter',
      icon: <TwitterIcon />,
    },
  ];

  return (
    <footer className="px-6 py-10 md:pb-12 md:pt-20">
      <div className="container mx-auto">
        <div className="flex flex-col gap-6">
          {/* Footer Top */}
          <div className="flex flex-col justify-between gap-10 border-b border-b-neutral-100 md:flex-row md:pb-[104px]">
            {/* Footer top right */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-16">
              {linksFooterTop.map((item, index) => (
                <div key={index}>
                  <p className="mb-3 font-medium text-neutral-600">{item.title}</p>
                  <div className="flex flex-col gap-2">
                    {item.links.map((link, index) => (
                      <Link key={index} href={link.url} className="text-sm text-neutral-500">
                        {link.name}
                      </Link>
                    ))}
                  </div>
                </div>
              ))}
              <div>
                <p className="mb-3 font-medium text-neutral-600">Legal</p>
                <div className="flex flex-col gap-2">
                  {linksFooterBottom.map((item, index) => (
                    <Link key={index} href={item.url} className="text-sm text-neutral-500">
                      {item.name}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Footer Top Left */}
            <div className="order-first flex max-w-[238px] flex-col gap-3 md:order-last md:max-w-[131px]">
              <p className="font-medium text-neutral-600">Get in touch</p>
              <div className="flex gap-6 md:flex-col md:gap-3">
                <p className="text-xs text-neutral-500 md:text-sm ">Menteng St, 142552, Jakarta, Indonesia.</p>
                <p className="text-xs text-neutral-500 md:text-sm ">hello@taskify.com +1 15523 124 134</p>
              </div>
            </div>

            {/* Footer Top Right */}
          </div>
          {/* Footer Bottom */}
          <div className="flex items-center justify-between gap-8 ">
            <div>
              <Logo width={107} />
            </div>
            <div className="flex items-center gap-4 ">
              {socialMediaLink.map((social, index) => (
                <Link key={index} href={social.url} className="text-neutral-300">
                  {social.icon}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
