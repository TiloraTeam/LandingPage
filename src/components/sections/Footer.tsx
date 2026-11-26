import type { Content } from "@/data/content.en";
import { Logo } from "../Logo";
export function Footer({ c }: { c: Content }) {
  const f = c.footer;
  return (
    <footer className="ft"><div className="w"><div className="fg">
      <div><Logo variant="dk" /><p>{f.desc}</p></div>
      <div><h4>{f.pages}</h4><ul>{c.nav.slice(1).map((n) => <li key={n.id}><a href={`#${n.id}`}>{n.label}</a></li>)}</ul></div>
      <div><h4>{f.find}</h4><ul>{c.contact.links.map((x) => <li key={x.l}><a href="#contact">{x.l}</a></li>)}</ul></div></div>
      <div className="fb"><span>{f.rights}</span><a className="up" href="#home" aria-label={f.top}>↑</a></div></div></footer>
  );
}
