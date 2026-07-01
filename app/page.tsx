import { Hero } from "@/components/hero";
import { MasonryGallery } from "@/components/masonry-gallery";
import { ProjectCard } from "@/components/project-card";
import { SectionHeading } from "@/components/section-heading";
import { SoftwareGrid } from "@/components/software-grid";
import { VideoShowcase } from "@/components/video-showcase";
import { featuredProjects, services } from "@/data/site";
import { Reveal } from "@/components/reveal";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="py-24">
        <div className="container-frame space-y-14">
          <SectionHeading
            eyebrow="Featured Work"
            title="Large-scale motion stories built with restraint, rhythm, and cinematic intent."
            description="Selected projects spanning launch films, motion systems, and abstract visual experiments. Each case study is structured to make replacement with real client work easy later."
          />
          <div className="grid gap-8">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.slug} project={project} index={index} />
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-frame space-y-14">
          <SectionHeading
            eyebrow="Gallery"
            title="A living archive of frames, loops, textures, and motion stills."
            description="A Pinterest-style masonry canvas for imagery, GIF previews, and short clips. The current version uses atmospheric placeholders designed to be swapped with final media."
          />
          <MasonryGallery />
        </div>
      </section>

      <section className="py-24">
        <div className="container-frame space-y-14">
          <SectionHeading
            eyebrow="Video Showcase"
            title="Motion needs tempo, not thumbnails."
            description="Dedicated presentation space for hero films, UI reels, and visual experiments with cinematic hover states and clear viewing hierarchy."
          />
          <VideoShowcase />
        </div>
      </section>

      <section className="py-24">
        <div className="container-frame space-y-14">
          <SectionHeading
            eyebrow="Services"
            title="Flexible support from concept framing to polished motion systems."
            description="The practice covers brand worlds, interface animation, launch content, and motion-led creative direction."
          />
          <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
            {services.map((service, index) => (
              <Reveal key={service} delay={index * 0.05}>
                <div className="panel rounded-[1.5rem] p-6">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/38">{String(index + 1).padStart(2, "0")}</p>
                  <h3 className="mt-4 text-2xl font-semibold tracking-[-0.04em]">{service}</h3>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="container-frame space-y-14">
          <SectionHeading
            eyebrow="Software"
            title="Craft shaped with modern motion, design, and 3D tools."
            description="A focused toolset chosen for narrative clarity, tactile motion, and polished delivery across film, interface, and brand expression."
          />
          <SoftwareGrid />
        </div>
      </section>
    </>
  );
}
