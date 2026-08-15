import { useState } from "react";
import { motion } from "motion/react";
import { Check } from "lucide-react";

const plans = [
  {
    name: "Starter",
    monthly: 0,
    yearly: 0,
    blurb: "For your first launch.",
    features: [
      "3 published pages",
      "Prism subdomain",
      "Core template library",
      "Basic analytics",
    ],
    cta: "Start free",
    highlight: false,
  },
  {
    name: "Pro",
    monthly: 29,
    yearly: 23,
    blurb: "For teams shipping weekly.",
    features: [
      "Unlimited pages",
      "Custom domains + SSL",
      "AI builder & rewrites",
      "A/B testing",
      "Conversion analytics",
      "Remove Prism badge",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    name: "Scale",
    monthly: 99,
    yearly: 82,
    blurb: "For high-traffic brands.",
    features: [
      "Everything in Pro",
      "Team roles & approvals",
      "Brand token library",
      "Priority edge routing",
      "SSO & audit logs",
      "Dedicated support",
    ],
    cta: "Talk to sales",
    highlight: false,
  },
];

export function Pricing() {
  const [yearly, setYearly] = useState(true);

  return (
    <section id="pricing" className="relative py-28">
      <div className="pointer-events-none absolute left-1/2 top-24 -z-10 h-72 w-[700px] -translate-x-1/2 rounded-full bg-primary/15 blur-[130px]" />
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono-data text-xs uppercase tracking-widest text-primary">
            Pricing
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Simple pricing that scales with you
          </h2>

          <div className="mt-8 inline-flex items-center gap-1 rounded-full border border-border bg-secondary p-1">
            {(["Monthly", "Yearly"] as const).map((label, i) => {
              const isYearly = i === 1;
              const on = yearly === isYearly;
              return (
                <button
                  key={label}
                  onClick={() => setYearly(isYearly)}
                  className={`relative rounded-full px-5 py-2 text-sm transition-colors ${
                    on ? "text-primary-foreground" : "text-secondary-foreground"
                  }`}
                >
                  {on && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 -z-10 rounded-full bg-primary"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {label}
                  {isYearly && (
                    <span className="ml-1.5 font-mono-data text-[0.7rem] text-[#5eead4]">
                      –20%
                    </span>
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          {plans.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className={`relative flex flex-col rounded-2xl border p-8 ${
                p.highlight
                  ? "border-primary/50 bg-card shadow-[0_0_60px_-20px] shadow-primary/50"
                  : "border-border bg-card"
              }`}
            >
              {p.highlight && (
                <span className="absolute -top-3 left-8 rounded-full bg-primary px-3 py-1 font-mono-data text-[0.7rem] uppercase tracking-wider text-primary-foreground">
                  Most popular
                </span>
              )}
              <h3 className="text-xl">{p.name}</h3>
              <p className="mt-1 text-sm text-muted-foreground">{p.blurb}</p>
              <div className="mt-6 flex items-baseline gap-1">
                <span className="text-5xl font-semibold tracking-tight">
                  ${yearly ? p.yearly : p.monthly}
                </span>
                <span className="text-sm text-muted-foreground">/mo</span>
              </div>
              <ul className="mt-7 flex flex-col gap-3">
                {p.features.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm">
                    <Check className="mt-0.5 size-4 shrink-0 text-[#5eead4]" />
                    <span className="text-secondary-foreground">{f}</span>
                  </li>
                ))}
              </ul>
              <a
                href="#"
                className={`mt-8 rounded-xl px-5 py-3 text-center text-sm transition-transform hover:-translate-y-0.5 ${
                  p.highlight
                    ? "bg-primary text-primary-foreground shadow-[0_0_40px_-10px] shadow-primary/60"
                    : "border border-border bg-secondary text-foreground hover:bg-secondary/70"
                }`}
              >
                {p.cta}
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
