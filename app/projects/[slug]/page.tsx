import Link from "next/link";
import { notFound } from "next/navigation";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { featuredProjects } from "@/data/site";

export function generateStaticParams() {
  return featuredProjects.map((project) => ({ slug: project.slug }));
}

export default async function ProjectDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const project = featuredProjects.find((entry) => entry.slug === slug);

  if (!project) {
    notFound();
  }

  const nextProject =
    featuredProjects[
      (featuredProjects.findIndex((entry) => entry.slug === slug) + 1) %
        featuredProjects.length
    ];

  return (
    <>
      <PageHero
        eyebrow={`${project.category} / ${project.year}`}
        title={project.title}
        description={project.summary}
      />
      <section className="pb-24">
        <div className="container-frame grid gap-8">
          <Reveal className="grid gap-6 lg:grid-cols-[1.15fr_0.85fr]">
            <div className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="min-h-[34rem] rounded-[1.5rem] bg-[radial-gradient(circle_at_25%_25%,rgba(255,255,255,0.22),transparent_22%),radial-gradient(circle_at_70%_55%,rgba(139,92,246,0.18),transparent_26%),linear-gradient(180deg,#171717,#050505)]" />
            </div>
            <div className="space-y-5 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Overview</p>
              <p className="text-base leading-8 text-white/66">{project.challenge}</p>
              <div className="grid gap-4 border-t border-white/10 pt-5 text-sm text-white/56">
                <p>Role: {project.role}</p>
                <p>Software: {project.tools.join(" / ")}</p>
              </div>
            </div>
          </Reveal>

          <div className="grid gap-6 lg:grid-cols-2">
            <Reveal className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Creative Process</p>
              <div className="mt-6 space-y-4 text-white/66">
                {project.process.map((step) => (
                  <p key={step}>{step}</p>
                ))}
              </div>
            </Reveal>
            <Reveal delay={0.1} className="rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Results</p>
              <p className="mt-6 text-base leading-8 text-white/66">{project.result}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                {project.palette.map((swatch) => (
                  <div
                    key={swatch}
                    className="flex items-center gap-3 rounded-full border border-white/10 px-3 py-2 text-xs uppercase tracking-[0.22em] text-white/52"
                  >
                    <span
                      className="h-3 w-3 rounded-full border border-white/10"
                      style={{ backgroundColor: swatch }}
                    />
                    {swatch}
                  </div>
                ))}
              </div>
            </Reveal>
          </div>

          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              {["Storyboards", "Moodboard", "Motion Frames", "Behind the Scenes"].map((item) => (
                <div key={item} className="rounded-[1.5rem] border border-white/10 bg-black/30 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/38">{item}</p>
                  <div className="mt-5 h-44 rounded-[1.25rem] bg-[linear-gradient(145deg,rgba(255,255,255,0.14),transparent_35%),linear-gradient(180deg,#141414,#070707)]" />
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal>
            <Link
              href={`/projects/${nextProject.slug}`}
              className="flex items-center justify-between rounded-[1.75rem] border border-white/10 bg-white/[0.03] px-6 py-5 transition hover:border-white/20 hover:bg-white/[0.05]"
            >
              <span className="text-xs uppercase tracking-[0.28em] text-white/42">Next Project</span>
              <span className="text-2xl font-semibold tracking-[-0.04em]">{nextProject.title}</span>
            </Link>
          </Reveal>
        </div>
      </section>
    </>
  );
}
