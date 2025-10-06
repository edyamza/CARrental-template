/**
 * TEMPLATE GUIDE (Main Layout)
 * - This is the main layout used across the CARrental.com website.
 * - It wraps all main pages with the Navbar and Footer components.
 * - Global metadata is defined below for SEO, social sharing, and brand identity.
 *
 * HOW TO MODIFY:
 * 1. Update the metadata title, description, and Open Graph fields for your brand.
 * 2. Replace or edit the favicon path in the icons section to match your public folder asset.
 * 3. Add additional SEO metadata like keywords or structured data if needed.
 * 4. Use this layout for all pages except special/legal pages (which have their own layouts).
 *
 * DESIGN NOTES:
 * - The layout ensures consistent navigation and footer across all pages.
 * - Uses React Fragments for flexibility; you can wrap in <html> and <body> if required by Next.js.
 * - Navbar and Footer are imported from shared components for reusability.
 */
// src/app/(main)/layout.tsx
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
import Script from "next/script";

export const metadata = {
  title: {
    default: "CARrental.com | Premium Car Rentals in Romania",
    template: "%s | CARrental.com",
  },
  description:
    "Rent premium and economical cars with CARrental.com. 24/7 pickup, full insurance, and transparent prices.",
  keywords: [
    "car rental",
    "Romania car hire",
    "Bucharest airport car rental",
    "premium rentals",
    "affordable cars",
  ],
  openGraph: {
    title: "CARrental.com | Premium Car Rentals in Romania",
    description:
      "Book your car easily and travel safely. Discover our diverse fleet and competitive prices at CARrental.com.",
    siteName: "CARrental.com",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CARrental.com Preview Image",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  // NOTE: Version query helps bust aggressive favicon caching in some browsers
  icons: {
    icon: "/favicon.ico?v=1",
    shortcut: "/favicon.ico?v=1",
    apple: "/favicon.ico?v=1",
  },
  authors: [{ name: "CARrental.com Team" }],
} satisfies import("next").Metadata;

export default function MainLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Navbar />
      <Script
        id="ld-website"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebSite",
            name: "CARrental.com",
            inLanguage: "en-US",
            potentialAction: {
              "@type": "SearchAction",
              target: "/search?q={search_term_string}",
              "query-input": "required name=search_term_string",
            },
          }),
        }}
      />
      {children}
      <Footer />
    </>
  );
}