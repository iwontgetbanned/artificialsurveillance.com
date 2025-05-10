import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCheck, FiCloud, FiLock, FiShield, FiGlobe, FiServer, FiUsers, FiMonitor, FiDatabase } from 'react-icons/fi';

const GenetecSecurityCenter = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/1834716700/1902449914.png')",
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
              Genetec <span className="gradient-text">Security Center SaaS</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Unified physical security software, now available as a service. Security Center SaaS is a cloud-based unified physical security solution that connects your sites, systems, and data.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="https://www.genetec.com/products/unified-security/security-center-saas" target="_blank" rel="noopener noreferrer" className="btn-primary">
                <span>Learn More on Genetec.com</span>
                <FiArrowRight className="ml-2" />
              </a>
              <Link to="/contact" className="btn-outline">
                <span>Contact Us for Implementation</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Awards Section */}
      <section className="py-10 bg-background border-b border-background-dark">
        <div className="container-custom">
          <div className="flex flex-wrap gap-8 justify-center">
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-accent-silver text-xs">AWARD</p>
                <p className="text-white font-medium">Video Surveillance Product of the Year</p>
              </div>
            </div>
            <div className="flex items-center space-x-3">
              <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 15C15.866 15 19 11.866 19 8C19 4.13401 15.866 1 12 1C8.13401 1 5 4.13401 5 8C5 11.866 8.13401 15 12 15Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.21 13.89L7 23L12 20L17 23L15.79 13.88" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <p className="text-accent-silver text-xs">AWARD</p>
                <p className="text-white font-medium">IoT & Security Solutions Best Product</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Need SaaS that can do it <span className="gradient-text">all?</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Security Center SaaS is a unified physical security solution that you can choose to deploy in the cloud or as a hybrid solution. It unifies access control, video management, forensic search, intrusion monitoring, automation, and many other advanced security capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Best of both worlds",
                description: "Combine an advanced, enterprise-grade system with a streamlined SaaS experience for an ideal security combination."
              },
              {
                icon: <FiCloud className="w-6 h-6" />,
                title: "Flexible deployments",
                description: "Deploy connected solutions with cloud-native services while storing and processing locally or in the cloud—wherever is best for you."
              },
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Unification in the cloud",
                description: "Get access control and video functionality with built-in intrusion monitoring, communications, and other core security capabilities."
              },
              {
                icon: <FiDatabase className="w-6 h-6" />,
                title: "Frictionless evolution",
                description: "Move to cloud and scale at your own pace. Add direct-to-cloud devices, use your current hardware, and connect on-prem sites."
              }
            ].map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{feature.title}</h3>
                <p className="text-accent-silver">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Customer Quote Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="bg-background/5 border border-primary/10 rounded-xl p-8 md:p-12">
            <div className="flex items-center mb-6">
              <svg className="w-10 h-10 text-primary mr-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 11H7.10355C6.49471 11 6 10.5053 6 9.89645V8.10355C6 7.49471 6.49471 7 7.10355 7H9.89645C10.5053 7 11 7.49471 11 8.10355V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M18 11H15.1036C14.4947 11 14 10.5053 14 9.89645V8.10355C14 7.49471 14.4947 7 15.1036 7H17.8964C18.5053 7 19 7.49471 19 8.10355V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <h3 className="text-2xl font-semibold text-white">Customer Perspective</h3>
            </div>
            <p className="text-accent-silver text-lg md:text-xl italic mb-6">
              "With our expanding reach across the continent, we're building Europe's leading Edge platform, bringing seamless, localised, and ultra-low latency digital infrastructure to our customers. Genetec is an important part of our operations, ensuring a smooth and secure experience for our customers."
            </p>
            <div className="flex items-center">
              <div className="mr-4">
                <p className="text-white font-medium">Stijn Jonker</p>
                <p className="text-accent-silver">Security Director, AtlasEdge Data Centers</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Features Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Key <span className="gradient-text">Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Revolutionize physical security with advanced capabilities that simplify operations and enhance security posture.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <FiUsers className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Analytics for faster decisions</h3>
                </div>
                <p className="text-accent-silver mb-4">
                  Built-in forensics search capabilities merge metadata from a variety of devices equipped with edge analytics in a single, intuitive user interface. The system quickly presents results to operators with an intuitive design so they can make quicker, better-informed decisions.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background-dark rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <FiMonitor className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">See it all, all in one place</h3>
                </div>
                <p className="text-accent-silver mb-4">
                  Security Center SaaS offers enterprise-grade access control and video surveillance as a service for centralized monitoring and management of multiple sites. Get a global view of all your activities and sites on maps and unified reports. Monitor and respond to incidents and view security related data from a single unified interface.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-background-dark rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <FiGlobe className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Manage security from anywhere</h3>
                </div>
                <p className="text-accent-silver mb-4">
                  Manage your security from anywhere using web or mobile apps, allowing for easy device enrollment, configuration, and multi-site monitoring. You can run Security Center SaaS anywhere, from command centers to reception desks.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="bg-background-dark rounded-xl overflow-hidden"
            >
              <div className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                    <FiLock className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Secure and resilient architecture</h3>
                </div>
                <p className="text-accent-silver mb-4">
                  Choose a unified solution that blends into existing IT infrastructure, with cybersecurity and privacy by design. With the highest security standards, regular third-party pen tests and hardened appliances, we have everything to make your IT department happy.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Modules Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Security Center <span className="gradient-text">Modules</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Security Center SaaS offers a comprehensive suite of modules to address all your security needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiLock className="w-6 h-6" />,
                title: "Access control as a service",
                description: "Manage physical access to your facilities with cloud-based access control, including badge management and visitor management capabilities."
              },
              {
                icon: <FiMonitor className="w-6 h-6" />,
                title: "Video surveillance as a service",
                description: "Enterprise-grade video management with advanced analytics, forensic search, and cloud storage options for all your video surveillance needs."
              },
              {
                icon: <FiServer className="w-6 h-6" />,
                title: "Cloud-managed appliances",
                description: "Hybrid infrastructure with cloud-managed on-premises devices, offering the best of both worlds for performance and management."
              },
              {
                icon: <FiUsers className="w-6 h-6" />,
                title: "Work management",
                description: "Streamline operations with task management, automated workflows, and incident response coordination from a single interface."
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-6 rounded-xl"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-2">{module.title}</h3>
                <p className="text-accent-silver">{module.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Why Choose <span className="gradient-text">Security Center SaaS?</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Discover the compelling reasons organizations are moving to Genetec's unified cloud security platform.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Spin up new sites in minutes",
                description: "Simplify the entire installation and configuration process with remote deployment and system management tools, easy enrollment workflows, and quick web configuration. With a portfolio of plug and play direct to cloud devices and managed appliances, setting up a new site has never been easier."
              },
              {
                title: "SaaS built for your organization",
                description: "Security Center SaaS is designed to meet your needs today and evolve with future requirements. Remain engaged and connected to service providers and technology suppliers by swapping or adding new technology from an open ecosystem of technology partners."
              },
              {
                title: "Secure and resilient architecture",
                description: "Choose a unified solution that blends into existing IT infrastructure, with cybersecurity and privacy by design. With the highest security standards, regular third-party pen tests and hardened appliances, we have everything to make your IT department happy."
              },
              {
                title: "Intuitive experience with automation",
                description: "The Security Center SaaS experience adapts to every job with web, mobile and desktop applications. Automate incident response with robust unified monitoring. Identify relevant information in seconds with smart forensics capabilities."
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

          <div className="mt-12 bg-background-dark p-6 rounded-xl">
            <div className="flex flex-col md:flex-row items-center">
              <div className="mb-6 md:mb-0 md:mr-6">
                <FiCheck className="w-10 h-10 text-primary" />
              </div>
              <div className="md:flex-1">
                <h3 className="text-xl font-semibold text-white mb-2">Think you need to rip out your existing hardware? Think again.</h3>
                <p className="text-accent-silver">
                  With hundreds of supported devices, you can keep what you want, or explore the latest innovations in physical security hardware.
                </p>
              </div>
              <a
                href="https://www.genetec.com/products/unified-security/security-center-saas/saas-supported-devices-list"
                target="_blank"
                rel="noopener noreferrer"
                className="btn-primary whitespace-nowrap mt-6 md:mt-0 md:ml-6"
              >
                See supported devices
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Frequently Asked <span className="gradient-text">Questions</span>
            </h2>
          </div>

          <div className="space-y-8 max-w-4xl mx-auto">
            {[
              {
                question: "What is unified security as a service?",
                answer: "Unified security as a service brings a comprehensive security system to the hybrid-cloud, offering diverse physical security capabilities in a single, unified platform. A simple, tiered subscription model makes it easy to only pay for what you need. With Security Center SaaS, grow your security system over time and turn on more capabilities when you're ready for them."
              },
              {
                question: "What is hybrid-cloud security?",
                answer: "Hybrid-cloud security is a type of architecture deployment that blends cloud, on-premises, and edge solutions to give you more flexibility. The hybrid-cloud allows you to keep your on-premises security infrastructure while using cloud services to accommodate specific sites or applications. As a hybrid-cloud security solution, Security Center SaaS allows you to benefit from both technologies and stay flexible to changing requirements across your organization."
              },
              {
                question: "When I buy Security Center SaaS, can I buy only ACaaS or only VSaaS?",
                answer: "Yes. Security Center SaaS subscriptions are designed to let you choose. You can buy connections to use only with door controllers or only with cameras. Better yet, you can choose to mix connections with any supported device that makes sense for you."
              },
              {
                question: "Are cloud and hybrid-cloud secure?",
                answer: "Yes. A cloud or hybrid-cloud model is secure. Genetec's cloud software has many built-in cybersecurity and data privacy features, and maintains SOC 2, ISO27001 and ISO27017 compliance. If you have cloud-managed devices such as servers or readers, you benefit from automated updates and firmware upgrades that keep your system cybersecure. With connected systems, you can always know your system's health status."
              }
            ].map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background rounded-xl p-6"
              >
                <h3 className="text-lg font-semibold text-white mb-3">{faq.question}</h3>
                <p className="text-accent-silver">{faq.answer}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="heading-md mb-6 text-white">
                Transform your environment with enterprise-grade security in the cloud
              </h2>
              <p className="text-accent-silver text-lg mb-8">
                Contact us today to discuss how Genetec Security Center SaaS can be tailored to your specific security needs.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link to="/contact" className="btn-primary">
                  <span>Schedule a Consultation</span>
                  <FiArrowRight className="ml-2" />
                </Link>
                <a
                  href="https://www.genetec.com/products/unified-security/security-center-saas/saas-pricing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-outline"
                >
                  <span>View Genetec Pricing Plans</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GenetecSecurityCenter;
