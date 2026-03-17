"use client";

import { ShoppingBasket, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { useLanguage } from "@/i18n/LanguageContext";

export default function Footer() {
    const { t } = useLanguage();

    const quickLinks = [
        { name: t.mainNav.home, href: "/" },
        { name: t.mainNav.ourProcess, href: "#process" },
        { name: t.mainNav.products, href: "#products" },
        { name: t.mainNav.multigrainAtta, href: "/multigrain" },
        { name: t.mainNav.contactUs, href: "#contact" },
    ];

    return (
        <footer className="bg-ivory border-t border-wheat/10 pt-24 pb-12">
            <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-16 mb-20">
                <div className="col-span-1 md:col-span-2 space-y-8">
                    <div className="flex items-center gap-2">
                        <div className="bg-accent-green p-2 rounded-lg">
                            <ShoppingBasket className="text-white w-6 h-6" />
                        </div>
                        <span className="font-display text-2xl font-bold text-dark-brown">
                            Laxmi <span className="text-wheat">Flour Mill</span>
                        </span>
                    </div>
                    <p className="text-muted max-w-sm leading-relaxed">
                        {t.footer.tagline}
                    </p>
                </div>

                <div>
                    <h4 className="font-display font-bold text-dark-brown mb-8 uppercase tracking-widest text-xs">{t.footer.quickLinks}</h4>
                    <ul className="space-y-4">
                        {quickLinks.map((link) => (
                            <li key={link.name}>
                                <Link href={link.href} className="text-sm text-muted hover:text-accent-green transition-colors">
                                    {link.name}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-display font-bold text-dark-brown mb-8 uppercase tracking-widest text-xs">{t.footer.contactUs}</h4>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <MapPin className="w-5 h-5 text-accent-green shrink-0" />
                            <p className="text-sm text-muted">{t.footer.address}</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Phone className="w-5 h-5 text-accent-green shrink-0" />
                            <p className="text-sm text-muted">+91 8210134128</p>
                        </li>
                        <li className="flex gap-4 items-center">
                            <Mail className="w-5 h-5 text-accent-green shrink-0" />
                            <p className="text-sm text-muted">mkprajapati@zohomail.in</p>
                        </li>
                    </ul>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-wheat/10 flex flex-col md:flex-row justify-between items-center gap-6">
                <p className="text-[10px] text-muted uppercase tracking-[0.2em]">
                    © 2026 Laxmi Flour Mill. {t.footer.rights}
                </p>
                <div className="flex gap-8">
                    <Link href="#" className="text-[10px] text-muted hover:text-dark-brown uppercase tracking-widest">{t.footer.privacy}</Link>
                    <Link href="#" className="text-[10px] text-muted hover:text-dark-brown uppercase tracking-widest">{t.footer.terms}</Link>
                </div>
            </div>
        </footer>
    );
}
