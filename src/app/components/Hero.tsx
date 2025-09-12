"use client";
import { useMemo, useState } from "react";


export default function Hero() {
  const today = useMemo(() => new Date().toISOString().slice(0, 10), []);
  const [start, setStart] = useState(today);
  const [end, setEnd] = useState(today);

  return (
    <section className="relative h-[90vh] flex items-center justify-center text-center text-white">
      {/* Background image layer */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: "url('/fleet.png')" }}
      />
      <div className="absolute inset-0 bg-black/60" />

      <div className="relative z-10 max-w-3xl px-4">
        <h1 className="text-4xl md:text-6xl font-extrabold">
          MOBILITATE <span className="text-[#071326]">PREMIUM</span>
        </h1>
        <p className="mt-6 text-lg md:text-xl text-gray-700">
          Bine ai venit la NeoRent.ro – cu noi mobilitatatea devine simplǎ și placutǎ.
          Punem la dispoziție modele practice și economice precum Hyundai i10, i20, Dacia Logan și Skoda Fabia – ideale pentru oraș, drumuri lungi și călătorii de familie.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
          <a href="#fleet" className="inline-flex items-center justify-center rounded-full bg-[#071326] px-6 py-3 font-semibold text-white hover:bg-[#0a1a33] transition">
            Vezi flota noastră
          </a>
          <a href="#" target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center rounded-full bg-green-600 px-6 py-3 font-semibold text-white hover:bg-green-700 transition">
            Contactează-ne pe WhatsApp
          </a>
        </div>
      </div>
    </section>
  );
}