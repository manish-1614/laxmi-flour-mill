"use client";

import { useState, useEffect } from "react";
import { useReveal } from "@/hooks/useReveal";
import HealthIssuesModal from "./HealthIssuesModal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Benefit {
    emoji: string;
    tag: string;
    title: string;
    description: string;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    target: string;
    disclaimer: string;
    benefits: Benefit[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Science-Backed Nutrition",
        title1: "Crafted for",
        title2: " Your Wellbeing.",
        desc: "Our blends are formulated based on research from NIN Hyderabad, ICMR clinical studies, and traditional Ayurvedic grain wisdom. Every roti does more than just fill you up.",
        target: "Target Specific Health Issues",
        disclaimer: "Medical disclaimer: These are nutritional food products, not medicine. Consult your physician before dietary changes if you have a chronic condition.",
        benefits: [
            {
                emoji: "🩺",
                tag: "Low GI",
                title: "Diabetic-Friendly",
                description: "Lowers post-meal blood glucose spikes by 25–40%. Barley's beta-glucan slows glucose absorption, and fenugreek's 4-hydroxyisoleucine naturally stimulates insulin secretion.",
            },
            {
                emoji: "❤️",
                tag: "Cholesterol Support",
                title: "Heart Health",
                description: "Oat beta-glucan reduces LDL cholesterol by up to 10%. Flaxseeds provide plant Omega-3 to reduce inflammation and arterial stiffness, while ragi's polyphenols help lower blood pressure.",
            },
            {
                emoji: "⚖️",
                tag: "Satiety & Metabolism",
                title: "Weight Management",
                description: "High dietary fibre increases satiety, reducing total caloric intake per meal. Chia and flaxseeds expand in the stomach — creating fullness with fewer calories.",
            },
            {
                emoji: "🦴",
                tag: "Calcium-Rich",
                title: "Bone Health",
                description: "Ragi provides 344mg calcium per 100g — more than milk per gram. Particularly beneficial for post-menopausal women, elderly, and lactose-intolerant individuals.",
            },
            {
                emoji: "🛡️",
                tag: "Antioxidant-Rich",
                title: "Immunity Booster",
                description: "Bajra's zinc, amaranth's squalene, and buckwheat's rutin activate macrophages and natural killer cells. Moringa-enhanced blends add Vitamins A and C for powerful immune defence.",
            },
            {
                emoji: "🧒",
                tag: "Growth & Focus",
                title: "Children's Growth",
                description: "Ragi for bone development, quinoa's complete protein for muscles, bajra's iron for cognitive development and prevention of childhood anaemia. Lower GI prevents energy crashes at school.",
            },
        ]
    },
    hi: {
        badge: "विज्ञान-समर्थित पोषण",
        title1: "आपके कल्यान के लिए",
        title2: " तैयार किया गया।",
        desc: "हमारे ब्लेंड NIN हैदराबाद, ICMR नैदानिक ​​अध्ययनों और पारंपरिक आयुर्वेदिक अनाज ज्ञान के शोध के आधार पर तैयार किए गए हैं। हर रोटी सिर्फ आपका पेट भरने से कहीं अधिक काम करती है।",
        target: "विशिष्ट स्वास्थ्य समस्याओं को लक्षित करें",
        disclaimer: "चिकित्सा अस्वीकरण: ये पोषण संबंधी खाद्य उत्पाद हैं, दवा नहीं। यदि आपको कोई पुरानी बीमारी है तो आहार में बदलाव से पहले अपने चिकित्सक से परामर्श लें।",
        benefits: [
            {
                emoji: "🩺",
                tag: "कम GI",
                title: "मधुमेह के अनुकूल",
                description: "भोजन के बाद रक्त शर्करा में वृद्धि को 25-40% तक कम करता है। जौ का बीटा-ग्लूकेन ग्लूकोज अवशोषण को धीमा कर देता है, और मेथी का 4-हाइड्रॉक्सीआइसोल्यूसीन स्वाभाविक रूप से इंसुलिन स्राव को उत्तेजित करता है।",
            },
            {
                emoji: "❤️",
                tag: "कोलेस्ट्रॉल नियंत्रण",
                title: "हृदय स्वास्थ्य",
                description: "ओट बीटा-ग्लूकेन एलडीएल कोलेस्ट्रॉल को 10% तक कम करता है। अलसी सूजन और धमनी कठोरता को कम करने के लिए पौधे का ओमेगा-3 प्रदान करते हैं, जबकि रागी के पॉलीफेनोल्स रक्तचाप को कम करने में मदद करते हैं।",
            },
            {
                emoji: "⚖️",
                tag: "तृप्ति और चयापचय",
                title: "वजन प्रबंधन",
                description: "उच्च आहार फाइबर तृप्ति बढ़ाता है, प्रति भोजन कुल कैलोरी की मात्रा कम करता है। चिया और अलसी पेट में फूलते हैं - कम कैलोरी के साथ पेट भरा होने का एहसास कराते हैं।",
            },
            {
                emoji: "🦴",
                tag: "कैल्शियम युक्त",
                title: "हड्डियों का स्वास्थ्य",
                description: "रागी प्रति 100 ग्राम में 344 मिलीग्राम कैल्शियम प्रदान करता है - प्रति ग्राम दूध से भी अधिक। रजोनिवृत्ति के बाद की महिलाओं, बुजुर्गों और लैक्टोज-असहिष्णु व्यक्तियों के लिए विशेष रूप से फायदेमंद।",
            },
            {
                emoji: "🛡️",
                tag: "एंटीऑक्सीडेंट युक्त",
                title: "रोग प्रतिरोधक क्षमता बूस्टर",
                description: "बाजरा का जिंक, ऐमारैंथ का स्क्वालेन और एक प्रकार का अनाज का रुटिन मैक्रोफेज और प्राकृतिक मारक कोशिकाओं को सक्रिय करता है। मोरिंगा युक्त ब्लेंड शक्तिशाली प्रतिरक्षा रक्षा के लिए विटामिन A और C जोड़ते हैं।",
            },
            {
                emoji: "🧒",
                tag: "विकास और फोकस",
                title: "बच्चों का विकास",
                description: "हड्डियों के विकास के लिए रागी, मांसपेशियों के लिए क्विनोआ का संपूर्ण प्रोटीन, संज्ञानात्मक विकास और बचपन के एनीमिया की रोकथाम के लिए बाजरा का आयरन। कम GI स्कूल में ऊर्जा क्रैश को रोकता है।",
            },
        ]
    }
};

export default function HealthBenefits() {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const headerReveal = useReveal();
    const gridReveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    useEffect(() => {
        const handleOpenModal = () => setIsModalOpen(true);
        window.addEventListener('openHealthIssuesModal', handleOpenModal);
        return () => window.removeEventListener('openHealthIssuesModal', handleOpenModal);
    }, []);

    return (
        <section id="benefits" className="max-w-7xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-16 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    {t.badge}
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    {t.title1}
                    <span className="italic text-wheat">{t.title2}</span>
                </h2>
                <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
                    {t.desc}
                </p>
            </div>

            <div
                ref={gridReveal.ref}
                className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            >
                {t.benefits.map((benefit: Benefit, index: number) => (
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
                    {t.target}
                    <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </button>
            </div>

            <p className="text-center text-[10px] text-muted/60 mt-6 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                {t.disclaimer}
            </p>

            <HealthIssuesModal 
                isOpen={isModalOpen} 
                onClose={() => setIsModalOpen(false)} 
            />
        </section>
    );
}
