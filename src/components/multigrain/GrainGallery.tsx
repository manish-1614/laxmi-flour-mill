"use client";

import { useReveal } from "@/hooks/useReveal";

const grains = [
    { emoji: "🌾", name: "Bansi Wheat", tagline: "The golden base" },
    { emoji: "🌿", name: "Jowar", tagline: "Blood sugar control" },
    { emoji: "🟤", name: "Bajra", tagline: "Iron & zinc rich" },
    { emoji: "🔴", name: "Ragi", tagline: "Highest plant calcium" },
    { emoji: "🌰", name: "Barley", tagline: "Heart & cholesterol" },
    { emoji: "🥣", name: "Oats", tagline: "LDL reduction" },
    { emoji: "🫘", name: "Chickpea", tagline: "Complete protein" },
    { emoji: "🌱", name: "Moong", tagline: "Easily digestible" },
    { emoji: "🤎", name: "Flaxseeds", tagline: "Omega-3 fatty acids" },
    { emoji: "🫐", name: "Chia Seeds", tagline: "Satiety & minerals" },
    { emoji: "⚪", name: "Sesame", tagline: "Bone-building zinc" },
    { emoji: "🌼", name: "Quinoa", tagline: "All 9 amino acids" },
    { emoji: "🌿", name: "Amaranth", tagline: "Immunity & minerals" },
    { emoji: "🟫", name: "Buckwheat", tagline: "Reduces inflammation" },
    { emoji: "🌱", name: "Foxtail Millet", tagline: "Ancient gluten-free grain" },
];

export default function GrainGallery() {
    const headerReveal = useReveal();
    const gridReveal = useReveal();

    return (
        <section id="grains" className="max-w-7xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    What Goes In
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    15+ Premium Grains.
                    <span className="block italic text-wheat">One Perfect Blend.</span>
                </h2>
                <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
                    Every grain is sourced for its nutritional purpose. Nothing is added randomly.
                    Each ingredient earns its place in the blend.
                </p>
            </div>

            <div
                ref={gridReveal.ref}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
            >
                {grains.map((grain, index) => (
                    <div
                        key={grain.name}
                        className={`bg-white border border-wheat/10 rounded-3xl p-5 flex flex-col items-center text-center hover:border-wheat/40 hover:shadow-soft transition-all duration-300 hover:-translate-y-1 cursor-default reveal reveal-scale ${gridReveal.isVisible ? "visible" : ""}`}
                        style={{ transitionDelay: `${index * 35}ms` }}
                    >
                        <span className="text-3xl mb-3">{grain.emoji}</span>
                        <p className="text-sm font-bold text-dark-brown leading-snug">{grain.name}</p>
                        <p className="text-[10px] text-muted mt-1 leading-tight">{grain.tagline}</p>
                    </div>
                ))}
            </div>
        </section>
    );
}
