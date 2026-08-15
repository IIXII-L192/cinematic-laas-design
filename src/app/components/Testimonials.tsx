import { motion } from "motion/react";
import { Star } from "lucide-react";

const quotes = [
  {
    body: "We replaced three tools with Prism. Our launch pages now ship the same day the idea lands — and they convert 30% better.",
    name: "Maya Okonkwo",
    role: "Head of Growth, Northwind",
    initials: "MO",
    accent: "#7c5cff",
  },
  {
    body: "The AI drafts are genuinely good starting points, and the edge performance is unreal. Lighthouse 100 without touching a thing.",
    name: "Daniel Reyes",
    role: "Founder, Aperture Labs",
    initials: "DR",
    accent: "#5eead4",
  },
  {
    body: "A/B testing used to mean a two-week engineering ticket. Now our marketers run experiments before lunch.",
    name: "Priya Nair",
    role: "VP Marketing, Cadence",
    initials: "PN",
    accent: "#f472b6",
  },
  {
    body: "It looks like something an award-winning studio built, but our team of two made it in an afternoon.",
    name: "Tom Bergström",
    role: "Cofounder, Foundry",
    initials: "TB",
    accent: "#fbbf24",
  },
  {
    body: "The analytics closed the loop for us. We finally see exactly where visitors drop and can fix it on the spot.",
    name: "Aisha Rahman",
    role: "PMM, Lattice",
    initials: "AR",
    accent: "#60a5fa",
  },
];

export function Testimonials() {
  return (
    <section id="customers" className="py-28">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-2xl text-center">
          <span className="font-mono-data text-xs uppercase tracking-widest text-[#fbbf24]">
            Loved by builders
          </span>
          <h2 className="mt-4 text-[clamp(2rem,4vw,3rem)] font-semibold leading-tight tracking-tight">
            Teams ship bolder pages with Prism
          </h2>
        </div>

        <div className="mt-14 columns-1 gap-5 md:columns-2 lg:columns-3 [&>*]:mb-5">
          {quotes.map((q, i) => (
            <motion.figure
              key={q.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.08 }}
              className="break-inside-avoid rounded-2xl border border-border bg-card p-6"
            >
              <div className="flex gap-0.5 text-primary">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star key={s} className="size-4 fill-current" />
                ))}
              </div>
              <blockquote className="mt-4 text-secondary-foreground">
                “{q.body}”
              </blockquote>
              <figcaption className="mt-5 flex items-center gap-3">
                <span
                  className="grid size-10 place-items-center rounded-full font-mono-data text-sm"
                  style={{ background: `${q.accent}22`, color: q.accent }}
                >
                  {q.initials}
                </span>
                <span>
                  <span className="block text-sm text-foreground">{q.name}</span>
                  <span className="block text-xs text-muted-foreground">
                    {q.role}
                  </span>
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}
