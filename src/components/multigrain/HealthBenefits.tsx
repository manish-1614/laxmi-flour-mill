"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import HealthIssuesModal from "./HealthIssuesModal";
const benefits = [
    {
        emoji: "🩺",
        tag: "Low GI",
        title: "Diabetic-Friendly",
        description:
            "Lowers post-meal blood glucose spikes by 25–40%. Barley's beta-glucan slows glucose absorption, and fenugreek's 4-hydroxyisoleucine naturally stimulates insulin secretion.",
    },
    {
        emoji: "❤️",
        tag: "Cholesterol Support",
        title: "Heart Health",
        description:
            "Oat beta-glucan reduces LDL cholesterol by up to 10%. Flaxseeds provide plant Omega-3 to reduce inflammation and arterial stiffness, while ragi's polyphenols help lower blood pressure.",
    },
    {
        emoji: "⚖️",
        tag: "Satiety & Metabolism",
        title: "Weight Management",
        description:
            "High dietary fibre increases satiety, reducing total caloric intake per meal. Chia and flaxseeds expand in the stomach — creating fullness with fewer calories.",
    },
    {
        emoji: "🦴",
        tag: "Calcium-Rich",
        title: "Bone Health",
        description:
            "Ragi provides 344mg calcium per 100g — more than milk per gram. Particularly beneficial for post-menopausal women, elderly, and lactose-intolerant individuals.",
    },
    {
        emoji: "🛡️",
        tag: "Antioxidant-Rich",
        title: "Immunity Booster",
        description:
            "Bajra's zinc, amaranth's squalene, and buckwheat's rutin activate macrophages and natural killer cells. Moringa-enhanced blends add Vitamins A and C for powerful immune defence.",
    },
    {
        emoji: "🧒",
        tag: "Growth & Focus",
        title: "Children's Growth",
        description:
            "Ragi for bone development, quinoa's complete protein for muscles, bajra's iron for cognitive development and prevention of childhood anaemia. Lower GI prevents energy crashes at school.",
    },
];

export default function HealthBenefits() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const headerReveal = useReveal();
    const gridReveal = useReveal();

    return (
        <section id="benefits" className="max-w-7xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    Science-Backed Nutrition
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    Crafted for
                    <span className="italic text-wheat"> Your Wellbeing.</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
                    Our blends are formulated based on research from NIN Hyderabad, ICMR clinical studies,
                    and traditional Ayurvedic grain wisdom. Every roti does more than just fill you up.
                </p>
            </div>

            <div
                ref={gridReveal.ref}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {benefits.map((benefit, index) => (
                    <div
                        key={benefit.title}
                        className={`group bg-white border border-wheat/10 rounded-4xl p-8 hover:border-accent-green/20 hover:shadow-premium transition-all duration-500 hover:-translate-y-1 reveal reveal-up ${gridReveal.isVisible ? "visible" : ""}`}
                        style={{ transitionDelay: `${index * 80}ms` }}
                    >
                        <div className="flex items-center justify-between mb-6">
                            <div className="w-14 h-14 bg-ivory rounded-2xl flex items-center justify-center text-2xl group-hover:bg-accent-green/10 transition-colors duration-500">
                                {benefit.emoji}
                            </div>
                            <span className="text-[9px] font-bold text-accent-green bg-accent-green/10 px-3 py-1 rounded-full uppercase tracking-widest">
                                {benefit.tag}
                            </span>
                        </div>
                        <h3 className="text-lg font-bold text-dark-brown mb-3">{benefit.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">{benefit.description}</p>
                    </div>
                ))}
            </div>

            <div className="flex justify-center mt-12 mb-8">
                <button 
                    onClick={() => setIsModalOpen(true)}
                    className="group relative inline-flex items-center gap-3 px-8 py-4 bg-accent-green text-white rounded-full font-bold uppercase tracking-widest text-xs hover:bg-opacity-90 transition-all hover:-translate-y-1 shadow-premium hover:shadow-xl"
                >
                    Target Specific Health Issues
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>

            <p className="text-center text-[10px] text-muted/60 mt-6 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                Medical disclaimer: These are nutritional food products, not medicine.
                Consult your physician before dietary changes if you have a chronic condition.
            </p>

            <HealthIssuesModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
