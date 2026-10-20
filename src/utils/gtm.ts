// Google Tag Manager & Google Analytics 4 tracking utilities

declare global {
  interface Window {
    dataLayer: Record<string, any>[];
    gtag?: (...args: any[]) => void;
  }
}

// Measurement ID can be customized or configured via Vite env
export const GA4_MEASUREMENT_ID = import.meta.env.VITE_GA4_ID || 'G-C9K4PZZQTV';

export function pushToDataLayer(data: Record<string, any>): void {
  if (typeof window === 'undefined') return;
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push(data);
}

export function trackGTMPageView(path: string, title?: string): void {
  const pageTitle = title || document.title;
  const pageLocation = window.location.href;

  pushToDataLayer({
    event: 'virtual_pageview',
    page_path: path,
    page_title: pageTitle,
    page_location: pageLocation,
  });

  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('config', GA4_MEASUREMENT_ID, {
      page_path: path,
      page_title: pageTitle,
      page_location: pageLocation,
    });
  }
}

export function trackGTMEvent(eventName: string, params: Record<string, any> = {}): void {
  pushToDataLayer({
    event: eventName,
    ...params,
  });
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', eventName, params);
  }
}
