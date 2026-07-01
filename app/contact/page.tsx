import Link from "next/link";
import { PageHero } from "@/components/page-hero";
import { socialLinks } from "@/data/site";

export default function ContactPage() {
  return (
    <>
      <PageHero
        eyebrow="Contact"
        title="Let&apos;s shape a motion story that feels refined, memorable, and alive."
        description="A minimal contact surface with placeholders for direct outreach, social discovery, and downloadable credentials."
      />
      <section className="pb-24">
        <div className="container-frame grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
          <div className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="eyebrow">Contact Details</p>
            <div className="mt-8 space-y-5 text-white/68">
              <p>Email: pavankumarjin02@gmail.com</p>
              <p>Instagram: @pav_ankumarj</p>
              <p>LinkedIn: linkedin.com/in/pavankumar</p>
              <p>Resume: Placeholder PDF download</p>
            </div>
          </div>

          <form className="rounded-[2rem] border border-white/10 bg-white/[0.03] p-8">
            <p className="eyebrow">Start a Project</p>
            <div className="mt-8 grid gap-5">
              {["Name", "Email", "Project Type", "Message"].map((field) => (
                <label key={field} className="grid gap-3 text-xs uppercase tracking-[0.28em] text-white/38">
                  {field}
                  {field === "Message" ? (
                    <textarea className="min-h-36 rounded-[1.2rem] border border-white/10 bg-black/25 px-4 py-4 text-sm tracking-normal text-white outline-none" />
                  ) : (
                    <input className="h-14 rounded-full border border-white/10 bg-black/25 px-5 text-sm tracking-normal text-white outline-none" />
                  )}
                </label>
              ))}
              <button className="mt-3 rounded-full bg-white px-6 py-4 text-sm uppercase tracking-[0.28em] text-black transition hover:opacity-85">
                Send Inquiry
              </button>
            </div>
          </form>
        </div>

        <div className="container-frame mt-8 flex flex-wrap gap-4">
          {socialLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="rounded-full border border-white/10 px-4 py-3 text-xs uppercase tracking-[0.24em] text-white/60 transition hover:bg-white hover:text-black"
            >
              {item.label}
            </Link>
          ))}
        </div>
      </section>
    </>
  );
}
