"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Button from "./ui/Button";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const navLinks = [
    { href: "/how-it-works", label: "How it Works" },
    { href: "/features", label: "Features" },
    { href: "/faqs", label: "FAQs" },
    { href: "/support", label: "Support" },
  ];

  return (
    <nav className="w-full bg-[#F7F7F7] border-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-2">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 bg-[#0d4d4d] rounded-full flex items-center justify-center"></div>
            <span className="text-sm font-bold text-[#181818]">Brand Name</span>
          </Link>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#181818] hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Desktop/Common Button */}
          <div className="hidden md:block">
            <Button href="/get-started" className="px-6 py-2.5">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button (Hamburger) */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden z-50 p-2 text-[#181818] focus:outline-none flex items-center justify-center"
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-center items-center">
              <span
                className={`absolute w-full h-0.5 bg-current transition-all duration-300 transform ${
                  isOpen ? "rotate-45" : "-translate-y-2"
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-current transition-all duration-300 ${
                  isOpen ? "opacity-0 translate-x-4" : ""
                }`}
              />
              <span
                className={`absolute w-full h-0.5 bg-current transition-all duration-300 transform ${
                  isOpen ? "-rotate-45" : "translate-y-2"
                }`}
              />
            </div>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay/Drawer */}
      <div
        className={`fixed inset-0 bg-black/20 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
      />

      <div
        className={`fixed top-0 right-0 h-full w-[280px] bg-[#F7F7F7] z-40 p-6 pt-24 shadow-2xl transition-transform duration-300 ease-in-out transform md:hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-6">
          {navLinks.map((link, index) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className={`text-lg font-medium text-[#181818] hover:text-gray-900 transition-all duration-500 ease-out border-b border-gray-100 pb-4 transform ${
                isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
              }`}
              style={{ transitionDelay: isOpen ? `${index * 100}ms` : "0ms" }}
            >
              {link.label}
            </Link>
          ))}
          <div
            className={`transition-all duration-500 ease-out transform ${
              isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-8"
            }`}
            style={{
              transitionDelay: isOpen ? `${navLinks.length * 100}ms` : "0ms",
            }}
          >
            <Button
              href="/get-started"
              onClick={() => setIsOpen(false)}
              className="w-full text-center py-4 text-lg"
            >
              Get Started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}
