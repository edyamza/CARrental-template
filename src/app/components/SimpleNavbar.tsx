
import Link from "next/link";

/**
 * TEMPLATE GUIDE (SimpleNavbar)
 * - Use this simplified navbar for minimal pages (like checkout, contact forms, or landing pages).
 * - Replace the logo text with your company name or image (can use <Image> from next/image).
 * - You can add navigation links or buttons if needed.
 * - Adjust colors, borders, and padding to match your theme.
 */

export default function SecondaryNavbar() {
  return (
    <>
      {/* SIMPLE NAVBAR: Minimal top bar containing only the logo */}
      <header className="sticky top-0 z-40 bg-white border-b">
        <div className="mx-auto max-w-7xl px-4 py-3 flex items-center">
          {/* LOGO: Replace text with your brand name or add <Image> component */}
          <Link href="/" className="text-lg font-bold text-[#071326]">
            Insert Logo
          </Link>
        </div>
      </header>
    </>
  );
}
