import React from 'react';
import { X, ShieldCheck, FileText, Cookie } from 'lucide-react';

interface LegalModalProps {
  isOpen: boolean;
  onClose: () => void;
  docType: 'privacy' | 'terms' | 'cookies' | null;
}

export const LegalModal: React.FC<LegalModalProps> = ({
  isOpen,
  onClose,
  docType,
}) => {
  if (!isOpen || !docType) return null;

  const content = {
    privacy: {
      title: 'Privacy Policy',
      subtitle: 'How Lumina 360 handles business and personal information.',
      icon: <ShieldCheck className="w-5 h-5 text-[#0067D9]" />,
      sections: [
        {
          heading: 'Information We Collect',
          body: 'We collect information provided directly by clients when submitting project inquiries, requesting technical audits, or entering service agreements. This includes organizational contact names, corporate email addresses, phone numbers, and technical specifications of your enterprise environment.'
        },
        {
          heading: 'Strict Operational Confidentiality',
          body: 'All client database structures, customer records, proprietary workflows, and video surveillance metadata managed or audited by Lumina 360 are protected under strict Non-Disclosure Agreements (NDAs). We never sell, monetize, or disclose client operational data to third parties.'
        },
        {
          heading: 'Data Security & Storage',
          body: 'Systems deployed by Lumina 360 employ industry-standard AES-256 encryption in transit and at rest, isolated VLAN segmentation, and secure key management protocols to safeguard your business assets.'
        }
      ]
    },
    terms: {
      title: 'Terms of Service',
      subtitle: 'Standard engineering and service delivery terms.',
      icon: <FileText className="w-5 h-5 text-[#073B8F]" />,
      sections: [
        {
          heading: 'Technical Scope & Proposals',
          body: 'Every Lumina 360 deployment is governed by an agreed Statement of Work (SOW) detailing specific deliverables, hardware models, network points, software features, and sign-off milestones.'
        },
        {
          heading: 'Software Licensing & Ownership',
          body: 'Custom-developed business management software and configurations are handed over to the client with full operational administrative rights upon contract completion, subject to project terms.'
        },
        {
          heading: 'Service Level Agreements (SLAs)',
          body: 'Clients subscribing to ongoing maintenance receive guaranteed response times for mission-critical POS, network gateways, and CCTV surveillance systems during standard business operations.'
        }
      ]
    },
    cookies: {
      title: 'Cookie Policy',
      subtitle: 'Minimal essential cookies for fast, secure performance.',
      icon: <Cookie className="w-5 h-5 text-amber-500" />,
      sections: [
        {
          heading: 'Essential Cookies Only',
          body: 'The Lumina 360 website utilizes only strictly necessary functional cookies required for responsive navigation, session security, and anti-spam verification.'
        },
        {
          heading: 'No Third-Party Advertising Trackers',
          body: 'We do not sell advertising inventory or deploy intrusive third-party cross-site behavioural trackers on our platform.'
        }
      ]
    }
  }[docType];

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-xs flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div 
        className="animate-tab-content bg-white rounded-2xl max-w-xl w-full max-h-[85vh] overflow-y-auto shadow-2xl border border-slate-200 flex flex-col relative"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6 border-b border-slate-100 flex items-center justify-between bg-slate-50/70">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-lg bg-white border border-slate-200 shadow-2xs">
              {content.icon}
            </div>
            <div>
              <h3 className="text-lg font-bold text-slate-900">{content.title}</h3>
              <p className="text-xs text-slate-500">{content.subtitle}</p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-200/60 transition-colors cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="p-6 space-y-5 text-xs text-slate-600 leading-relaxed">
          {content.sections.map((sec, idx) => (
            <div key={idx} className="space-y-1.5">
              <h4 className="font-bold text-slate-900 text-xs">{sec.heading}</h4>
              <p>{sec.body}</p>
            </div>
          ))}
          <div className="pt-2 text-[11px] text-slate-400">
            Last updated: 2026 · Lumina 360 Corporate Governance
          </div>
        </div>

        <div className="p-4 border-t border-slate-100 bg-slate-50 flex justify-end">
          <button
            onClick={onClose}
            className="px-4 py-2 bg-slate-800 hover:bg-slate-900 text-white rounded-lg text-xs font-semibold cursor-pointer"
          >
            Acknowledge & Close
          </button>
        </div>
      </div>
    </div>
  );
};
