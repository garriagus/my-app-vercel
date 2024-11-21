// navbar.tsx
"use client";

import Link from 'next/link';
import React, { ReactNode, useState } from 'react';
import navLinks from "@/utils/navLinks";
import Image from 'next/image';
import { FiMenu } from 'react-icons/fi';
import { ThemeSwitcher } from './theme-switcher';

interface NavProps {
  authComponent?: ReactNode;
}

const Nav = ({ authComponent }: NavProps) => {
  let name;
  const [open, setOpen] = useState(false)
  return (
    <>
      <header className="border-b border-gray-300 py-2"
        style={{
          backgroundImage: 'url(/dalle/dalll-e-2-removebg-preview.png)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[2%] flex-wrap">
          <Link href="/">
            <Image
              src={"/dalle/5-removebg-preview.png"}
              alt='logo'
              width={85}
              height={85}
              className='cursor-pointer'
            />
          </Link>
          <FiMenu className="lg:hidden block h-6 w-6 cursor-pointer" onClick={() => setOpen(!open)} />
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base lg:flex lg:justify-between">
              {navLinks
                .filter((link) => link.href !== "/")
                .map((link, index) => (
                  <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                    {index > 0 && <span className="mx-2">
                    </span>}
                    <Link
                      href={link.href}
                    >
                      {link.title}
                    </Link>
                  </li>
                ))}
            </ul>
          </nav>
          <div className="flex">
            {authComponent}
            <ThemeSwitcher />
          </div>
        </div>

      </header>

    </>

  )
}

export default Nav