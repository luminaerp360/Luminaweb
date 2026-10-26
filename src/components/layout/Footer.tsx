import React from 'react';
import { LuminaLogo } from '../common/Logo';
import { 
  Mail, 
  PhoneCall, 
  MapPin, 
  ArrowUp, 
  ShieldCheck, 
  Globe 
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { INDUSTRIES_DATA } from '../../data/industriesData';

import { 
  POS_BAR_RESTAURANT_URL, 
  ERP_REGISTRATION_URL 
} from '../../data/registrationData';

interface FooterProps {
  onNavigate: (sectionId: string, itemParam?: string) => void;
  onOpenLegalModal: (docType: 'privacy' | 'terms' | 'cookies') => void;
  onOpenRegisterModal?: () => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavigate,
  onOpenLegalModal,
  onOpenRegisterModal,
}) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#073B8F] text-white pt-16 pb-12 border-t border-blue-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-column Footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-blue-800/80">
          
          {/* Col 1: Brand & Identity (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <button
              onClick={() => onNavigate('home')}
              className="focus:outline-none focus-visible:ring-2 focus-visible:ring-white rounded-xl p-1 text-left inline-block transition-transform hover:scale-102"
              aria-label="Lumina 360"
            >
              <LuminaLogo variant="light" size="md" animated={true} />
            </button>
            <p className="text-xs sm:text-sm text-blue-100/80 leading-relaxed max-w-sm">
              Lumina 360 is an enterprise technology partner engineering custom business systems, digital commerce engines, enterprise CCTV surveillance, and high-density networking infrastructures.
            </p>

            <div className="space-y-2 pt-2 text-xs text-blue-200">
              <div className="flex items-center gap-2">
                <PhoneCall className="w-3.5 h-3.5 text-[#FFD21C]" />
                <a href="tel:+254741377463" className="hover:text-white transition-colors font-semibold">
                  +254 741 377 463
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#FFD21C]" />
                <a href="mailto:support@eco360.co.ke" className="hover:text-white transition-colors">
                  support@eco360.co.ke
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#FFD21C]" />
                <span>Nairobi, Kenya · East Africa Operations</span>
              </div>
            </div>
          </div>

          {/* Col 2: Solutions (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD21C]">
              Technology Solutions
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/90">
              {SOLUTIONS_DATA.map((sol) => (
                <li key={sol.id}>
                  <button
                    onClick={() => onNavigate('solutions', sol.id)}
                    className="hover:text-white hover:underline transition-colors cursor-pointer text-left"
                  >
                    {sol.title}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Industries (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD21C]">
              Sectors & Industries
            </h4>
            <div className="grid grid-cols-2 gap-x-2 gap-y-1.5 text-xs text-blue-100/90">
              {INDUSTRIES_DATA.map((ind) => (
                <button
                  key={ind.id}
                  onClick={() => onNavigate('industries', ind.id)}
                  className="hover:text-white hover:underline transition-colors cursor-pointer text-left truncate"
                >
                  {ind.name.split('&')[0]}
                </button>
              ))}
            </div>
          </div>

          {/* Col 4: Navigation & Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-[#FFD21C]">
              Registration & Links
            </h4>
            <ul className="space-y-2 text-xs text-blue-100/90">
              <li>
                <a 
                  href={ERP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Register Lumina ERP</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              <li>
                <a 
                  href={POS_BAR_RESTAURANT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#FFD21C] hover:underline font-bold inline-flex items-center gap-1"
                >
                  <span>Register Bar & Restaurant POS</span>
                  <span className="text-[10px]">↗</span>
                </a>
              </li>
              {onOpenRegisterModal && (
                <li>
                  <button 
                    onClick={onOpenRegisterModal} 
                    className="hover:text-[#FFD21C] text-left cursor-pointer underline text-[11px] text-blue-200"
                  >
                    Match 15+ Business Modules
                  </button>
                </li>
              )}
              <li className="pt-1 border-t border-blue-800/60">
                <button onClick={() => onNavigate('home')} className="hover:text-white cursor-pointer">
                  Home
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pos-erp')} className="hover:text-white cursor-pointer">
                  POS & ERP Hub
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('pricing')} className="hover:text-white cursor-pointer">
                  Pricing Calculator
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contact')} className="hover:text-white cursor-pointer">
                  Contact Engineering
                </button>
              </li>
            </ul>
          </div>

        </div>

        {/* Bottom Bar: Legal & Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-blue-200/80">
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-4">
            <span>© {new Date().getFullYear()} Lumina 360. All rights reserved.</span>
            <span className="text-blue-400 hidden sm:inline" aria-hidden="true">·</span>
            <button
              onClick={() => onOpenLegalModal('privacy')}
              className="hover:text-white hover:underline cursor-pointer"
            >
              Privacy Policy
            </button>
            <button
              onClick={() => onOpenLegalModal('terms')}
              className="hover:text-white hover:underline cursor-pointer"
            >
              Terms of Service
            </button>
            <button
              onClick={() => onOpenLegalModal('cookies')}
              className="hover:text-white hover:underline cursor-pointer"
            >
              Cookie Policy
            </button>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1 text-xs text-blue-200 hover:text-white transition-colors cursor-pointer"
            aria-label="Back to top"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
};
