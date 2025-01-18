'use client';

import { navbarItems } from '@/app/constants';
import {
  Accordion,
  AccordionItem,
  Button,
  Dropdown,
  DropdownItem,
  DropdownMenu,
  DropdownTrigger,
  Link,
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
  NavbarMenuToggle,
} from '@nextui-org/react';
import { MenuIcon } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { FC, useState } from 'react';
import BannerDesktop from './banner-desktop';
import BannerMobile from './banner-mobile';
import { Icons } from './icons';
import ArrowRightIcon from './icons/ArrowRightIcon';
import ChevronRightIcon from './icons/ChevronRightIcon';
import CloseIcon from './icons/CloseIcon';
import Logo from './logo';

interface INavbar {
  showBanner: boolean;
}

const NavbarComponent: FC<INavbar> = ({ showBanner = true }) => {
  const pathname = usePathname();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isBannerVisible, setIsBannerVisible] = useState(true);

  const handleCloseBanner = () => {
    setIsBannerVisible(false);
  };

  return (
    <>
      {isBannerVisible && showBanner && (
        <BannerDesktop onClose={handleCloseBanner} title="We are excited to announce our brand new feature," href="#" />
      )}
      <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-[19.5px]">
        <div className="container mx-auto">
          <Navbar onMenuOpenChange={setIsMenuOpen}>
            <NavbarContent>
              <NavbarBrand>
                <Link href="/">
                  <Logo />
                </Link>
              </NavbarBrand>
            </NavbarContent>
            <NavbarContent className="mx-auto hidden gap-14 sm:flex" justify="center">
              {navbarItems.map((item, index) =>
                !item.submenu ? (
                  <NavbarItem key={`${item}-${index}`}>
                    <Link
                      className={`w-full ${pathname === item.url ? 'font-bold text-primary-500' : 'text-neutral-600'} `}
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </NavbarItem>
                ) : (
                  <Dropdown key={`${item}-${index}`}>
                    <NavbarItem>
                      <DropdownTrigger>
                        <Link
                          className={`w-full ${
                            item.submenu.some((submenuItem) => pathname === submenuItem.url) || pathname === item.url
                              ? 'font-bold text-primary-500'
                              : 'text-neutral-600'
                          }`}
                          href={'#'}
                        >
                          {item.name}
                        </Link>
                      </DropdownTrigger>
                    </NavbarItem>
                    <DropdownMenu
                      aria-label="ACME features"
                      className="w-[200px]"
                      itemClasses={{
                        base: 'gap-4',
                      }}
                    >
                      {item.submenu.map((submenuItem, index) => (
                        <DropdownItem key={index}>
                          <Link
                            className={`w-full ${pathname === submenuItem.url ? 'font-bold text-primary-500' : 'text-neutral-600'} `}
                            href={submenuItem.url}
                          >
                            {submenuItem.name}
                          </Link>
                        </DropdownItem>
                      ))}
                    </DropdownMenu>
                  </Dropdown>
                ),
              )}
            </NavbarContent>
            <NavbarContent justify="end">
              <NavbarItem>
                <Button
                  as={Link}
                  className="hidden bg-primary-500 px-4 py-[9.5px] font-medium text-white md:flex"
                  href="#"
                  variant="flat"
                  endContent={<ChevronRightIcon size={20} />}
                >
                  Sign In
                </Button>
              </NavbarItem>
            </NavbarContent>
            <NavbarMenu className="h-auto space-y-10 bg-white px-0 py-6">
              {navbarItems.map((item, index) =>
                !item.submenu ? (
                  <NavbarItem key={`${item}-${index}`} className="px-6">
                    <Link
                      className={`w-full text-2xl font-medium ${pathname === item.url ? ' text-primary-500' : 'text-neutral-600'} `}
                      href={item.url}
                    >
                      {item.name}
                    </Link>
                  </NavbarItem>
                ) : (
                  <Accordion key={`${item}-${index}`} className="px-6 py-0" selectionMode="single">
                    <AccordionItem
                      className="text-2xl"
                      classNames={{
                        title: 'text-2xl font-medium',
                        content: 'text-lg',
                        trigger: 'py-0',
                      }}
                      key={index}
                      aria-label={item.name}
                      title={item.name}
                      indicator={<ArrowRightIcon height={0} fill="transparent" />}
                    >
                      <div className="rounded-md bg-primary-100 p-4">
                        {item.submenu.map((submenuItem, index) => (
                          <Link
                            key={index}
                            className={`w-full py-2 text-lg font-medium ${pathname === submenuItem.url ? ' text-primary-500' : 'text-neutral-600'} `}
                            href={submenuItem.url}
                          >
                            {submenuItem.name}
                          </Link>
                        ))}
                      </div>
                    </AccordionItem>
                  </Accordion>
                ),
              )}
              <NavbarMenuItem className="space-y-4 px-6">
                <Button
                  as={Link}
                  className="w-full bg-primary-500 px-4 py-[9.5px] font-medium text-white md:flex"
                  href="#"
                  variant="flat"
                >
                  Get Started
                </Button>
                <div className="flex items-center justify-center gap-[10px] text-primary-500">
                  <Icons.discount className="text-primary size-6" />
                  <p className="text-sm ">100% Free Demo</p>
                </div>
              </NavbarMenuItem>
              <NavbarMenuItem>
                <BannerMobile title="We are excited to announce our brand new feature," href="#" />
              </NavbarMenuItem>
            </NavbarMenu>
            <NavbarMenuToggle
              aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
              className="sm:hidden"
              icon={(isOpen) => (isOpen ? <CloseIcon size={24} /> : <MenuIcon size={24} />)}
            />
          </Navbar>
        </div>
      </div>
    </>
  );
};

export default NavbarComponent;
