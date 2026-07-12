import { motion } from 'motion/react';
import { PROFILE, VALUES, CAREER_JOURNEY } from '../../data';
import Icon from '../Icon';

export default function AboutView() {
  return (
    <div className="space-y-xl py-base">
      {/* Profile Intro Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl items-center">
        <motion.div 
          className="lg:col-span-5 relative"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="aspect-[4/5] rounded-xl border border-outline-variant bg-white shadow-sm overflow-hidden group relative">
            <img 
              src={PROFILE.images.portraitSide} 
              alt="Alissa Nabila Executive Portrait" 
              className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-103"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-accent/10 -z-10 rounded-full blur-2xl"></div>
        </motion.div>

        <motion.div 
          className="lg:col-span-7 space-y-md"
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="inline-flex items-center gap-xs px-sm py-1 bg-secondary-container text-on-secondary-container rounded-full text-label-sm font-semibold tracking-wider">
            <Icon name="verified" size={14} className="text-accent" />
            ABOUT ME
          </div>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary leading-tight">
            Precision in Numbers, Clarity in Growth.
          </h1>
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed">
            {PROFILE.aboutText}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-md pt-base border-t border-outline-variant">
            <div className="flex flex-col">
              <span className="text-label-sm font-semibold text-secondary uppercase tracking-wider">Qualification</span>
              <span className="text-lg font-medium text-primary mt-1">{PROFILE.qualification}</span>
            </div>
            <div className="flex flex-col">
              <span className="text-label-sm font-semibold text-secondary uppercase tracking-wider">Aspiration</span>
              <span className="text-lg font-medium text-primary mt-1">{PROFILE.tagline}</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Professional Journey Timeline */}
      <section className="bg-surface-container-lowest rounded-xl p-md sm:p-xl border border-outline-variant shadow-sm">
        <div className="text-center mb-lg">
          <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-xs">Professional Journey</h2>
          <div className="h-1 w-20 bg-accent mx-auto rounded-full"></div>
        </div>

        <div className="max-w-3xl mx-auto relative pl-6 sm:pl-0">
          {/* Vertical dashed line */}
          <div className="absolute left-6 sm:left-1/2 top-2 bottom-2 w-0.5 border-l-2 border-dashed border-primary/30 -translate-x-1/2"></div>

          {CAREER_JOURNEY.map((event, index) => {
            const isEven = index % 2 === 0;
            return (
              <motion.div 
                key={event.id}
                className={`relative mb-8 sm:mb-12 flex flex-col sm:flex-row items-start ${isEven ? 'sm:justify-start' : 'sm:justify-end'} w-full`}
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
              >
                {/* timeline point dot */}
                <div className="absolute left-6 sm:left-1/2 w-4 h-4 bg-primary border-4 border-white rounded-full -translate-x-1/2 shadow-sm z-10 top-1.5"></div>

                <div className={`w-full sm:w-[45%] pl-6 sm:pl-0 ${isEven ? 'sm:text-right sm:pr-8' : 'sm:text-left sm:pl-8'}`}>
                  <span className="inline-block text-label-sm font-semibold text-accent-dark bg-accent/15 px-3 py-1 rounded">
                    {event.year}
                  </span>
                  <h3 className="text-lg font-semibold text-primary mt-2">{event.title}</h3>
                  <p className="text-sm font-medium text-secondary">{event.institution}</p>
                  <p className="text-sm text-on-surface-variant mt-1 leading-relaxed">
                    {event.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </section>

      {/* Professional Core Values Section */}
      <section className="space-y-lg">
        <div className="flex flex-col md:flex-row justify-between items-end border-b border-outline-variant pb-xs gap-md">
          <div className="max-w-xl">
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-primary mb-sm">Professional Core Values</h2>
            <p className="text-body-md text-on-surface-variant leading-relaxed">
              The fundamental principles that guide my approach to financial analysis and corporate decision-making.
            </p>
          </div>
          <div className="hidden md:block h-[1px] flex-grow bg-outline-variant mb-4 mx-md"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-md">
          {VALUES.map((val, idx) => (
            <motion.div 
              key={val.id}
              className="p-md bg-white border border-outline-variant rounded-xl hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col gap-sm"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.05 }}
              whileHover={{ y: -4 }}
            >
              <div className="w-12 h-12 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                <Icon name={val.iconName} size={22} className="text-primary" />
              </div>
              <h4 className="font-display text-lg font-semibold text-primary">{val.title}</h4>
              <p className="font-sans text-sm text-on-surface-variant leading-relaxed">{val.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Long-term Vision Card (Premium Card) */}
      <section>
        <motion.div 
          className="relative overflow-hidden bg-primary text-on-primary rounded-xl p-md sm:p-xl shadow-xl border border-primary/20"
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/5 -mr-32 -mt-32 rounded-full blur-3xl"></div>
          <div className="relative z-10 flex flex-col lg:flex-row items-center gap-lg">
            <div className="flex-1 space-y-md text-left">
              <h2 className="font-display text-2xl sm:text-3xl font-semibold leading-tight text-white">My Long-term Vision</h2>
              <p className="text-body-lg opacity-90 leading-relaxed text-slate-100">
                I aspire to build a distinguished career in auditing and financial reporting, eventually transitioning into strategic corporate finance. My goal is to leverage my analytical skills to provide insights that drive sustainable business growth while ensuring absolute financial transparency for stakeholders.
              </p>
              <div className="flex flex-wrap gap-md">
                <div className="flex items-center gap-xs">
                  <Icon name="verified" size={18} className="text-accent" />
                  <span className="text-sm font-semibold">Audit Excellence</span>
                </div>
                <div className="flex items-center gap-xs">
                  <Icon name="verified" size={18} className="text-accent" />
                  <span className="text-sm font-semibold">Financial Integrity</span>
                </div>
              </div>
            </div>

            <div className="hidden lg:block w-px h-32 bg-white/10 mx-6"></div>

            <div className="bg-white/95 text-primary p-md rounded-lg max-w-sm w-full shadow-inner border border-white/20">
              <div className="mb-sm">
                <span className="text-label-sm font-semibold text-secondary uppercase">Target Role</span>
                <p className="text-lg font-bold text-primary mt-0.5">Financial Controller / Audit Partner</p>
              </div>
              <div className="h-px bg-outline-variant my-sm"></div>
              <div className="flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-label-sm font-semibold text-secondary uppercase">Timeline</span>
                  <span className="text-sm font-bold text-primary">10-Year Plan</span>
                </div>
                <div className="w-10 h-10 rounded-full bg-accent/15 flex items-center justify-center">
                  <Icon name="query_stats" size={20} className="text-accent-dark" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>
    </div>
  );
}
