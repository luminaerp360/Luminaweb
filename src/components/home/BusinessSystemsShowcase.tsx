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
  Printer
} from 'lucide-react';

interface BusinessSystemsShowcaseProps {
  onConsultClick: () => void;
}

export const BusinessSystemsShowcase: React.FC<BusinessSystemsShowcaseProps> = ({
  onConsultClick,
}) => {
  const [activeTab, setActiveTab] = useState<'pos' | 'inventory' | 'orders' | 'roles'>('pos');

  return (
    <section id="business-systems" className="py-16 sm:py-20 bg-white border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-[#0067D9] mb-3">
            <Store className="w-3.5 h-3.5" />
            <span>POS & Custom ERP Software</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Software built around how you actually work.
          </h2>
          <p className="mt-3 text-base text-slate-600 leading-relaxed font-normal">
            No rigid templates or confusing spreadsheets. Lumina 360 designs and deploys fast POS checkout, stock management, and custom ERP dashboards for your team.
          </p>
        </div>

        {/* 4 Colorful Interactive Tabs */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 mb-8">
          
          <button
            onClick={() => setActiveTab('pos')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3.5 ${
              activeTab === 'pos'
                ? 'bg-white border-[#0067D9] shadow-md ring-2 ring-[#0067D9]/20'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === 'pos' ? 'bg-[#0067D9] text-white' : 'bg-blue-50 text-[#0067D9]'}`}>
              <Store className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">1. POS Checkout</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Barcode & M-Pesa</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('inventory')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3.5 ${
              activeTab === 'inventory'
                ? 'bg-white border-[#F43D78] shadow-md ring-2 ring-[#F43D78]/20'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === 'inventory' ? 'bg-[#F43D78] text-white' : 'bg-pink-50 text-[#F43D78]'}`}>
              <Package className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">2. Inventory Sync</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Multi-branch stock</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('orders')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3.5 ${
              activeTab === 'orders'
                ? 'bg-white border-[#7D3FB2] shadow-md ring-2 ring-[#7D3FB2]/20'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === 'orders' ? 'bg-[#7D3FB2] text-white' : 'bg-purple-50 text-[#7D3FB2]'}`}>
              <FileText className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">3. Invoices & Receipts</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Digital & printouts</div>
            </div>
          </button>

          <button
            onClick={() => setActiveTab('roles')}
            className={`p-4 rounded-2xl border-2 transition-all cursor-pointer text-left flex items-start gap-3.5 ${
              activeTab === 'roles'
                ? 'bg-white border-amber-500 shadow-md ring-2 ring-amber-500/20'
                : 'bg-slate-50 border-slate-200 hover:border-slate-300'
            }`}
          >
            <div className={`p-2.5 rounded-xl shrink-0 ${activeTab === 'roles' ? 'bg-amber-500 text-white' : 'bg-amber-50 text-amber-700'}`}>
              <ShieldCheck className="w-5 h-5" />
            </div>
            <div>
              <div className="text-xs sm:text-sm font-bold text-slate-900">4. User Permissions</div>
              <div className="text-[11px] text-slate-500 mt-0.5">Cashier to director</div>
            </div>
          </button>

        </div>

        {/* Showcase Display Card */}
        <div className="bg-[#F5F8FC] rounded-3xl border-2 border-slate-200 p-6 sm:p-8 lg:p-10 shadow-sm overflow-hidden">
          
          {activeTab === 'pos' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#0067D9]">
                  Feature Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F]">
                  Fast Point of Sale (POS) Checkout
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Engineered for retail counters, wholesale desks, and collection centers where speed and accuracy matter.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                    <span><strong>High-speed barcode scanner support</strong> with instant item lookup.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                    <span><strong>One-touch M-Pesa STK push:</strong> Customers pay on their phone, transaction auto-matches.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#0067D9] shrink-0 mt-0.5" />
                    <span><strong>Works online & offline:</strong> Never stalls if internet connectivity drops temporarily.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onConsultClick}
                    className="inline-flex items-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Request POS Hardware & Software Demo</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-44 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1556742049-0a67c5574f73?auto=format&fit=crop&w=800&q=80" 
                    alt="POS Terminal" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Standard Retail POS Kit:</div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Touchscreen / Tablet Terminal</span>
                    <span className="font-semibold text-emerald-600">Included</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Barcode Handheld Scanner</span>
                    <span className="font-semibold text-emerald-600">Included</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>80mm Thermal Receipt Printer</span>
                    <span className="font-semibold text-emerald-600">Included</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'inventory' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#F43D78]">
                  Feature Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F]">
                  Multi-Branch Inventory Synchronization
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Know exactly what stock you have across your main warehouse, branch stores, and vehicles without physical counting panic.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F43D78] shrink-0 mt-0.5" />
                    <span><strong>Centralized stock records:</strong> View inventory across multiple locations on one screen.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F43D78] shrink-0 mt-0.5" />
                    <span><strong>Low stock alerts:</strong> Automated reminders when items reach minimum reorder levels.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#F43D78] shrink-0 mt-0.5" />
                    <span><strong>Inter-branch transfer requests:</strong> Track shipments from main warehouse to store shelves.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onConsultClick}
                    className="inline-flex items-center gap-2 bg-[#F43D78] hover:bg-pink-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Connect Your Stores</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-44 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80" 
                    alt="Warehouse Stock" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Inventory Capabilities:</div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Inter-store stock transfers</span>
                    <span className="font-semibold text-emerald-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Batch and expiration date alerts</span>
                    <span className="font-semibold text-emerald-600">Active</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Direct supplier purchase orders</span>
                    <span className="font-semibold text-emerald-600">Active</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'orders' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-[#7D3FB2]">
                  Feature Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F]">
                  Invoices, Quotations & Thermal Receipts
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Generate professional branded invoices, delivery notes, and instant POS thermal slips in one click.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#7D3FB2] shrink-0 mt-0.5" />
                    <span><strong>Branded thermal slips:</strong> Clean receipt output with your company logo & PIN.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#7D3FB2] shrink-0 mt-0.5" />
                    <span><strong>SMS & WhatsApp receipts:</strong> Instant digital copies sent straight to customer phones.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-[#7D3FB2] shrink-0 mt-0.5" />
                    <span><strong>Invoice to receipt conversion:</strong> Track unpaid quotes and convert to paid orders.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onConsultClick}
                    className="inline-flex items-center gap-2 bg-[#7D3FB2] hover:bg-purple-800 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Explore Invoicing Setup</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-44 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?auto=format&fit=crop&w=800&q=80" 
                    alt="Billing and receipts" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Document Channels:</div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>80mm & 58mm Thermal Printers</span>
                    <span className="font-semibold text-emerald-600">Supported</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>PDF Proforma & Tax Invoices</span>
                    <span className="font-semibold text-emerald-600">Supported</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Automated SMS Receipts</span>
                    <span className="font-semibold text-emerald-600">Supported</span>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'roles' && (
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-6 space-y-4">
                <span className="text-xs font-bold uppercase tracking-wider text-amber-700">
                  Feature Spotlight
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#073B8F]">
                  Role-Based User Permissions & Audits
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Protect cash drawers, stop unauthorized price changes, and keep sensitive company financials locked down.
                </p>

                <div className="space-y-2.5 pt-2">
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Cashier mode:</strong> Restrict staff to ringing sales and printing receipts only.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Manager approval:</strong> Supervisor PIN required to void sales or apply discounts.</span>
                  </div>
                  <div className="flex items-start gap-2.5 text-xs text-slate-700">
                    <CheckCircle2 className="w-4 h-4 text-amber-600 shrink-0 mt-0.5" />
                    <span><strong>Immutable audit log:</strong> Every action timestamped with user ID to eliminate disputes.</span>
                  </div>
                </div>

                <div className="pt-3">
                  <button
                    onClick={onConsultClick}
                    className="inline-flex items-center gap-2 bg-amber-600 hover:bg-amber-700 text-white text-xs sm:text-sm font-bold px-5 py-2.5 rounded-xl transition-colors cursor-pointer"
                  >
                    <span>Secure Your Organization</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="lg:col-span-6 bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
                <div className="h-44 w-full bg-slate-100 overflow-hidden">
                  <img 
                    src="https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80" 
                    alt="Role Permissions" 
                    className="w-full h-full object-cover" 
                  />
                </div>
                <div className="p-4 space-y-2 text-xs">
                  <div className="font-bold text-slate-900">Configured User Roles:</div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Cashier (Checkout & Receipt only)</span>
                    <span className="font-semibold text-blue-600">Restricted</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600 border-b border-slate-100 pb-1.5">
                    <span>Supervisor (Shift balancing & voids)</span>
                    <span className="font-semibold text-amber-600">Elevated</span>
                  </div>
                  <div className="flex items-center justify-between text-slate-600">
                    <span>Director (Full ledger & profit analytics)</span>
                    <span className="font-semibold text-emerald-600">Administrator</span>
                  </div>
                </div>
              </div>
            </div>
          )}

        </div>

      </div>
    </section>
  );
};
