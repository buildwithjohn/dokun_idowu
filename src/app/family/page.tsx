import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import FamilySection from "@/components/sections/FamilySection";
import Image from "next/image";

export const metadata = {
  title: "Family — Rev. Dokun Idowu",
  description: "Meet the Idowu family — Rev. Dokun, Mrs. Tobore, and their three amazing children. A home built on grace, love, and Kingdom purpose.",
};

async function fetchPhotos() {
  try {
    const { safeFetch, familyQuery } = await import("@/lib/sanity");
    return await safeFetch(familyQuery, []);
  } catch { return []; }
}

export default async function FamilyPage() {
  const photos = await fetchPhotos();
  return (
    <>
      <Navbar />
      <main className="bg-linen min-h-screen">
        {/* Page hero */}
        <div className="bg-espresso pt-36 pb-20 px-6 lg:px-12 relative overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <Image src="/images/ministry-couple.jpg" alt="" fill className="object-cover" />
          </div>
          <div className="absolute inset-0" style={{ background: "linear-gradient(to bottom, rgba(61,43,31,0.9), rgba(61,43,31,0.97))" }} />
          <div className="relative z-10 max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              Heart &amp; Home
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              The Idowu<br />
              <span className="text-amber italic">Family</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 text-lg font-sans leading-relaxed max-w-xl">
              Behind every ministry is a home. Rev. Dokun is married to Mrs. Tobore Idowu, and they are blessed with three amazing children.
            </p>
          </div>
        </div>

        {/* Photo gallery */}
        <FamilySection photos={photos} />

        {/* Ministry couple section */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {[
                { src: "/images/ministry-couple.jpg",    caption: "Rev. & Mrs. Idowu",       sub: "Together in the Word" },
                { src: "/images/ministry-graduation.jpg", caption: "Rhema Graduation",        sub: "Raising Kingdom ministers" },
              ].map((photo, i) => (
                <div key={i} className="relative group overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image src={photo.src} alt={photo.caption} fill className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0" style={{ background: "linear-gradient(to top, rgba(42,27,18,0.8), transparent)" }} />
                  <div className="absolute bottom-0 inset-x-0 p-5">
                    <p className="text-parchment font-bold text-lg" style={{ fontFamily: "var(--font-display)" }}>{photo.caption}</p>
                    <p className="text-amber/70 text-[10px] font-sans tracking-widest uppercase mt-1">{photo.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
