import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SoftwareGrid } from "@/components/software-grid";
import { socialLinks, timeline } from "@/data/site";
import Link from "next/link";

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About"
        title="A motion practice grounded in atmosphere, timing, and visual restraint."
        description="Pavan Kumar is presented here as a multidisciplinary motion designer shaping stories through movement, composition, and systems thinking."
      />
      <section className="pb-24">
        <div className="container-frame grid gap-8">
          <div className="grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
            <Reveal className="overflow-hidden rounded-[2rem] border border-white/10 bg-white/[0.03] p-4">
              <div className="min-h-[34rem] rounded-[1.5rem] bg-[radial-gradient(circle_at_50%_18%,rgba(255,255,255,0.22),transparent_16%),linear-gradient(180deg,#171717,#060606)]" />
            </Reveal>
            <Reveal delay={0.1} className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
              <p className="eyebrow">Bio</p>
              <p className="mt-6 max-w-2xl text-lg leading-8 text-white/66">
                I design motion that feels precise, atmospheric, and emotionally readable. My approach blends brand sensitivity, interface clarity, and cinematic pacing to build work that moves with intention.
              </p>
              <div className="mt-8 grid gap-4 text-sm text-white/54 md:grid-cols-2">
                <p>Experience: Motion design, branding, UI animation, 3D exploration.</p>
                <p>Philosophy: Less noise, better rhythm, stronger visual memory.</p>
                <p>Clients: Placeholder for studios, founders, agencies, and product teams.</p>
                <p>Awards: Placeholder for recognitions, features, and showcases.</p>
              </div>
            </Reveal>
          </div>

          <Reveal className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="eyebrow">Timeline</p>
            <div className="mt-8 grid gap-4 md:grid-cols-2">
              {timeline.map((item) => (
                <div key={item.year} className="rounded-[1.5rem] border border-white/10 bg-black/20 p-5">
                  <p className="text-xs uppercase tracking-[0.28em] text-white/38">{item.year}</p>
                  <h2 className="mt-3 text-2xl font-semibold tracking-[-0.04em]">{item.title}</h2>
                  <p className="mt-3 text-white/58">{item.detail}</p>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal className="space-y-8 rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <div className="flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="eyebrow">Software Skills</p>
                <h2 className="mt-3 text-3xl font-semibold tracking-[-0.05em]">Tooling for story, systems, and polish.</h2>
              </div>
              <div className="flex flex-wrap gap-4 text-sm text-white/54">
                {socialLinks.map((item) => (
                  <Link key={item.label} href={item.href}>
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>
            <SoftwareGrid />
          </Reveal>
        </div>
      </section>
    </>
  );
}
