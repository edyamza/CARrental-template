import React from 'react';
import { Users, Fuel, Settings } from "lucide-react";

/**
 * TEMPLATE GUIDE (Fleet)
 * - Edit the CARS array below to change the inventory (titles, subtitles, features, etc.).
 * - Set `image` to a public URL or static path. Replace the <img> with Next.js <Image> if you use next/image.
 * - Use `badges` for small labels like "Featured", "New", "Sale".
 * - `id` must be unique; it can be used as a key or for deep-linking.
 * - You can tweak Tailwind classes for design without touching logic.
 * - Change the CTA button (href/text) near the bottom to point to your booking/contact page.
 */

// EDIT: Extend this type if your rental needs extra fields (e.g., pricePerDay, mileage, insuranceLevel)
type Car = {
  id: string;
  title: string; // ex. "Ferrari 296 GTS"
  subtitle: string; // short description
  seats: number;
  fuel: string; // ex. Gasoline / Hybrid / Electric
  transmission: string; // ex. Automatic / Manual
  badges?: string[]; // ex. ["Premium Sport", "Featured"]
  image?: string; // Will be filled later
  features: string[]; // some characteristics marked as tags
};

// EDIT HERE: Your fleet inventory. Add/remove cars as needed. Each object represents a single vehicle configuration.
const CARS: Car[] = [
  {
    id: 'hyundai-i10-2024',
    title: 'Hyundai i10, model 2024',
    subtitle: 'Compact city car, economical and easy to park – ideal for urban driving.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'automatic',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['A/C', 'Bluetooth', 'USB'],
  },
  {
    id: 'hyundai-i10-2021',
    title: 'Hyundai i10, model 2021',
    subtitle: 'Small, practical, and efficient – excellent comfort in city traffic.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'automatic',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['A/C', 'Android Auto', 'Apple CarPlay'],
  },
  {
    id: 'hyundai-i20-2024',
    title: 'Hyundai i20, model 2024',
    subtitle: 'Modern hatchback with up-to-date features and low fuel consumption.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'manual',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['A/C', 'Cruise Control', 'Lane Assist'],
  },
  {
    id: 'dacia-logan-iii-2024',
    title: 'Dacia Logan III, model 2024',
    subtitle: 'Spacious and comfortable sedan – the new Logan generation.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'manual',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['Spacious trunk', 'A/C', 'Parking sensors'],
  },
  {
    id: 'dacia-logan-mcv-2017',
    title: 'Dacia Logan MCV, model 2017',
    subtitle: 'Practical station wagon with large cargo space – perfect for family trips.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'manual',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['Trunk for 5 bags', 'Roof rails', 'A/C'],
  },
  {
    id: 'skoda-fabia-2020',
    title: 'Skoda Fabia, model 2020',
    subtitle: 'Reliable compact car with a large trunk for its class.',
    seats: 5,
    fuel: 'gasoline',
    transmission: 'manual',
    badges: [],
    image: '', // TODO: set an image URL or static path (e.g., "/images/fleet/hyundai-i10-2024.jpg")
    features: ['A/C', 'Safety systems', 'Trunk for 5 bags'],
  },
];

function Badge({ label }: { label: string }) {
  return (
    <>
      {/* STYLE NOTE: Adjust colors/border here to match your brand palette */}
      <span className="inline-flex items-center gap-1 rounded-full bg-yellow-400/15 text-yellow-300 border border-yellow-300/30 px-2.5 py-1 text-xs font-semibold">
        {/* mic punct decorativ */}
        <span className="h-1.5 w-1.5 rounded-full bg-yellow-300" />
        {label}
      </span>
    </>
  );
}

function Tag({ label }: { label: string }) {
  return (
    <>
      {/* STYLE NOTE: Tag visual style. You can swap to outline or change spacing here. */}
      <span className="rounded-md bg-gray-100 border border-gray-300 px-2 py-1 text-xs text-gray-700">
        {label}
      </span>
    </>
  );
}

function CarCard({ car }: { car: Car }) {
  return (
    <article className="overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-md hover:shadow-xl transition-transform duration-300 hover:scale-105">
      {/* IMAGE: Replace <img> with Next.js <Image> if available; set `car.image` above. */}
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
            <span className="text-sm opacity-80">Add an image (set `image` in CARS) for: {car.title}</span>
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
        {/* SECTION TITLE: Change headline/subtitle to fit your brand’s tone of voice */}
        <h3 className="text-xl font-extrabold text-[#071326] tracking-tight">{car.title}</h3>
        <p className="mt-1 text-sm text-gray-600">{car.subtitle}</p>

        {/* INFO ROW: Seats / Fuel / Transmission — add new items here if you extend the Car type */}
        <ul className="mt-4 grid grid-cols-3 gap-3 text-sm text-gray-700">
          <li className="flex items-center gap-2"><Users className="w-4 h-4" />{car.seats} seats</li>
          <li className="flex items-center gap-2"><Fuel className="w-4 h-4" />{car.fuel}</li>
          <li className="flex items-center gap-2"><Settings className="w-4 h-4" />{car.transmission}</li>
        </ul>

        {/* TAGS: Per-car features. Update `features` array in CARS. */}
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
    <section id="fleet" className="mx-auto max-w-7xl px-4 py-14 scroll-mt-12">
      <header className="mb-8 text-center">
        {/* SECTION TITLE: Change headline/subtitle to fit your brand’s tone of voice */}
        <h2 className="text-4xl sm:text-4xl font-black text-black">Our exclusive <span className="text-[#071326]">fleet</span></h2>
        <p className="mt-2 text-gray-700">
          Browse through our gallery and choose your preferred model. Each car is well maintained and available for quick delivery.
        </p>
      </header>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {CARS.map((car) => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
      <div className="mt-8 text-center">
        {/* CTA: Point this to your booking flow or WhatsApp/Contact page */}
        <a
          href="#contact"
          className="inline-block px-6 py-3 bg-[#071326] text-white text-lg font-semibold rounded hover:bg-[#0a1a33] transition transform hover:scale-105 duration-150"
        >
          Book a car from our fleet now
        </a>
      </div>
    </section>
  );
}