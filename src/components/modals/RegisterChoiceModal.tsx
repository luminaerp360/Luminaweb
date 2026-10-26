import React, { useState, useEffect } from 'react';
import { 
  X, 
  UtensilsCrossed, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Search,
  ShieldCheck,
  Check
} from 'lucide-react';
import { 
  POS_BAR_RESTAURANT_URL, 
  ERP_REGISTRATION_URL, 
  ERP_BUSINESS_CATEGORIES 
} from '../../data/registrationData';

interface RegisterChoiceModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultTab?: 'pos' | 'erp';
}

export const RegisterChoiceModal: React.FC<RegisterChoiceModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'erp'
}) => {
  const [mobileTab, setMobileTab] = useState<'pos' | 'erp'>(defaultTab);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const filteredCategories = ERP_BUSINESS_CATEGORIES.filter(cat => 
    cat.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    cat.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    (cat.badge && cat.badge.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <div 
      className="fixed inset-0 z-[100] flex items-center justify-center p-2.5 sm:p-4 md:p-6 overflow-y-auto bg-slate-950/75 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-2xl sm:rounded-3xl shadow-2xl border border-slate-200 overflow-hidden my-auto max-h-[94vh] flex flex-col">
        
        {/* Top Header Bar - Compact on Mobile */}
        <div className="px-4 py-3 sm:px-8 sm:py-5 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#073B8F] text-white flex items-center justify-between shrink-0 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#FFD21C]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-10 w-40 h-40 bg-[#F43D78]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 pr-4 min-w-0">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/15 text-[#FFD21C] text-[10px] sm:text-xs font-black uppercase tracking-wider mb-1 sm:mb-1.5 border border-white/20">
              <Sparkles className="w-3 h-3 text-[#FFD21C]" />
              <span>Instant Online Setup</span>
            </div>
            <h2 id="register-modal-title" className="text-base sm:text-2xl md:text-3xl font-black text-white tracking-tight leading-snug truncate sm:overflow-visible">
              Choose Registration Portal
            </h2>
            <p className="text-[11px] sm:text-xs text-blue-100 hidden sm:block mt-0.5">
              Select the system built specifically for your business operations.
            </p>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21C] shrink-0"
            aria-label="Close modal"
          >
            <X className="w-4 h-4 sm:w-5 sm:h-5" />
          </button>
        </div>

        {/* Mobile Segmented Tab Switcher: Lumina ERP is FIRST */}
        <div className="lg:hidden p-2.5 bg-slate-100 border-b border-slate-200 shrink-0">
          <div className="grid grid-cols-2 gap-1.5 p-1 bg-white rounded-xl border border-slate-200 shadow-2xs">
            <button
              onClick={() => setMobileTab('erp')}
              className={`py-2 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                mobileTab === 'erp'
                  ? 'bg-[#0067D9] text-white shadow-xs font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Building2 className="w-3.5 h-3.5 text-[#FFD21C] shrink-0" />
              <span className="truncate">Lumina ERP</span>
            </button>
            <button
              onClick={() => setMobileTab('pos')}
              className={`py-2 px-2.5 rounded-lg text-xs font-bold flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                mobileTab === 'pos'
                  ? 'bg-amber-100 text-amber-950 shadow-xs border border-amber-300 font-black'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UtensilsCrossed className="w-3.5 h-3.5 text-amber-600 shrink-0" />
              <span className="truncate">Bar & Restaurant POS</span>
            </button>
          </div>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-3.5 sm:p-6 lg:p-8 overflow-y-auto space-y-4 sm:space-y-6">
          
          {/* Main Grid: Lumina ERP FIRST, Bar & Restaurant POS SECOND */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* OPTION 1 (FIRST): Lumina ERP (All Other Businesses) */}
            <div className={`lg:col-span-7 rounded-2xl sm:rounded-3xl border-2 border-[#0067D9] bg-gradient-to-b from-blue-50/50 via-white to-white p-4 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden ${
              mobileTab === 'erp' ? 'block' : 'hidden lg:flex'
            }`}>
              <div className="absolute top-0 right-0 bg-[#0067D9] text-white text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 py-0.5 sm:py-1 rounded-bl-xl shadow-2xs">
                Full Business Operations
              </div>

              <div>
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#0067D9] text-white flex items-center justify-center font-bold shadow-xs shrink-0">
                    <Building2 className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
                      Lumina360 ERP (All Businesses)
                    </h3>
                    <p className="text-[11px] sm:text-xs text-[#0067D9] font-bold">
                      "We'll match the right modules to your business"
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-2.5 leading-relaxed">
                  Tailored modules for retail, wholesale, pharmacy, supermarket, workshops, and general commerce.
                </p>

                {/* Search Bar for Industry Categories */}
                <div className="relative mb-2.5">
                  <Search className="w-3.5 h-3.5 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search business type (e.g. Pharmacy, Wholesale)..."
                    className="w-full pl-8 pr-12 py-1.5 sm:py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0067D9] transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-[11px] font-semibold"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Responsive Category Grid: 1 col on mobile, 2 cols on sm, 3 on md */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-1.5 sm:gap-2 max-h-48 sm:max-h-52 overflow-y-auto pr-1 mb-3 p-0.5">
                  {filteredCategories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                      className={`p-2 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedCategory === cat.id
                          ? 'border-[#0067D9] bg-blue-100/80 shadow-xs ring-1 ring-[#0067D9]'
                          : 'border-slate-200/90 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {cat.name}
                        </span>
                        {cat.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded bg-slate-100 text-slate-600 shrink-0">
                            {cat.badge}
                          </span>
                        )}
                      </div>
                      <p className="text-[10px] text-slate-500 line-clamp-1 mt-0.5">
                        {cat.description}
                      </p>
                    </div>
                  ))}
                  {filteredCategories.length === 0 && (
                    <div className="col-span-full py-4 text-center text-xs text-slate-400">
                      No matching category found, but Lumina ERP covers any custom workflow!
                    </div>
                  )}
                </div>

                {/* Selected Category Highlight Detail */}
                {selectedCategory && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-2.5 mb-3 text-xs text-slate-700 flex items-start gap-2 animate-fadeIn">
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#0067D9] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#073B8F]">
                        {ERP_BUSINESS_CATEGORIES.find(c => c.id === selectedCategory)?.name}:
                      </span>{' '}
                      {ERP_BUSINESS_CATEGORIES.find(c => c.id === selectedCategory)?.description}
                    </div>
                  </div>
                )}
              </div>

              <div className="pt-2">
                <a
                  href={ERP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-black text-xs sm:text-sm px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-md transition-all duration-150 cursor-pointer group"
                >
                  <span>Register Lumina ERP (All Businesses)</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-1.5 flex items-center justify-center gap-2">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    erp.lumina360.tech/register
                  </span>
                  <span className="text-slate-300 text-xs">·</span>
                  <span className="text-[10px] sm:text-[11px] text-emerald-600 font-bold">
                    Instant Setup
                  </span>
                </div>
              </div>
            </div>

            {/* OPTION 2 (SECOND): POS For Bar & Restaurant */}
            <div className={`lg:col-span-5 rounded-2xl sm:rounded-3xl border-2 border-amber-300 bg-gradient-to-b from-amber-50/50 via-white to-white p-4 sm:p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden ${
              mobileTab === 'pos' ? 'block' : 'hidden lg:flex'
            }`}>
              <div className="absolute top-0 right-0 bg-[#FFD21C] text-slate-950 text-[9px] sm:text-[10px] font-black uppercase tracking-wider px-3 py-0.5 sm:py-1 rounded-bl-xl shadow-2xs">
                Hospitality Specialized
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl sm:rounded-2xl bg-[#FFD21C] text-slate-950 flex items-center justify-center font-bold shadow-xs shrink-0">
                    <UtensilsCrossed className="w-5 h-5 sm:w-6 sm:h-6" />
                  </div>
                  <div>
                    <h3 className="text-base sm:text-xl font-black text-slate-900 leading-snug">
                      POS for Bar & Restaurant
                    </h3>
                    <p className="text-[11px] sm:text-xs text-amber-900 font-semibold">
                      Fast Orders, Drinks & Kitchen Sync
                    </p>
                  </div>
                </div>

                <p className="text-xs text-slate-600 mb-3 sm:mb-4 leading-relaxed">
                  Tailored workflow for <strong>Bars, Lounges, Nightclubs, Fine Dining, Fast Food & Cafés</strong>.
                </p>

                <div className="space-y-2 text-xs text-slate-700 bg-white/90 rounded-xl sm:rounded-2xl p-3 sm:p-4 border border-amber-200/80 mb-4">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Kitchen Order Tickets (KOT)</strong> sent straight to kitchen displays/printers.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Waiter Mobile Ordering:</strong> Take orders tableside on tablets or phones.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Bar Dispense Controls:</strong> Bottle, shot & recipe deduction with zero leakage.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Instant Bill Splitting & M-Pesa STK:</strong> Fast customer checkout at counter or table.</span>
                  </div>
                </div>
              </div>

              <div className="pt-2">
                <a
                  href={POS_BAR_RESTAURANT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#073B8F] hover:bg-[#0067D9] text-white font-black text-xs sm:text-sm px-4 py-3 sm:py-3.5 rounded-xl sm:rounded-2xl shadow-md transition-all duration-150 cursor-pointer group"
                >
                  <span>Register Bar & Restaurant POS</span>
                  <ExternalLink className="w-3.5 h-3.5 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-1.5">
                  <span className="text-[10px] sm:text-[11px] text-slate-400 font-mono">
                    pos.lumina360.tech/auth/register
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Guidance Footer Note */}
          <div className="bg-slate-50 border border-slate-200 rounded-xl sm:rounded-2xl p-3 sm:p-4 flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs text-slate-600">
            <div className="flex items-center gap-2 text-center sm:text-left">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 hidden sm:inline" />
              <span>
                Need guidance choosing? Our engineering team is available on WhatsApp.
              </span>
            </div>
            <a
              href="https://wa.me/254741377463?text=Hi%20Lumina360%20team,%20I%20need%20guidance%20on%20registering%20for%20POS%20or%20ERP%20for%20my%20business"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold text-[#0067D9] hover:underline whitespace-nowrap cursor-pointer shrink-0"
            >
              Ask on WhatsApp →
            </a>
          </div>

        </div>
      </div>
    </div>
  );
};
