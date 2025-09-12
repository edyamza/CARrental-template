'use client';
import React from 'react';

// Tip de date pentru fiecare mașină
type Car = {
  id: string;
  title: string; // ex. "Ferrari 296 GTS"
  subtitle: string; // descriere scurtă
  seats: number;
  fuel: string; // ex. Benzină / Hibrid / Electric
  transmission: string; // ex. Automată / Manuală
  badges?: string[]; // ex. ["Premium Sport", "Featured"]
  image?: string; // Va fi completată ulterior
  features: string[]; // câteva caracteristici marcate ca tag-uri
};

const CARS: Car[] = [
  {
    id: 'hyundai-i10-2024',
    title: 'Hyundai i10, model 2024',
    subtitle: 'City car compact, economică și ușor de parcat – ideală pentru oraș.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'automată',
    badges: [],
    image: '',
    features: ['A/C', 'Bluetooth', 'USB'],
  },
  {
    id: 'hyundai-i10-2021',
    title: 'Hyundai i10, model 2021',
    subtitle: 'Mică, practică și eficientă – confort excelent în trafic urban.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'automată',
    badges: [],
    image: '',
    features: ['A/C', 'Android Auto', 'Apple CarPlay'],
  },
  {
    id: 'hyundai-i20-2024',
    title: 'Hyundai i20, model 2024',
    subtitle: 'Hatchback modern cu dotări actuale și consum redus.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'manuală',
    badges: [],
    image: '',
    features: ['A/C', 'Cruise Control', 'Lane Assist'],
  },
  {
    id: 'dacia-logan-iii-2024',
    title: 'Dacia Logan III, model 2024',
    subtitle: 'Sedan spațios și confortabil – noua generație Logan.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'manuală',
    badges: [],
    image: '',
    features: ['Portbagaj generos', 'A/C', 'Senzori parcare'],
  },
  {
    id: 'dacia-logan-mcv-2017',
    title: 'Dacia Logan MCV, model 2017',
    subtitle: 'Break practic cu volum mare de încărcare – perfect pentru familie.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'manuală',
    badges: [],
    image: '',
    features: ['Portbagaj 5 bagaje', 'Bare longitudinale', 'A/C'],
  },
  {
    id: 'skoda-fabia-2020',
    title: 'Skoda Fabia, model 2020',
    subtitle: 'Compactă fiabilă cu portbagaj mare pentru clasa ei.',
    seats: 5,
    fuel: 'benzină',
    transmission: 'manuală',
    badges: [],
    image: '',
    features: ['A/C', 'Sisteme siguranță', 'Portbagaj 5 bagaje'],
  },
];

function Badge({ label }: { label: string }) {
  return (
    <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-300/30 px-2.5 py-1 text-xs font-semibold">
      {/* mic punct decorativ */}
      <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
      {label}
    </span>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <span className="rounded-md bg-gray-100 border border-gray-300 px-2 py-1 text-xs text-gray-700">
      {label}
    </span>
  );
}

function CarCard({ car }: { car: Car }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
      {/* Imagine (placeholder până adaugi tu pozele) */}
      <div className="relative aspect-[16/9] w-full bg-gradient-to-br from-zinc-800 to-zinc-700">
        {car.image ? (
          // poți înlocui cu <Image /> dacă folosești next/image
          <img
            src={car.image}
            alt={car.title}
            className="h-full w-full object-cover"
          />
        ) : (
          <div className="absolute inset-0 grid place-items-center text-zinc-300">
            <span className="text-sm opacity-80">Adaugă imagine pentru: {car.title}</span>
          </div>
        )}

        {car.badges && car.badges.length > 0 && (
          <div className="absolute left-3 top-3 flex flex-wrap gap-2">
            {car.badges.map((b) => (
              <Badge key={b} label={b} />
            ))}
          </div>
        )}
      </div>

      {/* Conținut card */}
      <div className="p-5">
        <h3 className="text-xl font-extrabold text-[#071326] tracking-tight">{car.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{car.subtitle}</p>

        <ul className="mt-4 grid grid-cols-3 gap-3 text-sm text-gray-700">
          <li className="flex items-center gap-2"><span>👥</span>{car.seats} persoane</li>
          <li className="flex items-center gap-2"><span>⛽</span>{car.fuel}</li>
          <li className="flex items-center gap-2"><span>⚙️</span>{car.transmission}</li>
        </ul>

        <div className="mt-4 flex flex-wrap gap-2">
          {car.features.map((f) => (
            <Tag key={f} label={f} />
          ))}
        </div>
      </div>
    </article>
  );
}

export default function Fleet() {
  return (
    <section id="fleet" className="mx-auto max-w-7xl px-4 py-14">
      <header className="mb-8 text-center">
        <h2 className="text-3xl sm:text-4xl font-black text-black">Flota noastră <span className="text-[#071326]">exclusivă</span></h2>
        <p className="mt-2 text-gray-700">
          Navighează prin galeria noastră și selectează modelul dorit. Fiecare mașină este întreținută și
          disponibilă pentru livrare rapidă.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARS.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </section>
  );
}