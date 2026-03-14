"use client";

import { useReveal } from "@/hooks/useReveal";

const pillars = [
    {
        emoji: "🪨",
        title: "Stone Cold-Milled",
        description:
            "Milled below 35°C to prevent heat-induced oxidation. Natural oils, volatile flavour compounds, and vitamins stay intact — as nature intended.",
    },
    {
        emoji: "📅",
        title: "Same-Day Freshness",
        description:
            "We mill your atta on the day you order. No pre-ground stock sitting on shelves or in warehouses for weeks.",
    },
    {
        emoji: "⚗️",
        title: "Zero Additives",
        description:
            "No preservatives, no bleaching agents, no flow conditioners. Only the grains you choose — nothing more, nothing less.",
    },
    {
        emoji: "⚖️",
        title: "Precision Blending",
        description:
            "Grain ratios are measured exactly per batch. Every order is consistent — same taste, same texture, same nutrition, every time.",
    },
];

export default function ProcessBanner() {
    const headerReveal = useReveal();
    const gridReveal = useReveal();

    return (
        <section id="process" className="bg-dark-brown py-28 relative overflow-hidden">
            {/* Texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />
            {/* Ambient blobs */}
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-wheat/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div
                    ref={headerReveal.ref}
                    className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-wheat/60 font-semibold tracking-[0.2em] uppercase text-xs">
                        Our Process
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white">
                        Why Fresh-Milled
                        <span className="italic text-wheat"> Changes Everything.</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
                        Packaged atta sits in warehouses for months. Ours is milled the same day.
                        That difference in freshness is the difference you taste in every roti.
                    </p>
                </div>

                <div
                    ref={gridReveal.ref}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {pillars.map((pillar, index) => (
                        <div
                            key={pillar.title}
                            className={`border border-white/10 rounded-4xl p-8 hover:border-wheat/30 hover:bg-white/5 transition-all duration-500 group reveal reveal-up ${gridReveal.isVisible ? "visible" : ""}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="text-3xl block mb-6">{pillar.emoji}</span>
                            <h3 className="text-lg font-bold text-white mb-3 group-hover:text-wheat transition-colors duration-300">
                                {pillar.title}
                            </h3>
                            <p className="text-sm text-white/50 leading-relaxed">{pillar.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
