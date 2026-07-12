import { motion } from 'motion/react';
import { EDUCATION_PATHWAY } from '../../data';
import Icon from '../Icon';

export default function EducationView() {
  return (
    <div className="space-y-xl py-base">
      {/* Education Header & KPI */}
      <section className="space-y-lg">
        <div className="text-center max-w-2xl mx-auto space-y-xs">
          <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase bg-accent/10 px-3 py-1 rounded-full">
            Academics
          </span>
          <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">Education Pathway</h1>
          <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
            A solid academic foundation in standard accounting frameworks, corporate governance, and analytical auditing techniques.
          </p>
        </div>

        {/* Highlight Banner Card */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter text-center">
          <motion.div 
            className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
          >
            <span className="text-label-sm font-semibold text-secondary uppercase">UiTM CGPA</span>
            <span className="text-3xl font-display font-semibold text-primary mt-xs">3.48 / 4.00</span>
            <span className="text-xs font-semibold text-emerald-600 mt-1 flex items-center justify-center gap-1">
              <Icon name="verified" size={12} /> Top 5% Academic Cohort
            </span>
          </motion.div>

          <motion.div 
            className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-center"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            <span className="text-label-sm font-semibold text-secondary uppercase">Matriculation CGPA</span>
            <span className="text-3xl font-display font-semibold text-primary mt-xs">3.96 / 4.00</span>
            <span className="text-xs font-semibold text-accent-dark mt-1 flex items-center justify-center gap-1">
              <Icon name="star" size={12} className="fill-accent text-accent" /> High Distinction Graduate
            </span>
          </motion.div>

          <motion.div 
            className="bg-white p-md rounded-xl border border-outline-variant shadow-sm flex flex-col justify-center md:col-span-1"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.2 }}
          >
            <span className="text-label-sm font-semibold text-secondary uppercase">Recognitions</span>
            <span className="text-3xl font-display font-semibold text-primary mt-xs">08 Awards</span>
            <span className="text-xs font-medium text-on-surface-variant mt-1">Dean's Lists & Scholastic Merits</span>
          </motion.div>
        </div>
      </section>

      {/* Main Pathway Section */}
      <section className="space-y-lg">
        {EDUCATION_PATHWAY.map((edu, index) => (
          <motion.div 
            key={edu.id}
            className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col lg:flex-row"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.15 }}
          >
            {/* Institution Image Cover */}
            <div className="lg:w-1/3 min-h-[220px] relative bg-secondary-container">
              <img 
                src={edu.image} 
                alt={edu.institution}
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/20"></div>
              <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary p-sm rounded-lg backdrop-blur shadow">
                <div className="flex items-center gap-xs">
                  <div className="w-8 h-8 rounded bg-primary/10 flex items-center justify-center text-primary">
                    <Icon name={edu.iconName} size={16} />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-secondary uppercase">Timeline</p>
                    <p className="text-sm font-semibold">{edu.timeline}</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Institution Content Details */}
            <div className="p-md sm:p-lg flex-1 space-y-md flex flex-col justify-between">
              <div className="space-y-xs">
                <div className="flex flex-wrap justify-between items-start gap-xs">
                  <div>
                    <h2 className="text-2xl font-semibold text-primary font-display">{edu.institution}</h2>
                    <h3 className="text-lg font-medium text-secondary">{edu.degree}</h3>
                  </div>
                  <div className="bg-primary/5 text-primary border border-primary/10 px-md py-1 rounded font-mono font-bold text-sm">
                    CGPA: {edu.gpa} / {edu.maxGpa}
                  </div>
                </div>
                <p className="text-body-md text-on-surface-variant leading-relaxed pt-xs">
                  {edu.details}
                </p>

                {/* Recognition Badge if exists */}
                {edu.recognition && (
                  <div className="bg-accent/10 border border-accent/20 rounded-lg p-sm mt-sm flex items-start gap-sm">
                    <Icon name="verified_user" size={20} className="text-accent-dark flex-shrink-0 mt-0.5" />
                    <div>
                      <p className="text-xs font-semibold text-accent-dark uppercase">Scholastic Honors</p>
                      <p className="text-sm font-medium text-primary">{edu.recognition}</p>
                    </div>
                  </div>
                )}
              </div>

              {/* Disciplines and Course highlights */}
              <div className="space-y-sm border-t border-outline-variant pt-md">
                <p className="text-label-sm font-semibold text-secondary uppercase tracking-widest">Key Disciplines Mastered</p>
                <div className="flex flex-wrap gap-xs">
                  {edu.disciplines.map(discipline => (
                    <span 
                      key={discipline}
                      className="px-sm py-1 bg-surface-container-low text-primary border border-outline-variant rounded text-xs font-medium"
                    >
                      {discipline}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </section>

      {/* Professional Development / Certifications Section */}
      <section className="bg-surface-container-low rounded-xl p-md sm:p-lg border border-outline-variant space-y-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-xs">
          <div>
            <h2 className="text-xl font-bold font-display text-primary">Continuing Professional Development</h2>
            <p className="text-sm text-on-surface-variant">Active participation in corporate simulations and workshops.</p>
          </div>
          <Icon name="calculate" size={32} className="text-primary/20 hidden sm:block" />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
          <div className="bg-white p-md rounded-lg border border-outline-variant shadow-sm space-y-xs">
            <h3 className="font-semibold text-primary flex items-center gap-xs">
              <Icon name="fact_check" size={18} className="text-accent-dark" />
              Corporate Audit Simulation
            </h3>
            <p className="text-xs text-on-surface-variant">
              Simulated real-world forensic audit assignments for multi-tier entities. Developed testing procedures for transaction ledger accuracy and internal control flow compliance.
            </p>
          </div>

          <div className="bg-white p-md rounded-lg border border-outline-variant shadow-sm space-y-xs">
            <h3 className="font-semibold text-primary flex items-center gap-xs">
              <Icon name="payments" size={18} className="text-accent-dark" />
              Malaysian Corporate Taxation Systems
            </h3>
            <p className="text-xs text-on-surface-variant">
              In-depth research into SST guidelines, corporate taxation requirements, and double-deduction policies. Prepared strategic tax schedules and allowances spreadsheets.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
