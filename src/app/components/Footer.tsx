import Link from "next/link";
import Image from "next/image";

/**
 * TEMPLATE GUIDE (Footer)
 * - Update the logo text or replace with an <Image> component.
 * - Edit navigation links under “Explore” and “Useful pages” to match your site sections.
 * - Replace placeholder contact info with your company details.
 * - Adjust copyright and developer credit as needed.
 */

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4 text-sm">
        {/* LOGO / TAGLINE: Replace text with your logo image or company name */}
        <div>
          <div className="text-2xl font-semibold text-black">Insert Logo</div>
        </div>

        {/* NAVIGATION: Main site sections. Adjust anchor links or use Next.js routes. */}
        <div>
          <h4 className="font-semibold text-black">Explore</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li><Link href="#fleet" className="hover:text-gray-700">Fleet</Link></li>
            <li><Link href="#aboutus" className="hover:text-gray-700">About us</Link></li>
            <li><Link href="#contact" className="hover:text-gray-700">Contact</Link></li>
            <li><Link href="#location" className="hover:text-gray-700">Locations</Link></li>
          </ul>
        </div>

        {/* LEGAL / HELPER PAGES: Update links for Privacy, Cookies, and Terms pages */}
        <div>
          <h4 className="font-semibold text-black">Useful pages</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li><Link href="/politica-de-confidentialitate" className="hover:text-gray-700">Privacy Policy</Link></li>
            <li><Link href="/politica-cookies" className="hover:text-gray-700">Cookies Policy</Link></li>
            <li><Link href="/termeni-conditii" className="hover:text-gray-700">Terms &amp; Conditions</Link></li>
          </ul>
        </div>

        {/* CONTACT INFO: Replace placeholders with your business contact data */}
        <div>
          <h4 className="font-semibold text-black">Contact details</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li>📞 <Link href="#" className="hover:text-gray-700">Enter phone number</Link></li>
            <li>✉️ <Link href="#" className="hover:text-gray-700">Enter email</Link></li>
            <li>📍 Enter address</li>
          </ul>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR: Copyright + developer credit. Customize freely. */}
      <div className="bg-gray-100 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-2 flex flex-col sm:flex-row items-center justify-between text-xs">
          <div className="text-black/60">
            Copyright © {new Date().getFullYear()} CARrental | All rights reserved.
            {/* TIP: You can include your company name or registration info here */}
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
  );
}