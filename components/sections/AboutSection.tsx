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
              src="/about-photo.jpg"
              alt="Video editor at work in a dark studio"
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
            About Me
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            8+ years of crafting visual stories
          </h2>
          <div className="space-y-4 text-muted-foreground leading-relaxed">
            <p>
              I&apos;m a professional video editor specializing in cinematic storytelling,
              brand content, and documentary filmmaking. My passion lies in
              transforming raw footage into emotionally resonant narratives.
            </p>
            <p>
              From color grading to sound design, I handle every aspect of
              post-production with meticulous attention to detail. I&apos;ve worked with
              brands, creators, and filmmakers worldwide to bring their visions to life.
            </p>
          </div>
          <div className="grid grid-cols-3 gap-6 mt-10">
            {[
              { number: "200+", label: "Projects" },
              { number: "50+", label: "Clients" },
              { number: "8+", label: "Years" },
            ].map((stat) => (
              <div key={stat.label}>
                <p className="text-2xl md:text-3xl font-bold text-primary" style={{ fontFamily: "var(--font-display)" }}>
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
