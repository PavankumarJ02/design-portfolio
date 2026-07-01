import Link from "next/link";
import { FiArrowUpRight } from "react-icons/fi";
import { Reveal } from "@/components/reveal";
import { Project } from "@/data/site";

export function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <Reveal delay={index * 0.08}>
      <Link
        href={`/projects/${project.slug}`}
        className="project-sheen group relative grid gap-6 overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-5 transition duration-700 hover:-translate-y-1 hover:border-white/20 hover:bg-white/[0.05] lg:grid-cols-[1.1fr_0.9fr]"
      >
        <div className="relative min-h-[24rem] overflow-hidden rounded-[1.5rem] border border-white/10">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_30%,rgba(255,255,255,0.2),transparent_28%),linear-gradient(135deg,rgba(255,255,255,0.16),transparent_35%),linear-gradient(180deg,#111,#050505)] transition duration-700 group-hover:scale-105" />
          <div className="absolute inset-x-[10%] top-[14%] h-24 rounded-full bg-white/10 blur-3xl" />
          <div className="absolute inset-x-[22%] bottom-[18%] h-32 rounded-full bg-violet-400/[0.16] blur-3xl" />
        </div>
        <div className="flex flex-col justify-between gap-8 p-3 lg:py-5">
          <div className="space-y-5">
            <div className="flex items-center justify-between text-xs uppercase tracking-[0.28em] text-white/45">
              <span>{project.category}</span>
              <span>{project.year}</span>
            </div>
            <div>
              <h3 className="text-3xl font-semibold tracking-[-0.05em]">{project.title}</h3>
              <p className="mt-4 max-w-xl text-white/62">{project.summary}</p>
            </div>
            <div className="grid gap-3 text-sm text-white/52 sm:grid-cols-2">
              <p>Role: {project.role}</p>
              <p>Tools: {project.tools.join(" / ")}</p>
            </div>
          </div>
          <div className="flex items-center gap-3 text-sm uppercase tracking-[0.24em] text-white/80">
            <span>View Case Study</span>
            <FiArrowUpRight className="transition duration-500 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </div>
        </div>
      </Link>
    </Reveal>
  );
}
