const brands = [
  "Northwind",
  "Vercel",
  "Lattice",
  "Retool",
  "Ramp",
  "Linear",
  "Cadence",
  "Foundry",
];

export function LogoRow() {
  return (
    <section className="border-y border-border bg-card/30 py-10">
      <div className="mx-auto max-w-7xl px-6">
        <p className="text-center font-mono-data text-xs uppercase tracking-widest text-muted-foreground">
          Powering launches for 40,000+ product teams
        </p>
        <div className="mt-7 flex flex-wrap items-center justify-center gap-x-12 gap-y-6">
          {brands.map((b) => (
            <span
              key={b}
              className="font-display text-xl font-semibold text-secondary-foreground/60 transition-colors hover:text-foreground"
            >
              {b}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
