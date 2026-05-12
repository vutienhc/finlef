import Link from "next/link";
import Image from "next/image";
import MobileNav from "./MobileNav";

const navLinks = [
  // { href: "/the-tin-dung", label: "Thẻ tín dụng" },
  // { href: "/vay-tien", label: "Vay tiền" },
  { href: "/gioi-thieu", label: "Giới thiệu" },
  { href: "/lien-he", label: "Liên hệ" },
];

export default function Header() {
  return (
    <header className="bg-white border-b border-gray-100 sticky top-0 z-40 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between relative">
        <Link href="/" className="flex items-center gap-2 shrink-0">
          <Image src="/logo.png" alt="FinLef logo" width={32} height={32} priority />
          <span className="text-3xl font-bold text-gray-900">
            fin<span className="text-[#00543D]">lef</span>
          </span>
        </Link>

        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-gray-600 hover:text-[#00543D] text-sm font-medium transition-colors"
            >
              {l.label}
            </Link>
          ))}
        </nav>

        <MobileNav />
      </div>
    </header>
  );
}
