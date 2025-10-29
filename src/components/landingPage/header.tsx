"use client";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import headerLogo from "@/assets/icons/headerIcon.svg";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import menuIcon from "@/assets/SVG/layout/menu.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function PharmacyNavbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const menuItems = [
    { name: "Home", href: "/" },
    // in future we will add the pages here
    { name: "About Us", href: "/" },
    { name: "Products", href: "/products" },
    { name: "Services", href: "/" },
    { name: "Pricing", href: "/" },
    { name: "Contact Us", href: "/" },
  ];

  // active page
  const activePage = usePathname();
  const activePageName = menuItems.find(item => item.href === activePage)?.name;




  // ✅ detect scroll position
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) setIsScrolled(true);
      else setIsScrolled(false);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // ✅ close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [menuOpen]);

  return (
    <nav
      className={`bg-[#DEE9FF] sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? "py-2 shadow-md" : "py-6"
      } px-6`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center gap-3">
          <div className="w-14 h-14 bg-blue-600 rounded-full flex items-center justify-center">
            <Image src={headerLogo} alt="headerLogo" width={25} height={25} />
          </div>
          <div className="flex flex-col">
            <h1 className="text-xl font-bold text-[#1364FF]">Pharmacy</h1>
            <p className="text-sm text-[#BCBCBC]">store</p>
          </div>
        </div>

        {/* Desktop Links */}
        <ul className="hidden lg:flex items-center gap-8 text-gray-700">
          {menuItems.map(
            (item) => (
              <li key={item.name} className={`${activePageName === item.name ? "text-blue-600" : "text-gray-700"}`}>
                <Link href={item.href} className="hover:text-blue-600 transition-colors font-medium">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Sign Up Button (Desktop) */}
        <div className="hidden lg:block">
          <button className="bg-blue-600 text-white px-8 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center gap-3 whitespace-nowrap">
            sign up
            <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
          </button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          className="lg:hidden text-blue-700"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <Image src={menuIcon} alt="menu icon" width={24} height={24} />
        </button>
      </div>

      {/* ✅ Animated Mobile Menu Overlay */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            className="fixed inset-0 bg-black/40 backdrop-blur-sm flex justify-end z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <motion.div
              ref={menuRef}
              className="bg-[#DEE9FF] w-72 h-full shadow-xl flex flex-col p-8 gap-6"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 100, damping: 20 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                  <Image src={headerLogo} alt="headerLogo" width={22} height={22} />
                </div>
                <h1 className="text-xl font-bold text-[#1364FF]">Pharmacy</h1>
              </div>

              <ul className="flex flex-col gap-5 text-gray-700 text-lg">
                {["Home", "About Us", "Products", "Services", "Pricing", "Contact Us"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(" ", "")}`}
                        onClick={() => setMenuOpen(false)}
                        className="hover:text-blue-600 transition-colors font-medium"
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>

              <button className="mt-auto bg-blue-600 text-white px-6 py-3 rounded-full font-medium hover:bg-blue-700 transition-colors inline-flex items-center justify-center gap-3">
                sign up
                <FontAwesomeIcon icon={faArrowRight} className="w-4 h-4" />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
