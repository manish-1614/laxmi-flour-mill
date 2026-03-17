"use client";

import { useState } from "react";
import { useReveal } from "@/hooks/useReveal";
import { useLanguage } from "@/i18n/LanguageContext";

interface Grain {
    name: string;
    pct: number;
    color: string;
}

interface Condition {
    name: string;
    icon: string;
    tagline: string;
    grains: Grain[];
    gi: string;
    protein: string;
    avoid: string[];
    tip: string;
}

interface Translation {
    badge: string;
    title: string;
    desc: string;
    totalWt: string;
    grainComp: string;
    strictlyAvoid: string;
    keyInsight: string;
    tableCols: string[];
    conditions: Condition[];
}

const translations: Record<string, Translation> = {
    en: {
        badge: "Nutrition Science",
        title: "Custom Blends for Health Conditions.",
        desc: "Select a specific dietary need or condition to see the optimized grain ratios and their scientifically-backed benefits.",
        totalWt: "Total Wt (kg):",
        grainComp: "Grain Composition",
        strictlyAvoid: "Strictly Avoid",
        keyInsight: "Key Clinical Insight:",
        tableCols: ["Grain", "%", "Weight (g)"],
        conditions: [
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
        ]
    },
    hi: {
        badge: "पोषण विज्ञान",
        title: "स्वास्थ्य स्थितियों के लिए कस्टम ब्लेंड्स।",
        desc: "अनुकूलित अनाज अनुपात और उनके वैज्ञानिक रूप से समर्थित लाभों को देखने के लिए एक विशिष्ट आहार आवश्यकता या स्थिति का चयन करें।",
        totalWt: "कुल वजन (kg):",
        grainComp: "अनाज संरचना",
        strictlyAvoid: "सख्ती से बचें",
        keyInsight: "मुख्य नैदानिक विचार:",
        tableCols: ["अनाज", "%", "वजन (g)"],
        conditions: [
            {
                name: "मधुमेह",
                icon: "🩸",
                tagline: "कम ग्लाइसेमिक इंडेक्स - भोजन के बाद ग्लूकोज स्पाइक्स को नियंत्रित करता है",
                grains: [
                    { name: "जौ", pct: 25, color: "bg-[#3266ad]" },
                    { name: "ज्वार", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "बाजरा", pct: 15, color: "bg-[#c97a2f]" },
                    { name: "साबुत गेहूं", pct: 20, color: "bg-[#e0b857]" },
                    { name: "कुट्टू", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "मेथी दाना", pct: 5, color: "bg-[#c9602f]" },
                    { name: "ओट्स", pct: 5, color: "bg-[#7aab8a]" },
                ],
                gi: "कम (~38–45)",
                protein: "11–13g/100g",
                avoid: ["सफेद चावल का आटा", "रिफाइंड गेहूं / मैदा"],
                tip: "जौ का बीटा-ग्लूकेन + मेथी का 4-हाइड्रॉक्सीआइसोल्यूसीन एक साथ मिलकर सबसे मजबूत रक्त शर्करा कम करने वाला प्रभाव पैदा करते हैं।",
            },
            {
                name: "हृदय",
                icon: "❤️",
                tagline: "कोलेस्ट्रॉल कम करने वाला फाइबर और ओमेगा-3 ब्लेंड",
                grains: [
                    { name: "ओट्स", pct: 25, color: "bg-[#3266ad]" },
                    { name: "जौ", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "साबुत गेहूं", pct: 20, color: "bg-[#e0b857]" },
                    { name: "ज्वार", pct: 15, color: "bg-[#c97a2f]" },
                    { name: "अलसी", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "इसबगोल की भूसी", pct: 5, color: "bg-[#c9602f]" },
                    { name: "रागी", pct: 5, color: "bg-[#7aab8a]" },
                ],
                gi: "कम (~42–50)",
                protein: "10–12g/100g",
                avoid: ["नारियल का आटा (उच्च संतृप्त वसा)", "फुल-फैट सोया"],
                tip: "ओट बीटा-ग्लूकेन LDL को 10% तक कम करता है। इसबगोल पित्त एसिड को बांधता है, जिससे कोलेस्ट्रॉल चयापचय होता है।",
            },
            {
                name: "वजन कम करना",
                icon: "⚖️",
                tagline: "उच्च संतुष्टि - अधिकतम फाइबर और थर्मोजेनिक प्रोटीन",
                grains: [
                    { name: "ज्वार", pct: 25, color: "bg-[#3266ad]" },
                    { name: "जौ", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "रागी", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "साबुत गेहूं", pct: 15, color: "bg-[#e0b857]" },
                    { name: "अलसी", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "चिया बीज", pct: 5, color: "bg-[#c9602f]" },
                    { name: "मूंग दाल का आटा", pct: 5, color: "bg-[#7aab8a]" },
                ],
                gi: "कम (~40–48)",
                protein: "12–15g/100g",
                avoid: ["मैदा", "उच्च स्टार्च वाले परिष्कृत अनाज"],
                tip: "चिया और अलसी आंत में फैलते हैं, जिससे कम कैलोरी में पेट भरा महसूस होता है। प्रति ग्राम गेहूं की तुलना में ज्वार में कैलोरी कम होती है।",
            },
            {
                name: "हड्डियों का स्वास्थ्य",
                icon: "🦴",
                tagline: "उच्चतम पौधे कैल्शियम - रागी-प्रमुख मिश्रण",
                grains: [
                    { name: "रागी", pct: 40, color: "bg-[#3266ad]" },
                    { name: "साबुत गेहूं", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "राजगिरा", pct: 15, color: "bg-[#c97a2f]" },
                    { name: "तिल", pct: 10, color: "bg-[#e0b857]" },
                    { name: "ज्वार", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "मोरिंगा पाउडर", pct: 5, color: "bg-[#c9602f]" },
                ],
                gi: "निम्न-मध्यम (~50–58)",
                protein: "10–12g/100g",
                avoid: [
                    "अत्यधिक सोया आटा (फाइटोएस्ट्रोजन कैल्शियम को बाधित करता है)",
                    "मिश्रण में पालक (ऑक्सालेट्स)",
                ],
                tip: "रागी में 100 ग्राम प्रति 344 मिलीग्राम कैल्शियम होता है - प्रति ग्राम दूध से भी अधिक। तिल जस्ता जोड़ता है, हड्डी बनाने वाले एंजाइमों के लिए एक महत्वपूर्ण सहकारक।",
            },
            {
                name: "PCOS / हार्मोनल",
                icon: "🌸",
                tagline: "फाइटोएस्ट्रोजन समर्थन के साथ हार्मोन-संतुलित कम-जीआई मिश्रण",
                grains: [
                    { name: "ज्वार", pct: 25, color: "bg-[#3266ad]" },
                    { name: "रागी", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "जौ", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "क्विनोआ", pct: 15, color: "bg-[#e0b857]" },
                    { name: "साबुत गेहूं", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "अलसी", pct: 10, color: "bg-[#c9602f]" },
                ],
                gi: "कम (~42–48)",
                protein: "12–14g/100g",
                avoid: ["रिफाइंड गेहूं / मैदा", "सफेद चावल का आटा", "अतिरिक्त सोया"],
                tip: "अलसी के लिगनन एस्ट्रोजन को संतुलित करने में मदद करते हैं। कम-जीआई अनाज इंसुलिन प्रतिरोध को कम करते हैं - पीसीओएस का एक मूल कारण।",
            },
            {
                name: "ग्लूटेन-मुक्त",
                icon: "🌿",
                tagline: "सीलिएक और ग्लूटेन संवेदनशीलता के लिए 100% गेहूं मुक्त",
                grains: [
                    { name: "ज्वार", pct: 30, color: "bg-[#3266ad]" },
                    { name: "रागी", pct: 25, color: "bg-[#5a9e6f]" },
                    { name: "बाजरा", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "कुट्टू", pct: 15, color: "bg-[#e0b857]" },
                    { name: "राजगिरा", pct: 10, color: "bg-[#7c6bbd]" },
                ],
                gi: "कम (~44–52)",
                protein: "11–13g/100g",
                avoid: ["सभी गेहूं", "जौ (होर्डिन)", "राई", "असत्यापित जई"],
                tip: "रोटी की बाइंडिंग में सुधार के लिए 1-2% इसबगोल की भूसी मिलाएं - बाजरे की रोटियां बिना ग्लूटेन के टूटने का खतरा होता है।",
            },
            {
                name: "एनीमिया",
                icon: "🔴",
                tagline: "आयरन की कमी से निपटने के लिए आयरन सघन मिश्रण",
                grains: [
                    { name: "रागी", pct: 30, color: "bg-[#3266ad]" },
                    { name: "बाजरा", pct: 25, color: "bg-[#5a9e6f]" },
                    { name: "राजगिरा", pct: 15, color: "bg-[#c97a2f]" },
                    { name: "साबुत गेहूं", pct: 15, color: "bg-[#e0b857]" },
                    { name: "मसूर दाल का आटा", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "मोरिंगा पाउडर", pct: 5, color: "bg-[#c9602f]" },
                ],
                gi: "निम्न-मध्यम (~48–55)",
                protein: "12–14g/100g",
                avoid: ["बड़ी मात्रा में उच्च-फाइटिक बिना भीगी हुई फलियां"],
                tip: "नॉन-हीम आयरन अवशोषण को 2-3 गुना बढ़ाने के लिए भोजन में विटामिन सी स्रोत (टमाटर, नींबू) के साथ इस आटे को मिलाएँ।",
            },
            {
                name: "बच्चों का विकास",
                icon: "👦",
                tagline: "प्रोटीन + कैल्शियम सघन - 2 वर्ष और उससे अधिक उम्र के लिए सुरक्षित",
                grains: [
                    { name: "साबुत गेहूं", pct: 35, color: "bg-[#3266ad]" },
                    { name: "रागी", pct: 25, color: "bg-[#5a9e6f]" },
                    { name: "मूंग दाल का आटा", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "बाजरा", pct: 10, color: "bg-[#e0b857]" },
                    { name: "राजगिरा", pct: 10, color: "bg-[#7c6bbd]" },
                ],
                gi: "मध्यम (~52–58)",
                protein: "14–16g/100g",
                avoid: ["कच्चे साबुत बीज (टॉडलर्स के लिए घुट का खतरा)", "अतिरिक्त अलसी"],
                tip: "गेहूं का उच्च अनुपात बच्चों के लिए स्वाद में सुधार करता है। मूंग सबसे अधिक पचने योग्य फली का आटा है - छोटे पेट पर कोमल।",
            },
            {
                name: "गर्भावस्था",
                icon: "🤱",
                tagline: "फोलेट और आयरन से भरपूर मातृ पोषण मिश्रण",
                grains: [
                    { name: "साबुत गेहूं", pct: 30, color: "bg-[#3266ad]" },
                    { name: "रागी", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "बाजरा", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "मसूर दाल का आटा", pct: 15, color: "bg-[#e0b857]" },
                    { name: "मूंग दाल का आटा", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "राजगिरा", pct: 5, color: "bg-[#c9602f]" },
                ],
                gi: "निम्न-मध्यम (~48–54)",
                protein: "13–15g/100g",
                avoid: [
                    "मेथी दाना (पहली तिमाही में गर्भाशय उत्तेजक)",
                    "कुलथी",
                    "बड़ी मात्रा में कच्ची अलसी",
                ],
                tip: "मसूर और मूंग तंत्रिका ट्यूब के विकास के लिए महत्वपूर्ण फोलेट प्रदान करते हैं। रागी का कैल्शियम भ्रूण की हड्डी के विकास का समर्थन करता है।",
            },
            {
                name: "जोड़ / गठिया",
                icon: "🦵",
                tagline: "सूजन-रोधी ओमेगा-3 और पॉलीफेनोल मिश्रण",
                grains: [
                    { name: "ज्वार", pct: 25, color: "bg-[#3266ad]" },
                    { name: "बाजरा", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "रागी", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "साबुत गेहूं", pct: 15, color: "bg-[#e0b857]" },
                    { name: "अलसी", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "हल्दी", pct: 5, color: "bg-[#c9602f]" },
                    { name: "ओट्स", pct: 5, color: "bg-[#7aab8a]" },
                ],
                gi: "कम (~42–50)",
                protein: "11–13g/100g",
                avoid: ["नाइटशेड से संबंधित आटा (अधिक मकई)", "रिफाइंड गेहूं"],
                tip: "आहार के 3-5% में हल्दी के करक्यूमिन ने सूजन-रोधी प्रभाव का चिकित्सकीय दस्तावेजीकरण किया है। स्वाद के लिए मिश्रण में अधिकतम 5% रखें।",
            },
            {
                name: "पाचन / IBS",
                icon: "🫁",
                tagline: "आंत की गतिशीलता और नियमितता के लिए घुलनशील फाइबर-प्रमुख",
                grains: [
                    { name: "ओट्स", pct: 25, color: "bg-[#3266ad]" },
                    { name: "जौ", pct: 25, color: "bg-[#5a9e6f]" },
                    { name: "ज्वार", pct: 20, color: "bg-[#c97a2f]" },
                    { name: "साबुत गेहूं", pct: 15, color: "bg-[#e0b857]" },
                    { name: "इसबगोल की भूसी", pct: 10, color: "bg-[#7c6bbd]" },
                    { name: "अलसी", pct: 5, color: "bg-[#c9602f]" },
                ],
                gi: "कम (~44–50)",
                protein: "10–12g/100g",
                avoid: ["मक्का/मक्के का आटा (आईबीएस-डी को बढ़ाता है)", "कम फाइबर वाले पॉलिश किए गए अनाज"],
                tip: "ओट्स और जौ से घुलनशील फाइबर आंत में एक जेल बनाता है जो पाचन को धीमा कर देता है और मल को नरम बनाता है। पर्याप्त पानी पीना जरूरी।",
            },
            {
                name: "इम्युनिटी बूस्टर",
                icon: "🛡️",
                tagline: "एंटीऑक्सीडेंट, जिंक और बीटा-ग्लूकन से भरपूर मिश्रण",
                grains: [
                    { name: "बाजरा", pct: 20, color: "bg-[#3266ad]" },
                    { name: "राजगिरा", pct: 20, color: "bg-[#5a9e6f]" },
                    { name: "कुट्टू", pct: 15, color: "bg-[#c97a2f]" },
                    { name: "ओट्स", pct: 15, color: "bg-[#e0b857]" },
                    { name: "साबुत गेहूं", pct: 15, color: "bg-[#7c6bbd]" },
                    { name: "जौ", pct: 10, color: "bg-[#c9602f]" },
                    { name: "मोरिंगा पाउडर", pct: 5, color: "bg-[#7aab8a]" },
                ],
                gi: "कम (~44–52)",
                protein: "12–14g/100g",
                avoid: ["रिफाइंड गेहूं", "कम-पोषक तत्व वाले भराव"],
                tip: "ओट्स और जौ से बीटा-ग्लूकेन सीधे मैक्रोफेज और NK कोशिकाओं को सक्रिय करते हैं - जन्मजात प्रतिरक्षा की अग्रिम पंक्ति।",
            },
        ]
    }
}

export default function ConditionGrainRatios() {
    const reveal = useReveal();
    const [activeIndex, setActiveIndex] = useState(0);
    const [weightKg, setWeightKg] = useState<number | string>(1);
    const { language } = useLanguage();
    const t: Translation = translations[language] || translations.en;

    const activeCondition = t.conditions[activeIndex];

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
                        {t.badge}
                    </span>
                    <h2 className="text-3xl md:text-4xl text-dark-brown">
                        {t.title}
                    </h2>
                    <p className="text-muted max-w-2xl mx-auto text-sm leading-relaxed">
                        {t.desc}
                    </p>
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Chips / Tabs List */}
                    <div className="lg:w-1/3 flex flex-row lg:flex-col flex-wrap lg:flex-nowrap gap-2 justify-start align-start overflow-x-auto pb-4 lg:pb-0 hide-scrollbar h-fit max-h-[550px] lg:overflow-y-auto">
                        {t.conditions.map((c: Condition, i: number) => (
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
                                    {activeCondition.name}
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
                                        {t.grainComp}
                                    </p>
                                    <div className="flex items-center gap-2 bg-white px-3 py-1.5 rounded-lg border border-wheat/20 shadow-sm">
                                        <label htmlFor="weight" className="text-xs font-semibold text-muted">
                                            {t.totalWt}
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
                                                {t.tableCols.map((col: string, i: number) => (
                                                    <th key={col} className={`px-4 py-3 font-semibold text-dark-brown ${i === 1 ? 'text-center' : i === 2 ? 'text-right' : ''}`}>{col}</th>
                                                ))}
                                            </tr>
                                        </thead>
                                        <tbody className="divide-y divide-wheat/5">
                                            {activeCondition.grains.map((g: Grain) => {
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
                                                            {weightInGrams > 0 ? weightInGrams.toFixed(0) : 0} {language === "hi" ? "g" : "g"}
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
                                        {t.strictlyAvoid}
                                    </p>
                                    <div className="flex flex-wrap gap-2">
                                        {activeCondition.avoid.map((a: string) => (
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
                                        {t.keyInsight}
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
