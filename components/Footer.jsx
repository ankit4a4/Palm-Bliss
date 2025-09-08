"use client";

import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaTripadvisor } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className=" bg-[#a17733e7] text-white">
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
                  Ayush Dining
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

          <div className="max-w-2xl border border-yellow-600/50 rounded-md py-2 mx-auto">
            <h3 className="text-xl md:text-2xl font-semibold mb-4">
              Get Latest Update
            </h3>

            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
              <input
                type="email"
                placeholder="Enter email"
                className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
              />
              <button className="bg-yellow-900 hover:bg-yellow-800 px-6 py-3 rounded-full font-medium transition-colors">
                Submit
              </button>
            </div>

            {/* Social Media Icons */}
            <div className="flex justify-center gap-4">
              <Link
                href="https://www.facebook.com/people/The-Palm-Bliss-Resort-Thano/61564917835095/#"
                className="w-10 h-10 bg-[#fbf7f0]/20 hover:bg-[#fbf7f0]/30 rounded-full flex items-center justify-center transition-colors"
              >
                <FaFacebook />
              </Link>

              <Link
                href="https://www.instagram.com/thepalmblissresort/?hl=en"
                className="w-10 h-10 bg-[#fbf7f0]/20 hover:bg-[#fbf7f0]/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                </svg>
              </Link>
              <Link
                href="https://www.tripadvisor.in/Hotel_Review-g19783920-d27516036-Reviews-The_Palm_Bliss_Resort-Thano_Dehradun_District_Uttarakhand.html"
                className="w-10 h-10 bg-[#fbf7f0]/20 hover:bg-[#fbf7f0]/30 rounded-full flex items-center justify-center transition-colors"
              >
               <FaTripadvisor/>
              </Link>

              <Link
                href="#"
                className="w-10 h-10 bg-[#fbf7f0]/20 hover:bg-[#fbf7f0]/30 rounded-full flex items-center justify-center transition-colors"
              >
                <svg
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69.88-.53 1.56-1.37 1.88-2.38-.83.5-1.75.85-2.72 1.05C18.37 4.5 17.26 4 16 4c-2.35 0-4.27 1.92-4.27 4.29 0 .34.04.67.11.98C8.28 9.09 5.11 7.38 3 4.79c-.37.63-.58 1.37-.58 2.15 0 1.49.75 2.81 1.91 3.56-.71 0-1.37-.2-1.95-.5v.03c0 2.08 1.48 3.82 3.44 4.21a4.22 4.22 0 0 1-1.93.07 4.28 4.28 0 0 0 4 2.98 8.521 8.521 0 0 1-5.33 1.84c-.34 0-.68-.02-1.02-.06C3.44 20.29 5.7 21 8.12 21 16 21 20.33 14.46 20.33 8.79c0-.19 0-.37-.01-.56.84-.6 1.56-1.36 2.14-2.23z" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
