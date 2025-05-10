import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FiArrowRight, FiChevronRight } from 'react-icons/fi';

const SchoolsDetail = () => {
  const industry = {
    id: 'schools',
    name: 'Schools',
    image: 'https://ext.same-assets.com/3349557025/2257941788.jpeg',
    description: 'Protect students, staff, and educational assets with comprehensive surveillance systems designed for K-12 schools and educational institutions.',
    benefits: [
      'Campus-wide security monitoring with real-time alerts',
      'Automated attendance and visitor management',
      'Emergency event detection and immediate response',
      'Integration with access control systems for buildings',
      'Remote monitoring capabilities for administrators'
    ],
    longDescription: 'Educational institutions face unique security challenges in today\'s world. Our integrated surveillance solutions for schools help create safer learning environments while providing administrators with powerful tools for monitoring and managing campus security. From K-12 to higher education, our systems can be customized to meet the specific needs of any educational institution, ensuring the safety of students, staff, and visitors.',
    challenges: [
      'Creating safe learning environments while maintaining a welcoming atmosphere',
      'Managing access control across multiple buildings and campus areas',
      'Monitoring student safety without compromising privacy',
      'Responding quickly to emergency situations and security threats',
      'Coordinating security operations with limited resources and staff'
    ],
    solutions: [
      'Comprehensive surveillance system covering all campus areas with remote monitoring capabilities',
      'Automated visitor management and access control integration',
      'Emergency response coordination with immediate alert capabilities',
      'Analytics for student flow, attendance verification, and space utilization',
      'Centralized security management platform with mobile access for administrators'
    ],
    testimonials: [
      {
        quote: "The integrated security system has transformed how we manage campus safety. We now have visibility across our entire campus and can respond to incidents in real-time.",
        name: "Michael Rodriguez",
        title: "Security Director",
        company: "Westfield High School District"
      },
      {
        quote: "Having a unified platform for video surveillance and access control has greatly improved our security operations and provided peace of mind for parents and staff.",
        name: "Jennifer Thompson",
        title: "School Principal",
        company: "Lincoln Elementary School"
      }
    ]
  };

  return (
    <div className="pt-28">
      {/* Hero Section */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: `url('${industry.image}')`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              opacity: 0.3,
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
              to="/industries"
              className="inline-flex items-center text-accent-silver hover:text-primary transition-colors mb-6"
            >
              <svg className="w-4 h-4 mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              <span>Back to Industries</span>
            </Link>
            <h1 className="heading-lg mb-6 text-white">
              <span className="gradient-text">{industry.name}</span> Solutions
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              {industry.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Main Content Column */}
            <div className="lg:col-span-2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="mb-12"
              >
                <h2 className="heading-md mb-6">
                  Creating safer <span className="gradient-text">learning environments</span>
                </h2>
                <div className="prose prose-dark max-w-none">
                  <p className="text-accent-silver">
                    {industry.longDescription}
                  </p>
                </div>
              </motion.div>

              {/* Challenges Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="mb-12"
              >
                <h3 className="text-xl font-bold text-white mb-6">Key Challenges</h3>
                <div className="space-y-4">
                  {industry.challenges?.map((challenge, idx) => (
                    <div key={idx} className="bg-background-dark rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M12 8V13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M11.9945 16H12.0035" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-accent-silver">{challenge}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Solutions Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
              >
                <h3 className="text-xl font-bold text-white mb-6">Our Solutions</h3>
                <div className="space-y-4">
                  {industry.solutions?.map((solution, idx) => (
                    <div key={idx} className="bg-background-dark rounded-lg p-6">
                      <div className="flex items-start">
                        <div className="bg-primary/20 p-2 rounded-lg mr-4 mt-1">
                          <svg className="w-5 h-5 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M7.75 12L10.58 14.83L16.25 9.17" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </div>
                        <div>
                          <p className="text-accent-silver">{solution}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Sidebar */}
            <div>
              <div className="bg-background-dark rounded-xl overflow-hidden sticky top-28">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-6">Key Benefits</h3>
                  <ul className="space-y-3">
                    {industry.benefits.map((benefit, idx) => (
                      <li key={idx} className="flex items-start text-accent-silver">
                        <FiChevronRight className="w-5 h-5 text-primary mt-0.5 mr-2 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="border-t border-background p-6">
                  <h3 className="text-lg font-bold text-white mb-4">Ready to get started?</h3>
                  <p className="text-accent-silver mb-6">
                    Talk to our experts about how we can tailor our solutions for your {industry.name.toLowerCase()} security needs.
                  </p>
                  <Link to="/contact" className="btn-primary w-full justify-center">
                    Contact Us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      {industry.testimonials && industry.testimonials.length > 0 && (
        <section className="py-16 bg-background-dark">
          <div className="container-custom">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="heading-md mb-6">
                What <span className="gradient-text">{industry.name}</span> Clients Say
              </h2>
              <p className="text-accent-silver max-w-2xl mx-auto">
                Hear from our clients about how our solutions have transformed their operations and security
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {industry.testimonials.map((testimonial, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.1 }}
                  className="bg-background rounded-xl p-6"
                >
                  <div className="flex flex-col h-full">
                    <div className="mb-4">
                      <svg className="w-8 h-8 text-primary" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M10 11H7.104C6.494 11 6 10.506 6 9.896V8.104C6 7.494 6.494 7 7.104 7H9.896C10.506 7 11 7.494 11 8.104V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M18 11H15.104C14.494 11 14 10.506 14 9.896V8.104C14 7.494 14.494 7 15.104 7H17.896C18.506 7 19 7.494 19 8.104V16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <p className="text-white italic flex-grow mb-4">{testimonial.quote}</p>
                    <div>
                      <p className="font-medium text-white">{testimonial.name}</p>
                      <p className="text-accent-silver text-sm">{testimonial.title}, {testimonial.company}</p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* CTA Section */}
      <section className="py-20 bg-background">
        <div className="container-custom">
          <div className="bg-gradient-to-r from-primary/10 to-secondary/10 rounded-2xl p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center justify-between">
              <div className="mb-8 md:mb-0 md:mr-8">
                <h2 className="heading-md mb-4 text-white">Ready for a tailored {industry.name.toLowerCase()} security solution?</h2>
                <p className="text-accent-silver text-lg">
                  Let us design a surveillance system customized for your educational institution's specific requirements.
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

export default SchoolsDetail;
