import Locations from "./components/Locations";
import Contact from "./components/Contact";
import Info from "./components/Info";
import Hero from "./components/Hero";
import Fleet from "./components/Fleet";

export default function Home() {
  return (
    <main>
      <Hero />
      <Fleet />
      <Info />
      <Contact />
      <Locations />
      
    </main>
  );
}
