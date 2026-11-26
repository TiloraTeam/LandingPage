import type { Content } from "@/data/content.en";
export function Team({ c }: { c: Content }) {
  const t = c.team;
  return (
    <section id="team" className="tm"><div className="w"><div className="tg">
      {t.members.map((m, i) => i < 4 ? (
        <article className={`t m${i + 1}`} key={i}><div className="ph2">{t.photo}</div>
          <div><h3>{m.name}</h3><p>{m.role}</p><div className="k">{m.skills.map((s, j) => <span key={j}>{s}</span>)}</div></div></article>
      ) : (
        <article className="t c m5" key={i}><div><h3>{m.name}</h3><p>{m.role}</p></div></article>
      ))}
      <div className="ti"><h2>{t.title}</h2><p>{t.text}</p></div>
      <div className="tr"><p className="soft" style={{ fontSize: 16, maxWidth: "24ch" }}>{t.side}</p><a className="btn n sm" href="#contact">{t.cta}</a></div>
    </div></div></section>
  );
}
