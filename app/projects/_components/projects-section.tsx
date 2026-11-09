import Link from "next/link";
import ProjectArtwork from "./project-artwork";
import { projects } from "../project-data";

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      aria-labelledby="projects-heading"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#080b14] px-6 py-24 sm:px-10 md:px-16 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 top-20 -z-10 h-96 w-96 rounded-full bg-cyan-500/[0.07] blur-[120px]"
      />
      <div className="mx-auto max-w-7xl">
        <div className="mb-12 flex flex-col gap-6 sm:mb-14 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
              <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500" />
              Selected work
            </p>
            <h2
              id="projects-heading"
              className="text-4xl font-bold tracking-[-0.04em] text-ivory sm:text-5xl"
            >
              Projects{" "}
              <span className="ml-3 bg-gradient-to-r from-cyan-300 to-blue-500 bg-clip-text text-transparent">
                &amp; experiments
              </span>
            </h2>
            <p className="mt-5 max-w-xl leading-7 text-secondary">
              A selection of university projects and learning in progress,
              across hardware, game development, and software engineering.
            </p>
          </div>
          <span className="w-fit rounded-full border border-white/10 bg-white/[0.03] px-4 py-2 font-mono text-xs tracking-wide text-slate-400">
            03 PROJECTS
          </span>
        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {projects.map((project) => (
            <article
              key={project.slug}
              className="group flex h-full flex-col overflow-hidden rounded-3xl border border-white/[0.09] bg-slate-900/45 shadow-[0_18px_60px_rgba(0,0,0,0.18)] backdrop-blur-lg transition duration-300 hover:-translate-y-1 hover:border-cyan-300/25 hover:shadow-[0_24px_70px_rgba(8,145,178,0.10)]"
            >
              <ProjectArtwork type={project.artwork} title={project.title} />

              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <span className="text-[11px] font-medium uppercase tracking-[0.12em] text-cyan-200/85">
                    {project.category}
                  </span>
                  <span
                    className={`inline-flex items-center gap-2 rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                      project.status === "Completed"
                        ? "border-emerald-300/20 bg-emerald-300/[0.07] text-emerald-200"
                        : "border-amber-300/20 bg-amber-300/[0.07] text-amber-100"
                    }`}
                  >
                    <span
                      aria-hidden="true"
                      className={`h-1.5 w-1.5 rounded-full ${
                        project.status === "Completed"
                          ? "bg-emerald-300"
                          : "bg-amber-300"
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
                      className="rounded-full border border-white/[0.08] bg-white/[0.035] px-2.5 py-1 text-[10px] text-slate-300"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>

                <div className="mt-6 border-t border-white/[0.08] pt-4">
                  <Link
                    href={`/projects/${project.slug}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-cyan-200 transition-colors hover:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
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
