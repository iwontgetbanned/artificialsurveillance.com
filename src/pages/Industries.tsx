import { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiChevronRight, FiGrid, FiList, FiArrowRight } from 'react-icons/fi';
import { industries } from '../data/industries';

const Industries = () => {
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');

  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://ext.same-assets.com/3349557025/1827696103.jpeg')",
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
              <span className="gradient-text">Industries</span> We Serve
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Our unified surveillance solutions are tailored to meet the unique security and operational needs of various industries, leveraging advanced technology platform.
            </p>
          </motion.div>
        </div>
      </section>

      {/* View Selector */}
      <section className="py-10 bg-background">
        <div className="container-custom">
          <div className="flex justify-end mb-8">
            <div className="flex gap-2">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'grid'
                    ? 'bg-primary text-white'
                    : 'bg-background-dark text-accent-silver hover:bg-primary/10 hover:text-primary'
                }`}
                aria-label="Grid view"
              >
                <FiGrid className="w-5 h-5" />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-md transition-all ${
                  viewMode === 'list'
                    ? 'bg-primary text-white'
                    : 'bg-background-dark text-accent-silver hover:bg-primary/10 hover:text-primary'
                }`}
                aria-label="List view"
              >
                <FiList className="w-5 h-5" />
              </button>
            </div>
          </div>

          {/* Grid View */}
          {viewMode === 'grid' && (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-dark rounded-xl overflow-hidden group h-full"
                >
                  <div className="relative overflow-hidden aspect-[4/3]">
                    <img
                      src={industry.image}
                      alt={industry.name}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark/90 to-transparent opacity-80"></div>
                    <div className="absolute bottom-0 left-0 w-full p-6">
                      <h3 className="text-xl font-bold text-white mb-2">{industry.name}</h3>
                    </div>
                  </div>
                  <div className="p-6">
                    <p className="text-accent-silver text-sm mb-4">
                      {industry.description}
                    </p>
                    <div className="space-y-2">
                      <h4 className="text-white font-semibold mb-2">How We Help:</h4>
                      <ul className="space-y-1">
                        {industry.benefits.slice(0, 3).map((benefit, idx) => (
                          <li key={idx} className="flex items-start text-accent-silver text-sm">
                            <FiChevronRight className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                            <span>{benefit}</span>
                          </li>
                        ))}
                      </ul>
                      {industry.benefits.length > 3 && (
                        <Link to={`/industries/${industry.id}`} className="text-primary hover:text-primary-light transition-colors text-sm flex items-center mt-2">
                          <span>View all benefits</span>
                          <FiChevronRight className="w-4 h-4 ml-1" />
                        </Link>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}

          {/* List View */}
          {viewMode === 'list' && (
            <div className="space-y-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={industry.id}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-background-dark rounded-xl overflow-hidden group"
                >
                  <div className="flex flex-col md:flex-row">
                    <div className="relative md:w-1/3 overflow-hidden">
                      <img
                        src={industry.image}
                        alt={industry.name}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 aspect-video md:aspect-auto"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-background-dark/70 to-transparent md:bg-gradient-to-t opacity-60"></div>
                    </div>
                    <div className="p-6 md:w-2/3">
                      <h3 className="text-xl font-bold text-white mb-3">{industry.name}</h3>
                      <p className="text-accent-silver text-sm mb-4">{industry.description}</p>

                      <div className="mb-4">
                        <h4 className="text-white font-semibold mb-2">How We Help:</h4>
                        <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-1">
                          {industry.benefits.map((benefit, idx) => (
                            <li key={idx} className="flex items-start text-accent-silver text-sm">
                              <FiChevronRight className="w-4 h-4 text-primary mt-0.5 mr-2 flex-shrink-0" />
                              <span>{benefit}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Link to={`/industries/${industry.id}`} className="text-primary hover:text-primary-light transition-colors flex items-center text-sm">
                        <span>Learn more about our solutions</span>
                        <FiChevronRight className="w-4 h-4 ml-1" />
                      </Link>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Unified Platform Section */}
      <section className="py-20 bg-background-dark relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary/20 to-secondary/20" style={{ mixBlendMode: 'overlay' }}></div>
        </div>

        <div className="container-custom relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="heading-md mb-6">
                Our <span className="gradient-text">Unified Platform</span> Advantage
              </h2>
              <p className="text-accent-silver mb-8">
                Our integrated surveillance solutions are built on a unified security platform,
                allowing seamless operation across different systems and providing a single interface
                for managing all your security and operational needs.
              </p>
              <div className="space-y-4 mb-8">
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Centralized Management</h3>
                    <p className="text-accent-silver">Manage video surveillance, access control, and analytics from a single platform with unified reporting.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Seamless Integration</h3>
                    <p className="text-accent-silver">Integrate with existing systems and third-party solutions for a comprehensive security ecosystem.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-primary/20 p-2 rounded-lg mr-4">
                    <svg className="w-6 h-6 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-white font-semibold text-lg mb-1">Scalable Architecture</h3>
                    <p className="text-accent-silver">Easily expand your system as your needs grow, from single sites to enterprise-wide deployments.</p>
                  </div>
                </div>
              </div>
              <Link to="/products" className="btn-primary inline-flex items-center">
                <span>Explore Our Solutions</span>
                <FiArrowRight className="ml-2" />
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="relative rounded-xl overflow-hidden"
            >
              <div className="aspect-video bg-background-light/10 rounded-xl p-6 border border-primary/20">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-4/5 h-4/5 bg-gradient-to-br from-primary/5 to-secondary/5 rounded-xl backdrop-blur-sm border border-white/10 p-6 flex flex-col">
                    <div className="bg-background-dark/80 rounded-lg p-4 mb-4">
                      <h3 className="text-white text-center mb-2">Unified Security Platform</h3>
                      <div className="grid grid-cols-3 gap-2 text-center">
                        <div className="bg-primary/20 rounded p-2">
                          <div className="text-xs text-accent-silver">Video</div>
                        </div>
                        <div className="bg-primary/20 rounded p-2">
                          <div className="text-xs text-accent-silver">Access</div>
                        </div>
                        <div className="bg-primary/20 rounded p-2">
                          <div className="text-xs text-accent-silver">Analytics</div>
                        </div>
                      </div>
                    </div>
                    <div className="flex-grow grid grid-cols-3 gap-3">
                      <div className="space-y-3">
                        <div className="bg-background-dark/50 rounded h-12"></div>
                        <div className="bg-background-dark/50 rounded h-24"></div>
                        <div className="bg-background-dark/50 rounded h-12"></div>
                      </div>
                      <div className="col-span-2 bg-background-dark/50 rounded flex items-center justify-center">
                        <div className="text-white text-opacity-30 text-sm">Integrated Dashboard View</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
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
                <h2 className="heading-md mb-4 text-white">Ready for an industry-tailored solution?</h2>
                <p className="text-accent-silver text-lg">
                  Let us design a surveillance system customized for your industry's specific requirements.
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

export default Industries;
