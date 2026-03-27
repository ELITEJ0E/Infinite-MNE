import { Settings, Trophy, Zap, Wrench } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function TrustBadges() {
  const { ref, isVisible } = useScrollReveal();
  const { t } = useTranslation();

  const badges = [
    {
      icon: Settings,
      title: t('home.trust.badge1.title'),
      description: t('home.trust.badge1.desc'),
    },
    {
      icon: Trophy,
      title: t('home.trust.badge2.title'),
      description: t('home.trust.badge2.desc'),
    },
    {
      icon: Zap,
      title: t('home.trust.badge3.title'),
      description: t('home.trust.badge3.desc'),
    },
    {
      icon: Wrench,
      title: t('home.trust.badge4.title'),
      description: t('home.trust.badge4.desc'),
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4"
        >
          {badges.map((badge, index) => {
            const Icon = badge.icon;
            return (
              <div
                key={index}
                className={cn(
                  'flex flex-col items-start rounded-3xl bg-white p-8 shadow-premium transition-all duration-700 ease-out hover:scale-[1.02]',
                  isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
                )}
                style={{ transitionDelay: `${index * 80}ms` }}
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10 text-primary">
                  <Icon className="h-7 w-7" />
                </div>
                <h3 className="mb-3 font-serif text-xl font-semibold text-foreground">
                  {badge.title}
                </h3>
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {badge.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
