import { Hero } from '@/components/Hero';
import { TrustBadges } from '@/components/TrustBadges';
import { Features } from '@/components/Features';
import { ProductsGrid } from '@/components/ProductsGrid';
import { Testimonials } from '@/components/Testimonials';
import { CTABanner } from '@/components/CTABanner';
import { Newsletter } from '@/components/Newsletter';

export function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Hero />
      <TrustBadges />
      <Features />
      <ProductsGrid />
      <Testimonials />
      <CTABanner />
      <Newsletter />
    </main>
  );
}
