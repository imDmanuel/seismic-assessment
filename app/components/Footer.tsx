import Link from "next/link";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const footerLinks = [
    { label: "How it Works", href: "/how-it-works" },
    { label: "Features", href: "/features" },
    { label: "FAQs", href: "/faqs" },
    { label: "Contact Us", href: "/contact" },
    { label: "Track Order", href: "/track-order" },
    { label: "Terms of Service", href: "/terms" },
  ];

  return (
    <footer className="bg-[#003631]">
      <div className="max-w-7xl mx-auto px-6 flex flex-col items-center text-center pt-[72px]">
        {/* Branding */}
        <div className="flex items-center gap-3 mb-4 font-bold text-white text-lg">
          <div className="w-8 h-8 bg-white rounded-full"></div>
          <span>Brand Name</span>
        </div>

        {/* Description */}
        <p className="text-[#008F82] max-w-lg mb-12 leading-relaxed">
          Shop internationally, receive your items in Nigeria. Simply, safely,
          and transparently.
        </p>

        {/* Links Navigation */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {footerLinks.map((link) => (
            <Link
              key={link.label}
              href={link.href}
              className="px-6 py-4 border border-[#008F82] rounded-full text-[#008F82] text-sm font-medium hover:bg-[#00423c] transition-colors"
            >
              {link.label}
            </Link>
          ))}
        </div>
      </div>{" "}
      {/* Copyright */}
      <p className="text-white text-sm border-t border-[#008F82] p-6 text-center">
        © {currentYear} YourPlatformName. All rights reserved.
      </p>
    </footer>
  );
}
