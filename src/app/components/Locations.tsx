import React from "react";

/**
 * TEMPLATE GUIDE (Locations)
 * - Replace the Google Maps iframe below with your own business location embed.
 * - Update the section heading to fit your brand voice (e.g., “Where to find us”).
 * - Adjust the map height and styling to fit your design (currently 450px tall).
 * - You can embed multiple maps or branches if needed.
 */

export default function Locations() {
  return (
    <>
      {/* LOCATION SECTION: Displays company’s address or main branch on Google Maps */}
      <section id="location" className="px-6 py-12 max-w-7xl mx-auto bg-white">
        <header className="mb-8 text-center">
          {/* TITLE: Update text to your preferred label (e.g., Our location, Find us, Visit our office) */}
          <h2 className="text-4xl font-bold">Our location:</h2>
        </header>
        <div className="w-full h-[450px] rounded-lg overflow-hidden border">
          {/* GOOGLE MAPS EMBED: Replace src URL with your business location embed link */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2842.4741033781083!2d26.092351576592314!3d44.56686729286037!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40b21c81b6588f77%3A0x114e5dad9d6d877e!2sBucharest%20Henri%20Coand%C4%83%20International%20Airport!5e0!3m2!1sen!2sro!4v1759752847664!5m2!1sen!2sro"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Google Maps Location"
          ></iframe>
        </div>
      </section>
    </>
  );
}