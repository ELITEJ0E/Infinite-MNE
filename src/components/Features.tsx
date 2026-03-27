import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { ArrowRight, Wind, Zap, ShieldCheck, Activity } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Features() {
  const { ref: gridRef, isVisible: isGridVisible } = useScrollReveal();
  const { ref: bottomRef, isVisible: isBottomVisible } = useScrollReveal();
  const { t } = useTranslation();

  return (
    <section className="py-24 bg-background overflow-hidden" id="about">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 text-center">
          <span className="animate-blur-in inline-block text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('home.features.tag')}
          </span>
          <h2 className="animate-blur-in text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-6">
            {t('home.features.title')}
          </h2>
          <p className="animate-blur-in mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('home.features.subtitle')}
          </p>
        </div>

        {/* Bento Grid */}
        <div
          ref={gridRef}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 auto-rows-[300px] mb-24"
        >
          {/* Large Block */}
          <div
            className={cn(
              'group relative overflow-hidden rounded-3xl lg:col-span-2 lg:row-span-2 shadow-premium transition-all duration-700 ease-out',
              isGridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop"
              alt="Industrial Facility"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
            
            <div className="absolute bottom-6 left-6 right-6 rounded-3xl bg-white/95 p-8 backdrop-blur-md shadow-premium transform transition-transform duration-500 group-hover:-translate-y-2">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-3">{t('home.features.mainCard.title')}</h3>
              <p className="text-muted-foreground mb-6">
                {t('home.features.mainCard.desc')}
              </p>
              <Link to="/about" className="inline-flex items-center gap-2 text-sm font-semibold text-primary group/link">
                {t('home.features.mainCard.cta')}
                <ArrowRight className="h-4 w-4 transition-transform group-hover/link:translate-x-1" />
              </Link>
            </div>
          </div>

          {/* Small Block 1 */}
          <div
            className={cn(
              'group relative overflow-hidden rounded-3xl shadow-premium transition-all duration-700 ease-out lg:col-span-2',
              isGridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            style={{ transitionDelay: '80ms' }}
          >
            <img
              src="https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2940&auto=format&fit=crop"
              alt="Cleanroom"
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
              referrerPolicy="no-referrer"
            />
            <div className="absolute inset-0 bg-black/40 transition-colors group-hover:bg-black/50" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-serif text-2xl font-bold text-white mb-2">{t('home.features.cleanroom.title')}</h3>
              <p className="text-white/80 text-sm">{t('home.features.cleanroom.desc')}</p>
            </div>
          </div>

          {/* Small Block 2 */}
          <div
            className={cn(
              'group relative overflow-hidden rounded-3xl bg-primary p-8 shadow-premium transition-all duration-700 ease-out',
              isGridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            style={{ transitionDelay: '160ms' }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <Wind className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{t('home.features.hvac.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.features.hvac.desc')}</p>
              </div>
            </div>
          </div>

          {/* Small Block 3 */}
          <div
            className={cn(
              'group relative overflow-hidden rounded-3xl bg-secondary p-8 shadow-premium transition-all duration-700 ease-out',
              isGridVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
            )}
            style={{ transitionDelay: '240ms' }}
          >
            <div className="flex h-full flex-col justify-between">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-white/20 text-white backdrop-blur-sm">
                <Zap className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{t('home.features.electrical.title')}</h3>
                <p className="text-white/80 text-sm">{t('home.features.electrical.desc')}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div
          ref={bottomRef}
          className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center"
        >
          <div
            className={cn(
              'relative overflow-hidden rounded-3xl aspect-[4/5] shadow-premium transition-all duration-1000 ease-out',
              isBottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-12'
            )}
          >
            <img
              src="https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?q=80&w=2940&auto=format&fit=crop"
              alt="Engineering Team"
              className="absolute inset-0 h-full w-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          <div
            className={cn(
              'transition-all duration-1000 ease-out',
              isBottomVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-12'
            )}
          >
            <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl mb-6 text-balance">
              {t('home.features.bottom.title')}
            </h2>
            <p className="text-muted-foreground mb-12 text-lg">
              {t('home.features.bottom.desc')}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
              {[
                { icon: ShieldCheck, title: t('home.features.bottom.f1.title'), desc: t('home.features.bottom.f1.desc') },
                { icon: Activity, title: t('home.features.bottom.f2.title'), desc: t('home.features.bottom.f2.desc') },
                { icon: Wind, title: t('home.features.bottom.f3.title'), desc: t('home.features.bottom.f3.desc') },
                { icon: Zap, title: t('home.features.bottom.f4.title'), desc: t('home.features.bottom.f4.desc') },
              ].map((feature, idx) => {
                const Icon = feature.icon;
                return (
                  <div key={idx} className="group flex flex-col items-start gap-4 transition-transform duration-300 hover:scale-[1.02]">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary transition-colors group-hover:bg-primary group-hover:text-white">
                      <Icon className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-serif text-lg font-semibold text-foreground mb-1">{feature.title}</h4>
                      <p className="text-sm text-muted-foreground">{feature.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
