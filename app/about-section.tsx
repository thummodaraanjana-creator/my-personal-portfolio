"use client";

import { useEffect, useRef, useState } from "react";

const interests = [
  {
    name: "Software engineering",
    detail:
      "I enjoy thinking through how software can solve real problems and make everyday tasks easier.",
    symbol: "{ }",
  },
  {
    name: "Frontend development",
    detail:
      "I'm interested in clear, thoughtful interfaces that make digital experiences feel natural to use.",
    symbol: "</>",
  },
  {
    name: "Backend development",
    detail:
      "I'm curious about the logic and systems behind applications, and how their pieces work together.",
    symbol: "01",
  },
  {
    name: "Technology",
    detail:
      "Exploring new ideas in technology keeps me curious about what we can build next.",
    symbol: "++",
  },
  {
    name: "Problem-solving",
    detail:
      "I like breaking a challenge into smaller parts and working toward a practical solution.",
    symbol: "↗",
  },
];

export default function AboutSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeInterest, setActiveInterest] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) return;

    if (typeof IntersectionObserver === "undefined") {
      const frame = window.requestAnimationFrame(() => setIsVisible(true));
      return () => window.cancelAnimationFrame(frame);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry?.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.18 },
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="about"
      aria-labelledby="about-heading"
      className="relative isolate overflow-hidden border-t border-white/[0.06] bg-[#080b14] px-6 py-24 sm:px-10 md:px-16 md:py-32"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-40 top-12 -z-10 h-80 w-80 rounded-full bg-cyan-500/[0.08] blur-[110px]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-36 bottom-0 -z-10 h-96 w-96 rounded-full bg-blue-600/[0.10] blur-[120px]"
      />

      <div
        className={`mx-auto grid max-w-7xl items-center gap-14 transition-all duration-700 ease-out motion-reduce:transition-none lg:grid-cols-[1.05fr_0.95fr] lg:gap-20 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
        }`}
      >
        <div>
          <p className="mb-5 flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.28em] text-cyan-300">
            <span className="h-px w-8 bg-gradient-to-r from-cyan-400 to-blue-500" />
            A little about me
          </p>

          <h2
            id="about-heading"
            className="text-4xl font-bold leading-tight tracking-[-0.04em] text-ivory sm:text-5xl lg:text-6xl"
          >
            About Me
            <span className="mt-2 block bg-gradient-to-r from-cyan-300 via-sky-400 to-blue-500 bg-clip-text text-transparent">
              Curious by nature.
              <br className="hidden sm:block" /> Driven by code.
            </span>
          </h2>

          <p className="mt-7 max-w-xl text-base leading-8 text-slate-300 sm:text-lg">
            I&apos;m <span className="font-semibold text-ivory">Anjana Thummodara</span>,
            an IT undergraduate at the Faculty of Information Technology,
            University of Moratuwa, and an aspiring software developer.
          </p>
          <p className="mt-4 max-w-xl leading-8 text-slate-400">
            I&apos;m drawn to software engineering, frontend and backend
            development, and the problem-solving that brings an idea to life.
            My goal is to become a skilled software engineer and build useful
            applications for real-world needs.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-4">
            <a
              href="#projects"
              className="group inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 px-6 py-3.5 text-sm font-semibold text-[#06101b] shadow-[0_8px_30px_rgba(34,211,238,0.18)] transition duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_36px_rgba(34,211,238,0.3)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-cyan-300"
            >
              Explore my projects
              <span
                aria-hidden="true"
                className="transition-transform group-hover:translate-x-1"
              >
                &rarr;
              </span>
            </a>
            <span className="text-xs tracking-wide text-slate-500">
              Learning, exploring, building
            </span>
          </div>
        </div>

        <div
          className={`relative mx-auto w-full max-w-xl transition-all delay-150 duration-700 ease-out motion-reduce:transition-none ${
            isVisible
              ? "translate-y-0 opacity-100"
              : "translate-y-8 opacity-0"
          }`}
        >
          <div
            aria-hidden="true"
            className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-cyan-400/10 via-transparent to-blue-500/10 blur-2xl"
          />

          <div className="relative overflow-hidden rounded-3xl border border-white/10 bg-slate-900/55 p-6 shadow-[0_24px_90px_rgba(0,0,0,0.38)] backdrop-blur-xl sm:p-8">
            <div
              aria-hidden="true"
              className="absolute inset-0 bg-[radial-gradient(circle_at_85%_12%,rgba(34,211,238,0.10),transparent_32%),linear-gradient(135deg,rgba(255,255,255,0.035),transparent_55%)]"
            />

            <div className="relative">
              <div className="flex items-center justify-between border-b border-white/[0.08] pb-5">
                <div className="flex items-center gap-3">
                  <span className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/[0.08] font-mono text-sm font-semibold text-cyan-200">
                    AT
                  </span>
                  <div>
                    <p className="text-sm font-semibold text-ivory">
                      Personal profile
                    </p>
                    <p className="mt-0.5 font-mono text-[10px] uppercase tracking-[0.2em] text-slate-500">
                      Developer in progress
                    </p>
                  </div>
                </div>
                <span
                  aria-hidden="true"
                  className="h-2 w-2 rounded-full bg-accent shadow-[0_0_12px_rgba(34,211,238,0.8)]"
                />
              </div>

              <div className="mt-6 grid grid-cols-[auto_1fr] items-center gap-5 rounded-2xl border border-white/[0.07] bg-[#080b14]/55 p-4 sm:gap-6 sm:p-5">
                <div
                  aria-hidden="true"
                  className="relative flex h-20 w-20 items-center justify-center sm:h-24 sm:w-24"
                >
                  <span className="absolute inset-0 rounded-full border border-cyan-300/25" />
                  <span className="absolute inset-2 rounded-full border border-subtle-border [animation:spin_18s_linear_infinite]" />
                  <span className="absolute inset-4 rounded-full bg-gradient-to-br from-cyan-400/25 to-blue-600/25 blur-md" />
                  <span className="relative font-mono text-xl font-bold text-ivory sm:text-2xl">
                    &lt;/&gt;
                  </span>
                  <span className="absolute right-0 top-3 h-1.5 w-1.5 rounded-full bg-cyan-200 shadow-[0_0_10px_rgba(165,243,252,0.9)]" />
                </div>
                <div className="min-w-0">
                  <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-cyan-300/80">
                    Career interest
                  </p>
                  <p className="mt-2 text-lg font-semibold text-ivory sm:text-xl">
                    Aspiring Software Developer
                  </p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    Building toward useful, real-world applications
                  </p>
                </div>
              </div>

              <div className="mt-6">
                <div className="mb-3 flex items-center justify-between gap-4">
                  <h3 className="text-sm font-semibold text-ivory">
                    Areas I&apos;m drawn to
                  </h3>
                  <span className="font-mono text-[10px] text-secondary/70">
                    SELECT A FOCUS
                  </span>
                </div>
                <div className="flex flex-wrap gap-2">
                  {interests.map((interest, index) => {
                    const isActive = activeInterest === index;

                    return (
                      <button
                        key={interest.name}
                        type="button"
                        aria-pressed={isActive}
                        onClick={() => setActiveInterest(index)}
                        className={`rounded-full border px-3 py-2 text-xs transition duration-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-cyan-300 ${
                          isActive
                            ? "border-cyan-300/50 bg-cyan-300/10 text-cyan-100 shadow-[0_0_18px_rgba(34,211,238,0.10)]"
                            : "border-white/10 bg-white/[0.03] text-slate-400 hover:border-cyan-300/30 hover:text-slate-200"
                        }`}
                      >
                        {interest.name}
                      </button>
                    );
                  })}
                </div>

                <div
                  aria-live="polite"
                  className="mt-4 flex min-h-20 items-start gap-4 rounded-xl border border-white/[0.06] bg-white/[0.025] p-4"
                >
                  <span
                    aria-hidden="true"
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-gradient-to-br from-cyan-400/15 to-blue-500/15 font-mono text-xs font-semibold text-cyan-200"
                  >
                    {interests[activeInterest].symbol}
                  </span>
                  <div>
                    <p className="text-xs font-semibold text-slate-200">
                      {interests[activeInterest].name}
                    </p>
                    <p className="mt-1 text-xs leading-5 text-slate-400">
                      {interests[activeInterest].detail}
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 flex items-start gap-3 border-t border-white/[0.08] pt-5">
                <span
                  aria-hidden="true"
                  className="mt-0.5 text-sm text-cyan-300"
                >
                  &#9670;
                </span>
                <div>
                  <p className="text-xs font-semibold text-ivory">Education</p>
                  <p className="mt-1 text-xs leading-5 text-slate-400">
                    IT Undergraduate
                    <span className="mx-1.5 text-slate-600">&middot;</span>
                    University of Moratuwa
                  </p>
                  <p className="text-xs leading-5 text-slate-500">
                    Faculty of Information Technology
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
