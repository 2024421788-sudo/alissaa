import { PROFILE } from '../data';
import Icon from './Icon';

interface FooterProps {
  onTabChange: (tab: string) => void;
}

export default function Footer({ onTabChange }: FooterProps) {
  const handleLinkClick = (tabId: string) => {
    onTabChange(tabId);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-primary text-on-primary border-t border-white/10 mt-xl">
      <div className="max-w-max-width mx-auto px-margin py-lg sm:py-xl">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-lg items-start">
          {/* Brand block (colspan-5) */}
          <div className="md:col-span-5 space-y-sm">
            <div className="flex items-center gap-xs">
              <div className="w-8 h-8 rounded bg-white/10 flex items-center justify-center text-white font-display font-bold text-base">
                AN
              </div>
              <span className="font-display font-bold text-lg text-white">
                {PROFILE.shortTitle}
              </span>
            </div>
            <p className="text-sm opacity-85 leading-relaxed max-w-sm">
              Dedicated accounting honors student from Universiti Teknologi MARA, combining classical ledger methodologies with modern financial analytics.
            </p>
            <div className="flex items-center gap-xs text-xs opacity-75">
              <span className="w-2.5 h-2.5 bg-emerald-400 rounded-full"></span>
              <span>Open for Professional Internships (Selangor, KL, Pahang)</span>
            </div>
          </div>

          {/* Quick links block (colspan-3) */}
          <div className="md:col-span-3 space-y-sm">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">Navigation</h3>
            <ul className="space-y-xs text-sm">
              {['home', 'about', 'education', 'skills', 'projects', 'achievements', 'contact'].map(tab => (
                <li key={tab}>
                  <button 
                    onClick={() => handleLinkClick(tab)}
                    className="opacity-80 hover:opacity-100 hover:text-accent transition-colors cursor-pointer text-left capitalize"
                  >
                    {tab}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Direct channels block (colspan-4) */}
          <div className="md:col-span-4 space-y-sm">
            <h3 className="font-display font-semibold text-sm uppercase tracking-wider text-accent">Direct Contact</h3>
            <ul className="space-y-xs text-sm">
              <li className="flex items-center gap-xs">
                <Icon name="mail" size={16} className="text-accent flex-shrink-0" />
                <a href={`mailto:${PROFILE.email}`} className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  {PROFILE.email}
                </a>
              </li>
              <li className="flex items-center gap-xs">
                <Icon name="phone" size={16} className="text-accent flex-shrink-0" />
                <a href={`tel:${PROFILE.phone}`} className="opacity-80 hover:opacity-100 hover:text-accent transition-all">
                  {PROFILE.phone}
                </a>
              </li>
              <li className="flex items-center gap-xs">
                <Icon name="location_on" size={16} className="text-accent flex-shrink-0" />
                <span className="opacity-80">{PROFILE.location}</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Separator Line */}
        <div className="h-px bg-white/10 my-lg"></div>

        {/* Bottom Details copyright */}
        <div className="flex flex-col sm:flex-row justify-between items-center gap-sm text-xs opacity-75">
          <p>© {new Date().getFullYear()} {PROFILE.name}. All rights reserved.</p>
          <div className="flex gap-md font-mono">
            <span>Audit Excellence</span>
            <span>•</span>
            <span>Financial Integrity</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
