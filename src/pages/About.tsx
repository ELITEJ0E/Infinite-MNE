import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Target, Eye, Building2, Wrench, Cpu, Leaf, Users, Award } from 'lucide-react';

export function About() {
  const { t } = useTranslation();

  const journeySteps = [
    'step1', 'step2', 'step3', 'step4', 'step5', 'step6', 'step7', 'step8', 'step9'
  ];

  const subsidiaries = [
    { 
      id: 'epc', 
      icon: Building2, 
      logo: 'https://cdn1.npcdn.net/images/1745230296Infinite%20Logo.webp?md5id=de825d79a481a6f2062ec93a913b8307&new_width=1600&new_height=1600&size=max&type=8&w=-62170008925&off_wm=1&from=png' 
    },
    { 
      id: 'sales', 
      icon: Wrench, 
      logo: 'https://cdn1.npcdn.net/images/1745230296Infinite%20Logo.webp?md5id=de825d79a481a6f2062ec93a913b8307&new_width=1600&new_height=1600&size=max&type=8&w=-62170008925&off_wm=1&from=png' 
    },
    { 
      id: 'mip', 
      icon: Target, 
      logo: 'https://cdn1.npcdn.net/images/1745288130m.webp?md5id=de825d79a481a6f2062ec93a913b8307&new_width=1600&new_height=1600&size=max&type=8&w=-62170008925&off_wm=1&from=png' 
    },
    { 
      id: 'skytech', 
      icon: Cpu, 
      logo: 'https://cdn1.npcdn.net/images/1745315954ss.webp?md5id=de825d79a481a6f2062ec93a913b8307&new_width=1600&new_height=1600&size=max&type=8&w=-62170008925&off_wm=1&from=png' 
    },
    { 
      id: 'iniew', 
      icon: Leaf, 
      logo: 'https://cdn1.npcdn.net/images/1745288216i.webp?md5id=de825d79a481a6f2062ec93a913b8307&new_width=1600&new_height=1600&size=max&type=8&w=-62170008925&off_wm=1&from=png' 
    },
  ];

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
            {t('about.title')}
          </h1>
          <p className="mx-auto max-w-3xl text-lg text-muted-foreground">
            {t('about.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2 mb-24">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="rounded-3xl bg-white p-8 shadow-premium"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
              <Target className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">{t('about.mission')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.missionDesc')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="rounded-3xl bg-white p-8 shadow-premium"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Eye className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">{t('about.vision')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.visionDesc')}
            </p>
          </motion.div>
        </div>

        {/* Roadmap / Journey Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl mb-6">
            {t('about.journey.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('about.journey.subtitle')}
          </p>
        </motion.div>

        <div className="relative mx-auto max-w-4xl py-10 mb-24">
          {/* Vertical Line */}
          <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-gradient-to-b from-primary/5 via-primary/20 to-primary/5 rounded-full" />

          {journeySteps.map((step, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div
                key={step}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className={`relative mb-12 flex md:justify-between items-center w-full ${
                  isEven ? 'md:flex-row-reverse' : ''
                }`}
              >
                {/* Timeline dot */}
                <div className="absolute left-8 md:left-1/2 w-16 h-16 -translate-x-1/2 rounded-full bg-white border-4 border-primary flex items-center justify-center z-10 shadow-xl transition-transform hover:scale-110 duration-300">
                  <span className="font-bold text-primary text-sm">{t(`about.journey.steps.${step}.year`)}</span>
                </div>

                {/* Content Card */}
                <div className={`ml-24 md:ml-0 w-full md:w-[45%] ${isEven ? 'md:text-left' : 'md:text-right'}`}>
                  <div className="p-6 bg-white rounded-3xl shadow-premium hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-muted/50">
                    <p className="text-muted-foreground leading-relaxed font-medium">
                      {t(`about.journey.steps.${step}.description`)}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Subsidiaries Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-3xl font-bold text-primary md:text-4xl mb-6">
            {t('about.subsidiaries.title')}
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('about.subsidiaries.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 mb-24">
          {subsidiaries.map((sub, index) => {
            return (
              <motion.div
                key={sub.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-3xl p-8 shadow-premium border border-muted/50 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col items-center text-center"
              >
                <div className="mb-6 h-24 w-full flex items-center justify-center">
                  <img 
                    src={sub.logo} 
                    alt={t(`about.subsidiaries.companies.${sub.id}.title`)} 
                    className="max-h-full max-w-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </div>
                <span className="inline-block px-3 py-1 text-xs font-bold text-secondary bg-secondary/10 rounded-full uppercase tracking-wider mb-4">
                  {t(`about.subsidiaries.companies.${sub.id}.tag`)}
                </span>
                <h3 className="text-xl font-serif font-bold text-primary mb-3">
                  {t(`about.subsidiaries.companies.${sub.id}.title`)}
                </h3>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  {t(`about.subsidiaries.companies.${sub.id}.description`)}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Clients & Certifications */}
        <div className="grid gap-8 md:grid-cols-2">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-primary text-white p-10 shadow-premium"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-white/10">
              <Users className="h-6 w-6 text-secondary" />
            </div>
            <h2 className="font-serif text-2xl font-bold mb-4">{t('about.clients.title')}</h2>
            <p className="text-white/80 leading-relaxed">
              {t('about.clients.subtitle')}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="rounded-3xl bg-white p-10 shadow-premium border border-muted/50"
          >
            <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-2xl bg-secondary/10 text-secondary">
              <Award className="h-6 w-6" />
            </div>
            <h2 className="font-serif text-2xl font-bold text-primary mb-4">{t('about.certifications.title')}</h2>
            <p className="text-muted-foreground leading-relaxed">
              {t('about.certifications.subtitle')}
            </p>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
