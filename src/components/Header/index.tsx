"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import ThemeToggler from "./ThemeToggler";
import menuData from "./menuData";

const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const [sticky, setSticky] = useState(false);
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleNavbar = () => setNavbarOpen(!navbarOpen);
  const toggleSubmenu = (index: number) =>
    setOpenIndex(openIndex === index ? -1 : index);

  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setSticky(window.scrollY >= 80);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`header top-0 left-0 z-40 w-full ${sticky
        ? "fixed z-[9999] bg-white/80 shadow-md backdrop-blur-sm transition-all duration-300 dark:bg-black/80"
        : "absolute bg-transparent"
        }`}
    >
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-4 lg:px-8">
        {/* Logo */}
        <div className="flex-shrink-0 py-3">
          <Link href="/" className="block">
            <Image
              src="/images/logo/Wortholic.png"
              alt="Wortholic"
              width={60}
              height={40}
              className="w-auto dark:hidden"
            />
            <Image
              src="/images/logo/Wortholic.png"
              alt="Wortholic"
              width={60}
              height={40}
              className="hidden w-auto dark:block"
            />
          </Link>
        </div>

        {/* Mobile toggle button */}
        <button
          onClick={toggleNavbar}
          className="text-dark inline-flex items-center justify-center p-2 focus:outline-none lg:hidden dark:text-white"
        >
          <svg
            className="h-6 w-6"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
          >
            {navbarOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Navbar */}
        <nav
          className={`absolute top-full left-0 z-30 w-full lg:static lg:block lg:w-auto lg:bg-transparent lg:shadow-none ${navbarOpen ? "block bg-white shadow-md dark:bg-black" : "hidden"
            }`}
        >
          <ul className="flex flex-col gap-2 px-6 py-4 lg:flex-row lg:items-center lg:gap-6 lg:px-0 lg:py-0">
            {menuData.map((menuItem, index) => (
              <li key={menuItem.id} className="group relative">
                {menuItem.submenu ? (
                  <>
                    {/* Menu item with submenu */}
                    <div className="flex items-center">
                      {/* Desktop: Link that works on hover */}
                      {menuItem.path && (
                        <Link
                          href={menuItem.path}
                          className={`hidden lg:flex items-center py-2 text-base transition-colors duration-150 ${pathname === menuItem.path
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-700 hover:text-blue-600 dark:text-white/70 dark:hover:text-blue-500"
                            }`}
                        >
                          {menuItem.title}
                          <svg
                            className="ml-2 h-4 w-4 transform transition-transform duration-200 lg:group-hover:rotate-180"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            />
                          </svg>
                        </Link>
                      )}

                      {/* Mobile: Button that toggles dropdown */}
                      <button
                        onClick={() => toggleSubmenu(index)}
                        className={`flex lg:hidden w-full items-center py-2 text-base transition-colors duration-150 ${pathname === menuItem.path
                          ? "text-blue-600 dark:text-blue-500"
                          : "text-gray-700 hover:text-blue-600 dark:text-white/70 dark:hover:text-blue-500"
                          }`}
                      >
                        {menuItem.title}
                        <svg
                          className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                            }`}
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          />
                        </svg>
                      </button>

                      {/* If no path, show button for both mobile and desktop */}
                      {!menuItem.path && (
                        <button
                          onClick={() => toggleSubmenu(index)}
                          className="hidden lg:flex w-full items-center py-2 text-base text-gray-700 transition-colors duration-150 hover:text-blue-600 lg:w-auto dark:text-white/70 dark:hover:text-blue-500"
                        >
                          {menuItem.title}
                          <svg
                            className={`ml-2 h-4 w-4 transform transition-transform duration-200 ${openIndex === index ? "rotate-180" : ""
                              } lg:group-hover:rotate-180`}
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              clipRule="evenodd"
                              d="M5.23 7.21a.75.75 0 011.06.02L10 11.17l3.71-3.94a.75.75 0 011.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                            />
                          </svg>
                        </button>
                      )}
                    </div>

                    {/* Dropdown menu */}
                    <div
                      className={`${openIndex === index ? "block" : "hidden"
                        } mt-2 w-full lg:w-56 rounded-md bg-white p-3 shadow-md lg:absolute lg:left-0 lg:z-20 lg:mt-0 lg:hidden lg:pt-3 lg:transition-all lg:duration-200 lg:group-hover:block dark:bg-black dark:shadow-lg`}
                    >
                      {menuItem.submenu.map((submenuItem) => (
                        <Link
                          href={submenuItem.path}
                          key={submenuItem.id}
                          className={`block rounded px-3 py-2 text-sm transition-colors duration-150 ${pathname === submenuItem.path
                            ? "text-blue-600 dark:text-blue-500"
                            : "text-gray-700 hover:text-blue-600 dark:text-white/70 dark:hover:bg-white/5 dark:hover:text-blue-500"
                            }`}
                        >
                          {submenuItem.title}
                        </Link>
                      ))}
                    </div>
                  </>
                ) : (
                  /* Regular menu item without submenu */
                  <Link
                    href={menuItem.path || "/"}
                    className={`block py-2 text-base transition-colors duration-150 ${pathname === menuItem.path
                      ? "text-blue-600 dark:text-blue-500"
                      : "text-gray-700 hover:text-blue-600 dark:text-white/70 dark:hover:text-blue-500"
                      }`}
                  >
                    {menuItem.title}
                  </Link>
                )}
              </li>
            ))}

            {/* Theme toggler inside mobile menu */}
            <li className="mt-2 lg:hidden">
              <ThemeToggler />
            </li>
          </ul>
        </nav>

        {/* Right side (desktop only) */}
        <div className="hidden items-center lg:flex">
          <ThemeToggler />
        </div>
      </div>

      {/* Animated Bottom Border */}
      <div
        className={`absolute bottom-0 left-0 h-[1px] w-full bg-gradient-to-r from-transparent via-gray-300 to-transparent transition-opacity duration-300 dark:via-gray-600 ${sticky ? "opacity-100" : "opacity-0"
          }`}
      />
    </header>
  );
};

export default Header;
