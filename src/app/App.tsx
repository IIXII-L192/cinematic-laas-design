import { Nav } from "./components/Nav";
import { Hero } from "./components/Hero";
import { LogoRow } from "./components/LogoRow";
import { Features } from "./components/Features";
import { TemplateShowcase } from "./components/TemplateShowcase";
import { HowItWorks } from "./components/HowItWorks";
import { Metrics } from "./components/Metrics";
import { Testimonials } from "./components/Testimonials";
import { Pricing } from "./components/Pricing";
import { CTA } from "./components/CTA";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground antialiased">
      <Nav />
      <main>
        <Hero />
        <LogoRow />
        <Features />
        <TemplateShowcase />
        <HowItWorks />
        <Metrics />
        <Testimonials />
        <Pricing />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
