import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="px-6 py-12 max-w-7xl mx-auto bg-white">
      <header className="mb-10 text-center">
        <h2 className="text-3xl font-bold mb-2">Contact &amp; Informații</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Pentru orice întrebări sau detalii suplimentare, nu ezitați să ne
          contactați prin una dintre metodele de mai jos.
        </p>
      </header>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">WhatsApp</h3>
            <p className="text-gray-700">Buton spre whatsapp</p>
            <p className="text-gray-500 text-sm">Răspundem rapid prin WhatsApp.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Telefon</h3>
            <p className="text-gray-700">Introdu telefon</p>
            <p className="text-gray-500 text-sm">Disponibil de luni până vineri, 9:00 - 18:00.</p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Email</h3>
            <p className="text-gray-700">Introdu Email</p>
            <p className="text-gray-500 text-sm">Trimite-ne un email cu întrebările tale.</p>
          </div>
        </div>
        <div className="space-y-6">
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Ridicare</h3>
            <p className="text-gray-700">
              Oferim livrare și ridicare în București și împrejurimi.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Condiții &amp; Plăți</h3>
            <p className="text-gray-700">
              Acceptăm plata cu cardul, cash și transfer bancar.
            </p>
          </div>
          <div className="p-6 border rounded-lg shadow-sm">
            <h3 className="text-xl font-semibold mb-2">Program &amp; Disponibilitate</h3>
            <p className="text-gray-700">
              Suntem disponibili 24/7 pentru rezervări și suport.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
