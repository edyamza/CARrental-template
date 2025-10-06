"use client"
import React from "react";
import { MessageCircle, Phone, Mail, Truck, CreditCard, Clock } from "lucide-react";
import { useEffect } from "react";

/**
 * TEMPLATE GUIDE (Contact)
 * - Replace placeholder links with your real WhatsApp, phone, and email.
 * - Edit business hours, delivery areas, and policy notes to match your operations.
 * - Keep IDs (e.g., #contact) in sync with your navigation.
 */

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
        {/* SECTION TITLE: Update headline and description for your brand */}
        <h2 className="text-4xl font-bold mb-2">Contact & Informations</h2>
        <p className="text-gray-600 max-w-xl mx-auto">
          For any questions or additional details, feel free to contact us using any of the methods below.
        </p>
      </header>
      <div className="flex flex-col lg:flex-row gap-6 mb-6">
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <MessageCircle className="w-5 h-5" />
            <h2 className="text-xl font-semibold">WhatsApp</h2>
          </div>
          {/* EDIT: Replace with your WhatsApp click-to-chat link (format: https://wa.me/<number>) */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] transition mb-3 transform hover:scale-105 duration-150"
          >
            Open WhatsApp
          </a>
          <p className="text-gray-500 text-sm">We respond quickly via WhatsApp.</p>
          {/* INFO: Adjust response text or add working hours if needed */}
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <Phone className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Phone</h2>
          </div>
          {/* EDIT: Use tel: format — example: href="tel:+40700111222" */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] mb-3 transform hover:scale-105 transition-transform duration-150"
          >
            Call now
          </a>
          <p className="text-gray-500 text-sm">
            Available Monday to Friday <span className="text-xs border-b border-[#071326]">(9:00 - 18:00).</span>
          </p>
          {/* INFO: Update business hours and availability */}
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 contact-card will-change-transform">
          <div className="flex items-center gap-2 mb-2">
            <Mail className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Email</h2>
          </div>
          {/* EDIT: Replace with your support email — example: href="mailto:rentals@yourbrand.com" */}
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block w-full text-center px-4 py-2 bg-[#071326] text-white rounded hover:bg-[#0a1a33] mb-3 transform hover:scale-105 transition-transform duration-150"
          >
            Send Email
          </a>
          <p className="text-gray-500 text-sm">Send us your questions by email.</p>
          {/* INFO: Clarify support response time or file-attachment policy if applicable */}
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="p-6 border rounded-lg shadow-sm lg:min-h-[360px] lg:-ml-16 contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <Truck className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Pickup</h2>
          </div>
          {/* OPERATIONS: Delivery & pickup policies — adjust to your city coverage and fees */}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Home delivery:</span> Free in Bucharest and nearby areas (up to 25 km)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Delivery schedule:</span> 24/7 (extra fee for 22:00–08:00)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Pickup points:</span> Otopeni Airport, Gara de Nord, Old Town
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm flex-1 lg:min-h-[360px] contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <CreditCard className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Terms & Payments</h2>
          </div>
          {/* POLICY: Adjust age limit, license requirements, accepted payments, and deposit policy */}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Minimum age:</span> 21 years (23 for sports cars)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Driver's license:</span> Valid, held for at least 2 years
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Accepted payments:</span> Credit/debit card, bank transfer, cash
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Deposit:</span> Refundable deposit (varies by vehicle)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Insurance:</span> Comprehensive (CASCO) and liability (RCA) included
          </p>
        </div>
        <div className="p-6 border rounded-lg shadow-sm lg:min-h-[360px] lg:-mr-16 contact-card will-change-transform transform hover:scale-105 transition-transform duration-150">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5" />
            <h2 className="text-xl font-semibold">Schedule & Availability</h2>
          </div>
          {/* POLICY: Booking rules, minimum rental duration, urgent booking policy, and cancellation terms */}
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Bookings:</span> At least 2 hours in advance
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Minimum rental:</span> 4 hours (1 day for sports cars)
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Urgent bookings:</span> Possible depending on availability
          </p>
          <p className="text-gray-700 mb-2">
            <span className="font-semibold">Free cancellation:</span> Up to 24h before pickup
          </p>
        </div>
      </div>
    </section>
  );
}
