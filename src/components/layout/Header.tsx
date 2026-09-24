import React, { useState, useEffect } from 'react';
import { LuminaLogo } from '../common/Logo';
import { 
  Menu, 
  X, 
  PhoneCall, 
  ChevronDown, 
  Store,
  Globe, 
  ShoppingCart, 
  Users, 
  Layers, 
  ShieldCheck, 
  Network,
  ArrowRight,
  Sparkles
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string, itemParam?: string) => void;
  onOpenContactModal: (defaultService?: string) => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenContactModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getSolutionIcon = (id: string) => {
    switch (id) {
      case 'pos-erp-systems': return <Store className="w-4 h-4 text-[#0067D9]" />;
      case 'ecommerce-solutions': return <ShoppingCart className="w-4 h-4 text-[#F43D78]" />;
      case 'website-development': return <Globe className="w-4 h-4 text-[#073B8F]" />;
      case 'cctv-security': return <ShieldCheck className="w-4 h-4 text-amber-500" />;
      case 'networking-services': return <Network className="w-4 h-4 text-[#7D3FB2]" />;
      case 'crm-systems': return <Users className="w-4 h-4 text-blue-500" />;
      default: return <Sparkles className="w-4 h-4 text-[#0067D9]" />;
    }
  };

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'solutions', label: 'Solutions', hasDropdown: true },
    { id: 'pos-erp', label: 'POS & ERP Hub' },
    { id: 'industries', label: 'Industries' },
    { id: 'pricing', label: 'Pricing' },
    { id: 'contact', label: 'Contact & WhatsApp' },
  ];

  const handleNavClick = (id: string) => {
    onNavigate(id);
    setMobileMenuOpen(false);
    setSolutionsDropdownOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-250 ${
        isScrolled
          ? 'bg-white/95 backdrop-blur-md shadow-[0_4px_20px_rgba(7,59,143,0.06)] border-b border-slate-100 py-3'
          : 'bg-white/80 backdrop-blur-sm border-b border-slate-100/80 py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Brand Logo */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067D9] rounded-lg p-1"
            aria-label="Lumina 360 Home"
          >
            <LuminaLogo size="sm" />
          </button>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.id}
                    className="relative"
                    onMouseEnter={() => setSolutionsDropdownOpen(true)}
                    onMouseLeave={() => setSolutionsDropdownOpen(false)}
                  >
                    <button
                      onClick={() => handleNavClick(item.id)}
                      className={`px-3 py-2 text-sm font-bold rounded-xl transition-all flex items-center gap-1.5 cursor-pointer focus:outline-none ${
                        activeSection === item.id
                          ? 'text-[#073B8F] bg-blue-50 border-2 border-[#0067D9]/30 shadow-2xs'
                          : 'text-slate-700 hover:text-[#0067D9] hover:bg-slate-50'
                      }`}
                    >
                      {activeSection === item.id && (
                        <span className="w-2 h-2 rounded-full bg-[#FFD21C] shadow-[0_0_6px_#FFD21C]" />
                      )}
                      {item.label}
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${solutionsDropdownOpen ? 'rotate-180 text-[#0067D9]' : 'text-slate-400'}`} />
                    </button>

                    {/* Solutions Dropdown Menu */}
                    {solutionsDropdownOpen && (
                      <div className="absolute top-full left-0 w-80 pt-2 z-50">
                        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-2.5">
                          <div className="text-[11px] font-semibold uppercase tracking-wider text-slate-400 px-3 py-1.5 border-b border-slate-100">
                            Core Technology Solutions
                          </div>
                          <div className="space-y-1 mt-1">
                            {SOLUTIONS_DATA.map((sol) => (
                              <button
                                key={sol.id}
                                onClick={() => {
                                  onNavigate('solutions', sol.id);
                                  setSolutionsDropdownOpen(false);
                                }}
                                className="w-full text-left p-2 rounded-lg hover:bg-slate-50 flex items-start gap-2.5 transition-colors cursor-pointer group"
                              >
                                <div className="p-1.5 rounded-md bg-slate-100/80 group-hover:bg-white group-hover:shadow-xs transition-colors shrink-0">
                                  {getSolutionIcon(sol.id)}
                                </div>
                                <div className="min-w-0">
                                  <div className="text-xs font-semibold text-slate-800 group-hover:text-[#0067D9] flex items-center justify-between">
                                    <span>{sol.title}</span>
                                    <ArrowRight className="w-3 h-3 opacity-0 group-hover:opacity-100 text-[#0067D9] transition-opacity shrink-0" />
                                  </div>
                                  <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                                    {sol.shortDesc}
                                  </p>
                                </div>
                              </button>
                            ))}
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-sm font-bold rounded-xl transition-all cursor-pointer flex items-center gap-1.5 focus:outline-none ${
                    activeSection === item.id
                      ? 'text-[#073B8F] bg-blue-50 border-2 border-[#0067D9]/30 shadow-2xs'
                      : 'text-slate-700 hover:text-[#0067D9] hover:bg-slate-50'
                  }`}
                >
                  {activeSection === item.id && (
                    <span className="w-2 h-2 rounded-full bg-[#FFD21C] shadow-[0_0_6px_#FFD21C]" />
                  )}
                  {item.label}
                </button>
              );
            })}
          </nav>

          {/* Action CTAs */}
          <div className="hidden sm:flex items-center gap-2.5">
            <button
              onClick={() => onNavigate('pricing')}
              className="text-xs font-bold text-slate-700 hover:text-[#0067D9] px-3 py-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Calculator
            </button>
            <button
              onClick={() => onOpenContactModal()}
              className="inline-flex items-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs md:text-sm font-black px-4 py-2.5 rounded-xl shadow-sm hover:shadow transition-all duration-150 cursor-pointer border-2 border-transparent hover:border-[#FFD21C]"
            >
              <PhoneCall className="w-4 h-4 text-[#FFD21C]" />
              <span>Get Free Quote</span>
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => onOpenContactModal()}
              className="sm:hidden bg-[#0067D9] text-white text-xs font-semibold px-3 py-1.5 rounded-md"
            >
              Contact
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 text-slate-700 hover:text-[#0067D9] hover:bg-slate-100 rounded-lg transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067D9]"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden fixed inset-x-0 top-full bg-white border-b border-slate-200 shadow-2xl px-5 py-6 max-h-[85vh] overflow-y-auto">
          <div className="space-y-1 pb-4 border-b border-slate-100">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-lg text-sm font-medium transition-colors flex items-center justify-between ${
                  activeSection === item.id
                    ? 'text-[#0067D9] bg-blue-50 font-bold'
                    : 'text-slate-800 hover:bg-slate-50'
                }`}
              >
                <span>{item.label}</span>
                {activeSection === item.id && (
                  <span className="w-2 h-2 rounded-full bg-[#0067D9]" />
                )}
              </button>
            ))}
          </div>

          <div className="pt-4 space-y-2.5">
            <div className="text-xs font-semibold text-slate-400 uppercase tracking-wider px-3">
              Explore Our Solutions
            </div>
            <div className="grid grid-cols-1 gap-1.5">
              {SOLUTIONS_DATA.map((sol) => (
                <button
                  key={sol.id}
                  onClick={() => {
                    onNavigate('solutions', sol.id);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full text-left p-2.5 rounded-lg bg-slate-50 hover:bg-blue-50/50 flex items-center gap-3 text-xs font-medium text-slate-700 transition-colors"
                >
                  <div className="p-1.5 rounded bg-white shadow-2xs">
                    {getSolutionIcon(sol.id)}
                  </div>
                  <span>{sol.title}</span>
                </button>
              ))}
            </div>

            <div className="pt-3">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContactModal();
                }}
                className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] text-white font-semibold py-3 rounded-xl shadow-sm text-sm"
              >
                <PhoneCall className="w-4 h-4" />
                <span>Talk to Lumina 360</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
