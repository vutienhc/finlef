"use client";

import { useState } from "react";
import Link from "next/link";

const links = [
  { href: "/", label: "Trang chủ" },
  { href: "/the-tin-dung", label: "Thẻ tín dụng" },
  { href: "/vay-tien", label: "Vay tiền" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function MobileNav() {
  const [open, setOpen] = useState(false);

  return (
    <div className="lg:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="p-2 text-gray-600 hover:text-green-700"
        aria-label="Mở menu"
      >
        <span className="block w-6 h-0.5 bg-current mb-1" />
        <span className="block w-6 h-0.5 bg-current mb-1" />
        <span className="block w-6 h-0.5 bg-current" />
      </button>

      {open && (
        <div className="absolute top-full left-0 right-0 bg-white border-t border-gray-100 shadow-lg z-50">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block px-6 py-4 text-gray-700 hover:text-green-700 hover:bg-gray-50 border-b border-gray-50"
            >
              {l.label}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
