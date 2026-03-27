import { Lightbulb, Handshake, Clock, ArrowRight } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function CTABanner() {
  const { t } = useTranslation();
  const { ref, isVisible } = useScrollReveal({ threshold: 0.2 });

  return (
    <section className="py-24 bg-background px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div
          ref={ref}
          className={cn(
            'relative overflow-hidden rounded-3xl min-h-[400px] flex items-center shadow-premium transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
          )}
        >
          {/* Background Image */}
          <img
            src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2940&auto=format&fit=crop"
            alt="Engineering Project"
            className="absolute inset-0 h-full w-full object-cover"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-primary/90 mix-blend-multiply" />
          <div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/80 to-transparent" />

          {/* Content */}
          <div className="relative z-10 p-12 md:p-20 flex flex-col items-start max-w-3xl">
            <h2 className="font-serif text-4xl font-bold tracking-tight text-white sm:text-5xl mb-12">
              {t('home.cta.title')}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 mb-12 w-full">
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Lightbulb className="h-6 w-6" />
                </div>
                <span className="font-medium">{t('home.cta.features.innovative')}</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Handshake className="h-6 w-6" />
                </div>
                <span className="font-medium">{t('home.cta.features.partnership')}</span>
              </div>
              <div className="flex items-center gap-4 text-white">
                <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 backdrop-blur-sm">
                  <Clock className="h-6 w-6" />
                </div>
                <span className="font-medium">{t('home.cta.features.delivery')}</span>
              </div>
            </div>

            <Link
              to="#contact"
              className="group flex items-center gap-2 rounded-full bg-white px-8 py-4 text-sm font-bold text-primary transition-all duration-300 hover:bg-white/90 hover:scale-[1.02] shadow-premium"
            >
              {t('home.cta.button')}
              <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
