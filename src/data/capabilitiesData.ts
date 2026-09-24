export interface CapabilityCase {
  id: string;
  category: string;
  industry: string;
  headline: string;
  challenge: string;
  solutionArchitecture: string;
  keyDeliverables: string[];
  operationalOutcome: string;
  technologiesUsed: string[];
}

export const CAPABILITIES_CASES: CapabilityCase[] = [
  {
    id: 'dairy-intake-automation',
    category: 'Operational Systems',
    industry: 'Dairy & Agriculture',
    headline: 'Multi-Center Milk Intake & Farmer Payout Ledger System',
    challenge: 'A regional dairy collection cooperative was experiencing collection reconciliation delays, clerical paper discrepancies with supplying farmers, and unexplained shrinkage between route collection points and the central chilling plant.',
    solutionArchitecture: 'Engineered a rugged tablet-based intake application that operates offline and automatically syncs when connectivity is established. Weighing scales directly transmit liter measurements, triggering instant SMS delivery to the farmer and immediately recording batch quality readings.',
    keyDeliverables: [
      'Field intake app with offline SQLite sync',
      'Integration with digital industrial weighing scales',
      'Automated SMS dispatch for weight receipts & advance deductions',
      'Central plant reconciliation dashboard with tanker route tracking'
    ],
    operationalOutcome: 'Daily intake reconciliation synchronized in real time, farmer dispute resolution automated, and route transit variance made completely transparent.',
    technologiesUsed: ['React', 'Node.js', 'PostgreSQL', 'SMS Gateway API', 'Industrial Weighing Interface']
  },
  {
    id: 'multi-branch-retail-sync',
    category: 'E-Commerce & POS',
    industry: 'Retail & Distribution',
    headline: 'Centralized Multi-Outlet POS & Real-Time Inventory Control',
    challenge: 'A growing multi-branch retail merchant struggled with phantom inventory, manual end-of-day stock counts, cashier cash discrepancy disputes, and the inability to sell inventory online without risking double-sales.',
    solutionArchitecture: 'Designed a unified barcode point-of-sale system connected to a central cloud inventory database. Integrated mobile money payment verification right at the checkout terminal, combined with an automated inter-branch stock transfer requisition system.',
    keyDeliverables: [
      'High-speed touch/barcode checkout interface with cash drawer triggers',
      'Real-time inventory deduction engine across all physical branch stores',
      'Automated M-Pesa STK push and transaction validation webhook',
      'Multi-branch manager dashboard with shift closure variance audits'
    ],
    operationalOutcome: 'Store-wide inventory shrinkage eliminated, checkout queue times dramatically reduced, and enabled online catalog ordering fulfilled from the nearest branch.',
    technologiesUsed: ['TypeScript', 'Cloud Database', 'Thermal Printing SDK', 'M-Pesa Express API', 'Tailwind CSS']
  },
  {
    id: 'clinic-electronic-workflow',
    category: 'Custom Software',
    industry: 'Healthcare & Clinics',
    headline: 'Electronic Patient Triage, Consultation & Pharmacy Queue',
    challenge: 'An outpatient medical center faced long patient wait times, misplaced physical paper charts, medication stock discrepancies in the pharmacy, and disconnected billing between laboratory and cashier desks.',
    solutionArchitecture: 'Deployed an integrated clinical workflow system linking Reception, Triage, Doctor Consulting Rooms, Lab, Pharmacy, and Cashier into a sequential electronic queue with role-based access security.',
    keyDeliverables: [
      'Digital patient triage with vitals logging and automated queue numbering',
      'Physician clinical consultation portal with electronic prescriptions',
      'Direct pharmacy order fulfillment with automated batch expiry warnings',
      'Single consolidated cashier settlement combining all departmental fees'
    ],
    operationalOutcome: 'Rapid patient turnaround from reception to pharmacy, medication dispensing errors virtually eliminated, and full transparency over daily clinic collections.',
    technologiesUsed: ['React', 'Express API', 'Encrypted Database', 'Role-Based Access Control', 'Thermal Receipt Sync']
  },
  {
    id: 'campus-cctv-networking',
    category: 'Security & Infrastructure',
    industry: 'Corporate & Logistics',
    headline: 'Commercial HD IP Surveillance & High-Density Structured Network',
    challenge: 'A regional logistics compound had extensive blind spots across loading docks, unauthorized perimeter intrusions, frequent Wi-Fi drops that stalled barcode dispatch scanners, and untidy unlabelled server cabling.',
    solutionArchitecture: 'Conducted a thorough physical site survey and deployed a Cat6A structured network backbone, Gigabit PoE managed switching, dual-band Wi-Fi access points with seamless roaming, and weather-rated HD night-vision IP cameras with redundant NVR storage and encrypted remote mobile viewing.',
    keyDeliverables: [
      'Complete structured cabling overhaul with rack dressing & labeling',
      'Weather-rated IP cameras with perimeter boundary tripwires',
      'Isolated VLAN architecture separating office workstations, scanners, and CCTV',
      'Dual-WAN failover router ensuring uninterrupted connection during primary ISP outages'
    ],
    operationalOutcome: 'Full perimeter visibility with zero dead zones, reliable handheld scanner roaming across the entire warehouse floor, and instant smartphone incident alerts for security directors.',
    technologiesUsed: ['Cat6A Structured Cabling', 'Managed PoE Switching', 'Enterprise Wi-Fi APs', 'NVR Storage', 'Secure Mobile Client']
  }
];
