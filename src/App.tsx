import React, { useState, useEffect } from 'react';
import { Header } from './components/layout/Header';
import { Footer } from './components/layout/Footer';

// Independent Dedicated Pages
import { HomePage } from './pages/HomePage';
import { SolutionsPage } from './pages/SolutionsPage';
import { PosErpPage } from './pages/PosErpPage';
import { IndustriesPage } from './pages/IndustriesPage';
import { PricingPage } from './pages/PricingPage';
import { ContactPage } from './pages/ContactPage';
import { ThankYouPage } from './pages/ThankYouPage';

// Modals
import { LegalModal } from './components/modals/LegalModal';
import { ContactModal } from './components/modals/ContactModal';
import { RegisterChoiceModal } from './components/modals/RegisterChoiceModal';
import { FloatingWhatsApp } from './components/common/FloatingWhatsApp';
import { trackGTMPageView } from './utils/gtm';

const PAGE_META: Record<string, { title: string; path: string }> = {
  home: {
    title: 'Lumina 360 | Enterprise POS & ERP Technology Solutions Kenya',
    path: '/',
  },
  solutions: {
    title: 'Technology Solutions & Services | Lumina 360 Kenya',
    path: '/solutions',
  },
  'pos-erp': {
    title: 'Point of Sale (POS) & Business ERP Systems | Lumina 360 Kenya',
    path: '/pos-erp',
  },
  industries: {
    title: 'Sectors & Industry Solutions | Lumina 360 Kenya',
    path: '/industries',
  },
  pricing: {
    title: 'Transparent Pricing & Scope Calculator | Lumina 360',
    path: '/pricing',
  },
  contact: {
    title: 'Contact Engineering Team & WhatsApp Consultation | Lumina 360',
    path: '/contact',
  },
  'thank-you': {
    title: 'Quote Request Received | Lumina 360 Kenya',
    path: '/thank-you',
  },
  'quote-received': {
    title: 'Quote Request Received | Lumina 360 Kenya',
    path: '/thank-you',
  },
};

export function App() {
  // Parse initial page from URL pathname or hash
  const getPageFromUrl = (): string => {
    const pathname = window.location.pathname.replace(/^\/+|\/+$/g, '').trim();
    if (pathname === 'business-systems' || pathname === 'pos-erp') return 'pos-erp';
    if (pathname === 'quote-received') return 'thank-you';
    if (['solutions', 'industries', 'pricing', 'contact', 'thank-you'].includes(pathname)) {
      return pathname;
    }

    const hash = window.location.hash.replace('#', '').trim();
    if (hash === 'business-systems' || hash === 'pos-erp') return 'pos-erp';
    if (hash === 'quote-received') return 'thank-you';
    if (['solutions', 'pos-erp', 'industries', 'pricing', 'contact', 'thank-you'].includes(hash)) {
      return hash;
    }
    return 'home';
  };

  const [currentPage, setCurrentPage] = useState<string>(getPageFromUrl);

  const [legalDocType, setLegalDocType] = useState<'privacy' | 'terms' | 'cookies' | null>(null);
  const [isLegalModalOpen, setIsLegalModalOpen] = useState(false);

  const [isContactModalOpen, setIsContactModalOpen] = useState(false);
  const [modalDefaultService, setModalDefaultService] = useState<string>('POS & Business ERP Systems');

  const [isRegisterModalOpen, setIsRegisterModalOpen] = useState(false);

  // Handle browser back/forward buttons (popstate and hashchange)
  useEffect(() => {
    const handleUrlChange = () => {
      const page = getPageFromUrl();
      setCurrentPage(page);
      window.scrollTo({ top: 0, behavior: 'instant' });
    };

    window.addEventListener('popstate', handleUrlChange);
    window.addEventListener('hashchange', handleUrlChange);
    return () => {
      window.removeEventListener('popstate', handleUrlChange);
      window.removeEventListener('hashchange', handleUrlChange);
    };
  }, []);

  // Track GTM & GA4 virtual pageviews and dynamically update document titles
  useEffect(() => {
    const meta = PAGE_META[currentPage] || PAGE_META.home;
    document.title = meta.title;
    trackGTMPageView(meta.path, meta.title);
  }, [currentPage]);

  const handleNavigate = (pageId: string) => {
    const normalized = pageId === 'business-systems' ? 'pos-erp' : pageId;
    setCurrentPage(normalized);
    
    // Update browser URL cleanly
    const targetPath = normalized === 'home' ? '/' : `/${normalized}`;
    if (window.location.pathname !== targetPath) {
      history.pushState(null, '', targetPath);
    }

    // Always scroll to top when changing to an independent page
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleOpenContactModal = (defaultService?: string) => {
    setModalDefaultService(defaultService || 'POS & Business ERP Systems');
    setIsContactModalOpen(true);
  };

  const handleOpenLegalModal = (docType: 'privacy' | 'terms' | 'cookies') => {
    setLegalDocType(docType);
    setIsLegalModalOpen(true);
  };

  const handleOpenRegisterModal = () => {
    setIsRegisterModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col bg-[#F5F8FC] text-[#171A21] selection:bg-[#FFD21C] selection:text-slate-900">
      
      {/* Header with Logo Color Accents & Register Portal Trigger */}
      <Header
        activeSection={currentPage}
        onNavigate={handleNavigate}
        onOpenContactModal={handleOpenContactModal}
        onOpenRegisterModal={handleOpenRegisterModal}
      />

      {/* Independent Dedicated Pages Container with Smooth Transitions */}
      <main className="flex-1 pt-20">
        <div key={currentPage} className="animate-page-enter">
          {/* Page 1: Home Flagship */}
          {currentPage === 'home' && (
            <HomePage
              onNavigate={handleNavigate}
              onOpenContactModal={handleOpenContactModal}
              onOpenRegisterModal={handleOpenRegisterModal}
            />
          )}

          {/* Page 2: Solutions & Services Dedicated Page */}
          {currentPage === 'solutions' && (
            <SolutionsPage
              onSelectSolution={(sol) => handleOpenContactModal(sol.title)}
              onRequestQuote={handleOpenContactModal}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 3: POS & Business ERP Hub Dedicated Page */}
          {currentPage === 'pos-erp' && (
            <PosErpPage
              onOpenContactModal={handleOpenContactModal}
              onNavigate={handleNavigate}
              onOpenRegisterModal={handleOpenRegisterModal}
            />
          )}

          {/* Page 4: Industries Dedicated Page */}
          {currentPage === 'industries' && (
            <IndustriesPage
              onRequestQuoteForIndustry={(indName) => handleOpenContactModal(`${indName} Proposal`)}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 5: Pricing & Scope Calculator Dedicated Page */}
          {currentPage === 'pricing' && (
            <PricingPage
              onSelectTier={(tierName) => handleOpenContactModal(`${tierName} Proposal`)}
              onOpenContactModal={handleOpenContactModal}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 6: Contact & WhatsApp Consultation Dedicated Page */}
          {currentPage === 'contact' && (
            <ContactPage
              initialService={modalDefaultService}
              onNavigate={handleNavigate}
            />
          )}

          {/* Page 7: Thank You & Quote Request Conversion Page */}
          {currentPage === 'thank-you' && (
            <ThankYouPage
              onNavigate={handleNavigate}
            />
          )}
        </div>
      </main>

      {/* Footer with Registration Links */}
      <Footer
        onNavigate={handleNavigate}
        onOpenLegalModal={handleOpenLegalModal}
        onOpenRegisterModal={handleOpenRegisterModal}
      />

      {/* Universal Modals */}
      <RegisterChoiceModal
        isOpen={isRegisterModalOpen}
        onClose={() => setIsRegisterModalOpen(false)}
      />

      <LegalModal
        isOpen={isLegalModalOpen}
        onClose={() => setIsLegalModalOpen(false)}
        docType={legalDocType}
      />

      <ContactModal
        isOpen={isContactModalOpen}
        onClose={() => setIsContactModalOpen(false)}
        defaultService={modalDefaultService}
        onSuccess={() => {
          setIsContactModalOpen(false);
          handleNavigate('thank-you');
        }}
      />

      {/* Floating WhatsApp Action Widget */}
      <FloatingWhatsApp />
    </div>
  );
}

export default App;
