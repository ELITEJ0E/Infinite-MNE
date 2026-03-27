import { useState } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { ArrowRight, Wind, Zap, Settings, ShieldCheck, Droplet, Activity, Wrench } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Services() {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState('All');
  const { ref, isVisible } = useScrollReveal();

  const allServices = [
    {
      id: 'cleanroom',
      title: t('services_page.items.cleanroom.title'),
      description: t('services_page.items.cleanroom.desc'),
      icon: ShieldCheck,
      category: 'Specialized',
      categoryLabel: t('services_page.filters.specialized'),
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'hvac',
      title: t('services_page.items.hvac.title'),
      description: t('services_page.items.hvac.desc'),
      icon: Wind,
      category: 'Core',
      categoryLabel: t('services_page.filters.core'),
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'bms',
      title: t('services_page.items.bms.title'),
      description: t('services_page.items.bms.desc'),
      icon: Activity,
      category: 'Smart',
      categoryLabel: t('services_page.filters.smart'),
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'electrical',
      title: t('services_page.items.electrical.title'),
      description: t('services_page.items.electrical.desc'),
      icon: Zap,
      category: 'Core',
      categoryLabel: t('services_page.filters.core'),
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'utilities',
      title: t('services_page.items.utilities.title'),
      description: t('services_page.items.utilities.desc'),
      icon: Settings,
      category: 'Core',
      categoryLabel: t('services_page.filters.core'),
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'aftermarket',
      title: t('services_page.items.aftermarket.title'),
      description: t('services_page.items.aftermarket.desc'),
      icon: Wrench,
      category: 'Support',
      categoryLabel: t('services_page.filters.support'),
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2940&auto=format&fit=crop',
    },
    {
      id: 'environmental',
      title: t('services_page.items.environmental.title'),
      description: t('services_page.items.environmental.desc'),
      icon: Droplet,
      category: 'Specialized',
      categoryLabel: t('services_page.filters.specialized'),
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2940&auto=format&fit=crop',
    },
  ];

  const filters = [
    { id: 'All', label: t('services_page.filters.all') },
    { id: 'Core', label: t('services_page.filters.core') },
    { id: 'Specialized', label: t('services_page.filters.specialized') },
    { id: 'Smart', label: t('services_page.filters.smart') },
    { id: 'Support', label: t('services_page.filters.support') },
  ];

  const filteredServices = activeFilter === 'All' 
    ? allServices 
    : allServices.filter(s => s.category === activeFilter);

  return (
    <main className="min-h-screen bg-background pt-32 pb-24">
      {/* Hero Section */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-24 text-center">
        <span className="animate-blur-in inline-block text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-6">
          {t('services_page.tag')}
        </span>
        <h1 className="animate-blur-in text-balance font-serif text-5xl font-bold tracking-tight text-foreground sm:text-7xl mb-8">
          {t('services_page.title')}
        </h1>
        <p className="animate-blur-in mx-auto max-w-2xl text-lg text-muted-foreground" style={{ animationDelay: '0.2s' }}>
          {t('services_page.subtitle')}
        </p>
      </section>

      {/* Filters */}
      <section className="mx-auto max-w-7xl px-6 lg:px-8 mb-16">
        <div className="flex flex-wrap justify-center gap-4">
          {filters.map((filter) => (
            <button
              key={filter.id}
              onClick={() => setActiveFilter(filter.id)}
              className={cn(
                'rounded-full px-6 py-2.5 text-sm font-medium transition-all duration-300 shadow-premium',
                activeFilter === filter.id
                  ? 'bg-primary text-white scale-105'
                  : 'bg-white text-muted-foreground hover:text-foreground hover:scale-105'
              )}
            >
              {filter.label}
            </button>
          ))}
        </div>
      </section>

      {/* Services List */}
      <section ref={ref} className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12">
          {filteredServices.map((service, index) => {
            const Icon = service.icon;
            const isEven = index % 2 === 0;
            
            return (
              <div
                key={service.id}
                className={cn(
                  'group flex flex-col lg:flex-row gap-8 lg:gap-16 items-center rounded-3xl bg-white p-6 lg:p-12 shadow-premium transition-all duration-1000 ease-out',
                  isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12',
                  !isEven && 'lg:flex-row-reverse'
                )}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                {/* Image */}
                <div className="w-full lg:w-1/2 relative overflow-hidden rounded-2xl aspect-[4/3]">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    referrerPolicy="no-referrer"
                  />
                  <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/20" />
                  <div className="absolute top-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-white/90 text-primary backdrop-blur-md shadow-premium">
                    <Icon className="h-6 w-6" />
                  </div>
                </div>

                {/* Content */}
                <div className="w-full lg:w-1/2 flex flex-col items-start">
                  <span className="inline-block rounded-full bg-background px-3 py-1 text-xs font-semibold tracking-wider text-secondary uppercase mb-6">
                    {service.categoryLabel}
                  </span>
                  <h2 className="font-serif text-3xl font-bold text-foreground sm:text-4xl mb-6">
                    {service.title}
                  </h2>
                  <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                    {service.description}
                  </p>
                  
                  <ul className="flex flex-col gap-3 mb-10 w-full">
                    <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {t('services_page.features.design')}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {t('services_page.features.installation')}
                    </li>
                    <li className="flex items-center gap-3 text-sm font-medium text-foreground">
                      <div className="h-1.5 w-1.5 rounded-full bg-primary" />
                      {t('services_page.features.maintenance')}
                    </li>
                  </ul>

                  <Link
                    to={`/services/${service.id}`}
                    className="group/btn flex items-center gap-2 rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-all duration-300 hover:bg-primary/90 hover:scale-[1.02] shadow-premium"
                  >
                    {t('services_page.button')}
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover/btn:translate-x-1" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </section>
    </main>
  );
}
