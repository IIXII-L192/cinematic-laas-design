import { motion } from "motion/react";

const steps = [
  {
    n: "01",
    title: "Describe or pick",
    body: "Prompt Prism AI or choose a proven template. Your brand tokens apply instantly.",
  },
  {
    n: "02",
    title: "Refine visually",
    body: "Drag, edit, and rearrange blocks on an infinite canvas. Every change is versioned.",
  },
  {
    n: "03",
    title: "Publish to the edge",
    body: "One click deploys to a global CDN with a custom domain and automatic SSL.",
  },
  {
    n: "04",
    title: "Test & optimize",
    body: "Run experiments, watch the funnel, and let Prism promote the winning variant.",
  },
];

export function HowItWorks() {
  return (
    <section className="relative overflow-hidden py-28">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 -z-10 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono-data text-xs uppercase tracking-widest text-[#f472b6]">
            The workflow
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            From blank canvas to live page in four moves
          </h2>
        </div>

        <div className="mt-16 grid gap-4 md:grid-cols-4">
          {steps.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="relative rounded-2xl border border-border bg-card p-7"
            >
              <span className="font-mono-data text-sm text-primary">{s.n}</span>
              <h3 className="mt-4 text-xl">{s.title}</h3>
              <p className="mt-2 text-secondary-foreground">{s.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
