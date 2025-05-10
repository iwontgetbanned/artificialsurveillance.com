import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiShield, FiLock, FiKey, FiUsers, FiServer, FiDatabase, FiCheck, FiMonitor, FiCreditCard } from 'react-icons/fi';

const AccessControl = () => {
  const devices = [
    {
      id: 'synergis-cloud-link',
      name: 'Synergis Cloud Link',
      image: 'https://ext.same-assets.com/1492917911/144738482.png',
      description: 'An intelligent IoT gateway appliance that supports a wide range of IP locks and door controllers, as well as PoE-enabled edge devices.',
      features: [
        'Supports third-party hardware and electronic locks',
        'Direct-to-cloud capabilities for hybrid deployments',
        'Encrypts user data with secure boot functionality',
        'Continues to manage access control locally during network outages',
        'Supports up to 256 readers per unit',
        'Designed for multi-site deployments'
      ]
    },
    {
      id: 'hid-mercury-controllers',
      name: 'HID Mercury Intelligent Controllers',
      image: 'https://ext.same-assets.com/1492917911/510533078.svg',
      description: 'Industry-standard access control panels that provide reliable, enterprise-grade security for doors, elevators, and other secured points.',
      features: [
        'Open architecture platform with flexible configuration options',
        'Advanced encryption for secure communications',
        'Interface with a wide variety of reader technologies',
        'Supports multiple credential formats simultaneously',
        'Seamless integration with Synergis access control system',
        'Field-upgradable firmware'
      ]
    },
    {
      id: 'axis-a1601',
      name: 'Axis A1601 Network Door Controller',
      image: 'https://ext.same-assets.com/1492917911/3134516260.svg',
      description: 'An open, IP-based door controller that offers a scalable and flexible platform for modern access control systems.',
      features: [
        'Powers and controls two doors with support for multiple reader types',
        'Built-in PoE support for simplified installation',
        'Encrypted communication for enhanced cybersecurity',
        'Supervised inputs and outputs for alarm monitoring',
        'Non-volatile memory retains access rules during network outages',
        'Easily integrates with Genetec Synergis'
      ]
    },
    {
      id: 'assa-abloy-locks',
      name: 'ASSA ABLOY Wireless Locks',
      image: 'https://ext.same-assets.com/1492917911/1050934252.svg',
      description: 'Wireless electronic locks that provide secure access control without the need for extensive wiring, perfect for retrofitting existing doors.',
      features: [
        'Seamless integration with Synergis access control',
        'Battery-powered operation with long life',
        'Real-time communication with access control system',
        'Support for multiple credential formats',
        'Sleek, modern design with various finish options',
        'Ideal for interior doors and retrofit applications'
      ]
    },
    {
      id: 'salto-locks',
      name: 'SALTO Electronic Locking Solutions',
      image: 'https://ext.same-assets.com/1492917911/2036997840.svg',
      description: 'Versatile electronic locking systems that provide keyless access control with advanced security features and easy management.',
      features: [
        'Wire-free installation for quick deployment',
        'Support for mobile credentials via smartphone',
        'Audit trail capabilities for enhanced security',
        'Battery-operated with low power consumption',
        'Available in various designs to match building aesthetics',
        'Integrates with Synergis for unified security management'
      ]
    },
    {
      id: 'hid-readers',
      name: 'HID Card Readers',
      image: 'https://ext.same-assets.com/1492917911/2977966190.svg',
      description: 'Industry-leading access control readers that support a wide range of credential technologies, from proximity cards to mobile credentials.',
      features: [
        'Support for multiple credential technologies',
        'Mobile access compatibility with smartphones',
        'Sleek, modern designs for various installations',
        'Indoor and outdoor rated models available',
        'Enhanced security with OSDP protocol support',
        'Energy efficient operation'
      ]
    },
    {
      id: 'stid-readers',
      name: 'STid Mobile ID Readers',
      image: 'https://ext.same-assets.com/1492917911/1074472594.png',
      description: 'Innovative access control readers that enable smartphone-based credentials with advanced security and user convenience.',
      features: [
        'Virtual smartphone credentials for keyless entry',
        'Bluetooth and NFC communication options',
        'Adjustable read ranges for different security needs',
        'OSDP secure channel communication',
        'Vandal-resistant design for durability',
        'Easy integration with Synergis access control'
      ]
    },
    {
      id: 'synergis-softwire',
      name: 'Synergis Softwire Module',
      image: 'https://ext.same-assets.com/1492917911/947744937.png',
      description: 'An interface module that connects traditional access control hardware to the Synergis system, protecting investments in existing infrastructure.',
      features: [
        'Connects legacy hardware to modern Synergis platform',
        'Preserves investment in existing infrastructure',
        'Simple installation and configuration',
        'Enables gradual migration to newer technologies',
        'Supports a wide range of third-party hardware',
        'Extends the life of traditional access control equipment'
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
              backgroundImage: "url('https://ext.same-assets.com/1492917911/1178348738.jpeg')",
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
              Access <span className="gradient-text">Control Systems</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our comprehensive access control solutions, powered by Genetec Synergis, enable you to secure and manage access to your facilities with advanced technology that adapts to your evolving security needs.
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
                icon: <FiLock className="w-6 h-6" />,
                title: "Enhanced Security",
                description: "Protect your facilities with advanced authentication methods and real-time monitoring of access events."
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Open Architecture",
                description: "Break free from proprietary systems with our truly open platform that supports a wide range of third-party hardware."
              },
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Unified Platform",
                description: "Integrate access control with video surveillance and other security systems for comprehensive situational awareness."
              },
              {
                icon: <FiUsers className="w-6 h-6" />,
                title: "Scalable Solutions",
                description: "Start small and expand as needed, with solutions that grow with your organization and adapt to changing requirements."
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

      {/* Synergis Introduction */}
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
                Genetec <span className="gradient-text">Synergis</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Synergis is an IP-based access control system that strengthens your security posture, helps you quickly respond to threats, and optimizes your operations. As a truly open system, it connects to a large selection of third-party access control devices.
              </p>
              <p className="text-accent-silver mb-8">
                With enterprise-grade scalability, Synergis grows with your organization while providing a unified experience through integration with Genetec Security Center. Our implementation includes secure end-to-end encryption, authentication, and a cloud-ready architecture for hybrid or direct-to-cloud deployments.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Request a Consultation</span>
                  <FiArrowRight className="ml-2" />
                </Link>
                <a
                  href="https://resources.genetec.com/synergis-access-control-system/synergis-access-control-hardware-portfolio"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <span>View Hardware Portfolio</span>
                </a>
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
                src="https://ext.same-assets.com/1492917911/144738482.png"
                alt="Synergis Cloud Link device"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 right-4 bg-background p-4 rounded-xl border border-primary/20 shadow-lg max-w-xs">
                <h4 className="text-primary text-sm font-medium mb-1">Why choose Synergis?</h4>
                <p className="text-accent-silver text-xs">An open platform that protects your investment and adapts to evolving security needs.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Access Control Hardware Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Access Control <span className="gradient-text">Hardware</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              We offer a comprehensive range of access control hardware that integrates seamlessly with the Genetec Synergis platform, providing flexible and secure solutions for any facility.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {devices.map((device, index) => (
              <motion.div
                key={device.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background-dark rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all group h-full flex flex-col"
              >
                <div className="p-6 bg-background-dark/50 aspect-video flex items-center justify-center">
                  <img
                    src={device.image}
                    alt={device.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-xl font-semibold text-white mb-2">{device.name}</h3>
                  <p className="text-accent-silver mb-4">{device.description}</p>
                  <div className="mt-auto">
                    <h4 className="text-primary text-sm font-medium mb-3">Key Features:</h4>
                    <ul className="space-y-2">
                      {device.features.slice(0, 3).map((feature, idx) => (
                        <li key={idx} className="flex items-start text-sm text-accent-silver">
                          <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4">
                      <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                        <span>Request more information</span>
                        <FiArrowRight className="ml-2" />
                      </Link>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Credential Options Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Credential <span className="gradient-text">Options</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Choose from a variety of access credentials to match your security requirements and user experience preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCreditCard className="w-6 h-6" />,
                title: "Access Cards & Fobs",
                description: "Traditional proximity and smart cards that provide reliable access control with various security levels and form factors.",
                features: [
                  "Multiple security levels available",
                  "Customizable with your organization's branding",
                  "Supports multi-factor authentication",
                  "Available in various form factors (cards, fobs, tags)"
                ]
              },
              {
                icon: <FiKey className="w-6 h-6" />,
                title: "Mobile Credentials",
                description: "Smartphone-based access credentials that provide convenience and enhanced security with encryption and biometric verification.",
                features: [
                  "Eliminates physical card management",
                  "High security with device-level encryption",
                  "User-friendly experience with familiar device",
                  "Multi-factor authentication capabilities"
                ]
              },
              {
                icon: <FiMonitor className="w-6 h-6" />,
                title: "Biometric Authentication",
                description: "Advanced identity verification using unique physical characteristics such as fingerprints, facial recognition, or iris scanning.",
                features: [
                  "Highest level of user authentication",
                  "Eliminates credential sharing issues",
                  "Available in various modalities",
                  "Can be combined with other credential types"
                ]
              }
            ].map((credential, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {credential.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{credential.title}</h3>
                <p className="text-accent-silver mb-6">{credential.description}</p>
                <ul className="space-y-2 mb-6">
                  {credential.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-sm text-accent-silver">
                      <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Learn more</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Integration <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our access control solutions integrate seamlessly with other security systems and business applications, providing a unified approach to security management.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1 bg-background-dark rounded-xl overflow-hidden">
              <div className="p-8">
                <h3 className="text-2xl font-semibold mb-6 text-white">
                  Unified Security <span className="gradient-text">Management</span>
                </h3>
                <p className="text-accent-silver mb-6">
                  By integrating access control with video surveillance, intrusion detection, and other security systems, you gain comprehensive situational awareness and streamlined operations.
                </p>
                <ul className="space-y-3 mb-8">
                  {[
                    "Video surveillance integration for visual verification",
                    "Intrusion alarm system integration",
                    "Visitor management system integration",
                    "Building management system compatibility",
                    "HR and identity management system connections",
                    "API support for custom integrations"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start space-x-2 text-accent-silver">
                      <span className="text-primary mt-1.5">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="btn-primary inline-flex items-center">
                  <span>Discuss Integration Options</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </div>

            <div className="order-1 md:order-2">
              <div className="relative aspect-square md:aspect-auto max-w-md mx-auto">
                <div className="absolute w-[70%] h-[70%] left-[15%] top-[15%] bg-primary/10 rounded-full flex items-center justify-center animate-pulse-slow z-0"></div>
                <div className="absolute w-full h-full flex items-center justify-center z-10">
                  <div className="w-32 h-32 bg-background-dark rounded-full border-4 border-primary/20 flex items-center justify-center shadow-lg">
                    <span className="text-white font-semibold text-lg text-center">Access Control</span>
                  </div>

                  <div className="absolute w-24 h-24 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center shadow-lg" style={{ top: '15%', right: '20%' }}>
                    <span className="text-white font-semibold text-sm text-center">Video<br />Surveillance</span>
                  </div>

                  <div className="absolute w-24 h-24 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center shadow-lg" style={{ bottom: '15%', right: '20%' }}>
                    <span className="text-white font-semibold text-sm text-center">Intrusion<br />Detection</span>
                  </div>

                  <div className="absolute w-24 h-24 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center shadow-lg" style={{ bottom: '15%', left: '20%' }}>
                    <span className="text-white font-semibold text-sm text-center">Building<br />Automation</span>
                  </div>

                  <div className="absolute w-24 h-24 rounded-full bg-background-dark border-4 border-primary/20 flex items-center justify-center shadow-lg" style={{ top: '15%', left: '20%' }}>
                    <span className="text-white font-semibold text-sm text-center">Identity<br />Management</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to secure your facility?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for a personalized access control solution designed specifically for your security requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Schedule a Consultation
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

export default AccessControl;
