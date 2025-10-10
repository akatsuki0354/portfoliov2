"use client";
import Link from "next/link";
import { Linkedin, Github, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <footer className=" py-24 px-4 md:px-6 relative z-50">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between">
          <div className="">
            <Link href="/" className="flex items-center">
              <h2 className="text-lg font-bold">Portfolio</h2>
            </Link>

            <p className="text-sm dark:text-gray-400 mt-3">
              © {new Date().getFullYear()} Franco Gregorio. All rights reserved.
            </p>
          </div>
          <div>
            <div>
              <h3 className="font-semibold mb-4">Socials</h3>
              <ul className="gap-10 flex justify-between flex-wrap">
                <li>
                  <a
                    href="https://github.com/akatsuki0354/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black dark:text-gray-400 gap-2 dark:hover:text-white flex cursor-pointer"
                  >
                    <Github size={18} className="mt-1" /> Github
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/franco-gregorio-1ba17a277/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-black flex dark:text-gray-400 gap-2 dark:hover:text-white cursor-pointer"
                  >
                    <Linkedin size={19} className="" /> LinkedIn
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.facebook.com/franco.0354"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 flex gap-1 hover:text-black dark:text-gray-400 dark:hover:text-white cursor-pointer"
                  >
                    <Facebook size={19} /> FaceBook
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
