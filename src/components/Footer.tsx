import { ShoppingBasket, MapPin, Mail, Phone } from "lucide-react";
import Link from "next/link";

export default function Footer() {
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
                        Reviving the tradition of fresh, stone-ground flour for modern homes.
                        Pure, nutritious, and delivered with love from our family to yours.
                    </p>
                </div>

                <div>
                    <h4 className="font-display font-bold text-dark-brown mb-8 uppercase tracking-widest text-xs">Quick Links</h4>
                    <ul className="space-y-4">
                        {["Home", "Our Process", "Products", "Testimonials", "Contact"].map((item) => (
                            <li key={item}>
                                <Link href="#" className="text-sm text-muted hover:text-accent-green transition-colors">
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                <div>
                    <h4 className="font-display font-bold text-dark-brown mb-8 uppercase tracking-widest text-xs">Contact Us</h4>
                    <ul className="space-y-6">
                        <li className="flex gap-4 items-start">
                            <MapPin className="w-5 h-5 text-accent-green shrink-0" />
                            <p className="text-sm text-muted">Kadru Kumhar Toli, Ranchi, 834002</p>
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

            <div className="max-w-7xl mx-auto px-6 pt-12 border-t border-wheat/10 flex flex-col md:row justify-between items-center gap-6">
                <p className="text-[10px] text-muted uppercase tracking-[0.2em]">
                    © 2026 Laxmi Flour Mill. All rights reserved.
                </p>
                <div className="flex gap-8">
                    <Link href="#" className="text-[10px] text-muted hover:text-dark-brown uppercase tracking-widest">Privacy Policy</Link>
                    <Link href="#" className="text-[10px] text-muted hover:text-dark-brown uppercase tracking-widest">Terms of Service</Link>
                </div>
            </div>
        </footer>
    );
}
