"use client";

import { motion } from "framer-motion";
import { Reveal } from "@/components/reveal";

const items = Array.from({ length: 8 }, (_, index) => ({
  title: `Frame ${index + 1}`,
  height: index % 3 === 0 ? "h-80" : index % 2 === 0 ? "h-64" : "h-96",
}));

export function MasonryGallery() {
  return (
    <div className="columns-1 gap-6 md:columns-2 xl:columns-4">
      {items.map((item, index) => (
        <Reveal key={item.title} delay={index * 0.05} className="mb-6 break-inside-avoid">
          <motion.div
            whileHover={{ y: -8, rotateX: 2, rotateY: -2 }}
            className={`group relative ${item.height} overflow-hidden rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-4`}
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.14),transparent_32%),linear-gradient(160deg,rgba(255,255,255,0.08),transparent_45%),linear-gradient(180deg,#131313,#050505)] transition duration-500 group-hover:scale-105" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-full border border-white/10 bg-black/35 px-4 py-3 text-xs uppercase tracking-[0.24em]">
              <span>{item.title}</span>
              <span>Preview</span>
            </div>
          </motion.div>
        </Reveal>
      ))}
    </div>
  );
}
