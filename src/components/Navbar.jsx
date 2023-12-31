'use client';
import { Lato } from 'next/font/google';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const lato = Lato({ subsets: ['latin'], weight: ['400', '700'] });

const Navbar = () => {
  const links = [
    { title: 'Home', href: '/' },
    { title: 'Pricing', href: '/pricing' },
    { title: 'Community', href: '/community' },
    { title: 'About Us', href: '/aboutus' },
  ];

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const isLinkSelected = (href) => {
    return (
      typeof window !== 'undefined' && window.location.pathname.includes(href)
    );
  };

  return (
    <div className={lato.className}>
      <nav className="fixed w-full z-20 top-0 left-0 bg-black-90 ">
        <div className="container flex flex-wrap items-center justify-between mx-auto p-4 md:ml-14">
          <Link href="https://flowbite.com/" className="flex items-center">
            <Image
              src="/Logo.png"
              width={145}
              height={40.5}
              alt="Picture of the author"
            />
          </Link>
          <div className="flex md:order-2">
            <div className="btn-login hidden md:block">Sign Up</div>
            <button
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
              onClick={toggleMenu}
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
          </div>
          <div
            className={`items-center justify-center ${
              isMenuOpen ? 'flex' : 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
            id="navbar-sticky"
          >
            <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium  bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
              {links.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className={`block py-2 pl-3 pr-4 text-gray-900 rounded group ${
                      index === 0
                        ? 'text-white md:bg-transparent  text-xl font-normal md:p-0 md:dark:text-blue-500'
                        : `text-xl font-normal group-hover:bg-gray-500 hover:text-purple-60  hover:underline-purple-60 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 hover:underline dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700 ${
                            isLinkSelected(link.href)
                              ? 'text-xl font-normal text-purple-60 underline'
                              : ''
                          }`
                    }`}
                    aria-current={
                      isLinkSelected(link.href) ? 'page' : undefined
                    }
                  >
                    {link.title}
                  </Link>
                </li>
              ))}
              <li className="mt-3 md:hidden">
                <Link href="#" className="btn-login">
                  Sign Up
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
