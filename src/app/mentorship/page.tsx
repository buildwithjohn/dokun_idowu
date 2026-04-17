import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import MentorshipSection from "@/components/sections/MentorshipSection";
import Link from "next/link";

export const metadata = {
  title: "Mentorship Platform — Rev. Dokun Idowu",
  description: "Join Rev. Dokun Idowu's mentorship platform — structured, Spirit-led growth for believers, ministers, and marketplace leaders.",
};

export default function MentorshipPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">
        {/* Page hero */}
        <div className="bg-mahogany pt-36 pb-20 px-6 lg:px-12 grain-overlay">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              PDee · Platform
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Mentorship &amp;<br />
              <span className="text-amber italic">Discipleship</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 text-lg font-sans leading-relaxed max-w-xl">
              A structured platform for the next generation of believers, ministers, and Kingdom leaders — guided by Rev. Dokun Idowu.
            </p>
          </div>
        </div>

        {/* Full mentorship section */}
        <MentorshipSection />

        {/* Who it is for */}
        <section className="bg-white py-20 lg:py-24">
          <div className="max-w-5xl mx-auto px-6 lg:px-12">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              Who Is This For?
            </p>
            <h2 className="text-3xl lg:text-4xl font-bold text-espresso mb-12" style={{ fontFamily: "var(--font-display)" }}>
              A Place for <span className="text-ember italic">Every Season</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  title: "Young Believers",
                  desc: "Finding your footing in faith. Building on the Word. Understanding who you are in Christ.",
                  icon: "✦",
                },
                {
                  title: "Ministers in Training",
                  desc: "Developing your gifts, understanding your calling, and learning to walk in spiritual authority.",
                  icon: "✦",
                },
                {
                  title: "Marketplace Leaders",
                  desc: "Aligning your career, business, and influence with Kingdom principles and God's purpose for your life.",
                  icon: "✦",
                },
              ].map((c, i) => (
                <div key={i} className="p-8 border border-sand/40 hover:border-amber/40 transition-colors group">
                  <span className="text-2xl text-amber block mb-5">{c.icon}</span>
                  <h3 className="font-bold text-espresso text-xl mb-3" style={{ fontFamily: "var(--font-display)" }}>{c.title}</h3>
                  <p className="text-umber/70 font-sans text-base leading-relaxed">{c.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Apply CTA */}
        <section className="bg-espresso py-16">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <span className="text-amber text-2xl block mb-5">✦</span>
            <h3 className="text-2xl lg:text-3xl font-bold text-parchment mb-4" style={{ fontFamily: "var(--font-display)" }}>
              Apply for Mentorship
            </h3>
            <p className="text-parchment/50 font-sans mb-8 max-w-md mx-auto leading-relaxed">
              Cohort 2 applications are currently being reviewed. Submit your request through the contact form.
            </p>
            <Link href="/contact" className="inline-flex items-center justify-center btn-primary">
              Apply Now →
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
