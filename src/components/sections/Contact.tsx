"use client";
import { useState, type FormEvent } from "react";
import { z } from "zod";
import type { Content } from "@/data/content.en";
import { NotConfigured, sendMessage } from "@/lib/contact";

type Status = "idle" | "sending" | "sent" | "failed" | "unconfigured";
export function Contact({ c }: { c: Content }) {
  const k = c.contact, f = k.form;
  const [err, setErr] = useState<Record<string, string>>({});
  const [st, setSt] = useState<Status>("idle");
  const schema = z.object({
    name: z.string().trim().min(1, f.errors.name), email: z.string().trim().email(f.errors.email),
    subject: z.string().trim().min(1, f.errors.subject), message: z.string().trim().min(10, f.errors.message),
  });
  async function submit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget, data = Object.fromEntries(new FormData(form));
    if (data.website) return; // honeypot: real visitors never fill this hidden field
    const r = schema.safeParse(data);
    if (!r.success) { const m: Record<string, string> = {}; r.error.issues.forEach((i) => { m[String(i.path[0])] ??= i.message; }); setErr(m); setSt("idle"); return; }
    setErr({}); setSt("sending");
    try { await sendMessage(r.data); setSt("sent"); form.reset(); } catch (x) { setSt(x instanceof NotConfigured ? "unconfigured" : "failed"); }
  }
  const field = (id: "name" | "email" | "subject" | "message") => ({
    id, name: id, placeholder: f.ph[id], "aria-invalid": err[id] ? true : undefined, "aria-describedby": err[id] ? `${id}-e` : undefined,
  });
  const E = ({ id }: { id: string }) => (err[id] ? <small className="er" id={`${id}-e`} role="alert">{err[id]}</small> : null);
  return (
    <section id="contact" className="ct"><div className="w cg">
      <div><h2>{k.title}</h2><p className="lead">{k.lead}</p>
        <div className="cl">{k.links.map((x) => <div key={x.l}><span>{x.l}</span><b>{x.v}</b></div>)}</div></div>
      <form className="fm" noValidate onSubmit={submit}>
        <label htmlFor="name">{f.name}<input {...field("name")} autoComplete="name" /><E id="name" /></label>
        <label htmlFor="email">{f.email}<input {...field("email")} type="email" autoComplete="email" dir="ltr" /><E id="email" /></label>
        <label htmlFor="subject">{f.subject}<input {...field("subject")} /><E id="subject" /></label>
        <label htmlFor="message">{f.message}<textarea {...field("message")} /><E id="message" /></label>
        <input className="hp" name="website" tabIndex={-1} autoComplete="off" aria-hidden />
        <button className="btn n" type="submit" disabled={st === "sending"}>{st === "sending" ? f.status.sending : f.send}</button>
        {(st === "sent" || st === "failed" || st === "unconfigured") && <p className={`ok${st === "sent" ? "" : " bad"}`} role="status">{f.status[st]}</p>}
      </form>
    </div></section>
  );
}
