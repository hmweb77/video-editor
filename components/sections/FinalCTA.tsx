"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight, Mail } from "lucide-react";
import { useTranslation } from "react-i18next";

const FinalCTA = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="max-w-3xl mx-auto text-center"
      >
        <h2
          className="text-3xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight"
          style={{ fontFamily: "var(--font-display)" }}
        >
          {t("cta.title")}{" "}
          <span className="text-gradient">{t("cta.titleHighlight")}</span>
          {t("cta.titleSuffix")}
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          {t("cta.description")}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/212708835156"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="hero" size="lg" className="gap-2">
              {t("cta.whatsapp")} <ArrowRight className="w-4 h-4" />
            </Button>
          </a>
          <a href="mailto:Aminehamdani707@gmail.com">
            <Button variant="heroOutline" size="lg" className="gap-2">
              <Mail className="w-4 h-4" /> {t("cta.email")}
            </Button>
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
