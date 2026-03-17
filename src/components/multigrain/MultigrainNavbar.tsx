"use client";

import { useState, useEffect } from "react";
import { ShoppingBasket, Menu, X, Phone, ArrowLeft, Globe } from "lucide-react";
import Link from "next/link";
import { useLanguage, Language } from "@/i18n/LanguageContext";

const SECTION_LINKS = [
    { id: "grains", labelKey: "grains" as keyof typeof import('@/i18n/dictionaries/en').en.nav },
    { id: "custom-blends", labelKey: "customBlends" as keyof typeof import('@/i18n/dictionaries/en').en.nav },
    { id: "health-issues", labelKey: "healthIssues" as keyof typeof import('@/i18n/dictionaries/en').en.nav, isAction: true },
    { id: "process", labelKey: "process" as keyof typeof import('@/i18n/dictionaries/en').en.nav },
    { id: "faq", labelKey: "faq" as keyof typeof import('@/i18n/dictionaries/en').en.nav },
];

export default function MultigrainNavbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const { language, setLanguage, t } = useLanguage();

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const toggleLanguage = () => {
        setLanguage(language === "en" ? "hi" : "en");
    };

    const handleActionClick = (e: React.MouseEvent, link: typeof SECTION_LINKS[0]) => {
        if (link.isAction) {
            e.preventDefault();
            if (link.id === "health-issues") {
                window.dispatchEvent(new Event('openHealthIssuesModal'));
            }
        }
    };

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
                        {t.nav.home}
                    </Link>
                    <span className="w-px h-5 bg-wheat/20" />
                    {SECTION_LINKS.map((link) => (
                        <a
                            key={link.id}
                            href={`#${link.id}`}
                            onClick={(e) => handleActionClick(e, link)}
                            className="text-xs font-medium text-dark-brown/60 hover:text-accent-green transition-colors uppercase tracking-widest"
                        >
                            {t.nav[link.labelKey as keyof typeof t.nav]}
                        </a>
                    ))}
                    
                    {/* Language Toggle */}
                    <button
                        onClick={toggleLanguage}
                        className="flex items-center gap-1.5 text-xs font-bold bg-dark-brown/5 text-dark-brown px-3 py-1.5 rounded-lg hover:bg-wheat/20 transition-colors uppercase ml-2"
                        title="Toggle Language"
                    >
                        <Globe className="w-4 h-4" />
                        {language === "en" ? "HI" : "EN"}
                    </button>

                    <a
                        href="tel:+918210134128"
                        className="bg-dark-brown text-white px-5 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-green transition-colors flex items-center gap-2"
                    >
                        <Phone className="w-4 h-4" />
                        {t.nav.contact}
                    </a>
                </div>

                {/* Mobile Toggle */}
                <div className="lg:hidden flex items-center gap-4">
                    {/* Language Toggle Mobile */}
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
                            {t.nav.backToHome}
                        </Link>
                    </li>
                    <hr className="border-wheat/20" />
                    {SECTION_LINKS.map((link) => (
                        <li key={link.id}>
                            <a
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    setIsOpen(false);
                                    handleActionClick(e, link);
                                }}
                                className="text-base font-medium text-dark-brown/70 hover:text-accent-green transition-colors uppercase tracking-widest"
                            >
                                {t.nav[link.labelKey as keyof typeof t.nav]}
                            </a>
                        </li>
                    ))}
                    <hr className="border-wheat/20" />
                    <li>
                        <a
                            href="tel:+918210134128"
                            className="w-full bg-accent-green text-white py-4 rounded-xl flex justify-center items-center gap-2"
                        >
                            <Phone className="w-5 h-5" />
                            {t.nav.callNow}
                        </a>
                    </li>
                </ul>
            </div>
        </header>
    );
}
