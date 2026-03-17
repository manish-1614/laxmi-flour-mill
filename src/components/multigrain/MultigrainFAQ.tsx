"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface FAQ {
    question: string;
    answer: string;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    disclaimer: string;
    faqs: FAQ[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Common Questions",
        title1: "Everything You",
        title2: "Need to Know.",
        disclaimer: "Medical disclaimer: These are nutritional food products, not medicine. Always consult your physician before dietary changes if you have a chronic condition.",
        faqs: [
            {
                question: "How long does multigrain atta last?",
                answer: "Freshly milled atta is best consumed within 10–15 days when stored unpackaged. In vacuum-sealed packaging, it stays fresh for 2–4 months. Refrigerated in an airtight container, shelf life extends to 5–6 months. Seed-enhanced blends (flax, chia) should be consumed sooner as omega-3 oils oxidise faster — ideally within 1–1.5 months even when vacuum-packed.",
            },
            {
                question: "How should I knead multigrain atta?",
                answer: "Use warm water instead of cold — this activates the binding properties of the grains and makes the dough softer. Multigrain atta absorbs more water than regular wheat atta, so add water gradually. For gluten-free blends (millet-only), add a pinch of psyllium husk (isabgol) to help the dough hold together. Let the dough rest for 10–15 minutes before rolling for best results.",
            },
            {
                question: "Is multigrain atta safe for diabetic patients?",
                answer: "Yes — our blends are formulated with low-glycemic grains. Studies from NIN Hyderabad confirm that adding millets like jowar and bajra reduces the glycemic index by 20–35% compared to plain wheat atta. Barley’s beta-glucan slows glucose absorption, and fenugreek seeds naturally stimulate insulin secretion. However, please consult your physician before making dietary changes if you are on medication.",
            },
            {
                question: "Who should avoid certain grains?",
                answer: "Celiac patients should avoid all wheat, barley, and oat-based blends — choose our Ancient Grains (gluten-free) blend instead. Kidney stone patients should limit ragi due to its oxalic acid content. Thyroid patients should avoid soy-heavy blends. Pregnant women should avoid excess fenugreek (methi) in early pregnancy. Those on blood thinners (Warfarin) should be cautious with high flaxseed/chia blends due to their mild anticoagulant effect. Always consult your doctor.",
            },
            {
                question: "Do you offer gluten-free options?",
                answer: "Yes. Our Ancient Grains Blend is 100% wheat-free and gluten-free, made with jowar (30%), bajra (25%), ragi (25%), and foxtail millet (20%). It is suitable for individuals with celiac disease or gluten sensitivity. We mill gluten-free blends separately to minimise cross-contamination risk.",
            },
            {
                question: "Can I customize my own grain blend?",
                answer: "We are building an online custom blend tool — coming soon. In the meantime, you can tell us your preferred grains and health goals via WhatsApp, and we’ll create a personalised blend milled fresh to your order. Custom blending is available at a small premium of ₹20–30 per kg over standard blends.",
            },
        ]
    },
    hi: {
        badge: "सामान्य प्रश्न",
        title1: "सब कुछ जो आपको",
        title2: "जानने की आवश्यकता है।",
        disclaimer: "चिकित्सा अस्वीकरण: ये पोषण संबंधी खाद्य उत्पाद हैं, दवा नहीं। यदि आपको कोई पुरानी बीमारी है तो हमेशा आहार में बदलाव से पहले अपने चिकित्सक से परामर्श लें।",
        faqs: [
            {
                question: "मल्टीग्रेन आटा कितने समय तक चलता है?",
                answer: "बिना पैकेट के स्टोर किए जाने पर ताज़ा पिसा हुआ आटा 10-15 दिनों के भीतर खा लेना सबसे अच्छा है। वैक्यूम-सीलबंद पैकेजिंग में, यह 2-4 महीने तक ताज़ा रहता है। एयरटाइट डिब्बे में फ्रिज में रखने पर यह 5-6 महीने तक चलता है। बीजों वाले ब्लेंड (अलसी, चिया) को जल्दी खा लेना चाहिए क्योंकि ओमेगा-3 तेल तेज़ी से ऑक्सीकृत होते हैं — वैक्यूम-पैक होने पर भी 1-1.5 महीने के भीतर।",
            },
            {
                question: "मुझे मल्टीग्रेन आटा कैसे गूंधना चाहिए?",
                answer: "ठंडे के बजाय गर्म पानी का उपयोग करें — यह अनाज के बाइंडिंग गुणों को सक्रिय करता है और आटे को नरम बनाता है। मल्टीग्रेन आटा सामान्य गेहूं के आटे की तुलना में अधिक पानी सोखता है, इसलिए धीरे-धीरे पानी मिलाएं। ग्लूटेन-मुक्त मिल्ट्स के लिए, थोड़ा इसबगोल मिलाएं ताकि आटा बंधा रहे। बेहतरीन परिणामों के लिए रोल करने से पहले आटे को 10-15 मिनट के लिए छोड़ दें।",
            },
            {
                question: "क्या मधुमेह के रोगियों के लिए मल्टीग्रेन आटा सुरक्षित है?",
                answer: "हाँ — हमारे ब्लेंड कम-ग्लाइसेमिक अनाज के साथ तैयार किए गए हैं। NIN हैदराबाद के अध्ययन इस बात की पुष्टि करते हैं कि ज्वार और बाजरा जैसे बाजरा को शामिल करने से सादे गेहूं के आटे की तुलना में ग्लाइसेमिक इंडेक्स 20-35% कम हो जाता है। जौ का बीटा-ग्लूकेन ग्लूकोज अवशोषण को धीमा कर देता है, और मेथी के बीज स्वाभाविक रूप से इंसुलिन स्राव को उत्तेजित करते हैं। हालाँकि, दवा लेने पर आहार में परिवर्तन करने से पहले कृपया अपने चिकित्सक से परामर्श लें।",
            },
            {
                question: "किन लोगों को कुछ अनाज से बचना चाहिए?",
                answer: "सीलिएक रोगियों को सभी गेहूं, जौ और जई-आधारित ब्लेंड से बचना चाहिए — इसके बजाय हमारे प्राचीन अनाज (ग्लूटेन-मुक्त) ब्लेंड को चुनें। गुर्दे की पथरी के रोगियों को रागी को सीमित करना चाहिए। थायराइड के रोगियों को सोया-भारी ब्लेंड से बचना चाहिए। गर्भवती महिलाओं को गर्भावस्था के शुरुआती दिनों में अतिरिक्त मेथी से बचना चाहिए। हमेशा अपने डॉक्टर से सलाह लें।",
            },
            {
                question: "क्या आप ग्लूटेन-मुक्त विकल्प प्रदान करते हैं?",
                answer: "हाँ। हमारा प्राचीन अनाज ब्लेंड 100% गेहूं-मुक्त और ग्लूटेन-मुक्त है, जो ज्वार (30%), बाजरा (25%), रागी (25%), और कंगनी (20%) से बना है। यह सीलिएक रोग वाले व्यक्तियों के लिए भी उपयुक्त है।",
            },
            {
                question: "क्या मैं अपना खुद का अनाज ब्लेंड बना सकता हूँ?",
                answer: "हम एक ऑनलाइन कस्टम ब्लेंड टूल बना रहे हैं — जो जल्द ही आ रहा है। इस बीच, आप हमें व्हाट्सएप के माध्यम से अपने पसंदीदा अनाज और स्वास्थ्य लक्ष्य बता सकते हैं, और हम आपके ऑर्डर पर ताज़ा पीसा हुआ एक व्यक्तिगत ब्लेंड बनाएंगे।",
            },
        ]
    }
};

function FAQItem({ faq, isOpen, onToggle }: {
    faq: FAQ;
    isOpen: boolean;
    onToggle: () => void;
}) {
    return (
        <div className="border border-wheat/10 rounded-3xl overflow-hidden transition-colors duration-300 hover:border-wheat/25">
            <button
                onClick={onToggle}
                className="w-full flex items-center justify-between gap-4 p-6 md:p-8 text-left cursor-pointer"
            >
                <span className="text-base md:text-lg font-semibold text-dark-brown leading-snug">
                    {faq.question}
                </span>
                <span
                    className={`shrink-0 w-9 h-9 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isOpen
                            ? "bg-accent-green text-white rotate-180"
                            : "bg-wheat/10 text-wheat"
                    }`}
                >
                    <ChevronDown className="w-4 h-4" />
                </span>
            </button>
            <div
                className="grid transition-all duration-300 ease-in-out"
                style={{
                    gridTemplateRows: isOpen ? "1fr" : "0fr",
                }}
            >
                <div className="overflow-hidden">
                    <div className="px-6 md:px-8 pb-6 md:pb-8">
                        <p className="text-sm text-muted leading-relaxed">{faq.answer}</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function MultigrainFAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
    const headerReveal = useReveal();
    const listReveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    return (
        <section id="faq" className="max-w-4xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-14 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    {t.badge}
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    {t.title1}
                    <span className="italic text-wheat"> {t.title2}</span>
                </h2>
            </div>

            <div
                ref={listReveal.ref}
                className={`space-y-4 reveal reveal-up ${listReveal.isVisible ? "visible" : ""}`}
            >
                {t.faqs.map((faq: FAQ, index: number) => (
                    <FAQItem
                        key={faq.question}
                        faq={faq}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>

            <p className="text-center text-[10px] text-muted/60 mt-14 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                {t.disclaimer}
            </p>
        </section>
    );
}
