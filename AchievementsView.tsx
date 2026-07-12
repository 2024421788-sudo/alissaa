import { motion } from 'motion/react';
import { ACHIEVEMENTS } from '../../data';
import Icon from '../Icon';

export default function AchievementsView() {
  return (
    <div className="space-y-xl py-base">
      {/* Header with High-Stakes KPIs */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md border-b border-outline-variant pb-base">
        <div>
          <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-full mb-xs inline-block">
            Accolades
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-primary">Honors & Accolades</h1>
          <p className="text-body-md text-on-surface-variant max-w-lg mt-1">
            Scholastic accomplishments and industry-recognized certifications validating specialized accounting expertise.
          </p>
        </div>

        {/* Global Performance Metrs */}
        <div className="grid grid-cols-3 gap-sm w-full md:w-auto text-center">
          <div className="bg-white border border-outline-variant rounded-lg p-sm shadow-sm flex-1">
            <span className="text-[10px] sm:text-xs font-semibold text-secondary uppercase">Ranking</span>
            <p className="text-base sm:text-lg font-bold text-primary mt-1">Top 5%</p>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg p-sm shadow-sm flex-1">
            <span className="text-[10px] sm:text-xs font-semibold text-secondary uppercase">Awards</span>
            <p className="text-base sm:text-lg font-bold text-primary mt-1">08 Total</p>
          </div>
          <div className="bg-white border border-outline-variant rounded-lg p-sm shadow-sm flex-1">
            <span className="text-[10px] sm:text-xs font-semibold text-secondary uppercase">Certs</span>
            <p className="text-base sm:text-lg font-bold text-primary mt-1">12+ Mastery</p>
          </div>
        </div>
      </section>

      {/* Main Grid list of Awards & Credentials */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-md">
        {ACHIEVEMENTS.map((ach, idx) => (
          <motion.div 
            key={ach.id}
            className="bg-white border border-outline-variant rounded-xl p-md sm:p-lg hover:shadow-md transition-all duration-300 flex gap-sm sm:gap-md relative overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: idx * 0.05 }}
          >
            {/* Dynamic visual ribbon indicator */}
            <div className={`absolute top-0 left-0 w-1.5 h-full ${ach.type === 'Award' ? 'bg-accent' : ach.type === 'Certification' ? 'bg-primary' : 'bg-secondary'}`} />

            {/* Icon Column */}
            <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-lg bg-surface-container-low flex items-center justify-center text-primary flex-shrink-0">
              <Icon name={ach.iconName} size={22} className="text-primary" />
            </div>

            {/* Information Details */}
            <div className="space-y-sm flex-grow">
              <div className="space-y-xs">
                <div className="flex flex-wrap items-center justify-between gap-xs">
                  <span className={`px-2 py-0.5 rounded text-[11px] font-bold tracking-wider uppercase ${
                    ach.type === 'Award' 
                      ? 'bg-accent/15 text-accent-dark border border-accent/20' 
                      : ach.type === 'Certification' 
                      ? 'bg-primary/5 text-primary border border-primary/10' 
                      : 'bg-slate-100 text-slate-700 border border-slate-200'
                  }`}>
                    {ach.badgeText}
                  </span>
                  <span className="text-xs font-mono font-medium text-secondary">{ach.date}</span>
                </div>
                <h3 className="text-lg font-semibold text-primary font-display leading-snug">{ach.title}</h3>
                <p className="text-xs sm:text-sm font-semibold text-secondary">{ach.organization}</p>
              </div>

              <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                {ach.description}
              </p>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Certification Verification Disclaimer Badge */}
      <section>
        <div className="bg-surface-container-low border border-outline-variant rounded-xl p-md text-center flex flex-col sm:flex-row items-center justify-center gap-xs text-sm text-on-surface-variant font-medium">
          <Icon name="verified_user" size={18} className="text-emerald-600" />
          <span>All academic Dean's list and SQL Ledger achievements are verified via Universiti Teknologi MARA databases.</span>
        </div>
      </section>
    </div>
  );
}
