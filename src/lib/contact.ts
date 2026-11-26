/** Integration point for the contact form. Set NEXT_PUBLIC_CONTACT_ENDPOINT to a URL that accepts a JSON POST
 *  (Formspree, a serverless function, your own API...). Without it the form validates but says it is not connected. */
export class NotConfigured extends Error {}
export type Message = { name: string; email: string; subject: string; message: string };
export async function sendMessage(m: Message) {
  const url = process.env.NEXT_PUBLIC_CONTACT_ENDPOINT;
  if (!url) throw new NotConfigured();
  const r = await fetch(url, { method: "POST", headers: { "Content-Type": "application/json" }, body: JSON.stringify(m) });
  if (!r.ok) throw new Error(String(r.status));
}
