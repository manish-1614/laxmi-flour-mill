"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";

const CONDITIONS = [
    {
        name: "Diabetic",
        icon: "🩸",
        tagline: "Low glycemic index — controls post-meal glucose spikes",
        grains: [
            { name: "Barley (Jau)", pct: 25, color: "bg-[#3266ad]" },
            { name: "Jowar", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Bajra", pct: 15, color: "bg-[#c97a2f]" },
            { name: "Whole Wheat", pct: 20, color: "bg-[#e0b857]" },
            { name: "Buckwheat (Kuttu)", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Fenugreek seeds", pct: 5, color: "bg-[#c9602f]" },
            { name: "Oats", pct: 5, color: "bg-[#7aab8a]" },
        ],
        gi: "Low (~38–45)",
        protein: "11–13g/100g",
        avoid: ["White rice flour", "Refined wheat / maida"],
        tip: "Barley's beta-glucan + fenugreek's 4-hydroxyisoleucine together produce the strongest blood sugar-lowering effect.",
    },
    {
        name: "Cardiac",
        icon: "❤️",
        tagline: "Cholesterol-lowering fibre and Omega-3 blend",
        grains: [
            { name: "Oats", pct: 25, color: "bg-[#3266ad]" },
            { name: "Barley (Jau)", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Whole Wheat", pct: 20, color: "bg-[#e0b857]" },
            { name: "Jowar", pct: 15, color: "bg-[#c97a2f]" },
            { name: "Flaxseeds (Alsi)", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Psyllium husk", pct: 5, color: "bg-[#c9602f]" },
            { name: "Ragi", pct: 5, color: "bg-[#7aab8a]" },
        ],
        gi: "Low (~42–50)",
        protein: "10–12g/100g",
        avoid: ["Coconut flour (high saturated fat)", "Full-fat soy"],
        tip: "Oat beta-glucan reduces LDL by up to 10%. Psyllium binds bile acids, forcing cholesterol metabolism.",
    },
    {
        name: "Weight Loss",
        icon: "⚖️",
        tagline: "High satiety — maximum fibre and thermogenic protein",
        grains: [
            { name: "Jowar", pct: 25, color: "bg-[#3266ad]" },
            { name: "Barley (Jau)", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Ragi", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Whole Wheat", pct: 15, color: "bg-[#e0b857]" },
            { name: "Flaxseeds (Alsi)", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Chia seeds", pct: 5, color: "bg-[#c9602f]" },
            { name: "Moong dal flour", pct: 5, color: "bg-[#7aab8a]" },
        ],
        gi: "Low (~40–48)",
        protein: "12–15g/100g",
        avoid: ["Maida", "High-starch refined grains"],
        tip: "Chia and flax expand in the gut, creating fullness with minimal calories. Jowar has fewer calories than wheat per gram.",
    },
    {
        name: "Bone Health",
        icon: "🦴",
        tagline: "Highest plant calcium — ragi-dominant blend",
        grains: [
            { name: "Ragi", pct: 40, color: "bg-[#3266ad]" },
            { name: "Whole Wheat", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Amaranth (Rajgira)", pct: 15, color: "bg-[#c97a2f]" },
            { name: "Sesame seeds (Til)", pct: 10, color: "bg-[#e0b857]" },
            { name: "Jowar", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Moringa powder", pct: 5, color: "bg-[#c9602f]" },
        ],
        gi: "Low-Medium (~50–58)",
        protein: "10–12g/100g",
        avoid: [
            "Excess soy flour (phytoestrogen disrupts calcium)",
            "Spinach in blend (oxalates)",
        ],
        tip: "Ragi contains 344mg calcium per 100g — more than milk per gram. Sesame adds zinc, a critical cofactor for bone-building enzymes.",
    },
    {
        name: "PCOS / Hormonal",
        icon: "🌸",
        tagline: "Hormone-balancing low-GI blend with phytoestrogen support",
        grains: [
            { name: "Jowar", pct: 25, color: "bg-[#3266ad]" },
            { name: "Ragi", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Barley (Jau)", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Quinoa", pct: 15, color: "bg-[#e0b857]" },
            { name: "Whole Wheat", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Flaxseeds (Alsi)", pct: 10, color: "bg-[#c9602f]" },
        ],
        gi: "Low (~42–48)",
        protein: "12–14g/100g",
        avoid: ["Refined wheat / maida", "White rice flour", "Excess soy"],
        tip: "Flaxseed lignans help balance estrogen. Low-GI grains reduce insulin resistance — a root cause of PCOS.",
    },
    {
        name: "Gluten-Free",
        icon: "🌿",
        tagline: "100% wheat-free for celiac and gluten-sensitive",
        grains: [
            { name: "Jowar", pct: 30, color: "bg-[#3266ad]" },
            { name: "Ragi", pct: 25, color: "bg-[#5a9e6f]" },
            { name: "Bajra", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Buckwheat (Kuttu)", pct: 15, color: "bg-[#e0b857]" },
            { name: "Amaranth (Rajgira)", pct: 10, color: "bg-[#7c6bbd]" },
        ],
        gi: "Low (~44–52)",
        protein: "11–13g/100g",
        avoid: ["ALL wheat", "Barley (hordein)", "Rye", "Unverified oats"],
        tip: "Add 1–2% psyllium husk to improve roti binding — millet rotis are prone to breaking without gluten.",
    },
    {
        name: "Anaemia",
        icon: "🔴",
        tagline: "Iron-dense blend to combat iron deficiency",
        grains: [
            { name: "Ragi", pct: 30, color: "bg-[#3266ad]" },
            { name: "Bajra", pct: 25, color: "bg-[#5a9e6f]" },
            { name: "Amaranth (Rajgira)", pct: 15, color: "bg-[#c97a2f]" },
            { name: "Whole Wheat", pct: 15, color: "bg-[#e0b857]" },
            { name: "Masoor dal flour", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Moringa powder", pct: 5, color: "bg-[#c9602f]" },
        ],
        gi: "Low-Medium (~48–55)",
        protein: "12–14g/100g",
        avoid: ["High-phytate un-soaked legumes in large amounts"],
        tip: "Pair this atta with a Vitamin C source (tomato, lemon) at the meal to enhance non-heme iron absorption by 2–3x.",
    },
    {
        name: "Kids Growth",
        icon: "👦",
        tagline: "Protein + calcium dense — safe for ages 2 and above",
        grains: [
            { name: "Whole Wheat", pct: 35, color: "bg-[#3266ad]" },
            { name: "Ragi", pct: 25, color: "bg-[#5a9e6f]" },
            { name: "Moong dal flour", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Bajra", pct: 10, color: "bg-[#e0b857]" },
            { name: "Amaranth (Rajgira)", pct: 10, color: "bg-[#7c6bbd]" },
        ],
        gi: "Medium (~52–58)",
        protein: "14–16g/100g",
        avoid: ["Raw whole seeds (choking risk for toddlers)", "Excess flaxseed"],
        tip: "Higher wheat ratio improves palatability for children. Moong is the most digestible legume flour — gentle on young stomachs.",
    },
    {
        name: "Pregnancy",
        icon: "🤱",
        tagline: "Folate and iron-rich maternal nutrition blend",
        grains: [
            { name: "Whole Wheat", pct: 30, color: "bg-[#3266ad]" },
            { name: "Ragi", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Bajra", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Masoor dal flour", pct: 15, color: "bg-[#e0b857]" },
            { name: "Moong dal flour", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Amaranth (Rajgira)", pct: 5, color: "bg-[#c9602f]" },
        ],
        gi: "Low-Medium (~48–54)",
        protein: "13–15g/100g",
        avoid: [
            "Fenugreek seeds (uterine stimulant in 1st trimester)",
            "Horse gram",
            "Raw flaxseeds in large quantities",
        ],
        tip: "Masoor and moong provide folate critical for neural tube development. Ragi's calcium supports fetal bone growth.",
    },
    {
        name: "Joint / Arthritis",
        icon: "🦵",
        tagline: "Anti-inflammatory omega-3 and polyphenol blend",
        grains: [
            { name: "Jowar", pct: 25, color: "bg-[#3266ad]" },
            { name: "Bajra", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Ragi", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Whole Wheat", pct: 15, color: "bg-[#e0b857]" },
            { name: "Flaxseeds (Alsi)", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Turmeric (Haldi)", pct: 5, color: "bg-[#c9602f]" },
            { name: "Oats", pct: 5, color: "bg-[#7aab8a]" },
        ],
        gi: "Low (~42–50)",
        protein: "11–13g/100g",
        avoid: ["Nightshade-related flours (corn in excess)", "Refined wheat"],
        tip: "Turmeric's curcumin at 3–5% of diet has clinically documented anti-inflammatory effects. Keep at max 5% in blend for palatability.",
    },
    {
        name: "Digestive / IBS",
        icon: "🫁",
        tagline: "Soluble fibre-dominant for gut motility and regularity",
        grains: [
            { name: "Oats", pct: 25, color: "bg-[#3266ad]" },
            { name: "Barley (Jau)", pct: 25, color: "bg-[#5a9e6f]" },
            { name: "Jowar", pct: 20, color: "bg-[#c97a2f]" },
            { name: "Whole Wheat", pct: 15, color: "bg-[#e0b857]" },
            { name: "Psyllium husk", pct: 10, color: "bg-[#7c6bbd]" },
            { name: "Flaxseeds (Alsi)", pct: 5, color: "bg-[#c9602f]" },
        ],
        gi: "Low (~44–50)",
        protein: "10–12g/100g",
        avoid: ["Maize/corn flour (aggravates IBS-D)", "Low-fibre polished grains"],
        tip: "Soluble fibre from oats and barley forms a gel in the gut that slows digestion and softens stool. Essential to drink adequate water.",
    },
    {
        name: "Immunity Booster",
        icon: "🛡️",
        tagline: "Antioxidant, zinc and beta-glucan rich blend",
        grains: [
            { name: "Bajra", pct: 20, color: "bg-[#3266ad]" },
            { name: "Amaranth (Rajgira)", pct: 20, color: "bg-[#5a9e6f]" },
            { name: "Buckwheat (Kuttu)", pct: 15, color: "bg-[#c97a2f]" },
            { name: "Oats", pct: 15, color: "bg-[#e0b857]" },
            { name: "Whole Wheat", pct: 15, color: "bg-[#7c6bbd]" },
            { name: "Barley (Jau)", pct: 10, color: "bg-[#c9602f]" },
            { name: "Moringa powder", pct: 5, color: "bg-[#7aab8a]" },
        ],
        gi: "Low (~44–52)",
        protein: "12–14g/100g",
        avoid: ["Refined wheat", "Low-nutrient fillers"],
        tip: "Beta-glucans from oats and barley directly activate macrophages and NK cells — the frontline of innate immunity.",
    },
];

export default function ConditionGrainRatios() {
    const reveal = useReveal();
    const [activeIndex, setActiveIndex] = useState(0);
    const [weightKg, setWeightKg] = useState<number | string>(1);

    const activeCondition = CONDITIONS[activeIndex];

    return (
        <section id="custom-blends" className="bg-white/60 py-24 border-t border-wheat/10">
            <div className="max-w-6xl mx-auto px-6">
                <div
                    ref={reveal.ref}
                    className={`text-center space-y-4 mb-12 reveal reveal-up ${
                        reveal.isVisible ? "visible" : ""
                    }`}
                >
                    <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                        Nutrition Science
                    </span>
                    <h2 className="text-3xl md:text-4xl text-dark-brown">
                        Custom Blends for Health Conditions.
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
                        Select a specific dietary need or condition to see the optimized
                        grain ratios and their scientifically-backed benefits.
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Chips / Tabs List */}
                    <div className="lg:w-1/3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 justify-start align-start overflow-x-auto pb-4 lg:pb-0 hide-scrollbar h-fit max-h-[550px] lg:overflow-y-auto">
                        {CONDITIONS.map((c, i) => (
                            <button
                                key={c.name}
                                onClick={() => setActiveIndex(i)}
                                className={`flex items-center gap-3 px-4 py-3 rounded-full lg:rounded-xl text-sm transition-all duration-300 whitespace-nowrap lg:whitespace-normal text-left ${
                                    activeIndex === i
                                        ? "bg-dark-brown text-ivory shadow-premium"
                                        : "bg-ivory text-dark-brown border border-wheat/20 hover:border-wheat/50 hover:bg-wheat/5"
                                }`}
                            >
                                <span className="text-xl">{c.icon}</span>
                                <span className="font-medium flex-1">{c.name}</span>
                            </button>
                        ))}
                    </div>

                    {/* Content Panel */}
                    <div className="lg:w-2/3">
                        <div className="bg-ivory rounded-3xl p-6 md:p-8 border border-wheat/20 shadow-sm transition-all duration-500 min-h-[500px] flex flex-col">
                            {/* Header */}
                            <div className="mb-8">
                                <h3 className="flex items-center gap-3 text-2xl md:text-3xl font-bold text-dark-brown mb-3">
                                    <span>{activeCondition.icon}</span>
                                    {activeCondition.name} Blend
                                </h3>
                                <p className="text-wheat text-sm md:text-base font-semibold italic">
                                    {activeCondition.tagline}
                                </p>
                            </div>

                            {/* Nutrition Stats */}
                            <div className="flex gap-4 md:gap-8 mb-8 pb-6 border-b border-wheat/10">
                                <div>
                                    <p className="text-[10px] text-muted uppercase tracking-widest mb-1">
                                        Glycemic Index
                                    </p>
                                    <p className="text-sm font-bold text-dark-brown">
                                        {activeCondition.gi}
                                    </p>
                                </div>
                                <div>
                                    <p className="text-[10px] text-muted uppercase tracking-widest mb-1">
                                        Protein Amount
                                    </p>
                                    <p className="text-sm font-bold text-dark-brown">
                                        {activeCondition.protein}
                                    </p>
                                </div>
                            </div>

                            {/* Grain Composition Table */}
                            <div className="mb-8 flex-1">
                                <div className="flex items-center justify-between mb-4">
                                    <p className="text-xs font-bold text-dark-brown uppercase tracking-wider">
                                        Grain Composition
                                    </p>
                                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-wheat/20 shadow-sm">
                                        <label htmlFor="weight" className="text-xs font-semibold text-muted">
                                            Total Wt (kg):
                                        </label>
                                        <input
                                            id="weight"
                                            type="number"
                                            min="0.1"
                                            step="0.1"
                                            value={weightKg}
                                            onChange={(e) => setWeightKg(e.target.value)}
                                            className="w-16 text-sm font-bold text-dark-brown outline-none bg-transparent"
                                        />
                                    </div>
                                </div>
                                <div className="bg-white rounded-xl border border-wheat/10 overflow-hidden text-sm">
                                    <table className="w-full text-left">
                                        <thead className="bg-wheat/10">
                                            <tr>
                                                <th className="px-4 py-3 font-semibold text-dark-brown">Grain</th>
                                                <th className="px-4 py-3 font-semibold text-dark-brown text-center">%</th>
                                                <th className="px-4 py-3 font-semibold text-dark-brown text-right">Weight (g)</th>
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-wheat/5">
                                            {activeCondition.grains.map((g) => {
                                                const weightInGrams =
                                                    (Number(weightKg) || 0) * 1000 * (g.pct / 100);
                                                return (
                                                    <tr key={g.name} className="hover:bg-wheat/5 transition-colors">
                                                        <td className="px-4 py-3 text-muted font-medium">
                                                            <div className="flex items-center gap-2">
                                                                <div className={`w-2 h-2 rounded-full ${g.color}`} />
                                                                {g.name}
                                                            </div>
                                                        </td>
                                                        <td className="px-4 py-3 text-dark-brown font-bold text-center border-l border-wheat/5">
                                                            {g.pct}%
                                                        </td>
                                                        <td className="px-4 py-3 text-accent-green font-bold text-right border-l border-wheat/5">
                                                            {weightInGrams > 0 ? weightInGrams.toFixed(0) : 0} g
                                                        </td>
                                                    </tr>
                                                );
                                            })}
                                        </tbody>
                                    </table>
                                </div>
                            </div>

                            {/* Avoid Section */}
                            {activeCondition.avoid.length > 0 && (
                                <div className="mb-6">
                                    <p className="text-[11px] font-bold text-dark-brown uppercase tracking-wider mb-2">
                                        Strictly Avoid
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCondition.avoid.map((a) => (
                                            <span
                                                key={a}
                                                className="px-3 py-1 bg-red-50 text-red-800 text-[10px] font-semibold rounded-full border border-red-100 uppercase tracking-wide"
                                            >
                                                ✕ {a}
                                            </span>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {/* Key Insight */}
                            <div className="bg-wheat/10 rounded-2xl p-5 border-l-4 border-wheat mt-auto">
                                <p className="text-sm text-dark-brown/90 leading-relaxed">
                                    <strong className="text-accent-green mr-2">
                                        Key Clinical Insight:
                                    </strong>
                                    {activeCondition.tip}
                                </p>
                            </div>
                        </div>
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
