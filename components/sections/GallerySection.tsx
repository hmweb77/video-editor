"use client";

import { motion } from "framer-motion";
import { useTranslation } from "react-i18next";

const videos = [
  { title: "Brand Film — Lumina", category: "Commercial", reelUrl: "https://www.instagram.com/p/DQ4m8jAAHnY/" },
  { title: "Travel Documentary", category: "Documentary", reelUrl: "https://www.instagram.com/p/DQ1y_HsjUo_/" },
  { title: "Music Video — Echoes", category: "Music Video", reelUrl: "https://www.instagram.com/p/DVzIAxYIlPz/" },
  { title: "Product Launch Reel", category: "Commercial", reelUrl: "https://www.instagram.com/p/DVt-aBFItn8/" },
  { title: "Short Film — Dusk", category: "Narrative", reelUrl: "https://www.instagram.com/p/DVo00rTIrS_/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DVbCS3MijDl/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DVzInTMjU2X/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DVo0SB8jWHW/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DVhH0vijDmX/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DVCDQKZDDDj/" },
  { title: "Event Highlight", category: "Event", reelUrl: "https://www.instagram.com/p/DUghjsDjOog/" },
];

function getEmbedUrl(url: string): string {
  const trimmed = url.replace(/\/?$/, "");
  return `${trimmed}/embed/`;
}

const GallerySection = () => {
  const { t } = useTranslation();

  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary tracking-[0.3em] uppercase text-xs font-medium mb-4">
            {t("gallery.badge")}
          </p>
          <h2
            className="text-3xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {t("gallery.title")}
          </h2>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {videos.map((video, i) => (
            <motion.div
              key={`${video.reelUrl}-${i}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex flex-col gap-3"
            >
              <div className="bg-card border border-border rounded-lg overflow-hidden aspect-[9/16] max-h-[500px] w-full mx-auto">
                <iframe
                  src={getEmbedUrl(video.reelUrl)}
                  title={video.title}
                  className="w-full h-full min-h-[400px]"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
