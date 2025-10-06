import Link from "next/link";

/**
 * TEMPLATE GUIDE (Navbar)
 * - Replace the logo text with your company name or image (can use <Image> component from next/image).
 * - Update navigation links (href values) to match your website sections or routes.
 * - Adjust colors and spacing to fit your branding.
 * - Update button links for WhatsApp and booking page.
 */

export default function Navbar() {
  return (
    <>
      {/* NAVBAR: Main site navigation with logo, links, and action buttons */}
      <header className="sticky top-0 z-50 bg-white border-b">
        {/* LOGO: Replace text with your brand name or logo image */}
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
          <Link href="/" className="text-lg font-bold text-[#071326]">Insert Logo</Link>
          {/* NAV LINKS: Edit or add navigation items (e.g., Fleet, About, Contact) */}
          <nav className="hidden md:flex gap-8 text-sm font-medium text-[#071326]">
            <Link href="#fleet" className="hover:text-[#0a1a33] transition">Fleet</Link>
            <Link href="#aboutus" className="hover:text-[#0a1a33] transition">About us</Link>
            <Link href="#contact" className="hover:text-[#0a1a33] transition">Contact</Link>
          </nav>
          {/* ACTION BUTTONS: WhatsApp and Booking. Update href or remove as needed */}
          <div className="flex items-center gap-3">
            <Link href="#" className="inline-flex items-center rounded-md bg-green-600 px-5 py-2 text-sm font-semibold text-white shadow hover:bg-green-700 transition">WhatsApp</Link>
            <Link href="#" className="inline-flex items-center rounded-md bg-[#071326] px-5 py-2 text-sm font-semibold text-white shadow hover:bg-[#0a1a33] transition">Book now</Link>
          </div>
        </div>
      </header>
    </>
  );
}