import Link from "next/link";
import ProjectArtwork from "./project-artwork";
import { projects } from "../project-data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden border-t border-subtle-border/70 bg-obsidian px-6 py-24 sm:px-10 md:px-16 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 -z-10 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-accent">
              <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-hover" />
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="text-4xl font-bold tracking-[-0.04em] text-ivory sm:text-5xl"
            >
              Projects{" "}
              <span className="ml-3 bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
                &amp; experiments
              </span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-secondary">
              A selection of university projects and learning in progress,
              across hardware, game development, and software engineering.
            </p>
          </div>
          <span className="w-fit rounded-full border border-subtle-border bg-graphite/70 px-4 py-2 font-mono text-xs tracking-wide text-secondary">
            03 PROJECTS
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-subtle-border bg-graphite/85 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-accent/40 hover:shadow-[0_24px_70px_rgba(255,96,69,0.08)]"
            >
              <ProjectArtwork type={project.artwork} title={project.title} />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-accent-hover">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                      project.status === "Completed"
                        ? "border-subtle-border bg-obsidian/50 text-ivory/90"
                        : "border-accent/25 bg-accent/[0.08] text-accent-hover"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Completed"
                          ? "bg-ivory/70"
                          : "bg-accent"
                      }`}
                    />
                    {project.status}
                  </span>
                </div>

                <h3 className="mt-4 text-xl font-semibold leading-snug text-ivory">
                  {project.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-6 text-secondary">
                  {project.description}
                </p>

                <ul
                  aria-label="Technologies and tools"
                  className="mt-5 flex flex-wrap gap-2"
                >
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-subtle-border/80 bg-obsidian/40 px-2.5 py-1 text-[10px] text-ivory/75"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-subtle-border pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-accent-hover transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
                  >
                    View project
                    <span
                      aria-hidden="true"
                      className="transition-transform group-hover:translate-x-1"
                    >
                      &rarr;
                    </span>
                  </Link>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
