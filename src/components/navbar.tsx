'use client';

import {
  Button,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import React, { useState } from 'react';
import Logo from './logo';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import CloseIcon from './icons/CloseIcon';
import { navbarItems } from '@/app/constants';

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && (
        <div className="hidden h-full w-full max-w-[full] rounded-none bg-primary-500 py-[11px] text-center text-sm text-white transition-all md:block">
          <div className="relative flex w-full items-center justify-center gap-[9px]">
            <div className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white shadow-sm shadow-white/50 -shadow-x-[1px] -shadow-y-[1px]">
              NEW
            </div>
            <p>We are excited to announce our brand new feature,</p>
            <Button
              as={Link}
              href="#"
              className="bg-transparent p-0 text-sm text-white"
              variant="flat"
              endContent={<ArrowRightIcon size={16} />}
            >
              Learn More
            </Button>
            <Button
              as={Link}
              href="#"
              onClick={handleCloseBanner}
              className="absolute right-6 bg-transparent p-0 text-sm text-white"
              variant="flat"
            >
              <CloseIcon size={16} />
            </Button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between px-6 py-[19.5px]">
        <div className="container mx-auto">
          <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Logo />
                </Link>
              </NavbarBrand>
            </NavbarContent>

            <NavbarContent className="hidden gap-14 sm:flex" justify="center">
              {navbarItems.map((item, index) => (
                <NavbarItem key={`${item}-${index}`}>
                  <Link className="w-full" href={item.url}>
                    {item.name}
                  </Link>
                </NavbarItem>
              ))}
              <NavbarItem>
                <Button
                  as={Link}
                  className="block bg-primary-500 px-4 py-[9.5px] font-medium text-white md:hidden"
                  href="#"
                  variant="flat"
                  endContent={<ChevronRightIcon size={20} />}
                >
                  Sign In
                </Button>
              </NavbarItem>
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button
                  as={Link}
                  className="hidden bg-primary-500 px-4 py-[9.5px] font-medium text-white md:block"
                  href="#"
                  variant="flat"
                  endContent={<ChevronRightIcon size={20} />}
                >
                  Sign In
                </Button>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu>
              {navbarItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`}>
                  <Link className="w-full" href={item.url}>
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
            </NavbarMenu>
            <NavbarMenuToggle aria-label={isMenuOpen ? 'Close menu' : 'Open menu'} className="sm:hidden" />
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
