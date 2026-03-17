"use client";

import { Leaf, Award, FlaskConical, Settings2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

const translations = {
    en: {
        title1: "Not Factory Atta.",
        title2: "This Is Real.",
        desc: "Crafted in small batches with heirloom techniques to bring the authentic taste of traditional Indian kitchens to your home.",
        features: [
            {
                title: "Stone-Ground Freshness",
                description: "Our traditional stone cold-milling process preserves the natural essence and volatile oils of the grain.",
                icon: <Settings2 className="w-6 h-6" />,
            },
            {
                title: "Nutrient Preservation",
                description: "Unlike high-speed factory mills, our slow process ensures vitamins and fibers remain intact.",
                icon: <Award className="w-6 h-6" />,
            },
            {
                title: "Custom Grain Blends",
                description: "Choose your grains and we'll grind them to your specific texture preference - coarse or fine.",
                icon: <Leaf className="w-6 h-6" />,
            },
            {
                title: "Zero Adulteration",
                description: "No preservatives, no fillers, no chemicals. Just 100% pure flour, exactly as nature intended.",
                icon: <FlaskConical className="w-6 h-6" />,
            },
        ]
    },
    hi: {
        title1: "कोई फैक्ट्री का आटा नहीं।",
        title2: "यह असली है।",
        desc: "पारंपरिक भारतीय रसोई के प्रामाणिक स्वाद को आपके घर तक लाने के लिए छोटी मात्रा में पारंपरिक तकनीकों के साथ तैयार किया गया।",
        features: [
            {
                title: "पत्थर से पिसी ताजगी",
                description: "हमारी पारंपरिक कोल्ड-मिलिंग प्रक्रिया अनाज के प्राकृतिक सार और वाष्पशील तेलों को संरक्षित रखती है।",
                icon: <Settings2 className="w-6 h-6" />,
            },
            {
                title: "पोषक तत्वों का संरक्षण",
                description: "हाई-स्पीड फैक्ट्री मिलों के विपरीत, हमारी धीमी प्रक्रिया सुनिश्चित करती है कि विटामिन और फाइबर बरकरार रहें।",
                icon: <Award className="w-6 h-6" />,
            },
            {
                title: "कस्टम अनाज ब्लेंड्स",
                description: "अपने अनाज चुनें और हम उन्हें आपकी पसंद के अनुसार - मोटा या महीन पीसेंगे।",
                icon: <Leaf className="w-6 h-6" />,
            },
            {
                title: "शून्य मिलावट",
                description: "कोई प्रिजर्वेटिव्स नहीं, कोई फिलर्स नहीं, रसायन मुक्त। बिल्कुल 100% शुद्ध आटा।",
                icon: <FlaskConical className="w-6 h-6" />,
            },
        ]
    }
};

export default function WhyChakki() {
    const headerReveal = useReveal();
    const gridReveal = useReveal();
    const { language } = useLanguage();
    const t = translations[language];

    return (
        <section id="process" className="max-w-7xl mx-auto px-6 py-32">
            <div ref={headerReveal.ref} className={`text-center space-y-4 mb-20 reveal reveal-up ${headerReveal.isVisible ? 'visible' : ''}`}>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    {t.title1} <span className="text-wheat italic">{t.title2}</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto">
                    {t.desc}
                </p>
            </div>

            <div ref={gridReveal.ref} className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
                {t.features.map((feature, index) => (
                    <div
                        key={index}
                        className={`bg-white p-10 rounded-4xl shadow-soft hover:shadow-premium transition-all duration-500 border border-wheat/5 group reveal reveal-up hover:-translate-y-2 ${gridReveal.isVisible ? 'visible' : ''}`}
                        style={{ transitionDelay: `${index * 100}ms` }}
                    >
                        <div className="w-14 h-14 bg-ivory rounded-2xl flex items-center justify-center mb-8 text-accent-green group-hover:bg-accent-green group-hover:text-white transition-colors duration-500">
                            {feature.icon}
                        </div>
                        <h3 className="text-xl font-bold text-dark-brown mb-4">{feature.title}</h3>
                        <p className="text-sm text-muted leading-relaxed">
                            {feature.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
