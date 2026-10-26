import React, { useState, useEffect } from 'react';
import { 
  X, 
  Store, 
  UtensilsCrossed, 
  Building2, 
  ExternalLink, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight, 
  Search,
  Layers,
  ChevronRight,
  ShieldCheck,
  Zap,
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
  defaultTab?: 'all' | 'pos' | 'erp';
}

export const RegisterChoiceModal: React.FC<RegisterChoiceModalProps> = ({
  isOpen,
  onClose,
  defaultTab = 'all'
}) => {
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
      className="fixed inset-0 z-[100] flex items-center justify-center p-3 sm:p-5 overflow-y-auto bg-slate-950/70 backdrop-blur-md animate-fadeIn"
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      role="dialog"
      aria-modal="true"
      aria-labelledby="register-modal-title"
    >
      <div className="relative w-full max-w-5xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden my-auto max-h-[92vh] flex flex-col">
        
        {/* Top Header Bar */}
        <div className="px-6 sm:px-8 pt-6 pb-4 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#073B8F] text-white flex items-center justify-between shrink-0 relative overflow-hidden">
          {/* Subtle Ambient Glow */}
          <div className="absolute -right-10 -top-10 w-44 h-44 bg-[#FFD21C]/25 rounded-full blur-2xl pointer-events-none" />
          <div className="absolute left-1/3 -bottom-10 w-40 h-40 bg-[#F43D78]/20 rounded-full blur-2xl pointer-events-none" />

          <div className="relative z-10 pr-6">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/15 text-[#FFD21C] text-xs font-black uppercase tracking-wider mb-2 border border-white/20">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Get Started in Minutes</span>
            </div>
            <h2 id="register-modal-title" className="text-xl sm:text-2xl md:text-3xl font-black text-white tracking-tight">
              Select Your Registration Portal
            </h2>
            <p className="text-xs sm:text-sm text-blue-100 mt-1 max-w-2xl font-normal">
              Choose the dedicated system built specifically for your operation type.
            </p>
          </div>

          <button
            onClick={onClose}
            className="relative z-10 p-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white transition-colors cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FFD21C] shrink-0"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="p-5 sm:p-8 overflow-y-auto space-y-6">
          
          {/* Two Main Option Cards */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch">
            
            {/* OPTION 1: POS For Bar & Restaurant */}
            <div className="lg:col-span-5 rounded-3xl border-2 border-amber-300 bg-gradient-to-b from-amber-50/60 via-white to-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#FFD21C] text-slate-950 text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-2xs">
                Hospitality Specialized
              </div>

              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD21C] text-slate-950 flex items-center justify-center font-bold shadow-xs">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      POS for Bar & Restaurant
                    </h3>
                    <p className="text-xs text-amber-900 font-semibold">
                      Fast Orders, Drinks & Kitchen Sync
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-4 leading-relaxed">
                  Tailored workflow for <strong>Bars, Lounges, Nightclubs, Fine Dining, Fast Food & Cafés</strong>.
                </p>

                <div className="space-y-2.5 text-xs text-slate-700 bg-white/80 rounded-2xl p-4 border border-amber-200/70 mb-5">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Kitchen Order Tickets (KOT)</strong> sent straight to kitchen displays/printers.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Waiter Mobile Ordering:</strong> Take orders tableside on tablets or phones.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Bar Dispense Controls:</strong> Bottle, shot & recipe deduction with zero leakage.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Instant Bill Splitting & M-Pesa STK:</strong> Guests pay together or individually.</span>
                  </div>
                </div>
              </div>

              <div>
                <a
                  href={POS_BAR_RESTAURANT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#073B8F] hover:bg-[#0067D9] text-white font-black text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all duration-150 cursor-pointer group"
                >
                  <span>Register Bar & Restaurant POS</span>
                  <ExternalLink className="w-4 h-4 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    pos.lumina360.tech/auth/register
                  </span>
                </div>
              </div>
            </div>

            {/* OPTION 2: Lumina ERP (All Other Businesses) */}
            <div className="lg:col-span-7 rounded-3xl border-2 border-[#0067D9] bg-gradient-to-b from-blue-50/70 via-white to-white p-6 shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow relative overflow-hidden">
              <div className="absolute top-0 right-0 bg-[#0067D9] text-white text-[10px] font-black uppercase tracking-wider px-3.5 py-1 rounded-bl-xl shadow-2xs">
                Full Business Operations
              </div>

              <div>
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-12 h-12 rounded-2xl bg-[#0067D9] text-white flex items-center justify-center font-bold shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-lg sm:text-xl font-black text-slate-900 leading-snug">
                      Lumina360 ERP (All Businesses)
                    </h3>
                    <p className="text-xs text-[#0067D9] font-bold">
                      "We'll match the right modules to your business"
                    </p>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-slate-600 mb-3 leading-relaxed">
                  Everything you need for complete commerce, inventory, procurement, production, accounting, and multi-branch operations.
                </p>

                {/* Search Bar for Industry Categories */}
                <div className="relative mb-3">
                  <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" />
                  <input
                    type="text"
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    placeholder="Search your business type (e.g. Pharmacy, Wholesale, Supermarket)..."
                    className="w-full pl-9 pr-3 py-2 text-xs rounded-xl border border-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-[#0067D9] transition-all"
                  />
                  {searchQuery && (
                    <button
                      onClick={() => setSearchQuery('')}
                      className="absolute right-2.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 text-xs"
                    >
                      Clear
                    </button>
                  )}
                </div>

                {/* Compact Grid of Business Modules */}
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 max-h-48 overflow-y-auto pr-1 mb-4 p-1">
                  {filteredCategories.map((cat) => (
                    <div
                      key={cat.id}
                      onClick={() => setSelectedCategory(cat.id === selectedCategory ? null : cat.id)}
                      className={`p-2.5 rounded-xl border text-left cursor-pointer transition-all ${
                        selectedCategory === cat.id
                          ? 'border-[#0067D9] bg-blue-100/70 shadow-xs ring-1 ring-[#0067D9]'
                          : 'border-slate-200/80 bg-white hover:border-blue-300 hover:bg-blue-50/50'
                      }`}
                    >
                      <div className="flex items-center justify-between gap-1">
                        <span className="text-xs font-bold text-slate-900 truncate">
                          {cat.name}
                        </span>
                        {cat.badge && (
                          <span className="text-[9px] font-bold px-1.5 py-0.5 rounded-md bg-slate-100 text-slate-600 shrink-0">
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
                    <div className="col-span-3 py-4 text-center text-xs text-slate-400">
                      No matching category found, but Lumina ERP covers any custom workflow!
                    </div>
                  )}
                </div>

                {/* Selected Category Highlight Detail */}
                {selectedCategory && (
                  <div className="bg-blue-50 border border-blue-200 rounded-xl p-3 mb-4 text-xs text-slate-700 flex items-start gap-2.5 animate-fadeIn">
                    <CheckCircle2 className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                    <div>
                      <span className="font-bold text-[#073B8F]">
                        {ERP_BUSINESS_CATEGORIES.find(c => c.id === selectedCategory)?.name}:
                      </span>{' '}
                      {ERP_BUSINESS_CATEGORIES.find(c => c.id === selectedCategory)?.description}
                    </div>
                  </div>
                )}
              </div>

              <div>
                <a
                  href={ERP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-black text-sm px-5 py-3.5 rounded-2xl shadow-md transition-all duration-150 cursor-pointer group"
                >
                  <span>Register Lumina ERP (All Businesses)</span>
                  <ExternalLink className="w-4 h-4 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-2 flex items-center justify-center gap-2">
                  <span className="text-[11px] text-slate-400 font-mono">
                    erp.lumina360.tech/register
                  </span>
                  <span className="text-slate-300 text-xs">·</span>
                  <span className="text-[11px] text-emerald-600 font-bold">
                    Instant Setup
                  </span>
                </div>
              </div>
            </div>

          </div>

          {/* Quick Guidance Footer Note */}
          <div className="bg-slate-50 border border-slate-200 rounded-2xl p-4 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-slate-600">
            <div className="flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
              <span>
                Need help deciding which system fits your setup? Our engineering specialists are available via live WhatsApp.
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
