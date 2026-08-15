import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { Menu, X, Zap } from "lucide-react";

const links = ["Product", "Templates", "Pricing", "Customers"];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
      className="fixed inset-x-0 top-0 z-50"
    >
      <div
        className={`transition-all duration-500 ${
          scrolled
            ? "backdrop-blur-xl bg-background/70 border-b border-border"
            : "bg-transparent border-b border-transparent"
        }`}
      >
        <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <a href="#" className="flex items-center gap-2.5">
            <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground shadow-[0_0_24px_-4px] shadow-primary/70">
              <Zap className="size-4" strokeWidth={2.5} />
            </span>
            <span className="font-display text-[1.35rem] font-semibold tracking-tight">
              Prism
            </span>
          </a>

          <div className="hidden items-center gap-8 md:flex">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-secondary-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </div>

          <div className="hidden items-center gap-3 md:flex">
            <a
              href="#"
              className="text-sm text-secondary-foreground transition-colors hover:text-foreground"
            >
              Sign in
            </a>
            <a
              href="#pricing"
              className="rounded-lg bg-foreground px-4 py-2 text-sm text-background transition-transform hover:-translate-y-0.5"
            >
              Start free
            </a>
          </div>

          <button
            onClick={() => setOpen((o) => !o)}
            className="grid size-9 place-items-center rounded-lg border border-border md:hidden"
            aria-label="Toggle menu"
          >
            {open ? <X className="size-5" /> : <Menu className="size-5" />}
          </button>
        </nav>

        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            className="overflow-hidden border-t border-border md:hidden"
          >
            <div className="flex flex-col gap-1 px-6 py-4">
              {links.map((l) => (
                <a
                  key={l}
                  href={`#${l.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="rounded-lg px-3 py-2.5 text-sm text-secondary-foreground hover:bg-secondary hover:text-foreground"
                >
                  {l}
                </a>
              ))}
              <a
                href="#pricing"
                className="mt-2 rounded-lg bg-foreground px-4 py-2.5 text-center text-sm text-background"
              >
                Start free
              </a>
            </div>
          </motion.div>
        )}
      </div>
    </motion.header>
  );
}
