import { motion } from 'motion/react';
import { PROFILE, QUICK_STATS, SKILLS, PROJECTS } from '../../data';
import Icon from '../Icon';

interface HomeViewProps {
  onNavigate: (tab: string) => void;
}

export default function HomeView({ onNavigate }: HomeViewProps) {
  // Take first 4 skills for featured
  const featuredSkills = SKILLS.slice(0, 4);
  // Take first 2 projects for featured
  const featuredProjects = PROJECTS.slice(0, 2);

  return (
    <div className="space-y-xl py-base">
      {/* Hero Section */}
      <section className="flex flex-col lg:flex-row items-center gap-lg lg:gap-xl">
        <motion.div 
          className="flex-1 space-y-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-xs px-sm py-1 bg-primary/5 text-primary rounded-full text-label-sm font-semibold tracking-wider">
            <Icon name="verified" size={14} className="text-accent" />
            OFFICIAL PORTFOLIO
          </div>
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl text-primary font-semibold leading-tight tracking-tight">
            ALISSA NABILA BINTI MAT NAIM
          </h1>
          <p className="font-display text-xl sm:text-2xl text-secondary font-medium">
            Bachelor of Accounting (Hons.) | {PROFILE.university}
          </p>
          <p className="font-sans text-body-lg text-on-surface-variant leading-relaxed max-w-2xl">
            {PROFILE.aboutBrief}
          </p>
          <div className="flex flex-wrap gap-md pt-base">
            <button 
              onClick={() => onNavigate('projects')}
              className="bg-primary text-on-primary px-lg py-md rounded-lg font-semibold text-sm hover:shadow-lg transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Explore Portfolio
            </button>
            <button 
              onClick={() => onNavigate('contact')}
              className="border border-outline-variant text-primary px-lg py-md rounded-lg font-semibold text-sm hover:bg-surface-container-low transition-all duration-300 active:scale-95 cursor-pointer"
            >
              Download Resume
            </button>
          </div>
        </motion.div>

        <motion.div 
          className="flex-1 relative w-full max-w-md lg:max-w-none"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <div className="absolute -inset-4 bg-secondary-container rounded-3xl opacity-20 -z-10 rotate-3"></div>
          <div className="overflow-hidden rounded-2xl border border-outline-variant shadow-xl bg-white aspect-[4/5]">
            <img 
              src={PROFILE.images.portraitMain} 
              alt="Alissa Nabila Portrait" 
              className="w-full h-full object-cover object-top hover:scale-102 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
        </motion.div>
      </section>

      {/* KPI / Statistics Section */}
      <section className="bg-surface-container-low -mx-margin px-margin py-lg border-y border-outline-variant">
        <div className="max-w-max-width mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-gutter">
            {QUICK_STATS.map((stat, idx) => (
              <motion.div 
                key={stat.label}
                className="bg-white p-md rounded-lg border border-outline-variant shadow-sm text-center"
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: idx * 0.1 }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <p className="font-sans text-label-sm text-secondary uppercase tracking-widest mb-xs">{stat.label}</p>
                <p className="font-display text-2xl sm:text-3xl font-semibold text-primary">{stat.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Skills */}
      <section className="space-y-lg">
        <div className="flex flex-col items-center text-center max-w-2xl mx-auto">
          <span className="bg-accent/10 text-accent-dark px-sm py-1 rounded-full text-label-sm font-semibold uppercase tracking-widest mb-xs">
            Expertise
          </span>
          <h2 className="font-display text-3xl font-semibold text-primary">Featured Skills</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-gutter">
          {featuredSkills.map((skill, index) => (
            <motion.div 
              key={skill.id}
              className="bg-white border border-outline-variant p-md rounded-xl hover:border-accent transition-all duration-300 group flex flex-col justify-between"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div>
                <div className="w-12 h-12 rounded-lg bg-surface-container-low flex items-center justify-center mb-md group-hover:bg-accent/10 transition-colors duration-300">
                  <Icon name={skill.iconName} size={24} className="text-primary group-hover:text-accent-dark transition-colors duration-300" />
                </div>
                <h3 className="font-display text-lg font-medium text-primary mb-xs">{skill.name}</h3>
                <p className="font-sans text-body-sm text-on-surface-variant leading-relaxed">{skill.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
        
        <div className="flex justify-center pt-base">
          <button 
            onClick={() => onNavigate('skills')}
            className="flex items-center gap-xs font-semibold text-sm text-primary hover:text-accent transition-colors duration-150 cursor-pointer"
          >
            View All Skills <Icon name="arrow_forward" size={14} />
          </button>
        </div>
      </section>

      {/* Featured Projects */}
      <section className="space-y-lg border-t border-outline-variant pt-xl">
        <div className="flex justify-between items-end">
          <div>
            <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase mb-xs block">Portfolio</span>
            <h2 className="font-display text-3xl font-semibold text-primary">Featured Projects</h2>
          </div>
          <button 
            onClick={() => onNavigate('projects')}
            className="flex items-center gap-xs font-semibold text-sm text-primary border-b-2 border-primary/20 pb-1 hover:text-accent hover:border-accent transition-all duration-150 cursor-pointer"
          >
            View All Projects
            <Icon name="arrow_forward" size={14} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-xl">
          {featuredProjects.map((project, index) => (
            <motion.div 
              key={project.id}
              className="group cursor-pointer space-y-sm"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              onClick={() => onNavigate('projects')}
            >
              <div className="overflow-hidden rounded-xl border border-outline-variant bg-surface-container-low aspect-video relative">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-104 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
              </div>
              <div className="space-y-xs">
                <div className="flex flex-wrap gap-xs">
                  {project.tags.map(tag => (
                    <span 
                      key={tag}
                      className="px-sm py-0.5 bg-secondary-container/50 text-on-secondary-container text-label-sm rounded-full font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl font-medium text-primary group-hover:text-accent transition-colors duration-150">
                  {project.title}
                </h3>
                <p className="font-sans text-body-md text-on-surface-variant">
                  {project.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section>
        <div className="bg-primary text-on-primary p-lg sm:p-xl rounded-2xl text-center space-y-md relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-accent/10 rounded-full -translate-y-1/2 translate-x-1/2"></div>
          <div className="absolute bottom-0 left-0 w-48 h-48 bg-primary-container/40 rounded-full translate-y-1/3 -translate-x-1/4"></div>
          
          <h2 className="font-display text-3xl font-semibold relative z-10">Interested in working together?</h2>
          <p className="font-sans text-body-lg text-primary-fixed-dim max-w-2xl mx-auto relative z-10 leading-relaxed">
            I am currently seeking internship or entry-level opportunities in Audit, Taxation, or General Accounting where I can apply my analytical skills.
          </p>
          <div className="flex justify-center pt-md relative z-10">
            <button 
              onClick={() => onNavigate('contact')}
              className="bg-accent text-primary px-xl py-md rounded-lg font-semibold hover:bg-accent-dark hover:text-on-primary transition-colors duration-300 cursor-pointer shadow-md"
            >
              Get In Touch
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
