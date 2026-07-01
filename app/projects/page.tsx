import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { featuredProjects } from "@/data/site";

export default function ProjectsPage() {
  return (
    <>
      <PageHero
        eyebrow="Projects"
        title="Case studies with room for problem framing, process thinking, and motion detail."
        description="Each placeholder project is already structured with a clear story arc, making it easy to replace this content with final work, frames, and embedded films."
      />
      <section className="pb-24">
        <div className="container-frame grid gap-5">
          {featuredProjects.map((project, index) => (
            <Reveal key={project.slug} delay={index * 0.06}>
              <Link
                href={`/projects/${project.slug}`}
                className="grid gap-5 rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-6 transition duration-500 hover:border-white/20 hover:bg-white/[0.05] md:grid-cols-[0.9fr_1.1fr]"
              >
                <p className="text-xs uppercase tracking-[0.3em] text-white/42">{project.category} / {project.year}</p>
                <div>
                  <h2 className="text-3xl font-semibold tracking-[-0.05em]">{project.title}</h2>
                  <p className="mt-3 max-w-2xl text-white/60">{project.summary}</p>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
