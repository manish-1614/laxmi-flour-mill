"use client";

import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Blend {
    emoji: string;
    name: string;
    tag: string;
    tagStyle: string;
    composition: string;
    benefit: string;
    forWhom: string;
    highlight: string;
    startingPrice: number;
}

interface Translation {
    badge: string;
    title1: string;
    title2: string;
    desc: string;
    from: string;
    blends: Blend[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Our Signature Range",
        title1: "Five Blends.",
        title2: " One for Every Home.",
        desc: "Each blend is formulated using research from NIN Hyderabad and traditional Indian grain wisdom. Stone-milled fresh on the day of your order.",
        from: "from ",
        blends: [
            {
                emoji: "🌾",
                name: "Wheat-Millet Classic",
                tag: "Most Popular",
                tagStyle: "bg-wheat/20 text-wheat",
                composition: "60% Wheat · 15% Jowar · 15% Bajra · 10% Ragi",
                benefit: "Rich in fibre (6–8g/100g) and iron. The earthy, nutty flavour pairs perfectly with ghee and traditional Indian curries.",
                forWhom: "Ideal for: Families & everyday cooking",
                highlight: "20–35% lower glycemic index vs plain wheat atta",
                startingPrice: 75,
            },
            {
                emoji: "💪",
                name: "High-Protein Power",
                tag: "Fitness",
                tagStyle: "bg-accent-green/15 text-accent-green",
                composition: "50% Wheat · 25% Chickpea · 15% Soy · 10% Lentil",
                benefit: "18–22g protein per 100g — nearly double that of regular wheat atta. Legumes are lightly roasted before milling for better digestibility.",
                forWhom: "Ideal for: Athletes, vegetarians & fitness enthusiasts",
                highlight: "Complete amino acid profile for muscle recovery",
                startingPrice: 90,
            },
            {
                emoji: "🏺",
                name: "Ancient Grains Blend",
                tag: "Gluten-Free",
                tagStyle: "bg-ivory text-dark-brown border border-wheat/30",
                composition: "30% Jowar · 25% Bajra · 25% Ragi · 20% Foxtail Millet",
                benefit: "100% wheat-free. Highest mineral density — ragi alone provides 344mg calcium per 100g. Suitable for celiac and gluten-intolerant individuals.",
                forWhom: "Ideal for: Gluten-intolerant & millet enthusiasts",
                highlight: "47% market growth FY2023-24 post millet campaign",
                startingPrice: 85,
            },
            {
                emoji: "✨",
                name: "Seed-Enhanced Premium",
                tag: "Premium",
                tagStyle: "bg-dark-brown/10 text-dark-brown",
                composition: "Multigrain base + 3% Flaxseeds · 3% Chia · 4% Sesame",
                benefit: "Adds Omega-3 fatty acids (ALA), selenium, zinc, and calcium. Cold-pressed milling preserves seed oils and prevents rancidity.",
                forWhom: "Ideal for: Anti-inflammatory diet & health-conscious",
                highlight: "40–60% premium over standard atta — worth every grain",
                startingPrice: 110,
            },
            {
                emoji: "🌿",
                name: "Functional Health Blend",
                tag: "Therapeutic",
                tagStyle: "bg-accent-green/10 text-accent-green",
                composition: "Multigrain base + Methi · Moringa · Turmeric · Amla",
                benefit: "Incorporates FSSAI-compliant Ayurvedic herbs within permissible limits. Emerging nutraceutical category with high post-COVID health awareness demand.",
                forWhom: "Ideal for: Preventive wellness & targeted health support",
                highlight: "Consult your physician if you have a chronic condition",
                startingPrice: 100,
            },
        ]
    },
    hi: {
        badge: "हमारी सिग्नेचर रेंज",
        title1: "पांच ब्लेंड्स।",
        title2: " हर घर के लिए एक।",
        desc: "प्रत्येक ब्लेंड NIN हैदराबाद के अनुसंधान और पारंपरिक भारतीय अनाज ज्ञान का उपयोग करके तैयार किया गया है। आपके ऑर्डर के दिन ताज़ा पत्थर से पिसा हुआ।",
        from: "रु.",
        blends: [
            {
                emoji: "🌾",
                name: "गेहूं-बाजरा क्लासिक",
                tag: "सबसे लोकप्रिय",
                tagStyle: "bg-wheat/20 text-wheat",
                composition: "60% गेहूं · 15% ज्वार · 15% बाजरा · 10% रागी",
                benefit: "फाइबर (6-8g/100g) और आयरन से भरपूर। मिट्टी जैसा, अखरोट जैसा स्वाद घी और पारंपरिक भारतीय करी के साथ बिल्कुल मेल खाता है।",
                forWhom: "आदर्श: परिवार और रोज़ाना खाना पकाने के लिए",
                highlight: "सादे गेहूं के आटे बनाम 20-35% कम ग्लाइसेमिक इंडेक्स",
                startingPrice: 75,
            },
            {
                emoji: "💪",
                name: "हाई-प्रोटीन पावर",
                tag: "फिटनेस",
                tagStyle: "bg-accent-green/15 text-accent-green",
                composition: "50% गेहूं · 25% चना · 15% सोया · 10% दाल",
                benefit: "18-22g प्रोटीन प्रति 100g — नियमित गेहूं के आटे से लगभग दोगुना। बेहतर पाचन के लिए पिसाई से पहले फलियों को हल्का भून लिया जाता है।",
                forWhom: "आदर्श: एथलीट, शाकाहारी और फिटनेस के प्रति उत्साही",
                highlight: "मांसपेशियों की रिकवरी के लिए संपूर्ण अमीनो एसिड प्रोफ़ाइल",
                startingPrice: 90,
            },
            {
                emoji: "🏺",
                name: "प्राचीन अनाज ब्लेंड",
                tag: "ग्लूटेन-मुक्त",
                tagStyle: "bg-ivory text-dark-brown border border-wheat/30",
                composition: "30% ज्वार · 25% बाजरा · 25% रागी · 20% कंगनी",
                benefit: "100% गेहूं-मुक्त। उच्च खनिज घनत्व - रागी अकेले 100g में 344mg कैल्शियम प्रदान करता है। सीलिएक और ग्लूटेन असहिष्णु व्यक्तियों के लिए उपयुक्त।",
                forWhom: "आदर्श: ग्लूटेन-असहिष्णु और बाजरा के प्रति उत्साही",
                highlight: "बाजरा अभियान के बाद FY2023-24 में 47% बाजार वृद्धि",
                startingPrice: 85,
            },
            {
                emoji: "✨",
                name: "सीड-एन्हांस्ड प्रीमियम",
                tag: "प्रीमियम",
                tagStyle: "bg-dark-brown/10 text-dark-brown",
                composition: "मल्टीग्रेन बेस + 3% अलसी · 3% चिया · 4% तिल",
                benefit: "ओमेगा-3 फैटी एसिड (ALA), सेलेनियम, जिंक और कैल्शियम जोड़ता है। कोल्ड-प्रेस्ड मिलिंग बीज के तेलों को संरक्षित करती है और बासीपन को रोकती है।",
                forWhom: "आदर्श: सूजन रोधी आहार और स्वास्थ्य के प्रति जागरूक",
                highlight: "मानक आटे की तुलना में 40-60% प्रीमियम - हर कण मूल्यवान",
                startingPrice: 110,
            },
            {
                emoji: "🌿",
                name: "फंक्शनल हेल्थ ब्लेंड",
                tag: "चिकित्सकीय",
                tagStyle: "bg-accent-green/10 text-accent-green",
                composition: "मल्टीग्रेन बेस + मेथी · मोरिंगा · हल्दी · आंवला",
                benefit: "अनुमेय सीमा के भीतर FSSAI-अनुपालन आयुर्वेदिक जड़ी-बूटियों को शामिल करता है। उच्च कोविड के बाद स्वास्थ्य जागरूकता मांग के साथ उभरती हुई श्रेणी।",
                forWhom: "आदर्श: निवारक कल्याण और लक्षित स्वास्थ्य समर्थन",
                highlight: "यदि आपको कोई पुरानी बीमारी है तो अपने चिकित्सक से परामर्श लें",
                startingPrice: 100,
            },
        ]
    }
};

function BlendCard({ blend, index, tFrom }: { blend: Blend; index: number; tFrom: string }) {
    const reveal = useReveal();
    return (
        <div
            ref={reveal.ref}
            className={`bg-ivory rounded-4xl p-8 border border-wheat/10 hover:border-wheat/30 hover:shadow-premium transition-all duration-500 hover:-translate-y-1 flex flex-col gap-5 reveal reveal-up ${reveal.isVisible ? "visible" : ""}`}
            style={{ transitionDelay: `${index * 80}ms` }}
        >
            <div className="flex items-start justify-between">
                <span className="text-4xl">{blend.emoji}</span>
                <span className={`text-[9px] font-bold uppercase tracking-widest px-3 py-1 rounded-full ${blend.tagStyle}`}>
                    {blend.tag}
                </span>
            </div>

            <div>
                <h3 className="text-xl font-bold text-dark-brown mb-2">{blend.name}</h3>
                <p className="text-[10px] font-mono text-wheat/90 uppercase tracking-wider mb-4 leading-relaxed">
                    {blend.composition}
                </p>
                <p className="text-sm text-muted leading-relaxed">{blend.benefit}</p>
            </div>

            <div className="mt-auto space-y-3 pt-4 border-t border-wheat/10">
                <div className="flex items-center justify-between">
                    <p className="text-xs font-semibold text-dark-brown">{blend.forWhom}</p>
                    <span className="text-sm font-bold text-dark-brown whitespace-nowrap">
                        <span className="text-[10px] font-normal text-muted">{tFrom}</span>
                        {`₹${blend.startingPrice}/kg`}
                    </span>
                </div>
                <p className="text-[10px] text-accent-green uppercase tracking-wider leading-relaxed">
                    {blend.highlight}
                </p>
            </div>
        </div>
    );
}

export default function GrainBlends() {
    const headerReveal = useReveal();
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    return (
        <section id="blends" className="bg-white/60 py-28">
            <div className="max-w-7xl mx-auto px-6">
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
                    <p className="text-muted max-w-xl mx-auto text-sm leading-relaxed">
                        {t.desc}
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.blends.map((blend: Blend, index: number) => (
                        <BlendCard key={blend.name} blend={blend} index={index} tFrom={t.from} />
                    ))}
                </div>
            </div>
        </section>
    );
}
