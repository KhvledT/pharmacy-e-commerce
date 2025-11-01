"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import logoIcon from "@/assets/icons/FooterIcon.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ComingSoonModal from "@/components/ui/ComingSoonModal";

export default function Footer() {
  const [showModal, setShowModal] = useState(false);
  
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-[#1E63F8] text-white pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-8">
        <div className="flex items-center justify-between mb-10">
          {/* Logo Section */}
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full flex items-center justify-center">
              <Image
                src={logoIcon}
                alt="Pharmacy Logo"
                width={30}
                height={30}
              />
            </div>
            <div>
              <h2 className="text-xl font-semibold">Pharmacy</h2>
              <p className="text-sm text-gray-200">store.</p>
            </div>
          </div>

          <button
            onClick={scrollToTop}
            className="w-12 h-12 md:w-14 md:h-14 bg-white rounded-full flex items-center justify-center hover:bg-gray-100 transition-colors flex-shrink-0"
            aria-label="Scroll to top"
          >
            <FontAwesomeIcon
              icon={faArrowUp}
              className="w-5 h-5 md:w-6 md:h-6 text-blue-600"
            />
          </button>
        </div>

        <div className="border-t border-blue-400 my-6"></div>

        {/* Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Company Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">About Us</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Products</Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-white transition-colors">Services</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">Pricing</Link>
              </li>
            </ul>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Support</h3>
            <ul className="space-y-2 text-gray-100">
              <li>
                <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
              </li>
              <li>
                <Link href="/cart" className="hover:text-white transition-colors">Shopping Cart</Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-white transition-colors">Browse Products</Link>
              </li>
              <li>
                <Link href="/pricing" className="hover:text-white transition-colors">FAQ</Link>
              </li>
            </ul>
          </div>

          {/* Social Media Section */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-end">
              Follow Our Social Media
            </h3>
            <div className="flex flex-wrap gap-3 items-end justify-end">
              {[
                "Instagram",
                "Youtube",
                "Facebook",
                "LinkedIn",
                "Twitter",
                "Tik Tok",
              ].map((item) => (
                <button
                  key={item}
                  onClick={() => setShowModal(true)}
                  className="bg-[#222] hover:bg-[#333] px-4 py-2 rounded-full text-sm transition"
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="border-t border-blue-400 my-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-200 gap-2">
          <p>
            Copyright © 2023 Pharmacy Store | Design by{" "}
            <span className="text-white font-medium">TokoTema</span>
          </p>
          <div className="flex items-center gap-4">
            <button onClick={() => setShowModal(true)} className="hover:text-white transition-colors">
              Terms of Use
            </button>
            <span>|</span>
            <button onClick={() => setShowModal(true)} className="hover:text-white transition-colors">
              Privacy Policy
            </button>
          </div>
        </div>
      </div>
      <ComingSoonModal isOpen={showModal} onClose={() => setShowModal(false)} />
    </footer>
  );
}
