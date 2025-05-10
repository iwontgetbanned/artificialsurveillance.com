import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiDatabase, FiServer, FiHardDrive, FiCloud, FiShield, FiCheck, FiRefreshCw, FiCpu, FiMonitor } from 'react-icons/fi';

const StorageSolutions = () => {
  const nvrs = [
    {
      id: 'nvr-s8000',
      name: 'S8000 Series 8-Channel NVR',
      image: 'https://ext.same-assets.com/552860222/3842889876.jpeg',
      features: [
        'Supports up to 8 IP cameras',
        'Records 4K ultra HD video',
        'HDMI and VGA outputs',
        'Multiple recording modes including continuous and motion detection',
        'Remote viewing via web browser and mobile app',
        'Up to 10TB storage capacity'
      ]
    },
    {
      id: 'nvr-s8000p',
      name: 'S8000P Series 8-Channel PoE NVR',
      image: 'https://ext.same-assets.com/552860222/2221921631.png',
      features: [
        'Built-in 8-port PoE switch for seamless camera connection',
        '4K ultra HD recording capability',
        'Plug-and-play setup for quick deployment',
        'Advanced H.265+ video compression',
        'Supports ONVIF compatible cameras',
        'Up to 10TB storage capacity'
      ]
    },
    {
      id: 'nvr-s16000',
      name: 'S16000 Series 16-Channel NVR',
      image: 'https://ext.same-assets.com/552860222/2978417657.jpeg',
      features: [
        'Supports up to 16 IP cameras',
        '4K UHD recording at 30fps',
        'Intelligent video analytics features',
        'Multiple recording modes and schedules',
        'Supports RAID configuration for data redundancy',
        'Up to 10TB storage capacity'
      ]
    },
    {
      id: 'nvr-s16000p',
      name: 'S16000P Series 16-Channel PoE NVR',
      image: 'https://ext.same-assets.com/552860222/1008587138.jpeg',
      features: [
        'Built-in 16-port PoE switch for seamless camera connection',
        '4K ultra HD recording capability',
        'Simplified camera management with auto-discovery',
        'Smart motion detection with fewer false positives',
        'Supports concurrent live view, record, playback, backup',
        'Up to 10TB storage capacity'
      ]
    },
    {
      id: 'nvr-e32000',
      name: 'E32000 Series 32-Channel Enterprise NVR',
      image: 'https://ext.same-assets.com/552860222/1198918036.jpeg',
      features: [
        'Supports up to 32 IP cameras',
        'Enterprise-grade hardware with redundant power',
        'Integrated 16-port PoE with extended transmission',
        'Support for multi-site management',
        'Advanced AI analytics capabilities',
        'Up to 16TB storage capacity with dual HDD bays'
      ]
    },
    {
      id: 'nvr-e32000-ai',
      name: 'E32000-AI Series 32-Channel AI NVR',
      image: 'https://ext.same-assets.com/552860222/3151743800.jpeg',
      features: [
        'Built-in AI processing for advanced video analytics',
        'Human and vehicle detection capabilities',
        'Facial recognition and license plate recognition',
        'Behavior analysis including line crossing and intrusion',
        'Smart search to quickly find events',
        'Up to 16TB storage capacity'
      ]
    },
    {
      id: 'cloud-storage',
      name: 'Cloud Storage Service',
      image: 'https://ext.same-assets.com/552860222/1526281753.svg',
      features: [
        'Secure off-site storage solution',
        'Automatic backup of critical footage',
        'Accessible from anywhere with internet connection',
        'Customizable retention periods',
        'End-to-end encryption for data security',
        'Scalable to meet growing storage needs'
      ]
    },
    {
      id: 'hybrid-storage',
      name: 'Hybrid Storage Solution',
      image: 'https://ext.same-assets.com/552860222/4198121279.svg',
      features: [
        'Combines on-premises NVR with cloud backup',
        'Automatic failover capabilities',
        'Best of both worlds: local speed with cloud redundancy',
        'Configurable policies for storage management',
        'Reduced bandwidth requirements',
        'Cost-effective long-term storage solution'
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
              backgroundImage: "url('https://ext.same-assets.com/552860222/2978417657.jpeg')",
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
              Advanced <span className="gradient-text">Storage Solutions</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our comprehensive range of secure, scalable storage options provides the ideal foundation for your surveillance system. From high-capacity Network Video Recorders to flexible cloud storage, we ensure your footage is always accessible and protected.
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
                icon: <FiHardDrive className="w-6 h-6" />,
                title: "High-Capacity Storage",
                description: "Our NVR systems support up to 16TB of storage, ensuring you can retain weeks or months of critical footage."
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Data Security",
                description: "Enterprise-grade encryption and security protocols protect your video data from unauthorized access."
              },
              {
                icon: <FiRefreshCw className="w-6 h-6" />,
                title: "Redundancy Options",
                description: "RAID configurations and automatic backup options prevent data loss in case of drive failure."
              },
              {
                icon: <FiCloud className="w-6 h-6" />,
                title: "Hybrid Flexibility",
                description: "Combine local storage with cloud backup for the perfect balance of performance and reliability."
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

      {/* Storage Features */}
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
                Intelligent <span className="gradient-text">Storage Management</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our advanced storage solutions do more than just record video. With intelligent storage management features, your system optimizes disk usage while ensuring critical footage is always preserved.
              </p>
              <p className="text-accent-silver mb-8">
                Smart recording technologies like motion-triggered recording, scheduled recording, and event-based retention policies help maximize your storage capacity while minimizing costs. Advanced compression algorithms reduce file sizes without compromising video quality.
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
                src="https://ext.same-assets.com/552860222/2221921631.png"
                alt="Network Video Recorder"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 right-4 bg-background p-4 rounded-xl border border-primary/20 shadow-lg max-w-xs">
                <h4 className="text-primary text-sm font-medium mb-1">Enterprise-Grade Reliability</h4>
                <p className="text-accent-silver text-xs">Hardware built for 24/7 operation with redundant systems to prevent data loss.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Storage Solutions Grid */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Our Storage <span className="gradient-text">Solutions</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Explore our comprehensive range of storage options designed to meet the diverse needs of businesses of all sizes, from small retail operations to large enterprise environments.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {nvrs.map((nvr, index) => (
              <motion.div
                key={nvr.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background-dark rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all group h-full flex flex-col"
              >
                <div className="aspect-video bg-background-dark/50 flex items-center justify-center p-6">
                  <img
                    src={nvr.image}
                    alt={nvr.name}
                    className="max-h-full max-w-full object-contain transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 flex-grow flex flex-col">
                  <h3 className="text-lg font-semibold text-white mb-3">{nvr.name}</h3>
                  <div className="mt-auto">
                    <ul className="space-y-2 mb-6">
                      {nvr.features.slice(0, 4).map((feature, idx) => (
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

      {/* Cloud & Hybrid Storage Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background p-8 rounded-xl border border-primary/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <FiCloud className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Cloud Storage Solution</h3>
              </div>
              <p className="text-accent-silver mb-6">
                Our cloud storage service provides a secure, off-site solution for storing your surveillance footage. With end-to-end encryption and redundant storage systems across multiple data centers, your data is always safe and accessible.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Automatic backup and synchronization",
                  "Customizable retention policies",
                  "Secure access from anywhere",
                  "Reduced on-site hardware requirements",
                  "Automatic scaling as your needs grow",
                  "Protection against on-site disasters"
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
                <span>Learn More About Cloud Storage</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-background p-8 rounded-xl border border-primary/10"
            >
              <div className="flex items-center mb-6">
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mr-4 text-primary">
                  <FiDatabase className="w-6 h-6" />
                </div>
                <h3 className="text-xl font-semibold text-white">Hybrid Storage Solution</h3>
              </div>
              <p className="text-accent-silver mb-6">
                Our hybrid storage solution combines the benefits of on-premises storage with cloud backup capabilities. This approach provides the performance of local storage with the redundancy and accessibility of cloud solutions.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Local NVR for fast access to recent footage",
                  "Automatic cloud backup of critical events",
                  "Seamless transition between local and cloud storage",
                  "Intelligent bandwidth management",
                  "Configurable policies for what gets stored where",
                  "Comprehensive disaster recovery protection"
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
                <span>Learn More About Hybrid Storage</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to secure your surveillance data?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us to discuss the ideal storage solution for your specific requirements and budget.
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

export default StorageSolutions;
