import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-background">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop"
          alt="Cleanroom Facility"
          className="h-full w-full object-cover object-center"
          referrerPolicy="no-referrer"
        />
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/50 to-transparent h-[60%] top-auto bottom-0" />
        <div className="absolute inset-0 bg-black/20" />
      </div>

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 flex flex-col items-center text-center pt-32">
        <span
          className="animate-blur-in inline-block rounded-full border border-white/20 bg-white/10 px-4 py-1.5 text-xs font-semibold tracking-[0.3em] text-white uppercase backdrop-blur-md mb-8"
          style={{ animationDelay: '0.2s' }}
        >
          {t('home.hero.brand')}
        </span>
        
        <h1
          className="animate-blur-in text-balance font-serif text-5xl font-bold tracking-tight text-white sm:text-7xl mb-6 max-w-4xl"
          style={{ animationDelay: '0.4s' }}
        >
          {t('hero.title')}
        </h1>
        
        <p
          className="animate-blur-in text-lg text-white/80 max-w-2xl mb-10"
          style={{ animationDelay: '0.6s' }}
        >
          {t('hero.subtitle')}
        </p>
        
        <div
          className="animate-blur-in flex items-center gap-4"
          style={{ animationDelay: '0.8s' }}
        >
          <Link
            to="/services"
            className="group flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] shadow-premium"
          >
            {t('hero.cta')}
            <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </div>

    </section>
  );
}
