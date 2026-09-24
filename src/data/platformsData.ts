export interface PlatformProduct {
  id: string;
  name: string;
  badge: string;
  tagline: string;
  description: string;
  targetAudience: string;
  keyFeatures: { title: string; desc: string }[];
  businessBenefits: string[];
  integrations: string[];
  status: 'Ready for Deployment' | 'Custom Configured';
}

export const PLATFORMS_DATA: PlatformProduct[] = [
  {
    id: 'lumina-flow',
    name: 'Lumina Flow™ ERP',
    badge: 'Operations & Workflow',
    tagline: 'The flexible business management engine built around how your organization actually functions.',
    description: 'A modular, high-speed operational suite that links inventory, sales, team tasks, role permissions, and financial logs into a single responsive command center without forcing you into rigid off-the-shelf constraints.',
    targetAudience: 'Growing enterprises, distribution hubs, processors, clinic networks, and multi-branch operations.',
    keyFeatures: [
      { title: 'Modular Architecture', desc: 'Activate only the modules you need: inventory, dispatch, billing, staff, or field logs.' },
      { title: 'Multi-Branch Synchronization', desc: 'Centralize records across multiple locations with instant real-time reconciliation.' },
      { title: 'Granular Role Permissions', desc: 'Assign strict access controls for operators, supervisors, cashiers, and executives.' },
      { title: 'Automated Ledger Auditing', desc: 'Every transaction is timestamped with immutable audit trails to prevent fraud.' }
    ],
    businessBenefits: [
      'Eliminate duplicate entries across spreadsheets and paper notebooks',
      'Instant visibility into company-wide cash, inventory, and pending orders',
      'Built specifically to adapt to custom industry workflows and field realities'
    ],
    integrations: ['Barcode Scanners', 'M-Pesa STK Gateway', 'Thermal Receipt Printers', 'SMS Gateways', 'Export to Excel/PDF'],
    status: 'Custom Configured'
  },
  {
    id: 'lumina-commerce',
    name: 'Lumina Commerce™',
    badge: 'Digital Commerce',
    tagline: 'High-conversion digital storefront and order management with native mobile money.',
    description: 'A high-performance digital commerce platform designed for speed, low cart abandonment, and instant payment settlement via automated mobile money (M-Pesa) and international cards.',
    targetAudience: 'Retail merchants, wholesale suppliers, direct-to-consumer brands, and hospitality ordering.',
    keyFeatures: [
      { title: 'Instant Mobile Money Checkout', desc: 'Frictionless STK push payments verified automatically in seconds.' },
      { title: 'Live Stock Reservation', desc: 'Prevents double-booking by locking inventory during active checkout sessions.' },
      { title: 'Automated Dispatch Notifications', desc: 'Instant SMS and email updates to customers with delivery tracking.' },
      { title: 'Merchant Operations Console', desc: 'One-click fulfillment, order filtering, return management, and customer CRM.' }
    ],
    businessBenefits: [
      'Maximize conversion rates across mobile devices and smartphones',
      'Automatic payment reconciliation without manual screenshot checking',
      'Scalable catalog architecture supporting thousands of SKUs'
    ],
    integrations: ['M-Pesa Express', 'Visa / Mastercard Gateways', 'Courier APIs', 'Google Analytics', 'WhatsApp Business'],
    status: 'Ready for Deployment'
  },
  {
    id: 'lumina-securelink',
    name: 'Lumina SecureLink™',
    badge: 'Security & Infrastructure',
    tagline: 'Unified CCTV surveillance, network health monitoring, and perimeter alerts.',
    description: 'A hardware-integrated surveillance and infrastructure management framework that provides enterprise directors with crystal-clear 24/7 visibility over physical facilities, Wi-Fi health, and security perimeters.',
    targetAudience: 'Warehouses, industrial sites, corporate headquarters, schools, farms, and medical centers.',
    keyFeatures: [
      { title: 'Encrypted Remote Viewing', desc: 'Access live camera streams and playback smoothly on iOS, Android, and PC.' },
      { title: 'Smart Perimeter Tripwires', desc: 'AI-assisted line crossing notifications after business hours to deter intrusions.' },
      { title: 'Network Uptime Heartbeat', desc: 'Automated alerts when access points or secondary internet connections fail.' },
      { title: 'Hybrid Cloud & Local Storage', desc: 'Preserve high-resolution footage locally with off-site cloud backups of critical events.' }
    ],
    businessBenefits: [
      'Comprehensive facility protection with reliable tamper-evident recording',
      'Protect internal networks with isolated VLANs for cameras and public Wi-Fi',
      'Professional SLA maintenance ensuring zero blind spots and clean hardware upkeep'
    ],
    integrations: ['HD/4K IP Cameras', 'NVR/NAS Storage Units', 'Managed Switches', 'UPS Power Backups', 'Mobile Notification Apps'],
    status: 'Custom Configured'
  }
];
