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
  Sparkles,
  UtensilsCrossed,
  Building2,
  ExternalLink
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { 
  POS_BAR_RESTAURANT_URL, 
  ERP_REGISTRATION_URL 
} from '../../data/registrationData';

interface HeaderProps {
  activeSection: string;
  onNavigate: (sectionId: string, itemParam?: string) => void;
  onOpenContactModal: (defaultService?: string) => void;
  onOpenRegisterModal: () => void;
}

export const Header: React.FC<HeaderProps> = ({
  activeSection,
  onNavigate,
  onOpenContactModal,
  onOpenRegisterModal,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [solutionsDropdownOpen, setSolutionsDropdownOpen] = useState(false);
  const [registerDropdownOpen, setRegisterDropdownOpen] = useState(false);

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
            className="flex items-center gap-2 group cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#0067D9] rounded-xl p-1 transition-all"
            aria-label="Lumina 360 Home"
          >
            <LuminaLogo size="md" />
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

          {/* Action CTAs on the Right */}
          <div className="hidden sm:flex items-center gap-2">
            <button
              onClick={() => onNavigate('pricing')}
              className="text-xs font-bold text-slate-700 hover:text-[#0067D9] px-2.5 py-2 rounded-xl hover:bg-blue-50 transition-colors cursor-pointer"
            >
              Calculator
            </button>
            <button
              onClick={() => onOpenContactModal()}
              className="inline-flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold px-3 py-2 rounded-xl transition-colors cursor-pointer"
            >
              <PhoneCall className="w-3.5 h-3.5 text-[#0067D9]" />
              <span>Get Quote</span>
            </button>

            {/* REGISTER / SIGN UP BUTTON WITH DROPDOWN */}
            <div 
              className="relative"
              onMouseEnter={() => setRegisterDropdownOpen(true)}
              onMouseLeave={() => setRegisterDropdownOpen(false)}
            >
              <button
                onClick={onOpenRegisterModal}
                className="inline-flex items-center gap-2 bg-gradient-to-r from-[#0067D9] to-[#073B8F] hover:from-[#073B8F] hover:to-[#0067D9] text-white text-xs md:text-sm font-black px-4 py-2.5 rounded-xl shadow-md hover:shadow-lg transition-all duration-150 cursor-pointer border-2 border-[#FFD21C]/70 hover:border-[#FFD21C]"
                aria-expanded={registerDropdownOpen}
                aria-haspopup="true"
              >
                <Sparkles className="w-3.5 h-3.5 text-[#FFD21C]" />
                <span>Register</span>
                <ChevronDown className={`w-3.5 h-3.5 text-white/80 transition-transform duration-200 ${registerDropdownOpen ? 'rotate-180 text-[#FFD21C]' : ''}`} />
              </button>

              {/* Register Portal Dropdown Menu */}
              {registerDropdownOpen && (
                <div className="absolute top-full right-0 w-84 pt-2 z-50">
                  <div className="bg-white rounded-2xl shadow-2xl border border-slate-200/90 p-3 overflow-hidden animate-fadeIn">
                    <div className="flex items-center justify-between pb-2 border-b border-slate-100 px-1">
                      <span className="text-[11px] font-black uppercase tracking-wider text-slate-500">
                        Choose System to Register
                      </span>
                      <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">
                        Instant Setup
                      </span>
                    </div>

                    <div className="space-y-1.5 mt-2">
                      {/* Option 1: POS Bar & Restaurant */}
                      <a
                        href={POS_BAR_RESTAURANT_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-amber-200/80 bg-gradient-to-r from-amber-50/70 to-white hover:border-amber-400 hover:shadow-xs transition-all flex items-start gap-3 cursor-pointer group block"
                      >
                        <div className="p-2 rounded-lg bg-[#FFD21C] text-slate-950 font-bold shrink-0">
                          <UtensilsCrossed className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-900 group-hover:text-[#0067D9]">
                              POS for Bar & Restaurant
                            </span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0067D9]" />
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            Kitchen orders, waiter tablets & bar counters
                          </p>
                        </div>
                      </a>

                      {/* Option 2: Lumina ERP */}
                      <a
                        href={ERP_REGISTRATION_URL}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2.5 rounded-xl border border-blue-200/80 bg-gradient-to-r from-blue-50/70 to-white hover:border-[#0067D9] hover:shadow-xs transition-all flex items-start gap-3 cursor-pointer group block"
                      >
                        <div className="p-2 rounded-lg bg-[#0067D9] text-white font-bold shrink-0">
                          <Building2 className="w-4 h-4" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center justify-between">
                            <span className="text-xs font-black text-slate-900 group-hover:text-[#0067D9]">
                              Lumina360 ERP (All Businesses)
                            </span>
                            <ExternalLink className="w-3 h-3 text-slate-400 group-hover:text-[#0067D9]" />
                          </div>
                          <p className="text-[11px] text-slate-500 line-clamp-1 mt-0.5">
                            We'll match the right modules to your business
                          </p>
                        </div>
                      </a>
                    </div>

                    {/* View all categories modal trigger */}
                    <button
                      onClick={() => {
                        setRegisterDropdownOpen(false);
                        onOpenRegisterModal();
                      }}
                      className="w-full mt-2.5 pt-2 border-t border-slate-100 text-center text-xs font-bold text-[#0067D9] hover:text-[#073B8F] flex items-center justify-center gap-1 cursor-pointer"
                    >
                      <span>Explore all 15+ business module presets</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Mobile Actions Button Group */}
          <div className="flex items-center gap-1.5 lg:hidden">
            <button
              onClick={onOpenRegisterModal}
              className="bg-gradient-to-r from-[#0067D9] to-[#073B8F] text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xs flex items-center gap-1 border border-[#FFD21C]/60"
            >
              <Sparkles className="w-3 h-3 text-[#FFD21C]" />
              <span>Register</span>
            </button>
            <button
              onClick={() => onOpenContactModal()}
              className="sm:hidden bg-slate-100 text-slate-800 text-xs font-semibold px-2.5 py-1.5 rounded-lg"
            >
              Quote
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
          
          {/* Quick Register Portal on Mobile */}
          <div className="bg-gradient-to-r from-blue-50 to-amber-50 rounded-2xl p-3.5 border border-blue-200/80 mb-4 space-y-2">
            <div className="text-[11px] font-black uppercase text-slate-700 flex items-center justify-between">
              <span>Direct System Registration</span>
              <span className="text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded-md text-[10px]">Instant</span>
            </div>
            <div className="grid grid-cols-1 gap-2">
              <a
                href={POS_BAR_RESTAURANT_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-amber-300 text-xs font-bold text-slate-900 shadow-2xs"
              >
                <span className="flex items-center gap-2">
                  <UtensilsCrossed className="w-4 h-4 text-amber-600" />
                  <span>POS for Bar & Restaurant</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
              <a
                href={ERP_REGISTRATION_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-white p-2.5 rounded-xl border border-blue-300 text-xs font-bold text-slate-900 shadow-2xs"
              >
                <span className="flex items-center gap-2">
                  <Building2 className="w-4 h-4 text-[#0067D9]" />
                  <span>Lumina ERP (All Businesses)</span>
                </span>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400" />
              </a>
            </div>
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenRegisterModal();
              }}
              className="w-full text-center text-[11px] font-bold text-[#0067D9] pt-1 block"
            >
              View all 15+ business module options →
            </button>
          </div>

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
