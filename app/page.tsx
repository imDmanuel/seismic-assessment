import Hero from "./components/Hero";
import TopStores from "./components/TopStores";
import HowItWorks from "./components/HowItWorks";
import PlatformHighlights from "./components/PlatformHighlights";
import WhoIsThisFor from "./components/WhoIsThisFor";
import ServiceHighlights from "./components/ServiceHighlights";
import FAQs from "./components/FAQs";
import StartShipping from "./components/StartShipping";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <TopStores />
      <HowItWorks />
      <PlatformHighlights />
      <WhoIsThisFor />
      <ServiceHighlights />
      <FAQs />
      <StartShipping />
    </main>
  );
}
