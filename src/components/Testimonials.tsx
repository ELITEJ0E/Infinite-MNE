import { Star } from 'lucide-react';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

const testimonials = [
  {
    author: 'Lim Gaik Hooi',
    location: 'Johor Bahru',
    quote: 'Good engineering.',
    rating: 5,
    service: 'General M&E',
  },
  {
    author: 'Maxmillian Marcus Junior',
    location: 'Johor Bahru',
    quote: 'MnE company',
    rating: 5,
    service: 'General M&E',
  },
  {
    author: 'Kevin IKM',
    location: 'Johor Bahru',
    quote: 'Excellent service and reliable solutions.',
    rating: 5,
    service: 'Electrical System',
  },
  {
    author: 'Puteri Zulaikha',
    location: 'Johor Bahru',
    quote: 'Professional team and high-quality work.',
    rating: 5,
    service: 'Cleanroom Project',
  },
  {
    author: 'Saw Cheewei',
    location: 'Malaysia',
    quote: 'Let the right person right solution for you.',
    rating: 5,
    service: 'General M&E Consultation',
  },
  {
    author: 'ML Radiators & Coolers Sdn Bhd',
    location: 'Johor Bahru',
    quote: 'Good services and reasonable price.',
    rating: 5,
    service: 'HVAC Maintenance',
  },
  {
    author: 'KAC Projects Sdn. Bhd.',
    location: 'Johor Bahru',
    quote: 'Good company & services.',
    rating: 5,
    service: 'BMS Installation',
  },
  {
    author: 'Vincent Ng',
    location: 'Johor Bahru',
    quote: 'Highly recommend for complex projects.',
    rating: 5,
    service: 'Utilities Installation',
  },
  {
    author: 'Hafizul Azreq',
    location: 'Johor Bahru',
    quote: 'Reliable and efficient M&E partner.',
    rating: 5,
    service: 'After Market Support',
  },
];

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
  return (
    <div className="mb-6 rounded-3xl bg-white p-8 shadow-premium transition-transform duration-300 hover:scale-[1.02]">
      <div className="mb-4 flex items-center gap-1 text-yellow-400">
        {[...Array(testimonial.rating)].map((_, i) => (
          <Star key={i} className="h-4 w-4 fill-current" />
        ))}
      </div>
      <blockquote className="mb-6 font-serif text-lg italic text-foreground">
        "{testimonial.quote}"
      </blockquote>
      <div className="flex items-center justify-between border-t border-muted pt-4">
        <div>
          <p className="font-semibold text-foreground">{testimonial.author}</p>
          <p className="text-xs text-muted-foreground">{testimonial.location}</p>
        </div>
        <span className="rounded-full bg-background px-3 py-1 text-xs font-medium text-primary">
          {testimonial.service}
        </span>
      </div>
    </div>
  );
}

export function Testimonials() {
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mb-16 text-center">
          <span className="animate-blur-in inline-block text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('home.testimonials.tag')}
          </span>
          <h2 className="animate-blur-in text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {t('home.testimonials.title')}
          </h2>
        </div>

        <div className="relative h-[600px] overflow-hidden">
          {/* Top Gradient Mask */}
          <div className="absolute top-0 left-0 right-0 z-10 h-32 bg-gradient-to-b from-background to-transparent pointer-events-none" />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 h-full">
            {/* Column 1: Scroll Down */}
            <div className="hidden md:block relative h-[1200px]">
              <div className="animate-scroll-down absolute top-0 w-full hover:[animation-play-state:paused]">
                {[...testimonials.slice(0, 3), ...testimonials.slice(0, 3)].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 2: Scroll Up */}
            <div className="relative h-[1200px]">
              <div className="animate-scroll-up absolute top-0 w-full hover:[animation-play-state:paused]">
                {[...testimonials.slice(3, 6), ...testimonials.slice(3, 6)].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </div>

            {/* Column 3: Scroll Down */}
            <div className="hidden md:block relative h-[1200px]">
              <div className="animate-scroll-down absolute top-0 w-full hover:[animation-play-state:paused]">
                {[...testimonials.slice(6, 9), ...testimonials.slice(6, 9)].map((t, i) => (
                  <TestimonialCard key={i} testimonial={t} />
                ))}
              </div>
            </div>
          </div>

          {/* Bottom Gradient Mask */}
          <div className="absolute bottom-0 left-0 right-0 z-10 h-32 bg-gradient-to-t from-background to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}
