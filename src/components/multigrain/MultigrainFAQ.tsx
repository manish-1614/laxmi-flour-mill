"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const faqs = [
    {
        question: "How long does multigrain atta last?",
        answer:
            "Freshly milled atta is best consumed within 10\u201315 days when stored unpackaged. In vacuum-sealed packaging, it stays fresh for 2\u20134 months. Refrigerated in an airtight container, shelf life extends to 5\u20136 months. Seed-enhanced blends (flax, chia) should be consumed sooner as omega-3 oils oxidise faster \u2014 ideally within 1\u20131.5 months even when vacuum-packed.",
    },
    {
        question: "How should I knead multigrain atta?",
        answer:
            "Use warm water instead of cold \u2014 this activates the binding properties of the grains and makes the dough softer. Multigrain atta absorbs more water than regular wheat atta, so add water gradually. For gluten-free blends (millet-only), add a pinch of psyllium husk (isabgol) to help the dough hold together. Let the dough rest for 10\u201315 minutes before rolling for best results.",
    },
    {
        question: "Is multigrain atta safe for diabetic patients?",
        answer:
            "Yes \u2014 our blends are formulated with low-glycemic grains. Studies from NIN Hyderabad confirm that adding millets like jowar and bajra reduces the glycemic index by 20\u201335% compared to plain wheat atta. Barley\u2019s beta-glucan slows glucose absorption, and fenugreek seeds naturally stimulate insulin secretion. However, please consult your physician before making dietary changes if you are on medication.",
    },
    {
        question: "Who should avoid certain grains?",
        answer:
            "Celiac patients should avoid all wheat, barley, and oat-based blends \u2014 choose our Ancient Grains (gluten-free) blend instead. Kidney stone patients should limit ragi due to its oxalic acid content. Thyroid patients should avoid soy-heavy blends. Pregnant women should avoid excess fenugreek (methi) in early pregnancy. Those on blood thinners (Warfarin) should be cautious with high flaxseed/chia blends due to their mild anticoagulant effect. Always consult your doctor.",
    },
    {
        question: "Do you offer gluten-free options?",
        answer:
            "Yes. Our Ancient Grains Blend is 100% wheat-free and gluten-free, made with jowar (30%), bajra (25%), ragi (25%), and foxtail millet (20%). It is suitable for individuals with celiac disease or gluten sensitivity. We mill gluten-free blends separately to minimise cross-contamination risk.",
    },
    {
        question: "Can I customize my own grain blend?",
        answer:
            "We are building an online custom blend tool \u2014 coming soon. In the meantime, you can tell us your preferred grains and health goals via WhatsApp, and we\u2019ll create a personalised blend milled fresh to your order. Custom blending is available at a small premium of \u20B920\u201330 per kg over standard blends.",
    },
];

function FAQItem({ faq, isOpen, onToggle }: {
    faq: (typeof faqs)[0];
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

    return (
        <section id="faq" className="max-w-4xl mx-auto px-6 py-28">
            <div
                ref={headerReveal.ref}
                className={`text-center space-y-4 mb-14 reveal reveal-up ${headerReveal.isVisible ? "visible" : ""}`}
            >
                <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                    Common Questions
                </span>
                <h2 className="text-4xl md:text-5xl text-dark-brown">
                    Everything You
                    <span className="italic text-wheat"> Need to Know.</span>
                </h2>
            </div>

            <div
                ref={listReveal.ref}
                className={`space-y-4 reveal reveal-up ${listReveal.isVisible ? "visible" : ""}`}
            >
                {faqs.map((faq, index) => (
                    <FAQItem
                        key={faq.question}
                        faq={faq}
                        isOpen={openIndex === index}
                        onToggle={() => setOpenIndex(openIndex === index ? null : index)}
                    />
                ))}
            </div>

            <p className="text-center text-[10px] text-muted/60 mt-14 uppercase tracking-widest max-w-2xl mx-auto leading-relaxed">
                Medical disclaimer: These are nutritional food products, not medicine.
                Always consult your physician before dietary changes if you have a chronic condition.
            </p>
        </section>
    );
}
