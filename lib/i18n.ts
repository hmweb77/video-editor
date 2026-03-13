import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import en from "@/locales/en.json";
import fr from "@/locales/fr.json";
import ar from "@/locales/ar.json";

// Suppress i18next/Locize support notice in console
if (typeof globalThis !== "undefined") {
  (globalThis as unknown as { __i18next_supportNoticeShown?: boolean }).__i18next_supportNoticeShown = true;
}

export const defaultNS = "translation" as const;
export const supportedLngs = ["en", "fr", "ar"] as const;
export type Locale = (typeof supportedLngs)[number];

const resources = {
  en: { translation: en },
  fr: { translation: fr },
  ar: { translation: ar },
};

export function initI18n(lng: string = "en") {
  if (i18n.isInitialized) return i18n;
  i18n.use(initReactI18next).init({
    resources,
    lng,
    fallbackLng: "en",
    defaultNS,
    interpolation: {
      escapeValue: false,
    },
    supportedLngs: [...supportedLngs],
    react: { useSuspense: false },
  });
  return i18n;
}

export const localeLabels: Record<Locale, string> = {
  en: "EN",
  fr: "FR",
  ar: "العربية",
};

initI18n("en");
