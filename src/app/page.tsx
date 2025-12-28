import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import TrustStrip from "@/components/TrustStrip";
import WhyChakki from "@/components/WhyChakki";
import GroceryCombo from "@/components/GroceryCombo";
import CTA from "@/components/CTA";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-ivory scroll-smooth">
      <Navbar />
      <Hero />
      <TrustStrip />
      <div id="process">
        <WhyChakki />
      </div>
      <div id="products">
        <GroceryCombo />
      </div>
      <CTA />
      <Footer />
    </main>
  );
}
