"use client";

import { useMemo, useState } from "react";

/**
 * TEMPLATE GUIDE (Hero)
 * - Replace the background image URL in the style prop below with your hero banner.
 * - Customize headline text and colors for your brand.
 * - Adjust paragraph text to describe your services or slogan.
 * - Update the button links: one for fleet or catalog, another for contact/WhatsApp.
 * - You can tweak overlay opacity by changing bg-black/60.
 */


export default function Hero() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);

  return (
    <>
      {/* HERO SECTION: Main landing banner with background image and call-to-action */}
      <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
      {/* BACKGROUND IMAGE: Change URL to your hero image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fleet.png')" }}
      />
      {/* OVERLAY: Adjust opacity (bg-black/60) to make text more visible */}
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-4">
        {/* HEADLINE: Main title — edit brand slogan or structure here */}
        <h1 className="text-4xl md:text-6xl font-extrabold">
          PREMIUM <span className="bg-[#071326] text-white px-4 py-2 rounded-full inline-block">MOBILITY</span>
        </h1>
        {/* DESCRIPTION: Edit text to describe your service or unique offer */}
        <p className="mt-6 text-lg md:text-xl text-white">
          Welcome to CARrental.com – with us, mobility becomes simple and enjoyable.
          We provide practical and economical models such as Hyundai i10, i20, Dacia Logan, and Skoda Fabia – ideal for city drives, long trips, and family journeys.
        </p>
        {/* CTA BUTTONS: Primary (View our fleet) and secondary (Contact on WhatsApp). Replace hrefs accordingly */}
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#fleet" className="inline-flex items-center justify-center rounded-full bg-[#071326] px-6 py-3 font-semibold text-white hover:bg-[#0a1a33] transition">
            View our fleet
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition">
            Contact us on WhatsApp
          </a>
        </div>
      </div>
      {/* SCROLL INDICATOR: Decorative arrows to hint scrolling. Remove if not needed. */}
      <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-10 flex flex-col items-center text-white">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce delay-150 -mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 animate-bounce delay-300 -mt-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
        </svg>
      </div>
    </section>
    </>
  );
}