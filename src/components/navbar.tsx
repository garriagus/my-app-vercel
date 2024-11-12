// navbar.tsx
"use client";

import { useState, ReactNode } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { FiMenu } from 'react-icons/fi';
import { ThemeSwitcher } from './theme-switcher';

interface NavProps {
  authComponent?: ReactNode;
}

const Nav = ({ authComponent }: NavProps) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <header className="border-b border-gray-300 py-2">
        <div className="flex justify-between items-center xl:max-w-7xl xl:mx-auto max-w-full px-[8%] flex-wrap">
          <Link href="/">
            <Image
              src={"/file.svg"}
              alt="logo"
              width={70}
              height={55}
              className="cursor-pointer"
            />
          </Link>
          <FiMenu
            className="lg:hidden block h-6 w-6 cursor-pointer"
            onClick={() => setOpen(!open)}
          />
          <nav className={`${open ? "block" : "hidden"} lg:flex lg:items-center lg:w-auto w-full`}>
            <ul className="text-base text-gray-600 lg:flex lg:justify-between">
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/">Inicio</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/about">Sobre Mí</Link>
              </li>
              <li className="lg:px-5 py-2 hover:text-blue-500 font-semibold">
                <Link href="/proyectos">Proyectos</Link>
              </li>
            </ul>   
          </nav>
      
          {/* Aquí se renderiza el componente condicional */}
          {authComponent}
          <ThemeSwitcher />
        </div> 
      </header>
    </>
  );
};

export default Nav;
