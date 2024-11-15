'use client';

import { navbarItems } from '@/app/constants';
import {
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
        <div className="h-full w-full max-w-[full] rounded-none bg-primary-500 py-[11px] text-center text-sm text-white transition-all sm:order-first md:block">
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
              onClick={handleCloseBanner}
              className="absolute right-6 bg-transparent p-0 text-sm text-white"
              isIconOnly
            >
              <CloseIcon size={16} />
            </Button>
          </div>
        </div>
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
                          className={`w-full ${pathname === item.url ? 'font-bold text-primary-500' : 'text-neutral-600'} `}
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
            <NavbarMenu className="space-y-10 px-0 py-6">
              {navbarItems.map((item, index) => (
                <NavbarMenuItem key={`${item}-${index}`} className="px-6">
                  <Link className="w-full text-2xl" href={item.url}>
                    {item.name}
                  </Link>
                </NavbarMenuItem>
              ))}
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
                <div className="order-last flex h-full w-full max-w-[full] flex-col rounded-none bg-primary-500 py-[11px] text-center text-sm text-white transition-all ">
                  <div className="relative flex w-full flex-wrap items-center justify-center gap-[9px] px-6">
                    <div className="flex items-center gap-2">
                      <div className="rounded-full bg-white/20 px-2 py-1 text-[10px] font-bold text-white shadow-sm shadow-white/50 -shadow-x-[1px] -shadow-y-[1px]">
                        NEW
                      </div>
                      <p className="text-xs">We are excited to announce our brand new feature,</p>
                    </div>
                    <Button
                      as={Link}
                      href="#"
                      className="bg-transparent p-0 text-sm text-white"
                      variant="flat"
                      endContent={<ArrowRightIcon size={16} />}
                    >
                      Learn More
                    </Button>
                  </div>
                </div>
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
