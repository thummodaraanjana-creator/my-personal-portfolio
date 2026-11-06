
import AboutSection from "./about-section";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#080b14] text-white overflow-hidden">

      {/* Navigation */}
      <nav className="flex items-center justify-between px-8 md:px-16 py-6">
        <h1 className="text-2xl font-bold tracking-wider">
          AN<span className="text-cyan-400">.</span>
        </h1>

        <div className="hidden md:flex gap-8 text-gray-300">
          <a href="#home" className="hover:text-cyan-400">Home</a>
          <a href="#about" className="hover:text-cyan-400">About</a>
          <a href="#projects" className="hover:text-cyan-400">Projects</a>
          <a href="#contact" className="hover:text-cyan-400">Contact</a>
        </div>

        <a
          href="#contact"
          className="rounded-full border border-cyan-400 px-5 py-2 text-cyan-400 hover:bg-cyan-400 hover:text-black transition"
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
          <p className="text-cyan-400 tracking-[0.3em] uppercase text-sm mb-5">
            Hello, I&apos;m
          </p>

          <h1 className="text-5xl md:text-7xl font-bold leading-tight">
            Anjana
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
              Thummodara
            </span>
          </h1>

          <h2 className="text-xl md:text-2xl text-gray-300 mt-6">
            Aspiring Software Developer
          </h2>

          <p className="text-gray-400 max-w-lg mt-5 leading-7">
            I&apos;m an IT undergraduate passionate about technology,
            software development and building creative digital solutions.
            Welcome to my personal portfolio.
          </p>

          <div className="flex flex-wrap gap-4 mt-8">
            <a
              href="#projects"
              className="bg-cyan-400 text-black font-semibold px-7 py-3 rounded-full hover:bg-cyan-300 transition"
            >
              Explore My Work &rarr;
            </a>

            <a
              href="#about"
              className="border border-gray-500 px-7 py-3 rounded-full hover:border-cyan-400 hover:text-cyan-400 transition"
            >
              About Me
            </a>
          </div>
        </div>

        {/* Interactive Visual */}
        <div className="flex-1 flex justify-center items-center">
          <div className="relative w-64 h-64 md:w-96 md:h-96 flex items-center justify-center">

            <div className="absolute inset-0 rounded-full border border-cyan-400/30 animate-[spin_15s_linear_infinite]" />

            <div className="absolute inset-8 rounded-full border border-blue-500/40 animate-[spin_10s_linear_infinite_reverse]" />

            <div className="w-48 h-48 md:w-64 md:h-64 rounded-full bg-gradient-to-br from-cyan-400 via-blue-600 to-purple-700 blur-[2px] shadow-[0_0_100px_rgba(34,211,238,0.35)] animate-pulse" />

            <div className="absolute text-white text-5xl font-bold">
              AN
            </div>

          </div>
        </div>

      </section>

      {/* Bottom Indicator */}
      <div className="text-center text-gray-500 pb-8 text-sm tracking-widest">
        SCROLL TO EXPLORE ↓
      </div>

      <AboutSection />
    </main>
  );
}
