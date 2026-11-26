/** Site-wide settings. Set NEXT_PUBLIC_SITE_URL (or edit the fallback) once the real domain is known. */
export const site = {
  name: "Tilora",
  tagline: "Five minds. One studio.",
  description: "Tilora is a web design studio of five computer engineering students. Design. Code. Launch.",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://tilora.example",
};
