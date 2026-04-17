import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import HeroSection from "@/components/sections/HeroSection";
import QuoteStrip from "@/components/sections/QuoteStrip";
import ClientShell from "@/components/ui/ClientShell";
import HomeAboutTeaser from "@/components/home/HomeAboutTeaser";
import HomeTeachingsTeaser from "@/components/home/HomeTeachingsTeaser";
import HomeMentorshipTeaser from "@/components/home/HomeMentorshipTeaser";
import HomePrayTeaser from "@/components/home/HomePrayTeaser";
import HomeConnectTeaser from "@/components/home/HomeConnectTeaser";

export const revalidate = 60;

async function fetchData() {
  try {
    const { safeFetch, heroQuery, quotesQuery } = await import("@/lib/sanity");
    const [hero, quotes] = await Promise.all([
      safeFetch(heroQuery, null),
      safeFetch(quotesQuery, []),
    ]);
    return { hero, quotes };
  } catch {
    return { hero: null, quotes: [] };
  }
}

export default async function HomePage() {
  const { hero, quotes } = await fetchData();
  return (
    <ClientShell>
      <Navbar />
      <main>
        <HeroSection data={hero} />
        <HomeAboutTeaser />
        <QuoteStrip quotes={quotes} />
        <HomeTeachingsTeaser />
        <HomeMentorshipTeaser />
        <HomePrayTeaser />
        <HomeConnectTeaser />
      </main>
      <Footer />
    </ClientShell>
  );
}
