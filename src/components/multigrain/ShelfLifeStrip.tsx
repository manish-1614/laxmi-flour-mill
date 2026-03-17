"use client";

import { Clock, Package, Snowflake, Wind } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Fact {
    icon: any;
    value: string;
    label: string;
    detail: string;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    facts: Fact[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Freshness Guaranteed",
        title1: "How Long Does It",
        title2: "Stay Fresh?",
        desc: "Store in an airtight container in a cool, dry place. Refrigerate for extended freshness.",
        facts: [
            { icon: Clock, value: "Same Day", label: "Milled Fresh", detail: "No warehouse stock" },
            { icon: Wind, value: "10–15 Days", label: "Unpackaged", detail: "Use quickly for best taste" },
            { icon: Package, value: "2–4 Months", label: "Vacuum-Packed", detail: "Airtight sealed pouch" },
            { icon: Snowflake, value: "5–6 Months", label: "Refrigerated", detail: "For maximum freshness" },
        ]
    },
    hi: {
        badge: "ताजगी की गारंटी",
        title1: "यह कितने समय तक",
        title2: "ताज़ा रहता है?",
        desc: "ठंडी, सूखी जगह पर एयरटाइट डिब्बे में रखें। लंबे समय तक ताजगी के लिए रेफ्रिजरेट करें।",
        facts: [
            { icon: Clock, value: "उसी दिन", label: "ताज़ा पिसा", detail: "कोई गोदाम स्टॉक नहीं" },
            { icon: Wind, value: "10–15 दिन", label: "खुला हुआ", detail: "बेहतरीन स्वाद के लिए जल्दी इस्तेमाल करें" },
            { icon: Package, value: "2–4 महीने", label: "वैक्यूम-पैक्ड", detail: "हवा-बन्द सीलबंद पाउच" },
            { icon: Snowflake, value: "5–6 महीने", label: "फ्रिज में", detail: "अधिकतम ताजगी के लिए" },
        ]
    }
};

export default function ShelfLifeStrip() {
    const reveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    return (
        <section className="py-20 bg-white/60">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={reveal.ref}
                    className={`reveal reveal-up ${reveal.isVisible ? "visible" : ""}`}
                >
                    <div className="text-center mb-12">
                        <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                            {t.badge}
                        </span>
                        <h3 className="text-3xl md:text-4xl text-dark-brown mt-3">
                            {t.title1}
                            <span className="italic text-wheat"> {t.title2}</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {t.facts.map((fact: Fact, index: number) => (
                            <div
                                key={fact.label}
                                className="bg-ivory border border-wheat/10 rounded-3xl p-6 text-center hover:border-wheat/30 hover:shadow-soft transition-all duration-300"
                                style={{ transitionDelay: `${index * 80}ms` }}
                            >
                                <div className="w-12 h-12 bg-wheat/10 rounded-2xl flex items-center justify-center mx-auto mb-4">
                                    <fact.icon className="w-5 h-5 text-wheat" />
                                </div>
                                <p className="text-2xl font-bold text-dark-brown leading-tight">
                                    {fact.value}
                                </p>
                                <p className="text-xs font-semibold text-dark-brown mt-1">
                                    {fact.label}
                                </p>
                                <p className="text-[10px] text-muted mt-1">{fact.detail}</p>
                            </div>
                        ))}
                    </div>

                    <p className="text-center text-sm text-muted mt-8 max-w-xl mx-auto leading-relaxed">
                        {t.desc}
                    </p>
                </div>
            </div>
        </section>
    );
}
