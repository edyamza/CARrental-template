"use client"

export default function Info() {
  const features = [
    {
      title: "Asigurare full Casco",
      desc: "Pentru liniștea ta deplină, toate mașinile noastre sunt acoperite de asigurare full Casco, iar noi nu percepem garanție suplimentară.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 3l7 3v6a9 9 0 01-7 8 9 9 0 01-7-8V6l7-3z"/>
        </svg>
      ),
    },
    {
      title: "Preluare și retur gratuit 24/7",
      desc: "Asigurăm preluare și retur gratuit direct de la aeroport, disponibil non-stop, 24/7, pentru ca tu să călătorești fără griji.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v6l4 2"/>
        </svg>
      ),
    },
    {
      title: "Prețuri competitive",
      desc: "La NeoRent, îți garantăm că nu există costuri ascunse. Oferim tarife corecte, transparente și accesibile, adaptate nevoilor fiecărui client.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <path d="M16 12h2"/>
        </svg>
      ),
    },
    {
      title: "Servicii rapide",
      desc: "Rezervările se fac rapid și simplu, iar noi suntem mereu la dispoziția ta pentru orice întrebare sau suport. Asigurăm asistență 24/7.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M5 19c2-6 8-12 14-14-2 6-8 12-14 14z"/>
          <path d="M9 15l0 0"/>
        </svg>
      ),
    },
    {
      title: "Flotă diversificată",
      desc: "Mașinile noastre sunt noi, bine întreținute și echipate cu toate facilitățile necesare pentru o experiență de condus plăcută și sigură.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M3 13h18l-1.5-4.5h-15z"/>
          <circle cx="7.5" cy="17.5" r="1.5"/>
          <circle cx="16.5" cy="17.5" r="1.5"/>
        </svg>
      ),
    },
  ];

  return (
    <section id="aboutus" className="bg-white text-black py-16 px-4">
      <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
          <h2 className="text-3xl font-bold mb-4">
            Despre <span className="text-[#071326]">NeoRent</span>
          </h2>
          <p className="mb-4 text-gray-700">
            Cu pasiune și experiență pentru domeniul auto am clădit o reputație din sute de închirieri, oferind servicii profesionale și flexibile pentru clienții noștri. Suntem dedicați să oferim transparență, siguranță și confort la fiecare pas.
          </p>
          <p className="mb-4 text-gray-700">
            Flota noastră include modele practice și economice precum Hyundai i10, i20, Dacia Logan și Skoda Fabia, toate atent întreținute și pregătite pentru orice destinație.
          </p>
          <p className="text-gray-700">
            Misiunea noastră este să transformăm fiecare călătorie într-o experiență sigură și plăcută, cu servicii rapide, prețuri competitive și suport 24/7.
          </p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          {features.slice(0, 4).map((f, i) => (
            <div
              key={i}
              className="border border-gray-200 rounded-lg p-6 bg-white shadow-md hover:shadow-lg transition-transform duration-300 hover:scale-105"
            >
              <h3 className="font-semibold text-lg mb-2 text-[#071326]">{f.title}</h3>
              <p className="text-sm text-gray-600">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}