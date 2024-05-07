"use client";

import Image from "next/image";
import Link from "next/link";
import navContents from "../../data/navContents";
import MobileMenu from "./MobileNav";

export default function Navbar() {
  return (
    <header
      className={`fixed w-full z-50 md:bg-opacity-90 transition duration-300 bg-[#000020] ease-in-out backdrop-blur-sm shadow-3xl`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6">
        <div className="flex items-center justify-between h-16 md:h-20">
          <div className="shrink-0 mr-4">
            <Link
              href="/"
              className="flex gap-2 items-center font-bold md:text-3xl text-2xl"
            >
              <Image
                src="/images/logo.png"
                height={50}
                width={50}
                alt="IF Logo"
              />
              <h1 className="font-extrabold">InnoFusion</h1>
            </Link>
          </div>
          <nav className="max-lg:hidden">
            <ul className="flex grow justify-end flex-wrap items-center">
              {navContents.map((data) => (
                <li key={data.key}>
                  <Link
                    href={data.path}
                    className="font-medium text-gray-400 hover:text-white px-5 py-3 flex items-center transition duration-150 ease-in-out"
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
