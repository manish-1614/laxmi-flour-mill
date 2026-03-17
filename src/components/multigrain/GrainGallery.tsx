"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Grain {
    emoji: string;
    name: string;
    tagline: string;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    grains: Grain[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "What Goes In",
        title1: "15+ Premium Grains.",
        title2: "One Perfect Blend.",
        desc: "Every grain is sourced for its nutritional purpose. Nothing is added randomly. Each ingredient earns its place in the blend.",
        grains: [
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
        ]
    },
    hi: {
        badge: "क्या शामिल है",
        title1: "15+ प्रीमियम अनाज।",
        title2: "एक परफेक्ट ब्लेंड।",
        desc: "हर अनाज को उसके पोषण के उद्देश्य से चुना गया है। कुछ भी यादृच्छिक रूप से नहीं जोड़ा जाता। प्रत्येक सामग्री ब्लेंड में अपना स्थान अर्जित करती है।",
        grains: [
            { emoji: "🌾", name: "बंसी गेहूं", tagline: "सुनहरा आधार" },
            { emoji: "🌿", name: "ज्वार", tagline: "रक्त शर्करा नियंत्रण" },
            { emoji: "🟤", name: "बाजरा", tagline: "लौह और जिंक से भरपूर" },
            { emoji: "🔴", name: "रागी", tagline: "उच्चतम पौधों का कैल्शियम" },
            { emoji: "🌰", name: "जौ", tagline: "हृदय और कोलेस्ट्रॉल" },
            { emoji: "🥣", name: "ओट्स", tagline: "एलडीएल में कमी" },
            { emoji: "🫘", name: "चना", tagline: "संपूर्ण प्रोटीन" },
            { emoji: "🌱", name: "मूंग", tagline: "आसानी से पचने योग्य" },
            { emoji: "🤎", name: "अलसी", tagline: "ओमेगा-3 फैटी एसिड" },
            { emoji: "🫐", name: "चिया के बीज", tagline: "तृप्ति और खनिज" },
            { emoji: "⚪", name: "तिल", tagline: "हड्डी बनाने वाला जिंक" },
            { emoji: "🌼", name: "क्विनोआ", tagline: "सभी 9 अमीनो एसिड" },
            { emoji: "🌿", name: "राजगिरा", tagline: "रोग प्रतिरोधक क्षमता और खनिज" },
            { emoji: "🟫", name: "कुट्टू", tagline: "सूजन कम करता है" },
            { emoji: "🌱", name: "कंगनी", tagline: "प्राचीन ग्लूटेन-मुक्त अनाज" },
        ]
    }
};

export default function GrainGallery() {
    const headerReveal = useReveal();
    const gridReveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    return (
        <section id="grains" className="max-w-7xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    {t.badge}
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    {t.title1}
                    <span className="block italic text-wheat">{t.title2}</span>
                </h2>
                <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div
                ref={gridReveal.ref}
                className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 gap-4"
            >
                {t.grains.map((grain: Grain, index: number) => (
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
