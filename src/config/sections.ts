/** Page order and visibility. Set enabled:false to hide a section without deleting it; reorder by moving lines. */
export type SectionId = "hero" | "about" | "services" | "process" | "projects" | "team" | "tech" | "contact";
export const sections: { id: SectionId; enabled: boolean }[] = [
  { id: "hero", enabled: true },
  { id: "about", enabled: true },
  { id: "services", enabled: true },
  { id: "process", enabled: true },
  { id: "projects", enabled: true },
  { id: "team", enabled: true },
  { id: "tech", enabled: true },
  { id: "contact", enabled: true },
];
