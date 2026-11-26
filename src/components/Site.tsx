"use client";
import { sections } from "@/config/sections";
import { useSite } from "./LangProvider";
import { Header } from "./Header";
import { Hero } from "./sections/Hero";
import { About } from "./sections/About";
import { Services } from "./sections/Services";
import { Process } from "./sections/Process";
import { Projects } from "./sections/Projects";
import { Team } from "./sections/Team";
import { Tech } from "./sections/Tech";
import { Contact } from "./sections/Contact";
import { Footer } from "./sections/Footer";

/** Renders the sections listed (and ordered) in src/config/sections.ts. */
export function Site() {
  const { lang, c, toggle, num } = useSite();
  const view = { hero: <Hero c={c} />, about: <About c={c} />, services: <Services c={c} />, process: <Process c={c} num={num} />,
    projects: <Projects c={c} />, team: <Team c={c} />, tech: <Tech c={c} />, contact: <Contact c={c} /> };
  return (<><Header c={c} lang={lang} toggle={toggle} /><main>{sections.filter((s) => s.enabled).map((s) => <div key={s.id} style={{ display: "contents" }}>{view[s.id]}</div>)}</main><Footer c={c} /></>);
}
