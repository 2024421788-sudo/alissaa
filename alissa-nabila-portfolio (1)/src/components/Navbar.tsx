import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE } from '../data';
import Icon from './Icon';

interface NavbarProps {
  activeTab: string;
  onTabChange: (tab: string) => void;
}

export default function Navbar({ activeTab, onTabChange }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'about', label: 'About' },
    { id: 'education', label: 'Education' },
    { id: 'skills', label: 'Skills' },
    { id: 'projects', label: 'Projects' },
    { id: 'achievements', label: 'Achievements' },
    { id: 'contact', label: 'Contact' }
  ];

  const handleNavClick = (tabId: string) => {
    onTabChange(tabId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <header className="sticky top-0 z-40 bg-white/95 border-b border-outline-variant backdrop-blur-md">
        <div className="max-w-max-width mx-auto px-margin h-16 flex items-center justify-between">
          {/* Logo Brand */}
          <button 
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-sm group cursor-pointer text-left"
          >
            <div className="w-9 h-9 rounded bg-primary flex items-center justify-center text-white font-display font-bold text-lg shadow-sm group-hover:bg-accent-dark transition-colors duration-150 select-none">
              AN
            </div>
            <div>
              <span className="font-display font-bold text-primary tracking-tight text-base sm:text-lg group-hover:text-accent transition-colors block">
                {PROFILE.shortTitle}
              </span>
              <span className="text-[10px] font-medium text-secondary uppercase tracking-widest block -mt-1">
                Portfolio Ledger
              </span>
            </div>
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-xs">
            {navItems.map(item => {
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`relative px-sm py-2 rounded-lg font-display text-sm font-semibold transition-all duration-150 cursor-pointer ${
                    isActive ? 'text-primary' : 'text-on-surface-variant hover:text-primary hover:bg-surface-container-low'
                  }`}
                >
                  {item.label}
                  {isActive && (
                    <motion.div 
                      className="absolute bottom-0 left-2 right-2 h-[2px] bg-accent rounded-full"
                      layoutId="activeTabUnderline"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              );
            })}
          </nav>

          {/* Mobile Navigation Trigger Button */}
          <div className="flex lg:hidden items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-sm rounded-lg text-primary hover:bg-surface-container-low transition-colors duration-150 cursor-pointer"
              aria-label="Toggle menu"
            >
              <Icon name={isOpen ? 'Shield' : 'menu'} size={24} className={isOpen ? 'hidden' : ''} />
              {isOpen && <span className="font-bold text-sm px-1 font-sans">✕</span>}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Overlay navigation */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div 
              className="fixed inset-0 top-16 z-30 bg-primary/20 backdrop-blur-xs lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
            />

            {/* Menu panel */}
            <motion.div 
              className="fixed right-0 top-16 bottom-0 w-64 bg-white border-l border-outline-variant z-30 lg:hidden shadow-xl"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration: 0.25 }}
            >
              <div className="p-md space-y-sm flex flex-col">
                {navItems.map((item, idx) => {
                  const isActive = activeTab === item.id;
                  return (
                    <motion.button
                      key={item.id}
                      onClick={() => handleNavClick(item.id)}
                      className={`px-md py-sm rounded-lg text-left font-display text-base font-semibold cursor-pointer ${
                        isActive 
                          ? 'bg-primary/5 text-primary border-l-4 border-accent' 
                          : 'text-on-surface-variant hover:bg-surface-container-low'
                      }`}
                      initial={{ opacity: 0, x: 10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.04 }}
                    >
                      {item.label}
                    </motion.button>
                  );
                })}
                <div className="pt-lg mt-lg border-t border-outline-variant space-y-xs text-xs text-secondary px-md">
                  <p className="font-semibold text-primary uppercase tracking-widest">Active Status</p>
                  <p className="flex items-center gap-xs">
                    <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse"></span>
                    Available for Internships
                  </p>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
