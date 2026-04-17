import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import ContactSection from "@/components/sections/ContactSection";

export const metadata = {
  title: "Contact — Rev. Dokun Idowu",
  description: "Connect with Rev. Dokun Idowu for speaking engagements, mentorship enquiries, ministry partnerships, or general correspondence.",
};

export default function ContactPage() {
  return (
    <>
      <Navbar />
      <main className="bg-smoke min-h-screen">
        <div className="bg-espresso pt-36 pb-16 px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <p className="text-[11px] tracking-[0.25em] uppercase text-amber font-sans font-semibold mb-4 flex items-center gap-3">
              <span className="w-7 h-px bg-amber" />
              PDee · Connect
            </p>
            <h1 className="text-4xl lg:text-6xl font-bold text-parchment leading-tight mb-5" style={{ fontFamily: "var(--font-display)" }}>
              Get in<br />
              <span className="text-amber italic">Touch</span>
            </h1>
            <div className="w-12 h-0.5 bg-amber mb-6" />
            <p className="text-parchment/55 text-lg font-sans leading-relaxed max-w-xl">
              For speaking engagements, mentorship enquiries, ministry partnerships, or general correspondence.
            </p>
          </div>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
