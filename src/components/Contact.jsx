import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="relative z-10 mx-auto max-w-4xl px-6 py-24 text-white">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.7 }}
        className="rounded-2xl border border-white/10 bg-white/5 p-8 text-center backdrop-blur-xl"
      >
        <h2 className="mb-3 text-3xl font-bold">Let's work together</h2>
        <p className="mx-auto mb-8 max-w-2xl text-zinc-300">
          Have a project in mind or want to say hello? I'm open to freelance work, collaborations, and full‑time opportunities.
        </p>
        <div className="flex flex-wrap items-center justify-center gap-4">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center gap-2 rounded-xl bg-white/10 px-5 py-3 text-sm font-medium backdrop-blur transition hover:bg-white/20"
          >
            <Mail className="h-4 w-4" /> Email
          </a>
          <a
            href="https://github.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-white/30 hover:bg-black/40"
          >
            <Github className="h-4 w-4" /> GitHub
          </a>
          <a
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-black/30 px-5 py-3 text-sm font-medium backdrop-blur transition hover:border-white/30 hover:bg-black/40"
          >
            <Linkedin className="h-4 w-4" /> LinkedIn
          </a>
        </div>
      </motion.div>
      <p className="mt-8 text-center text-xs text-zinc-400">© {new Date().getFullYear()} Your Name. All rights reserved.</p>
    </section>
  );
}
