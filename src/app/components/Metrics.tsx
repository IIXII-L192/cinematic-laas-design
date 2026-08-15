import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "motion/react";

const stats = [
  { value: 40000, suffix: "+", label: "Pages published" },
  { value: 320, suffix: "", label: "Edge locations" },
  { value: 47, suffix: "ms", label: "Median TTFB" },
  { value: 38, suffix: "%", label: "Avg. lift in CVR" },
];

function Counter({ to, suffix }: { to: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [val, setVal] = useState(0);

  useEffect(() => {
    if (!inView) return;
    const duration = 1400;
    const start = performance.now();
    let raf = 0;
    const tick = (now: number) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - p, 3);
      setVal(Math.round(to * eased));
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, to]);

  return (
    <span ref={ref} className="font-display tabular-nums">
      {val.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Metrics() {
  return (
    <section className="border-y border-border bg-card/30 py-20">
      <div className="mx-auto grid max-w-7xl grid-cols-2 gap-y-10 px-6 md:grid-cols-4">
        {stats.map((s, i) => (
          <motion.div
            key={s.label}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="text-center"
          >
            <div className="text-[clamp(2.5rem,5vw,3.75rem)] font-semibold leading-none tracking-tight text-foreground">
              <Counter to={s.value} suffix={s.suffix} />
            </div>
            <div className="mt-3 font-mono-data text-xs uppercase tracking-widest text-muted-foreground">
              {s.label}
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
