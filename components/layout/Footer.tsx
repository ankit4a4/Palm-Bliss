"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import logo from "@/public/logo.png";

import {
  Crown,
  MapPin,
  Phone,
  Mail,
  Instagram,
  Facebook,
  Twitter,
} from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-[#a17633] text-black pt-[10vh]">
      <div className="w-[90vw] max-w-[120vw] mx-auto px-[2vw]">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-[4vw]">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="space-y-[2vh]"
          >
            <Link href="/" className="flex items-center space-x-[1vw]">
              <Image
                src={logo}
                alt="Logo"
                className=" object-contain h-[100px] "
              />
            </Link>
            <p className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw] leading-relaxed">
              Experience luxury and tranquility in our world-class resort, where
              every moment is crafted to perfection.
            </p>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-[#f3e9cb]">
              Quick Links
            </h3>
            <ul className="space-y-[1vh]">
              {[
                { name: "About Us", href: "/about" },
                { name: "Our Legacy", href: "/about" },
                { name: "Accommodation", href: "/rooms" },
                { name: "Ayush Dining", href: "/ayush-dining" },
                { name: "Ayush Wellness", href: "/wellness" },
                { name: "Wellness Packages", href: "/wellness-packages" },
                { name: "Gallery", href: "/gallery" },
                { name: "Blogs", href: "/blogs" },
                { name: "Contact", href: "/contact" },
              ].map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-[#f3e9cb] hover:text-royal-gold transition-colors duration-300 text-[3.5vw] md:text-[1.1vw]"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-[#f3e9cb]">
              Contact Info
            </h3>
            <div className="space-y-[1.5vh]">
              <div className="flex items-center space-x-[1vw]">
                <MapPin className="h-[4vw] w-[4vw] md:text-[3vw] text-royal-gold" />
                <span className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw]">
                  Khasra No 20, Siron, Road Village Mauja, Chauki, Thano,
                  Uttarakhand 248143
                </span>
              </div>
              <div className="flex items-center space-x-[1vw]">
                <Phone className="text-[2vh] md:text-[1.7vw] text-royal-gold" />
                <div className="flex flex-col">
                  <span className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw]">
                    +91 906 888 5323 (Booking)
                  </span>
                  <span className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw]">
                    +91 94567 39672 (Manager)
                  </span>
                  <span className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw]">
                    +91 945 672 3756 (HelpLine)
                  </span>
                </div>
              </div>
              <div className="flex items-center space-x-[1vw]">
                <Mail className="h-[4vw] w-[4vw] md:text-[2vw] text-royal-gold" />
                <span className="text-[#f3e9cb] text-[3.5vw] md:text-[1.1vw]">
                  thepalmblissresort@gmail.com
                </span>
              </div>
            </div>
          </motion.div>

          {/* Social Media */}
          <motion.div
            initial={{ opacity: 0, y: 2 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            className="space-y-[2vh]"
          >
            <h3 className="text-[4.5vw] md:text-[1.5vw] font-playfair font-semibold text-[#f3e9cb]">
              Follow Us
            </h3>
            <div className="flex space-x-[2vw]">
              {[
                { icon: Instagram, href: "https://www.instagram.com/thepalmblissresort/?hl=en" },
                { icon: Facebook, href: "https://www.facebook.com/people/The-Palm-Bliss-Resort-Thano/61564917835095/#" },
                { icon: Twitter, href: "#" },
              ].map((social, index) => (
                <Link
                  key={index}
                  href={social.href}
                  className="w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] bg-yellow-900/90 rounded-full flex items-center justify-center hover:bg-[#a17633] transition-colors duration-300"
                >
                  <social.icon className="h-[4vw] w-[4vw] md:h-[1.3vw] md:w-[1.3vw] text-[#f3e9cb]" />
                </Link>
              ))}
            </div>
            <p className="text-[#f3e9cb] text-[3vw] md:text-[1vw]">
              Stay connected for exclusive offers and updates from Palm Bliss
              Resort.
            </p>
          </motion.div>
        </div>


        <div className="max-w-2xl  rounded-md py-2 mx-auto">
          <h3 className="text-xl md:text-2xl font-semibold mb-4 text-center text-[#f3e9cb]">
            Get Latest Update
          </h3>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto mb-8">
            <input
              type="email"
              placeholder="Enter email"
              className="flex-1 px-4 py-3 rounded-full text-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-yellow-300"
            />
            <button className="bg-yellow-900 text-[#f3e9cb] hover:bg-yellow-800 px-6 py-3 rounded-full font-medium transition-colors">
              Submit
            </button>
          </div>

        </div>
        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="border-t border-gray-800 mt-[6vh] pt-[3vh] text-center"
        >
          <p className="text-[#f3e9cb] font-[600] text-[3.5vw] md:text-[1vw] pb-5 md:pb-[1vw]">
            © 2025 Palm Bliss Resort. All rights reserved.
          </p>
        </motion.div>
      </div>
    </footer>
  );
};
export default Footer;
