"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const AboutSection = () => {
  const { t } = useTranslation();

  const stats = [
    { number: "350+", key: "statProjects" },
    { number: "11+", key: "statClients" },
    { number: "2+", key: "statYears" },
  ];

  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 md:gap-20 items-center">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] overflow-hidden rounded-lg">
            <img
              src="/myim.jpeg"
              alt={t("about.imageAlt")}
              className="w-full h-full object-cover"
            />
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("about.badge")}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("about.title")}
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>{t("about.body")}</p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {stats.map((stat) => (
              <div key={stat.key}>
                <p
                  className="text-2xl md:text-3xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm mt-1">
                  {t(`about.${stat.key}`)}
                </p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
