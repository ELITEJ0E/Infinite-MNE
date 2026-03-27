import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { MapPin, Phone, Mail, Clock } from 'lucide-react';

export function Contact() {
  const { t } = useTranslation();

  return (
    <div className="pt-24 pb-16 bg-muted/30 min-h-screen">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h1 className="font-serif text-4xl font-bold text-primary md:text-5xl mb-6">
            {t('contact.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            <div className="rounded-3xl bg-white p-8 shadow-premium flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <MapPin className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{t('contact.labels.address')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.address')}
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-premium flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Phone className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{t('contact.labels.phone')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.phone')}
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-premium flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-primary/10 text-primary">
                <Mail className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{t('contact.labels.email')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.email')}
                </p>
              </div>
            </div>

            <div className="rounded-3xl bg-white p-8 shadow-premium flex items-start gap-6">
              <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-secondary/10 text-secondary">
                <Clock className="h-6 w-6" />
              </div>
              <div>
                <h3 className="font-serif text-xl font-bold text-primary mb-2">{t('contact.labels.hours')}</h3>
                <p className="text-muted-foreground leading-relaxed">
                  {t('contact.hours')}
                </p>
              </div>
            </div>
          </motion.div>

          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="rounded-3xl bg-white p-8 shadow-premium lg:p-12"
          >
            <form className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-primary mb-2">
                  {t('contact.form.name')}
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full rounded-xl border border-muted bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-primary mb-2">
                  {t('contact.form.email')}
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full rounded-xl border border-muted bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                  placeholder="john@example.com"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-sm font-medium text-primary mb-2">
                  {t('contact.form.message')}
                </label>
                <textarea
                  id="message"
                  rows={6}
                  className="w-full rounded-xl border border-muted bg-background px-4 py-3 text-sm focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary resize-none"
                  placeholder="How can we help you?"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full rounded-full bg-primary px-8 py-4 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg"
              >
                {t('contact.form.send')}
              </button>
            </form>
          </motion.div>
        </div>

        {/* Google Maps Integration */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-16 overflow-hidden rounded-3xl bg-white shadow-premium"
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.397635293427!2d103.78531777586524!3d1.555806460773634!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31da6d9369696969%3A0x6969696969696969!2s63%2C%20Jalan%20Mutiara%20Emas%205%2F11%2C%20Taman%20Mount%20Austin%2C%2081100%20Johor%20Bahru%2C%20Johor!5e0!3m2!1sen!2smy!4v1711424222222!5m2!1sen!2smy"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Infinite M&E Location"
          ></iframe>
        </motion.div>
      </div>
    </div>
  );
}
