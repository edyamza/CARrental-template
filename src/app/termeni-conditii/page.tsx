/**
 * TEMPLATE GUIDE (Terms & Conditions Page)
 * - This page defines the terms and conditions for using CARrental.com services.
 * - It contains structured sections (Reservations, Payment Conditions, etc.) for clarity and compliance.
 * - Keep the text professional and legally accurate.
 *
 * HOW TO MODIFY:
 * 1. Replace “CARrental.com” with your company name wherever needed.
 * 2. Add or remove sections according to your rental business requirements.
 * 3. Update contact information and payment details to match your own.
 * 4. Maintain a formal English tone and consistent structure for legal readability.
 *
 * DESIGN NOTES:
 * - Styled using Tailwind CSS (`prose`, `prose-lg`) for readable typography.
 * - Each section is wrapped in <section> with margin and spacing for visual balance.
 * - This page is rendered inside the Terms & Conditions layout component.
 */

export default function Page() {
  return (
    <main className="prose prose-lg max-w-7xl mx-auto py-12 px-8 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-8">
        Terms & Conditions
      </h1>

      {/* RESERVATIONS */}
      <section className="leading-relaxed">
        <p className="uppercase font-semibold mb-2">Reservations:</p>
        <p className="mb-4">
          Reservations can be made either online (www.carrental.com) or by phone using the contact numbers provided. After
          the customer submits a reservation request, a confirmation email will be sent. Please print this confirmation and
          present it to the CARrental.com agent when picking up your vehicle. Reservations are confirmed only for a vehicle
          group, not for a specific make or model. If the requested group is unavailable, the client will receive a similar
          car or one from a higher class, without any change in the original offer. After the reservation is confirmed, any
          modification may affect the price and availability of the desired vehicle. For any changes or cancellations,
          please contact us at: +40 749 605 000 or +40 734 587 784.
        </p>
      </section>

      {/* PAYMENT TERMS AND METHODS */}
      <section className="leading-relaxed mt-6"> 
        <p className="uppercase font-semibold mb-2">Payment terms and methods:</p>
        <p className="mb-4">
          The renter will not pay anything in advance; payment is made in full at the time of signing the contract (including
          vehicle rental, optional insurance, optional equipment, and any additional fees depending on delivery/pickup hours).
        </p>
        <p className="mb-4">
          All taxes and fees are calculated in Euro. Cash payments are accepted in the following currencies: LEI, EURO, or
          POUND. For credit or debit card payments (VISA, VISA ELECTRON, MASTERCARD, MAESTRO), the equivalent amount in LEI
          will be charged based on the First Bank exchange rate + a 1% bank commission valid on the invoice date.
        </p>
        <p className="mb-4">
          If the amount is not paid within 30 days from the invoice date by the broker, the renter will be charged according
          to their voucher.
        </p>
      </section>
    </main>
  );
}