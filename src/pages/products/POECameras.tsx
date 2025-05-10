import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronRight, FiShield, FiVideo, FiHome, FiBriefcase, FiEye, FiCheck, FiWifi, FiPower } from 'react-icons/fi';

const POECameras = () => {
  const cameras = [
    {
      id: 'ip5m-t1179ew-ai',
      name: 'ProHD Outdoor Security IP Turret PoE Camera',
      model: 'IP5M-T1179EW-AI-V3',
      image: 'https://ext.same-assets.com/2139700052/2785873331.jpeg',
      features: [
        '5-Megapixel HD Resolution',
        'Power over Ethernet (PoE)',
        '98ft Night Vision',
        '2.8mm Lens, 105° Viewing Angle',
        'IP67 Weatherproof',
        'ONVIF Compliant'
      ]
    },
    {
      id: 'ip8m-t2599ew-ai',
      name: '4K Outdoor Security IP Turret PoE Camera',
      model: 'IP8M-T2599EW-AI-V3',
      image: 'https://ext.same-assets.com/2139700052/2543864479.jpeg',
      features: [
        '8-Megapixel (4K) Resolution',
        'Power over Ethernet (PoE)',
        'Enhanced Night Vision',
        'AI Smart Detection',
        'IP67 Weatherproof',
        'Human & Vehicle Recognition'
      ]
    },
    {
      id: 'ip5m-b1186ew',
      name: '5MP PoE Bullet Security Camera',
      model: 'IP5M-B1186EW-28MM',
      image: 'https://ext.same-assets.com/2139700052/112208502.jpeg',
      features: [
        '5-Megapixel HD Resolution',
        'Power over Ethernet (PoE)',
        'Weatherproof IP67 Design',
        '2.8mm Lens',
        'Night Vision up to 98ft',
        'Motion Detection Alerts'
      ]
    },
    {
      id: 'ip5m-t1277ew-ai',
      name: '5MP AI IP PoE Turret Camera',
      model: 'IP5M-T1277EW-AI',
      image: 'https://ext.same-assets.com/2139700052/1391981178.jpeg',
      features: [
        '5-Megapixel Resolution',
        'Power over Ethernet (PoE)',
        'AI-Powered Smart Detection',
        'Human & Vehicle Recognition',
        'Weatherproof Design',
        'ONVIF Compatible'
      ]
    },
    {
      id: 'ip5m-t1277eb-ai',
      name: '5MP AI IP PoE Turret Camera (Black)',
      model: 'IP5M-T1277EB-AI',
      image: 'https://ext.same-assets.com/2139700052/3984347776.jpeg',
      features: [
        '5-Megapixel Resolution',
        'Power over Ethernet (PoE)',
        'AI Detection Technology',
        'Smart Motion Alerts',
        'Black Case Design',
        'Simple Installation'
      ]
    },
    {
      id: 'ip8m-dlb2998ew-ai',
      name: 'Dual-Lens 4K Panoramic PoE Camera',
      model: 'IP8M-DLB2998EW-AI',
      image: 'https://ext.same-assets.com/2139700052/1228780913.jpeg',
      features: [
        '8MP (4K) Combined Resolution',
        'Dual 4MP Lenses',
        'Power over Ethernet (PoE)',
        '180° Panoramic View',
        '65ft Night Color Vision',
        'IP67 Weatherproof'
      ]
    },
    {
      id: 'ip8m-2496eb',
      name: '4K Outdoor Bullet PoE IP Camera',
      model: 'IP8M-2496EB-V2',
      image: 'https://ext.same-assets.com/2139700052/2006904137.jpeg',
      features: [
        '8-Megapixel (4K) Resolution',
        'Power over Ethernet (PoE)',
        'Long-Range Night Vision',
        'Motion Detection',
        'Weatherproof Housing',
        'ONVIF Protocol Support'
      ]
    },
    {
      id: 'ip5m-d1186ew',
      name: '5MP Outdoor Dome PoE IP Camera',
      model: 'IP5M-D1186EW',
      image: 'https://ext.same-assets.com/2139700052/1228780913.jpeg',
      features: [
        '5-Megapixel HD Resolution',
        'Power over Ethernet (PoE)',
        'Vandal-Resistant Dome Design',
        'IR Night Vision',
        'IP67 Weatherproof',
        'Wide Dynamic Range'
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
              backgroundImage: "url('https://ext.same-assets.com/2139700052/2543864479.jpeg')",
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
              PoE <span className="gradient-text">Surveillance Cameras</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our Power over Ethernet (PoE) cameras offer simplified installation with a single cable delivering both power and data. With high-resolution imaging and advanced features, these cameras provide reliable surveillance for any environment.
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
                icon: <FiPower className="w-6 h-6" />,
                title: "Simplified Installation",
                description: "Requires only a single Ethernet cable for both power and data, eliminating the need for separate power cables and outlets."
              },
              {
                icon: <FiVideo className="w-6 h-6" />,
                title: "High-Definition Imaging",
                description: "Capture crystal-clear footage in resolutions up to 4K (8MP), ensuring every detail is recorded with precision."
              },
              {
                icon: <FiWifi className="w-6 h-6" />,
                title: "Reliable Connection",
                description: "Wired connection provides consistent, stable performance without the interference issues of wireless networks."
              },
              {
                icon: <FiShield className="w-6 h-6" />,
                title: "Enhanced Security",
                description: "Hardwired connections offer better security than wireless alternatives, reducing vulnerability to network-based attacks."
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
              Featured <span className="gradient-text">PoE Cameras</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              Browse our selection of high-performance PoE cameras, designed for reliable surveillance in both residential and commercial environments.
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

      {/* What is PoE Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                What is <span className="gradient-text">Power over Ethernet?</span>
              </h2>
              <p className="text-accent-silver mb-4">
                Power over Ethernet (PoE) is a technology that allows network cables to carry electrical power. For security cameras, this means a single cable can provide both data connection and electric power to the device.
              </p>
              <p className="text-accent-silver mb-6">
                This technology offers numerous advantages over traditional camera setups:
              </p>
              <ul className="space-y-3 mb-6">
                {[
                  "Reduced installation costs with less cabling required",
                  "Greater flexibility in camera placement",
                  "Centralized power management through PoE switches",
                  "Ability to remotely reset cameras through power cycling",
                  "Simplified backup power solutions with a single UPS for the PoE switch",
                  "Safer low-voltage power delivery to camera locations"
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start text-accent-silver">
                    <FiCheck className="text-primary mt-1 mr-2 flex-shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
              <Link to="/contact" className="btn-primary inline-flex items-center">
                <span>Discuss Your PoE Requirements</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background-dark p-6 rounded-xl"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src="https://ext.same-assets.com/2139700052/4181861094.svg"
                  alt="PoE Camera Installation"
                  className="w-full h-auto rounded-lg mb-8"
                />
                <div className="bg-background-dark/80 p-6 rounded-xl">
                  <h3 className="text-xl font-semibold text-white mb-4">PoE Camera System Components</h3>
                  <ul className="space-y-3">
                    <li className="flex items-start text-accent-silver">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary">1</span>
                      <span><strong className="text-white">PoE Cameras</strong> - IP cameras with built-in PoE capability</span>
                    </li>
                    <li className="flex items-start text-accent-silver">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary">2</span>
                      <span><strong className="text-white">PoE Switch</strong> - Distributes power and network connection to cameras</span>
                    </li>
                    <li className="flex items-start text-accent-silver">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary">3</span>
                      <span><strong className="text-white">Network Video Recorder (NVR)</strong> - Records and manages camera footage</span>
                    </li>
                    <li className="flex items-start text-accent-silver">
                      <span className="w-6 h-6 rounded-full bg-primary/20 flex items-center justify-center mr-3 flex-shrink-0 text-primary">4</span>
                      <span><strong className="text-white">Cat5e/Cat6 Ethernet Cables</strong> - Transmits both power and data</span>
                    </li>
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Applications Section */}
      <section className="py-16 bg-background-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-md mb-4">
              Ideal <span className="gradient-text">Applications</span>
            </h2>
            <p className="text-accent-silver max-w-2xl mx-auto">
              PoE cameras are versatile security solutions suitable for a wide range of environments and applications.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Commercial Buildings",
                description: "Monitor entrances, hallways, parking lots, and other key areas of office buildings, retail stores, and warehouses.",
                icon: <FiBriefcase className="w-6 h-6" />
              },
              {
                title: "Residential Properties",
                description: "Secure homes with professional-grade surveillance, monitoring doorways, yards, and other entry points.",
                icon: <FiHome className="w-6 h-6" />
              },
              {
                title: "Critical Infrastructure",
                description: "Provide reliable monitoring for utilities, data centers, manufacturing facilities, and other essential infrastructure.",
                icon: <FiShield className="w-6 h-6" />
              }
            ].map((application, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-background p-8 rounded-xl border border-primary/10"
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
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready to simplify your surveillance setup?</h2>
                <p className="text-accent-silver text-lg">
                  Contact us for expert guidance in selecting and installing the right PoE camera system for your specific requirements.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/contact" className="btn-primary whitespace-nowrap">
                  Request a Consultation
                </Link>
                <Link to="/products/ip-cameras" className="btn-outline whitespace-nowrap">
                  View IP Cameras
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default POECameras;
