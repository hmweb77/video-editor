"use client";

const Footer = () => {
  return (
    <footer className="border-t border-border bg-card py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        <a
          href="#"
          className="text-lg font-bold tracking-tight text-foreground"
          style={{ fontFamily: "var(--font-display)" }}
        >
          STUDIO<span className="text-primary">.</span>
        </a>
        <div className="flex items-center gap-8 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">
            À propos
          </a>
          <a href="#work" className="hover:text-foreground transition-colors">
            Réalisations
          </a>
          <a
            href="https://wa.me/212614778321"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-primary/80 transition-colors font-medium"
          >
            Contact
          </a>
        </div>
      </div>
      <div className="max-w-6xl mx-auto mt-8 pt-8 border-t border-border text-center text-sm text-muted-foreground">
        © 2026 Studio. Tous droits réservés.
      </div>
    </footer>
  );
};

export default Footer;
