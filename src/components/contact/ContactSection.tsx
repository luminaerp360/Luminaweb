import React, { useState } from 'react';
import { 
  PhoneCall, 
  Mail, 
  MapPin, 
  MessageSquare, 
  Send, 
  CheckCircle2, 
  Sparkles,
  MessageCircle
} from 'lucide-react';
import { SOLUTIONS_DATA } from '../../data/solutionsData';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({
  initialService = '',
}) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    service: initialService || 'POS & Business ERP Systems',
    message: '',
  });

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  React.useEffect(() => {
    if (initialService) {
      setFormData((prev) => ({ ...prev, service: initialService }));
    }
  }, [initialService]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name.trim() || !formData.phone.trim()) {
      setError('Please provide your name and phone number so we can reach you.');
      return;
    }
    setError('');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-16 sm:py-20 bg-[#F5F8FC] border-t border-slate-200 scroll-mt-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-100 text-[#0067D9] text-xs font-black uppercase tracking-wider mb-2">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Fast Consultation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-black text-[#073B8F] tracking-tight">
            Let's build something smarter for your business.
          </h2>
          <p className="mt-2 text-sm text-slate-600">
            Tell us what you need. Our technical team will reach out with a written proposal or call you back.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Direct channels left */}
          <div className="md:col-span-5 bg-white rounded-2xl border-2 border-slate-200 p-6 space-y-6 shadow-xs">
            <h3 className="text-lg font-black text-[#073B8F]">
              Direct Contact
            </h3>
            
            <div className="space-y-4 text-xs sm:text-sm text-slate-700">
              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-blue-50 text-[#0067D9] shrink-0">
                  <PhoneCall className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Phone & WhatsApp</div>
                  <div className="text-slate-600 mt-0.5">
                    <a href="tel:+254741377463" className="hover:text-[#0067D9]">+254 741 377 463</a>
                  </div>
                  <div className="text-[11px] text-slate-400">Mon - Sat: 8:00 AM - 6:00 PM</div>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-pink-50 text-[#F43D78] shrink-0">
                  <Mail className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Official Email</div>
                  <a href="mailto:support@eco360.co.ke" className="text-[#0067D9] hover:underline mt-0.5 block">
                    support@eco360.co.ke
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="p-2.5 rounded-xl bg-purple-50 text-[#7D3FB2] shrink-0">
                  <MapPin className="w-4 h-4" />
                </div>
                <div>
                  <div className="font-bold text-slate-900">Location</div>
                  <div className="text-slate-600 mt-0.5">Nairobi, Kenya</div>
                  <div className="text-[11px] text-slate-400">On-site deployments across East Africa</div>
                </div>
              </div>
            </div>

            <div className="pt-3 border-t border-slate-100">
              <a
                href="https://wa.me/254741377463?text=Hello%20ECO%20360,%20I%20would%20like%20to%20inquire%20about%20your%20POS%20packages%20and%20pricing."
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs sm:text-sm py-3 px-4 rounded-xl transition-colors shadow-xs"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp Directly</span>
              </a>
            </div>
          </div>

          {/* Clean 4-field form right */}
          <div className="md:col-span-7 bg-white rounded-2xl border-2 border-slate-200 p-6 sm:p-7 shadow-xs">
            {isSubmitted ? (
              <div className="py-8 text-center space-y-3">
                <div className="w-12 h-12 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mx-auto">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="text-xl font-black text-[#073B8F]">
                  Request Received!
                </h4>
                <p className="text-xs sm:text-sm text-slate-600 max-w-sm mx-auto">
                  Thank you, <strong>{formData.name}</strong>. Our technical team has received your enquiry for <strong>{formData.service}</strong> and will reach out to {formData.phone} shortly.
                </p>
                <button
                  onClick={() => {
                    setIsSubmitted(false);
                    setFormData({ name: '', phone: '', service: 'POS & Business ERP Systems', message: '' });
                  }}
                  className="mt-3 text-xs font-bold text-[#0067D9] hover:underline cursor-pointer"
                >
                  Send another inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 text-xs">
                <div className="font-extrabold text-sm text-slate-900 border-b border-slate-100 pb-2">
                  Request a Quick Quote / Technical Callback
                </div>

                {error && (
                  <div className="p-2.5 rounded-lg bg-rose-50 border border-rose-200 text-rose-700 text-xs font-semibold">
                    {error}
                  </div>
                )}

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Your Full Name *</label>
                  <input
                    type="text"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. David Kirui"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-[#0067D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Phone Number / WhatsApp *</label>
                  <input
                    type="tel"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    placeholder="e.g. +254 700 000 000"
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-[#0067D9] focus:outline-none"
                  />
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Solution You Need</label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 bg-white focus:border-[#0067D9] focus:outline-none"
                  >
                    {SOLUTIONS_DATA.map((s) => (
                      <option key={s.id} value={s.title}>
                        {s.title}
                      </option>
                    ))}
                    <option value="Complete Turnkey Package (POS + Web + CCTV)">
                      Complete Turnkey Package (POS + Web + CCTV)
                    </option>
                  </select>
                </div>

                <div>
                  <label className="block font-bold text-slate-700 mb-1">Brief Project Details (Optional)</label>
                  <textarea
                    rows={3}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about your store, number of branches, or desired timeline..."
                    className="w-full px-3.5 py-2.5 text-xs rounded-xl border border-slate-200 focus:border-[#0067D9] focus:outline-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 px-4 rounded-xl bg-[#0067D9] hover:bg-[#073B8F] text-white font-bold text-xs sm:text-sm transition-colors cursor-pointer shadow-xs flex items-center justify-center gap-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Submit Inquiry</span>
                </button>
              </form>
            )}
          </div>

        </div>

      </div>
    </section>
  );
};
