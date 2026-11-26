import type { Content } from "@/data/content.en";
export function Services({ c }: { c: Content }) {
  const s = c.services;
  return (
    <section id="services" className="sv"><div className="w sg">
      <div className="sticky"><h2>{s.title}</h2><p className="soft" style={{ maxWidth: "34ch" }}>{s.intro}</p><p className="note">{s.note}</p></div>
      <div>{s.items.map((it, i) => <div className={`row${i === 0 ? " on" : ""}`} key={it.t}><span className="m" /><h3>{it.t}</h3><p>{it.d}</p></div>)}</div>
    </div></section>
  );
}
