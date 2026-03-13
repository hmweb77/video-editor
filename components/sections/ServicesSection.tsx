"use client";

import { motion } from "framer-motion";
import { Clapperboard, Palette, Volume2, Smartphone } from "lucide-react";
import { useTranslation } from "react-i18next";

const serviceKeys = [
  { icon: Clapperboard, key: "videoEditing" },
  { icon: Palette, key: "colorGrading" },
  { icon: Volume2, key: "soundDesign" },
  { icon: Smartphone, key: "socialContent" },
] as const;

const ServicesSection = () => {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 px-6 bg-secondary/30">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("services.badge")}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("services.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {serviceKeys.map((item, i) => (
            <motion.div
              key={item.key}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <item.icon className="w-6 h-6" />
              </div>
              <h3
                className="text-xl font-bold text-foreground"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {t(`services.${item.key}.title`)}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {t(`services.${item.key}.description`)}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
