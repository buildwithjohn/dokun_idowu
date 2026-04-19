import Image from "next/image";
import Link from "next/link";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export const metadata = {
  title: "Family — Rev. Dokun Idowu (PDee)",
  description: "Meet the Idowu family — Rev. Dokun, Mrs. Tobore, and their three amazing children. A home built on grace, love, and Kingdom purpose.",
};

async function fetchPhotos() {
  try {
    const { safeFetch, familyQuery } = await import("@/lib/sanity");
    return await safeFetch(familyQuery, []);
  } catch { return []; }
}

export default async function FamilyPage() {
  return (
    <>
      <Navbar />
      <main>

        {/* ── HERO — full viewport split ──────────────────────────────── */}
        <section className="relative min-h-screen flex flex-col lg:flex-row overflow-hidden">

          {/* Left — PDee portrait */}
          <div className="relative lg:w-[55%] min-h-[60vh] lg:min-h-screen order-2 lg:order-1">
            <Image
              src="/images/pic6.jpeg"
              alt="Rev. Dokun Idowu"
              fill
              className="object-cover object-top"
              priority
            />
            {/* Right fade */}
            <div className="absolute inset-0 hidden lg:block"
              style={{ background: "linear-gradient(to left, #2A1B12 0%, transparent 40%)" }} />
            {/* Bottom fade */}
            <div className="absolute inset-0 lg:hidden"
              style={{ background: "linear-gradient(to top, #2A1B12 20%, transparent 60%)" }} />
          </div>

          {/* Right — dark text panel */}
          <div className="relative z-10 bg-mahogany flex flex-col justify-center px-8 lg:px-16 xl:px-20 pt-10 pb-16 lg:pt-0 lg:pb-0 lg:w-[45%] order-1 lg:order-2">
            <div className="absolute inset-0 grain-overlay pointer-events-none" />
            <div className="relative z-10 lg:pt-24">
              <p className="text-[11px] tracking-[0.3em] uppercase text-amber font-sans font-semibold mb-6 flex items-center gap-3">
                <span className="w-8 h-px bg-amber" />
                Heart &amp; Home
              </p>
              <h1
                className="font-bold text-parchment leading-[1.0] mb-8"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(3rem, 5.5vw, 5rem)" }}
              >
                The<br />
                <em className="text-amber not-italic">Idowu</em><br />
                Family
              </h1>
              <div className="w-14 h-0.5 bg-amber mb-8" />
              <p className="text-parchment/60 font-sans text-base leading-relaxed max-w-sm mb-10">
                Behind every ministry is a home. Rev. Dokun Idowu is married to <strong className="text-parchment/80 font-semibold">Mrs. Tobore Idowu</strong>, and they are blessed with three amazing children — a family rooted in grace, laughter, and Kingdom purpose.
              </p>
              {/* Stats */}
              <div className="flex gap-10 mb-12">
                {[
                  { num: "1", label: "Beloved Wife" },
                  { num: "3", label: "Children" },
                  { num: "25+", label: "Years Together" },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-amber" style={{ fontFamily: "var(--font-display)" }}>{s.num}</p>
                    <p className="text-[9px] tracking-widest uppercase text-parchment/35 font-sans mt-1">{s.label}</p>
                  </div>
                ))}
              </div>
              <Link href="#gallery" className="inline-flex items-center gap-3 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                View Gallery ↓
              </Link>
            </div>
          </div>
        </section>

        {/* ── MRS. TOBORE FEATURE ─────────────────────────────────────── */}
        <section className="bg-parchment overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[600px]">

            {/* Text side */}
            <div className="flex flex-col justify-center px-8 lg:px-16 xl:px-24 py-20">
              <p className="text-[11px] tracking-[0.28em] uppercase text-amber font-sans font-semibold mb-5 flex items-center gap-3">
                <span className="w-7 h-px bg-amber" />
                Partner in Ministry
              </p>
              <h2
                className="font-bold text-espresso leading-tight mb-6"
                style={{ fontFamily: "var(--font-display)", fontSize: "clamp(2.2rem, 4vw, 3.5rem)" }}
              >
                Mrs. Tobore<br />
                <span className="text-ember italic">Idowu</span>
              </h2>
              <div className="w-10 h-0.5 bg-amber mb-8" />
              <p className="text-umber font-sans text-base leading-relaxed mb-5">
                Mrs. Tobore Idowu is more than a pastor&apos;s wife — she is a woman of deep faith, quiet strength, and gracious purpose. She stands beside Rev. Dokun Idowu not merely in title, but in spirit, prayer, and conviction.
              </p>
              <p className="text-umber/70 font-sans text-base leading-relaxed mb-10">
                Her life is a testimony of what God does with a woman fully surrendered to His will. Warm, brilliant, and deeply devoted — Tobore is the heartbeat of the Idowu home.
              </p>
              <blockquote className="border-l-2 border-amber pl-5">
                <p className="font-serif italic text-umber/60 text-base leading-relaxed" style={{ fontFamily: "var(--font-serif)" }}>
                  &ldquo;He who finds a wife finds a good thing, and obtains favour from the LORD.&rdquo;
                </p>
                <cite className="text-[10px] tracking-widest uppercase text-amber font-sans font-semibold not-italic mt-2 block">Proverbs 18:22</cite>
              </blockquote>
            </div>

            {/* Photo — mrstobore.jpg */}
            <div className="relative min-h-[500px] lg:min-h-full">
              <Image
                src="/images/mrstobore.jpg"
                alt="Mrs. Tobore Idowu"
                fill
                className="object-cover object-top"
              />
              {/* Left edge gradient */}
              <div className="absolute inset-0 hidden lg:block"
                style={{ background: "linear-gradient(to right, #F5EFE0 0%, transparent 25%)" }} />
              {/* Caption */}
              <div className="absolute bottom-6 left-6 right-6">
                <div className="inline-flex items-center gap-3 bg-mahogany/80 backdrop-blur-sm px-5 py-3">
                  <div className="w-1 h-8 bg-amber flex-shrink-0" />
                  <div>
                    <p className="text-parchment font-semibold text-sm" style={{ fontFamily: "var(--font-display)" }}>Mrs. Tobore Idowu</p>
                    <p className="text-amber/60 text-[9px] tracking-widest uppercase font-sans">Partner in Ministry</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── GALLERY ─────────────────────────────────────────────────── */}
        <section id="gallery" className="bg-smoke py-24 lg:py-32">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">

            {/* Header */}
            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
              <div>
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
                  <span className="w-7 h-px bg-amber" />
                  Moments
                </p>
                <h2 className="text-3xl lg:text-4xl font-bold text-espresso" style={{ fontFamily: "var(--font-display)" }}>
                  Life in <span className="text-ember italic">Frames</span>
                </h2>
              </div>
              <p className="text-umber/50 font-sans text-sm max-w-xs leading-relaxed">
                Candid moments from ministry, life, and everything in between. More photos added as they come.
              </p>
            </div>

            {/* Asymmetric editorial grid */}
            <div className="grid grid-cols-12 gap-3 lg:gap-4">

              {/* Row 1 */}
              {/* Large — couple laughing (spans 5 cols, 2 rows) */}
              <div className="col-span-12 lg:col-span-5 row-span-2 relative overflow-hidden group" style={{ minHeight: 480 }}>
                <Image src="/images/ministry-couple.jpg" alt="Rev. & Mrs. Idowu" fill className="object-cover object-[center_20%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.85) 0%, rgba(42,27,18,0.1) 50%, transparent)" }} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-0 inset-x-0 p-6">
                  <p className="text-parchment font-bold text-xl leading-snug mb-1" style={{ fontFamily: "var(--font-display)" }}>Rev. &amp; Mrs. Idowu</p>
                  <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">Together in the Word</p>
                </div>
                <div className="absolute top-4 left-4 w-5 h-5 border-t border-l border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className="absolute bottom-4 right-4 w-5 h-5 border-b border-r border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* pic5 — thoughtful (spans 7 cols) */}
              <div className="col-span-12 lg:col-span-7 relative overflow-hidden group" style={{ minHeight: 280 }}>
                <Image src="/images/pic5.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75) 0%, transparent 55%)" }} />
                <div className="absolute bottom-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute bottom-5 inset-x-6 flex items-end justify-between">
                  <div>
                    <p className="text-parchment font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                    <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">Thoughtful · Purposeful</p>
                  </div>
                  <span className="text-amber/40 text-2xl">✦</span>
                </div>
              </div>

              {/* pic2 — casual (spans 7 cols) */}
              <div className="col-span-12 lg:col-span-7 relative overflow-hidden group" style={{ minHeight: 280 }}>
                <Image src="/images/pic2.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-[center_25%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-5 inset-x-6">
                  <p className="text-parchment font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">Relaxed · Approachable</p>
                </div>
              </div>

              {/* Row 3 */}
              {/* pic3 — joy (spans 4 cols, 2 rows) */}
              <div className="col-span-12 lg:col-span-4 row-span-2 relative overflow-hidden group" style={{ minHeight: 460 }}>
                <Image src="/images/pic3.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-[center_30%] transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.85) 0%, rgba(42,27,18,0.1) 55%, transparent)" }} />
                <div className="absolute top-0 left-0 right-0 h-0.5 bg-ember scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left" />
                <div className="absolute bottom-5 inset-x-5">
                  <p className="text-parchment font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">Joy in Ministry</p>
                </div>
                <div className="absolute top-4 right-4 w-5 h-5 border-t border-r border-amber/40 opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>

              {/* pic6 — glasses seated (spans 8 cols) */}
              <div className="col-span-12 lg:col-span-8 relative overflow-hidden group" style={{ minHeight: 300 }}>
                <Image src="/images/pic6.jpeg" alt="Rev. Dokun Idowu" fill className="object-cover object-top transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.75) 0%, transparent 50%)" }} />
                <div className="absolute bottom-0 inset-x-0 h-0.5 bg-amber scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-right" />
                <div className="absolute bottom-5 inset-x-6">
                  <p className="text-parchment font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>Rev. Dokun Idowu</p>
                  <p className="text-amber/60 text-[10px] font-sans tracking-widest uppercase">Composed · Grounded</p>
                </div>
              </div>

              {/* placeholder — more coming */}
              <div className="col-span-12 lg:col-span-8 relative overflow-hidden border border-dashed border-amber/20" style={{ minHeight: 160 }}>
                <div className="absolute inset-0 flex flex-col items-center justify-center gap-3"
                  style={{ background: "linear-gradient(135deg, rgba(200,168,75,0.03), rgba(42,27,18,0.04))" }}>
                  <div className="absolute inset-0 opacity-5"
                    style={{ backgroundImage: "linear-gradient(rgba(200,168,75,0.5) 1px,transparent 1px),linear-gradient(90deg,rgba(200,168,75,0.5) 1px,transparent 1px)", backgroundSize: "28px 28px" }} />
                  <span className="text-amber/25 text-3xl relative z-10">✦</span>
                  <p className="text-[10px] font-sans tracking-[0.2em] uppercase text-umber/30 relative z-10">More photos coming soon</p>
                  <p className="text-[9px] font-sans tracking-widest uppercase text-amber/20 relative z-10">Family · Ministry · Life</p>
                </div>
              </div>

            </div>
          </div>
        </section>

        {/* ── QUOTE STRIP ─────────────────────────────────────────────── */}
        <section className="relative overflow-hidden py-28">
          <Image src="/images/ministry-couple.jpg" alt="" fill className="object-cover object-[center_20%]" />
          <div className="absolute inset-0" style={{ background: "rgba(42,27,18,0.90)" }} />
          <div className="relative z-10 max-w-3xl mx-auto px-6 lg:px-12 text-center">
            <div className="flex items-center gap-4 justify-center mb-8">
              <div className="w-16 h-px bg-amber/40" />
              <span className="text-amber text-2xl">✦</span>
              <div className="w-16 h-px bg-amber/40" />
            </div>
            <blockquote className="font-serif italic text-2xl lg:text-3xl text-parchment leading-relaxed mb-8" style={{ fontFamily: "var(--font-serif)" }}>
              &ldquo;He is married to Mrs. Tobore Idowu &amp; they are blessed with three amazing children.&rdquo;
            </blockquote>
            <div className="flex items-center gap-4 justify-center">
              <div className="w-16 h-px bg-amber/40" />
              <span className="text-[10px] tracking-[0.25em] uppercase text-amber font-sans font-semibold">The Idowu Family</span>
              <div className="w-16 h-px bg-amber/40" />
            </div>
          </div>
        </section>

        {/* ── CONNECT CTA ─────────────────────────────────────────────── */}
        <section className="bg-parchment py-20 lg:py-24">
          <div className="max-w-7xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 overflow-hidden">

              {/* Text */}
              <div className="bg-espresso px-10 lg:px-16 py-16 flex flex-col justify-center">
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4">Connect</p>
                <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-5" style={{ fontFamily: "var(--font-display)" }}>
                  Partner with the<br />
                  <span className="text-amber italic">Idowu Ministry</span>
                </h3>
                <p className="text-parchment/50 font-sans text-base leading-relaxed mb-10 max-w-sm">
                  For speaking engagements, ministry partnerships, mentorship enquiries, or simply to reach out.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link href="/contact" className="inline-flex items-center gap-2 bg-amber text-mahogany font-sans font-bold text-sm tracking-widest uppercase px-8 py-4 hover:bg-gold-light transition-colors">
                    Get in Touch →
                  </Link>
                  <Link href="/give" className="inline-flex items-center gap-2 border border-parchment/20 text-parchment font-sans font-semibold text-sm tracking-widest uppercase px-8 py-4 hover:border-amber hover:text-amber transition-colors">
                    Give &amp; Partner
                  </Link>
                </div>
              </div>

              {/* Socials card */}
              <div className="bg-mahogany px-10 lg:px-16 py-16 flex flex-col justify-center">
                <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-8">Follow the journey</p>
                <div className="flex flex-col gap-5">
                  {[
                    { icon: "IG", label: "@dokun_idowu", href: "https://instagram.com/dokun_idowu", sub: "Instagram" },
                    { icon: "FB", label: "iamdokunidowu", href: "https://www.facebook.com/iamdokunidowu", sub: "Facebook" },
                    { icon: "X",  label: "@DokunIdowu",   href: "https://x.com/DokunIdowu",             sub: "Twitter / X" },
                  ].map((s) => (
                    <a key={s.label} href={s.href} target="_blank" rel="noopener noreferrer"
                      className="flex items-center gap-4 group">
                      <div className="w-10 h-10 border border-amber/20 flex items-center justify-center text-[10px] font-sans font-bold text-amber/50 group-hover:bg-amber group-hover:text-mahogany group-hover:border-amber transition-all">
                        {s.icon}
                      </div>
                      <div>
                        <p className="text-parchment/70 font-sans text-sm font-semibold group-hover:text-parchment transition-colors">{s.label}</p>
                        <p className="text-parchment/25 text-[10px] font-sans tracking-widest uppercase">{s.sub}</p>
                      </div>
                      <span className="ml-auto text-parchment/20 group-hover:text-amber transition-colors">→</span>
                    </a>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </section>

      </main>
      <Footer />
    </>
  );
}
