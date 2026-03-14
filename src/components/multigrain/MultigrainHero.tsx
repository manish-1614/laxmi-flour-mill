"use client";

import { ArrowDown, MessageSquare } from "lucide-react";
import Image from "next/image";

export default function MultigrainHero() {
    return (
        <section className="relative min-h-[88vh] flex items-center overflow-hidden pt-28">
            {/* Layered background */}
            <div className="absolute inset-0 bg-linear-to-br from-ivory via-ivory to-wheat/8 -z-10" />
            <div className="absolute top-0 right-0 w-1/2 h-full bg-wheat/5 blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-1/3 h-2/3 bg-accent-green/5 blur-3xl -z-10" />

            <div className="max-w-7xl mx-auto px-6 w-full relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
                    <div className="max-w-2xl space-y-10">

                        {/* Badge row */}
                    <div className="flex items-center gap-4 flex-wrap animate-fade-in-down">
                        <span className="bg-wheat/15 text-wheat text-[10px] font-bold px-3 py-1.5 rounded-full uppercase tracking-[0.2em]">
                            Introducing
                        </span>
                        <span className="text-muted text-xs uppercase tracking-widest">
                            Fresh stone-milled, daily
                        </span>
                    </div>

                    {/* Headline */}
                    <div className="space-y-5 animate-fade-in-left">
                        <h1 className="text-5xl md:text-[5.5rem] leading-[1.02] text-dark-brown tracking-tight">
                            Elevate Every
                            <span className="block italic text-wheat">Roti You Make.</span>
                        </h1>
                        <p className="text-lg text-muted max-w-xl leading-relaxed">
                            Handcrafted blends of 15+ premium Indian grains — stone-milled
                            fresh to your order. More nutrition, richer taste, and a blend
                            matched to your health.
                        </p>
                    </div>

                    {/* CTAs */}
                    <div
                        className="flex flex-wrap gap-5 animate-fade-in-up"
                        style={{ animationDelay: "200ms" }}
                    >
                        <a
                            href="https://wa.me/918789685206"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-[#25D366] text-white px-8 py-5 rounded-2xl shadow-premium hover:bg-[#128C7E] transition-all duration-300 flex items-center gap-3 font-bold group"
                        >
                            <MessageSquare className="w-5 h-5 group-hover:scale-110 transition-transform" />
                            Order on WhatsApp
                        </a>
                        <a
                            href="#blends"
                            className="border-2 border-dark-brown/10 text-dark-brown px-8 py-5 rounded-2xl hover:border-wheat hover:text-wheat transition-all duration-300 font-medium flex items-center gap-2"
                        >
                            Explore Blends
                            <ArrowDown className="w-4 h-4" />
                        </a>
                    </div>

                    {/* Stats strip */}
                    <div
                        className="flex items-center gap-8 flex-wrap pt-8 border-t border-wheat/20 animate-fade-in-up"
                        style={{ animationDelay: "350ms" }}
                    >
                        {[
                            { value: "15+", label: "Premium Grains" },
                            { value: "5", label: "Signature Blends" },
                            { value: "7", label: "Health Functions" },
                            { value: "Zero", label: "Preservatives" },
                        ].map((stat, i) => (
                            <div key={stat.label} className="flex items-center gap-5 sm:gap-8">
                                {i > 0 && <div className="w-px h-10 bg-wheat/20 hidden sm:block" />}
                                <div>
                                    <p className="text-2xl font-bold text-dark-brown">{stat.value}</p>
                                    <p className="text-[10px] text-muted uppercase tracking-tighter">{stat.label}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Hero Image */}
                <div 
                    className="relative w-full aspect-4/3 lg:aspect-auto lg:h-[550px] xl:h-[650px] animate-fade-in-up mt-12 lg:mt-0"
                    style={{ animationDelay: "150ms" }}
                >
                    <Image
                        src="/customized_multigrain_atta_hero.png"
                        alt="Customized Multigrain Atta Blends"
                        fill
                        className="object-contain drop-shadow-2xl hover:scale-105 transition-transform duration-700"
                        priority
                        sizes="(max-width: 1024px) 100vw, 50vw"
                    />
                </div>
            </div>
        </div>

        {/* Decorative watermark */}
            <div
                className="absolute right-8 top-1/2 -translate-y-1/2 hidden xl:block select-none pointer-events-none font-display italic leading-none"
                style={{
                    fontSize: "22rem",
                    color: "transparent",
                    WebkitTextStroke: "1px rgba(196,154,108,0.08)",
                }}
            >
                atta
            </div>
        </section>
    );
}
