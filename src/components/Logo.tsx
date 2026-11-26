/** Official Tilora mark. Geometry is copied unchanged from the brand archive; colours come from colors.css. */
type Variant = "" | "dk" | "yl";
export function Mark({ variant = "", label = false }: { variant?: Variant; label?: boolean }) {
  return (
    <svg className={`mark ${variant}`} viewBox="0 0 188 188" role={label ? "img" : undefined} aria-label={label ? "Tilora mark" : undefined} aria-hidden={label ? undefined : true}>
      <rect width="56" height="56" rx="14" fill="var(--b)" /><rect x="66" width="56" height="56" rx="14" fill="var(--b)" />
      <rect x="132" width="56" height="56" rx="14" fill="var(--b)" /><rect x="66" y="66" width="56" height="56" rx="14" fill="var(--b)" />
      <rect x="66" y="132" width="56" height="56" rx="28" fill="var(--c)" />
    </svg>
  );
}
export function Logo({ variant = "", href = "#home" }: { variant?: Variant; href?: string }) {
  return <a className="logo" href={href} aria-label="Tilora home"><Mark variant={variant} /><span>tilora</span></a>;
}
