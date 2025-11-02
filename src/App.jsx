import React from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Contact from './components/Contact';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <header className="fixed inset-x-0 top-0 z-50 mx-auto flex max-w-6xl items-center justify-between rounded-b-2xl border border-white/10 bg-black/30 px-4 py-3 backdrop-blur-md">
        <a href="#home" className="text-sm font-semibold tracking-wide text-zinc-100">dev.glass</a>
        <nav className="hidden gap-6 text-sm text-zinc-300 sm:flex">
          <a href="#about" className="transition hover:text-white">About</a>
          <a href="#projects" className="transition hover:text-white">Projects</a>
          <a href="#contact" className="transition hover:text-white">Contact</a>
        </nav>
        <a
          href="#contact"
          className="rounded-xl bg-white/10 px-4 py-2 text-xs font-medium text-white backdrop-blur transition hover:bg-white/20"
        >
          Hire Me
        </a>
      </header>

      {/* Parallax starfield background layer */}
      <div className="pointer-events-none fixed inset-0 -z-0 bg-[radial-gradient(circle_at_20%_20%,rgba(120,119,198,0.15),transparent_40%),radial-gradient(circle_at_80%_0%,rgba(236,72,153,0.12),transparent_35%),radial-gradient(circle_at_50%_100%,rgba(56,189,248,0.12),transparent_40%)]" />

      <main className="relative">
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}

export default App;
