import {
  LuBlend,
  LuBoxes,
  LuBrush,
  LuClapperboard,
  LuHexagon,
  LuLayers,
  LuPenTool,
  LuSparkles,
} from "react-icons/lu";
import { Reveal } from "@/components/reveal";

const icons = [
  { label: "After Effects", icon: LuClapperboard },
  { label: "Blender", icon: LuBoxes },
  { label: "Figma", icon: LuPenTool },
  { label: "Illustrator", icon: LuBrush },
  { label: "Photoshop", icon: LuLayers },
  { label: "Premiere Pro", icon: LuSparkles },
  { label: "Inkscape", icon: LuHexagon },
  { label: "Rive", icon: LuBlend },
];

export function SoftwareGrid() {
  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {icons.map((item, index) => {
        const Icon = item.icon;

        return (
          <Reveal key={item.label} delay={index * 0.05}>
            <div className="panel flex items-center gap-4 rounded-[1.5rem] p-5">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.06]">
                <Icon className="text-xl" />
              </div>
              <span className="text-sm uppercase tracking-[0.18em] text-white/72">{item.label}</span>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}
