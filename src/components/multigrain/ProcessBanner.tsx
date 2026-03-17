"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Pillar {
    emoji: string;
    title: string;
    description: string;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    pillars: Pillar[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Our Process",
        title1: "Why Fresh-Milled",
        title2: "Changes Everything.",
        desc: "Packaged atta sits in warehouses for months. Ours is milled the same day. That difference in freshness is the difference you taste in every roti.",
        pillars: [
            {
                emoji: "🪨",
                title: "Stone Cold-Milled",
                description: "Milled below 35°C to prevent heat-induced oxidation. Natural oils, volatile flavour compounds, and vitamins stay intact — as nature intended.",
            },
            {
                emoji: "📅",
                title: "Same-Day Freshness",
                description: "We mill your atta on the day you order. No pre-ground stock sitting on shelves or in warehouses for weeks.",
            },
            {
                emoji: "⚗️",
                title: "Zero Additives",
                description: "No preservatives, no bleaching agents, no flow conditioners. Only the grains you choose — nothing more, nothing less.",
            },
            {
                emoji: "⚖️",
                title: "Precision Blending",
                description: "Grain ratios are measured exactly per batch. Every order is consistent — same taste, same texture, same nutrition, every time.",
            },
        ]
    },
    hi: {
        badge: "हमारी प्रक्रिया",
        title1: "ताज़ा पिसा हुआ",
        title2: "क्यों है अलग।",
        desc: "पैकेट का आटा गोदामों में महीनों तक रहता है। हमारा आटा उसी दिन पीसा जाता है। ताजगी में यह अंतर वह है जो आप हर रोटी में चखते हैं।",
        pillars: [
            {
                emoji: "🪨",
                title: "पत्थर की ठंडी-पिसाई",
                description: "गर्मी से प्रेरित ऑक्सीकरण को रोकने के लिए 35°C से नीचे पीसा जाता है। प्राकृतिक वाष्पशील स्वाद यौगिक और विटामिन बरकरार रहते हैं — जैसा प्रकृति ने चाहा था।",
            },
            {
                emoji: "📅",
                title: "उसी दिन की ताजगी",
                description: "हम आपका आटा उसी दिन पीसते हैं जिस दिन आप ऑर्डर करते हैं। गोदामों में हफ्तों तक कोई पहले से पिसा हुआ स्टॉक नहीं रहता।",
            },
            {
                emoji: "⚗️",
                title: "शून्य योजक",
                description: "कोई प्रिजर्वेटिव्स नहीं, कोई ब्लीचिंग एजेंट नहीं। केवल आपके चुने हुए अनाज — न कुछ अधिक, न कुछ कम।",
            },
            {
                emoji: "⚖️",
                title: "सटीक ब्लेंडिंग",
                description: "प्रत्येक बैच के लिए अनाज के अनुपात को सटीक रूप से मापा जाता है। हर ऑर्डर एक समान है — वही स्वाद, वही बनावट, हर बार।",
            },
        ]
    }
};

export default function ProcessBanner() {
    const headerReveal = useReveal();
    const gridReveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

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
                        {t.badge}
                    </span>
                    <h2 className="text-4xl md:text-5xl text-white">
                        {t.title1}
                        <span className="italic text-wheat"> {t.title2}</span>
                    </h2>
                    <p className="text-white/50 max-w-xl mx-auto text-sm leading-relaxed">
                        {t.desc}
                    </p>
                </div>

                <div
                    ref={gridReveal.ref}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {t.pillars.map((pillar: Pillar, index: number) => (
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
