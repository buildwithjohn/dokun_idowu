import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import TeachingsSection from "@/components/sections/TeachingsSection";

export const metadata = {
  title: "PDee Speaks — Teachings & Conferences | Rev. Dokun Idowu",
  description: "Watch teachings, conference messages, and ministry sessions by Rev. Dokun Idowu — anointed, practical, and grounded in the Word.",
};

async function fetchSermons() {
  try {
    const { safeFetch, sermonsQuery } = await import("@/lib/sanity");
    return await safeFetch(sermonsQuery, []);
  } catch { return []; }
}

export default async function TeachingsPage() {
  const sermons = await fetchSermons();
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">
        {/* Page hero */}
        <div className="bg-espresso pt-36 pb-20 px-6 lg:px-12">
          <div className="max-w-7xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              The Word
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              PDee <span className="text-amber italic">Speaks</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 text-lg font-sans leading-relaxed max-w-xl">
              Conferences, church engagements, and ministry sessions by Rev. Dokun Idowu — filtered by category, ready to watch.
            </p>
          </div>
        </div>

        {/* Full teachings section — no top padding since page hero handles it */}
        <div className="-mt-8">
          <TeachingsSection sermons={sermons} />
        </div>
      </main>
      <Footer />
    </>
  );
}
