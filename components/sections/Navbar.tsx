"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Globe } from "lucide-react";
import { useTranslation } from "react-i18next";
import { useLocale } from "@/components/providers/I18nProvider";
import { supportedLngs, localeLabels, type Locale } from "@/lib/i18n";

const navLinkKeys = [
  { href: "#about", key: "about" as const },
  { href: "#work", key: "work" as const },
  { href: "https://wa.me/212708835156", key: "contact" as const, external: true, primary: true },
] as const;

type NavLink = (typeof navLinkKeys)[number];
const isExternal = (link: NavLink): link is NavLink & { external: true } => "external" in link && link.external;
const isPrimary = (link: NavLink): link is NavLink & { primary: true } => "primary" in link && link.primary;

const Navbar = () => {
  const { t } = useTranslation();
  const { locale, setLocale, ready } = useLocale();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [langMenuOpen, setLangMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const closeMobile = () => setMobileOpen(false);

  const navClassName = scrolled
    ? "bg-background/80 backdrop-blur-md border-b border-border"
    : "bg-transparent border-b border-transparent";

  return (
    <motion.nav
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-5 transition-all duration-300 ${navClassName}`}
    >
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <a
          href="#"
          className="text-xl font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Amine<span className="text-primary">.</span>
        </a>

        {/* Desktop: nav links + language switcher */}
        <div className="hidden md:flex items-center gap-6 text-sm text-muted-foreground">
          {navLinkKeys.map((link) =>
            isExternal(link) ? (
              <a
                key={link.key}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className={isPrimary(link) ? "text-primary hover:text-primary/80 transition-colors font-medium" : "hover:text-foreground transition-colors"}
              >
                {t(`navbar.${link.key}`)}
              </a>
            ) : (
              <a
                key={link.key}
                href={link.href}
                onClick={closeMobile}
                className={isPrimary(link) ? "text-primary hover:text-primary/80 transition-colors font-medium" : "hover:text-foreground transition-colors"}
              >
                {t(`navbar.${link.key}`)}
              </a>
            )
          )}

          {/* Language switch */}
          {ready && (
            <div className="relative">
              <button
                type="button"
                onClick={() => setLangMenuOpen((o) => !o)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-lg border border-border bg-card hover:bg-muted/50 transition-colors text-foreground"
                aria-label="Switch language"
              >
                <Globe className="w-4 h-4" />
                <span className="font-medium">{localeLabels[locale]}</span>
              </button>
              <AnimatePresence>
                {langMenuOpen && (
                  <>
                    <div
                      className="fixed inset-0 z-40"
                      aria-hidden
                      onClick={() => setLangMenuOpen(false)}
                    />
                    <motion.div
                      initial={{ opacity: 0, y: -8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -8 }}
                      transition={{ duration: 0.15 }}
                      className="absolute right-0 top-full mt-2 py-2 min-w-[120px] rounded-lg border border-border bg-card shadow-lg z-50"
                    >
                      {supportedLngs.map((lng) => (
                        <button
                          key={lng}
                          type="button"
                          onClick={() => {
                            setLocale(lng as Locale);
                            setLangMenuOpen(false);
                          }}
                          className={`w-full text-left px-4 py-2 text-sm transition-colors ${
                            locale === lng ? "bg-primary/10 text-primary font-medium" : "hover:bg-muted/50 text-foreground"
                          }`}
                        >
                          {localeLabels[lng as Locale]}
                        </button>
                      ))}
                    </motion.div>
                  </>
                )}
              </AnimatePresence>
            </div>
          )}
        </div>

        {/* Mobile: menu button + language */}
        <div className="flex md:hidden items-center gap-2">
          {ready && (
            <button
              type="button"
              onClick={() => setLocale(locale === "en" ? "fr" : locale === "fr" ? "ar" : "en")}
              className="p-2 rounded-lg border border-border bg-card hover:bg-muted/50 text-foreground text-sm font-medium"
              aria-label="Switch language"
            >
              {localeLabels[locale]}
            </button>
          )}
          <button
            type="button"
            onClick={() => setMobileOpen((o) => !o)}
            className="p-2 -mr-2 text-foreground hover:text-primary transition-colors rounded-lg focus:outline-none focus:ring-2 focus:ring-primary/50"
            aria-label={mobileOpen ? t("navbar.closeMenu") : t("navbar.openMenu")}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile full-screen overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-0 top-0 left-0 right-0 bottom-0 z-[-1] md:hidden bg-background/95 backdrop-blur-lg"
            style={{ marginTop: 0 }}
          >
            <div className="flex min-h-screen flex-col pt-24 pb-12 px-6">
              <div className="flex flex-col gap-2">
                {navLinkKeys.map((link, i) => (
                  <motion.div
                    key={link.key}
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.05 * i }}
                  >
                    {isExternal(link) ? (
                      <a
                        href={link.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={closeMobile}
                        className={`block py-4 px-4 text-xl rounded-lg transition-colors ${
                          isPrimary(link)
                            ? "text-primary font-medium hover:bg-primary/10"
                            : "text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {t(`navbar.${link.key}`)}
                      </a>
                    ) : (
                      <a
                        href={link.href}
                        onClick={closeMobile}
                        className={`block py-4 px-4 text-xl rounded-lg transition-colors ${
                          isPrimary(link)
                            ? "text-primary font-medium hover:bg-primary/10"
                            : "text-foreground hover:bg-muted/50"
                        }`}
                      >
                        {t(`navbar.${link.key}`)}
                      </a>
                    )}
                  </motion.div>
                ))}
                {ready && (
                  <motion.div
                    initial={{ opacity: 0, y: 12 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.15 }}
                    className="flex gap-2 pt-4 px-4"
                  >
                    {supportedLngs.map((lng) => (
                      <button
                        key={lng}
                        type="button"
                        onClick={() => {
                          setLocale(lng as Locale);
                          closeMobile();
                        }}
                        className={`px-4 py-2 rounded-lg text-sm font-medium border transition-colors ${
                          locale === lng ? "border-primary bg-primary/10 text-primary" : "border-border hover:bg-muted/50"
                        }`}
                      >
                        {localeLabels[lng as Locale]}
                      </button>
                    ))}
                  </motion.div>
                )}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
};

export default Navbar;
