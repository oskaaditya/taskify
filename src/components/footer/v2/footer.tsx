'use client';

import React from 'react';
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger, Link } from '@nextui-org/react';
import { languageLists, linksFooterBottom, linksFooterTop } from '@/app/constants';
import { LinksProps } from '@/types/link';
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
          <div className="flex flex-col justify-between gap-10 md:flex-row">
            {/* Footer Top Left */}
            <div className="order-2 hidden flex-col gap-4 md:order-1 md:flex md:max-w-[131px]">
              <p className="font-medium text-neutral-600">Get in touch</p>
              <div className="flex flex-col gap-3">
                <p className="text-sm text-neutral-500">Menteng St, 142552, Jakarta, Indonesia.</p>
                <p className="text-sm text-neutral-500">hello@taskify.com +1 15523 124 134</p>
              </div>
            </div>
            {/* Footer Top Center */}
            <div className="order-3 col-span-2 grid grid-cols-2 gap-8 md:order-2 md:grid-cols-3 md:gap-16">
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
            {/* Footer Right */}
            <div className="order-1 flex gap-12 md:order-3">
              <div className="flex max-w-[134px] flex-col gap-2 md:max-w-[162px]">
                <Logo width={105} />
                <p className="text-sm text-neutral-500">
                  © Taskify Copyright {new Date().getFullYear()} All rights reserved.
                </p>
              </div>
              <div className="flex flex-col gap-4 md:order-1 md:hidden md:max-w-[131px]">
                <p className="font-medium text-neutral-600">Get in touch</p>
                <div className="flex flex-col gap-3">
                  <p className="text-sm text-neutral-500">Menteng St, 142552, Jakarta, Indonesia.</p>
                  <p className="text-sm text-neutral-500">hello@taskify.com +1 15523 124 134</p>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="flex flex-wrap items-center justify-between gap-8 md:flex-nowrap">
            <div>
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
            <div className="text-center">
              <div className="gap flex items-center gap-8">
                {linksFooterBottom.map((link, index) => (
                  <Link key={index} href={link.url} className="text-sm font-medium text-neutral-500">
                    {link.name}
                  </Link>
                ))}
              </div>
            </div>
            <div className="flex w-full items-center justify-center gap-4 md:w-fit">
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
