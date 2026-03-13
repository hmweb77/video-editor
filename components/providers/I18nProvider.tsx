"use client";

import { createContext, useContext, useEffect, useState } from "react";
import i18n from "i18next";
import { initI18n, type Locale } from "@/lib/i18n";

const STORAGE_KEY = "video-editor-locale";

function getStoredLocale(): Locale {
  if (typeof window === "undefined") return "en";
  const stored = localStorage.getItem(STORAGE_KEY) as Locale | null;
  if (stored && ["en", "fr", "ar"].includes(stored)) return stored;
  return "en";
}

function applyLocaleToDocument(lng: Locale) {
  if (typeof document === "undefined") return;
  document.documentElement.lang = lng === "ar" ? "ar" : lng === "fr" ? "fr" : "en";
  document.documentElement.dir = lng === "ar" ? "rtl" : "ltr";
}

interface I18nContextValue {
  locale: Locale;
  setLocale: (lng: Locale) => void;
  ready: boolean;
}

const I18nContext = createContext<I18nContextValue>({
  locale: "en",
  setLocale: () => {},
  ready: false,
});

export function useLocale() {
  return useContext(I18nContext);
}

export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");
  const [ready, setReady] = useState(false);

  useEffect(() => {
    initI18n("en");
    const stored = getStoredLocale();
    i18n.changeLanguage(stored).then(() => {
      setLocaleState(stored);
      applyLocaleToDocument(stored);
    });
    setReady(true);
    const onLanguageChanged = (lng: string) => {
      setLocaleState(lng as Locale);
      applyLocaleToDocument(lng as Locale);
    };
    i18n.on("languageChanged", onLanguageChanged);
    return () => i18n.off("languageChanged", onLanguageChanged);
  }, []);

  const setLocale = (lng: Locale) => {
    if (!ready) return;
    i18n.changeLanguage(lng);
    setLocaleState(lng);
    localStorage.setItem(STORAGE_KEY, lng);
    applyLocaleToDocument(lng);
  };

  return (
    <I18nContext.Provider value={{ locale, setLocale, ready }}>
      {children}
    </I18nContext.Provider>
  );
}
