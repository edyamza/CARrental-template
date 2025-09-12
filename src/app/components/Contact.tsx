"use client"
import React from "react";
import { MessageCircle, Phone, Mail, Truck, CreditCard, Clock } from "lucide-react";
import { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const cards = document.querySelectorAll(".contact-card");
    cards.forEach((card, index) => {
      (card as HTMLElement).style.opacity = "0";
      (card as HTMLElement).style.transform = "scale(0.95)";
      (card as HTMLElement).style.transition = "opacity 0.5s ease, transform 0.5s ease";
      (card as HTMLElement).style.transitionDelay = `${index * 0.1}s`;
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const el = entry.target as HTMLElement;
            el.style.opacity = "1";
            el.style.transform = "scale(1)";
            setTimeout(() => {
              el.style.transition = "";
              el.style.transform = "";
              el.style.opacity = "";
            }, 600);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    cards.forEach((card) => observer.observe(card));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" className="px-6 py-12 max-w-7xl mx-auto bg-white scroll-mt-12">
      <header className="mb-10 text-center">
        <h2 className="text-4xl font-bold mb-2">Contact &amp; Informații</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          Pentru orice întrebări sau detalii suplimentare, nu ezitați să ne
          contactați prin una dintre metodele de mai jos.
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5" />
            <h2 className="text-xl font-semibold">WhatsApp</h2>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] transition mb-3 transform hover:scale-105 duration-150"
          >
            Deschide WhatsApp
          </a>
          <p className="text-gray-500 text-sm">Răspundem rapid prin WhatsApp.</p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Telefon</h2>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] mb-3 transform hover:scale-105 transition-transform duration-150"
          >
            Sună acum
          </a>
          <p className="text-gray-500 text-sm">
            Disponibil de luni până vineri <span className="text-xs border-b border-[#071326]">(9:00 - 18:00).</span>
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Email</h2>
          </div>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] mb-3 transform hover:scale-105 transition-transform duration-150"
          >
            Trimite Email
          </a>
          <p className="text-gray-500 text-sm">Trimite-ne un email cu întrebările tale.</p>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm lg:min-h-[360px] lg:-ml-16 contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Ridicare</h2>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Livrare la domiciliu:</span> Gratuit în București și împrejurimi (până la 25km)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Program livrare:</span> 24/7 (taxa suplimentară pentru orele 22:00–08:00)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Puncte de ridicare:</span> Aeroportul Otopeni, Gara de Nord, Centrul Vechi
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 lg:min-h-[360px] contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Condiții &amp; Plăți</h2>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Vârsta minimă:</span> 21 ani (23 ani pentru mașinile sport)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Permis de conducere:</span> Valabil, obținut de cel puțin 2 ani
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Plăți acceptate:</span> Card bancar, transfer bancar, numerar
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Garanție:</span> Depozit refundabil (variază în funcție de vehicul)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Asigurare:</span> CASCO și RCA incluse în preț
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm lg:min-h-[360px] lg:-mr-16 contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Program &amp; Disponibilitate</h2>
          </div>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Rezervări:</span> Cu minimum 2 ore în avans
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Închiriere minimă:</span> 4 ore (1 zi pentru mașinile sport)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Rezervări urgente:</span> Posibile în funcție de disponibilitate
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Anulare gratuită:</span> Până cu 24h înainte de preluare
          </p>
        </div>
      </div>
    </section>
  );
}
