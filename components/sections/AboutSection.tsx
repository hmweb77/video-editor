"use client";

import { motion } from "framer-motion";

const AboutSection = () => {
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
              alt="Monteur vidéo au travail en studio"
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
            À propos
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            +2 ans à donner vie aux histoires visuelles
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              Je suis monteur vidéo depuis 2 ans. Ce qui a commencé comme une passion est devenu un métier puis une obsession. J'ai monté pour plusieurs des créateurs et Le point commun ? À chaque fois, je cherche la même chose : le moment où le spectateur oublie qu'il regarde une vidéo.
              Montage, étalonnage et sound design, je gère tout. Mais si je devais résumer ce que je fais en une phrase : je prends vos rushes et j'en fais quelque chose que les gens regardent jusqu'au bout.
            </p>
            
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { number: "350+", label: "Projets livrés" },
              { number: "11+", label: "Clients satisfaits" },
              { number: "2+", label: "Années d'expérience" },
            ].map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-2xl md:text-3xl font-bold text-primary"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {stat.number}
                </p>
                <p className="text-muted-foreground text-sm mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutSection;
