import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROJECTS, PROFILE } from '../../data';
import { Project } from '../../types';
import Icon from '../Icon';

export default function ProjectsView() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="space-y-xl py-base">
      {/* Header and Stats */}
      <section className="flex flex-col md:flex-row justify-between items-start md:items-end gap-md border-b border-outline-variant pb-base">
        <div>
          <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-full mb-xs inline-block">
            Casework
          </span>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-primary">Professional Projects & Case Studies</h1>
          <p className="text-body-md text-on-surface-variant max-w-lg mt-1">
            Simulations, client studies, and corporate preparation demonstrating strong analytical thinking.
          </p>
        </div>

        {/* Quick parameters */}
        <div className="flex gap-sm text-xs sm:text-sm text-on-surface-variant font-medium border border-outline-variant rounded-lg p-sm bg-white shadow-sm flex-wrap w-full md:w-auto justify-around">
          <div className="flex items-center gap-xs">
            <Icon name="verified" size={16} className="text-accent-dark" />
            <span>MFRS Aligned</span>
          </div>
          <div className="hidden sm:block text-outline-variant font-light">|</div>
          <div className="flex items-center gap-xs">
            <Icon name="verified_user" size={16} className="text-accent-dark" />
            <span>100% Audit Compliance</span>
          </div>
        </div>
      </section>

      {/* Bento Grid Projects Layout */}
      <section className="space-y-lg">
        {/* Row 1: Case Study (colspan-8) + Side Strategic Info (colspan-4) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-lg">
          {/* Main big project card */}
          <motion.div 
            className="lg:col-span-8 bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            onClick={() => setSelectedProject(PROJECTS[0])}
          >
            <div className="aspect-video relative overflow-hidden bg-surface-container-low border-b border-outline-variant">
              <img 
                src={PROJECTS[0].image} 
                alt={PROJECTS[0].title}
                className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                referrerPolicy="no-referrer"
              />
              <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
              <div className="absolute top-4 left-4 bg-primary text-on-primary font-bold text-xs px-sm py-1 rounded">
                Featured Case Analysis
              </div>
            </div>
            <div className="p-md sm:p-lg space-y-sm flex-1 flex flex-col justify-between">
              <div className="space-y-xs">
                <div className="flex flex-wrap gap-xs">
                  {PROJECTS[0].tags.map(tag => (
                    <span key={tag} className="px-sm py-0.5 bg-secondary-container/60 text-on-secondary-container text-xs rounded-full font-medium">
                      {tag}
                    </span>
                  ))}
                </div>
                <h3 className="font-display text-xl sm:text-2xl font-semibold text-primary group-hover:text-accent transition-colors duration-150">
                  {PROJECTS[0].title}
                </h3>
                <p className="font-sans text-sm sm:text-base text-on-surface-variant leading-relaxed">
                  {PROJECTS[0].description}
                </p>
              </div>
              <div className="flex items-center gap-xs text-sm font-semibold text-primary pt-md group-hover:text-accent transition-colors">
                <span>View Full Analysis Report</span>
                <Icon name="arrow_forward" size={14} />
              </div>
            </div>
          </motion.div>

          {/* Side strategic KPI card */}
          <motion.div 
            className="lg:col-span-4 bg-primary text-on-primary rounded-xl p-md sm:p-lg shadow-sm flex flex-col justify-between relative overflow-hidden"
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 rounded-full -translate-y-1/3 translate-x-1/3"></div>
            <div className="space-y-md relative z-10">
              <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center">
                <Icon name="verified" size={20} className="text-accent" />
              </div>
              <h3 className="font-display text-xl font-bold">Operational Efficiency</h3>
              <p className="text-sm opacity-90 leading-relaxed text-slate-100">
                All mock portfolio cases reflect high-yield internal audit strategies designed to identify structural inefficiencies and optimize organizational risk posture.
              </p>
            </div>

            <div className="border-t border-white/15 pt-md mt-sm space-y-xs relative z-10">
              <span className="text-label-sm font-semibold uppercase text-accent">Strategic Standards</span>
              <div className="flex items-center gap-xs">
                <Icon name="fact_check" size={16} className="text-accent-dark" />
                <span className="text-xs sm:text-sm font-medium">SOX compliance benchmarks</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Row 2: Projects 2 and 3 side-by-side */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-lg">
          {PROJECTS.slice(1).map((project, idx) => (
            <motion.div 
              key={project.id}
              className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 flex flex-col group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: (idx + 1) * 0.1 }}
              onClick={() => setSelectedProject(project)}
            >
              <div className="aspect-[16/9] relative overflow-hidden bg-surface-container-low border-b border-outline-variant">
                <img 
                  src={project.image} 
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-primary/10 group-hover:bg-primary/0 transition-colors"></div>
              </div>
              <div className="p-md sm:p-lg space-y-sm flex-1 flex flex-col justify-between">
                <div className="space-y-xs">
                  <div className="flex flex-wrap gap-xs">
                    {project.tags.map(tag => (
                      <span key={tag} className="px-sm py-0.5 bg-secondary-container/60 text-on-secondary-container text-xs rounded-full font-medium">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h3 className="font-display text-lg sm:text-xl font-semibold text-primary group-hover:text-accent transition-colors duration-150">
                    {project.title}
                  </h3>
                  <p className="font-sans text-sm text-on-surface-variant leading-relaxed">
                    {project.description}
                  </p>
                </div>
                <div className="flex items-center gap-xs text-sm font-semibold text-primary pt-md group-hover:text-accent transition-colors">
                  <span>View Case Metrics</span>
                  <Icon name="arrow_forward" size={14} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* CTA Box / PDF Request */}
      <section className="bg-surface-container-low rounded-xl p-md sm:p-lg border border-outline-variant flex flex-col sm:flex-row justify-between items-center gap-md">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="font-display text-lg sm:text-xl font-bold text-primary">Let's Discuss Your Financial Needs</h3>
          <p className="text-xs sm:text-sm text-on-surface-variant">Looking for a tailored strategy? Let's connect over coffee or MS Teams.</p>
        </div>
        <div className="flex flex-col sm:flex-row gap-sm w-full sm:w-auto">
          <a 
            href={`mailto:${PROFILE.email}?subject=Project Consultation Request - Alissa Nabila`}
            className="bg-primary text-on-primary px-md py-sm rounded-lg font-semibold text-xs text-center hover:bg-opacity-90 transition-colors duration-150 cursor-pointer"
          >
            Schedule a Meeting
          </a>
        </div>
      </section>

      {/* Project Details Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 bg-primary/60 backdrop-blur-xs flex items-center justify-center p-md z-50 overflow-y-auto">
            <motion.div 
              className="bg-white rounded-xl max-w-2xl w-full max-h-[90vh] overflow-y-auto border border-outline-variant shadow-2xl relative"
              initial={{ opacity: 0, scale: 0.95, y: 15 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 10 }}
              transition={{ duration: 0.3 }}
            >
              {/* Image banner inside modal */}
              <div className="aspect-video relative overflow-hidden bg-secondary-container">
                <img 
                  src={selectedProject.image} 
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button 
                  onClick={() => setSelectedProject(null)}
                  className="absolute top-4 right-4 bg-white/90 text-primary p-2 rounded-full hover:bg-white cursor-pointer hover:shadow transition-all duration-150"
                  aria-label="Close Modal"
                >
                  <Icon name="Shield" className="hidden" /> {/* prefetch trigger */}
                  <span className="font-bold text-sm select-none px-1">✕</span>
                </button>
              </div>

              {/* Core Details content inside modal */}
              <div className="p-md sm:p-lg space-y-md">
                <div className="space-y-xs">
                  <div className="flex flex-wrap gap-xs">
                    {selectedProject.tags.map(tag => (
                      <span key={tag} className="px-sm py-1 bg-primary/5 text-primary text-xs rounded-full font-semibold">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <h2 className="text-2xl font-semibold text-primary font-display">{selectedProject.title}</h2>
                </div>

                <div className="space-y-xs">
                  <h4 className="text-label-sm font-semibold text-secondary uppercase">Project Summary</h4>
                  <p className="text-sm sm:text-base text-on-surface-variant leading-relaxed">
                    {selectedProject.detailedDescription || selectedProject.description}
                  </p>
                </div>

                {selectedProject.stats && (
                  <div className="grid grid-cols-2 gap-sm bg-surface-container-low p-md rounded-lg border border-outline-variant">
                    {selectedProject.stats.map(stat => (
                      <div key={stat.label} className="text-center sm:text-left">
                        <span className="text-xs font-semibold text-secondary uppercase">{stat.label}</span>
                        <p className="text-lg font-bold text-primary mt-1">{stat.value}</p>
                      </div>
                    ))}
                  </div>
                )}

                {selectedProject.impact && (
                  <div className="bg-accent/10 p-md rounded-lg border border-accent/20 space-y-1">
                    <span className="text-xs font-semibold text-accent-dark uppercase block">Quantitative Impact & Resolution</span>
                    <p className="text-sm font-medium text-primary leading-relaxed">
                      {selectedProject.impact}
                    </p>
                  </div>
                )}

                <div className="flex justify-end pt-sm">
                  <button 
                    onClick={() => setSelectedProject(null)}
                    className="bg-primary text-on-primary px-md py-sm rounded-lg font-semibold text-xs hover:bg-opacity-90 transition-colors duration-150 cursor-pointer"
                  >
                    Close Case Review
                  </button>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
