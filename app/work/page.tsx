import { PageHero } from "@/components/page-hero";
import { ProjectCard } from "@/components/project-card";
import { featuredProjects } from "@/data/site";

export default function WorkPage() {
  return (
    <>
      <PageHero
        eyebrow="Work"
        title="A cinematic selection of motion-led projects designed to carry emotion, clarity, and brand presence."
        description="This page brings the featured work into one focused stream, with generous spacing and reusable case-study entry points for future client additions."
      />
      <section className="pb-24">
        <div className="container-frame grid gap-8">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} index={index} />
          ))}
        </div>
      </section>
    </>
  );
}
