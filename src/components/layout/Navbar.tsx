"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_ITEMS = [
  { label: "Home",       href: "/" },
  { label: "About",      href: "/about" },
  { label: "Teachings",  href: "/teachings" },
  { label: "Mentorship", href: "/mentorship" },
  { label: "Family",     href: "/family" },
  { label: "Events",     href: "/events" },
  { label: "Give",       href: "/give" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <>
      <nav className="fixed inset-x-0 top-0 z-50 flex items-center justify-between px-6 lg:px-12 bg-mahogany/97 backdrop-blur-md shadow-[0_1px_0_rgba(200,168,75,0.15)] py-4 transition-all duration-300">
        {/* PDee Logo */}
        <Link href="/" className="flex flex-col items-start text-left">
          <div style={{ display:"flex", alignItems:"baseline", gap:"1px", lineHeight:1 }}>
            <span style={{ fontFamily:"var(--font-display)", fontSize:"1.9rem", fontWeight:900, fontStyle:"italic", color:"#C8A84B", letterSpacing:"-0.02em" }}>P</span>
            <span style={{ fontFamily:"var(--font-display)", fontSize:"1.9rem", fontWeight:900, fontStyle:"italic", color:"#F5EFE0", letterSpacing:"-0.02em" }}>Dee</span>
            <span style={{ width:5, height:5, borderRadius:"50%", background:"#C8A84B", display:"inline-block", marginLeft:3, marginBottom:5 }} />
          </div>
          <span className="text-[9px] tracking-[0.22em] uppercase text-amber/60 font-sans font-light" style={{ marginTop:1 }}>Rev. Dokun Idowu</span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden lg:flex items-center gap-7">
          {NAV_ITEMS.map((item) => {
            const active = isActive(item.href);
            return (
              <li key={item.label}>
                <Link href={item.href} className={`text-[11px] tracking-[0.12em] uppercase font-sans font-semibold transition-colors duration-200 relative pb-1 ${active ? "text-amber" : "text-parchment/65 hover:text-parchment"}`}>
                  {item.label}
                  {active && <span className="absolute bottom-0 left-0 w-full h-px bg-amber" />}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Right */}
        <div className="flex items-center gap-4">
          <div className="hidden lg:flex items-center gap-3 mr-1">
            <a href="https://instagram.com/dokun_idowu" target="_blank" rel="noopener noreferrer" className="text-parchment/40 hover:text-amber transition-colors" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.facebook.com/iamdokunidowu" target="_blank" rel="noopener noreferrer" className="text-parchment/40 hover:text-amber transition-colors" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://x.com/DokunIdowu" target="_blank" rel="noopener noreferrer" className="text-parchment/40 hover:text-amber transition-colors" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
            <a href="https://youtube.com/@RhemaNigeria" target="_blank" rel="noopener noreferrer" className="text-parchment/40 hover:text-red-500 transition-colors" aria-label="YouTube">
              <svg width="17" height="12" viewBox="0 0 24 17"><path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="#FF0000"/><path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/></svg>
            </a>
          </div>
          <Link href="/contact" className="hidden lg:inline-flex btn-primary text-xs py-3 px-6">Connect →</Link>
          <button onClick={() => setMenuOpen(true)} className="lg:hidden flex flex-col gap-1.5 p-2" aria-label="Open menu">
            <span className="block w-6 h-px bg-parchment" /><span className="block w-4 h-px bg-parchment/60" /><span className="block w-6 h-px bg-parchment" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-[60] bg-mahogany flex flex-col items-center justify-center gap-7 px-6">
          <button onClick={() => setMenuOpen(false)} className="absolute top-6 right-6 text-parchment/60 text-3xl hover:text-parchment">×</button>
          <div style={{ display:"flex", alignItems:"baseline", gap:"1px", marginBottom:8 }}>
            <span style={{ fontFamily:"var(--font-display)", fontSize:"2.5rem", fontWeight:900, fontStyle:"italic", color:"#C8A84B" }}>P</span>
            <span style={{ fontFamily:"var(--font-display)", fontSize:"2.5rem", fontWeight:900, fontStyle:"italic", color:"#F5EFE0" }}>Dee</span>
            <span style={{ width:6, height:6, borderRadius:"50%", background:"#C8A84B", display:"inline-block", marginLeft:3, marginBottom:6 }} />
          </div>
          {NAV_ITEMS.map((item) => (
            <Link key={item.label} href={item.href} className={`text-2xl font-display italic transition-colors ${isActive(item.href) ? "text-amber" : "text-parchment/75 hover:text-amber"}`} style={{ fontFamily:"var(--font-display)" }}>
              {item.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-2">Connect →</Link>
          <div className="flex gap-6 mt-2">
            {[{href:"https://instagram.com/dokun_idowu",l:"IG"},{href:"https://www.facebook.com/iamdokunidowu",l:"FB"},{href:"https://x.com/DokunIdowu",l:"X"}].map(s => (
              <a key={s.l} href={s.href} target="_blank" rel="noopener noreferrer" className="text-[10px] tracking-widest uppercase text-parchment/30 hover:text-amber font-sans">{s.l}</a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
