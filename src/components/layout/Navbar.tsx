"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { href: "/services", label: "Services" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/about", label: "À propos" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link href="/" className="text-lg font-medium text-gray-900">
          Zaro<span className="text-[#1D9E75]">Tech</span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm text-gray-500 hover:text-gray-900 transition-colors">
              {l.label}
            </Link>
          ))}
        </div>

        <div className="hidden md:flex gap-2">
          <span className="text-xs bg-[#E1F5EE] text-[#0F6E56] px-3 py-1 rounded-full font-medium">
            📍 Bruxelles
          </span>
          <span className="text-xs bg-[#E1F5EE] text-[#0F6E56] px-3 py-1 rounded-full font-medium">
            📍 Yaoundé
          </span>
        </div>

        <button className="md:hidden" onClick={() => setOpen(!open)}>
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="md:hidden border-t border-gray-100 px-6 py-4 flex flex-col gap-4">
          {links.map((l) => (
            <Link key={l.href} href={l.href}
              className="text-sm text-gray-600"
              onClick={() => setOpen(false)}>
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}