import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="relative overflow-hidden pt-36">
      <div className="container-frame">
        <Reveal className="grid gap-8 pb-16 md:grid-cols-[1.1fr_0.9fr] md:items-end">
          <div className="space-y-5">
            <p className="eyebrow">{eyebrow}</p>
            <h1 className="editorial-title max-w-4xl">{title}</h1>
          </div>
          <p className="max-w-xl text-base leading-8 text-white/62 md:justify-self-end">{description}</p>
        </Reveal>
      </div>
    </section>
  );
}
