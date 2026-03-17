"use client";

import { MessageSquare, PhoneCall } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const translations = {
    en: {
        title1: "Crafted with Care.",
        title2: "Served with Integrity.",
        desc: "Experience the difference of freshly ground, chemical-free flour. Visit our local store or place your order directly via WhatsApp.",
        wa: "WhatsApp Order",
        call: "Call Now",
        milled: "Freshly Milled for Store Pickup"
    },
    hi: {
        title1: "देखभाल के साथ निर्मित।",
        title2: "ईमानदारी के साथ सेवा।",
        desc: "ताज़ा पिसे हुए रसायन-मुक्त आटे के अंतर का अनुभव करें। हमारे स्टोर पर आएं या सीधे WhatsApp के माध्यम से अपना ऑर्डर दें।",
        wa: "WhatsApp ऑर्डर",
        call: "कॉल करें",
        milled: "स्टोर से लेने के लिए ताज़ा पिसा हुआ"
    }
};

export default function CTA() {
    const titleReveal = useReveal();
    const buttonReveal = useReveal();
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section className="bg-dark-brown py-32 text-center relative overflow-hidden">
            {/* Decorative grain texture overlay */}
            <div className="absolute inset-0 opacity-5 pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

            <div className="max-w-4xl mx-auto px-6 space-y-12 relative z-10">
                <div
                    ref={titleReveal.ref}
                    className={`space-y-6 reveal reveal-scale ${titleReveal.isVisible ? 'visible' : ''}`}
                >
                    <h2 className="text-4xl md:text-6xl text-white leading-tight">
                        {t.title1} <br />
                        <span className="italic text-wheat">{t.title2}</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        {t.desc}
                    </p>
                </div>

                <div
                    ref={buttonReveal.ref}
                    className={`flex flex-wrap justify-center gap-6 reveal reveal-up ${buttonReveal.isVisible ? 'visible' : ''}`}
                >
                    <a 
                        href="https://wa.me/918210134128"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-premium group"
                    >
                        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        {t.wa}
                    </a>

                    <a 
                        href="tel:+918210134128"
                        className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-white hover:text-dark-brown transition-all duration-300 group"
                    >
                        <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        {t.call}
                    </a>
                </div>

                <p className="text-white/40 text-xs uppercase tracking-[0.3em]">
                    {t.milled}
                </p>
            </div>

            {/* Background Decorative */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-wheat/10 rounded-full blur-3xl" />
        </section>
    );
}
