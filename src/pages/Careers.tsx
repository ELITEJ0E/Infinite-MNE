import { useTranslation } from 'react-i18next';
import { motion } from 'motion/react';
import { Briefcase, MapPin, Clock } from 'lucide-react';

export function Careers() {
  const { t } = useTranslation();

  const jobs = [
    { id: 1, title: 'career.positions.bimCoord', location: 'career.location', type: 'career.type' },
    { id: 2, title: 'career.positions.projEng', location: 'career.location', type: 'career.type' },
    { id: 3, title: 'career.positions.safety', location: 'career.location', type: 'career.type' },
    { id: 4, title: 'career.positions.hr', location: 'career.location', type: 'career.type' },
    { id: 5, title: 'career.positions.seniorEng', location: 'career.location', type: 'career.type' },
    { id: 6, title: 'career.positions.procurement', location: 'career.location', type: 'career.type' },
    { id: 7, title: 'career.positions.bimModeler', location: 'career.location', type: 'career.type' },
    { id: 8, title: 'career.positions.technician', location: 'career.location', type: 'career.type' },
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
            {t('career.title')}
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            {t('career.subtitle')}
          </p>
        </motion.div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {jobs.map((job, index) => (
            <motion.div
              key={job.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="rounded-3xl bg-white p-8 shadow-premium transition-all duration-300 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-primary/10 text-primary">
                <Briefcase className="h-6 w-6" />
              </div>
              <h3 className="font-serif text-xl font-bold text-primary mb-4 flex-1">
                {t(job.title)}
              </h3>
              
              <div className="space-y-2 mb-6 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 text-secondary" />
                  <span>{t(job.location)}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4 text-secondary" />
                  <span>{t(job.type)}</span>
                </div>
              </div>

              <button className="w-full rounded-full bg-primary px-6 py-3 text-sm font-medium text-white transition-all hover:bg-primary/90 hover:shadow-lg">
                {t('career.apply')}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
