"use client";
import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white border-b">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <Link href="/" className="text-lg font-bold text-[#071326]">Introdu Logo</Link>
        <nav className="hidden md:flex gap-8 text-sm font-medium text-[#071326]">
          <Link href="#fleet" className="hover:text-[#0a1a33] transition">Flota</Link>
          <Link href="#aboutus" className="hover:text-[#0a1a33] transition">Despre noi</Link>
          <Link href="#contact" className="hover:text-[#0a1a33] transition">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <Link href="#" className="inline-flex items-center rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition">WhatsApp</Link>
          <Link href="#" className="inline-flex items-center rounded-md bg-[#071326] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#0a1a33] transition">Rezervă acum</Link>
        </div>
      </div>
    </header>
  );
}