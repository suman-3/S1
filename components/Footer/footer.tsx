import { Facebook, Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-4 sm:px-6">
      <center className="mb-5">
        <div className="shrink-0 mb-2">
          <Link href="/" className="font-bold text-2xl">
            InnoFusion 1.0
          </Link>
        </div>
        <div className="md:items-center py-4 md:py-4 border-t border-black">
          <ul className="flex mb-4 py-0 justify-center">
            <li>
              <a
                href="https://www.facebook.com/coderpalash"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Facebook"
              >
                <Facebook />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.instagram.com/coderpalash"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Instagram"
              >
                <Instagram />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.x.com/coderpalash"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Twitter"
              >
                <Twitter />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.linkedin.com/in/coderpalash"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Linkedin"
              >
                <Linkedin />
              </a>
            </li>
            <li className="ml-4">
              <a
                href="https://www.github.com/palashcoder"
                target="_blank"
                className="text-gray-600 hover:text-gray-900 bg-white hover:bg-white-100 rounded-full shadow transition duration-150 ease-in-out"
                aria-label="Github"
              >
                <Github />
              </a>
            </li>
          </ul>
          <div className="text-sm text-gray-600">
            &copy; IEM Kolkata under University of Engineering and Management.
            All rights reserved.
          </div>
        </div>
      </center>
    </footer>
  );
}
