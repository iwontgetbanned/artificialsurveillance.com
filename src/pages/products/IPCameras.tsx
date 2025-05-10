import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiShield, FiVideo, FiHome, FiBriefcase, FiEye, FiCheck } from 'react-icons/fi';

const IPCameras = () => {
  const cameras = [
    {
      id: 'ip5m-t1179ew',
      name: 'ProHD Outdoor Security IP Turret Camera',
      model: 'IP5M-T1179EW-AI-V3',
      image: 'https://ext.same-assets.com/2139700052/2785873331.jpeg',
      features: [
        '5-Megapixel HD Resolution',
        '98ft Night Vision',
        '2.8mm Lens, 105° Viewing Angle',
        'IP67 Weatherproof',
        'MicroSD Recording (256GB)',
        'ONVIF Compliant'
      ]
    },
    {
      id: 'ip4m-1041b',
      name: '4MP ProHD Indoor WiFi IP Camera',
      model: 'IP4M-1041B',
      image: 'https://ext.same-assets.com/2139700052/1930607361.jpeg',
      features: [
        '4-Megapixel HD Resolution',
        'Pan/Tilt Capability',
        'Two-Way Audio',
        'Night Vision up to 32ft',
        'Motion Detection Alerts',
        'MicroSD Card Support'
      ]
    },
    {
      id: 'ip4m-1041w',
      name: '4MP Indoor Security WiFi Camera',
      model: 'IP4M-1041W',
      image: 'https://ext.same-assets.com/2139700052/1997071744.jpeg',
      features: [
        '4-Megapixel HD Resolution',
        'Pan/Tilt with 90° Field of View',
        'Smart Motion Detection',
        'Two-Way Talk',
        'Night Vision up to 32ft',
        'Cloud & Local Storage Options'
      ]
    },
    {
      id: 'ip2m-841b',
      name: '2MP WiFi Security Camera',
      model: 'IP2M-841B-V3',
      image: 'https://ext.same-assets.com/2139700052/3017001168.jpeg',
      features: [
        '2-Megapixel Resolution',
        'Pan/Tilt Functionality',
        'Two-Way Audio',
        '32ft Night Vision',
        'Motion Alerts',
        'Works with Alexa'
      ]
    },
    {
      id: 'ash21-b',
      name: 'SmartHome AI Human Detection WiFi Camera',
      model: 'ASH21-B-V2',
      image: 'https://ext.same-assets.com/2139700052/1205697119.jpeg',
      features: [
        'AI Human Detection',
        'Auto-Tracking',
        'Baby Monitor Mode',
        'Two-Way Audio',
        'Night Vision',
        'Mobile App Control'
      ]
    },
    {
      id: 'ash21-w',
      name: 'SmartHome AI Human Detection WiFi Camera (White)',
      model: 'ASH21-W',
      image: 'https://ext.same-assets.com/2139700052/3368040872.jpeg',
      features: [
        'AI Human Detection',
        'Auto-Tracking',
        'Pan/Tilt Control',
        'Night Vision',
        'Two-Way Audio',
        'Mobile App Viewing'
      ]
    },
    {
      id: 'ip5m-t1277ew',
      name: '5MP AI IP Turret Camera',
      model: 'IP5M-T1277EW-AI',
      image: 'https://ext.same-assets.com/2139700052/1391981178.jpeg',
      features: [
        '5-Megapixel Resolution',
        'AI-Powered Smart Detection',
        'Human & Vehicle Recognition',
        'Night Vision',
        'Weatherproof Design',
        'ONVIF Compatible'
      ]
    },
    {
      id: 'ip8m-dlb2998ew',
      name: 'Dual-Lens 4K Panoramic Camera',
      model: 'IP8M-DLB2998EW-AI',
      image: 'https://ext.same-assets.com/2139700052/1228780913.jpeg',
      features: [
        '8MP (4K) Resolution',
        'Dual 4MP Lenses',
        '180° Panoramic View',
        '65ft Night Color Vision',
        'Human/Vehicle Detection',
        'IP67 Weatherproof'
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
              backgroundImage: "url('https://ext.same-assets.com/2139700052/2785873331.jpeg')",
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
              IP <span className="gradient-text">Surveillance Cameras</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our IP cameras deliver exceptional image quality and advanced capabilities. With resolutions up to 4K, smart detection features, and flexible installation options, we offer camera solutions for every monitoring need.
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
                icon: <FiVideo className="w-6 h-6" />,
                title: "Superior Image Quality",
                description: "Our IP cameras deliver crisp, clear images with up to 4K resolution, ensuring every detail is captured with precision."
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Advanced Security",
                description: "Built with robust security features including encrypted connections and secure firmware to prevent unauthorized access."
              },
              {
                icon: <FiHome className="w-6 h-6" />,
                title: "Flexible Installation",
                description: "Choose from wireless or wired connectivity options, making it easy to deploy cameras exactly where you need them."
              },
              {
                icon: <FiBriefcase className="w-6 h-6" />,
                title: "Scalable Solutions",
                description: "Our IP camera systems grow with your needs, allowing you to add cameras and storage as your requirements evolve."
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

      {/* Camera Grid */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Featured <span className="gradient-text">IP Cameras</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Browse our selection of high-quality IP cameras designed for various surveillance needs, from residential to commercial applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {cameras.map((camera, index) => (
              <motion.div
                key={camera.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="bg-background rounded-xl overflow-hidden border border-primary/10 hover:border-primary/30 transition-all group"
              >
                <div className="aspect-video bg-background-dark flex items-center justify-center overflow-hidden">
                  <img
                    src={camera.image}
                    alt={camera.name}
                    className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-white mb-1">{camera.name}</h3>
                  <p className="text-primary text-sm mb-4">Model: {camera.model}</p>
                  <ul className="space-y-2 mb-6">
                    {camera.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start text-sm text-accent-silver">
                        <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Link to="/contact" className="text-primary hover:text-primary-light flex items-center text-sm font-medium">
                    <span>Request a quote</span>
                    <FiArrowRight className="ml-2" />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Camera <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Our IP cameras are used in a wide range of environments and applications, providing reliable surveillance solutions wherever they're needed.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Residential Security",
                description: "Monitor your home, property, and loved ones with easy-to-use, high-resolution cameras that provide peace of mind.",
                icon: <FiHome className="w-6 h-6" />
              },
              {
                title: "Business Surveillance",
                description: "Protect your business assets, monitor employee activity, and deter theft with comprehensive business surveillance solutions.",
                icon: <FiBriefcase className="w-6 h-6" />
              },
              {
                title: "Remote Monitoring",
                description: "Access live and recorded footage from anywhere using our mobile apps and web interfaces, keeping you connected to what matters.",
                icon: <FiEye className="w-6 h-6" />
              }
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background-dark p-8 rounded-xl border border-primary/10"
              >
                <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mb-6 text-primary">
                  {application.icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{application.title}</h3>
                <p className="text-accent-silver mb-6">{application.description}</p>
                <Link to="/contact" className="inline-flex items-center text-primary hover:text-primary-light font-medium">
                  <span>Learn more</span>
                  <FiChevronRight className="ml-1" />
                </Link>
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
                <h2 className="heading-md mb-4 text-white">Ready to enhance your security?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for expert guidance in selecting the right IP cameras for your specific needs and budget.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Request a Consultation
                </Link>
                <Link to="/products/poe-cameras" className="btn-outline whitespace-nowrap">
                  View PoE Cameras
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default IPCameras;
