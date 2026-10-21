import { useEffect, useState, type ReactNode } from "react";
import { ArrowUpRight, Monitor, Moon, Sun } from "lucide-react";
import {
  aiSystems,
  direction,
  education,
  experience,
  principles,
  projects,
  site,
  type AiSystem,
} from "./data";

const nav = [
  { href: "#ai", label: "AI systems" },
  { href: "#work", label: "Work" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

type Theme = "system" | "light" | "dark";
const themes: Theme[] = ["system", "light", "dark"];
const themeIcons = { system: Monitor, light: Sun, dark: Moon };

function readSavedTheme(): Theme {
  try {
    const saved = localStorage.getItem("theme");
    return saved === "light" || saved === "dark" ? saved : "system";
  } catch {
    return "system"; // storage blocked: just follow the system
  }
}

// Cycles System → Light → Dark. Starts as "system" so the prerendered HTML matches the first
// client render; the saved choice is read after hydration (index.html already applied it before paint).
function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("system");

  useEffect(() => setTheme(readSavedTheme()), []);

  function cycle() {
    const next = themes[(themes.indexOf(theme) + 1) % themes.length];
    setTheme(next);
    if (next === "system") delete document.documentElement.dataset.theme;
    else document.documentElement.dataset.theme = next;
    try {
      if (next === "system") localStorage.removeItem("theme");
      else localStorage.setItem("theme", next);
    } catch {
      // storage blocked: the choice still applies for this visit
    }
  }

  const Icon = themeIcons[theme];
  const label = theme[0].toUpperCase() + theme.slice(1);
  return (
    <button
      type="button"
      onClick={cycle}
      aria-label={`Theme: ${label}. Switch theme`}
      title={`Theme: ${label}`}
      className="inline-flex size-8 items-center justify-center rounded-full text-muted transition-colors hover:bg-fg/5 hover:text-fg"
    >
      <Icon aria-hidden="true" className="size-4" />
    </button>
  );
}

function ExternalLink({
  href,
  children,
}: {
  href: string;
  children: ReactNode;
}) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group inline-flex items-center gap-0.5 underline decoration-line underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
    >
      {children}
      <ArrowUpRight
        aria-hidden="true"
        className="size-3.5 opacity-50 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:opacity-100"
      />
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}

// Wide sections: the label sits in a sticky left column, content takes the rest.
function Section({
  id,
  title,
  children,
}: {
  id: string;
  title: string;
  children: ReactNode;
}) {
  return (
    <section
      id={id}
      aria-labelledby={`${id}-title`}
      className="scroll-mt-20 border-t border-line py-16 sm:py-20 lg:grid lg:grid-cols-12 lg:gap-x-10"
    >
      <h2
        id={`${id}-title`}
        className="mb-8 font-mono text-xs uppercase tracking-widest text-muted lg:sticky lg:top-24 lg:col-span-3 lg:mb-0 lg:self-start"
      >
        {title}
      </h2>
      <div className="lg:col-span-9">{children}</div>
    </section>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol
      aria-label="How it works"
      className="mt-6 grid gap-2 sm:grid-cols-4 sm:gap-3"
    >
      {steps.map((step, i) => (
        <li
          key={step}
          className="relative flex gap-2 rounded-lg border border-accent/20 bg-accent/[0.06] px-3 py-3 font-mono text-xs leading-snug"
        >
          <span aria-hidden="true" className="font-semibold text-accent">
            {i + 1}
          </span>
          <span>{step}</span>
          {i < steps.length - 1 && (
            <span
              aria-hidden="true"
              className="absolute -right-3 top-1/2 hidden -translate-y-1/2 text-accent/70 sm:block"
            >
              ›
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function AiSystemEntry({ system }: { system: AiSystem }) {
  return (
    <article className="py-12 first:pt-0 last:pb-0">
      <div className="flex flex-wrap items-baseline gap-x-5 gap-y-1">
        <h3 className="text-2xl font-semibold tracking-tight">{system.name}</h3>
        <div className="flex gap-4 text-sm text-muted">
          {system.live && <ExternalLink href={system.live}>Live</ExternalLink>}
          {system.code && <ExternalLink href={system.code}>Code</ExternalLink>}
        </div>
      </div>
      <p className="mt-3 max-w-2xl text-pretty leading-relaxed text-muted">
        {system.summary}
      </p>

      <Pipeline steps={system.pipeline} />

      <div
        className={`mt-6 grid gap-6 ${system.example ? "md:grid-cols-2" : ""}`}
      >
        <div>
          <ul className="space-y-2 text-sm leading-relaxed">
            {system.notes.map((note) => (
              <li key={note} className="flex gap-2">
                <span aria-hidden="true" className="text-accent">
                  ✓
                </span>
                {note}
              </li>
            ))}
            {system.next && (
              <li className="flex gap-2 text-muted">
                <span aria-hidden="true">→</span>
                <span>
                  <span className="font-medium text-fg">Next:</span>{" "}
                  {system.next}
                </span>
              </li>
            )}
          </ul>
          <p className="mt-5 font-mono text-xs text-muted">
            {system.stack.join(" · ")}
          </p>
        </div>

        {system.example && (
          <figure className="min-w-0">
            <figcaption className="mb-2 font-mono text-xs text-muted">
              {system.example.label}
            </figcaption>
            <pre className="overflow-x-auto rounded-lg border border-line bg-surface p-4 font-mono text-xs leading-relaxed">
              <code>{system.example.code}</code>
            </pre>
          </figure>
        )}
      </div>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-30 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <div className="sticky top-0 z-20 border-b border-line bg-bg/80 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-6 sm:px-10">
          <a href="#top" className="font-mono text-sm font-medium">
            {site.handle}
          </a>
          <div className="flex items-center gap-4 sm:gap-6">
            <nav aria-label="Sections">
              <ul className="flex gap-6 text-sm text-muted">
                {nav.map((item) => (
                  <li
                    key={item.href}
                    className={
                      item.href === "#contact" ? "" : "hidden sm:block"
                    }
                  >
                    <a
                      href={item.href}
                      className="transition-colors hover:text-fg"
                    >
                      {item.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <ThemeToggle />
          </div>
        </div>
      </div>

      <div id="top" className="mx-auto max-w-6xl px-6 sm:px-10">
        <header className="py-20 sm:py-28">
          <h1 className="text-base font-medium">{site.name}</h1>
          <p className="mt-10 font-mono text-xs uppercase tracking-widest text-accent">
            {site.role}
          </p>
          <p className="mt-4 max-w-5xl text-balance font-display text-6xl leading-[0.98] tracking-tight sm:text-7xl lg:text-8xl">
            {site.headline.replace(site.headlineEmphasis, "")}
            <em className="text-accent">{site.headlineEmphasis}</em>
          </p>
          <p className="mt-8 max-w-2xl text-pretty text-lg leading-relaxed text-muted sm:text-xl">
            {site.intro}
          </p>

          <div className="mt-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:gap-10">
            <a
              href={`mailto:${site.email}`}
              className="inline-flex w-fit items-center rounded-full bg-fg px-5 py-2.5 text-sm font-medium text-bg transition-opacity hover:opacity-85"
            >
              Email me
            </a>
            <ul
              aria-label="Elsewhere"
              className="flex flex-wrap gap-x-6 gap-y-3 text-sm"
            >
              {site.links.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </div>

          <p className="mt-8 flex items-center gap-2 text-sm text-muted">
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent"
            />
            {site.availability} · {site.location}
          </p>
        </header>

        <main id="main">
          <Section id="ai" title="AI systems">
            <div className="divide-y divide-line">
              {aiSystems.map((system) => (
                <AiSystemEntry key={system.name} system={system} />
              ))}
            </div>
          </Section>

          <Section id="direction" title="Where I'm going">
            <ul className="grid gap-8 sm:grid-cols-3">
              {direction.items.map((item) => (
                <li key={item.title}>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-2 text-pretty leading-relaxed text-muted">
                    {item.body}
                  </p>
                </li>
              ))}
            </ul>
            <p className="mt-10 max-w-2xl border-l-2 border-accent pl-4 text-muted">
              {direction.note}
            </p>
          </Section>

          <Section id="work" title="Product work">
            <ul className="grid gap-x-10 gap-y-12 sm:grid-cols-2">
              {projects.map((project) => (
                <li key={project.name}>
                  <p className="font-mono text-xs uppercase tracking-wider text-accent">
                    {project.area}
                  </p>
                  <div className="mt-2 flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <h3 className="text-lg font-medium">{project.name}</h3>
                    <div className="flex gap-4 text-sm text-muted">
                      {project.live && (
                        <ExternalLink href={project.live}>Live</ExternalLink>
                      )}
                      {project.code && (
                        <ExternalLink href={project.code}>Code</ExternalLink>
                      )}
                    </div>
                  </div>
                  <p className="mt-2 text-pretty leading-relaxed text-muted">
                    {project.summary}
                  </p>
                  <p className="mt-3 font-mono text-xs text-muted">
                    {project.stack.join(" · ")}
                  </p>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="experience" title="Experience">
            <ul className="space-y-10">
              {experience.map((job) => (
                <li
                  key={job.org}
                  className="grid gap-2 sm:grid-cols-[9rem_1fr] sm:gap-8"
                >
                  <p className="font-mono text-xs text-muted sm:pt-1">
                    {job.period}
                  </p>
                  <div className="max-w-2xl">
                    <h3 className="font-medium">
                      {job.role}{" "}
                      <span className="font-normal text-muted">
                        · {job.org}
                      </span>
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">
                      {job.summary}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-10 text-sm text-muted sm:pl-[11rem]">
              {education}
            </p>
          </Section>

          <Section id="principles" title="How I work">
            <ol className="grid gap-8 sm:grid-cols-3">
              {principles.map((principle, i) => (
                <li key={principle}>
                  <span
                    aria-hidden="true"
                    className="font-mono text-xs text-accent"
                  >
                    0{i + 1}
                  </span>
                  <p className="mt-2 text-pretty leading-relaxed">
                    {principle}
                  </p>
                </li>
              ))}
            </ol>
          </Section>
        </main>

        <footer
          id="contact"
          className="scroll-mt-20 border-t border-line py-20 sm:py-28"
        >
          <p className="max-w-3xl text-balance font-display text-5xl leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
            Have a problem <em className="text-accent">worth solving?</em>
          </p>
          <p className="mt-5 text-lg text-muted">
            I'd like to hear about it.{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-16 font-mono text-xs text-muted">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span>{" "}
            {site.name} · {site.location}
          </p>
        </footer>
      </div>
    </>
  );
}
