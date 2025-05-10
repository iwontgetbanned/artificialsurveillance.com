export interface Industry {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
}

export const industries: Industry[] = [
  {
    id: 'airports',
    name: 'Airports',
    image: 'https://ext.same-assets.com/3349557025/1827696103.jpeg',
    description: 'Enhance airport security, streamline operations, and improve passenger experience with our integrated AI surveillance systems.',
    benefits: [
      'Unified security operations for terminals, parking, and perimeter',
      'Automated passenger flow analytics',
      'Real-time threat detection and response',
      'Integration with access control and boarding systems',
      'Baggage and cargo monitoring'
    ]
  },
  {
    id: 'banking',
    name: 'Financial Institutions',
    image: 'https://ext.same-assets.com/3349557025/3434084779.jpeg',
    description: 'Create a connected banking environment with advanced security monitoring for branches, ATMs, and corporate headquarters.',
    benefits: [
      'ATM surveillance with transaction verification',
      'Branch security with customer flow analytics',
      'Facial recognition for VIP client identification',
      'Integration with access control systems',
      'Remote monitoring of multiple locations'
    ]
  },
  {
    id: 'corporate',
    name: 'Corporate Campuses',
    image: 'https://ext.same-assets.com/3349557025/988851090.jpeg',
    description: 'Secure your corporate environment with enterprise-grade surveillance solutions that protect assets and optimize workplace operations.',
    benefits: [
      'Unified security platform for multiple buildings',
      'Employee and visitor management',
      'Occupancy monitoring and space utilization',
      'Integration with access control systems',
      'Automated incident reporting'
    ]
  },
  {
    id: 'datacenter',
    name: 'Data Centers',
    image: 'https://ext.same-assets.com/3349557025/2699657495.jpeg',
    description: 'Protect mission-critical infrastructure with comprehensive surveillance solutions designed for high-security facilities.',
    benefits: [
      'Perimeter monitoring with advanced analytics',
      'Server room access control integration',
      'Equipment monitoring and environmental alerts',
      'Automated security event management',
      'Compliance and audit support'
    ]
  },
  {
    id: 'education',
    name: 'Education',
    image: 'https://ext.same-assets.com/3349557025/1984680658.jpeg',
    description: 'Create safer learning environments with integrated surveillance systems that protect students, staff, and educational assets.',
    benefits: [
      'Campus-wide unified security monitoring',
      'Automated attendance and people counting',
      'Emergency event detection and response',
      'Integration with access control for buildings',
      'Remote monitoring capabilities'
    ]
  },
  {
    id: 'energy',
    name: 'Energy & Utilities',
    image: 'https://ext.same-assets.com/3349557025/278625944.jpeg',
    description: 'Secure critical infrastructure and remote facilities with AI-powered surveillance that detects threats and operational issues.',
    benefits: [
      'Remote site monitoring with analytics',
      'Perimeter security for critical infrastructure',
      'Integration with industrial control systems',
      'Equipment monitoring and maintenance alerts',
      'Compliance with regulatory requirements'
    ]
  },
  {
    id: 'government',
    name: 'Government Agencies',
    image: 'https://ext.same-assets.com/3349557025/3048582873.jpeg',
    description: 'Meet the highest security standards with surveillance solutions designed for government facilities and public buildings.',
    benefits: [
      'Multi-site security management',
      'Visitor tracking and management',
      'Advanced video analytics for threat detection',
      'Integration with secure access control',
      'Compliance with government security protocols'
    ]
  },
  {
    id: 'healthcare',
    name: 'Healthcare',
    image: 'https://ext.same-assets.com/3349557025/4126793175.jpeg',
    description: 'Enhance patient safety and facility security with healthcare-specific surveillance solutions that protect sensitive areas.',
    benefits: [
      'Patient and visitor monitoring',
      'Medication and equipment tracking',
      'Staff activity verification',
      'Integration with hospital access systems',
      'Remote monitoring of multiple facilities'
    ]
  },
  {
    id: 'retail',
    name: 'Retail',
    image: 'https://ext.same-assets.com/3349557025/2965030131.jpeg',
    description: 'Transform retail operations with AI-powered surveillance that improves security, customer experience, and business intelligence.',
    benefits: [
      'Loss prevention with advanced analytics',
      'Customer behavior and traffic patterns',
      'Queue management and staffing optimization',
      'POS integration for transaction verification',
      'Multi-location management'
    ]
  },
  {
    id: 'construction',
    name: 'Construction',
    image: 'https://ext.same-assets.com/927606210/3106699132.jpeg',
    description: 'Control your construction site remotely with AI-powered video analytics to improve health & safety and minimize damage on construction sites.',
    benefits: [
      'Safety helmet and vest detection',
      'Staff attendance reports and time tracking',
      '24/7 remote monitoring of multiple sites',
      'Face recognition for site access',
      'Smoke and fire detection with automated alerts'
    ]
  },
  {
    id: 'gas-stations',
    name: 'Gas Stations',
    image: 'https://ext.same-assets.com/3438473885/260387170.jpeg',
    description: 'Enhance gas station security and operations with AI-powered video analytics that improves public health & safety and enhances customer service.',
    benefits: [
      'License plate recognition for vehicle tracking',
      'Smoke and fire detection for early warning',
      'Face recognition for security management',
      'Queue management and customer analytics',
      'POS transaction monitoring and verification'
    ]
  },
  {
    id: 'schools',
    name: 'Schools',
    image: 'https://ext.same-assets.com/3349557025/2257941788.jpeg',
    description: 'Protect students, staff, and educational assets with comprehensive surveillance systems designed for K-12 schools and educational institutions.',
    benefits: [
      'Campus-wide security monitoring with real-time alerts',
      'Automated attendance and visitor management',
      'Emergency event detection and immediate response',
      'Integration with access control systems for buildings',
      'Remote monitoring capabilities for administrators'
    ]
  }
];
