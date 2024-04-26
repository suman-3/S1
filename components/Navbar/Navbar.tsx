"use client";

import Link from "next/link";
import MobileMenu from "./MobileNav";
import navContents from "../../data/navContents";
import Image from "next/image";

export default function Navbar() {
  return (
    <header
      className={`fixed w-full z-30 md:bg-opacity-90 transition duration-300 ease-in-out bg-white backdrop-blur-sm shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link href="/" className="font-bold md:text-3xl text-2xl">
              <Image src="/images/logo.png" height={50} width={50} alt="IF Logo"/>
            </Link>
          </div>
          <nav className="max-lg:hidden">
            <ul className="flex grow justify-end flex-wrap items-center">
              {navContents.map((data) => (
                <li key={data.key}>
                  <Link
                    href={data.path}
                    className="font-medium text-gray-600 hover:text-gray-900 px-5 py-3 flex items-center transition duration-150 ease-in-out"
                  >
                    {data.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <MobileMenu />
        </div>
      </div>
    </header>
  );
}
