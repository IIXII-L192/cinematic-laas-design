import { Zap, Twitter, Github, Linkedin } from "lucide-react";

const cols = [
  {
    title: "Product",
    links: ["Builder", "Templates", "Analytics", "A/B Testing", "Edge network"],
  },
  {
    title: "Company",
    links: ["About", "Careers", "Blog", "Customers", "Press"],
  },
  {
    title: "Resources",
    links: ["Docs", "Changelog", "Guides", "Status", "Community"],
  },
];

export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <a href="#" className="flex items-center gap-2.5">
              <span className="grid size-8 place-items-center rounded-lg bg-primary text-primary-foreground">
                <Zap className="size-4" strokeWidth={2.5} />
              </span>
              <span className="font-display text-[1.35rem] font-semibold tracking-tight">
                Prism
              </span>
            </a>
            <p className="mt-4 max-w-xs text-sm text-secondary-foreground">
              The cinematic landing page platform. Design, publish, and optimize
              on a global edge network.
            </p>
            <div className="mt-6 flex gap-2">
              {[Twitter, Github, Linkedin].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="grid size-9 place-items-center rounded-lg border border-border text-secondary-foreground transition-colors hover:border-primary hover:text-primary"
                >
                  <Icon className="size-4" />
                </a>
              ))}
            </div>
          </div>

          {cols.map((c) => (
            <div key={c.title}>
              <h4 className="font-mono-data text-xs uppercase tracking-widest text-muted-foreground">
                {c.title}
              </h4>
              <ul className="mt-4 flex flex-col gap-3">
                {c.links.map((l) => (
                  <li key={l}>
                    <a
                      href="#"
                      className="text-sm text-secondary-foreground transition-colors hover:text-foreground"
                    >
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-border pt-8 sm:flex-row">
          <p className="font-mono-data text-xs text-muted-foreground">
            © 2026 IIXII™ & Aakarsh Singhal (This is just a template, not a real service)
          </p>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Security"].map((l) => (
              <a
                key={l}
                href="#"
                className="text-xs text-muted-foreground transition-colors hover:text-foreground"
              >
                {l}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
