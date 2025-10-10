"use client";
import Link from "next/link";
import { Linkedin, Github, Facebook } from "lucide-react";
export default function Footer() {
  return (
    <div className=" py-24 px-4 md:px-6 relative">
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


          <div className="relative z-50">

            <div className="">
              <h3 className="font-semibold mb-4">Socials</h3>
            </div>
            <div className="flex gap-10">

              <a
                href="https://github.com/akatsuki0354/"
                className="text-gray-500 hover:text-black"
              >
                <div className="flex gap-1">
                  <Github size={19} /> Github
                </div>
              </a>
              <a
                href="https://www.linkedin.com/in/franco-gregorio-1ba17a277/"
                className="text-gray-500 hover:text-black"
              >
                <div className="flex gap-1">
                  <Linkedin size={19} className="" /> LinkedIn
                </div>
              </a>
              <a
                href="https://www.facebook.com/franco.0354"
                className="text-gray-500 hover:text-black"
              >
                <div className="flex gap-1 ">
                  <Facebook size={19} /> FaceBook
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
