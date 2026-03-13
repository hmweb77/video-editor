"use client";

import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah Mitchell",
    role: "Brand Director, Lumina Co.",
    text: "Absolutely phenomenal work. The final cut exceeded every expectation. The pacing, the transitions, the color — everything was perfect.",
  },
  {
    name: "James Carter",
    role: "YouTube Creator, 2M+ subs",
    text: "Working with this editor transformed my channel. My retention rates doubled after the first video. Truly understands storytelling.",
  },
  {
    name: "Elena Rossi",
    role: "Independent Filmmaker",
    text: "A rare talent who brings both technical precision and creative vision. My documentary wouldn't have the same emotional impact without their editing.",
  },
];

const TestimonialsSection = () => {
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
            Testimonials
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            What clients say
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              className="bg-card border border-border rounded-lg p-8 flex flex-col"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(5)].map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-secondary-foreground leading-relaxed flex-1 mb-6">
                &quot;{t.text}&quot;
              </p>
              <div>
                <p className="font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-sm">{t.role}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
