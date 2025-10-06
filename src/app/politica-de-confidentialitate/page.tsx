/**
 * TEMPLATE GUIDE (Privacy Policy Page)
 * - This page describes how CARrental.com collects, uses, and protects user data.
 * - It is designed for compliance with GDPR and other privacy regulations.
 * - The structure uses semantic HTML sections (<h1>, <h2>, <p>) for readability and SEO.
 *
 * HOW TO MODIFY:
 * 1. Replace “CARrental.com” with your company name wherever needed.
 * 2. Update or extend sections to reflect your actual data collection and processing policies.
 * 3. Add more sections (e.g., Data Retention, Third-Party Processors) if applicable.
 * 4. Ensure your privacy information remains legally compliant and transparent.
 *
 * DESIGN NOTES:
 * - Styled using Tailwind CSS typography classes (`prose`, `prose-lg`).
 * - Text uses neutral, professional English tone for corporate use.
 * - This component renders inside the Privacy Layout (`layout.tsx`).
 */

export default function PrivacyPolicyPage() {
  return (
    <main className="prose prose-lg max-w-7xl mx-auto py-12 px-8 text-gray-800">
      <h1 className="text-4xl md:text-5xl font-extrabold tracking-wide uppercase mb-8">
        Privacy Policy
      </h1>

      <section className="leading-relaxed space-y-4">
        <p>
          This page explains how CARrental.com collects, uses, and protects your personal data when you use our services.
        </p>
        <p>
          We respect your privacy and process all data in accordance with applicable legislation (including GDPR). The following text is a draft and may be updated or adjusted later.
        </p>
      </section>

      <section className="mt-8 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold uppercase">Data Collected</h2>
        <p>
          Examples include: name, email, phone number, booking preferences, details about the desired vehicle, and on-site interactions necessary to fulfill your requests.
        </p>
      </section>

      <section className="mt-6 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold uppercase">Purpose of Processing</h2>
        <p>
          To provide car rental services, communicate with you about bookings, optimize user experience, and ensure the platform’s security.
        </p>
      </section>

      <section className="mt-6 leading-relaxed space-y-3">
        <h2 className="text-lg font-semibold uppercase">Your Rights</h2>
        <p>
          You have the right to access, rectification, deletion, restriction, data portability, and objection. You can contact us to exercise these rights using the contact details provided in the “Contact” section.
        </p>
      </section>
    </main>
  );
}
