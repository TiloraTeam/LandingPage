"use client";
import { useState } from "react";
import type { Content } from "@/data/content.en";
export function Projects({ c }: { c: Content }) {
  const p = c.projects;
  const [f, setF] = useState("all");
  const items = p.items.filter((x) => f === "all" || x.cat === f);
  return (
    <section id="projects" className="pj"><div className="w">
      <div className="ph"><h2>{p.title}</h2>
        <div className="chips" role="group" aria-label={p.title}>{p.filters.map((x) => <button key={x.id} className={f === x.id ? "on" : ""} aria-pressed={f === x.id} onClick={() => setF(x.id)}>{x.label}</button>)}</div></div>
      <div className="pg">{items.map((x, i) => {
        const feat = f === "all" && x.featured;
        return (
          <article className={`pc${feat ? " f" : ""}`} key={x.cat}>
            <div className={`shot ${x.tone}`} aria-hidden><div className="bar"><i /><i /><i /></div><div className="in"><b /><b /><div className="rw"><u /><u />{i === 0 && <u />}</div></div></div>
            <div className="meta"><h3>{x.name}</h3>{x.desc && <p>{x.desc}</p>}
              <div className="tags">{x.tags.map((t) => <span key={t}>{t}</span>)}<span className="sm">{p.sample}</span></div></div>
          </article>);
      })}</div>
    </div></section>
  );
}
