
import AboutSection from "./about-section";
import ProjectsSection from "./projects/_components/projects-section";
import HeroCallMe from "./hero-call-me";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-obsidian text-ivory">

      {/* Navigation */}
      <nav className="flex items-center justify-between border-b border-subtle-border/70 px-8 py-6 md:px-16">
        <h1 className="text-2xl font-bold tracking-wider text-ivory">
          AN<span className="text-accent">.</span>
        </h1>

        <div className="hidden gap-8 text-secondary md:flex">
          <a href="#home" className="transition-colors hover:text-accent-hover">Home</a>
          <a href="#about" className="transition-colors hover:text-accent-hover">About</a>
          <a href="#projects" className="transition-colors hover:text-accent-hover">Projects</a>
          <a href="#contact" className="transition-colors hover:text-accent-hover">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-accent/70 px-5 py-2 text-accent transition-colors hover:bg-accent hover:text-obsidian"
        >
          Let&apos;s Talk
        </a>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative min-h-[85vh] flex flex-col md:flex-row items-center justify-center px-8 md:px-16 gap-12"
      >

        {/* Introduction */}
        <div className="z-10 flex-1">
          <p className="mb-5 text-sm uppercase tracking-[0.3em] text-accent">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl font-bold leading-tight tracking-[-0.045em] md:text-7xl">
            Anjana
            <br />
            <span className="bg-gradient-to-r from-accent to-accent-hover bg-clip-text text-transparent">
              Thummodara
            </span>
          </h1>

          <h2 className="mt-6 text-xl text-ivory/90 md:text-2xl">
            Aspiring Software Developer
          </h2>

          <p className="mt-5 max-w-lg leading-7 text-secondary">
            I&apos;m an IT undergraduate passionate about technology,
            software development and building creative digital solutions.
            Welcome to my personal portfolio.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="rounded-full bg-accent px-7 py-3 font-semibold text-obsidian transition-colors hover:bg-accent-hover"
            >
              Explore My Work &rarr;
            </a>

            <a
              href="#about"
              className="rounded-full border border-subtle-border px-7 py-3 text-ivory transition-colors hover:border-accent hover:text-accent-hover"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Interactive Visual */}
        <div className="flex-1 flex justify-center items-center">
          <HeroCallMe />
        </div>

      </section>

      {/* Bottom Indicator */}
      <div className="pb-8 text-center text-sm tracking-[0.24em] text-secondary/75">
        SCROLL TO EXPLORE ↓
      </div>

      <AboutSection />
      <ProjectsSection />
    </main>
  );
}
