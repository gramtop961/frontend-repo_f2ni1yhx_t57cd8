import React from 'react';
import { motion } from 'framer-motion';
import { Code, Rocket } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="relative z-10 mx-auto max-w-6xl px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl"
      >
        <div className="mb-6 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/5 px-4 py-2 backdrop-blur">
          <Rocket className="h-4 w-4 text-fuchsia-300" />
          <span className="text-xs uppercase tracking-widest text-zinc-300">About Me</span>
        </div>
        <h2 className="mb-4 text-3xl font-bold">Hi, I'm a Full‑Stack Web Developer</h2>
        <p className="mb-6 max-w-3xl text-zinc-300">
          I design and build interactive web experiences with a focus on clarity, accessibility, and performance. My toolkit includes React, Next.js, TypeScript, Node, and modern styling systems. I love turning complex ideas into beautiful, usable products.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-fuchsia-300">
              <Code className="h-5 w-5" />
              <span className="text-sm font-semibold">Front‑End Craft</span>
            </div>
            <p className="text-sm text-zinc-300">React, animations, accessible UI, and pixel‑perfect glassmorphism.</p>
          </div>
          <div className="rounded-xl border border-white/10 bg-white/5 p-5 backdrop-blur">
            <div className="mb-2 flex items-center gap-2 text-fuchsia-300">
              <Code className="h-5 w-5" />
              <span className="text-sm font-semibold">Back‑End Focus</span>
            </div>
            <p className="text-sm text-zinc-300">APIs, databases, authentication, and production‑grade deployments.</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
