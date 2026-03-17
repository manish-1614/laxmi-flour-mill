"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const translations = {
    en: [
        { icon: "🌾", text: "You Choose the Grain" },
        { icon: "⚙️", text: "Live Stone Grinding" },
        { icon: "🧪", text: "Chemical-Free" },
        { icon: "🏡", text: "Local Family Store" },
        { icon: "🛍️", text: "Store Pickup" },
    ],
    hi: [
        { icon: "🌾", text: "आप अनाज चुनें" },
        { icon: "⚙️", text: "लाइव पत्थर की पिसाई" },
        { icon: "🧪", text: "रसायन मुक्त" },
        { icon: "🏡", text: "स्थानीय पारिवारिक स्टोर" },
        { icon: "🛍️", text: "स्टोर से लें" },
    ]
};

export default function TrustStrip() {
    const { ref, isVisible } = useReveal();
    const { language } = useLanguage();
    const items = translations[language];

    return (
        <section className="bg-wheat/5 border-y border-wheat/10 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div ref={ref} className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
                    {items.map((item, index) => (
                        <div
                            key={index}
                            className={`flex items-center gap-3 group reveal reveal-up ${isVisible ? 'visible' : ''}`}
                            style={{ transitionDelay: `${index * 100}ms` }}
                        >
                            <span className="text-xl group-hover:scale-125 transition-transform duration-300">
                                {item.icon}
                            </span>
                            <span className="text-[10px] md:text-sm font-semibold tracking-[0.15em] uppercase text-dark-brown/60">
                                {item.text}
                            </span>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
