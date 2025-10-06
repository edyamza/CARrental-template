/**
 * TEMPLATE GUIDE (SimpleFooter)
 * - Replace the placeholder logo text with your company name or image.
 * - Update the tagline below to describe your brand or services.
 * - Adjust colors, padding, and layout to match your theme.
 * - Replace the LinkedIn URL with your own profile or company page.
 * - Update the developer credit or remove it if unnecessary.
 */
import Link from "next/link";

export default function SimpleFooter() {
  return (
    <>
      {/* FOOTER: Contains brand logo, short description, and bottom copyright bar */}
      <footer className="w-full mt-auto bg-white border-t border-black/10">
      <div className="mx-auto max-w-7xl px-4 py-8 flex flex-col sm:flex-row items-center justify-between text-center sm:text-left">
        {/* LOGO / BRAND: Replace text with your logo image or company name */}
        <div className="text-2xl font-semibold text-black">Insert Logo</div>
        {/* TAGLINE: Edit this line to summarize your business or slogan */}
        <p className="text-black/70 text-sm mt-2 sm:mt-0">
          CARrental.com – with us, mobility has become simple, fast, and accessible.
        </p>
      </div>
      {/* BOTTOM BAR: Copyright and developer credit section */}
      <div className="bg-gray-100 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-xs">
          <div className="text-black/60">
            Copyright © {new Date().getFullYear()} CARrental.com | All rights reserved.
            {/* TIP: You can include company registration info or contact email here */}
          </div>
          <div className="mt-2 sm:mt-0 flex items-center gap-2">
            <Link
              href="https://www.linkedin.com/in/eduard-amza-030aab20b/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black/80 font-semibold underline underline-offset-2 decoration-[#071326] hover:text-[#071326] transition-colors"
            >
              Developed by EAA
            </Link>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}