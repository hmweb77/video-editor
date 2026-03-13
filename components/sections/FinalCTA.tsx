"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

const FinalCTA = () => {
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
          Ready to bring your{" "}
          <span className="text-gradient">vision to life</span>?
        </h2>
        <p className="text-muted-foreground text-lg mb-10 max-w-xl mx-auto">
          Let&apos;s create something extraordinary together. Get in touch and let&apos;s
          discuss your next project.
        </p>
        <a
          href="https://wa.me/212614778321"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button variant="hero" size="lg" className="gap-2">
            Get In Touch <ArrowRight className="w-4 h-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
};

export default FinalCTA;
