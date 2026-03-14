"use client";

import { Clock, Package, Snowflake, Wind } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

const shelfFacts = [
    {
        icon: Clock,
        value: "Same Day",
        label: "Milled Fresh",
        detail: "No warehouse stock",
    },
    {
        icon: Wind,
        value: "10–15 Days",
        label: "Unpackaged",
        detail: "Use quickly for best taste",
    },
    {
        icon: Package,
        value: "2–4 Months",
        label: "Vacuum-Packed",
        detail: "Airtight sealed pouch",
    },
    {
        icon: Snowflake,
        value: "5–6 Months",
        label: "Refrigerated",
        detail: "For maximum freshness",
    },
];

export default function ShelfLifeStrip() {
    const reveal = useReveal();

    return (
        <section className="py-20 bg-white/60">
            <div className="max-w-7xl mx-auto px-6">
                <div
                    ref={reveal.ref}
                    className={`reveal reveal-up ${reveal.isVisible ? "visible" : ""}`}
                >
                    <div className="text-center mb-12">
                        <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                            Freshness Guaranteed
                        </span>
                        <h3 className="text-3xl md:text-4xl text-dark-brown mt-3">
                            How Long Does It
                            <span className="italic text-wheat"> Stay Fresh?</span>
                        </h3>
                    </div>

                    <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
                        {shelfFacts.map((fact, index) => (
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
                        Store in an airtight container in a cool, dry place.
                        Refrigerate for extended freshness.
                    </p>
                </div>
            </div>
        </section>
    );
}
