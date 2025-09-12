

import React from "react";

export default function Locations() {
  return (
    <section id="location" className="px-6 py-12 max-w-7xl mx-auto bg-white">
      <header className="mb-8 text-center">
        <h2 className="text-3xl font-bold">Locația noastrǎ:</h2>
      </header>
      <div className="w-full h-[450px] rounded-lg overflow-hidden border">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d26947.234611258787!2d24.352296635336806!3d45.065278552736636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x474d38a5241617a1%3A0x3ad8579f5609879a!2zMzlDQytWODksIFLDom1uaWN1IFbDomxjZWEsIFJvbWFuaWE!5e1!3m2!1sen!2sus!4v1757670424776!5m2!1sen!2sus"
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
  );
}