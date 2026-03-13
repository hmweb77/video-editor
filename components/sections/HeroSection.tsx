"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { useTranslation } from "react-i18next";

const HeroSection = () => {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div
        className="absolute inset-0 w-full h-full object-cover bg-cover bg-center"
        style={{ backgroundImage: "url(/hero-bg.jpg)" }}
        aria-hidden
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-medium tracking-[0.3em] uppercase text-sm mb-6"
        >
          {t("hero.badge")}
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl lg:text-8xl font-bold leading-[0.95] tracking-tight mb-8"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("hero.title")}{" "}
          <span className="text-gradient">{t("hero.titleHighlight")}</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10"
        >
          {t("hero.description")}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <a href="#work">
            <Button variant="hero" size="lg" className="gap-2">
              <Play className="w-4 h-4" /> {t("hero.ctaWork")}
            </Button>
          </a>
          <a
            href="https://wa.me/212708835156"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="heroOutline" size="lg">
              {t("hero.ctaContact")}
            </Button>
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
