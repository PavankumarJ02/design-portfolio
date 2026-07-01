import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { services } from "@/data/site";

export default function ServicesPage() {
  return (
    <>
      <PageHero
        eyebrow="Services"
        title="Motion support tailored for brands, products, campaigns, and visual launches."
        description="The offering is framed like a premium studio menu: clear capabilities, elevated presentation, and room to adapt to real briefs later."
      />
      <section className="pb-24">
        <div className="container-frame grid gap-5 md:grid-cols-2">
          {services.map((service, index) => (
            <Reveal key={service} delay={index * 0.05}>
              <div className="rounded-[1.8rem] border border-white/10 bg-white/[0.03] p-7 transition duration-500 hover:-translate-y-1 hover:border-white/20">
                <p className="text-xs uppercase tracking-[0.28em] text-white/38">{String(index + 1).padStart(2, "0")}</p>
                <h2 className="mt-4 text-3xl font-semibold tracking-[-0.05em]">{service}</h2>
                <p className="mt-4 max-w-xl text-white/58">
                  Placeholder description for deliverables, collaboration style, and where this service fits in a wider visual system.
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </section>
    </>
  );
}
