import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Spline from '@splinetool/react-spline';

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const y = useTransform(scrollYProgress, [0, 1], [0, 120]);
  const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0.6]);

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden bg-[radial-gradient(ellipse_at_top,rgba(24,24,32,0.8),rgba(10,10,16,1))] text-white">
      <div className="absolute inset-0">
        <Spline
          scene="https://prod.spline.design/4Zh-Q6DWWp5yPnQf/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70" />
      <div className="pointer-events-none absolute -top-24 left-1/2 h-[40rem] w-[40rem] -translate-x-1/2 rounded-full bg-fuchsia-500/20 blur-3xl" />

      <div className="relative z-10 mx-auto flex min-h-screen max-w-7xl flex-col items-center justify-center px-6 text-center">
        <motion.h1
          style={{ y, opacity }}
          className="mb-4 bg-gradient-to-r from-white via-violet-200 to-fuchsia-300 bg-clip-text text-5xl font-extrabold tracking-tight text-transparent sm:text-6xl md:text-7xl"
        >
          Developer Portfolio
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8, ease: 'easeOut' }}
          className="mx-auto mb-8 max-w-2xl text-balance text-lg text-zinc-300"
        >
          Crafting immersive, performant web apps with elegant glassmorphism, classic motion, and subtle 3D.
        </motion.p>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          className="flex flex-wrap items-center justify-center gap-4"
        >
          <a href="#projects" className="rounded-xl bg-white/10 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:bg-white/20">
            View Projects
          </a>
          <a href="#contact" className="rounded-xl border border-white/20 bg-black/30 px-6 py-3 text-sm font-medium text-white backdrop-blur-md transition hover:border-white/40 hover:bg-black/40">
            Contact Me
          </a>
        </motion.div>
      </div>
    </section>
  );
}
