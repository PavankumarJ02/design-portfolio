"use client";

import { motion } from "framer-motion";
import { FiPlay } from "react-icons/fi";
import { Reveal } from "@/components/reveal";

const reels = [
  "Launch Film / 02:16",
  "UI Motion Reel / 01:08",
  "3D Atmosphere Test / 00:42",
];

export function VideoShowcase() {
  return (
    <div className="grid gap-6 lg:grid-cols-[1.2fr_0.8fr]">
      <Reveal>
        <motion.div
          whileHover={{ scale: 1.01 }}
          className="group relative min-h-[28rem] overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03]"
        >
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(255,255,255,0.24),transparent_25%),radial-gradient(circle_at_70%_35%,rgba(139,92,246,0.22),transparent_30%),linear-gradient(135deg,#171717,#050505)]" />
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="flex h-20 w-20 items-center justify-center rounded-full border border-white/20 bg-white/10 backdrop-blur-md transition duration-500 group-hover:scale-110">
              <FiPlay className="text-2xl" />
            </div>
          </div>
        </motion.div>
      </Reveal>
      <div className="grid gap-4">
        {reels.map((reel, index) => (
          <Reveal key={reel} delay={index * 0.08}>
            <motion.div
              whileHover={{ x: 8 }}
              className="panel rounded-[1.6rem] p-6"
            >
              <p className="text-xs uppercase tracking-[0.3em] text-white/45">Video</p>
              <p className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{reel}</p>
              <p className="mt-3 text-sm text-white/58">Placeholder embed area for Vimeo or YouTube preview with hover playback.</p>
            </motion.div>
          </Reveal>
        ))}
      </div>
    </div>
  );
}
