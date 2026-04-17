import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import PraySection from "@/components/sections/PraySection";

export const metadata = {
  title: "Pray With PDee — Rev. Dokun Idowu",
  description: "Submit your prayer request and receive a Word from Scripture to stand on.",
};

export default function PrayPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">
        <div className="bg-mahogany pt-36 pb-16 px-6 lg:px-12 grain-overlay">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              PDee · Prayer
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Pray With<br />
              <span className="text-amber italic">Rev. Idowu</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 text-lg font-sans leading-relaxed max-w-xl">
              Share your request. Receive a Word from God&apos;s Word to stand on.
            </p>
          </div>
        </div>
        <PraySection />
      </main>
      <Footer />
    </>
  );
}
