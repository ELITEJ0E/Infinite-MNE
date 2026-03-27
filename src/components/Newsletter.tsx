import { useState } from 'react';
import { CheckCircle2, Mail } from 'lucide-react';
import { useScrollReveal } from '@/hooks/use-scroll-reveal';
import { cn } from '@/lib/utils';
import { useTranslation } from 'react-i18next';

export function Newsletter() {
  const { t } = useTranslation();
  const [email, setEmail] = useState('');
  const [isSubmitted, setIsSubmitted] = useState(false);
  const { ref, isVisible } = useScrollReveal();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
      setTimeout(() => setIsSubmitted(false), 5000);
      setEmail('');
    }
  };

  return (
    <section className="py-24 bg-primary text-white">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div
          ref={ref}
          className={cn(
            'flex flex-col items-center text-center max-w-2xl mx-auto transition-all duration-1000 ease-out',
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          )}
        >
          <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 backdrop-blur-md">
            <Mail className="h-8 w-8 text-white" />
          </div>
          
          <h2 className="font-serif text-4xl font-bold tracking-tight sm:text-5xl mb-6">
            {t('home.newsletter.title')}
          </h2>
          
          <p className="text-lg text-white/80 mb-10">
            {t('home.newsletter.desc')}
          </p>

          {isSubmitted ? (
            <div className="flex flex-col items-center animate-blur-in">
              <CheckCircle2 className="h-12 w-12 text-secondary mb-4" />
              <p className="text-xl font-medium text-white">{t('home.newsletter.success.title')}</p>
              <p className="text-sm text-white/70 mt-2">{t('home.newsletter.success.desc')}</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="w-full max-w-md relative flex items-center">
              <input
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={t('home.newsletter.placeholder')}
                className="w-full rounded-full bg-white/10 px-6 py-4 text-sm text-white placeholder:text-white/50 backdrop-blur-md border border-white/20 focus:outline-none focus:ring-2 focus:ring-white/50 transition-all"
              />
              <button
                type="submit"
                className="absolute right-2 top-2 bottom-2 rounded-full bg-white px-6 text-sm font-bold text-primary transition-all hover:bg-white/90 hover:scale-105 shadow-premium"
              >
                {t('home.newsletter.button')}
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
