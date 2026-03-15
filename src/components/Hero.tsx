"use client";

import { ArrowRight, ShoppingBag } from "lucide-react";
import Image from "next/image";
import lfmHero from "../../public/lfm_hero.png";

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex items-center overflow-hidden">
            {/* Background Decorative Element */}
            <div className="absolute top-0 right-0 w-1/3 h-full bg-wheat/5 -z-10 blur-3xl opacity-50" />

            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center py-20">
                <div className="space-y-10 animate-fade-in-left">
                    <div className="space-y-4">
                        <span className="inline-block text-accent-green font-semibold tracking-[0.2em] uppercase text-sm animate-fade-in-up delay-300">
                            Artisanal & Chemical Free
                        </span>
                        <h1 className="text-6xl md:text-7xl leading-[1.1] text-dark-brown">
                            Fresh Chakki Atta,
                            <span className="block italic text-wheat">Milled Daily.</span>
                        </h1>
                        <p className="text-lg text-muted max-w-lg leading-relaxed">
                            Hand-selected grains, stone-ground in small batches to preserve natural aroma,
                            essential nutrients, and the authentic taste of tradition.
                        </p>
                    </div>

                    <div className="flex flex-wrap gap-5">
                        <a
                            href="https://wa.me/918210134128"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-accent-green text-white px-8 py-5 rounded-2xl shadow-premium hover:bg-dark-brown transition-all duration-300 flex items-center gap-3 group"
                        >
                            <ShoppingBag className="w-5 h-5" />
                            Order Fresh Atta
                            <div className="animate-bounce-x">
                                <ArrowRight className="w-5 h-5" />
                            </div>
                        </a>

                        <button className="border-2 border-dark-brown/10 text-dark-brown px-8 py-5 rounded-2xl hover:border-dark-brown transition-colors duration-300 font-medium">
                            Visit Our Store
                        </button>
                    </div>

                    <div className="flex items-center gap-8 pt-6 border-t border-wheat/20">
                        <div>
                            <p className="text-2xl font-bold text-dark-brown">100%</p>
                            <p className="text-xs text-muted uppercase tracking-tighter">Pure Grain</p>
                        </div>
                        <div className="w-px h-10 bg-wheat/20" />
                        <div>
                            <p className="text-2xl font-bold text-dark-brown">Daily</p>
                            <p className="text-xs text-muted uppercase tracking-tighter">Fresh Milling</p>
                        </div>
                        <div className="w-px h-10 bg-wheat/20" />
                        <div>
                            <p className="text-2xl font-bold text-dark-brown">Zero</p>
                            <p className="text-xs text-muted uppercase tracking-tighter">Preservatives</p>
                        </div>
                    </div>
                </div>

                <div className="relative animate-scale-in">
                    <div className="relative z-10 rounded-4xl overflow-hidden shadow-premium aspect-4/3 md:aspect-auto md:h-[500px] lg:h-[600px]">
                        <Image
                            src={lfmHero}
                            alt="Freshly ground flour and wheat grains"
                            fill
                            className="object-cover hover:scale-105 transition-transform duration-700"
                            priority
                            sizes="(max-width: 768px) 100vw, 50vw"
                        />
                        <div className="absolute inset-0 bg-linear-to-tr from-black/20 via-transparent to-transparent pointer-events-none" />
                    </div>

                    {/* Floating badge */}
                    <div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-2xl shadow-premium z-20 flex items-center gap-4 border border-wheat/10 animate-fade-in-up delay-500">
                        <div className="w-12 h-12 bg-ivory rounded-full flex items-center justify-center">
                            <span className="text-2xl">🌾</span>
                        </div>
                        <div>
                            <p className="text-sm font-bold text-dark-brown">MP Golden Wheat</p>
                            <p className="text-[10px] text-muted uppercase tracking-widest">Our Best Seller</p>
                        </div>
                    </div>

                    {/* Decorative shapes */}
                    <div className="absolute -top-12 -right-12 w-64 h-64 bg-accent-green/5 rounded-full blur-3xl -z-10" />
                </div>
            </div>
        </section>
    );
}
