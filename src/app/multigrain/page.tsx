import type { Metadata } from "next";
import MultigrainNavbar from "@/components/multigrain/MultigrainNavbar";
import MultigrainHero from "@/components/multigrain/MultigrainHero";
import GrainGallery from "@/components/multigrain/GrainGallery";
import GrainBlends from "@/components/multigrain/GrainBlends";
import HealthBenefits from "@/components/multigrain/HealthBenefits";
import ConditionGrainRatios from "@/components/multigrain/ConditionGrainRatios";
import ProcessBanner from "@/components/multigrain/ProcessBanner";
import ShelfLifeStrip from "@/components/multigrain/ShelfLifeStrip";
import ProductLineStrategy from "@/components/multigrain/ProductLineStrategy";
import MultigrainFAQ from "@/components/multigrain/MultigrainFAQ";
import MultigrainCTA from "@/components/multigrain/MultigrainCTA";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
    title: "Multigrain Atta | Laxmi Flour Mill",
    description:
        "Discover our range of fresh stone-milled multigrain atta blends — crafted from 15+ premium Indian grains for your health, taste, and wellness needs.",
};

export default function MultigrainPage() {
    return (
        <main className="min-h-screen bg-ivory scroll-smooth">
            <MultigrainNavbar />
            <MultigrainHero />
            <GrainGallery />
            <GrainBlends />
            <HealthBenefits />
            <ConditionGrainRatios />
            <ProcessBanner />
            <ProductLineStrategy />
            <ShelfLifeStrip />
            <MultigrainFAQ />
            <MultigrainCTA />
            <Footer />
        </main>
    );
}
