import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-black/10">
      {/* Top section */}
      <div className="mx-auto max-w-7xl px-4 py-12 grid gap-10 md:grid-cols-4 text-sm">
        {/* Logo / tagline */}
        <div>
          <div className="text-2xl font-semibold text-black">Introdu Logo</div>
        </div>

        {/* Exploreaza */}
        <div>
          <h4 className="font-semibold text-black">Explorează</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li><Link href="#fleet" className="hover:text-gray-700">Flota</Link></li>
            <li><Link href="#aboutus" className="hover:text-gray-700">Despre noi</Link></li>
            <li><Link href="#contact" className="hover:text-gray-700">Contact</Link></li>
            <li><Link href="#location" className="hover:text-gray-700">Locații</Link></li>
          </ul>
        </div>

        {/* Pagini utile */}
        <div>
          <h4 className="font-semibold text-black">Pagini utile</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li><Link href="/privacy" className="hover:text-gray-700">Politica de Confidențialitate</Link></li>
            <li><Link href="/cookies" className="hover:text-gray-700">Politica Cookies</Link></li>
            <li><Link href="/terms" className="hover:text-gray-700">Termeni și Condiții</Link></li>
          </ul>
        </div>

        {/* Date de contact */}
        <div>
          <h4 className="font-semibold text-black">Date de contact</h4>
          <ul className="mt-3 space-y-2 text-black/70">
            <li>📞 <Link href="tel:+40712345678" className="hover:text-gray-700">Introdu Numarul de telefon</Link></li>
            <li>✉️ <Link href="mailto:contact@neorent.com" className="hover:text-gray-700">Introdu Email</Link></li>
            <li>📍 Introdu Adresa</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="bg-gray-100 border-t border-black/10">
        <div className="mx-auto max-w-7xl px-4 py-4 flex flex-col sm:flex-row items-center justify-between text-xs">
          <div className="text-black/60">
            Copyright © {new Date().getFullYear()} NeoRent | Toate drepturile sunt rezervate.
          </div>
          <div className="mt-2 sm:mt-0 text-black/60">
            Dezvoltat de Eduard A.
          </div>
        </div>
      </div>
    </footer>
  );
}