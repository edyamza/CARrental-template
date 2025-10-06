/**
 * TEMPLATE GUIDE (Info)
 * - Edit the `features` array to adjust the selling points or unique services of your rental company.
 * - Each item includes: title, description, and icon (you can use SVGs or icons from lucide-react).
 * - Modify the company name or website inside text sections (currently uses CARrental.com).
 * - Adjust layout, colors, and grid structure for your preferred branding.
 */
export default function Info() {
  // FEATURE LIST: Update titles, descriptions, and icons to represent your business highlights.
  const features = [
    {
      title: "Full Casco insurance",
      desc: "For your complete peace of mind, all our cars are covered by full Casco insurance, and we do not charge any additional deposit.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M12 3l7 3v6a9 9 0 01-7 8 9 9 0 01-7-8V6l7-3z"/>
        </svg>
      ),
    },
    {
      title: "Free pickup and return 24/7",
      desc: "We provide free pickup and return directly from the airport, available non-stop 24/7, so you can travel without worries.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <circle cx="12" cy="12" r="9"/>
          <path d="M12 7v6l4 2"/>
        </svg>
      ),
    },
    {
      title: "Competitive prices",
      desc: "At CARrental.com, we guarantee no hidden costs. We offer fair, transparent, and affordable rates tailored to every customer’s needs.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <rect x="3" y="6" width="18" height="12" rx="2"/>
          <path d="M16 12h2"/>
        </svg>
      ),
    },
    {
      title: "Fast services",
      desc: "Bookings are quick and easy, and we are always available for any questions or support. Assistance is available 24/7.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M5 19c2-6 8-12 14-14-2 6-8 12-14 14z"/>
          <path d="M9 15l0 0"/>
        </svg>
      ),
    },
    {
      title: "Diverse fleet",
      desc: "Our cars are new, well-maintained, and equipped with all the necessary features for a safe and pleasant driving experience.",
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
          <path d="M3 13h18l-1.5-4.5h-15z"/>
          <circle cx="7.5" cy="17.5" r="1.5"/>
          <circle cx="16.5" cy="17.5" r="1.5"/>
        </svg>
      ),
    },
  ];

  // SECTION LAYOUT: Two-column layout (text on left, features on right). Adjust grid classes as needed.
  return (
    <>
      {/* ABOUT SECTION: Introduces your brand and core values */}
      <section id="aboutus" className="bg-white text-black py-16 px-4 scroll-mt-12">
        <div className="mx-auto max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12">
          <div>
            {/* TITLE: Update company name or highlight section purpose */}
            <h2 className="text-3xl font-bold mb-4">
              About <span className="text-[#071326]">CARrental.com</span>
            </h2>
            {/* DESCRIPTION: Customize text to fit your company story or philosophy */}
            <p className="mb-4 text-gray-700">
              With passion and experience in the automotive field, we have built a reputation through hundreds of rentals, offering professional and flexible services for our clients. We are dedicated to providing transparency, safety, and comfort every step of the way.
            </p>
            <p className="mb-4 text-gray-700">
              Our fleet includes practical and economical models such as Hyundai i10, i20, Dacia Logan, and Skoda Fabia, all carefully maintained and ready for any destination.
            </p>
            <p className="text-gray-700">
              Our mission is to make every journey a safe and enjoyable experience, with fast services, competitive prices, and 24/7 support.
            </p>
          </div>
          {/* FEATURE CARDS: Display key advantages. You can add more or reduce the number by adjusting the slice or map range */}
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
    </>
  );
}