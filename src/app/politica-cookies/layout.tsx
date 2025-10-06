/**
 * TEMPLATE GUIDE (Cookies Policy Layout)
 * - This layout is used for the Cookies Policy page of CARrental.com.
 * - It includes the SecondaryNavbar at the top and the SimpleFooter at the bottom.
 * - The main content area ({children}) renders the actual cookies policy text from page.tsx.
 *
 * HOW TO MODIFY:
 * 1. Update the metadata title/description below if the company name or policy changes.
 * 2. Replace SecondaryNavbar or SimpleFooter with different components if you want a unique layout.
 * 3. You can add banners, breadcrumbs, or side navigation elements above or below the <main> section.
 * 4. Keep the layout minimal for legal pages to maintain focus and SEO readability.
 *
 * DESIGN NOTES:
 * - Uses Tailwind CSS for structure and spacing.
 * - The layout ensures the footer always stays at the bottom due to flex-column structure.
 * - This component is specific to the /politica-cookies route but can be reused for other legal pages.
 */
import type { ReactNode } from "react";
import SecondaryNavbar from "@/app/components/SimpleNavbar";
import SimpleFooter from "@/app/components/SimpleFooter";

export const metadata = {
  title: "Cookies Policy",
  description: "How we use cookies and how you can manage your preferences.",
} as const;

export default function CookiesLayout({ children }: { children: ReactNode }) {
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
