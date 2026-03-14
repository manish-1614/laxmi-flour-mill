"use client";

import { useReveal } from "@/hooks/useReveal";

const blends = [
    {
        emoji: "🌾",
        name: "Wheat-Millet Classic",
        tag: "Most Popular",
        tagStyle: "bg-wheat/20 text-wheat",
        composition: "60% Wheat · 15% Jowar · 15% Bajra · 10% Ragi",
        benefit:
            "Rich in fibre (6–8g/100g) and iron. The earthy, nutty flavour pairs perfectly with ghee and traditional Indian curries.",
        forWhom: "Ideal for: Families & everyday cooking",
        highlight: "20–35% lower glycemic index vs plain wheat atta",
        startingPrice: 75,
    },
    {
        emoji: "💪",
        name: "High-Protein Power",
        tag: "Fitness",
        tagStyle: "bg-accent-green/15 text-accent-green",
        composition: "50% Wheat · 25% Chickpea · 15% Soy · 10% Lentil",
        benefit:
            "18–22g protein per 100g — nearly double that of regular wheat atta. Legumes are lightly roasted before milling for better digestibility.",
        forWhom: "Ideal for: Athletes, vegetarians & fitness enthusiasts",
        highlight: "Complete amino acid profile for muscle recovery",
        startingPrice: 90,
    },
    {
        emoji: "🏺",
        name: "Ancient Grains Blend",
        tag: "Gluten-Free",
        tagStyle: "bg-ivory text-dark-brown border border-wheat/30",
        composition: "30% Jowar · 25% Bajra · 25% Ragi · 20% Foxtail Millet",
        benefit:
            "100% wheat-free. Highest mineral density — ragi alone provides 344mg calcium per 100g. Suitable for celiac and gluten-intolerant individuals.",
        forWhom: "Ideal for: Gluten-intolerant & millet enthusiasts",
        highlight: "47% market growth FY2023-24 post millet campaign",
        startingPrice: 85,
    },
    {
        emoji: "✨",
        name: "Seed-Enhanced Premium",
        tag: "Premium",
        tagStyle: "bg-dark-brown/10 text-dark-brown",
        composition: "Multigrain base + 3% Flaxseeds · 3% Chia · 4% Sesame",
        benefit:
            "Adds Omega-3 fatty acids (ALA), selenium, zinc, and calcium. Cold-pressed milling preserves seed oils and prevents rancidity.",
        forWhom: "Ideal for: Anti-inflammatory diet & health-conscious",
        highlight: "40–60% premium over standard atta — worth every grain",
        startingPrice: 110,
    },
    {
        emoji: "🌿",
        name: "Functional Health Blend",
        tag: "Therapeutic",
        tagStyle: "bg-accent-green/10 text-accent-green",
        composition: "Multigrain base + Methi · Moringa · Turmeric · Amla",
        benefit:
            "Incorporates FSSAI-compliant Ayurvedic herbs within permissible limits. Emerging nutraceutical category with high post-COVID health awareness demand.",
        forWhom: "Ideal for: Preventive wellness & targeted health support",
        highlight: "Consult your physician if you have a chronic condition",
        startingPrice: 100,
    },
];

function BlendCard({ blend, index }: { blend: (typeof blends)[0]; index: number }) {
    const reveal = useReveal();
    return (
        <div
            ref={reveal.ref}
            className={`bg-ivory rounded-4xl p-8 border border-wheat/10 hover:border-wheat/30 hover:shadow-premium transition-all duration-500 hover:-translate-y-1 flex flex-col gap-5 reveal reveal-up ${reveal.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="flex items-start justify-between">
                <span className="text-4xl">{blend.emoji}</span>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${blend.tagStyle}`}>
                    {blend.tag}
                </span>
            </div>

            <div>
                <h3 className="text-xl font-bold text-dark-brown mb-2">{blend.name}</h3>
                <p className="text-[10px] font-mono text-wheat/90 uppercase tracking-wider mb-4 leading-relaxed">
                    {blend.composition}
                </p>
                <p className="text-sm text-muted leading-relaxed">{blend.benefit}</p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-wheat/10">
                <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-dark-brown">{blend.forWhom}</p>
                    <span className="text-sm font-bold text-dark-brown whitespace-nowrap">
                        <span className="text-[10px] font-normal text-muted">from </span>
                        {`\u20B9${blend.startingPrice}/kg`}
                    </span>
                </div>
                <p className="text-[10px] text-accent-green uppercase tracking-wider leading-relaxed">
                    {blend.highlight}
                </p>
            </div>
        </div>
    );
}

export default function GrainBlends() {
    const headerReveal = useReveal();

    return (
        <section id="blends" className="bg-white/60 py-28">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={headerReveal.ref}
                    className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                        Our Signature Range
                    </span>
                    <h2 className="text-4xl md:text-5xl text-dark-brown">
                        Five Blends.
                        <span className="italic text-wheat"> One for Every Home.</span>
                    </h2>
                    <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
                        Each blend is formulated using research from NIN Hyderabad and traditional Indian
                        grain wisdom. Stone-milled fresh on the day of your order.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blends.map((blend, index) => (
                        <BlendCard key={blend.name} blend={blend} index={index} />
                    ))}
                </div>
            </div>
        </section>
    );
}
