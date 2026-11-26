import type { Content } from "@/data/content.en";
export function Process({ c, num }: { c: Content; num: (i: number) => string }) {
  return (
    <section className="pr"><div className="w"><h2>{c.process.title}</h2>
      <div className="steps">{c.process.steps.map((s, i) => <div className="st" key={s.t}><div className="nd">{num(i + 1)}</div><h3>{s.t}</h3><p>{s.d}</p></div>)}</div>
    </div></section>
  );
}
