import { motion } from 'motion/react';
import { SKILLS } from '../../data';
import Icon from '../Icon';

export default function SkillsView() {
  const accountingCore = SKILLS.filter(s => s.category === 'Accounting Core');
  const technical = SKILLS.filter(s => s.category === 'Technical');
  const soft = SKILLS.filter(s => s.category === 'Soft Skills');

  return (
    <div className="space-y-xl py-base">
      {/* Header and Stats */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-center gap-md border-b border-outline-variant pb-base">
        <div>
          <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-full mb-xs inline-block">
            Competencies
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-primary">Expertise & Strategic Skillsets</h1>
          <p className="text-body-md text-on-surface-variant max-w-lg mt-1">
            Combining core corporate accounting capabilities with advanced financial technology and soft communication skills.
          </p>
        </div>

        {/* Quick stats badges */}
        <div className="flex gap-md w-full sm:w-auto">
          <div className="bg-white px-md py-sm rounded-lg border border-outline-variant shadow-sm text-center flex-1 sm:flex-initial">
            <span className="text-label-sm font-semibold text-secondary uppercase">Academics</span>
            <p className="text-xl font-display font-bold text-primary mt-0.5">Top 5%</p>
          </div>
          <div className="bg-white px-md py-sm rounded-lg border border-outline-variant shadow-sm text-center flex-1 sm:flex-initial">
            <span className="text-label-sm font-semibold text-secondary uppercase">Tools Mastered</span>
            <p className="text-xl font-display font-bold text-primary mt-0.5">12+</p>
          </div>
        </div>
      </section>

      {/* Grid of Core Accounting Skills */}
      <section className="space-y-md">
        <h2 className="font-display text-2xl font-semibold text-primary">Accounting Core</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-gutter">
          {accountingCore.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="bg-white border border-outline-variant p-md rounded-xl hover:shadow-md hover:border-primary/20 transition-all duration-300 flex flex-col justify-between"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <div className="space-y-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary">
                  <Icon name={skill.iconName} size={20} />
                </div>
                <h3 className="font-display text-lg font-semibold text-primary">{skill.name}</h3>
                <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                  {skill.description}
                </p>
              </div>

              {skill.tags && (
                <div className="flex flex-wrap gap-xs pt-md mt-sm border-t border-outline-variant">
                  {skill.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-sm py-0.5 bg-surface-container-low text-primary border border-outline-variant text-[11px] rounded font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>

      {/* Technical tools (meters) & Soft Skills */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg pt-base border-t border-outline-variant">
        {/* Technical Data Meters */}
        <div className="lg:col-span-7 space-y-md">
          <h2 className="font-display text-2xl font-semibold text-primary">Digital & Data Proficiency</h2>
          <div className="bg-white border border-outline-variant rounded-xl p-md sm:p-lg shadow-sm space-y-lg">
            {technical.map((skill, index) => (
              <motion.div 
                key={skill.id}
                className="space-y-xs"
                initial={{ opacity: 0, x: -15 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm">
                  <div>
                    <span className="font-semibold text-primary">{skill.name}</span>
                    <span className="text-xs text-secondary ml-xs block sm:inline">({skill.level})</span>
                  </div>
                  <span className="font-mono font-bold text-accent-dark">{skill.percentage}%</span>
                </div>
                <div className="h-2 w-full bg-surface-container-low rounded-full overflow-hidden">
                  <motion.div 
                    className="h-full bg-primary rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${skill.percentage}%` }}
                    transition={{ duration: 0.8, delay: index * 0.15 + 0.2 }}
                  />
                </div>
                <p className="text-xs text-on-surface-variant leading-relaxed pt-1">
                  {skill.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Soft skills list */}
        <div className="lg:col-span-5 space-y-md">
          <h2 className="font-display text-2xl font-semibold text-primary">Aesthetic & Professional Soft Skills</h2>
          <div className="bg-white border border-outline-variant rounded-xl p-md sm:p-lg shadow-sm space-y-md">
            {soft.map((skill, index) => (
              <motion.div 
                key={skill.id}
                className="flex gap-sm"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
              >
                <div className="w-8 h-8 rounded-full bg-accent/10 flex items-center justify-center text-accent-dark flex-shrink-0">
                  <Icon name={skill.iconName} size={16} />
                </div>
                <div className="space-y-0.5">
                  <h3 className="font-semibold text-primary text-sm sm:text-base">{skill.name}</h3>
                  <p className="text-xs sm:text-sm text-on-surface-variant leading-relaxed">
                    {skill.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Commitment to Excellence Pledge Container */}
      <section>
        <div className="bg-accent-dark text-on-primary rounded-xl p-md sm:p-lg text-center space-y-xs relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-accent/15 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <p className="text-label-sm font-semibold uppercase tracking-widest text-accent">Commitment to Excellence</p>
          <h2 className="font-display text-xl sm:text-2xl font-bold">Uncompromising Quality and Absolute Financial Ethics</h2>
          <p className="text-xs sm:text-sm max-w-2xl mx-auto opacity-90 leading-relaxed pt-xs text-slate-100">
            Applying professional audit care, continuous learning, and state-of-the-art accounting technologies to maintain pristine fiscal accountability and support strategic corporate growth.
          </p>
          <div className="flex justify-center gap-1 text-accent pt-sm">
            <Icon name="star" size={16} className="fill-accent" />
            <Icon name="star" size={16} className="fill-accent" />
            <Icon name="star" size={16} className="fill-accent" />
            <Icon name="star" size={16} className="fill-accent" />
            <Icon name="star" size={16} className="fill-accent" />
          </div>
        </div>
      </section>
    </div>
  );
}
