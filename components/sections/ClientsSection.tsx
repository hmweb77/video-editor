"use client";

import { useState } from "react";
import { motion } from "framer-motion";

// Ajoutez vos logos dans /public/clients/ (client-1.png, client-2.png, etc.)
const clientLogos = [
  { name: "Client 1", src: "/clients/client-1.png" },
  { name: "Client 2", src: "/clients/client-2.png" },
  { name: "Client 3", src: "/clients/client-3.png" },
  { name: "Client 4", src: "/clients/client-4.png" },
  { name: "Client 5", src: "/clients/client-5.png" },
];

const ClientsSection = () => {
  const [failed, setFailed] = useState<Record<number, boolean>>({});
  return (
    <section className="py-16 px-6 border-t border-border border-b border-border">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">
            Confiance
          </p>
          <h2
            className="text-2xl md:text-4xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Ils m&apos;ont fait confiance
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="flex flex-wrap items-center justify-center gap-12 md:gap-16 grayscale opacity-50 hover:opacity-100 transition-opacity duration-300"
        >
          {clientLogos.map((client, i) => (
            <div
              key={client.name}
              className="h-10 md:h-12 flex items-center justify-center hover:grayscale-0 hover:opacity-100 transition-all duration-300"
            >
              {!failed[i] ? (
                <img
                  src={client.src}
                  alt={client.name}
                  className="max-h-full w-auto object-contain"
                  onError={() => setFailed((p) => ({ ...p, [i]: true }))}
                />
              ) : (
                <span className="text-muted-foreground text-sm font-medium">
                  {client.name}
                </span>
              )}
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ClientsSection;
