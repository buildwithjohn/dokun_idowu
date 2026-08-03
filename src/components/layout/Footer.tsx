// src/components/layout/Footer.tsx
"use client";


const QUICK = [
  { label: "Home",        href: "/" },
  { label: "About",       href: "/about" },
  { label: "Teachings",   href: "/teachings" },
  { label: "Mentorship",  href: "/mentorship" },
  { label: "Family",      href: "/family" },
  { label: "Events",      href: "/events" },
  { label: "Itinerary",   href: "/itinerary" },
  { label: "Give",        href: "/give" },
  { label: "Contact",     href: "/contact" },
];
const MINISTRY = [
  { label: "Rhema Nigeria",          href: "https://rhemanigeria.com" },
  { label: "Kenneth Hagin Ministries", href: "https://www.rhema.org" },
  { label: "Rhema Bible Training",   href: "https://rhema.org" },
];

const scrollTo = (id: string) =>
  document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });

export default function Footer() {
  return (
    <footer className="bg-mahogany text-parchment/50 border-t border-amber/10">
      {/* Top strip */}
      <div className="section-wrap py-20">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 lg:gap-20">
          {/* Brand */}
          <div className="md:col-span-1">
            {/* PDee logo — matches navbar */}
            <div style={{ display: "flex", alignItems: "baseline", gap: "1px", lineHeight: 1, marginBottom: 4 }}>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900, fontStyle: "italic", color: "#C8A84B", letterSpacing: "-0.02em" }}>P</span>
              <span style={{ fontFamily: "var(--font-display)", fontSize: "2rem", fontWeight: 900, fontStyle: "italic", color: "#F5EFE0", letterSpacing: "-0.02em" }}>Dee</span>
              <span style={{ width: 5, height: 5, borderRadius: "50%", background: "#C8A84B", display: "inline-block", marginLeft: 3, marginBottom: 5 }} />
            </div>
            <p className="text-[9px] tracking-[0.22em] uppercase text-amber/60 font-sans font-light mb-6">
              Rev. Dokun Idowu
            </p>
            <p className="text-sm leading-relaxed font-sans font-light max-w-xs">
              An anointed Bible teacher, gifted pioneer, graced by God for the gifts of the Spirit and the move of the Holy Ghost.
            </p>
            {/* Social icons row */}
            <div className="flex items-center gap-4 mt-8">
              {/* Instagram */}
              <a href="https://www.instagram.com/dokun_idowu/" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="Instagram">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                  <circle cx="12" cy="12" r="4"/>
                  <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
                </svg>
              </a>
              {/* Facebook */}
              <a href="https://www.facebook.com/iamdokunidowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="Facebook">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/>
                </svg>
              </a>
              {/* X / Twitter */}
              <a href="https://x.com/DokunIdowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="X">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                </svg>
              </a>
              {/* YouTube */}
              <a href="https://www.youtube.com/@dokunidowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-red-500 transition-colors" aria-label="YouTube">
                <svg width="20" height="14" viewBox="0 0 24 17" xmlns="http://www.w3.org/2000/svg">
                  <path d="M23.495 2.656a3.016 3.016 0 0 0-2.122-2.136C19.505 0 12 0 12 0S4.495 0 2.627.52A3.016 3.016 0 0 0 .505 2.656C0 4.537 0 8.455 0 8.455s0 3.918.505 5.799a3.016 3.016 0 0 0 2.122 2.136C4.495 17 12 17 12 17s7.505 0 9.373-.51a3.016 3.016 0 0 0 2.122-2.136C24 12.373 24 8.455 24 8.455s0-3.918-.505-5.799z" fill="currentColor"/>
                  <path d="M9.545 12.023V4.886l6.273 3.569-6.273 3.568z" fill="white"/>
                </svg>
              </a>
              {/* TikTok */}
              <a href="https://www.tiktok.com/@pdee_dokunidowu" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="TikTok">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M16.5 0h-3.2v13.8a2.8 2.8 0 1 1-2.8-2.8c.2 0 .4 0 .6.05V7.8a6 6 0 1 0 5.4 6V6.4a7.3 7.3 0 0 0 4.1 1.3V4.4a4.1 4.1 0 0 1-2.9-1.2A4.1 4.1 0 0 1 16.5 0z"/>
                </svg>
              </a>
              {/* LinkedIn */}
              <a href="https://www.linkedin.com/in/dokun-idowu-84b8b41b4/" target="_blank" rel="noopener noreferrer"
                className="text-parchment/40 hover:text-amber transition-colors" aria-label="LinkedIn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.14 1.45-2.14 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.64-1.85 3.37-1.85 3.6 0 4.27 2.37 4.27 5.46v6.28zM5.34 7.43a2.06 2.06 0 1 1 0-4.13 2.06 2.06 0 0 1 0 4.13zM7.12 20.45H3.56V9h3.56v11.45zM22.22 0H1.77C.79 0 0 .77 0 1.72v20.56C0 23.23.79 24 1.77 24h20.45c.98 0 1.78-.77 1.78-1.72V1.72C24 .77 23.2 0 22.22 0z"/>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h6 className="text-[10px] tracking-[0.2em] uppercase text-amber mb-6 font-sans font-medium">
              Navigate
            </h6>
            <ul className="space-y-3">
              {QUICK.map((item) => (
                <li key={item.label}>
                  <a
                    href={item.href}
                    className="text-sm text-parchment/75 hover:text-parchment transition-colors font-sans"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Ministry */}
          <div>
            <h6 className="text-[10px] tracking-[0.2em] uppercase text-amber mb-6 font-sans font-medium">
              Ministry
            </h6>
            <ul className="space-y-3">
              {MINISTRY.map((m) => (
                <li key={m.label}>
                  <a
                    href={m.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-parchment/75 hover:text-parchment transition-colors font-sans"
                  >
                    {m.label} ↗
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-amber/10 py-6">
        <div className="section-wrap flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-parchment/50 font-sans">
          <span>© {new Date().getFullYear()} Rev. Dokun Idowu. All rights reserved.</span>
          <span>Designed with purpose. Built for the Kingdom.</span>
        </div>
      </div>
    </footer>
  );
}
