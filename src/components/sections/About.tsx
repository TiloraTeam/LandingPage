import type { Content } from "@/data/content.en";
export function About({ c }: { c: Content }) {
  const a = c.about, h = c.hero.board;
  return (
    <section id="about"><div className="w">
      <div className="ab"><h2>{a.title}</h2>
        <div className="pts">{a.points.map((p) => <div className="pt" key={p.t}><i /><div><h3>{p.t}</h3><p>{p.d}</p></div></div>)}</div></div>
      <div className="band"><b>{h[0]}<br />{h[1]}<br /><em>{h[2]}</em></b><p>{a.band}</p></div>
    </div></section>
  );
}
