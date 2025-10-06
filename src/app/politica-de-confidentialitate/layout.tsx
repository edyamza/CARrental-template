/**
 * TEMPLATE GUIDE (Privacy Policy Layout)
 * - This layout is used for the Privacy Policy page of CARrental.com.
 * - It includes the SecondaryNavbar at the top and the SimpleFooter at the bottom.
 * - The main content area ({children}) renders the actual privacy policy text from page.tsx.
 *
 * HOW TO MODIFY:
 * 1. Update the metadata title/description below if your company name or privacy details change.
 * 2. Replace SecondaryNavbar or SimpleFooter with custom components if you want a unique design.
 * 3. You can add additional informational banners or links above or below the <main> section.
 * 4. Keep the layout clean and minimal for readability and compliance.
 *
 * DESIGN NOTES:
 * - Uses Tailwind CSS for layout and spacing.
 * - Footer remains fixed at the bottom via flex column layout.
 * - This structure can be reused for other legal pages like Terms or Cookies.
 */
import type { ReactNode } from "react";
import SecondaryNavbar from "@/app/components/SimpleNavbar";
import SimpleFooter from "@/app/components/SimpleFooter";

export const metadata = {
  title: "Privacy Policy",
  description: "Learn how we collect, use, and protect your personal data at CARrental.com.",
} as const;

export default function PrivacyLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <SecondaryNavbar />
      <div className="min-h-screen flex flex-col">
        <main className="flex-1">{children}</main>
        <SimpleFooter />
      </div>
    </>
  );
}