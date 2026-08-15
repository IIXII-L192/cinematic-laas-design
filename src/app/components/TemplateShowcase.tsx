import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import { ImageWithFallback } from "./figma/ImageWithFallback";

type Template = {
  name: string;
  category: string;
  tag: string;
  img: string;
  cvr: string;
};

const templates: Template[] = [
  {
    name: "Nebula",
    category: "SaaS",
    tag: "Product launch",
    cvr: "8.4%",
    img: "https://images.unsplash.com/photo-1614852206732-6728910dc175?w=900&h=680&fit=crop&auto=format",
  },
  {
    name: "Aperture",
    category: "Startup",
    tag: "Waitlist",
    cvr: "12.1%",
    img: "https://images.unsplash.com/photo-1654198340681-a2e0fc449f1b?w=900&h=680&fit=crop&auto=format",
  },
  {
    name: "Halcyon",
    category: "Agency",
    tag: "Portfolio",
    cvr: "6.9%",
    img: "https://images.unsplash.com/photo-1635776062360-af423602aff3?w=900&h=680&fit=crop&auto=format",
  },
  {
    name: "Vantage",
    category: "SaaS",
    tag: "Pricing page",
    cvr: "9.7%",
    img: "https://images.unsplash.com/photo-1645724298070-c30a506ec96f?w=900&h=680&fit=crop&auto=format",
  },
  {
    name: "Lumière",
    category: "Ecommerce",
    tag: "Drop launch",
    cvr: "11.3%",
    img: "https://images.unsplash.com/photo-1659469377768-4f42f2f091c5?w=900&h=680&fit=crop&auto=format",
  },
  {
    name: "Signal",
    category: "Startup",
    tag: "Beta invite",
    cvr: "10.2%",
    img: "https://images.unsplash.com/photo-1671226366556-c3efaa10edf0?w=900&h=680&fit=crop&auto=format",
  },
];

const filters = ["All", "SaaS", "Startup", "Agency", "Ecommerce"];

export function TemplateShowcase() {
  const [active, setActive] = useState("All");
  const shown =
    active === "All"
      ? templates
      : templates.filter((t) => t.category === active);

  return (
    <section id="templates" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div className="max-w-xl">
            <span className="font-mono-data text-xs uppercase tracking-widest text-[#5eead4]">
              Template gallery
            </span>
            <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
              Start from a page that already converts
            </h2>
          </div>
          <div className="flex flex-wrap gap-2">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`rounded-full border px-4 py-1.5 text-sm transition-colors ${
                  active === f
                    ? "border-primary bg-primary/15 text-primary"
                    : "border-border text-secondary-foreground hover:text-foreground"
                }`}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          <AnimatePresence mode="popLayout">
            {shown.map((t) => (
              <motion.a
                key={t.name}
                href="#"
                layout
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.96 }}
                transition={{ duration: 0.4 }}
                className="group relative overflow-hidden rounded-2xl border border-border bg-card"
              >
                <div className="relative aspect-[4/3] overflow-hidden bg-secondary">
                  <ImageWithFallback
                    src={t.img}
                    alt={`${t.name} landing page template`}
                    className="size-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/10 to-transparent" />
                  <span className="absolute left-4 top-4 rounded-full bg-background/70 px-3 py-1 font-mono-data text-[0.7rem] uppercase tracking-wider text-foreground backdrop-blur">
                    {t.tag}
                  </span>
                </div>
                <div className="flex items-center justify-between p-5">
                  <div>
                    <h3 className="text-lg">{t.name}</h3>
                    <p className="font-mono-data text-xs text-muted-foreground">
                      Avg. CVR {t.cvr}
                    </p>
                  </div>
                  <span className="grid size-9 place-items-center rounded-full border border-border text-secondary-foreground transition-colors group-hover:border-primary group-hover:text-primary">
                    <ArrowUpRight className="size-4" />
                  </span>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
}
