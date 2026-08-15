import { motion } from "motion/react";
import {
  Wand2,
  GitBranch,
  Gauge,
  BarChart3,
  Globe2,
  Palette,
} from "lucide-react";

const features = [
  {
    icon: Wand2,
    title: "AI-native builder",
    body: "Describe the page you want and Prism drafts copy, layout, and imagery in seconds. Refine visually — every block stays editable.",
    accent: "#7c5cff",
    span: "md:col-span-2",
  },
  {
    icon: Globe2,
    title: "Global edge delivery",
    body: "Every page ships to 320 edge locations with sub-50ms TTFB worldwide.",
    accent: "#5eead4",
    span: "",
  },
  {
    icon: GitBranch,
    title: "Built-in A/B testing",
    body: "Split traffic across variants and let Prism auto-promote the winner.",
    accent: "#f472b6",
    span: "",
  },
  {
    icon: BarChart3,
    title: "Conversion analytics",
    body: "Heatmaps, funnels, and real-time visitor sessions in one dashboard — no third-party tags required.",
    accent: "#fbbf24",
    span: "md:col-span-2",
  },
  {
    icon: Palette,
    title: "Brand tokens",
    body: "Sync fonts, colors, and components so every page stays perfectly on-brand.",
    accent: "#60a5fa",
    span: "",
  },
  {
    icon: Gauge,
    title: "Perfect Lighthouse",
    body: "100/100 performance out of the box. Images, fonts, and scripts optimized automatically.",
    accent: "#7c5cff",
    span: "md:col-span-2",
  },
];

export function Features() {
  return (
    <section id="product" className="relative py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono-data text-xs uppercase tracking-widest text-primary">
            The platform
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Everything you need between idea and launch
          </h2>
          <p className="mt-4 text-lg text-secondary-foreground">
            Prism replaces your page builder, hosting, testing stack, and
            analytics with one cinematic surface.
          </p>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: (i % 3) * 0.08 }}
              className={`group relative overflow-hidden rounded-2xl border border-border bg-card p-7 transition-colors hover:border-white/15 ${f.span}`}
            >
              <div
                className="absolute -right-16 -top-16 size-40 rounded-full opacity-0 blur-3xl transition-opacity duration-500 group-hover:opacity-40"
                style={{ background: f.accent }}
              />
              <span
                className="grid size-11 place-items-center rounded-xl border border-border"
                style={{ background: `${f.accent}1a`, color: f.accent }}
              >
                <f.icon className="size-5" />
              </span>
              <h3 className="mt-5 text-xl">{f.title}</h3>
              <p className="mt-2 max-w-md text-secondary-foreground">{f.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
