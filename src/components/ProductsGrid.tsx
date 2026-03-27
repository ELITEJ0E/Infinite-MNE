import { useState, useRef, useEffect } from 'react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function ProductsGrid() {
  const { t } = useTranslation();
  const [activeCategory, setActiveCategory] = useState('All');
  const [isTransitioning, setIsTransitioning] = useState(false);
  const { ref, isVisible } = useScrollReveal();
  const tabsRef = useRef<(HTMLButtonElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  const categories = [
    t('home.services.categories.all'),
    t('home.services.categories.cleanroom'),
    t('home.services.categories.hvac'),
    t('home.services.categories.bms'),
    t('home.services.categories.electrical'),
    t('home.services.categories.utilities'),
    t('home.services.categories.aftermarket'),
    t('home.services.categories.environmental')
  ];

  const services = [
    {
      name: t('home.services.items.cleanroom.name'),
      description: t('home.services.items.cleanroom.desc'),
      category: t('home.services.categories.cleanroom'),
      badge: 'New',
      image: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.hvac.name'),
      description: t('home.services.items.hvac.desc'),
      category: t('home.services.categories.hvac'),
      badge: 'Popular',
      image: 'https://images.unsplash.com/photo-1581092580497-e0d23cbdf1dc?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.bms.name'),
      description: t('home.services.items.bms.desc'),
      category: t('home.services.categories.bms'),
      badge: 'Smart',
      image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.electrical.name'),
      description: t('home.services.items.electrical.desc'),
      category: t('home.services.categories.electrical'),
      badge: 'Essential',
      image: 'https://images.unsplash.com/photo-1581092335397-9583eb92d232?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.utilities.name'),
      description: t('home.services.items.utilities.desc'),
      category: t('home.services.categories.utilities'),
      badge: 'Custom',
      image: 'https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.maintenance.name'),
      description: t('home.services.items.maintenance.desc'),
      category: t('home.services.categories.aftermarket'),
      badge: 'Service',
      image: 'https://images.unsplash.com/photo-1581091226033-d5c48150dbaa?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.water.name'),
      description: t('home.services.items.water.desc'),
      category: t('home.services.categories.environmental'),
      badge: 'Eco',
      image: 'https://images.unsplash.com/photo-1581092162384-8987c1d64718?q=80&w=2940&auto=format&fit=crop',
    },
    {
      name: t('home.services.items.repair.name'),
      description: t('home.services.items.repair.desc'),
      category: t('home.services.categories.aftermarket'),
      badge: '24/7',
      image: 'https://images.unsplash.com/photo-1581091870621-1904c506927e?q=80&w=2940&auto=format&fit=crop',
    },
  ];

  const [displayedServices, setDisplayedServices] = useState(services);

  useEffect(() => {
    const activeIndex = categories.indexOf(activeCategory);
    const activeTab = tabsRef.current[activeIndex];
    
    if (activeTab) {
      setIndicatorStyle({
        left: activeTab.offsetLeft,
        width: activeTab.offsetWidth,
      });
    }

    setIsTransitioning(true);
    const timer = setTimeout(() => {
      setDisplayedServices(
        activeCategory === t('home.services.categories.all')
          ? services
          : services.filter((s) => s.category === activeCategory)
      );
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory, t]);

  return (
    <section className="py-24 bg-white" id="projects">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-16 flex flex-col items-center text-center">
          <span className="animate-blur-in inline-block text-xs font-semibold tracking-[0.3em] text-primary uppercase mb-4">
            {t('home.services.tag')}
          </span>
          <h2 className="animate-blur-in text-balance font-serif text-4xl font-bold tracking-tight text-foreground sm:text-5xl mb-12">
            {t('home.services.title')}
          </h2>

          {/* Category Filter */}
          <div className="relative flex flex-wrap justify-center gap-2 rounded-full bg-background p-1.5 shadow-premium max-w-full overflow-x-auto">
            <div
              className="absolute bottom-1.5 top-1.5 rounded-full bg-white shadow-sm transition-all duration-300 ease-out"
              style={{ left: indicatorStyle.left, width: indicatorStyle.width }}
            />
            {categories.map((category, index) => (
              <button
                key={category}
                ref={(el) => { tabsRef.current[index] = el; }}
                onClick={() => setActiveCategory(category)}
                className={cn(
                  'relative z-10 rounded-full px-5 py-2 text-sm font-medium transition-colors duration-300 whitespace-nowrap',
                  activeCategory === category ? 'text-foreground' : 'text-muted-foreground hover:text-foreground'
                )}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Grid */}
        <div
          ref={ref}
          className={cn(
            'grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 transition-opacity duration-300',
            isTransitioning ? 'opacity-0' : 'opacity-100',
            isVisible ? 'translate-y-0' : 'translate-y-8 opacity-0'
          )}
        >
          {displayedServices.map((service, index) => (
            <div
              key={service.name}
              className="group relative flex flex-col overflow-hidden rounded-3xl bg-background shadow-premium transition-all duration-500 hover:scale-[1.02]"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {/* Image Container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={service.image}
                  alt={service.name}
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-black/10 transition-colors group-hover:bg-black/30" />
                
                {/* Badge */}
                <div className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1 text-xs font-bold text-primary backdrop-blur-md shadow-sm">
                  {service.badge}
                </div>

                {/* Hover Reveal Button */}
                <div className="absolute inset-0 flex items-center justify-center opacity-0 transition-all duration-300 group-hover:opacity-100">
                  <Link
                    to="/services"
                    className="flex h-12 w-12 translate-y-4 items-center justify-center rounded-full bg-primary text-white shadow-premium transition-all duration-300 hover:scale-110 group-hover:translate-y-0"
                  >
                    <ArrowRight className="h-5 w-5" />
                  </Link>
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-1 flex-col p-6">
                <div className="mb-2 text-xs font-semibold tracking-wider text-secondary uppercase">
                  {service.category}
                </div>
                <h3 className="mb-2 font-serif text-xl font-bold text-foreground line-clamp-1">
                  {service.name}
                </h3>
                <p className="text-sm text-muted-foreground line-clamp-2 mb-4 flex-1">
                  {service.description}
                </p>
                <div className="mt-auto flex items-center justify-between border-t border-muted pt-4">
                  <span className="text-sm font-medium text-foreground">{t('home.services.quote')}</span>
                  <Link to="/services" className="text-sm font-semibold text-primary hover:underline">{t('home.services.cta')}</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
