import React, { useState, useEffect } from 'react';
import { X, Send, FileText, MessageSquare, Check, Sparkles } from 'lucide-react';
import { LuminaLogoMark } from './Logo';

export const FloatingWhatsApp: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [showBadge, setShowBadge] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);
  const [activeTab, setActiveTab] = useState<'quote' | 'message'>('quote');

  // Quote Form State
  const [quoteForm, setQuoteForm] = useState({
    service: 'Supermarket / Retail POS System',
    businessName: '',
    location: 'Nairobi',
    requirements: '',
  });

  // Direct Message State
  const [quickMessage, setQuickMessage] = useState('');

  // Auto-tease popup after 4.5 seconds if user hasn't interacted
  useEffect(() => {
    const timer = setTimeout(() => {
      if (!userInteracted) {
        setIsOpen(true);
      }
    }, 4500);
    return () => clearTimeout(timer);
  }, [userInteracted]);

  // Auto-close widget after 5 seconds of being open unless user is actively typing
  useEffect(() => {
    if (!isOpen) return;

    const hasTypedContent = 
      quoteForm.businessName.trim().length > 0 || 
      quoteForm.requirements.trim().length > 0 || 
      quickMessage.trim().length > 0;

    if (hasTypedContent) return;

    const autoCloseTimer = setTimeout(() => {
      setIsOpen(false);
    }, 5000);

    return () => clearTimeout(autoCloseTimer);
  }, [isOpen, quoteForm.businessName, quoteForm.requirements, quickMessage]);

  const phoneNumber = '254741377463';

  // Handle Quote Submission via WhatsApp
  const handleSubmitQuote = (e: React.FormEvent) => {
    e.preventDefault();

    const formattedMessage = [
      '*Lumina 360 — Official Quote Request*',
      '----------------------------------------',
      `*Service Required:* ${quoteForm.service}`,
      quoteForm.businessName.trim() ? `*Business Name:* ${quoteForm.businessName.trim()}` : null,
      quoteForm.location.trim() ? `*Town / Location:* ${quoteForm.location.trim()}` : null,
      quoteForm.requirements.trim() ? `*Details / Tills:* ${quoteForm.requirements.trim()}` : null,
      '----------------------------------------',
      'Hello Lumina 360, please provide an official pricing quote and equipment availability for the above specification.'
    ]
      .filter(Boolean)
      .join('\n');

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formattedMessage)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setShowBadge(false);
    setIsOpen(false);
  };

  // Handle Quick Direct Message Submission
  const handleSendDirectMessage = (e: React.FormEvent) => {
    e.preventDefault();

    const textToSend = quickMessage.trim() || 'Hello Lumina 360! I would like to inquire about your POS systems and business solutions.';
    const formatted = `Hello Lumina 360,\n\n${textToSend}`;

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(formatted)}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');

    setShowBadge(false);
    setIsOpen(false);
  };

  const handleToggle = (e: React.MouseEvent) => {
    e.stopPropagation();
    setUserInteracted(true);
    setIsOpen(!isOpen);
    setShowBadge(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end select-none">
      
      {/* Floating WhatsApp Interactive Popup Box */}
      {isOpen && (
        <div 
          className="mb-3 w-[92vw] sm:w-96 max-w-sm bg-white rounded-3xl shadow-[0_24px_60px_rgba(0,0,0,0.24)] border-2 border-emerald-500/30 overflow-hidden animate-in fade-in slide-in-from-bottom-5 duration-300 relative text-left"
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Brand Banner */}
          <div className="bg-gradient-to-r from-[#128C7E] to-[#075E54] p-4 text-white flex items-center justify-between">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shadow-md">
                  <LuminaLogoMark size={32} glow={false} />
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-400 border-2 border-white rounded-full animate-pulse" />
              </div>
              <div>
                <h4 className="font-black text-sm leading-tight flex items-center gap-1.5">
                  <span>Lumina 360 WhatsApp</span>
                  <span className="text-[10px] bg-emerald-700 px-1.5 py-0.5 rounded font-bold">24/7 Desk</span>
                </h4>
                <p className="text-[11px] text-emerald-100 flex items-center gap-1 mt-0.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-300" />
                  <span>Instant Quote & Inquiry Channel</span>
                </p>
              </div>
            </div>

            <button
              onClick={() => setIsOpen(false)}
              className="p-1 rounded-full text-emerald-200 hover:text-white hover:bg-white/10 transition-colors cursor-pointer"
              aria-label="Close WhatsApp quote dialog"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Mode Switcher Tabs */}
          <div className="flex border-b border-slate-200 bg-slate-50 text-xs font-bold">
            <button
              onClick={() => setActiveTab('quote')}
              className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'quote'
                  ? 'bg-white text-[#075E54] border-b-2 border-[#25D366] font-black shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <FileText className="w-3.5 h-3.5 text-emerald-600" />
              <span>Submit a Quote</span>
            </button>
            <button
              onClick={() => setActiveTab('message')}
              className={`flex-1 py-2.5 px-3 flex items-center justify-center gap-1.5 transition-all cursor-pointer ${
                activeTab === 'message'
                  ? 'bg-white text-[#075E54] border-b-2 border-[#25D366] font-black shadow-xs'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>Quick Message</span>
            </button>
          </div>

          {/* Tab 1: Submit Quote via WhatsApp Form */}
          {activeTab === 'quote' && (
            <form onSubmit={handleSubmitQuote} className="p-4 space-y-3 bg-[#E5DDD5]/30">
              <div className="bg-white/90 p-2.5 rounded-xl border border-slate-200/80 text-[11px] text-slate-700 flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shrink-0" />
                <span>Fill below to send an instant formal quote request directly to our WhatsApp.</span>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Solution / System Type
                </label>
                <select
                  value={quoteForm.service}
                  onChange={(e) => setQuoteForm({ ...quoteForm, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 font-medium focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500 outline-none"
                >
                  <option value="Supermarket / Retail POS System">Supermarket / Retail POS System</option>
                  <option value="Dairy Cooperative / Agribusiness ERP">Dairy Cooperative / Agribusiness ERP</option>
                  <option value="Multi-Store Warehouse & Branch ERP">Multi-Store Warehouse & Branch ERP</option>
                  <option value="Hotel, Bar & Restaurant POS">Hotel, Bar & Restaurant POS</option>
                  <option value="Pharmacy / Chemist POS System">Pharmacy / Chemist POS System</option>
                  <option value="4K CCTV Security Cameras">4K CCTV Security Cameras</option>
                  <option value="Enterprise Wi-Fi & Cat6 Cabling">Enterprise Wi-Fi & Cat6 Cabling</option>
                  <option value="Custom Web App & E-Commerce">Custom Web App & E-Commerce</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Business / Store Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Skyline Supermarket"
                    value={quoteForm.businessName}
                    onChange={(e) => setQuoteForm({ ...quoteForm, businessName: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:border-emerald-500 outline-none"
                  />
                </div>
                <div>
                  <label className="block text-[11px] font-bold text-slate-700 mb-1">
                    Town / County
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Nairobi CBD, Eldoret"
                    value={quoteForm.location}
                    onChange={(e) => setQuoteForm({ ...quoteForm, location: e.target.value })}
                    className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:border-emerald-500 outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Counters / Specific Needs (Optional)
                </label>
                <textarea
                  rows={2}
                  placeholder="e.g. Need 2 cashier checkouts with M-Pesa STK, barcode reader and receipt printer."
                  value={quoteForm.requirements}
                  onChange={(e) => setQuoteForm({ ...quoteForm, requirements: e.target.value })}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:border-emerald-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer btn-interactive"
              >
                <svg 
                  className="w-4 h-4 fill-current shrink-0" 
                  viewBox="0 0 24 24" 
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.58 20.15 12.05 20.15ZM16.57 14.45C16.32 14.32 15.11 13.73 14.88 13.65C14.66 13.56 14.49 13.52 14.33 13.77C14.16 14.02 13.69 14.57 13.55 14.74C13.4 14.9 13.26 14.92 13.01 14.8C12.76 14.67 11.96 14.41 11.01 13.57C10.27 12.91 9.77 12.09 9.62 11.84C9.48 11.59 9.61 11.45 9.73 11.33C9.84 11.22 9.98 11.04 10.1 10.9C10.23 10.75 10.27 10.65 10.35 10.48C10.43 10.32 10.39 10.17 10.33 10.05C10.27 9.92 9.77 8.71 9.57 8.21C9.36 7.72 9.16 7.79 9.01 7.78C8.87 7.77 8.71 7.77 8.54 7.77C8.38 7.77 8.11 7.83 7.88 8.08C7.66 8.33 7.04 8.91 7.04 10.08C7.04 11.25 7.89 12.38 8.01 12.55C8.13 12.71 9.69 15.11 12.07 16.14C12.64 16.38 13.08 16.53 13.42 16.64C14 16.82 14.54 16.8 14.96 16.73C15.43 16.66 16.42 16.13 16.62 15.56C16.83 14.98 16.83 14.49 16.77 14.39C16.71 14.28 16.82 14.57 16.57 14.45Z" />
                </svg>
                <span>Submit Quote on WhatsApp</span>
              </button>
            </form>
          )}

          {/* Tab 2: Quick Direct Message */}
          {activeTab === 'message' && (
            <form onSubmit={handleSendDirectMessage} className="p-4 space-y-3 bg-[#E5DDD5]/30">
              <div className="bg-white p-3 rounded-2xl rounded-tl-xs shadow-xs text-xs text-slate-800 space-y-1 border border-slate-200/60">
                <div className="font-black text-[#075E54] text-[11px]">Lumina 360 Desk</div>
                <p className="leading-relaxed">
                  Habari! 👋 Ask any question about pricing, hardware kits, or on-site installation across Kenya.
                </p>
              </div>

              <div>
                <label className="block text-[11px] font-bold text-slate-700 mb-1">
                  Your Message
                </label>
                <textarea
                  rows={3}
                  placeholder="Type your question or request here..."
                  value={quickMessage}
                  onChange={(e) => setQuickMessage(e.target.value)}
                  className="w-full px-3 py-2 rounded-xl border border-slate-300 bg-white text-xs text-slate-800 focus:border-emerald-500 outline-none resize-none"
                />
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 rounded-xl bg-[#25D366] hover:bg-[#20ba5a] text-slate-950 font-black text-xs sm:text-sm flex items-center justify-center gap-2 shadow-md hover:shadow-lg transition-all cursor-pointer btn-interactive"
              >
                <Send className="w-4 h-4 shrink-0" />
                <span>Send WhatsApp Message</span>
              </button>
            </form>
          )}
        </div>
      )}

      {/* Floating Circular WhatsApp Button */}
      <div className="relative group">
        
        {/* Pulsing Emerald Radar Ring */}
        <div 
          className="absolute -inset-1.5 rounded-full bg-emerald-500 opacity-75 blur-xs animate-ping pointer-events-none" 
          aria-hidden="true"
        />

        {/* Hover Tooltip when popup is closed */}
        {!isOpen && (
          <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 hidden sm:flex items-center gap-2 bg-slate-900/95 backdrop-blur-md text-white text-xs font-bold py-2 px-3.5 rounded-xl shadow-xl whitespace-nowrap opacity-0 group-hover:opacity-100 transition-all duration-200 pointer-events-none translate-x-1 group-hover:translate-x-0 border border-slate-700">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            <span>Submit a Quote on WhatsApp</span>
          </div>
        )}

        {/* Main Action Button */}
        <button
          onClick={handleToggle}
          className="relative w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gradient-to-tr from-[#128C7E] via-[#25D366] to-[#25D366] text-white flex items-center justify-center shadow-[0_8px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_12px_32px_rgba(37,211,102,0.65)] hover:scale-108 active:scale-95 transition-all duration-200 cursor-pointer focus:outline-none focus-visible:ring-4 focus-visible:ring-emerald-300"
          aria-label="Open WhatsApp quote and chat widget"
        >
          {isOpen ? (
            <X className="w-7 h-7 sm:w-8 sm:h-8 stroke-[2.5]" />
          ) : (
            <svg 
              className="w-7 h-7 sm:w-8 sm:h-8 fill-current drop-shadow-md" 
              viewBox="0 0 24 24" 
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.03 14.69 2 12.04 2ZM12.05 20.15C10.57 20.15 9.12 19.76 7.85 19.01L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 14.99 3.81 13.47 3.81 11.91C3.81 7.37 7.5 3.69 12.05 3.69C14.25 3.69 16.31 4.55 17.87 6.11C19.42 7.67 20.28 9.73 20.28 11.93C20.27 16.48 16.58 20.15 12.05 20.15ZM16.57 14.45C16.32 14.32 15.11 13.73 14.88 13.65C14.66 13.56 14.49 13.52 14.33 13.77C14.16 14.02 13.69 14.57 13.55 14.74C13.4 14.9 13.26 14.92 13.01 14.8C12.76 14.67 11.96 14.41 11.01 13.57C10.27 12.91 9.77 12.09 9.62 11.84C9.48 11.59 9.61 11.45 9.73 11.33C9.84 11.22 9.98 11.04 10.1 10.9C10.23 10.75 10.27 10.65 10.35 10.48C10.43 10.32 10.39 10.17 10.33 10.05C10.27 9.92 9.77 8.71 9.57 8.21C9.36 7.72 9.16 7.79 9.01 7.78C8.87 7.77 8.71 7.77 8.54 7.77C8.38 7.77 8.11 7.83 7.88 8.08C7.66 8.33 7.04 8.91 7.04 10.08C7.04 11.25 7.89 12.38 8.01 12.55C8.13 12.71 9.69 15.11 12.07 16.14C12.64 16.38 13.08 16.53 13.42 16.64C14 16.82 14.54 16.8 14.96 16.73C15.43 16.66 16.42 16.13 16.62 15.56C16.83 14.98 16.83 14.49 16.77 14.39C16.71 14.28 16.82 14.57 16.57 14.45Z" />
            </svg>
          )}

          {/* Notification Dot */}
          {showBadge && !isOpen && (
            <span className="absolute -top-1 -right-1 w-5 h-5 rounded-full bg-red-500 border-2 border-white text-white text-[10px] font-black flex items-center justify-center shadow-md animate-bounce">
              1
            </span>
          )}
        </button>
      </div>

    </div>
  );
};

export default FloatingWhatsApp;
