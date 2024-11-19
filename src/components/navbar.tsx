// navbar.tsx
"use client";

import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import MobileNav from "@/components/mobileNav";
import siteMetadata from "@/utils/siteMetadata";
import navLinks from "@/utils/navLinks";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { ThemeSwitcher } from './theme-switcher';

interface NavProps {
  authComponent?: ReactNode;
}

const Nav = ({ authComponent }: NavProps) => {

  return (
    <header className=''>
      <nav className="w-full z-20 top-0 mt-4 start-0 border-b border-gray-200 dark:brder-gray-600 ">
        <div className="mb-2 max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-0 m-0">
       

          <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
            <button type="button" className="ml-0">
              {authComponent}
            </button>

            <MobileNav />
            <div className='md:mt-0'>
              <ThemeSwitcher />
            </div>
          </div>
          <div
            className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1"
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 ml-4 font-medium rounded-lg md:space-x-4 rtl:space-x-reverse md:flex-row md:mt-0 md:border-0">
              {navLinks
                .filter((link) => link.href !== "/")
                .map((link, index) => (
                  <li key={link.title} className="flex items-center">
                    {index > 0 && <span className="mx-2">|</span>}
                    <Link
                      href={link.href}
                      className="block py-2 px-3 rounded md:p-0 hidden sm:block"
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </div>

        </div>
      </nav>
    </header>

  );
};

export default Nav;
