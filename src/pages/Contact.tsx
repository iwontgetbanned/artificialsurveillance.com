import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMapPin, FiPhone, FiMail, FiClock, FiSend, FiCheck } from 'react-icons/fi';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    cameras: '1-8',
    message: '',
    interest: 'installation',
    subscribe: false
  });

  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, checked } = e.target;
    setFormData(prev => ({ ...prev, [name]: checked }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus('submitting');

    // Simulate form submission
    setTimeout(() => {
      setFormStatus('success');
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({
          name: '',
          email: '',
          phone: '',
          company: '',
          cameras: '1-8',
          message: '',
          interest: 'installation',
          subscribe: false
        });
        setFormStatus('idle');
      }, 3000);
    }, 1500);
  };

  return (
    <div className="pt-28">
      {/* Page Header */}
      <section className="bg-background-dark py-16 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute inset-0 bg-gradient-to-r from-primary to-secondary" style={{ mixBlendMode: 'overlay' }}></div>
          <div
            className="absolute inset-0"
            style={{
              backgroundImage: "url('https://images.unsplash.com/photo-1551636898-47668aa61de2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
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
              Contact <span className="gradient-text">Us</span>
            </h1>
            <p className="text-accent-silver text-lg mb-8">
              Get in touch with our team to discuss your surveillance needs or schedule a consultation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-background-dark p-8 rounded-xl border border-primary/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a message</h2>

                {formStatus === 'success' ? (
                  <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 rounded-full bg-green-500/20 flex items-center justify-center mb-6">
                      <FiCheck className="w-8 h-8 text-green-500" />
                    </div>
                    <h3 className="text-xl font-semibold text-white mb-2">Message Sent Successfully!</h3>
                    <p className="text-accent-silver text-center">
                      Thank you for contacting us. One of our team members will get back to you shortly.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-accent-silver text-sm mb-2">Full Name*</label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm"
                          placeholder="John Doe"
                        />
                      </div>
                      <div>
                        <label htmlFor="email" className="block text-accent-silver text-sm mb-2">Email Address*</label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm"
                          placeholder="john@example.com"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="phone" className="block text-accent-silver text-sm mb-2">Phone Number</label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm"
                          placeholder="(123) 456-7890"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-accent-silver text-sm mb-2">Company Name</label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          value={formData.company}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm"
                          placeholder="Your Company"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="interest" className="block text-accent-silver text-sm mb-2">I'm interested in</label>
                        <select
                          id="interest"
                          name="interest"
                          value={formData.interest}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm appearance-none"
                          style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
                        >
                          <option value="installation">Camera Installation</option>
                          <option value="cloud">Cloud AI Platform</option>
                          <option value="both">Both Installation & Platform</option>
                          <option value="custom">Custom Solution</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                      <div>
                        <label htmlFor="cameras" className="block text-accent-silver text-sm mb-2">Number of Cameras</label>
                        <select
                          id="cameras"
                          name="cameras"
                          value={formData.cameras}
                          onChange={handleChange}
                          className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm appearance-none"
                          style={{ backgroundImage: "url(\"data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b7280' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='M6 8l4 4 4-4'/%3e%3c/svg%3e\")", backgroundRepeat: 'no-repeat', backgroundPosition: 'right 0.5rem center', backgroundSize: '1.5em 1.5em' }}
                        >
                          <option value="1-8">1-8 cameras</option>
                          <option value="9-24">9-24 cameras</option>
                          <option value="25+">25+ cameras</option>
                          <option value="not-sure">Not sure yet</option>
                        </select>
                      </div>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-accent-silver text-sm mb-2">Your Message*</label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 bg-background border border-accent-silver/20 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-white text-sm resize-none"
                        placeholder="Tell us about your project or requirements..."
                      ></textarea>
                    </div>

                    <div className="flex items-start">
                      <div className="flex items-center h-5">
                        <input
                          id="subscribe"
                          name="subscribe"
                          type="checkbox"
                          checked={formData.subscribe}
                          onChange={handleCheckboxChange}
                          className="w-4 h-4 text-primary bg-background border-accent-silver/20 rounded focus:ring-primary"
                        />
                      </div>
                      <label htmlFor="subscribe" className="ml-3 text-sm text-accent-silver">
                        Subscribe to our newsletter for the latest updates and security tips
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={formStatus === 'submitting'}
                      className={`btn-primary flex items-center justify-center w-full py-3 ${
                        formStatus === 'submitting' ? 'opacity-70 cursor-not-allowed' : ''
                      }`}
                    >
                      {formStatus === 'submitting' ? (
                        <>
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Sending...
                        </>
                      ) : (
                        <>
                          <FiSend className="mr-2" />
                          Send Message
                        </>
                      )}
                    </button>
                  </form>
                )}
              </div>
            </motion.div>

            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-2xl font-bold text-white mb-6">Get in Touch</h2>

              <div className="space-y-8 mb-10">
                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FiMapPin className="text-primary w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Our Headquarters</h3>
                    <p className="text-accent-silver">
                      4720 South Graham Rd<br />
                      Saint Charles, MI 48655
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FiPhone className="text-primary w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Phone</h3>
                    <p className="text-accent-silver">
                      Main: (989) 906-2334<br />
                      Support: (989) 906-2334
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FiMail className="text-primary w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Email</h3>
                    <p className="text-accent-silver">
                      Sales: ferris@artificialsurveillance.com<br />
                      Support: ferris@artificialsurveillance.com
                    </p>
                  </div>
                </div>

                <div className="flex">
                  <div className="flex-shrink-0 mt-1">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <FiClock className="text-primary w-5 h-5" />
                    </div>
                  </div>
                  <div className="ml-4">
                    <h3 className="text-lg font-semibold text-white mb-1">Operating Hours</h3>
                    <p className="text-accent-silver">
                      Monday - Friday: 8:00 AM - 6:00 PM EST<br />
                      Technical Support: 24/7
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-background-dark rounded-xl p-6 border border-primary/10">
                <h3 className="text-lg font-semibold text-white mb-4">Schedule a Site Visit</h3>
                <p className="text-accent-silver mb-4">
                  Need a personalized consultation? Our security experts can visit your location for a free assessment.
                </p>
                <div className="bg-background rounded-lg p-5">
                  <h4 className="text-white font-medium mb-3">What to expect:</h4>
                  <ul className="space-y-2">
                    {[
                      "Comprehensive site assessment",
                      "Security vulnerability analysis",
                      "Camera placement recommendations",
                      "Custom solution proposal",
                      "Detailed cost breakdown"
                    ].map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-primary mr-2 mt-0.5 flex-shrink-0">
                          <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M5 12L10 17L20 7" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                          </svg>
                        </span>
                        <span className="text-accent-silver text-sm">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="bg-background-dark py-16">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">
            Our <span className="gradient-text">Location</span>
          </h2>

          <div className="rounded-xl overflow-hidden h-[400px] border border-primary/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2955.1234567890123!2d-84.12345678901234!3d43.123456789012345!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2s4720%20S%20Graham%20Rd%2C%20Saint%20Charles%2C%20MI%2048655!5e0!3m2!1sen!2sus!4v1712963022520!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Our location"
            ></iframe>
          </div>
        </div>
      </section>

      {/* Saginaw Office */}
      <section className="py-16 bg-background">
        <div className="container-custom">
          <h2 className="heading-md mb-12 text-center">
            Our <span className="gradient-text">Office</span>
          </h2>

          <div className="flex justify-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-background-dark rounded-xl p-8 border border-primary/10 max-w-2xl w-full"
            >
              <div className="flex flex-col md:flex-row items-start md:items-center gap-6">
                <div className="w-20 h-20 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mx-auto md:mx-0">
                  <FiMapPin className="text-primary w-10 h-10" />
                </div>
                <div className="text-center md:text-left">
                  <h3 className="text-2xl font-semibold text-white mb-3">Saint Charles Office</h3>
                  <p className="text-accent-silver text-lg mb-4">4720 South Graham Rd, Saint Charles, MI 48655</p>
                  <div className="flex flex-col md:flex-row gap-4 mt-4">
                    <div className="flex items-center justify-center md:justify-start">
                      <FiPhone className="w-5 h-5 text-primary mr-2" />
                      <span className="text-accent-silver">(989) 906-2334</span>
                    </div>
                    <div className="flex items-center justify-center md:justify-start">
                      <FiMail className="w-5 h-5 text-primary mr-2" />
                      <span className="text-accent-silver">ferris@artificialsurveillance.com</span>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
