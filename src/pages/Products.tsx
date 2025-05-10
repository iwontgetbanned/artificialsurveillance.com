import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiCamera, FiShield, FiServer, FiCpu, FiLayers, FiLink, FiDatabase, FiMonitor, FiArrowRight, FiZap, FiLock, FiUserCheck, FiRefreshCw } from 'react-icons/fi';

const Products = () => {
  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1609690812921-48003b963a09?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              Our <span className="gradient-text">Products</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              We offer a comprehensive suite of surveillance hardware and software solutions, featuring both our proprietary Artificial Surveillance platform and enterprise-grade Genetec implementations.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Software Solutions */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Software <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Choose between our in-house Artificial Surveillance platform or enterprise-grade Genetec implementation based on your specific needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Artificial Surveillance */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all text-primary">
                  <FiServer className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Artificial Surveillance</h3>
              </div>
              <p className="text-accent-silver mb-6">
                Our proprietary software solution developed in-house. Fully managed and supported by our expert team, providing advanced AI-powered surveillance capabilities with a customized experience tailored to your unique security needs.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-white">Key Features:</h4>
                <ul className="space-y-3">
                  {[
                    "Real-time object detection and classification",
                    "Facial recognition and license plate reading",
                    "Behavior analysis and anomaly detection",
                    "Secure cloud storage with customizable retention",
                    "Instant alerts and notifications",
                    "Searchable video archives with AI filtering",
                    "Custom detection models for specific use cases",
                    "Regular updates and new features"
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
              </div>

              <Link to="/products/artificial-surveillance" className="btn-primary inline-flex items-center">
                <span>Learn More About Our Software</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            {/* Genetec */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background-dark p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary/20 transition-all text-primary">
                  <FiShield className="w-6 h-6" />
                </div>
                <h3 className="text-2xl font-semibold text-white">Genetec Security Center</h3>
              </div>
              <p className="text-accent-silver mb-6">
                Enterprise-grade unified security platform for clients who need maximum scalability and integration capabilities. We provide full implementation, configuration, and ongoing support services.
              </p>

              <div className="mb-8">
                <h4 className="text-lg font-medium mb-4 text-white">Key Features:</h4>
                <ul className="space-y-3">
                  {[
                    "Unified security platform (video, access control, ALPR)",
                    "Advanced AI video analytics integration",
                    "Automatic license plate recognition (ALPR)",
                    "Access control and badge management",
                    "Communications and intercom integration",
                    "Mission Control for decision management",
                    "Intrusion panel integration",
                    "Industrial IoT support and integration"
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
              </div>

              <Link to="/products/security-center" className="btn-primary inline-flex items-center">
                <span>Learn About Genetec Security Center</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Hardware Options */}
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Hardware <span className="gradient-text">Options</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              We provide and install a wide range of security hardware that integrates seamlessly with both our Artificial Surveillance platform and Genetec solutions.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiCamera className="w-6 h-6" />,
                title: "IP Surveillance Cameras",
                description: "High-resolution IP cameras with advanced features including night vision, wide dynamic range, and weatherproof enclosures for indoor and outdoor applications.",
                link: "/products/ip-cameras"
              },
              {
                icon: <FiCamera className="w-6 h-6" />,
                title: "PoE Surveillance Cameras",
                description: "Power over Ethernet cameras that require only a single network cable for both power and data, simplifying installation and reducing wiring costs.",
                link: "/products/poe-cameras"
              },
              {
                icon: <FiMonitor className="w-6 h-6" />,
                title: "Cloud Video Analytics Portal",
                description: "Transform any camera into an intelligent sensor with cloud-based analytics including object detection, behavior analysis, and business intelligence features.",
                link: "/products/video-analytics-portal"
              },
              {
                icon: <FiLock className="w-6 h-6" />,
                title: "Access Control Systems",
                description: "Comprehensive access control hardware including card readers, biometric scanners, and electronic locks that integrate with our software solutions.",
                link: "/products/access-control"
              },
              {
                icon: <FiDatabase className="w-6 h-6" />,
                title: "Storage Solutions",
                description: "Scalable storage solutions including NVRs, cloud storage, and hybrid options to meet your data retention requirements.",
                link: "/products/storage-solutions"
              },
              {
                icon: <FiLink className="w-6 h-6" />,
                title: "Network Infrastructure",
                description: "Secure networking equipment designed specifically for video surveillance applications, ensuring reliable data transmission.",
                link: "/products/network-infrastructure"
              }
            ].map((hardware, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all text-primary">
                  {hardware.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{hardware.title}</h3>
                <p className="text-accent-silver mb-6">{hardware.description}</p>
                <Link to={hardware.link} className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                  <span>View details</span>
                  <FiArrowRight className="ml-2" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Tools & Features */}
      <section className="py-20 bg-background relative overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <path fill="url(#gradientProduct)" d="M0,0 C25,0 50,100 75,100 L0,100 Z" />
            <defs>
              <linearGradient id="gradientProduct" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#0078FF" />
                <stop offset="100%" stopColor="#00D1FF" />
              </linearGradient>
            </defs>
          </svg>
        </div>

        <div className="container-custom relative z-10">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              AI Tools & <span className="gradient-text">Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Leverage advanced artificial intelligence capabilities to transform your security system from reactive to proactive.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                icon: <FiUserCheck className="w-6 h-6" />,
                title: "Facial Recognition",
                description: "Identify individuals in real-time against watchlists or authorized personnel databases, with privacy controls and audit capabilities.",
                platform: "Available on both Artificial Surveillance and Genetec"
              },
              {
                icon: <FiZap className="w-6 h-6" />,
                title: "Behavior Analytics",
                description: "Detect unusual behavior patterns such as loitering, crowd formation, or unauthorized access attempts before incidents occur.",
                platform: "Available on both Artificial Surveillance and Genetec"
              },
              {
                icon: <FiCpu className="w-6 h-6" />,
                title: "Custom Detection Models",
                description: "Create specialized AI models for your unique security requirements, such as detecting specific objects, activities, or situations.",
                platform: "Premium feature on Artificial Surveillance"
              },
              {
                icon: <FiRefreshCw className="w-6 h-6" />,
                title: "Automatic Tracking",
                description: "Automatically follow subjects of interest across multiple cameras without manual operator intervention.",
                platform: "Available on Genetec Security Center"
              }
            ].map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-all text-primary">
                  {tool.icon}
                </div>
                <h3 className="text-xl font-semibold mb-3 text-white">{tool.title}</h3>
                <p className="text-accent-silver mb-4">{tool.description}</p>
                <div className="text-xs inline-block bg-primary/20 text-primary px-3 py-1 rounded-full mb-6">
                  {tool.platform}
                </div>
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
      <section className="py-20 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Integration <span className="gradient-text">Capabilities</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Both our Artificial Surveillance platform and Genetec implementations offer extensive integration options with your existing systems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">
                Seamless System <span className="gradient-text">Integration</span>
              </h3>
              <p className="text-accent-silver mb-6">
                Our solutions are designed to work with your existing infrastructure, allowing you to leverage your current investments while adding powerful new capabilities.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Access control systems integration",
                  "Intrusion and alarm system integration",
                  "Building management system integration",
                  "Intercom and communication systems",
                  "Third-party video analytics integration",
                  "Custom API connections for business systems",
                  "Enterprise IT infrastructure compatibility",
                  "Legacy system support and migration paths"
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
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative"
            >
              <div className="bg-background rounded-lg overflow-hidden shadow-xl p-3 border border-primary/10">
                <div className="bg-background-dark p-6 rounded-lg">
                  <div className="flex justify-between items-center mb-6">
                    <h4 className="text-lg font-semibold text-white">Integration Architecture</h4>
                    <span className="text-xs bg-primary/20 text-primary px-2 py-1 rounded-full">Scalable</span>
                  </div>

                  <div className="relative h-80 mb-4">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="w-24 h-24 rounded-full bg-primary/30 flex items-center justify-center text-white font-semibold text-xs">
                        CENTRAL<br />PLATFORM
                      </div>

                      {/* Connection lines */}
                      <div className="absolute w-full h-full">
                        {/* Top connection */}
                        <div className="absolute top-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-primary/30"></div>
                        <div className="absolute top-0 left-1/2 transform -translate-x-1/2 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          VMS
                        </div>

                        {/* Bottom connection */}
                        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-1 h-16 bg-primary/30"></div>
                        <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          ACCESS CONTROL
                        </div>

                        {/* Left connection */}
                        <div className="absolute left-4 top-1/2 transform -translate-y-1/2 h-1 w-16 bg-primary/30"></div>
                        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          ALARMS
                        </div>

                        {/* Right connection */}
                        <div className="absolute right-4 top-1/2 transform -translate-y-1/2 h-1 w-16 bg-primary/30"></div>
                        <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          BMS
                        </div>

                        {/* Top-left connection */}
                        <div className="absolute top-1/4 left-1/4 transform -translate-y-1/2 -translate-x-1/2 w-1 h-12 bg-primary/30 rotate-45"></div>
                        <div className="absolute top-10 left-12 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          AI ANALYTICS
                        </div>

                        {/* Top-right connection */}
                        <div className="absolute top-1/4 right-1/4 transform -translate-y-1/2 translate-x-1/2 w-1 h-12 bg-primary/30 -rotate-45"></div>
                        <div className="absolute top-10 right-12 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          COMMS
                        </div>

                        {/* Bottom-left connection */}
                        <div className="absolute bottom-1/4 left-1/4 transform translate-y-1/2 -translate-x-1/2 w-1 h-12 bg-primary/30 -rotate-45"></div>
                        <div className="absolute bottom-10 left-12 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          API
                        </div>

                        {/* Bottom-right connection */}
                        <div className="absolute bottom-1/4 right-1/4 transform translate-y-1/2 translate-x-1/2 w-1 h-12 bg-primary/30 rotate-45"></div>
                        <div className="absolute bottom-10 right-12 w-24 h-8 rounded-full border border-primary/30 flex items-center justify-center text-accent-silver text-xs">
                          IoT
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 w-36 h-36 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-full blur-xl -z-10"></div>
              <div className="absolute -top-8 -left-8 w-36 h-36 bg-gradient-to-r from-primary/10 to-secondary/10 rounded-full blur-xl -z-10"></div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to find the right solution?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for a personalized consultation to determine which products best fit your security needs.
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

export default Products;
