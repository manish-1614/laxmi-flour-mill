"use client";

import { MessageSquare, PhoneCall } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function CTA() {
    const titleReveal = useReveal();
    const buttonReveal = useReveal();

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
                        Crafted with Care. <br />
                        <span className="italic text-wheat">Served with Integrity.</span>
                    </h2>
                    <p className="text-white/70 text-lg max-w-2xl mx-auto">
                        Experience the difference of freshly ground, chemical-free flour.
                        Visit our local store or place your order directly via WhatsApp.
                    </p>
                </div>

                <div
                    ref={buttonReveal.ref}
                    className={`flex flex-wrap justify-center gap-6 reveal reveal-up ${buttonReveal.isVisible ? 'visible' : ''}`}
                >
                    <button className="bg-[#25D366] text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-premium group">
                        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        WhatsApp Order
                    </button>

                    <button className="border-2 border-white/20 text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-white hover:text-dark-brown transition-all duration-300 group">
                        <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Call Now
                    </button>
                </div>

                <p className="text-white/40 text-xs uppercase tracking-[0.3em]">
                    Same-Day Delivery Available in Selected Areas
                </p>
            </div>

            {/* Background Decorative */}
            <div className="absolute -top-24 -right-24 w-96 h-96 bg-accent-green/10 rounded-full blur-3xl" />
            <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-wheat/10 rounded-full blur-3xl" />
        </section>
    );
}
