"use client";

import { motion } from "framer-motion";
import { Clapperboard, Palette, Volume2, Smartphone } from "lucide-react";

const services = [
  {
    icon: Clapperboard,
    title: "Montage Vidéo",
    description:
      "Du rush au film final, structure narrative, rythme, transitions et pacing qui tiennent votre audience en haleine.",
  },
  {
    icon: Palette,
    title: "Étalonnage Couleur",
    description:
      "Des looks cinématiques sur mesure qui racontent une histoire à travers la couleur et renforcent l'identité visuelle.",
  },
  {
    icon: Volume2,
    title: "Sound Design",
    description:
      "Musique, effets sonores et mixage audio pour une immersion totale qui amplifie chaque émotion.",
  },
  {
    icon: Smartphone,
    title: "Contenu Réseaux Sociaux",
    description:
      "Formats optimisés pour Instagram, YouTube et TikTok, des vidéos pensées pour l'engagement et le partage.",
  },
];

const ServicesSection = () => {
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
            Services
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ce que je fais pour vous
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-6 lg:gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-card border border-border rounded-lg p-8 flex flex-col gap-4"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <service.icon className="w-6 h-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "var(--font-display)" }}>
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
