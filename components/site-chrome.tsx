"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { navLinks, socialLinks } from "@/data/site";

export function SiteChrome({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  return (
    <div className="relative overflow-x-hidden">
      <header className="fixed inset-x-0 top-0 z-50">
        <div className="container-frame mt-4 flex items-center justify-between rounded-full border border-white/10 bg-black/55 px-5 py-4 backdrop-blur-xl">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.35em]">
            Pavan Kumar
          </Link>
          <nav className="hidden items-center gap-6 text-xs uppercase tracking-[0.3em] text-white/70 md:flex">
            {navLinks.map((link) => {
              const active = pathname === link.href;

              return (
                <Link key={link.href} href={link.href} className="relative py-2">
                  {link.label}
                  {active ? (
                    <motion.span
                      layoutId="nav-line"
                      className="absolute inset-x-0 -bottom-0.5 h-px bg-white"
                    />
                  ) : null}
                </Link>
              );
            })}
          </nav>
          <Link
            href="/contact"
            className="hidden rounded-full border border-white/15 px-4 py-2 text-xs uppercase tracking-[0.28em] md:block"
          >
            Start a Project
          </Link>
        </div>
      </header>

      <AnimatePresence mode="wait">
        <motion.main
          key={pathname}
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.65, ease: [0.22, 1, 0.36, 1] }}
        >
          {children}
        </motion.main>
      </AnimatePresence>

      <footer className="border-t border-white/10 pb-10 pt-20">
        <div className="container-frame flex flex-col gap-10">
          <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="eyebrow">Footer</p>
              <h2 className="editorial-title max-w-3xl">
                Let&apos;s Create Something <span className="editorial-serif">Beautiful.</span>
              </h2>
            </div>
            <Link
              href="/contact"
              className="w-fit rounded-full border border-white/15 px-5 py-3 text-xs uppercase tracking-[0.28em] text-white/80 transition hover:bg-white hover:text-black"
            >
              Contact
            </Link>
          </div>
          <div className="flex flex-col gap-5 border-t border-white/10 pt-6 text-sm text-white/55 md:flex-row md:items-center md:justify-between">
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((item) => (
                <Link key={item.label} href={item.href} className="transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
            <p>© 2026 Pavan Kumar. Crafted for motion, detail, and story.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
