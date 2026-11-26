"use client";
import { useEffect, useState } from "react";
import type { Content, Lang } from "@/data/content.en";
import { Logo } from "./Logo";

export function Header({ c, lang, toggle }: { c: Content; lang: Lang; toggle: () => void }) {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("home");
  useEffect(() => { document.body.classList.toggle("open", open); return () => document.body.classList.remove("open"); }, [open]);
  useEffect(() => {
    const io = new IntersectionObserver((es) => es.forEach((e) => e.isIntersecting && setActive(e.target.id)), { rootMargin: "-45% 0px -50% 0px" });
    c.nav.forEach((n) => { const el = document.getElementById(n.id); if (el) io.observe(el); });
    return () => io.disconnect();
  }, [c.nav]);
  const label = lang === "fa" ? "English" : "فارسی";
  const aria = lang === "fa" ? "Switch to English" : "تغییر زبان به فارسی";
  const langBtn = <button className="lt" type="button" lang={lang === "fa" ? "en" : "fa"} aria-label={aria} onClick={toggle}>{label}</button>;
  return (
    <>
      <header className="hd"><div className="w hr">
        <Logo />
        <nav className="nv" aria-label="Main">
          {c.nav.map((n) => <a key={n.id} href={`#${n.id}`} className={active === n.id ? "on" : ""} aria-current={active === n.id ? "true" : undefined}>{n.label}</a>)}
        </nav>
        <div className="ha">{langBtn}<a className="btn y sm" href="#contact">{c.cta}</a>
          <button className="mb" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(true)}><span /><span /></button></div>
      </div></header>
      <div className="mo" aria-hidden={!open}>
        <div className="top"><Logo variant="dk" />
          <div style={{ display: "flex", gap: 10, alignItems: "center" }}>{langBtn}
            <button className="mb" aria-label="Close menu" onClick={() => setOpen(false)}><span style={{ transform: "translateY(3.5px) rotate(45deg)" }} /><span style={{ transform: "translateY(-3.5px) rotate(-45deg)" }} /></button></div></div>
        <nav>{c.nav.map((n) => <a key={n.id} href={`#${n.id}`} onClick={() => setOpen(false)}>{n.label}</a>)}</nav>
        <a className="btn y" href="#contact" onClick={() => setOpen(false)}>{c.cta}</a>
      </div>
    </>
  );
}
