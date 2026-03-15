"use client";

import { useState, useEffect } from "react";
import { ShoppingBasket, Menu, X, Phone, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    const navLinks = [
        { name: t.mainNav.home, href: "#", highlight: false },
        { name: t.mainNav.ourProcess, href: "#process", highlight: false },
        { name: t.mainNav.products, href: "#products", highlight: false },
        { name: t.mainNav.testimonials, href: "#testimonials", highlight: false },
        { name: t.mainNav.multigrainAtta, href: "/multigrain", highlight: true },
    ];

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "hi" : "en");
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? "bg-ivory/80 backdrop-blur-md shadow-soft py-4" : "bg-transparent py-6"
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
                <div className="hidden md:flex items-center gap-10">
                    <ul className="flex gap-8">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <Link
                                    href={link.href}
                                    className={
                                        link.highlight
                                            ? "text-sm font-semibold text-wheat hover:text-dark-brown transition-colors uppercase tracking-widest border-b border-wheat/50 pb-0.5"
                                            : "text-sm font-medium text-dark-brown/70 hover:text-accent-green transition-colors uppercase tracking-widest"
                                    }
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>

                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-xs font-bold bg-dark-brown/5 text-dark-brown px-3 py-1.5 rounded-lg hover:bg-wheat/20 transition-colors uppercase"
                        title="Toggle Language"
                    >
                        <Globe className="w-4 h-4" />
                        {language === "en" ? "HI" : "EN"}
                    </button>

                    <a 
                        href="tel:+918210134128"
                        className="bg-dark-brown text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-green transition-colors flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        {t.mainNav.contactUs}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="md:hidden flex items-center gap-4">
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center justify-center text-xs font-bold bg-dark-brown/5 text-dark-brown w-8 h-8 rounded-lg hover:bg-wheat/20 transition-colors uppercase"
                    >
                        {language === "en" ? "HI" : "EN"}
                    </button>
                    <button className="text-dark-brown" onClick={() => setIsOpen(!isOpen)}>
                        {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                    </button>
                </div>
            </nav>

            {/* Mobile Menu */}
            <div
                className={`absolute top-full left-0 right-0 bg-ivory shadow-premium p-6 md:hidden border-t border-wheat/10 transition-all duration-300 ${isOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-4 pointer-events-none"
                    }`}
            >
                <ul className="space-y-6 text-center">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <Link
                                href={link.href}
                                onClick={() => setIsOpen(false)}
                                className={
                                    link.highlight
                                        ? "text-lg font-bold text-wheat hover:text-dark-brown block"
                                        : "text-lg font-medium text-dark-brown hover:text-accent-green block"
                                }
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <hr className="border-wheat/20" />
                    <a 
                        href="tel:+918210134128"
                        className="w-full bg-accent-green text-white py-4 rounded-xl flex justify-center items-center gap-2"
                    >
                        <Phone className="w-5 h-5" />
                        {t.mainNav.contactUs}
                    </a>
                </ul>
            </div>
        </header>
    );
}
