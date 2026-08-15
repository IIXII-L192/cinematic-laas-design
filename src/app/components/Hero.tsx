import { motion } from "motion/react";
import { ArrowRight, Sparkles, Globe, MousePointerClick } from "lucide-react";

export function Hero() {
  return (
    <section className="relative overflow-hidden pt-40 pb-24">
      
      <div className="pointer-events-none absolute inset-0 -z-10">
        <div className="absolute left-1/2 top-[-10%] h-[520px] w-[820px] -translate-x-1/2 rounded-full bg-primary/25 blur-[140px]" />
        <div className="absolute right-[8%] top-[30%] h-[360px] w-[360px] rounded-full bg-[#5eead4]/15 blur-[120px]" />
        <div className="absolute left-[6%] bottom-[6%] h-[320px] w-[320px] rounded-full bg-[#f472b6]/10 blur-[120px]" />
        <div
          className="absolute inset-0 opacity-[0.15]"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.5) 1px, transparent 1px)",
            backgroundSize: "64px 64px",
            maskImage:
              "radial-gradient(ellipse 70% 55% at 50% 30%, black 30%, transparent 75%)",
          }}
        />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.a
          href="#"
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-1.5 text-sm text-secondary-foreground backdrop-blur-sm transition-colors hover:text-foreground"
        >
          <Sparkles className="size-3.5 text-primary" />
          Mockup Website
          <ArrowRight className="size-3.5" />
        </motion.a>

        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.05, ease: [0.22, 1, 0.36, 1] }}
          className="mx-auto mt-7 max-w-3xl text-[clamp(2.8rem,7vw,5.25rem)] font-semibold leading-[0.98] tracking-tight"
        >
          Landing pages that feel
          <span className="relative mx-2 inline-block">
            <span className="bg-gradient-to-r from-primary via-[#a78bfa] to-[#5eead4] bg-clip-text text-transparent">
              cinematic
            </span>
          </span>
          — shipped in minutes.
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="mx-auto mt-6 max-w-xl text-lg text-secondary-foreground"
        >
          Prism is the landing page platform for teams who move fast. Design,
          publish, and A/B test high-converting pages on a global edge network —
          no code, no ops, no waiting on engineering.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.25 }}
          className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row"
        >
          <a
            href="#pricing"
            className="group inline-flex items-center gap-2 rounded-xl bg-primary px-6 py-3.5 text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/60 transition-transform hover:-translate-y-0.5"
          >
            Build your page
            <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
          </a>
          <a
            href="#templates"
            className="inline-flex items-center gap-2 rounded-xl border border-border bg-secondary/40 px-6 py-3.5 text-foreground backdrop-blur-sm transition-colors hover:bg-secondary"
          >
            <MousePointerClick className="size-4" />
            Explore templates
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="mt-5 font-mono-data text-xs uppercase tracking-widest text-muted-foreground"
        >
          <Globe className="mr-1.5 inline size-3.5 text-[#5eead4]" />
          Live on 320 edge locations · No credit card required
        </motion.p>
      </div>

      
      <motion.div
        initial={{ opacity: 0, y: 60, rotateX: 8 }}
        animate={{ opacity: 1, y: 0, rotateX: 0 }}
        transition={{ duration: 1, delay: 0.35, ease: [0.22, 1, 0.36, 1] }}
        style={{ perspective: 1200 }}
        className="mx-auto mt-20 max-w-5xl px-6"
      >
        <HeroPreview />
      </motion.div>
    </section>
  );
}

function HeroPreview() {
  return (
    <div className="relative rounded-2xl border border-border bg-card/80 p-2 shadow-2xl shadow-black/60 backdrop-blur-xl">
      <div className="absolute -inset-px -z-10 rounded-2xl bg-gradient-to-b from-primary/30 to-transparent opacity-60 blur-md" />
      
      <div className="flex items-center gap-2 rounded-t-xl border-b border-border px-4 py-3">
        <span className="size-2.5 rounded-full bg-[#ef4444]/70" />
        <span className="size-2.5 rounded-full bg-[#fbbf24]/70" />
        <span className="size-2.5 rounded-full bg-[#5eead4]/70" />
        <div className="ml-4 flex-1 rounded-md bg-secondary px-3 py-1 font-mono-data text-xs text-muted-foreground">
          github.com/IIXII-L192
        </div>
        <span className="rounded-md bg-primary/15 px-2.5 py-1 font-mono-data text-[0.7rem] text-primary">
          ● Published
        </span>
      </div>

      
      <div className="grid gap-2 p-2 md:grid-cols-[220px_1fr]">
        <div className="hidden flex-col gap-2 rounded-lg bg-secondary/50 p-3 md:flex">
          {["Sections", "Hero", "Features", "Pricing", "Footer"].map((s, i) => (
            <div
              key={s}
              className={`rounded-md px-3 py-2 text-sm ${
                i === 1
                  ? "bg-primary/15 text-primary"
                  : "text-secondary-foreground"
              }`}
            >
              {s}
            </div>
          ))}
        </div>
        <div className="relative overflow-hidden rounded-lg bg-gradient-to-br from-[#14111f] to-[#0b0a12] p-8">
          <div className="absolute right-[-40px] top-[-40px] h-48 w-48 rounded-full bg-primary/20 blur-3xl" />
          <div className="font-mono-data text-xs uppercase tracking-widest text-[#5eead4]">
            Acme · Series B
          </div>
          <div className="mt-4 max-w-md font-display text-4xl font-semibold leading-tight">
            The operating system for modern hardware teams.
          </div>
          <div className="mt-4 max-w-sm text-sm text-secondary-foreground">
            Ship firmware, manage fleets, and monitor devices from one place.
          </div>
          <div className="mt-6 flex gap-3">
            <span className="rounded-lg bg-primary px-4 py-2 text-sm text-primary-foreground">
              Request access
            </span>
            <span className="rounded-lg border border-border px-4 py-2 text-sm">
              Watch demo
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
