'use client';

import React from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import { languageLists, linksFooterBottom, linksFooterTop } from '@/app/constants';
import { LinksProps } from '@/types/TLinks';
import ReactCountryFlag from 'react-country-flag';
import FacebookIcon from '@/components/icons/FacebookIcon';
import LinkedinIcon from '@/components/icons/LinkedinIcon';
import TwitterIcon from '@/components/icons/TwitterIcon';
import Logo from '@/components/logo';
import ChevronDownIcon from '@/components/icons/ChevronDownIcon';

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
        <div className="flex flex-col gap-20">
          {/* Footer Top */}
          <div className="gap- flex flex-col justify-between gap-14 md:flex-row">
            {/* Footer Top Left */}
            <div className="flex flex-col gap-[29px]">
              <Logo />
              <div className="flex items-center gap-4">
                {socialMediaLink.map((social, index) => (
                  <Link key={index} href={social.url} className="text-additional-navy">
                    {social.icon}
                  </Link>
                ))}
              </div>
            </div>
            {/* Footer Top Right */}
            <div className="grid grid-cols-2 gap-8 md:grid-cols-3 md:gap-16">
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
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="gap- flex flex-wrap items-center justify-between gap-6 md:flex-nowrap">
            <div className="order-1">
              <Dropdown placement="bottom-end">
                <DropdownTrigger>
                  <Button
                    className="flex h-auto items-center gap-2 rounded-none bg-transparent p-0"
                    endContent={<ChevronDownIcon size={14} />}
                  >
                    <ReactCountryFlag countryCode="GB" svg style={{ height: '14px' }} />
                    <p>English</p>
                  </Button>
                </DropdownTrigger>
                <DropdownMenu
                  disallowEmptySelection
                  aria-label="Merge options"
                  // selectedKeys={selectedOption}
                  selectionMode="single"
                  // onSelectionChange={(value) => setSelectedOption(new Set([value as string]))}
                  className="w-full"
                >
                  {languageLists.map((language) => (
                    <DropdownItem key={language.name.toLowerCase()}>
                      <div className="flex items-center gap-2">
                        <ReactCountryFlag countryCode={language.countryCode} svg style={{ height: '14px' }} />
                        <p>{language.name}</p>
                      </div>
                    </DropdownItem>
                  ))}
                </DropdownMenu>
              </Dropdown>
            </div>
            <div className="order-last w-full text-center md:order-2 md:w-fit">
              <p className="text-sm text-neutral-500">© Taskify Copyright {new Date().getFullYear()}</p>
            </div>
            <div className="gap order-3 flex items-center gap-8">
              {linksFooterBottom.map((link, index) => (
                <Link key={index} href={link.url} className="text-sm font-medium text-neutral-500">
                  {link.name}
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
