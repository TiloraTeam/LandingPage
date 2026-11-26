import type { Content } from "@/data/content.en";
export function Tech({ c }: { c: Content }) {
  const t = c.tech;
  return (
    <section><div className="w">
      <div className="th"><h2>{t.title}</h2><p className="note">{t.note}</p></div>
      <div className="tc3">{t.groups.map((g) => <div key={g.t}><h3>{g.t}</h3>{g.items.map(([ab, n]) => <span className="tk" key={n}><b>{ab}</b>{n}</span>)}</div>)}</div>
    </div></section>
  );
}
