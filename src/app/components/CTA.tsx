import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function CTA() {
  return (
    <section className="py-20">
      <div className="mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-3xl border border-border bg-card px-8 py-16 text-center md:px-16 md:py-24"
        >
          <div className="pointer-events-none absolute inset-0 -z-10">
            <div className="absolute left-1/2 top-1/2 h-[400px] w-[700px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary/20 blur-[120px]" />
            <div
              className="absolute inset-0 opacity-10"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.6) 1px, transparent 0)",
                backgroundSize: "28px 28px",
              }}
            />
          </div>
          <h2 className="mx-auto max-w-2xl text-[clamp(2.2rem,5vw,3.75rem)] font-semibold leading-[1.02] tracking-tight">
            Your next launch deserves a cinematic page.
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-lg text-secondary-foreground">
            Start free, publish in minutes, and only upgrade when you need more.
          </p>
          <div className="mt-9 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#pricing"
              className="group inline-flex items-center gap-2 rounded-xl bg-primary px-7 py-3.5 text-primary-foreground shadow-[0_0_40px_-8px] shadow-primary/60 transition-transform hover:-translate-y-0.5"
            >
              Build your page
              <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a
              href="#"
              className="rounded-xl border border-border bg-secondary/40 px-7 py-3.5 text-foreground transition-colors hover:bg-secondary"
            >
              Book a demo
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
