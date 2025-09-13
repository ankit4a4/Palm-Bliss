"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#a17733e7] text-[#f3e9cb]">
      {/* Newsletter Section */}
      <div className="py-16 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8">
            <Image
              src="/logo.png" // Replace with your actual logo path
              alt="logo"
              width={200}
              height={200}
              className="mx-auto mb-4"
            />
          </div>

          <nav className="mb-12">
            <ul className="flex flex-wrap justify-center gap-8 text-sm md:text-base">
              <li>
                <Link
                  href="/accommodation"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Accommodation
                </Link>
              </li>
              <li>
                <Link
                  href="/ayush-dining"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Ayush bhoj (Dinning)
                </Link>
              </li>
              <li>
                <Link
                  href="/wellness-packages"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Wellness Packages
                </Link>
              </li>
              <li>
                <Link
                  href="/gallery"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Gallery
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Contact Us
                </Link>
              </li>
              {/* <li>
                <Link
                  href="/blog"
                  className="hover:text-yellow-200 transition-colors"
                >
                  Blog
                </Link>
              </li> */}
            </ul>
          </nav>

         
        </div>
      </div>
    </footer>
  );
}
