import React, { useState } from 'react';
import { X, Send, CheckCircle2, PhoneCall, Mail, AlertCircle } from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';
import { LuminaLogoMark } from '../common/Logo';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  defaultService?: string;
  scopeSummary?: {
    packageName: string;
    selectedModules: string[];
    note: string;
  } | null;
}

export const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  defaultService,
  scopeSummary,
}) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: defaultService || (scopeSummary?.packageName || 'Business Management Systems'),
    note: scopeSummary ? `${scopeSummary.note}\nModules: ${scopeSummary.selectedModules.join(', ')}` : '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isDone, setIsDone] = useState(false);

  React.useEffect(() => {
    if (defaultService) {
      setFormData((prev) => ({ ...prev, service: defaultService }));
    }
    if (scopeSummary) {
      setFormData((prev) => ({
        ...prev,
        service: scopeSummary.packageName,
        note: `${scopeSummary.note}\nSelected Modules:\n- ${scopeSummary.selectedModules.join('\n- ')}`
      }));
    }
  }, [defaultService, scopeSummary]);

  if (!isOpen) return null;

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = 'Please provide your name';
    if (!formData.email.trim()) {
      errs.email = 'Email address is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      errs.email = 'Please provide a valid email';
    }
    if (!formData.phone.trim()) errs.phone = 'Phone number is required';
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsDone(true);
    }, 700);
  };

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="animate-tab-content bg-white rounded-2xl max-w-lg w-full max-h-[90vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-5 sm:p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-3">
            <LuminaLogoMark size={36} animated={true} glow={true} />
            <div>
              <span className="text-[10px] font-bold uppercase tracking-wider text-[#0067D9]">
                Technical Consultation Request
              </span>
              <h3 className="text-lg sm:text-xl font-extrabold text-[#072B6B] mt-0.5">
                Talk to Lumina 360
              </h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-5 sm:p-6">
          {isDone ? (
            <div className="text-center py-8 space-y-3">
              <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                <CheckCircle2 className="w-6 h-6" />
              </div>
              <h4 className="text-lg font-bold text-slate-900">
                Inquiry Logged Successfully
              </h4>
              <p className="text-xs text-slate-600 max-w-sm mx-auto leading-relaxed">
                Thank you, <strong>{formData.name}</strong>. Our solutions team will review your specifications for <strong>{formData.service}</strong> and call or email you within 4 business hours.
              </p>
              <div className="pt-3">
                <button
                  onClick={onClose}
                  className="px-5 py-2.5 bg-[#0067D9] text-white rounded-xl text-xs font-semibold hover:bg-[#073B8F] transition-colors"
                >
                  Close Window
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-3.5 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Your Full Name *
                </label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  placeholder="e.g. Kiprotich Kirui"
                  className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                    errors.name ? 'border-rose-300 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0067D9]'
                  }`}
                />
                {errors.name && <p className="text-rose-600 mt-0.5 text-[11px]">{errors.name}</p>}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="name@company.com"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                      errors.email ? 'border-rose-300 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0067D9]'
                    }`}
                  />
                  {errors.email && <p className="text-rose-600 mt-0.5 text-[11px]">{errors.email}</p>}
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">
                    Phone / WhatsApp *
                  </label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="+254 700 000 000"
                    className={`w-full px-3 py-2 rounded-lg border focus:outline-none focus:ring-2 ${
                      errors.phone ? 'border-rose-300 focus:ring-rose-200' : 'border-slate-200 focus:ring-blue-100 focus:border-[#0067D9]'
                    }`}
                  />
                  {errors.phone && <p className="text-rose-600 mt-0.5 text-[11px]">{errors.phone}</p>}
                </div>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Target Solution
                </label>
                <select
                  value={formData.service}
                  onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 bg-white focus:outline-none focus:border-[#0067D9]"
                >
                  {SOLUTIONS_DATA.map((s) => (
                    <option key={s.id} value={s.title}>
                      {s.title}
                    </option>
                  ))}
                  <option value="Unified Technology Stack">Unified Technology Stack</option>
                  <option value="Custom Project Scope">Custom Project Scope</option>
                </select>
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">
                  Project Notes / Specifications
                </label>
                <textarea
                  rows={3}
                  value={formData.note}
                  onChange={(e) => setFormData({ ...formData, note: e.target.value })}
                  placeholder="Share any details about locations, required modules, or questions..."
                  className="w-full px-3 py-2 rounded-lg border border-slate-200 focus:outline-none focus:border-[#0067D9]"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full inline-flex items-center justify-center gap-2 bg-[#0067D9] hover:bg-[#073B8F] text-white font-semibold text-xs sm:text-sm py-3 rounded-xl shadow-xs transition-colors cursor-pointer"
                >
                  <Send className="w-4 h-4" />
                  <span>{isSubmitting ? 'Submitting...' : 'Send Consultation Request'}</span>
                </button>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
