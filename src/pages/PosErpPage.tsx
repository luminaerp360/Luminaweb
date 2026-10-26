import React, { useState } from 'react';
import { 
  Store, 
  Package, 
  FileText, 
  ShieldCheck, 
  CheckCircle2, 
  ArrowRight,
  Smartphone,
  Layers,
  Printer,
  Sparkles,
  PhoneCall,
  Barcode,
  RefreshCw,
  Zap,
  Check,
  Building2,
  Users,
  UtensilsCrossed,
  ExternalLink
} from 'lucide-react';
import { AnimatedPatternBg } from '../components/common/AnimatedPatternBg';
import { LuminaLogoMark } from '../components/common/Logo';
import { 
  POS_BAR_RESTAURANT_URL, 
  ERP_REGISTRATION_URL, 
  ERP_BUSINESS_CATEGORIES 
} from '../data/registrationData';

interface PosErpPageProps {
  onOpenContactModal: (service?: string) => void;
  onNavigate: (page: string) => void;
  onOpenRegisterModal?: () => void;
}

export const PosErpPage: React.FC<PosErpPageProps> = ({
  onOpenContactModal,
  onNavigate,
  onOpenRegisterModal,
}) => {
  const [activeTab, setActiveTab] = useState<'checkout' | 'inventory' | 'invoicing' | 'security'>('checkout');

  return (
    <div className="space-y-16 pb-20">
      
      {/* 1. HERO BANNER: Deep Blue with Yellow and Pink lighting & Animated Tech Grid */}
      <section className="animate-section-1 bg-gradient-to-r from-[#073B8F] via-[#0067D9] to-[#073B8F] text-white py-14 sm:py-20 relative overflow-hidden">
        {/* Animated Tech Pattern & Ambient Floating Orbs */}
        <AnimatedPatternBg 
          variant="hero-blue" 
          showGrid={true} 
          showOrbs={true} 
          showCircuit={true} 
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-white/15 backdrop-blur-xs text-[#FFC700] text-xs font-black uppercase tracking-wider mb-4 border border-white/20">
            <LuminaLogoMark size={20} animated={true} glow={true} />
            <span>Dedicated POS & ERP Systems Hub</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
            Next-Gen Point of Sale & <span className="text-[#FFD21C]">Custom ERP Software</span>
          </h1>

          <p className="mt-3 text-base sm:text-lg text-blue-100 max-w-3xl mx-auto font-normal">
            Turn slow checkout lines, missing inventory, and uncollected debts into automated, accurate business growth.
          </p>

          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            {onOpenRegisterModal && (
              <button
                onClick={onOpenRegisterModal}
                className="inline-flex items-center gap-2 bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 text-xs sm:text-sm font-black px-6 py-3.5 rounded-xl shadow-md transition-all duration-200 btn-interactive cursor-pointer border-2 border-white/40"
              >
                <Sparkles className="w-4 h-4 text-slate-950" />
                <span>Register Your Business Portal</span>
              </button>
            )}
            <button
              onClick={() => onOpenContactModal('POS & ERP Hardware Kit')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-6 py-3.5 rounded-xl border border-white/20 transition-all duration-200 btn-interactive cursor-pointer"
            >
              <PhoneCall className="w-4 h-4 text-[#FFD21C]" />
              <span>Get POS Kit Quotation</span>
            </button>
            <button
              onClick={() => onNavigate('pricing')}
              className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white text-xs sm:text-sm font-bold px-5 py-3.5 rounded-xl border border-white/20 transition-all duration-200 btn-interactive cursor-pointer"
            >
              <span>View Packages</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* DIRECT REGISTRATION PORTALS: Bar & Restaurant POS vs Lumina ERP */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 sm:-mt-10 relative z-20">
        <div className="bg-white rounded-3xl border-2 border-slate-200 shadow-xl p-6 sm:p-8 lg:p-10">
          
          <div className="text-center max-w-3xl mx-auto mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-black text-[#0067D9] mb-2">
              <Sparkles className="w-3.5 h-3.5 text-[#FFD21C]" />
              <span>Online Setup & Instant Sign Up</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F]">
              Direct Portal Registration
            </h2>
            <p className="mt-1.5 text-xs sm:text-sm text-slate-600">
              Select your business operation type below to begin instant registration on the dedicated cloud portal.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* PORTAL 1: POS for Bar & Restaurant */}
            <div className="lg:col-span-5 rounded-2xl border-2 border-amber-300 bg-gradient-to-b from-amber-50/50 via-white to-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#FFD21C] text-slate-950 flex items-center justify-center font-bold shadow-xs">
                    <UtensilsCrossed className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-amber-200 text-amber-950 px-3 py-1 rounded-full">
                    Bar & Restaurant POS
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  POS for Bar and Restaurant
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-2 leading-relaxed">
                  Engineered specifically for busy hospitality counters: <strong>Bars, Lounges, Nightclubs, Fast Food, and Restaurants</strong>.
                </p>

                <div className="mt-5 space-y-2.5 text-xs text-slate-700 bg-white rounded-xl p-4 border border-amber-200">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Table & Tab Orders:</strong> Fire orders directly to kitchen & dispense printers.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Bar Dispense Control:</strong> Shots, bottles & cocktails auto-deducted per pour.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Split Bills & M-Pesa STK:</strong> Fast customer checkout at counter or table.</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Cashier & Waiter Shifts:</strong> Zero discrepancy between cash and stock.</span>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={POS_BAR_RESTAURANT_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#073B8F] hover:bg-[#0067D9] text-white font-black text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition-all cursor-pointer group"
                >
                  <span>Register Bar & Restaurant POS</span>
                  <ExternalLink className="w-4 h-4 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-2 text-[11px] text-slate-400 font-mono">
                  pos.lumina360.tech/auth/register
                </div>
              </div>
            </div>

            {/* PORTAL 2: Lumina ERP (All Other Businesses) */}
            <div className="lg:col-span-7 rounded-2xl border-2 border-[#0067D9] bg-gradient-to-b from-blue-50/50 via-white to-white p-6 sm:p-7 flex flex-col justify-between shadow-xs hover:shadow-md transition-shadow">
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#0067D9] text-white flex items-center justify-center font-bold shadow-xs">
                    <Building2 className="w-6 h-6" />
                  </div>
                  <span className="text-[10px] font-black uppercase tracking-wider bg-blue-100 text-[#0067D9] px-3 py-1 rounded-full">
                    Universal ERP Suite
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-black text-slate-900 leading-tight">
                  Lumina360 ERP for Other Businesses
                </h3>
                <p className="text-xs sm:text-sm text-[#0067D9] font-bold mt-1">
                  "We'll match the right modules to your business"
                </p>
                <p className="text-xs text-slate-600 mt-1 leading-relaxed">
                  Turnkey operations software with pre-configured modules matching your exact business workflow:
                </p>

                {/* 15 Business Types Preset Grid */}
                <div className="mt-4 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 max-h-56 overflow-y-auto pr-1 p-1">
                  {ERP_BUSINESS_CATEGORIES.map((cat) => (
                    <div
                      key={cat.id}
                      className="p-2.5 rounded-xl border border-slate-200 bg-white hover:border-[#0067D9] hover:bg-blue-50/40 transition-colors"
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
                </div>

                <div className="mt-3 text-xs text-slate-500 flex items-center justify-between">
                  <span>✓ Plus custom manufacturing, logistics, and multi-branch operations.</span>
                </div>
              </div>

              <div className="pt-6">
                <a
                  href={ERP_REGISTRATION_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-black text-xs sm:text-sm px-5 py-3.5 rounded-xl shadow-md transition-all cursor-pointer group"
                >
                  <span>Register Lumina ERP (All Businesses)</span>
                  <ExternalLink className="w-4 h-4 text-[#FFD21C] group-hover:translate-x-0.5 transition-transform" />
                </a>
                <div className="text-center mt-2 text-[11px] text-slate-400 font-mono">
                  erp.lumina360.tech/register
                </div>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 2. HARDWARE ECOSYSTEM WITH PICTURES */}
      <section className="animate-section-2 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-10">
          <span className="text-xs font-black uppercase tracking-wider text-[#0067D9]">
            Rugged Commercial Equipment
          </span>
          <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F] mt-1">
            Complete Hardware Kits Ready for Your Counter
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Tested for busy retail shops, supermarkets, wholesale depots, and agrovet counters.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          {/* Hardware Item 1 */}
          <div className="bg-white rounded-2xl border-2 border-blue-200 overflow-hidden shadow-sm card-hover-effect">
            <div className="h-40 w-full bg-slate-100 overflow-hidden">
              <img
                src="/images/kenyan-supermarket-pos.jpg"
                alt="Kenyan Touchscreen POS Terminal"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-[#0067D9] uppercase tracking-wider">Terminal</span>
              <h3 className="font-extrabold text-sm text-slate-900">Touchscreen Terminal</h3>
              <p className="text-xs text-slate-600">
                15.6" capacitive multi-touch screen with spill-resistant casing and customer display.
              </p>
            </div>
          </div>

          {/* Hardware Item 2 */}
          <div className="bg-white rounded-2xl border-2 border-pink-200 overflow-hidden shadow-sm card-hover-effect">
            <div className="h-40 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1556740749-887f6717d7e4?auto=format&fit=crop&w=600&q=80"
                alt="Barcode Scanner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-[#F43D78] uppercase tracking-wider">Scanner</span>
              <h3 className="font-extrabold text-sm text-slate-900">1D / 2D Barcode Scanner</h3>
              <p className="text-xs text-slate-600">
                Omni-directional or handheld laser scanner. Reads damaged labels and phone screens instantly.
              </p>
            </div>
          </div>

          {/* Hardware Item 3 */}
          <div className="bg-white rounded-2xl border-2 border-purple-200 overflow-hidden shadow-sm card-hover-effect">
            <div className="h-40 w-full bg-slate-100 overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80"
                alt="Thermal Receipt Printer"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-[#7D3FB2] uppercase tracking-wider">Printer</span>
              <h3 className="font-extrabold text-sm text-slate-900">80mm Thermal Printer</h3>
              <p className="text-xs text-slate-600">
                High-speed 250mm/s auto-cutter printer. No ink required, with USB, LAN & Bluetooth.
              </p>
            </div>
          </div>

          {/* Hardware Item 4 */}
          <div className="bg-white rounded-2xl border-2 border-amber-300 overflow-hidden shadow-sm card-hover-effect">
            <div className="h-40 w-full bg-slate-100 overflow-hidden">
              <img
                src="/images/kenyan-warehouse-erp.jpg"
                alt="Kenyan Warehouse Mobile PDA & Inventory Scanner"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="p-4 space-y-1.5">
              <span className="text-[10px] font-bold text-amber-700 uppercase tracking-wider">Accessories</span>
              <h3 className="font-extrabold text-sm text-slate-900">Cash Drawer & Mobile PDA</h3>
              <p className="text-xs text-slate-600">
                Heavy steel spring-loaded cash drawer with RJ11 auto-trigger and handheld wireless stock taker.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 3. INTERACTIVE SOFTWARE SIMULATOR: 4 Colorful Modules */}
      <section className="animate-section-3 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-3xl border-2 border-slate-200 p-6 sm:p-10 shadow-lg">
          
          <div className="text-center max-w-2xl mx-auto mb-8">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 text-[#0067D9] text-xs font-bold mb-2">
              <Zap className="w-3.5 h-3.5 text-[#FFD21C]" />
              <span>Live Software Modules</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-[#073B8F]">
              Experience the ERP Dashboard
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 mt-1">
              Click through the tabs below to test each core business capability.
            </p>
          </div>

          {/* 4 Interactive Colored Tabs */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5 mb-8">
            <button
              onClick={() => setActiveTab('checkout')}
              className={`p-3 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-200 btn-interactive cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'checkout'
                  ? 'bg-[#0067D9] text-white border-[#0067D9] shadow-md scale-102'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Store className="w-4 h-4" />
              <span>1. POS Checkout</span>
            </button>

            <button
              onClick={() => setActiveTab('inventory')}
              className={`p-3 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-200 btn-interactive cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'inventory'
                  ? 'bg-[#F43D78] text-white border-[#F43D78] shadow-md scale-102'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <Package className="w-4 h-4" />
              <span>2. Multi-Store Stock</span>
            </button>

            <button
              onClick={() => setActiveTab('invoicing')}
              className={`p-3 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-200 btn-interactive cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'invoicing'
                  ? 'bg-[#7D3FB2] text-white border-[#7D3FB2] shadow-md scale-102'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <FileText className="w-4 h-4" />
              <span>3. Invoices & Receipts</span>
            </button>

            <button
              onClick={() => setActiveTab('security')}
              className={`p-3 rounded-2xl border-2 font-bold text-xs sm:text-sm transition-all duration-200 btn-interactive cursor-pointer flex items-center justify-center gap-2 ${
                activeTab === 'security'
                  ? 'bg-amber-500 text-white border-amber-500 shadow-md scale-102'
                  : 'bg-slate-50 border-slate-200 text-slate-700 hover:bg-slate-100'
              }`}
            >
              <ShieldCheck className="w-4 h-4" />
              <span>4. Staff Role Security</span>
            </button>
          </div>

          {/* Active Tab Screen with Smooth Animated Transition */}
          <div key={activeTab} className="animate-tab-content">
            {/* Module Screen 1: POS Checkout Capabilities */}
            {activeTab === 'checkout' && (
            <div className="bg-[#F5F8FC] rounded-2xl p-6 sm:p-8 border-2 border-blue-200 space-y-6">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div>
                  <h3 className="text-xl font-black text-[#073B8F] flex items-center gap-2">
                    <Store className="w-5 h-5 text-[#0067D9]" />
                    <span>POS Checkout & M-Pesa Integration</span>
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-600 mt-1">
                    High-speed barcode ringing, automated mobile money matching, and seamless cashier shift audits.
                  </p>
                </div>
                <span className="self-start sm:self-auto text-xs font-bold bg-blue-100 text-[#0067D9] px-3 py-1 rounded-full shrink-0">
                  Ready for Counter
                </span>
              </div>

              {/* 4 Clean Feature Cards */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                    <Barcode className="w-4 h-4 text-[#0067D9]" />
                    <span>Rapid Barcode & Item Lookup</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Omni-directional laser scanning with instant SKU lookup, multi-pack pricing, and customizable quick-pick favorites for items without barcodes.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                    <Smartphone className="w-4 h-4 text-emerald-600" />
                    <span>Automated M-Pesa STK Push</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    The cashier taps M-Pesa and the exact bill amount is pushed instantly to the customer's phone for PIN prompt. Auto-reconciled with zero manual typing errors.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                    <Printer className="w-4 h-4 text-purple-600" />
                    <span>80mm Thermal Receipt & E-TIMS</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Auto-cutter receipt printing with store branding, custom promotional footer, itemized VAT tax breakdown, and KRA E-TIMS compliance.
                  </p>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="flex items-center gap-2 text-xs font-black text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-amber-600" />
                    <span>Cashier Shift & Float Audits</span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    Opening float management, midday cash drops, cashier handover reports, and end-of-day Z-readings to prevent counter shortages.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-between pt-2 border-t border-slate-200 gap-3">
                <span className="text-xs text-slate-500 font-medium">
                  Compatible with all touch terminals, USB/LAN barcode scanners, and RJ11 cash drawers.
                </span>
                <button
                  onClick={() => onOpenContactModal('POS Checkout Station & Software')}
                  className="w-full sm:w-auto px-5 py-2.5 bg-[#0067D9] hover:bg-[#073B8F] text-white font-bold text-xs rounded-xl transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <PhoneCall className="w-4 h-4 text-[#FFD21C]" />
                  <span>Get POS Station Quote</span>
                </button>
              </div>
            </div>
          )}

          {/* Module Screen 2: Inventory */}
          {activeTab === 'inventory' && (
            <div className="bg-[#F5F8FC] rounded-2xl p-6 border-2 border-pink-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#073B8F]">Central Multi-Branch Inventory</h3>
                  <p className="text-xs text-slate-600">Sync stock in real time between your main warehouse and retail stores.</p>
                </div>
                <span className="text-xs font-bold bg-pink-100 text-[#F43D78] px-3 py-1 rounded-full">
                  Live Stock Ledger
                </span>
              </div>

              <div className="bg-white rounded-xl border border-slate-200 overflow-hidden">
                <table className="w-full text-left text-xs">
                  <thead className="bg-slate-50 text-slate-600 font-bold border-b border-slate-200">
                    <tr>
                      <th className="p-3">SKU / Item</th>
                      <th className="p-3">Main Warehouse</th>
                      <th className="p-3">Store Branch A</th>
                      <th className="p-3">Store Branch B</th>
                      <th className="p-3 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-100 text-slate-800">
                    <tr>
                      <td className="p-3 font-bold">Grade 1 Maize Flour 2kg</td>
                      <td className="p-3">1,450 pcs</td>
                      <td className="p-3">120 pcs</td>
                      <td className="p-3">85 pcs</td>
                      <td className="p-3 text-right"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">Optimal</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Cooking Oil 5 Litres</td>
                      <td className="p-3">820 pcs</td>
                      <td className="p-3 text-amber-700 font-bold">14 pcs (Low)</td>
                      <td className="p-3">40 pcs</td>
                      <td className="p-3 text-right"><span className="text-amber-800 bg-amber-100 px-2 py-0.5 rounded font-bold">Reorder Alert</span></td>
                    </tr>
                    <tr>
                      <td className="p-3 font-bold">Bar Soap Multi-Pack</td>
                      <td className="p-3">3,200 pcs</td>
                      <td className="p-3">210 pcs</td>
                      <td className="p-3">190 pcs</td>
                      <td className="p-3 text-right"><span className="text-emerald-700 bg-emerald-100 px-2 py-0.5 rounded font-bold">Optimal</span></td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="flex items-center justify-between text-xs pt-2">
                <span className="text-slate-500">Automated purchase orders generated when threshold drops below 20 units.</span>
                <button
                  onClick={() => onOpenContactModal('POS & ERP Multi-Branch Inventory')}
                  className="px-4 py-2 bg-[#F43D78] hover:bg-pink-700 text-white font-bold rounded-xl transition-colors cursor-pointer"
                >
                  Configure Stock Sync
                </button>
              </div>
            </div>
          )}

          {/* Module Screen 3: Invoicing */}
          {activeTab === 'invoicing' && (
            <div className="bg-[#F5F8FC] rounded-2xl p-6 border-2 border-purple-200 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#073B8F]">Tax Invoices, Delivery Notes & ETR Slips</h3>
                  <p className="text-xs text-slate-600">Issue professional branded quotes and receipts instantly to WhatsApp or PDF.</p>
                </div>
                <span className="text-xs font-bold bg-purple-100 text-[#7D3FB2] px-3 py-1 rounded-full">
                  Automated Documents
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-xs text-slate-900">80mm Thermal Receipt</div>
                  <p className="text-xs text-slate-500">Fast customer slip with your business PIN, address, itemized tax, and M-Pesa code.</p>
                  <div className="text-[11px] font-bold text-emerald-600">✓ Auto-cutter enabled</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-xs text-slate-900">WhatsApp / SMS Digital Receipt</div>
                  <p className="text-xs text-slate-500">Customer walks away with instant link on their smartphone. Zero paper cost.</p>
                  <div className="text-[11px] font-bold text-emerald-600">✓ 99.8% delivery rate</div>
                </div>
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-2">
                  <div className="font-bold text-xs text-slate-900">A4 PDF Proforma & Tax Invoice</div>
                  <p className="text-xs text-slate-500">One-click quotation conversion for corporate and government clients.</p>
                  <div className="text-[11px] font-bold text-emerald-600">✓ KRA eTIMS compliant</div>
                </div>
              </div>
            </div>
          )}

          {/* Module Screen 4: Security */}
          {activeTab === 'security' && (
            <div className="bg-[#F5F8FC] rounded-2xl p-6 border-2 border-amber-300 space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="text-lg font-black text-[#073B8F]">Role-Based Access & Anti-Theft Guard</h3>
                  <p className="text-xs text-slate-600">Prevent cashier price tampering, unauthorized voids, and drawer discrepancies.</p>
                </div>
                <span className="text-xs font-bold bg-amber-100 text-amber-900 px-3 py-1 rounded-full">
                  Audit Protection
                </span>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase bg-blue-100 text-[#0067D9] px-2 py-0.5 rounded">
                    Tier 1: Cashier
                  </span>
                  <div className="font-bold text-sm text-slate-900 pt-1">Cashier Station</div>
                  <ul className="text-xs text-slate-600 space-y-1 pt-1">
                    <li>• Ring up barcodes and receive payments</li>
                    <li>• Restricted: Cannot edit prices or delete orders</li>
                    <li>• Restricted: Cannot view net profits or margins</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase bg-purple-100 text-[#7D3FB2] px-2 py-0.5 rounded">
                    Tier 2: Supervisor
                  </span>
                  <div className="font-bold text-sm text-slate-900 pt-1">Store Supervisor</div>
                  <ul className="text-xs text-slate-600 space-y-1 pt-1">
                    <li>• Authorize order voids with manager PIN</li>
                    <li>• Perform shift-end cash drawer reconciliations</li>
                    <li>• Approve item return credits and discounts</li>
                  </ul>
                </div>

                <div className="bg-white p-4 rounded-xl border border-slate-200 space-y-1.5">
                  <span className="text-[10px] font-extrabold uppercase bg-amber-100 text-amber-800 px-2 py-0.5 rounded">
                    Tier 3: Owner
                  </span>
                  <div className="font-bold text-sm text-slate-900 pt-1">Business Director</div>
                  <ul className="text-xs text-slate-600 space-y-1 pt-1">
                    <li>• Complete remote view on phone from anywhere</li>
                    <li>• Full profit & loss and supplier balance ledger</li>
                    <li>• Instant alert on large discount or void actions</li>
                  </ul>
                </div>
              </div>
            </div>
          )}
          </div>

        </div>
      </section>

      {/* 4. ACTION BANNER */}
      <section className="animate-section-4 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-r from-[#0067D9] to-[#073B8F] rounded-3xl p-8 sm:p-10 text-white shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6 border-2 border-blue-400">
          <div className="space-y-1">
            <span className="text-xs font-black uppercase tracking-wider text-[#FFD21C]">
              Ready for Setup?
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              Upgrade your counter with Lumina POS.
            </h3>
            <p className="text-xs sm:text-sm text-blue-100">
              Hardware delivery, software customization, and on-site staff training included.
            </p>
          </div>
          <button
            onClick={() => onOpenContactModal('POS & Custom ERP Software')}
            className="shrink-0 bg-[#FFD21C] hover:bg-yellow-400 text-slate-950 font-black text-xs sm:text-sm px-7 py-3.5 rounded-xl shadow-md transition-all duration-200 btn-interactive cursor-pointer flex items-center gap-2"
          >
            <PhoneCall className="w-4 h-4" />
            <span>Book POS Setup Today</span>
          </button>
        </div>
      </section>

    </div>
  );
};
