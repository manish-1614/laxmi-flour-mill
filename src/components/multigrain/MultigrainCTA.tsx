"use client";

import { MessageSquare, PhoneCall, Sparkles } from "lucide-react";
import { useReveal } from "@/hooks/useReveal";

export default function MultigrainCTA() {
    const titleReveal = useReveal();
    const buttonReveal = useReveal();
    const comingSoonReveal = useReveal();

    return (
        <section className="py-28 relative overflow-hidden bg-ivory">
            {/* Soft ambient glow */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-wheat/8 rounded-full blur-3xl -z-10" />

            <div className="max-w-4xl mx-auto px-6 text-center space-y-16">
                {/* Headline */}
                <div
                    ref={titleReveal.ref}
                    className={`space-y-6 reveal reveal-scale ${titleReveal.isVisible ? "visible" : ""}`}
                >
                    <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-xs">
                        Ready to Start?
                    </span>
                    <h2 className="text-4xl md:text-6xl text-dark-brown leading-tight">
                        Your Custom Blend
                        <span className="block italic text-wheat">Awaits.</span>
                    </h2>
                    <p className="text-muted max-w-lg mx-auto leading-relaxed">
                        Tell us your health goals, and we&apos;ll recommend the perfect blend.
                        Order via WhatsApp or call us — we mill it fresh and deliver it the same day.
                    </p>
                </div>

                {/* Action buttons */}
                <div
                    ref={buttonReveal.ref}
                    className={`flex flex-wrap justify-center gap-6 reveal reveal-up ${buttonReveal.isVisible ? "visible" : ""}`}
                >
                    <a
                        href="https://wa.me/918789685206"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="bg-[#25D366] text-white px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-[#128C7E] transition-all duration-300 shadow-premium group"
                    >
                        <MessageSquare className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Order on WhatsApp
                    </a>
                    <a
                        href="tel:+918789685206"
                        className="border-2 border-dark-brown/10 text-dark-brown px-10 py-5 rounded-2xl flex items-center gap-3 font-bold hover:bg-dark-brown hover:text-white hover:border-dark-brown transition-all duration-300 group"
                    >
                        <PhoneCall className="w-6 h-6 group-hover:scale-110 transition-transform" />
                        Call Now
                    </a>
                </div>

                {/* Coming soon teaser */}
                <div
                    ref={comingSoonReveal.ref}
                    className={`reveal reveal-up ${comingSoonReveal.isVisible ? "visible" : ""}`}
                >
                    <div className="inline-flex items-center gap-4 bg-white border border-wheat/20 rounded-3xl px-8 py-5 shadow-soft">
                        <Sparkles className="w-5 h-5 text-wheat shrink-0" />
                        <div className="text-left">
                            <p className="text-[10px] font-bold text-dark-brown uppercase tracking-widest">
                                Coming Soon
                            </p>
                            <p className="text-sm text-muted mt-0.5">
                                Design your own custom grain blend online — we&apos;ll mill it to order within 24 hours
                            </p>
                        </div>
                        <span className="bg-wheat/15 text-wheat text-[9px] font-bold px-2.5 py-1 rounded-full uppercase tracking-widest shrink-0">
                            Beta
                        </span>
                    </div>
                </div>
            </div>
        </section>
    );
}
