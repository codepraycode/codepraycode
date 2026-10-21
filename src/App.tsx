import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { aiSystems, direction, education, experience, principles, projects, site, type AiSystem } from "./data";

function ExternalLink({ href, children }: { href: string; children: ReactNode }) {
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

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <section aria-labelledby={id} className="mt-20 sm:mt-24">
      <h2 id={id} className="mb-8 font-mono text-xs uppercase tracking-widest text-muted">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Pipeline({ steps }: { steps: string[] }) {
  return (
    <ol aria-label="How it works" className="mt-5 flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:items-stretch sm:gap-0">
      {steps.map((step, i) => (
        <li key={step} className="flex items-center sm:flex-1">
          <span className="flex h-full w-full items-center rounded-md border border-line px-3 py-2 font-mono text-xs leading-snug">
            <span aria-hidden="true" className="mr-2 text-accent">
              {i + 1}
            </span>
            {step}
          </span>
          {i < steps.length - 1 && (
            <span aria-hidden="true" className="hidden px-1.5 text-muted sm:inline">
              →
            </span>
          )}
        </li>
      ))}
    </ol>
  );
}

function AiSystemEntry({ system }: { system: AiSystem }) {
  return (
    <article className="py-10 first:pt-0">
      <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
        <h3 className="text-xl font-semibold tracking-tight">{system.name}</h3>
        <div className="flex gap-4 text-sm text-muted">
          {system.live && <ExternalLink href={system.live}>Live</ExternalLink>}
          {system.code && <ExternalLink href={system.code}>Code</ExternalLink>}
        </div>
      </div>
      <p className="mt-2 text-pretty leading-relaxed text-muted">{system.summary}</p>

      <Pipeline steps={system.pipeline} />

      <ul className="mt-5 space-y-1.5 text-sm leading-relaxed">
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
              <span className="font-medium text-fg">Next:</span> {system.next}
            </span>
          </li>
        )}
      </ul>

      {system.example && (
        <figure className="mt-5">
          <figcaption className="mb-2 font-mono text-xs text-muted">{system.example.label}</figcaption>
          <pre className="overflow-x-auto rounded-md border border-line bg-fg/[0.03] p-4 font-mono text-xs leading-relaxed">
            <code>{system.example.code}</code>
          </pre>
        </figure>
      )}

      <p className="mt-5 font-mono text-xs text-muted">{system.stack.join(" · ")}</p>
    </article>
  );
}

export default function App() {
  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-10 focus:rounded focus:bg-fg focus:px-3 focus:py-2 focus:text-bg"
      >
        Skip to content
      </a>

      <div className="mx-auto max-w-2xl px-6 py-16 sm:py-28">
        <header>
          <h1 className="text-base font-medium">
            {site.name} <span className="font-normal text-muted">· {site.handle}</span>
          </h1>
          <p className="mt-8 font-mono text-xs uppercase tracking-widest text-accent">{site.role}</p>
          <p className="mt-3 text-balance text-4xl font-semibold leading-[1.1] tracking-tight sm:text-5xl">
            {site.headline}
          </p>
          <p className="mt-6 text-pretty text-lg leading-relaxed text-muted">{site.intro}</p>

          <p className="mt-6 flex items-center gap-2 text-sm text-muted">
            <span aria-hidden="true" className="size-2 rounded-full bg-accent" />
            {site.availability} · {site.location}
          </p>

          <nav aria-label="Elsewhere" className="mt-8">
            <ul className="flex flex-wrap gap-x-6 gap-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="font-medium text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
                >
                  Email me
                </a>
              </li>
              {site.links.map((link) => (
                <li key={link.label}>
                  <ExternalLink href={link.href}>{link.label}</ExternalLink>
                </li>
              ))}
            </ul>
          </nav>
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
            <ul className="space-y-6">
              {direction.items.map((item) => (
                <li key={item.title}>
                  <h3 className="font-medium">{item.title}</h3>
                  <p className="mt-1 leading-relaxed text-muted">{item.body}</p>
                </li>
              ))}
            </ul>
            <p className="mt-8 border-l-2 border-accent pl-4 text-muted">{direction.note}</p>
          </Section>

          <Section id="work" title="Product work">
            <ul className="divide-y divide-line border-y border-line">
              {projects.map((project) => (
                <li key={project.name} className="grid gap-2 py-6 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                  <p className="font-mono text-xs uppercase tracking-wider text-muted sm:pt-1">{project.area}</p>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                      <h3 className="font-medium">{project.name}</h3>
                      <div className="flex gap-4 text-sm text-muted">
                        {project.live && <ExternalLink href={project.live}>Live</ExternalLink>}
                        {project.code && <ExternalLink href={project.code}>Code</ExternalLink>}
                      </div>
                    </div>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">{project.summary}</p>
                    <p className="mt-3 font-mono text-xs text-muted">{project.stack.join(" · ")}</p>
                  </div>
                </li>
              ))}
            </ul>
          </Section>

          <Section id="experience" title="Experience">
            <ul className="space-y-8">
              {experience.map((job) => (
                <li key={job.org} className="grid gap-2 sm:grid-cols-[6.5rem_1fr] sm:gap-6">
                  <p className="font-mono text-xs text-muted sm:pt-1">{job.period}</p>
                  <div>
                    <h3 className="font-medium">
                      {job.role} <span className="font-normal text-muted">· {job.org}</span>
                    </h3>
                    <p className="mt-2 text-pretty leading-relaxed text-muted">{job.summary}</p>
                  </div>
                </li>
              ))}
            </ul>
            <p className="mt-8 text-sm text-muted">{education}</p>
          </Section>

          <Section id="principles" title="How I work">
            <ol className="space-y-3">
              {principles.map((principle, i) => (
                <li key={principle} className="flex gap-4 leading-relaxed">
                  <span aria-hidden="true" className="font-mono text-xs text-muted sm:pt-1.5">
                    0{i + 1}
                  </span>
                  <span>{principle}</span>
                </li>
              ))}
            </ol>
          </Section>
        </main>

        <footer className="mt-24 border-t border-line pt-10 sm:mt-28">
          <p className="text-2xl font-semibold tracking-tight">Have a problem worth solving?</p>
          <p className="mt-3 text-muted">
            I'd like to hear about it.{" "}
            <a
              href={`mailto:${site.email}`}
              className="text-accent underline decoration-accent/40 underline-offset-4 hover:decoration-accent"
            >
              {site.email}
            </a>
          </p>
          <p className="mt-12 font-mono text-xs text-muted">
            © <span suppressHydrationWarning>{new Date().getFullYear()}</span> {site.name} · {site.location}
          </p>
        </footer>
      </div>
    </>
  );
}
