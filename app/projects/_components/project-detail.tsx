import Link from "next/link";
import type { PortfolioProject } from "../project-data";
import ProjectArtwork from "./project-artwork";

interface ProjectDetailProps {
  project: PortfolioProject;
}

function ProjectMediaGallery({ project }: ProjectDetailProps) {
  return (
    <section aria-labelledby="project-media-heading" className="mt-16 sm:mt-20">
      <div className="mb-6">
        <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
          Visual documentation
        </p>
        <h2
          id="project-media-heading"
          className="mt-2 text-2xl font-semibold text-ivory sm:text-3xl"
        >
          {project.mediaHeading}
        </h2>
        <p className="mt-3 max-w-2xl text-sm leading-6 text-secondary">
          {project.mediaDescription}
        </p>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {project.mediaItems.map((item, index) => (
          <div
            key={item}
            className="group relative flex aspect-[4/3] flex-col items-center justify-center overflow-hidden rounded-2xl border border-dashed border-subtle-border bg-graphite/40 p-6 text-center"
          >
            <div
              aria-hidden="true"
              className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,96,69,0.06),transparent_58%)] opacity-70 transition-opacity group-hover:opacity-100"
            />
            <svg
              aria-hidden="true"
              viewBox="0 0 48 48"
              className="relative h-10 w-10 text-secondary/70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect
                x="6"
                y="9"
                width="36"
                height="30"
                rx="4"
                stroke="currentColor"
                strokeWidth="1.5"
              />
              <circle cx="17" cy="19" r="3" stroke="currentColor" strokeWidth="1.5" />
              <path
                d="M8 33L19 24L26 30L31 26L40 34"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <p className="relative mt-4 text-sm font-medium text-ivory/85">
              {item}
            </p>
            <span className="relative mt-2 font-mono text-[9px] uppercase tracking-[0.17em] text-secondary/70">
              Image placeholder {String(index + 1).padStart(2, "0")}
            </span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function ProjectDetail({ project }: ProjectDetailProps) {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-ivory">
      <header className="border-b border-subtle-border/70 px-6 sm:px-10 md:px-16">
        <nav
          aria-label="Main navigation"
          className="mx-auto flex max-w-7xl items-center justify-between py-5"
        >
          <Link
            href="/"
            aria-label="Anjana Thummodara home"
            className="text-xl font-bold tracking-wider text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            AN<span className="text-accent">.</span>
          </Link>
          <div className="flex items-center gap-5 text-sm text-secondary sm:gap-8">
            <Link href="/#about" className="transition-colors hover:text-accent-hover">
              About
            </Link>
            <Link
              href="/#projects"
              className="text-accent-hover transition-colors hover:text-ivory"
            >
              Projects
            </Link>
            <Link href="/#contact" className="transition-colors hover:text-accent-hover">
              Contact
            </Link>
          </div>
        </nav>
      </header>

      <div className="relative isolate px-6 pb-24 pt-10 sm:px-10 sm:pt-14 md:px-16 md:pb-32">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -right-32 top-28 -z-10 h-96 w-96 rounded-full bg-accent/[0.06] blur-[120px]"
        />
        <div className="mx-auto max-w-7xl">
          <Link
            href="/#projects"
            className="group inline-flex items-center gap-2 text-sm text-secondary transition-colors hover:text-accent-hover focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
          >
            <span
              aria-hidden="true"
              className="transition-transform group-hover:-translate-x-1"
            >
              &larr;
            </span>
            Back to projects
          </Link>

          <div className="mt-8 grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <span className="text-xs font-semibold uppercase tracking-[0.16em] text-accent-hover">
                  {project.category}
                </span>
                <span
                  className={`rounded-full border px-2.5 py-1 text-[10px] font-medium ${
                    project.status === "Completed"
                      ? "border-subtle-border bg-graphite text-ivory/90"
                      : "border-accent/25 bg-accent/[0.08] text-accent-hover"
                  }`}
                >
                  {project.status}
                </span>
              </div>
              <h1 className="mt-5 text-4xl font-bold leading-tight tracking-[-0.04em] text-ivory sm:text-5xl lg:text-6xl">
                {project.title}
              </h1>
              <p className="mt-6 max-w-2xl text-base leading-8 text-ivory/85">
                {project.overview}
              </p>

              {project.hasRepositoryPlaceholder && (
                <div className="mt-7 inline-flex items-center gap-3 rounded-xl border border-subtle-border bg-graphite/65 px-4 py-3">
                  <span
                    aria-hidden="true"
                    className="font-mono text-sm text-accent"
                  >
                    &lt;/&gt;
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-ivory">
                      GitHub repository
                    </span>
                    <span className="mt-0.5 block text-[11px] text-secondary/75">
                      Link to be added
                    </span>
                  </span>
                </div>
              )}
            </div>

            <div className="overflow-hidden rounded-3xl border border-subtle-border shadow-[0_24px_90px_rgba(0,0,0,0.35)]">
              <ProjectArtwork type={project.artwork} title={project.title} />
            </div>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-2">
            <section className="rounded-2xl border border-subtle-border bg-graphite/75 p-6 backdrop-blur-lg sm:p-7">
              <h2 className="text-lg font-semibold text-ivory">
                Problem &amp; context
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {project.problem}
              </p>
            </section>
            <section className="rounded-2xl border border-subtle-border bg-graphite/75 p-6 backdrop-blur-lg sm:p-7">
              <h2 className="text-lg font-semibold text-ivory">
                Objective
              </h2>
              <p className="mt-3 text-sm leading-7 text-secondary">
                {project.objective}
              </p>
            </section>
          </div>

          {project.role && (
            <section className="mt-5 rounded-2xl border border-accent/25 bg-gradient-to-br from-accent/[0.07] to-accent-hover/[0.025] p-6 sm:p-7">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-accent">
                Individual role
              </p>
              <h2 className="mt-2 text-lg font-semibold text-ivory">
                Organization and Infrastructure Planning Module
              </h2>
              <p className="mt-3 max-w-4xl text-sm leading-7 text-ivory/80">
                {project.role}
              </p>
            </section>
          )}

          <div className="mt-5 grid gap-5 lg:grid-cols-2">
            <section className="rounded-2xl border border-subtle-border bg-graphite/75 p-6 backdrop-blur-lg sm:p-7">
              <h2 className="text-lg font-semibold text-ivory">
                {project.role ? "My contributions" : "Contributions"}
              </h2>
              <ul className="mt-4 space-y-3">
                {project.contributions.map((contribution) => (
                  <li
                    key={contribution}
                    className="flex gap-3 text-sm leading-6 text-secondary"
                  >
                    <span
                      aria-hidden="true"
                      className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent shadow-[0_0_10px_rgba(255,96,69,0.45)]"
                    />
                    {contribution}
                  </li>
                ))}
              </ul>
            </section>

            <div className="space-y-5">
              {project.featureGroups.map((group) => (
                <section
                  key={group.title}
                  className="rounded-2xl border border-subtle-border bg-graphite/75 p-6 backdrop-blur-lg sm:p-7"
                >
                  <h2 className="text-lg font-semibold text-ivory">
                    {group.title}
                  </h2>
                  <ul className="mt-4 space-y-3">
                    {group.items.map((item) => (
                      <li
                        key={item}
                        className="flex gap-3 text-sm leading-6 text-secondary"
                      >
                        <span
                          aria-hidden="true"
                          className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-hover"
                        />
                        {item}
                      </li>
                    ))}
                  </ul>
                </section>
              ))}

              <section className="rounded-2xl border border-subtle-border bg-graphite/75 p-6 backdrop-blur-lg sm:p-7">
                <h2 className="text-lg font-semibold text-ivory">
                  Technologies
                </h2>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {project.technologies.map((technology) => (
                    <li
                      key={technology}
                      className="rounded-full border border-accent/20 bg-accent/[0.06] px-3 py-1.5 text-xs text-ivory"
                    >
                      {technology}
                    </li>
                  ))}
                </ul>
                {project.technologyNote && (
                  <p className="mt-4 text-xs leading-5 text-secondary/75">
                    {project.technologyNote}
                  </p>
                )}
              </section>
            </div>
          </div>

          <ProjectMediaGallery project={project} />

          <div className="mt-16 border-t border-subtle-border pt-7">
            <Link
              href="/#projects"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-accent-hover transition-colors hover:text-ivory focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-accent"
            >
              <span
                aria-hidden="true"
                className="transition-transform group-hover:-translate-x-1"
              >
                &larr;
              </span>
              More projects
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}
