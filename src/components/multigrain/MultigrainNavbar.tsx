"use client";

import { useState, useEffect } from "react";
import { ShoppingBasket, Menu, X, Phone, ArrowLeft } from "lucide-react";
import Link from "next/link";

const sectionLinks = [
    { label: "Grains", href: "#grains" },
    { label: "Blends", href: "#blends" },
    { label: "Benefits", href: "#benefits" },
    { label: "Process", href: "#process" },
    { label: "FAQ", href: "#faq" },
];

export default function MultigrainNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
                scrolled ? "bg-ivory/80 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"
            }`}
        >
            <nav className="max-w-7xl mx-auto px-6 flex justify-between items-center">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="bg-accent-green p-2 rounded-lg group-hover:rotate-12 transition-transform duration-300">
                        <ShoppingBasket className="text-white w-6 h-6" />
                    </div>
                    <span className="font-display text-2xl font-bold text-dark-brown tracking-tight">
                        Laxmi <span className="text-wheat">Flour Mill</span>
                    </span>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden lg:flex items-center gap-6">
                    <Link
                        href="/"
                        className="flex items-center gap-1.5 text-xs font-medium text-dark-brown/60 hover:text-accent-green transition-colors uppercase tracking-widest"
                    >
                        <ArrowLeft className="w-3.5 h-3.5" />
                        Home
                    </Link>
                    <span className="w-px h-5 bg-wheat/20" />
                    {sectionLinks.map((link) => (
                        <a
                            key={link.href}
                            href={link.href}
                            className="text-xs font-medium text-dark-brown/60 hover:text-accent-green transition-colors uppercase tracking-widest"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a
                        href="tel:+919876543210"
                        className="bg-dark-brown text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-green transition-colors flex items-center gap-2 ml-2"
                    >
                        <Phone className="w-4 h-4" />
                        Contact
                    </a>
                </div>

                {/* Mobile Toggle */}
                <button className="lg:hidden text-dark-brown" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 right-0 bg-ivory shadow-premium p-6 lg:hidden border-t border-wheat/10 transition-all duration-300 ${
                    isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                }`}
            >
                <ul className="space-y-5 text-center">
                    <li>
                        <Link
                            href="/"
                            onClick={() => setIsOpen(false)}
                            className="text-base font-medium text-dark-brown hover:text-accent-green flex items-center justify-center gap-2"
                        >
                            <ArrowLeft className="w-5 h-5" />
                            Back to Home
                        </Link>
                    </li>
                    <hr className="border-wheat/20" />
                    {sectionLinks.map((link) => (
                        <li key={link.href}>
                            <a
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className="text-base font-medium text-dark-brown/70 hover:text-accent-green transition-colors uppercase tracking-widest"
                            >
                                {link.label}
                            </a>
                        </li>
                    ))}
                    <hr className="border-wheat/20" />
                    <li>
                        <a
                            href="tel:+919876543210"
                            className="w-full bg-accent-green text-white py-4 rounded-xl flex justify-center items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            Call Now
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
