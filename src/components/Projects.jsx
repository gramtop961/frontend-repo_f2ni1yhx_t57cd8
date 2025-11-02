import React, { useCallback } from 'react';
import { motion } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';

const projects = [
  {
    title: 'Glass UI Dashboard',
    desc: 'A performant analytics dashboard with real‑time charts and glassmorphic UI.',
    tags: ['React', 'Tailwind', 'Framer Motion'],
  },
  {
    title: '3D Product Showcase',
    desc: 'Interactive 3D product explorer powered by WebGL and smooth parallax.',
    tags: ['React', 'Spline', 'WebGL'],
  },
  {
    title: 'AI Content Studio',
    desc: 'Content creation tools with AI assistance and collaborative editing.',
    tags: ['Next.js', 'TypeScript', 'OpenAI'],
  },
];

function TiltCard({ children }) {
  const handleMove = useCallback((e) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const midX = rect.width / 2;
    const midY = rect.height / 2;
    const rotateY = ((x - midX) / midX) * 8; // max 8deg
    const rotateX = -((y - midY) / midY) * 8;
    card.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
  }, []);

  const reset = useCallback((e) => {
    const card = e.currentTarget;
    card.style.transform = 'perspective(900px) rotateX(0deg) rotateY(0deg)';
  }, []);

  return (
    <div
      onMouseMove={handleMove}
      onMouseLeave={reset}
      className="transition-transform duration-200 will-change-transform"
      style={{ transformStyle: 'preserve-3d' }}
    >
      {children}
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="mb-8 text-3xl font-bold"
      >
        Featured Projects
      </motion.h2>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <TiltCard key={p.title}>
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6 }}
              className="group rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-xl"
            >
              <div className="mb-4 h-40 rounded-xl bg-gradient-to-br from-fuchsia-500/20 via-violet-500/10 to-cyan-500/20 ring-1 ring-inset ring-white/10" />
              <h3 className="mb-2 text-xl font-semibold">{p.title}</h3>
              <p className="mb-4 text-sm text-zinc-300">{p.desc}</p>
              <div className="mb-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span key={t} className="rounded-full border border-white/10 bg-white/5 px-2 py-1 text-xs text-zinc-300">
                    {t}
                  </span>
                ))}
              </div>
              <div className="flex items-center gap-4 text-zinc-300">
                <button className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-2 text-xs font-medium backdrop-blur transition hover:bg-white/20">
                  <Github className="h-4 w-4" />
                  Code
                </button>
                <button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-black/30 px-3 py-2 text-xs font-medium backdrop-blur transition hover:border-white/30 hover:bg-black/40">
                  <ExternalLink className="h-4 w-4" />
                  Live
                </button>
              </div>
            </motion.div>
          </TiltCard>
        ))}
      </div>
    </section>
  );
}
