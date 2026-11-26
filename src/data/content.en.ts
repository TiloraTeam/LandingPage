/** English content. Persian lives in content.fa.ts with the same shape (the Content type keeps them in sync). */
export const en = {
  nav: [
    { id: "home", label: "Home" }, { id: "about", label: "About" }, { id: "services", label: "Services" },
    { id: "projects", label: "Projects" }, { id: "team", label: "Team" }, { id: "contact", label: "Contact" },
  ],
  cta: "Let’s build yours",
  hero: {
    title: ["Five minds.", "One studio."],
    lead: "We design and build digital experiences that bring ideas to life.",
    sub: "Websites designed and built by five computer engineering students.",
    secondary: "See our work",
    board: ["Design.", "Code.", "Launch."],
    boardLabel: "Modular board built from the Tilora mark: four navy blocks and one yellow circle",
  },
  about: {
    title: "We are five computer engineering students who design and build websites together.",
    points: [
      { t: "Design and code, decided together", d: "The person drawing the layout knows what it costs to build, and the person building it knows why it looks that way." },
      { t: "Built to be edited", d: "Content, colours and sections live in one place, so a site can change without being rebuilt." },
      { t: "Five people, one standard", d: "Every project is reviewed by the whole team before it ships." },
    ],
    band: "Sample copy. The team edits the About text from the editor.",
  },
  services: {
    title: "What we build",
    intro: "From a single page to a full product site, designed and developed by the same team.",
    note: "Suggested services. Add, remove or reorder them in the editor.",
    items: [
      { t: "Website design", d: "Layouts, type and colour that make a brand recognisable on screen." },
      { t: "Frontend development", d: "Fast, accessible, responsive interfaces built to match the design exactly." },
      { t: "Backend and full-stack", d: "Forms, content management and integrations that keep the site working behind the scenes." },
      { t: "UI/UX design", d: "Flows and interfaces tested against how people actually use them." },
      { t: "Optimisation and support", d: "Performance, SEO and ongoing fixes after launch." },
    ],
  },
  process: {
    title: "How a project moves",
    steps: [
      { t: "Discover", d: "Goals, audience and what the site has to do." },
      { t: "Plan", d: "Pages, content and structure agreed first." },
      { t: "Design", d: "Layouts and visual style, reviewed with you." },
      { t: "Develop", d: "Clean, responsive code tested on real screens." },
      { t: "Launch", d: "Deployed, checked and handed over." },
    ],
  },
  projects: {
    title: "Selected work",
    filters: [{ id: "all", label: "All" }, { id: "web", label: "Websites" }, { id: "app", label: "Apps" }, { id: "design", label: "Design" }],
    sample: "Sample content",
    items: [
      { name: "Featured project name", desc: "One featured project gets the large layout. Replace this with a real description, cover image and links.", cat: "web", tags: ["Website", "Next.js", "Tailwind CSS"], tone: "s1", featured: true },
      { name: "Project name", desc: "", cat: "app", tags: ["App", "React"], tone: "s2", featured: false },
      { name: "Project name", desc: "", cat: "design", tags: ["Design", "Figma"], tone: "s3", featured: false },
    ],
  },
  team: {
    title: "The five of us",
    text: "Placeholder profiles. Each one holds a name, role, bio, photo, skills and links once the team fills them in.",
    side: "Five shapes, five people: the grid follows the Tilora mark.",
    cta: "Work with us",
    photo: "Photo",
    members: [1, 2, 3, 4, 5].map(() => ({ name: "Member name", role: "Role", skills: ["Skill", "Skill"] })),
  },
  tech: {
    title: "Tools we work with",
    note: "Suggested list. Confirm before launch.",
    groups: [
      { t: "Frontend", items: [["HT", "HTML"], ["CS", "CSS"], ["JS", "JavaScript"], ["TS", "TypeScript"], ["Re", "React"], ["Nx", "Next.js"], ["Tw", "Tailwind CSS"]] },
      { t: "Backend", items: [["No", "Node.js"], ["Ap", "API design"]] },
      { t: "Design and workflow", items: [["Fg", "Figma"], ["Gi", "Git"], ["GH", "GitHub"]] },
    ],
  },
  contact: {
    title: "Let’s build yours.",
    lead: "Tell us what you need. Five people read every message.",
    links: [
      { l: "Email", v: "hello@your-domain.com" }, { l: "Telegram", v: "@your-handle" },
      { l: "Instagram", v: "@your-handle" }, { l: "GitHub", v: "github.com/your-org" },
    ],
    form: {
      name: "Name", email: "Email", subject: "Subject", message: "Message", send: "Send message",
      ph: { name: "Your name", email: "you@example.com", subject: "What is this about?", message: "Tell us about your project" },
      errors: { name: "Enter your name.", email: "Enter a valid email address.", subject: "Add a subject.", message: "Write at least 10 characters." },
      status: {
        sending: "Sending…", sent: "Message sent. We will reply by email.",
        unconfigured: "This form is not connected to an email service yet. Email us directly instead.",
        failed: "Could not send the message. Try again or email us directly.",
      },
    },
  },
  footer: {
    desc: "Web design studio. Websites designed and built by five computer engineering students.",
    pages: "Pages", find: "Find us", rights: "© 2026 Tilora. All rights reserved.", top: "Back to top",
  },
};
export type Content = typeof en;
export type Lang = "en" | "fa";
