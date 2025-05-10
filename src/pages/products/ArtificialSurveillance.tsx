import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiCamera, FiUsers, FiEye, FiTerminal, FiLayers, FiAlertTriangle, FiMapPin, FiShield, FiUserCheck, FiTruck, FiThermometer, FiBarChart2, FiActivity } from 'react-icons/fi';

const ArtificialSurveillance = () => {
  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/1199936672/3944786987.mp4')",
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
              <span className="gradient-text">Artificial Surveillance</span> Platform
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Harness the power of our Pure Cloud AI and Automation Platform to translate video into impact. Activate advanced AI per camera on demand to solve your business and security challenges.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/contact" className="btn-primary">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
              <Link to="/services" className="btn-outline">
                <span>Explore Our Services</span>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* What is Video AI Analytics Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                What are <span className="gradient-text">Video AI Analytics?</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Organizations everywhere are turning to video analytics solutions to make their operations more productive and secure, while becoming empowered to make data-driven decisions. Video analytics for business is founded on Big Data, which is derived from a combination of structured and unstructured datasets from several real-time or historic sources.
              </p>
              <p className="text-accent-silver mb-6">
                Video surveillance footage is considered a major source of Big Data; as each camera gathers a plethora of information, in a network effect, it can be mined for business and security intelligence.
              </p>
              <p className="text-accent-silver">
                Our Artificial Surveillance platform helps customers extract valuable information, accelerate incident searching processes, and deliver better quality real-time alerts through our pure cloud video AI and automation capabilities.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="relative rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-background-dark rounded-xl">
                <video
                  className="w-full h-full object-cover rounded-xl"
                  autoPlay
                  loop
                  muted
                  playsInline
                >
                  <source src="https://ext.same-assets.com/1199936672/3944786987.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
                <div className="absolute inset-0 bg-gradient-to-br from-background-dark/60 to-transparent"></div>
                <div className="absolute bottom-0 left-0 p-6">
                  <h3 className="text-white text-xl font-bold mb-2">Intelligent Video Analytics</h3>
                  <p className="text-accent-silver">Transform raw video footage into actionable insights</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* AI Modules Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-16">
            <h2 className="heading-md mb-4">
              Activate AI <span className="gradient-text">Per Camera</span> On Demand
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our Artificial Surveillance platform helps customers extract valuable information, accelerate incident searching processes, and deliver better quality real-time alerts through our pure cloud video AI and automation capabilities.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <FiEye className="w-6 h-6" />,
                title: "Object Detection, Classification and Tracking",
                description: "Identify and track thousands of objects with confidence scores, metadata, and rule-based alerts.",
                link: "object-detection"
              },
              {
                icon: <FiBarChart2 className="w-6 h-6" />,
                title: "Heat Maps",
                description: "Visualize movement patterns with intelligent heat maps based on object detection and tracking.",
                link: "heat-maps"
              },
              {
                icon: <FiUsers className="w-6 h-6" />,
                title: "People Detection and Counting",
                description: "Accurately count and track people through specific areas during specified time intervals.",
                link: "people-counting"
              },
              {
                icon: <FiActivity className="w-6 h-6" />,
                title: "Behavioral Analytics for Loitering",
                description: "Track movement patterns and dwell times to detect unusual or suspicious behavior.",
                link: "loitering"
              },
              {
                icon: <FiLayers className="w-6 h-6" />,
                title: "Color Search",
                description: "Quickly search for specific colors within video footage for identification and retrieval.",
                link: "color-search"
              },
              {
                icon: <FiTruck className="w-6 h-6" />,
                title: "Automatic License Plate Recognition",
                description: "Enhance site security by detecting authorized and unauthorized vehicles.",
                link: "alpr"
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Safety Vests (PPE) Detection",
                description: "Ensure safety compliance and receive instant alerts for individuals without PPE.",
                link: "safety-vests"
              },
              {
                icon: <FiAlertTriangle className="w-6 h-6" />,
                title: "Hard Hats (PPE) Detection",
                description: "Proactively address safety concerns with real-time hard hat compliance monitoring.",
                link: "hard-hats"
              },
              {
                icon: <FiThermometer className="w-6 h-6" />,
                title: "Fire and Smoke Detection",
                description: "Respond in real-time to fire incidents with intelligent detection technology.",
                link: "fire-detection"
              },
              {
                icon: <FiUserCheck className="w-6 h-6" />,
                title: "Face Recognition",
                description: "Find similar faces in a collection and search through archives for identification.",
                link: "face-recognition"
              }
            ].map((module, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10 hover:border-primary/30 transition-all h-full group"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-4 text-primary group-hover:bg-primary/20 transition-all">
                  {module.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{module.title}</h3>
                <p className="text-accent-silver mb-6">{module.description}</p>
                <a
                  href={`#${module.link}`}
                  className="text-primary hover:text-primary-light transition-colors flex items-center text-sm font-medium"
                >
                  <span>Learn more</span>
                  <FiArrowRight className="ml-2" />
                </a>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Feature Detail - Object Detection */}
      <section id="object-detection" className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Object Detection, <span className="gradient-text">Classification</span> and Tracking
              </h2>
              <p className="text-accent-silver mb-6">
                Our AI identifies thousands of objects such as people, vehicles, pets, furniture, etc, and provides a confidence score. Each classified object is supplied with metadata - position, color, and attributes.
              </p>
              <p className="text-accent-silver mb-6">
                The rule-based engine allows you to set up camera-based event triggers (motion, intrusion area, line crossing, audio, temperature, etc) per object category. You can schedule relevant alert notifications for email and app push notifications.
              </p>
              <p className="text-accent-silver mb-6">
                Our platform uniquely identifies and tracks objects in the field of view to eliminate false alarms. This includes determining the direction of traffic flow and provides alerts for suspicious movement paths.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.prod.website-files.com/664b47ac7127e8f879849ea5/664b47ac7127e8f87984a3ba_div.panel%20object%20detection.png"
                alt="Object detection technology"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Detail - People Counting */}
      <section id="people-counting" className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://cdn.prod.website-files.com/664b47ac7127e8f879849ea5/664b47ac7127e8f87984a398_people%20counting%20panel.png"
                alt="People counting technology"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="heading-md mb-6">
                People Detection and <span className="gradient-text">Counting</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our platform offers advanced people counting through sophisticated people classification and tracking, setting it apart from traditional methods that rely solely on line crossing detection.
              </p>
              <p className="text-accent-silver mb-6">
                With our technology, you can accurately determine the number of people moving through specific areas during specified time intervals, providing valuable insights for retail analytics, space utilization, and security purposes.
              </p>
              <p className="text-accent-silver mb-6">
                The system can be configured to provide real-time alerts when occupancy thresholds are exceeded, helping to maintain compliance with capacity regulations and optimize staffing levels.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Detail - Loitering Detection */}
      <section id="loitering" className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Behavioral Analytics for <span className="gradient-text">Loitering Detection</span>
              </h2>
              <p className="text-accent-silver mb-6">
                Our AI boasts a remarkable 98% improvement over traditional methods which allows you to drastically reduce the number of alerts delivered to operators and provide only the relevant information for them to act upon.
              </p>
              <p className="text-accent-silver mb-6">
                Unlike other solutions, our analytics focus on the detection and tracking of each unique object, minimizing false alarms. This AI tracks movement patterns, dwell times, and behavior analysis to recognize unusual or suspicious actions within designated areas.
              </p>
              <p className="text-accent-silver mb-6">
                The system can be customized to define specific loitering parameters, such as duration thresholds and zone sensitivity, ensuring you receive alerts that are tailored to your security policies.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.prod.website-files.com/664b47ac7127e8f879849ea5/664b47ac7127e8f87984a3a0_loitering%20panel.png"
                alt="Loitering detection technology"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Detail - License Plate Recognition */}
      <section id="alpr" className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-2 lg:order-1"
            >
              <img
                src="https://cdn.prod.website-files.com/664b47ac7127e8f879849ea5/664b47ac7127e8f87984a3b0_ALPR%20%20div.panel.png"
                alt="License plate recognition technology"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="order-1 lg:order-2"
            >
              <h2 className="heading-md mb-6">
                Automatic License Plate <span className="gradient-text">Recognition (ALPR)</span>
              </h2>
              <p className="text-accent-silver mb-6">
                With our cloud-based Automatic License Plate Recognition (ALPR), users can further improve site security by detecting authorized and unauthorized vehicles, repeat offenders, and enhancing visitor management and access control.
              </p>
              <p className="text-accent-silver mb-6">
                Our cloud-based ALPR add-on can be easily implemented to any existing IP cameras without requiring new hardware investments or development, making it a cost-effective solution for enhancing your security infrastructure.
              </p>
              <p className="text-accent-silver mb-6">
                The system allows you to create and manage vehicle watchlists, set up automated alerts, and generate comprehensive reports on vehicle activity, providing valuable insights for security and operational purposes.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Detail - Fire and Smoke Detection */}
      <section id="fire-detection" className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Fire and Smoke <span className="gradient-text">Detection</span>
              </h2>
              <p className="text-accent-silver mb-6">
                In the event of a fire, every second counts. By employing intelligent video technology to accurately identify smoke or fire, you can respond in real-time instead of relying solely on smoke triggering an alarm.
              </p>
              <p className="text-accent-silver mb-6">
                This proactive approach allows for faster response times from local authorities and enables individuals, whether employees or family members, to evacuate to safety more quickly.
              </p>
              <p className="text-accent-silver mb-6">
                Even if only smoke is detected, the ability to promptly identify its source and assess the presence of an actual threat allows for swift and appropriate action. Rather than waiting for a traditional alarm to activate, intelligent flame and smoke detection from our system enhances response times and potentially saves lives.
              </p>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Schedule a Demo</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="https://cdn.prod.website-files.com/664b47ac7127e8f879849ea5/664b47ac7127e8f87984a382_fire-smoke-div.panel.png"
                alt="Fire and smoke detection technology"
                className="w-full rounded-xl shadow-xl"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Technology Partners Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Technology <span className="gradient-text">Partners</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our platform integrates seamlessly with leading technology providers to deliver comprehensive security solutions.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8">
            {Array(12).fill(0).map((_, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background p-4 rounded-xl flex items-center justify-center h-20"
              >
                <div className="w-full h-full bg-background-dark/20 rounded-md flex items-center justify-center">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
                    <FiCamera className="w-5 h-5" />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to harness the power of AI surveillance?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us today to schedule a personalized demonstration of our Artificial Surveillance platform.
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

export default ArtificialSurveillance;
