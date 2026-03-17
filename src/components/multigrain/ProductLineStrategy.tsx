"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const PORTFOLIO = {
    Phase1: [
        {
            name: "Laxmi Aarogya Atta",
            hindi: "लक्ष्मी आरोग्य आटा",
            tier: "Core Multigrain",
            tierClass: "bg-emerald-100 text-emerald-800",
            icon: "🌾",
            grains: "Wheat 50%, Jowar 20%, Bajra 15%, Ragi 10%, Barley 5%",
            price: "₹65–75",
            sizes: "1kg / 2kg / 5kg",
            insight: "Mass market family atta. Your volume driver. Easy rotis. Mild nutty taste.",
            channel: "Replace plain chakki atta. Target every household.",
        },
        {
            name: "Laxmi Madhumeha Atta",
            hindi: "लक्ष्मी मधुमेह आटा",
            tier: "Diabetic Atta",
            tierClass: "bg-blue-100 text-blue-800",
            icon: "🩸",
            grains:
                "Barley 25%, Jowar 20%, Wheat 20%, Bajra 15%, Buckwheat 10%, Fenugreek 5%, Oats 5%",
            price: "₹90–110",
            sizes: "500g / 1kg / 2kg",
            insight: "India has 101M diabetics. Biggest addressable health atta market.",
            channel: "Doctor referrals, diabetic clinics, pharmacies near you.",
        },
        {
            name: "Laxmi Hriday Atta",
            hindi: "लक्ष्मी हृदय आटा",
            tier: "Cardiac Atta",
            tierClass: "bg-rose-100 text-rose-800",
            icon: "❤️",
            grains:
                "Oats 25%, Barley 20%, Wheat 20%, Jowar 15%, Flaxseed 10%, Psyllium husk 5%, Ragi 5%",
            price: "₹85–105",
            sizes: "500g / 1kg",
            insight: "Oat beta-glucan clinically proven to reduce LDL cholesterol.",
            channel: "Partner with cardiologists, cholesterol clinics, cardiac rehab centers.",
        },
        {
            name: "Laxmi Ragi Shakti Atta",
            hindi: "लक्ष्मी रागी शक्ति आटा",
            tier: "Bone Health Atta",
            tierClass: "bg-purple-100 text-purple-800",
            icon: "🦴",
            grains: "Ragi 40%, Wheat 20%, Amaranth 15%, Sesame 10%, Jowar 10%, Moringa 5%",
            price: "₹85–100",
            sizes: "500g / 1kg / 2kg",
            insight:
                "Ragi has 344mg calcium/100g — more than milk. Highest-calcium atta possible.",
            channel: "Post-menopausal women, elderly, kids, lactose-intolerant segment.",
        },
        {
            name: "Laxmi Sampoorn Atta",
            hindi: "लक्ष्मी संपूर्ण आटा",
            tier: "Gluten-Free Millet",
            tierClass: "bg-amber-100 text-amber-800",
            icon: "🌿",
            grains: "Jowar 30%, Ragi 25%, Bajra 20%, Buckwheat 15%, Amaranth 10%",
            price: "₹110–130",
            sizes: "500g / 1kg",
            insight: "Fastest growing niche — 47% market growth in FY2023-24. No wheat at all.",
            channel: "Celiac, gluten-sensitive customers. Premium D2C online channel.",
        },
    ],
    Phase2: [
        {
            name: "Laxmi Naari Shakti Atta",
            hindi: "लक्ष्मी नारी शक्ति आटा",
            tier: "PCOS / Hormonal",
            tierClass: "bg-pink-100 text-pink-800",
            icon: "🌸",
            grains: "Jowar 25%, Ragi 20%, Barley 20%, Quinoa 15%, Wheat 10%, Flaxseed 10%",
            price: "₹100–120",
            sizes: "500g / 1kg",
            insight: "Massive underserved market — PCOS affects 1 in 5 Indian women.",
            channel: "Gynaecology clinics, women's health influencers, SHG groups.",
        },
        {
            name: "Laxmi Bachhon Ka Atta",
            hindi: "लक्ष्मी बच्चों का आटा",
            tier: "Kids Growth Atta",
            tierClass: "bg-orange-100 text-orange-800",
            icon: "👦",
            grains: "Wheat 35%, Ragi 25%, Moong dal 20%, Bajra 10%, Amaranth 10%",
            price: "₹80–95",
            sizes: "500g / 1kg / 2kg",
            insight: "Mild taste, high protein, age-safe. No whole seeds.",
            channel: "Pediatric clinics, mother-baby groups, WhatsApp mommy communities.",
        },
        {
            name: "Laxmi Garbhavati Atta",
            hindi: "लक्ष्मी गर्भावती आटा",
            tier: "Pregnancy / Maternal",
            tierClass: "bg-teal-100 text-teal-800",
            icon: "🤱",
            grains: "Wheat 30%, Ragi 20%, Bajra 20%, Masoor 15%, Moong 10%, Amaranth 5%",
            price: "₹95–115",
            sizes: "500g / 1kg",
            insight: "Iron + folate critical during pregnancy. Only safe-for-trimester blend.",
            channel: "OB-GYN referrals, maternity clinics, mother-baby WhatsApp groups.",
        },
        {
            name: "Laxmi Protein Atta",
            hindi: "लक्ष्मी प्रोटीन आटा",
            tier: "Sports / High-Protein",
            tierClass: "bg-red-100 text-red-800",
            icon: "🏋️‍♂️",
            grains: "Wheat 40%, Chickpea 20%, Moong dal 15%, Quinoa 15%, Soy flour 10%",
            price: "₹110–135",
            sizes: "500g / 1kg",
            insight: "18–22g protein/100g. Targets India's growing fitness & gym market.",
            channel: "Gyms, yoga centers, sports nutrition influencers, D2C online.",
        },
        {
            name: "Laxmi Immunity Atta",
            hindi: "लक्ष्मी इम्युनिटी आटा",
            tier: "Immunity Booster",
            tierClass: "bg-cyan-100 text-cyan-800",
            icon: "🛡️",
            grains: "Bajra 20%, Amaranth 20%, Buckwheat 15%, Oats 15%, Wheat 15%, Barley 10%, Moringa 5%",
            price: "₹100–120",
            sizes: "500g / 1kg",
            insight: "Post-COVID health consciousness. Moringa, rutin, beta-glucans in one blend.",
            channel: "Health stores, online D2C, corporate wellness programs.",
        },
    ],
};

const STRATEGY_STYLING = [
    { num: "1", color: "bg-emerald-100 text-emerald-800" },
    { num: "2", color: "bg-blue-100 text-blue-800" },
    { num: "3", color: "bg-amber-100 text-amber-800" },
    { num: "4", color: "bg-rose-100 text-rose-800" },
];

interface Product {
    name: string;
    hindi: string;
    tier: string;
    tierClass: string;
    icon: string;
    grains: string;
    price: string;
    sizes: string;
    insight: string;
    channel: string;
}

interface Strategy {
    title: string;
    body: string;
}

export default function ProductLineStrategy() {
    const reveal = useReveal();
    const { language, t } = useLanguage();
    const [activePhase, setActivePhase] = useState<"Phase1" | "Phase2">("Phase1");
    const [activeIndex, setActiveIndex] = useState(0);

    const activeProduct: Product = PORTFOLIO[activePhase][activeIndex];
    const strategyData: Strategy[] = t.productStrategy.strategies;

    return (
        <section className="bg-ivory py-24 border-t border-wheat/10 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-wheat/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
            
            <div className="max-w-7xl mx-auto px-6 relative z-10">
                <div
                    ref={reveal.ref}
                    className={`text-center space-y-4 mb-16 reveal reveal-up ${
                        reveal.isVisible ? "visible" : ""
                    }`}
                >
                    <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                        {t.productStrategy.subtitle}
                    </span>
                    <h2 className="text-3xl md:text-5xl text-dark-brown">
                        {t.productStrategy.title}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
                        {t.productStrategy.description}
                    </p>
                </div>

                {/* Phase Main Navigation */}
                <div className="flex justify-center mb-10">
                    <div className="bg-white/60 backdrop-blur-sm p-1.5 rounded-full border border-wheat/20 flex gap-2 w-full max-w-sm shrink-0">
                        <button
                            onClick={() => {
                                setActivePhase("Phase1");
                                setActiveIndex(0);
                            }}
                            className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activePhase === "Phase1"
                                    ? "bg-dark-brown text-ivory shadow-premium"
                                    : "text-muted hover:text-dark-brown"
                            }`}
                        >
                            {t.productStrategy.phase1}
                        </button>
                        <button
                            onClick={() => {
                                setActivePhase("Phase2");
                                setActiveIndex(0);
                            }}
                            className={`flex-1 py-3 px-6 rounded-full text-sm font-semibold transition-all duration-300 ${
                                activePhase === "Phase2"
                                    ? "bg-dark-brown text-ivory shadow-premium"
                                    : "text-muted hover:text-dark-brown"
                            }`}
                        >
                            {t.productStrategy.phase2}
                        </button>
                    </div>
                </div>

                <div className="flex flex-col xl:flex-row gap-12">
                    {/* Left Side: Chips Selection */}
                    <div className="xl:w-1/3">
                        <h4 className="text-xs font-bold text-dark-brown uppercase tracking-widest mb-4">
                            {t.productStrategy.selectProduct}
                        </h4>
                        <div className="flex flex-row xl:flex-col gap-3 overflow-x-auto xl:overflow-y-auto pb-4 xl:pb-0 hide-scrollbar w-full xl:max-h-[500px]">
                            {PORTFOLIO[activePhase].map((p, i) => (
                                <button
                                    key={p.name}
                                    onClick={() => setActiveIndex(i)}
                                    className={`flex items-start gap-3 p-4 rounded-2xl w-64 xl:w-full shrink-0 text-left border transition-all duration-300 ${
                                        activeIndex === i
                                            ? "bg-white border-dark-brown/20 shadow-[0_8px_30px_rgb(0,0,0,0.06)] scale-[1.02]"
                                            : "bg-white/40 border-wheat/10 hover:bg-white hover:border-wheat/30"
                                    }`}
                                >
                                    <div className="text-3xl mt-1">{p.icon}</div>
                                    <div>
                                        <h5 className="font-semibold text-dark-brown text-sm">
                                            {language === 'hi' ? p.hindi : p.name}
                                        </h5>
                                        <div className="text-xs text-muted mb-2">
                                            {language === 'hi' ? p.name : p.hindi}
                                        </div>
                                        <span
                                            className={`text-[10px] font-bold px-2.5 py-1 rounded-md uppercase tracking-wide ${p.tierClass}`}
                                        >
                                            {p.tier}
                                        </span>
                                    </div>
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Right Side: Detailed Card */}
                    <div className="xl:w-2/3">
                        <div className="bg-white rounded-4xl p-8 border border-wheat/10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] h-full flex flex-col">
                            {/* Card Header */}
                            <div className="flex flex-col md:flex-row md:items-start justify-between gap-6 pb-6 border-b border-wheat/10 mb-6">
                                <div>
                                    <div className="flex items-center gap-3 mb-2">
                                        <span className="text-4xl">{activeProduct.icon}</span>
                                        <h3 className="text-2xl font-bold text-dark-brown">
                                            {language === 'hi' ? activeProduct.hindi : activeProduct.name}
                                        </h3>
                                    </div>
                                    <p className="text-muted text-sm ml-14">
                                        {language === 'hi' ? activeProduct.name : activeProduct.hindi} • {activeProduct.tier}
                                    </p>
                                </div>
                                
                                <div className="md:text-right bg-wheat/5 p-4 rounded-xl border border-wheat/10 shrink-0">
                                    <p className="text-[10px] uppercase tracking-widest text-muted mb-1">{t.productStrategy.retailPrice}</p>
                                    <p className="text-2xl font-bold text-dark-brown">
                                        {activeProduct.price} <span className="text-sm font-medium text-muted">/kg</span>
                                    </p>
                                </div>
                            </div>

                            {/* Card Body - Features */}
                            <div className="space-y-6">
                                <div>
                                    <h4 className="text-[11px] font-bold text-dark-brown uppercase tracking-widest mb-2 flex items-center gap-2">
                                        <span className="w-1.5 h-1.5 rounded-full bg-wheat"></span>
                                        {t.productStrategy.grainComposition}
                                    </h4>
                                    <p className="text-sm text-dark-brown/80 font-medium leading-relaxed bg-wheat/5 p-4 rounded-xl border border-wheat/10">
                                        {activeProduct.grains}
                                    </p>
                                </div>

                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <h4 className="text-[11px] font-bold text-dark-brown uppercase tracking-widest mb-2 flex items-center gap-2">
                                            <span className="w-1.5 h-1.5 rounded-full bg-accent-green"></span>
                                            {t.productStrategy.availableSizes}
                                        </h4>
                                        <p className="text-sm text-muted bg-white border border-wheat/10 p-3 rounded-xl">
                                            {activeProduct.sizes}
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Insights Area */}
                            <div className="mt-8 space-y-4 pt-6 border-t border-wheat/10">
                                <div className="flex gap-4 p-5 rounded-2xl bg-wheat/10 border-l-4 border-wheat">
                                    <div className="text-wheat text-xl">💡</div>
                                    <div>
                                        <h5 className="text-xs font-bold text-dark-brown uppercase tracking-wider mb-1">
                                            {t.productStrategy.whyThisSells}
                                        </h5>
                                        <p className="text-sm text-dark-brown/90 leading-relaxed">
                                            {activeProduct.insight}
                                        </p>
                                    </div>
                                </div>
                                <div className="flex gap-4 p-5 rounded-2xl bg-dark-brown/5 border-l-4 border-dark-brown">
                                    <div className="text-dark-brown text-xl">🎯</div>
                                    <div>
                                        <h5 className="text-xs font-bold text-dark-brown uppercase tracking-wider mb-1">
                                            {t.productStrategy.channelFocus}
                                        </h5>
                                        <p className="text-sm text-dark-brown/90 leading-relaxed">
                                            {activeProduct.channel}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>

                {/* Strategy Priorities row */}
                <div className="mt-20 pt-16 border-t border-wheat/10">
                    <div className="text-center mb-10">
                        <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-[10px]">
                            {t.productStrategy.execution}
                        </span>
                        <h3 className="text-2xl text-dark-brown mt-2">{t.productStrategy.goToMarket}</h3>
                    </div>
                    
                    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {strategyData.map((s: Strategy, i: number) => (
                            <div key={i} className="bg-white p-6 rounded-2xl border border-wheat/10 hover:-translate-y-1 transition-transform duration-300">
                                <div className={`w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold mb-4 ${STRATEGY_STYLING[i].color}`}>
                                    {STRATEGY_STYLING[i].num}
                                </div>
                                <h5 className="text-sm font-bold text-dark-brown mb-2">{s.title}</h5>
                                <p className="text-xs text-muted leading-relaxed">
                                    {s.body}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>

            </div>

            <style jsx>{`
                .hide-scrollbar::-webkit-scrollbar {
                    display: none;
                }
                .hide-scrollbar {
                    -ms-overflow-style: none; /* IE and Edge */
                    scrollbar-width: none; /* Firefox */
                }
            `}</style>
        </section>
    );
}
