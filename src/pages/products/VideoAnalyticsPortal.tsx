import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiEye, FiUsers, FiMap, FiCrosshair, FiCpu, FiLayers, FiCheck, FiClipboard, FiCamera, FiAlertTriangle, FiClock } from 'react-icons/fi';

const VideoAnalyticsPortal = () => {
  const analyticsFeatures = [
    {
      id: 'object-detection',
      name: 'Object Detection & Classification',
      icon: <FiEye className="w-6 h-6" />,
      description: 'Identify and track thousands of objects with confidence scores, metadata, and rule-based alerts.',
      details: [
        'AI-powered detection of people, vehicles, animals, and objects',
        'Real-time classification with confidence scoring',
        'Automatic metadata generation for each detected object',
        'Custom alert triggers based on object type',
        'Flexible deployment on edge devices or cloud'
      ]
    },
    {
      id: 'people-counting',
      name: 'People Detection & Counting',
      icon: <FiUsers className="w-6 h-6" />,
      description: 'Accurately count and track people through specific areas during specified time intervals.',
      details: [
        'Advanced tracking algorithms for precise counting',
        'Zone-based occupancy monitoring',
        'Dwell time analysis for retail insights',
        'Custom threshold alerts for capacity management',
        'Historical reporting and trend analysis'
      ]
    },
    {
      id: 'heat-mapping',
      name: 'Heat Map Analytics',
      icon: <FiMap className="w-6 h-6" />,
      description: 'Visualize movement patterns with intelligent heat maps based on object detection and tracking.',
      details: [
        'Visual representation of high-traffic areas',
        'Time-based analysis of movement patterns',
        'Customizable sensitivity and visualization',
        'Export options for reporting and analysis',
        'Integration with object detection for filtered heat maps'
      ]
    },
    {
      id: 'loitering',
      name: 'Loitering Detection',
      icon: <FiCrosshair className="w-6 h-6" />,
      description: 'Track movement patterns and dwell times to detect unusual or suspicious behavior.',
      details: [
        'Configurable time thresholds for loitering alerts',
        'Zone-based detection with customizable sensitivity',
        'Integration with security response systems',
        'False alarm reduction through AI filtering',
        'Historical analysis of loitering incidents'
      ]
    },
    {
      id: 'auto-tracking',
      name: 'Automatic Tracking',
      icon: <FiCpu className="w-6 h-6" />,
      description: 'Intelligently follow subjects of interest across camera views without manual intervention.',
      details: [
        'Multi-camera tracking of individuals or vehicles',
        'Seamless handoff between camera views',
        'PTZ auto-tracking capability integration',
        'Subject re-identification across camera network',
        'Event-triggered tracking activation'
      ]
    },
    {
      id: 'thumbnail-grid',
      name: 'Thumbnail Grid & Search',
      icon: <FiLayers className="w-6 h-6" />,
      description: 'Quickly find events or moments with thumbnail grid visualization of archived footage.',
      details: [
        'Rapid visual scanning of extended time periods',
        'Automatic thumbnail generation at configurable intervals',
        'Motion-based thumbnail creation',
        'Integrated with advanced search capabilities',
        'One-click access to full video from thumbnails'
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
              backgroundImage: "url('https://ext.same-assets.com/4195455928/3944786987.mp4')",
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
              Cloud <span className="gradient-text">Video Analytics Portal</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our cloud-based video analytics platform transforms raw video footage into actionable intelligence. Enhance any camera with advanced AI analytics and automation capabilities to streamline operations, improve security, and unlock valuable insights.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/contact" className="btn-outline">
                <span>Request Pricing</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <FiCamera className="w-6 h-6" />,
                title: "Enhanced Camera Value",
                description: "Transform any camera into an intelligent sensor with cloud-based analytics that doesn't require hardware upgrades."
              },
              {
                icon: <FiAlertTriangle className="w-6 h-6" />,
                title: "Proactive Security",
                description: "Detect potential threats before they escalate with intelligent monitoring and real-time alerts."
              },
              {
                icon: <FiClipboard className="w-6 h-6" />,
                title: "Business Intelligence",
                description: "Derive actionable insights from video data to improve operations, customer experience, and space utilization."
              },
              {
                icon: <FiClock className="w-6 h-6" />,
                title: "Operational Efficiency",
                description: "Automate monitoring tasks and quickly find relevant footage, reducing manual review time by up to 95%."
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

      {/* Platform Overview */}
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
                Pure Cloud <span className="gradient-text">Video Analytics</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our cloud-based video analytics platform helps organizations extract valuable information, accelerate incident searching processes, and deliver better quality real-time alerts through our advanced AI and automation capabilities.
              </p>
              <p className="text-accent-silver mb-8">
                With our platform, you can activate different AI analytics modules per camera on demand, allowing you to customize your surveillance system to your specific needs while only paying for the analytics you use. From object detection to behavior analysis, our solution transforms standard surveillance cameras into powerful tools for security and business intelligence.
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
                src="https://ext.same-assets.com/4195455928/114446128.png"
                alt="Video Analytics Portal Interface"
                className="w-full rounded-xl shadow-xl"
              />
              <div className="absolute -bottom-4 right-4 bg-background p-4 rounded-xl border border-primary/20 shadow-lg max-w-xs">
                <h4 className="text-primary text-sm font-medium mb-1">Intuitive User Interface</h4>
                <p className="text-accent-silver text-xs">User-friendly interface designed for security professionals and business users alike.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Analytics Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Advanced Analytics <span className="gradient-text">Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our cloud video analytics platform offers a comprehensive suite of AI-powered capabilities that can be activated per camera on demand to meet your specific security and business intelligence needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {analyticsFeatures.map((feature, index) => (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-8 rounded-xl border border-primary/10 h-full flex flex-col"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{feature.name}</h3>
                <p className="text-accent-silver mb-6">{feature.description}</p>
                <div className="mt-auto">
                  <ul className="space-y-2 mb-6">
                    {feature.details.slice(0, 3).map((detail, idx) => (
                      <li key={idx} className="flex items-start text-sm text-accent-silver">
                        <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{detail}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                    <span>Learn more</span>
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              How It <span className="gradient-text">Works</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our cloud video analytics platform seamlessly integrates with your existing surveillance infrastructure, providing powerful AI capabilities without the need for hardware upgrades.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                number: "01",
                title: "Connect",
                description: "Easily connect your existing cameras to our cloud platform using our secure gateway. No need to replace your current hardware."
              },
              {
                number: "02",
                title: "Activate",
                description: "Select and activate the specific analytics modules you need for each camera, paying only for the capabilities you use."
              },
              {
                number: "03",
                title: "Analyze",
                description: "Our AI algorithms process your video feeds in real-time, delivering actionable insights and alerts through our intuitive portal."
              }
            ].map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl relative"
              >
                <div className="text-6xl font-bold text-primary/10 absolute top-4 right-4">{step.number}</div>
                <h3 className="text-2xl font-semibold text-white mb-4 relative z-10">{step.title}</h3>
                <p className="text-accent-silver relative z-10">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portal Features */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Intuitive <span className="gradient-text">Portal Features</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our video analytics portal provides a comprehensive set of tools to help you manage your surveillance system effectively and extract maximum value from your video data.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Connected Camera Menu",
                description: "View and filter connected cameras by status (Active, PTZ, Offline) for effortless access and management of your entire camera network."
              },
              {
                title: "Navigation Menu",
                description: "Organize and access cameras efficiently by typing group names or categories, making it easy to find the specific cameras you need."
              },
              {
                title: "Analytics Events Menu",
                description: "Activate cloud-based analytics, view detected events, and access face and license plate recognition results with advanced search filters."
              },
              {
                title: "Library Menu",
                description: "Store, search, share, download, rename, and delete clips and time-lapses efficiently within the organized library section."
              },
              {
                title: "Map Menu",
                description: "Visualize camera locations on a map, preview cameras, open in full screen, or add to layout cells for comprehensive spatial awareness."
              },
              {
                title: "AutoScan Menu",
                description: "Set up automatic layout change sequences effortlessly by adding layouts and cameras using a simple drag-and-drop method."
              },
              {
                title: "Layout Menu",
                description: "Change, customize, and save layouts for future use and preferences for different sites or operators, tailored to your needs."
              },
              {
                title: "Movement Tracking with Area Search Tool",
                description: "Locate and track movements within designated areas effortlessly with our powerful Area Search Tool for precise incident investigation."
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
                <h3 className="text-xl font-semibold text-white mb-3">{feature.title}</h3>
                <p className="text-accent-silver">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Integration Capabilities */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Seamless <span className="gradient-text">Integration</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our platform is designed to work with your existing surveillance infrastructure, supporting a wide range of camera brands and models.
            </p>
          </div>

          <div className="bg-background rounded-xl p-8">
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
              {Array(12).fill(0).map((_, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="aspect-square bg-background-dark/50 rounded-lg flex items-center justify-center p-4"
                >
                  <div className="w-full h-full bg-background-dark/80 rounded-md flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                      <FiCamera className="w-5 h-5" />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
            <div className="text-center mt-8">
              <p className="text-accent-silver">Our platform supports most major camera brands, including Amcrest, Axis, Hikvision, Dahua, Uniview, and many more.</p>
              <Link to="/contact" className="btn-primary inline-flex items-center mt-4">
                <span>Check Camera Compatibility</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to transform your surveillance system?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us today to schedule a demo of our cloud video analytics platform and discover how it can enhance your security and business operations.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Schedule a Demo
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

export default VideoAnalyticsPortal;
