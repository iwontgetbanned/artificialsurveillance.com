import { useParams, Link } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';
import { industries } from '../../data/industries';

interface Industry {
  id: string;
  name: string;
  image: string;
  description: string;
  benefits: string[];
  longDescription?: string;
  challenges?: string[];
  solutions?: string[];
  testimonials?: {
    quote: string;
    name: string;
    title: string;
    company: string;
  }[];
}

const IndustryDetail = () => {
  const { industryId } = useParams<{ industryId: string }>();
  const [industry, setIndustry] = useState<Industry | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Find the industry based on the ID from the URL parameter
    const currentIndustry = industries.find(ind => ind.id === industryId) || null;

    if (currentIndustry) {
      // Add additional content for the industry detail page
      const enhancedIndustry: Industry = {
        ...currentIndustry,
        longDescription: getIndustryLongDescription(currentIndustry.id),
        challenges: getIndustryChallenges(currentIndustry.id),
        solutions: getIndustrySolutions(currentIndustry.id),
        testimonials: getIndustryTestimonials(currentIndustry.id),
      };
      setIndustry(enhancedIndustry);
    }

    setLoading(false);
  }, [industryId]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (!industry) {
    return (
      <div className="container-custom pt-32 pb-20">
        <h2 className="heading-lg text-center mb-8">Industry Not Found</h2>
        <p className="text-accent-silver text-center mb-8">
          Sorry, we couldn't find the industry you're looking for.
        </p>
        <div className="flex justify-center">
          <Link to="/industries" className="btn-primary">
            Back to Industries
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${industry.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
              mixBlendMode: 'luminosity'
            }}
          ></div>
        </div>

        <div className="container-custom relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <Link
              to="/industries"
              className="inline-flex items-center text-accent-silver hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Industries</span>
            </Link>
            <h1 className="heading-lg mb-6 text-white">
              <span className="gradient-text">{industry.name}</span> Solutions
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="heading-md mb-6">
                  Building resilience while <span className="gradient-text">transforming operations</span>
                </h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-accent-silver">
                    {industry.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Challenges Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-white mb-6">Key Challenges</h3>
                <div className="space-y-4">
                  {industry.challenges?.map((challenge, idx) => (
                    <div key={idx} className="bg-background-dark rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-accent-silver">{challenge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Our Solutions</h3>
                <div className="space-y-4">
                  {industry.solutions?.map((solution, idx) => (
                    <div key={idx} className="bg-background-dark rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-accent-silver">{solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-background-dark rounded-xl overflow-hidden sticky top-28">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Key Benefits</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-accent-silver">
                        <FiChevronRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-background p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Ready to get started?</h3>
                  <p className="text-accent-silver mb-6">
                    Talk to our experts about how we can tailor our solutions for your {industry.name.toLowerCase()} needs.
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section (if any) */}
      {industry.testimonials && industry.testimonials.length > 0 && (
        <section className="py-16 bg-background-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-md mb-6">
                What <span className="gradient-text">{industry.name}</span> Clients Say
              </h2>
              <p className="text-accent-silver max-w-2xl mx-auto">
                Hear from our clients about how our solutions have transformed their operations and security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-background rounded-xl p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11H7.104C6.494 11 6 10.506 6 9.896V8.104C6 7.494 6.494 7 7.104 7H9.896C10.506 7 11 7.494 11 8.104V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 11H15.104C14.494 11 14 10.506 14 9.896V8.104C14 7.494 14.494 7 15.104 7H17.896C18.506 7 19 7.494 19 8.104V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white italic flex-grow mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-accent-silver text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready for a tailored {industry.name.toLowerCase()} solution?</h2>
                <p className="text-accent-silver text-lg">
                  Let us design a surveillance system customized for your specific requirements.
                </p>
              </div>
              <Link to="/contact" className="btn-primary whitespace-nowrap flex items-center">
                <span>Get Started</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

// Helper functions to get additional content for each industry
const getIndustryLongDescription = (industryId: string): string => {
  switch (industryId) {
    case 'airports':
      return 'Airports face evolving security challenges as air travel continues to grow. Our integrated surveillance solutions help airport operators maintain a safe and secure environment while optimizing operations. By unifying security, operations, and analytics, airports can enhance passenger experience, improve operational efficiency, and maintain regulatory compliance.';
    case 'banking':
      return 'Financial institutions require robust security measures to protect assets, staff, and customers. Our unified surveillance solutions for banks and financial services organizations provide comprehensive security coverage while delivering valuable operational insights. From fraud prevention to branch optimization, our solutions help financial institutions enhance security while improving customer service.';
    case 'corporate':
      return 'Corporate campuses require flexible security solutions that can adapt to changing needs while maintaining a welcoming environment. Our unified surveillance platform helps organizations protect their people, property, and assets while optimizing workplace management. From access control to visitor management, our solutions help create safer, more efficient corporate environments.';
    case 'datacenter':
      return 'Data centers house critical infrastructure that requires the highest levels of physical security. Our integrated surveillance solutions help data center operators protect their facilities from threats while ensuring operational efficiency. With real-time monitoring and analytics, data centers can maintain security compliance while optimizing operations.';
    case 'education':
      return 'Educational institutions need to create safe learning environments while managing diverse campus operations. Our unified surveillance solutions help schools, colleges, and universities enhance security, streamline operations, and improve campus life. From access control to emergency management, our platform provides comprehensive protection for educational communities.';
    case 'energy':
      return 'Energy and utilities facilities require robust security to protect critical infrastructure from physical and cyber threats. Our surveillance solutions help operators monitor remote sites, secure perimeters, and maintain regulatory compliance. With integrated analytics and alarm management, energy providers can enhance security while optimizing operations.';
    case 'government':
      return 'Government agencies face unique security challenges that require specialized solutions. Our unified surveillance platform helps protect government buildings, secure sensitive areas, and manage public spaces. With advanced analytics and integration capabilities, government organizations can enhance security while improving operational efficiency.';
    case 'healthcare':
      return 'Healthcare facilities need to balance security requirements with patient care priorities. Our unified surveillance solutions help hospitals and medical centers protect patients, staff, and assets while improving operational efficiency. From access control to patient monitoring, our platform helps create safer healthcare environments.';
    case 'retail':
      return 'Retailers face multiple security challenges while trying to create positive shopping experiences. Our unified surveillance solutions help retail organizations prevent loss, optimize operations, and improve customer service. With integrated analytics and POS integration, retailers can enhance security while gaining valuable business insights.';
    case 'construction':
      return 'Construction sites require robust security and safety monitoring to protect workers, equipment, and materials. Our AI-powered video analytics help construction managers improve health & safety compliance and minimize damage on sites. With features like safety helmet detection, staff attendance tracking, and remote monitoring, construction companies can enhance site security while improving operational efficiency.';
    case 'transit':
      return 'Transit systems need to ensure passenger safety while maintaining operational efficiency. Our unified surveillance solutions help transit operators monitor vehicles, stations, and infrastructure while improving service reliability. With integrated analytics and alarm management, transit agencies can enhance security while optimizing operations.';
    case 'gas-stations':
      return 'Gas stations face unique security challenges including theft, safety hazards, and operational inefficiencies. Our surveillance solutions provide comprehensive monitoring with AI-powered video analytics to improve public health & safety and enhance customer service. From license plate recognition to smoke detection and POS transaction verification, our system helps gas station operators maintain security while optimizing business operations.';
    default:
      return 'Our industry-specific surveillance solutions are designed to address the unique security and operational challenges in your sector. By unifying video surveillance, access control, and advanced analytics, we help organizations enhance security while improving operational efficiency.';
  }
};

const getIndustryChallenges = (industryId: string): string[] => {
  switch (industryId) {
    case 'airports':
      return [
        'Maintaining high security levels across vast terminal spaces and perimeters',
        'Managing increasing passenger volumes while ensuring efficient screening',
        'Coordinating security operations across multiple stakeholders and agencies',
        'Protecting against evolving threats including drones and cyber attacks',
        'Meeting strict regulatory compliance requirements'
      ];
    case 'banking':
      return [
        'Protecting assets and preventing fraud across multiple branches',
        'Ensuring customer and staff safety without compromising service quality',
        'Maintaining regulatory compliance with video retention requirements',
        'Coordinating security operations across distributed branch networks',
        'Balancing security needs with customer experience'
      ];
    case 'corporate':
      return [
        'Securing large campus environments with multiple buildings and access points',
        'Managing employee and visitor access while maintaining convenience',
        'Protecting intellectual property and sensitive information',
        'Optimizing space utilization and workplace management',
        'Coordinating security operations across global locations'
      ];
    case 'datacenter':
      return [
        'Protecting mission-critical infrastructure from physical threats',
        'Maintaining strict access control to sensitive areas',
        'Meeting compliance requirements for data protection regulations',
        'Monitoring environmental conditions to prevent equipment damage',
        'Coordinating security with IT operations'
      ];
    case 'education':
      return [
        'Creating safe learning environments while maintaining openness',
        'Managing access control across multiple buildings and campuses',
        'Protecting students and staff during emergency situations',
        'Monitoring large, open campus areas efficiently',
        'Balancing security needs with privacy concerns'
      ];
    case 'energy':
      return [
        'Securing remote and distributed infrastructure against physical threats',
        'Protecting critical infrastructure from sabotage and terrorism',
        'Monitoring environmental conditions and safety hazards',
        'Maintaining regulatory compliance for critical infrastructure protection',
        'Coordinating security operations across vast geographic areas'
      ];
    case 'government':
      return [
        'Protecting sensitive facilities and information from diverse threats',
        'Managing public access while maintaining high security levels',
        'Coordinating security operations across multiple agencies',
        'Meeting stringent regulatory and compliance requirements',
        'Balancing security needs with public service accessibility'
      ];
    case 'healthcare':
      return [
        'Protecting patients, staff, and visitors in open hospital environments',
        'Securing sensitive areas like pharmacies and infant wards',
        'Managing access control across complex hospital layouts',
        'Monitoring patient safety while respecting privacy',
        'Maintaining regulatory compliance with healthcare security standards'
      ];
    case 'retail':
      return [
        'Preventing theft and reducing shrinkage while maintaining a positive shopping experience',
        'Monitoring multiple locations with limited security personnel',
        'Analyzing customer behavior to optimize store layouts and staffing',
        'Coordinating security operations across distributed store networks',
        'Balancing security measures with customer experience'
      ];
    case 'construction':
      return [
        'Monitoring worker safety compliance across large construction sites',
        'Preventing theft of valuable equipment and materials',
        'Tracking worker attendance and site access control',
        'Managing security across multiple construction projects simultaneously',
        'Detecting hazardous conditions and safety violations in real-time'
      ];
    case 'transit':
      return [
        'Ensuring passenger safety across vehicles, stations, and infrastructure',
        'Monitoring fare collection and reducing fare evasion',
        'Coordinating security operations across distributed transit networks',
        'Managing incident response in moving vehicles and fixed locations',
        'Balancing security measures with passenger convenience'
      ];
    case 'gas-stations':
      return [
        'Preventing fuel theft and drive-offs',
        'Monitoring for safety hazards such as smoke and fire at fuel pumps',
        'Managing customer flow and preventing long queues',
        'Securing store operations and preventing shoplifting',
        'Verifying POS transactions and preventing fraud'
      ];
    default:
      return [
        'Maintaining high security levels while optimizing operational efficiency',
        'Coordinating security operations across multiple locations',
        'Protecting against evolving physical and cyber threats',
        'Meeting industry-specific regulatory compliance requirements',
        'Balancing security needs with operational priorities'
      ];
  }
};

const getIndustrySolutions = (industryId: string): string[] => {
  switch (industryId) {
    case 'airports':
      return [
        'Unified security platform integrating video surveillance, access control, and analytics',
        'Advanced perimeter protection with automated intrusion detection',
        'Passenger flow monitoring and queue management analytics',
        'Centralized command and control for multi-agency coordination',
        'Automated incident detection and response workflows'
      ];
    case 'banking':
      return [
        'Unified security platform for branch, ATM, and corporate office protection',
        'Transaction verification with integrated video and data',
        'Centralized monitoring of distributed branch networks',
        'Face recognition for VIP client identification and security alerts',
        'Automated incident reporting and investigation tools'
      ];
    case 'corporate':
      return [
        'Enterprise-wide security management platform for multiple locations',
        'Advanced access control with mobile credentials and visitor management',
        'Space utilization analytics and workplace optimization',
        'Emergency management and mass notification capabilities',
        'Remote monitoring and management for global operations'
      ];
    case 'datacenter':
      return [
        'Multi-layered physical security with advanced access control',
        'Perimeter protection with automated intrusion detection',
        'Environmental monitoring integrated with security systems',
        'Audit trail and compliance reporting tools',
        'Unified security operations center capabilities'
      ];
    case 'education':
      return [
        'Campus-wide security platform with emergency management',
        'Unified access control for buildings and restricted areas',
        'Automated people counting and occupancy monitoring',
        'Emergency lockdown and mass notification capabilities',
        'Remote monitoring for multi-campus operations'
      ];
    case 'energy':
      return [
        'Remote site monitoring with automated alerts',
        'Perimeter protection for critical infrastructure',
        'Environmental and safety monitoring integration',
        'Mobile security capabilities for field operations',
        'Centralized monitoring for distributed infrastructure'
      ];
    case 'government':
      return [
        'High-security access control for sensitive facilities',
        'Video surveillance with advanced analytics',
        'Interagency security coordination capabilities',
        'Public space monitoring with privacy protection',
        'Integrated emergency management and response'
      ];
    case 'healthcare':
      return [
        'Hospital-wide security platform with department-specific protocols',
        'Patient and visitor management with access control',
        'Asset tracking and equipment monitoring',
        'Infant protection and patient monitoring',
        'Emergency response coordination and lockdown capabilities'
      ];
    case 'retail':
      return [
        'Integrated loss prevention with POS exception monitoring',
        'Customer analytics for store optimization',
        'Multi-site security management from central locations',
        'Automated alerts for suspicious activities',
        'Business intelligence tools for operational improvement'
      ];
    case 'construction':
      return [
        'Safety helmet and safety vest detection with automated alerts',
        'Face recognition for site access control and attendance tracking',
        'Remote monitoring capabilities for multiple construction sites',
        'Equipment and material security with intrusion detection',
        'Automated reporting for safety compliance and incident management'
      ];
    case 'transit':
      return [
        'Integrated security for vehicles, stations, and infrastructure',
        'Passenger counting and crowd management analytics',
        'Fare evasion detection and prevention',
        'Emergency response coordination across transit networks',
        'Mobile security capabilities for moving vehicles'
      ];
    case 'gas-stations':
      return [
        'License plate recognition for vehicle tracking and drive-off prevention',
        'Smoke and fire detection with automated emergency response',
        'Queue management and customer flow analytics',
        'Face recognition for known offender alerts',
        'POS integration for transaction verification and fraud prevention'
      ];
    default:
      return [
        'Unified security platform integrating video, access control, and analytics',
        'Centralized monitoring and management for multiple locations',
        'Advanced analytics for security and operational insights',
        'Automated incident detection and response workflows',
        'Customized solutions for industry-specific challenges'
      ];
  }
};

const getIndustryTestimonials = (industryId: string): { quote: string; name: string; title: string; company: string }[] => {
  switch (industryId) {
    case 'airports':
      return [
        {
          quote: "We have to maintain a certain response time to any alarm in the airport and handle these alarms appropriately. Now with the unified security platform, we are able to do that much faster than ever before.",
          name: "Safraz Samad",
          title: "Security Project Manager",
          company: "Tampa International Airport"
        },
        {
          quote: "The integrated access control and video platform has helped our operations enormously. The fact that everything is merged into one platform gives our operations a wealth of information that we used to look for in three or four systems.",
          name: "Daniel St-Pierre",
          title: "Deputy Director, Operations & IT Security",
          company: "Montréal-Trudeau International Airport"
        }
      ];
    case 'banking':
      return [
        {
          quote: "The unified security platform allows us to monitor all our branches from a central location, improving our response time and security coverage while reducing operational costs.",
          name: "Michael Hernandez",
          title: "Security Director",
          company: "National Financial Group"
        },
        {
          quote: "The integration of video with transaction data has significantly improved our ability to investigate incidents and prevent fraud across our network.",
          name: "Sarah Johnson",
          title: "VP of Security Operations",
          company: "First Metro Bank"
        }
      ];
    case 'retail':
      return [
        {
          quote: "The advanced analytics have given us valuable insights into customer behavior while significantly reducing shrinkage across our stores.",
          name: "Robert Chen",
          title: "Loss Prevention Director",
          company: "Urban Retail Group"
        },
        {
          quote: "Being able to monitor multiple locations from our headquarters has improved our security operations and allowed us to optimize staffing across our network.",
          name: "Jennifer Williams",
          title: "Head of Security",
          company: "MegaMart Retail"
        }
      ];
    case 'construction':
      return [
        {
          quote: "The safety helmet detection system has dramatically improved our compliance rates and helped us maintain a safer working environment for all personnel.",
          name: "Michael Torres",
          title: "Safety Director",
          company: "Premier Construction"
        },
        {
          quote: "The ability to remotely monitor multiple construction sites has been game-changing for our security operations and project management.",
          name: "David Nguyen",
          title: "Operations Manager",
          company: "BuildTech Solutions"
        }
      ];
    case 'gas-stations':
      return [
        {
          quote: "Since implementing the AI surveillance system, we've seen a 95% reduction in drive-offs and significantly improved our response time to safety incidents.",
          name: "James Franklin",
          title: "Regional Manager",
          company: "FuelStar Stations"
        },
        {
          quote: "The customer analytics have helped us optimize our store layout and staffing, resulting in shorter queue times and improved customer satisfaction.",
          name: "Maria Rodriguez",
          title: "Operations Director",
          company: "Metro Gas & Convenience"
        }
      ];
    default:
      return [];
  }
};

export default IndustryDetail;
