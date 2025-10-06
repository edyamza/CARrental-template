/**
 * TEMPLATE GUIDE (Terms & Conditions Layout)
 * - This layout is used for the Terms & Conditions page of CARrental.com.
 * - It includes the SecondaryNavbar at the top and the SimpleFooter at the bottom.
 * - The main content area ({children}) displays the full legal text from page.tsx.
 *
 * HOW TO MODIFY:
 * 1. Update the metadata title/description below to reflect your company’s terms and policies.
 * 2. Replace SecondaryNavbar or SimpleFooter if you want a unique design for this page.
 * 3. You can add banners, breadcrumbs, or navigation aids above or below the <main> section.
 * 4. Keep the layout simple and compliant for readability and legal accuracy.
 *
 * DESIGN NOTES:
 * - Uses Tailwind CSS for spacing and flex column layout.
 * - Ensures footer sticks to the bottom and content is vertically centered.
 * - This layout can be reused for other legal pages (Privacy, Cookies, etc.).
 */
import SecondaryNavbar from "@/app/components/SimpleNavbar";
import SimpleFooter from "@/app/components/SimpleFooter";

export const metadata = {
  title: "Terms & Conditions",
  description: "Read the Terms and Conditions for using CARrental.com services.",
} as const;

export default function TermeniLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <SecondaryNavbar />
      <main className="flex-1">{children}</main>
      <SimpleFooter />
    </div>
  );
}