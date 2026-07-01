import { HomeSections } from '@/components/blocks/home-sections';
import { HeroSection } from '@/components/blocks/3d-hero-section-boxes';

export default function Home() {
  return (
    <main className="min-h-screen bg-black">
      <HeroSection />
      <HomeSections />
    </main>
  );
}
