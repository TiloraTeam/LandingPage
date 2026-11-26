import type { Content } from "@/data/content.en";
export function Hero({ c }: { c: Content }) {
  const h = c.hero;
  return (
    <section id="home" className="hero"><div className="w hg">
      <div><h1>{h.title[0]}<br />{h.title[1]}</h1><p className="l">{h.lead}</p><p className="s">{h.sub}</p>
        <div className="cta"><a className="btn y" href="#contact">{c.cta}</a><a className="btn o" href="#projects">{h.secondary}</a></div></div>
      <div className="board" role="img" aria-label={h.boardLabel}><span className="d1" /><span className="d2" />
        <div className="g"><div className="b b1">Aa</div><div className="b b2">&lt;/&gt;</div><div className="b b3"><i /><i /><i /></div>
          <div style={{ gridArea: "2/2" }} className="b b4"><span>{h.board[0]}<br />{h.board[1]}<br /><em>{h.board[2]}</em></span></div>
          <div style={{ gridArea: "3/2" }} className="cy" /></div></div>
    </div></section>
  );
}
