"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import { en } from "./dictionaries/en";
import { hi } from "./dictionaries/hi";

export type Language = "en" | "hi";
type Dictionary = typeof en;

interface LanguageContextType {
    language: Language;
    setLanguage: (lang: Language) => void;
    t: Dictionary;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: React.ReactNode }) {
    const [language, setLanguage] = useState<Language>("en");
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const savedLang = localStorage.getItem("app-language") as Language;
        if (savedLang === "en" || savedLang === "hi") {
            setLanguage(savedLang);
            document.documentElement.lang = savedLang;
        } else {
            document.documentElement.lang = "en";
        }
    }, []);

    const handleSetLanguage = (lang: Language) => {
        setLanguage(lang);
        localStorage.setItem("app-language", lang);
        document.documentElement.lang = lang;
    };

    const t = language === "hi" ? hi : en;

    // Optional: Avoid hydration mismatch by waiting for mount if you want to be completely safe,
    // but typically rendering 'en' on SSR and switching on client mount is acceptable.

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleSetLanguage, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const context = useContext(LanguageContext);
    if (!context) {
        throw new Error("useLanguage must be used within a LanguageProvider");
    }
    return context;
}
