"use client";

import { useState, useEffect } from "react";
import { ShoppingBasket, Menu, X, Phone } from "lucide-react";
import Link from "next/link";

const navLinks = [
    { name: "Home", href: "#" },
    { name: "Our Process", href: "#process" },
    { name: "Products", href: "#products" },
    { name: "Testimonials", href: "#testimonials" },
];

export default function Navbar() {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20);
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

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
                                    className="text-sm font-medium text-dark-brown/70 hover:text-accent-green transition-colors uppercase tracking-widest"
                                >
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-dark-brown text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-accent-green transition-colors flex items-center gap-2">
                        <Phone className="w-4 h-4" />
                        Contact Us
                    </button>
                </div>

                {/* Mobile Toggle */}
                <button className="md:hidden text-dark-brown" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
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
                                className="text-lg font-medium text-dark-brown hover:text-accent-green block"
                            >
                                {link.name}
                            </Link>
                        </li>
                    ))}
                    <hr className="border-wheat/20" />
                    <button className="w-full bg-accent-green text-white py-4 rounded-xl flex justify-center items-center gap-2">
                        <Phone className="w-5 h-5" />
                        Call Now
                    </button>
                </ul>
            </div>
        </header>
    );
}
