"use client";

import { Package, CheckCircle2 } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";
import Image from "next/image";
import essentials1 from "../../public/essentials_section_1.png";

export default function GroceryCombo() {
    const leftReveal = useReveal();
    const rightReveal = useReveal();

    return (
        <section id="products" className="bg-dark-brown py-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-20 items-center">
                <div
                    ref={leftReveal.ref}
                    className={`relative reveal reveal-scale ${leftReveal.isVisible ? 'visible' : ''}`}
                >
                    <div className="relative z-10 rounded-[2.5rem] overflow-hidden shadow-premium aspect-4/5">
                        <Image
                            src={essentials1}
                            alt="Premium grocery essentials and flour bags"
                            fill
                            className="object-cover"
                            sizes="(max-width: 768px) 100vw, 40vw"
                        />
                    </div>
                    {/* Decorative Ring */}
                    <div className="absolute -top-10 -left-10 w-40 h-40 border-4 border-wheat/20 rounded-full z-0" />
                    <div className="absolute -bottom-10 -right-10 w-60 h-60 bg-accent-green/10 rounded-full blur-3xl z-0" />
                </div>

                <div
                    ref={rightReveal.ref}
                    className={`text-white space-y-8 reveal reveal-right ${rightReveal.isVisible ? 'visible' : ''}`}
                >
                    <div className="space-y-4">
                        <span className="inline-flex items-center gap-2 bg-accent-green/20 text-accent-green px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest border border-accent-green/20">
                            <Package className="w-3 h-3" />
                            Exclusive In-Store Benefit
                        </span>
                        <h2 className="text-4xl md:text-5xl leading-tight">
                            Everything Your <span className="text-wheat italic">Kitchen Needs</span>
                        </h2>
                        <p className="text-white/70 text-lg leading-relaxed">
                            Premium grains, freshly ground spices, and daily essentials —
                            all thoughtfully sourced and curated for the health-conscious home.
                        </p>
                    </div>

                    <ul className="grid grid-cols-2 gap-6 pb-4">
                        {[
                            "Organic Pulses",
                            "Pure Cold-Pressed Oils",
                            "Artisanal Spices",
                            "Heirloom Grains",
                            "Custom Atta Mixes",
                            "Farm-Fresh Essentials",
                        ].map((item) => (
                            <li key={item} className="flex items-center gap-3 text-sm text-white/90">
                                <CheckCircle2 className="w-5 h-5 text-accent-green shrink-0" />
                                {item}
                            </li>
                        ))}
                    </ul>

                    <button className="bg-wheat text-dark-brown px-10 py-5 rounded-2xl font-bold hover:bg-white transition-all duration-300 shadow-premium">
                        Explore All Products
                    </button>
                </div>
            </div>
        </section>
    );
}
