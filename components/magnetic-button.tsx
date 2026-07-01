"use client";

import Link from "next/link";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

type Props = {
  href: string;
  label: string;
  variant?: "solid" | "ghost";
};

export function MagneticButton({ href, label, variant = "solid" }: Props) {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 160, damping: 14 });
  const springY = useSpring(y, { stiffness: 160, damping: 14 });
  const shadow = useTransform(
    springY,
    [-20, 0, 20],
    [
      "0 24px 48px rgba(255,255,255,0.18)",
      "0 14px 30px rgba(255,255,255,0.12)",
      "0 8px 20px rgba(255,255,255,0.08)",
    ],
  );

  return (
    <motion.div style={{ x: springX, y: springY, boxShadow: shadow }} className="rounded-full">
      <Link
        href={href}
        onMouseMove={(event) => {
          const rect = event.currentTarget.getBoundingClientRect();
          x.set((event.clientX - rect.left - rect.width / 2) * 0.14);
          y.set((event.clientY - rect.top - rect.height / 2) * 0.14);
        }}
        onMouseLeave={() => {
          x.set(0);
          y.set(0);
        }}
        className={`group flex items-center gap-3 rounded-full px-6 py-3 text-sm uppercase tracking-[0.28em] transition-colors duration-500 ${
          variant === "solid"
            ? "bg-white text-black"
            : "border border-white/20 bg-white/5 text-white hover:bg-white hover:text-black"
        }`}
      >
        <span>{label}</span>
        <span className="transition-transform duration-500 group-hover:translate-x-1">01</span>
      </Link>
    </motion.div>
  );
}
