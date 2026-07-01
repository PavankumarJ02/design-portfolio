"use client";

import { useEffect, useRef } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import gsap from "gsap";
import { MagneticButton } from "@/components/magnetic-button";

export function Hero() {
  const titleRef = useRef<HTMLHeadingElement | null>(null);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });

  useEffect(() => {
    if (!titleRef.current) {
      return;
    }

    gsap.fromTo(
      titleRef.current.querySelectorAll("span"),
      { yPercent: 120, opacity: 0 },
      {
        yPercent: 0,
        opacity: 1,
        duration: 1.15,
        stagger: 0.08,
        ease: "power4.out",
      },
    );
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden pt-32">
      <motion.div
        style={{ scaleX }}
        className="fixed left-0 right-0 top-0 z-[60] h-0.5 origin-left bg-white"
      />
      <div className="absolute inset-0">
        <div className="absolute left-[8%] top-[20%] h-48 w-48 rounded-full border border-white/12" />
        <div className="absolute right-[10%] top-[14%] h-24 w-24 rotate-12 rounded-3xl border border-white/10" />
        <div className="absolute bottom-[12%] left-[14%] h-80 w-80 rounded-full bg-white/[0.08] blur-[140px]" />
        <div className="absolute right-[8%] top-[36%] h-96 w-96 rounded-full bg-violet-400/10 blur-[160px]" />
      </div>
      <div className="container-frame relative flex min-h-[calc(100vh-8rem)] flex-col justify-between pb-14">
        <div className="grid gap-12 lg:grid-cols-[1.25fr_0.75fr] lg:items-end">
          <div className="space-y-8">
            <p className="eyebrow">Motion Designer / Visual Storyteller / Creative Developer</p>
            <h1 ref={titleRef} className="display-title max-w-5xl overflow-hidden">
              <span className="block">MOTION</span>
              <span className="block">THAT</span>
              <span className="block">MOVES PEOPLE.</span>
            </h1>
          </div>
          <motion.div
            animate={{ y: [0, -12, 0] }}
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
            className="panel rounded-[2rem] p-8"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-white/45">Profile</p>
            <p className="mt-6 text-lg leading-8 text-white/70">
              I create motion experiences that transform ideas into immersive visual stories through
              animation, design, and creativity.
            </p>
          </motion.div>
        </div>

        <div className="grid gap-10 pt-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <div className="flex flex-wrap gap-4">
            <MagneticButton href="/work" label="View Work" />
            <MagneticButton href="/contact" label="Contact" variant="ghost" />
          </div>
          <div className="grid gap-6 text-sm uppercase tracking-[0.22em] text-white/45 sm:grid-cols-3">
            <p>Brand Films</p>
            <p>UI Motion Systems</p>
            <p>3D Visual Experiments</p>
          </div>
        </div>
      </div>
    </section>
  );
}
