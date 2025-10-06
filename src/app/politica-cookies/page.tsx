/**
 * TEMPLATE GUIDE (Cookies Policy Page)
 * - This page provides a detailed cookies policy written in English for CARrental.com.
 * - It explains what cookies are, their types, usage, and how users can manage them.
 * - The structure includes multiple <h2>, <h3>, <p>, <ul>, and <ol> tags for readability and SEO.
 *
 * HOW TO MODIFY:
 * 1. Replace “CARrental.com” with your company name where needed.
 * 2. Edit titles (e.g., COOKIES POLICY) or section headers if you want a shorter or branded version.
 * 3. Adjust text to match your specific cookie usage policy — for example, if you use Google Analytics or specific ad cookies.
 * 4. Add or remove paragraphs as needed while keeping the legal language accurate.
 * 5. You can link to your Privacy Policy page by adding <Link href="/privacy-policy"> at relevant points.
 * 6. To localize the content, translate it into another language while keeping the same structure.
 *
 * DESIGN NOTES:
 * - The component uses Tailwind CSS classes (`prose`, `prose-lg`, etc.) for clean typography.
 * - You can adjust spacing or colors using Tailwind utility classes.
 * - This is a standalone informational page, meant to be linked in your footer or legal section.
 */

export default function PoliticaCookiesPage() {
  return (
    <div className="prose prose-lg max-w-7xl mx-auto py-12 px-8">
      <h1 className="font-bold text-3xl mb-8">COOKIES POLICY</h1>
      <p className="font-bold mb-6">Please read the following information carefully:</p>
      <p className="mb-6">
        To comply with the requirements set by the <strong>EU Directive of May 26, 2012</strong> and the provisions of <strong>Law no. 506 of November 17, 2004</strong> on the processing of personal data and the protection of privacy in the electronic communications sector, all visitors to this website are asked for their consent before cookies are transmitted to their computers.
      </p>
      <p className="mb-6">
        This website uses both first-party and third-party cookies to provide visitors with a much better browsing experience and services tailored to the needs and interests of each individual.
      </p>
      <p className="mb-6">
        Cookies play an important role in facilitating access and delivering multiple services that users enjoy on the internet, such as:
      </p>
      <ul className="mb-6 list-disc list-inside">
        <li>Personalizing certain settings such as the language in which a site is viewed, accessing old preferences by using the “forward” and “back” buttons.</li>
        <li>Cookies provide site owners with valuable feedback on how their websites are used by visitors, allowing them to make the sites more efficient and accessible for users.</li>
        <li>Allowing multimedia or other types of applications from other sites to be included on a particular site to create a more valuable, useful, and enjoyable browsing experience.</li>
      </ul>
      <h2 className="font-bold mb-4">What is a “cookie”?</h2>
      <p className="mb-6">
        An “Internet Cookie” (also known as a “browser cookie” or “HTTP cookie”) is a small file made up of letters and numbers that is stored on the computer, mobile device, or other equipment of a user accessing the Internet.
      </p>
      <p className="mb-6">
        The cookie is installed by a request sent from a web server to a browser (e.g., Internet Explorer, Chrome) and is completely “passive” (it does not contain software programs, viruses, or spyware and cannot access information on the user’s hard drive).
      </p>
      <p className="mb-6">
        A cookie consists of two parts: the name and its content or value. Moreover, the lifespan of a cookie is determined; technically, only the web server that sent the cookie can access it again when the user returns to the website associated with that web server.
      </p>

      <h2 className="font-bold mb-4">
        Cookies themselves do not request personal information to be used and, in most cases, do not personally identify internet users.
      </h2>
      <p className="mb-6">There are two main categories of cookies:</p>
      <ol className="mb-6 list-decimal list-inside">
        <li>
          <strong>Session cookies</strong> – these are temporarily stored in the browser’s cookie folder so that the browser remembers them until the user leaves the website or closes the browser window.
        </li>
        <li>
          <strong>Persistent cookies</strong> – these are stored on the hard drive of a computer or device and include those placed by websites other than the one the user is currently visiting (‘third party cookies’).
        </li>
      </ol>

      <h2 className="font-bold mb-4">What are the advantages of cookies?</h2>
      <p className="mb-6">
        A cookie contains information that links a web browser to a specific web server. Cookies ensure users a pleasant browsing experience and support the efforts of many websites to provide comfortable services to users: e.g., preferences regarding online privacy, site language options, shopping carts, or relevant advertising.
      </p>

      <h2 className="font-bold mb-4">What is the lifespan of a cookie?</h2>
      <p className="mb-6">
        The lifespan of a cookie can vary significantly, depending on the purpose for which it is placed. Some cookies are used exclusively for a single session (session cookies), while others can be retained and reused each time the user returns to that website (persistent cookies).
      </p>

      <h2 className="font-bold mb-4">What are third-party cookies?</h2>
      <p className="mb-6">
        Certain content sections on some sites may be provided through third parties/providers (e.g., news boxes, videos, or advertisements). These third parties may place cookies through the website, known as “third party cookies.”
      </p>

      <h2 className="font-bold mb-4">How are cookies used by a website?</h2>
      <h3 className="font-bold mb-2">A visit to a website may place cookies for:</h3>
      <ul className="mb-6 list-disc list-inside">
        <li>improving website performance;</li>
        <li>visitor analysis;</li>
        <li>geotargeting;</li>
        <li>user registration.</li>
      </ul>

      <h3 className="font-bold mb-2">Performance cookies</h3>
      <p className="mb-6">
        This type of cookie remembers the user’s preferences on this site, so there is no need to set them each time the site is visited.
      </p>
      <p className="mb-6">
        Examples: volume settings for video players, video streaming speed compatible with the browser.
      </p>

      <h3 className="font-bold mb-2">Visitor analytics cookies</h3>
      <p className="mb-6">
        Each time a user visits a site, analytics software provided by a third party generates a user analysis cookie. This cookie indicates whether you have visited this site before. The browser signals if you have this cookie, and if not, one is generated. It allows monitoring unique users visiting the site and how often they do so.
      </p>
      <p className="mb-6">
        As long as the visitor is not registered on the site, this cookie cannot be used to identify individuals; it is used only for statistical purposes. If registered, details provided such as email address and system used may also be known – all subject to confidentiality, according to applicable data protection laws.
      </p>

      <h3 className="font-bold mb-2">Geotargeting cookies</h3>
      <p className="mb-6">
        These cookies are used by software that determines the country you come from. It is completely anonymous and used only to target content – even when the visitor is on the page in Romanian or another language, the same advertisement will be received.
      </p>

      <h3 className="font-bold mb-2">Registration cookies</h3>
      <p className="mb-6">
        When you register on a site, a cookie is generated that indicates whether you are registered or not. Servers use these cookies to show the account with which you are registered and whether you have permission for a particular service. It also allows associating any comment posted on the site with your username. If you have not selected “keep me logged in,” this cookie will be deleted automatically when you close the browser or computer.
      </p>

      <h3 className="font-bold mb-2">Other third-party cookies</h3>
      <p className="mb-6">
        On some pages, third parties may set their own anonymous cookies to track the success of an application or to customize an application.
      </p>
      <p className="mb-6">
        For example, when sharing an article using the social media buttons on a site, that social network will record your activity.
      </p>

      <h3 className="font-bold mb-2">What type of information is stored and accessed through cookies?</h3>
      <p className="mb-6">
        Cookies store information in a small text file that allows a website to recognize a browser. The web server will recognize the browser until the cookie expires or is deleted.
      </p>
      <p className="mb-6">
        The cookie stores important information that improves the internet browsing experience (e.g., language settings for accessing a site; keeping a user logged into a webmail account; online banking security; keeping products in the shopping cart).
      </p>

      <h2 className="font-bold mb-4">Why are cookies important for the Internet?</h2>
      <p className="mb-6">
        Cookies are central to the efficient functioning of the Internet, helping to generate a friendly browsing experience tailored to the preferences and interests of each user. Refusing or disabling cookies may make some websites impossible to use.
      </p>
      <p className="mb-6">Examples of important uses of cookies (which do not require user authentication through an account):</p>
      <ul className="mb-6 list-disc list-inside">
        <li>Content and services tailored to user preferences – categories such as news, weather, sports, maps, public and government services, entertainment sites, and travel services.</li>
        <li>Offers adapted to user interests – remembering language preferences (e.g., displaying search results in Romanian).</li>
        <li>Retention of child protection filters regarding internet content (family mode options, safe search functions).</li>
        <li>Measurement, optimization, and analytics features – such as confirming a certain level of traffic on a website, what type of content is viewed, and how a user arrives at a website (e.g., through search engines, direct, from other websites). Websites conduct these usage analyses to improve their sites for the benefit of users.</li>
      </ul>

      <h2 className="font-bold mb-4">Security and privacy issues</h2>
      <h3 className="font-bold mb-2">Cookies are NOT viruses!</h3>
      <p className="mb-6">
        They use plain text formats. They are not made up of code pieces, so they cannot be executed or self-executed. Therefore, they cannot be duplicated or replicated on other networks to run or replicate again. Because they cannot perform these functions, they cannot be considered viruses.
      </p>
      <p className="mb-6">
        However, cookies can be used for negative purposes. Since they store information about user preferences and browsing history on one or multiple sites, cookies can be used as a form of spyware. Many anti-spyware products are aware of this and constantly mark cookies for deletion during anti-virus/anti-spyware scan and removal procedures.
      </p>
      <p className="mb-6">
        Generally, browsers have integrated privacy settings that offer different levels of cookie acceptance, validity periods, and automatic deletion after the user visits a particular site.
      </p>

      <h2 className="font-bold mb-4">Tips for safe and responsible browsing based on cookies.</h2>
      <ul className="mb-6 list-disc list-inside">
        <li>Customize your browser settings regarding cookies to reflect a comfortable level of security for your use of cookies.</li>
        <li>If you share access to your computer, consider setting the browser to delete individual browsing data each time you close the browser. This is a way to access sites that place cookies and to delete any visit information when ending the browsing session.</li>
        <li>Install and constantly update anti-spyware applications.</li>
        <li>Many spyware detection and prevention applications include site attack detection. They thus prevent the browser from accessing websites that might exploit browser vulnerabilities or download harmful software.</li>
      </ul>

      <h2 className="font-bold mb-4">How can I disable cookies?</h2>
      <h3 className="font-bold mb-2">Disabling or refusing to accept cookies may make some websites impractical or difficult to visit and use.</h3>
      <p className="mb-6">
        It is possible to set your browser so that these cookies are no longer accepted or to configure it to accept cookies only from a specific site. However, for example, if a visitor is not registered using cookies, they will not be able to leave comments.
      </p>
      <p className="mb-6">
        All modern browsers offer the possibility to change cookie settings. These settings are usually found in the <strong>Options / Settings</strong> menu or in the <strong>Preferences / Favorites</strong> menu of the browser.
      </p>
    </div>
  );
}