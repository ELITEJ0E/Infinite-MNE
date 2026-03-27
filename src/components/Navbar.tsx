import { useState, useEffect } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const toggleLanguage = () => {
    const nextLang = i18n.language === 'en' ? 'zh' : i18n.language === 'zh' ? 'ms' : 'en';
    i18n.changeLanguage(nextLang);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav
      className={cn(
        'fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-out',
        isScrolled ? 'py-4' : 'py-6'
      )}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex h-[68px] items-center justify-between rounded-3xl border border-white/32 bg-white/40 px-6 backdrop-blur-md shadow-premium">
          {/* Left: Nav Links */}
          <div className="hidden md:flex items-center gap-8">
            <Link to="/services" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.services')}</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.about')}</Link>
            <Link to="/career" className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors">{t('nav.career')}</Link>
          </div>

          {/* Center: Logo */}
          <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
            <Link to="/" className="flex items-center justify-center">
              <img 
                src="https://cdn1.npcdn.net/images/e48efe69ec3b2137e4b4e4ae689144ed.png" 
                alt="Infinite M&E Logo" 
                className="h-10 w-auto" 
                referrerPolicy="no-referrer" 
              />
            </Link>
          </div>

          {/* Right: CTA / Icons */}
          <div className="hidden md:flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center gap-2 rounded-full bg-white/50 px-4 py-2 text-sm font-medium text-foreground/80 transition-colors hover:bg-white/80"
            >
              <Globe className="h-4 w-4" />
              {i18n.language.toUpperCase()}
            </button>
            <Link to="/contact" className="rounded-full bg-primary px-5 py-2.5 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:scale-105">
              {t('nav.contact')}
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="md:hidden flex items-center gap-4">
            <button 
              onClick={toggleLanguage}
              className="flex items-center justify-center rounded-full bg-white/50 p-2 text-foreground/80 transition-colors hover:bg-white/80"
            >
              <Globe className="h-5 w-5" />
            </button>
            <button
              className="text-foreground"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={cn(
            'md:hidden overflow-hidden transition-all duration-300 ease-out rounded-3xl bg-white/90 backdrop-blur-md shadow-premium mt-2',
            isMobileMenuOpen ? 'max-h-80 opacity-100 border border-white/32' : 'max-h-0 opacity-0 border-transparent'
          )}
        >
          <div className="flex flex-col p-6 gap-4">
            <Link to="/services" className="text-sm font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.services')}</Link>
            <Link to="/about" className="text-sm font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.about')}</Link>
            <Link to="/career" className="text-sm font-medium text-foreground/80" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.career')}</Link>
            <Link to="/contact" className="text-sm font-medium text-primary" onClick={() => setIsMobileMenuOpen(false)}>{t('nav.contact')}</Link>
          </div>
        </div>
      </div>
    </nav>
  );
}
