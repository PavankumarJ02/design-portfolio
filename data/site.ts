export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  role: string;
  tools: string[];
  summary: string;
  challenge: string;
  process: string[];
  result: string;
  palette: string[];
};

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/projects", label: "Projects" },
  { href: "/about", label: "About" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
];

export const featuredProjects: Project[] = [
  {
    slug: "kinetic-orbit",
    title: "Kinetic Orbit",
    category: "Brand Film",
    year: "2026",
    role: "Creative Direction + Motion Design",
    tools: ["After Effects", "Blender", "Premiere Pro"],
    summary:
      "A cinematic launch film translating a minimalist identity system into a weightless orbital world.",
    challenge:
      "Translate a static premium brand into motion without losing restraint or sophistication.",
    process: [
      "Built a monochrome visual language with occasional chromatic accents.",
      "Used 3D light studies to shape the timing language before final animation.",
      "Created modular scenes for cutdowns, social loops, and event screens.",
    ],
    result:
      "Delivered a hero film and a family of campaign assets with a consistent luxury tempo.",
    palette: ["#0B0B0B", "#FFFFFF", "#C4C4C4", "#8B5CF6"],
  },
  {
    slug: "noir-signal",
    title: "Noir Signal",
    category: "UI Motion System",
    year: "2025",
    role: "Motion Systems Designer",
    tools: ["Figma", "Rive", "After Effects"],
    summary:
      "An interaction language for a next-generation product interface balancing clarity, rhythm, and depth.",
    challenge:
      "Make complex product behaviors feel elegant while staying fast and understandable.",
    process: [
      "Mapped every state transition into a repeatable motion grammar.",
      "Prototyped micro-interactions in Rive for real-feel timing tests.",
      "Documented easing, duration, and hierarchy rules for handoff.",
    ],
    result:
      "A systemized motion toolkit that improved cohesion across product surfaces.",
    palette: ["#050505", "#EAEAEA", "#8E8E8E", "#4F46E5"],
  },
  {
    slug: "lumen-frame",
    title: "Lumen Frame",
    category: "3D Visual Experiment",
    year: "2024",
    role: "3D Artist + Motion Designer",
    tools: ["Blender", "Photoshop", "Illustrator"],
    summary:
      "A series of sculptural light studies exploring memory, texture, and form in a gallery-like motion piece.",
    challenge:
      "Create an emotional abstract piece with enough structure to support narrative sequencing.",
    process: [
      "Developed frame compositions as still artwork before introducing motion.",
      "Used volumetric lighting to guide focus instead of relying on color.",
      "Refined edit pacing around silence, contrast, and negative space.",
    ],
    result:
      "A striking experimental sequence used across social teasers, loops, and presentation backdrops.",
    palette: ["#020202", "#F6F1EB", "#B9B1A8", "#A78BFA"],
  },
];

export const services = [
  "Motion Design",
  "Brand Animation",
  "Logo Animation",
  "UI Animation",
  "Social Motion Graphics",
  "Explainer Films",
  "Product Animation",
  "Creative Direction",
];

export const software = [
  "After Effects",
  "Blender",
  "Figma",
  "Illustrator",
  "Photoshop",
  "Premiere Pro",
  "Inkscape",
  "Rive",
];

export const timeline = [
  { year: "2026", title: "Independent Motion Practice", detail: "Building cinematic brand worlds and launch visuals." },
  { year: "2025", title: "Motion Systems Design", detail: "Crafting UI animation principles and interactive prototypes." },
  { year: "2024", title: "3D Visual Exploration", detail: "Expanding into abstract films, renders, and spatial storytelling." },
  { year: "2023", title: "Brand Storytelling", detail: "Developing identity-led motion for digital campaigns and social." },
];

export const socialLinks = [
  { label: "Instagram", href: "#" },
  { label: "LinkedIn", href: "#" },
  { label: "Behance", href: "#" },
  { label: "Dribbble", href: "#" },
  { label: "GitHub", href: "#" },
];
