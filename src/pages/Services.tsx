import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCamera, FiCloud, FiAlertCircle, FiMonitor, FiSettings, FiUser, FiPlusCircle, FiArrowRight, FiLock, FiDatabase, FiServer, FiShield, FiSearch, FiCpu, FiActivity } from 'react-icons/fi';
import caminstall from '../assets/icons/caminstall.jpg';
import genetecVsaas from '../assets/videos/genetec_vsaas.mp4';
import aiTools from '../assets/images/ai_tools.png';

const Services = () => {
  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1596436889106-be35e843f974?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
            className="text-center max-w-3xl mx-auto"
          >
            <h1 className="heading-lg mb-6 text-white">
              Our <span className="gradient-text">Services</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              We deliver comprehensive surveillance solutions combining professional camera installation with our proprietary AI-powered video analytics platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Surveillance Solutions */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Comprehensive <span className="gradient-text">Surveillance Solutions</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Choose from our range of surveillance solutions, from professional camera installation to advanced AI analytics and enterprise-grade Genetec implementation.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Professional Camera Installation */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark rounded-xl overflow-hidden h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={caminstall}
                  alt="Professional Camera Installation"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-2">
                    <FiCamera className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Camera Installation</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-accent-silver mb-4">
                  Expert technicians install high-quality security cameras tailored to your specific needs, handling everything from site assessment to final setup.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Strategic camera placement",
                    "Professional wiring and mounting",
                    "Network infrastructure integration",
                    "Testing and quality assurance"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-accent-silver">
                      <span className="text-primary mr-2 mt-0.5">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Schedule an Installation</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Artificial Surveillance Platform */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background-dark rounded-xl overflow-hidden h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/1199936672/2929726133.svg"
                  alt="Artificial Surveillance Platform"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-2">
                    <FiCpu className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Artificial Surveillance</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-accent-silver mb-4">
                  Our proprietary AI-powered surveillance software transforms standard security cameras into intelligent monitoring systems with advanced analytics capabilities.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Object detection and classification",
                    "Facial recognition capabilities",
                    "Behavior analysis and alerts",
                    "Searchable video archives"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-accent-silver">
                      <span className="text-primary mr-2 mt-0.5">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/products/artificial-surveillance" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Explore Our Platform</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>

            {/* Access Control */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-dark rounded-xl overflow-hidden h-full"
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src="https://ext.same-assets.com/1834716700/424566538.png"
                  alt="Genetec Security Center"
                  className="w-full h-full object-cover bg-background"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background-dark to-transparent opacity-70"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <div className="rounded-full bg-primary/20 w-12 h-12 flex items-center justify-center mb-2">
                    <FiShield className="text-primary w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-bold text-white">Access Control</h3>
                </div>
              </div>

              <div className="p-6">
                <p className="text-accent-silver mb-4">
                  As certified Genetec partners, we provide complete setup, configuration, and support for their industry-leading unified security platform.
                </p>
                <ul className="space-y-2 mb-6">
                  {[
                    "Unified security management",
                    "Cloud-based Security Center SaaS",
                    "Access control integration",
                    "Centralized monitoring and alerts"
                  ].map((item, index) => (
                    <li key={index} className="flex items-start text-sm text-accent-silver">
                      <span className="text-primary mr-2 mt-0.5">
                        <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/products/security-center" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Explore Genetec Solutions</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Advanced <span className="gradient-text">Security Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our surveillance solutions include a rich set of advanced features to enhance security and provide valuable insights.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSearch className="w-6 h-6" />,
                title: "Object Detection & Classification",
                description: "Automatically identify and classify objects such as people, vehicles, and items with high accuracy.",
                color: "from-blue-500/20 to-cyan-500/20"
              },
              {
                icon: <FiActivity className="w-6 h-6" />,
                title: "Behavior Analysis",
                description: "Detect unusual behavior patterns like loitering, crowd formation, or unauthorized access attempts.",
                color: "from-purple-500/20 to-pink-500/20"
              },
              {
                icon: <FiUser className="w-6 h-6" />,
                title: "People Counting & Analytics",
                description: "Track occupancy, analyze traffic patterns, and generate insights for space utilization.",
                color: "from-green-500/20 to-teal-500/20"
              },
              {
                icon: <FiCloud className="w-6 h-6" />,
                title: "Cloud Storage & Management",
                description: "Secure, encrypted cloud storage with customizable retention policies and instant access.",
                color: "from-orange-500/20 to-amber-500/20"
              },
              {
                icon: <FiAlertCircle className="w-6 h-6" />,
                title: "Customizable Alerts",
                description: "Set specific alert rules for events, zones, or behaviors with instant notifications.",
                color: "from-red-500/20 to-orange-500/20"
              },
              {
                icon: <FiLock className="w-6 h-6" />,
                title: "Access Control Integration",
                description: "Seamlessly integrate with access control systems for a unified security approach.",
                color: "from-cyan-500/20 to-blue-500/20"
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${feature.color} flex items-center justify-center mb-4`}>
                  <div className="text-primary">
                    {feature.icon}
                  </div>
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{feature.title}</h3>
                <p className="text-accent-silver">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Unified Security Platform */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Unified Security <span className="gradient-text">Platform</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our solutions integrate all security systems into a single, cohesive platform for streamlined management and enhanced protection.
            </p>
          </div>

          <div className="bg-background-dark p-8 rounded-xl border border-primary/10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h3 className="text-2xl font-bold text-white mb-4">
                  Integrated Security Management
                </h3>
                <p className="text-accent-silver mb-6">
                  Our unified platform combines video surveillance, access control, and analytics into a seamless security ecosystem that simplifies operations and enhances protection.
                </p>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-lg mr-4">
                      <FiCamera className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Video Management</h4>
                      <p className="text-accent-silver text-sm">Centralized control of all cameras with advanced search capabilities</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-lg mr-4">
                      <FiLock className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Access Control</h4>
                      <p className="text-accent-silver text-sm">Manage entry points, credentials, and permissions in one system</p>
                    </div>
                  </div>

                  <div className="flex items-start">
                    <div className="bg-primary/20 p-2 rounded-lg mr-4">
                      <FiDatabase className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h4 className="text-white font-semibold mb-1">Shared Database</h4>
                      <p className="text-accent-silver text-sm">Unified data architecture enables powerful cross-system analytics</p>
                    </div>
                  </div>
                </div>

                <Link to="/products" className="btn-primary inline-flex items-center">
                  <span>Explore Platform Options</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </div>

              <div className="relative">
                <div className="bg-background rounded-lg overflow-hidden p-2">
                  <video
                    src={genetecVsaas}
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="w-full rounded-md"
                  />
                </div>
                <div className="absolute -bottom-5 -right-5 w-32 h-32 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl -z-10"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Custom AI Solutions */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-4">
                Custom <span className="gradient-text">AI Solutions</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Beyond our standard offerings, we develop custom AI surveillance solutions tailored to your unique security challenges. Our AI engineers can create specialized detection models for your specific needs.
              </p>

              <div className="mb-8">
                <h3 className="text-xl font-semibold mb-4 text-white">Popular Custom Solutions:</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Product tampering detection",
                    "Equipment operation monitoring",
                    "Construction safety compliance",
                    "Retail customer analytics",
                    "Manufacturing quality control",
                    "Healthcare safety monitoring",
                    "Agriculture equipment tracking",
                    "Warehouse inventory monitoring"
                  ].map((item, index) => (
                    <div key={index} className="flex items-center space-x-2">
                      <FiPlusCircle className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-accent-silver text-sm">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Discuss Custom Solutions</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-background-dark rounded-lg overflow-hidden shadow-xl p-3 border border-primary/10">
                <div className="bg-background p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-white">Custom AI Tool Creation</h4>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Active</span>
                  </div>

                  <div className="space-y-6">
                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Object Type</label>
                      <div className="flex space-x-2">
                        <div className="bg-primary/10 border border-primary/30 rounded-md px-3 py-1 text-sm text-primary">Forklift</div>
                        <div className="bg-primary/10 border border-primary/30 rounded-md px-3 py-1 text-sm text-primary">Safety Vest</div>
                        <div className="bg-background-dark border border-primary/10 rounded-md px-3 py-1 text-sm text-accent-silver">+ Add</div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Zone</label>
                      <div className="bg-background-dark rounded-md overflow-hidden relative">
                        <img
                          src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80"
                          alt="Warehouse"
                          className="w-full h-40 object-cover opacity-70"
                        />
                        <div className="absolute inset-0">
                          <div className="border-2 border-dashed border-green-400 absolute top-10 left-10 w-32 h-24 rounded-md"></div>
                          <div className="border-2 border-dashed border-red-400 absolute bottom-10 right-10 w-32 h-16 rounded-md"></div>
                        </div>
                      </div>
                    </div>

                    <div>
                      <label className="block text-accent-silver text-sm mb-2">Define Rule</label>
                      <div className="bg-background-dark border border-primary/10 rounded-md p-3 text-sm">
                        <div className="flex items-center text-accent-silver">
                          <span className="mr-2">IF</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded mr-2">Forklift</span>
                          <span className="mr-2">enters</span>
                          <span className="px-2 py-1 bg-red-400/20 text-red-400 rounded mr-2">Red Zone</span>
                          <span className="mr-2">without</span>
                          <span className="px-2 py-1 bg-primary/10 text-primary rounded">Safety Vest</span>
                        </div>
                        <div className="flex items-center mt-2 text-accent-silver">
                          <span className="mr-2">THEN</span>
                          <span className="px-2 py-1 bg-yellow-500/20 text-yellow-500 rounded mr-2">Send Alert</span>
                          <span className="mr-2">to</span>
                          <span className="px-2 py-1 bg-background-dark text-accent-silver rounded">Safety Manager</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -left-8 w-36 h-36 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-8 -right-8 w-36 h-36 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Supporting <span className="gradient-text">Services</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              We offer a range of additional services to ensure your security system operates at peak performance.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                icon: <FiSettings className="w-6 h-6" />,
                title: "System Maintenance",
                description: "Ongoing system health monitoring, automatic software updates, and technical support to ensure optimal performance."
              },
              {
                icon: <FiUser className="w-6 h-6" />,
                title: "Training & Support",
                description: "Comprehensive user training and 24/7 customer support to help you maximize the value of your surveillance system."
              },
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Software Customization",
                description: "Tailored software configuration for both Artificial Surveillance and Genetec platforms to meet specific requirements."
              }
            ].map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {service.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{service.title}</h3>
                <p className="text-accent-silver mb-6">{service.description}</p>
                <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>Learn more</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-background-dark to-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to enhance your security?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for a free consultation and custom solution recommendation.
                </p>
              </div>
              <Link to="/contact" className="btn-primary whitespace-nowrap">
                Schedule a Consultation
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
