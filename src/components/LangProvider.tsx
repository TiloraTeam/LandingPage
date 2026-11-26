"use client";
import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";
import { en, type Content, type Lang } from "@/data/content.en";
import { fa } from "@/data/content.fa";

const dict: Record<Lang, Content> = { en, fa };
type Ctx = { lang: Lang; c: Content; toggle: () => void; num: (i: number) => string };
const Context = createContext<Ctx>({ lang: "en", c: en, toggle: () => {}, num: String });

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLang] = useState<Lang>("en");
  useEffect(() => { try { if (localStorage.getItem("tilora-lang") === "fa") setLang("fa"); } catch {} }, []);
  useEffect(() => {
    document.documentElement.lang = lang;
    document.documentElement.dir = lang === "fa" ? "rtl" : "ltr";
  }, [lang]);
  const toggle = useCallback(() => setLang((l) => {
    const next = l === "fa" ? "en" : "fa";
    try { localStorage.setItem("tilora-lang", next); } catch {}
    return next;
  }), []);
  const num = (i: number) => (lang === "fa" ? String(i).replace(/\d/g, (d) => "۰۱۲۳۴۵۶۷۸۹"[+d]) : String(i));
  return <Context.Provider value={{ lang, c: dict[lang], toggle, num }}>{children}</Context.Provider>;
}
export const useSite = () => useContext(Context);
