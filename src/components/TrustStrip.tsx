"use client";

import { useReveal } from "@/hooks/useReveal";

const items = [
    { icon: "🌾", text: "You Choose the Grain" },
    { icon: "⚙️", text: "Live Stone Grinding" },
    { icon: "🧪", text: "Chemical-Free" },
    { icon: "🏡", text: "Local Family Store" },
    { icon: "🚚", text: "Same-Day Delivery" },
];

export default function TrustStrip() {
    const { ref, isVisible } = useReveal();

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
