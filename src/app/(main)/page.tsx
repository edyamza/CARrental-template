/**
 * TEMPLATE GUIDE (Homepage / Main Entry)
 * - This is the main landing page of CARrental.com, visible at the root path ('/').
 * - It composes all major homepage sections: Hero, Fleet, Info, Contact, and Locations.
 * - The structure follows a top-down flow: introduction → featured cars → company info → contact → map.
 *
 * HOW TO MODIFY:
 * 1. Update the component order or remove sections based on your homepage layout needs.
 * 2. Replace or edit content in each imported component (e.g., Hero.tsx, Fleet.tsx) to fit your brand identity.
 * 3. Add new components (e.g., Testimonials, Pricing, or Gallery) between sections.
 * 4. Adjust spacing or design in each component using Tailwind CSS utilities.
 * 5. Use metadata below for SEO indexing (canonical URL etc.); global SEO is managed in layout.tsx.
 *
 * DESIGN NOTES:
 * - Keep Hero visually engaging with a strong call to action.
 * - Fleet should showcase your car selection; ensure images are optimized.
 * - Info can highlight trust factors (insurance, availability, transparency).
 * - Contact and Locations sections encourage conversion and credibility.
 *
 * TECHNICAL NOTES:
 * - All imported components use the App Router structure and are automatically code-split by Next.js.
 * - Metadata below defines canonical URL for SEO; update when domain is live.
 */

import type { Metadata } from "next";
import Locations from "@/app/components/Locations";
import Contact from "@/app/components/Contact";
import Info from "@/app/components/Info";
import Hero from "@/app/components/Hero";
import Fleet from "@/app/components/Fleet";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <Fleet />
      <Info />
      <Contact />
      <Locations />
    </main>
  );
}
