"use client";

import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="w-full bg-[#F7F7F7] border-white border-b sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Brand Logo */}
          <Link
            href="/"
            className="flex items-center gap-3 hover:opacity-80 transition-opacity"
          >
            <div className="w-6 h-6 bg-[#0d4d4d] rounded-full flex items-center justify-center"></div>
            <span className="text-sm font-bold text-[#181818]">Brand Name</span>
          </Link>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center gap-12">
            {[
              { href: "/how-it-works", label: "How it Works" },
              { href: "/features", label: "Features" },
              { href: "/faqs", label: "FAQs" },
              { href: "/support", label: "Support" },
            ].map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm text-[#181818] hover:text-gray-900 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Get Started Button */}
          <Link
            href="/get-started"
            className="px-6 py-2.5 bg-[#003631] text-white text-sm font-bold rounded-full hover:bg-[#0a3d3d] transition-colors"
          >
            Get Started
          </Link>
        </div>
      </div>
    </nav>
  );
}
