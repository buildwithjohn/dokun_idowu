import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import QuoteStrip from "@/components/sections/QuoteStrip";
import TeachingsSection from "@/components/sections/TeachingsSection";
import MentorshipSection from "@/components/sections/MentorshipSection";
import FamilySection from "@/components/sections/FamilySection";
import ContactSection from "@/components/sections/ContactSection";

// Revalidate every 60s (ISR)
export const revalidate = 60;

async function fetchData() {
  // Only fetch from Sanity if projectId is configured
  if (!process.env.NEXT_PUBLIC_SANITY_PROJECT_ID) {
    return { hero: null, about: null, sermons: [], quotes: [], family: [], mentorship: null };
  }

  try {
    const { sanityClient, heroQuery, aboutQuery, sermonsQuery, quotesQuery, familyQuery, mentorshipQuery } =
      await import("@/lib/sanity");

    const [hero, about, sermons, quotes, family, mentorship] = await Promise.all([
      sanityClient.fetch(heroQuery).catch(() => null),
      sanityClient.fetch(aboutQuery).catch(() => null),
      sanityClient.fetch(sermonsQuery).catch(() => []),
      sanityClient.fetch(quotesQuery).catch(() => []),
      sanityClient.fetch(familyQuery).catch(() => []),
      sanityClient.fetch(mentorshipQuery).catch(() => null),
    ]);

    return { hero, about, sermons, quotes, family, mentorship };
  } catch {
    return { hero: null, about: null, sermons: [], quotes: [], family: [], mentorship: null };
  }
}

export default async function HomePage() {
  const { hero, about, sermons, quotes, family, mentorship } = await fetchData();

  return (
    <>
      <Navbar />
      <main>
        <HeroSection data={hero} />
        <AboutSection data={about} />
        <QuoteStrip quotes={quotes} />
        <TeachingsSection sermons={sermons} />
        <MentorshipSection data={mentorship} />
        <FamilySection photos={family} />
        <ContactSection />
      </main>
      <Footer />
    </>
  );
}
