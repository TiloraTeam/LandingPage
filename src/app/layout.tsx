import type { Metadata, Viewport } from "next";
import "@fontsource/space-grotesk/400.css";
import "@fontsource/space-grotesk/500.css";
import "@fontsource/space-grotesk/600.css";
import "@fontsource/space-grotesk/700.css";
import "@fontsource/vazirmatn/400.css";
import "@fontsource/vazirmatn/500.css";
import "@fontsource/vazirmatn/700.css";
import "./globals.css";
import { site } from "@/config/site";
import { LangProvider } from "@/components/LangProvider";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: `${site.name} — ${site.tagline}`, template: `%s | ${site.name}` },
  description: site.description,
  alternates: { canonical: "/" },
  openGraph: { title: `${site.name} — ${site.tagline}`, description: site.description, url: site.url, siteName: site.name, type: "website" },
};
export const viewport: Viewport = { themeColor: "#1E2B4F" };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (<html lang="en" dir="ltr"><body><LangProvider>{children}</LangProvider></body></html>);
}
