import { Reveal } from "@/components/reveal";

export function SectionHeading({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <Reveal className="grid gap-6 md:grid-cols-[0.9fr_1.1fr] md:items-end">
      <div className="space-y-4">
        <p className="eyebrow">{eyebrow}</p>
        <h2 className="editorial-title">{title}</h2>
      </div>
      <p className="max-w-2xl text-base leading-8 text-white/62 md:justify-self-end">{description}</p>
    </Reveal>
  );
}
