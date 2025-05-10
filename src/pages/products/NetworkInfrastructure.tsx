import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiServer, FiShield, FiLayers, FiCheck, FiLink, FiPower, FiHardDrive, FiGrid, FiCpu } from 'react-icons/fi';

const NetworkInfrastructure = () => {
  const appliances = [
    {
      id: 'net-sv300',
      name: 'SV-300 Series All-in-One Security Appliance',
      image: 'https://ext.same-assets.com/3804438303/3837221860.png',
      features: [
        'Support for up to 50 cameras and 100 access control readers',
        'Integrated connectivity for intrusion detection and intercom systems',
        'Up to 60TB of on-board storage with optional RAID5 configuration',
        'Pre-configured and hardened security settings',
        'Unified platform for video, access control, and analytics',
        'Ideal for small to medium businesses and remote sites'
      ]
    },
    {
      id: 'net-sv1000',
      name: 'SV-1000 Series Entry-level Rackmount Appliance',
      image: 'https://ext.same-assets.com/3804438303/2863146978.png',
      features: [
        'Supports up to 300 Mbps throughput for video traffic',
        'Connects up to 2000 access control readers and 75 LPR cameras',
        'Scalable storage options up to 60TB raw capacity',
        'Simplified upgrade path from standalone systems',
        'Cybersecurity hardened with over 200 security settings',
        'Streamlined maintenance with health monitoring'
      ]
    },
    {
      id: 'net-sv2000',
      name: 'SV-2000 Series Enterprise Rackmount Appliance',
      image: 'https://ext.same-assets.com/3804438303/3301065690.png',
      features: [
        'High-performance system with up to 2220 Mbps throughput',
        'Enterprise-grade reliability with redundant power supplies',
        'Expandable storage up to 560TB with RAID capabilities',
        'Designed for mission-critical security deployments',
        'Support for advanced analytics processing',
        'Centralized management for multi-site deployments'
      ]
    },
    {
      id: 'net-sv4000',
      name: 'SV-4000 Series High-Performance Security Appliance',
      image: 'https://ext.same-assets.com/3804438303/3301065690.png',
      features: [
        'Ultra-high bandwidth support for dense camera deployments',
        'Hardware acceleration for AI-powered video analytics',
        'Advanced storage options with hot-swappable drives',
        'Redundant components for mission-critical reliability',
        'Supports high camera counts with multiple video walls',
        'Enterprise-class security hardening'
      ]
    },
    {
      id: 'net-sw300',
      name: 'SW-300 Security Workstation',
      image: 'https://ext.same-assets.com/3804438303/1815332298.png',
      features: [
        'Support for simultaneous display of up to 130 full HD streams',
        'Multiple monitor outputs (up to 8 displays)',
        'Hardware-accelerated video decoding',
        'Optimized for security operations centers',
        'Pre-loaded security software suite',
        'Ergonomic design for 24/7 operation'
      ]
    },
    {
      id: 'net-sw500',
      name: 'SW-500 Advanced Security Workstation',
      image: 'https://ext.same-assets.com/3804438303/1815332298.png',
      features: [
        'High-performance GPU for AI-enhanced video processing',
        'Support for 4K video wall configurations',
        'Real-time analytics processing capabilities',
        'Enhanced cybersecurity features',
        'Optimized thermal design for continuous operation',
        'Multi-site monitoring capabilities'
      ]
    }
  ];

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/3804438303/425503642.jpeg')",
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.2,
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
              to="/products"
              className="inline-flex items-center text-accent-silver hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Products</span>
            </Link>
            <h1 className="heading-lg mb-6 text-white">
              Network <span className="gradient-text">Infrastructure Solutions</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Build your security system on a strong foundation with our comprehensive range of network infrastructure solutions. Our pre-configured, cybersecurity-hardened appliances serve as the backbone of your integrated security system.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Turnkey Solutions",
                description: "Pre-loaded, pre-configured systems that dramatically reduce deployment time and complexity."
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Cybersecurity Hardened",
                description: "Each appliance is pre-configured with over 200 security settings to protect your critical infrastructure."
              },
              {
                icon: <FiLayers className="w-6 h-6" />,
                title: "Unified Platform",
                description: "A single solution that embeds all your core security systems, reducing footprint and operational costs."
              },
              {
                icon: <FiLink className="w-6 h-6" />,
                title: "Simplified Management",
                description: "Centralized system health monitoring and maintenance with automatic alerts and updates."
              }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{benefit.title}</h3>
                <p className="text-accent-silver">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Network Infrastructure Features */}
      <section className="py-16 bg-background-dark relative overflow-hidden">
        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Streamlined <span className="gradient-text">Security Infrastructure</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our network infrastructure solutions are designed to simplify your security deployment and maintenance while providing enterprise-grade reliability and performance. Each appliance comes pre-loaded and configured, significantly reducing deployment time and complexity.
              </p>
              <p className="text-accent-silver mb-8">
                With cybersecurity hardening built in, our systems protect your critical security infrastructure from evolving threats. The unified platform approach integrates video surveillance, access control, intrusion detection, and analytics in a single, cohesive system that's easy to manage and scale.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Request a Consultation</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <img
                src="https://ext.same-assets.com/3804438303/4058434496.jpeg"
                alt="Security Network Infrastructure"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 right-4 bg-background p-4 rounded-xl border border-primary/20 shadow-lg max-w-xs">
                <h4 className="text-primary text-sm font-medium mb-1">Pre-Configured for Rapid Deployment</h4>
                <p className="text-accent-silver text-xs">Our appliances are ready to use out of the box, minimizing setup time and complexity.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our network infrastructure solutions are designed to provide the highest level of performance, security, and reliability for your integrated security system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Pre-Hardened Security",
                description: "Each appliance comes with over 200 security settings preconfigured according to industry best practices, protecting your infrastructure from cyber threats."
              },
              {
                icon: <FiPower className="w-6 h-6" />,
                title: "Simplified Deployment",
                description: "Reduce installation time from days to hours with our pre-loaded, pre-configured appliances that work right out of the box."
              },
              {
                icon: <FiHardDrive className="w-6 h-6" />,
                title: "Scalable Storage",
                description: "Flexible storage options up to 560TB with RAID capabilities ensure you have the capacity to store all your critical security data."
              },
              {
                icon: <FiGrid className="w-6 h-6" />,
                title: "Unified Management",
                description: "Centralized management interface for your entire security infrastructure, from cameras to access control to analytics."
              },
              {
                icon: <FiCpu className="w-6 h-6" />,
                title: "Hardware Acceleration",
                description: "Dedicated processing capabilities for video decoding and analytics to ensure smooth performance even with high camera counts."
              },
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Health Monitoring",
                description: "Proactive system health monitoring with automatic alerts helps prevent issues before they impact your security operations."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-8 rounded-xl border border-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-accent-silver">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Network Infrastructure <span className="gradient-text">Portfolio</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our comprehensive range of network infrastructure solutions is designed to meet the needs of organizations of all sizes, from small businesses to large enterprises.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {appliances.map((appliance, index) => (
              <motion.div
                key={appliance.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all group h-full flex flex-col"
              >
                <div className="aspect-video bg-background-dark/50 flex items-center justify-center p-6">
                  <img
                    src={appliance.image}
                    alt={appliance.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-3">{appliance.name}</h3>
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {appliance.features.slice(0, 4).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-accent-silver">
                          <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                      <span>View details</span>
                      <FiArrowRight className="ml-2" />
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Why Choose Our <span className="gradient-text">Network Infrastructure</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our solutions are designed to provide the most reliable, secure, and efficient foundation for your security system.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Built for unified security",
                description: "Our unified approach allows you to deploy a single solution that embeds all your core security systems. This minimizes footprint and reduces your total cost of ownership."
              },
              {
                title: "Pre-hardened security",
                description: "Each appliance is cyber hardened, right out of the box. More than 200 security settings are preconfigured, so every part of your infrastructure is protected from evolving threats."
              },
              {
                title: "Lowers your organization's risk",
                description: "Every unit is tested to its limits and can be tailored to your unique project requirements. This eliminates the guesswork and lets you design with peace of mind."
              },
              {
                title: "Simplifies your operations",
                description: "Our appliances are ready-to-go the moment you power them on. A single point of contact for support makes deployment and case resolution much simpler."
              }
            ].map((reason, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-8 rounded-xl"
              >
                <h3 className="text-xl font-semibold text-white mb-4">{reason.title}</h3>
                <p className="text-accent-silver">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to strengthen your security infrastructure?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us to discuss how our network infrastructure solutions can provide the ideal foundation for your security system.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Request a Consultation
                </Link>
                <Link to="/products" className="btn-outline whitespace-nowrap">
                  Explore Other Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NetworkInfrastructure;
