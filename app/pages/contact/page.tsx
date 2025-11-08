'use client';
export default function ContactPage() {
    return (
        <section id="contact" className="py-20 bg-background">
          <div className="mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold mb-4 text-[#373e51]">Get In Touch</h2>
              <p className="text-gray-600 text-lg max-w-2xl mx-auto">Ready to transform your ICT infrastructure? Contact us today for a free consultation.</p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
              <div>
                <h3 className="text-2xl font-bold mb-6 text-[#373e51]">Contact Information</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6219] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#373e51]">Location</h4>
                      <p className="text-gray-600">Arusha, Tanzania</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6219] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#373e51]">Phone</h4>
                      <p className="text-gray-600">+255 784 142 152</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 bg-[#ff6219] rounded-lg flex items-center justify-center shrink-0">
                      <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                    </div>
                    <div>
                      <h4 className="font-semibold text-[#373e51]">Email</h4>
                      <p className="text-gray-600">info@forgetechtz.com</p>
                    </div>
                  </div>
                </div>
              </div>
              
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <form id="contactForm" className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-semibold text-[#373e51] mb-2">Full Name</label>
                    <input 
                      type="text" 
                      id="name" 
                      name="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-semibold text-[#373e51] mb-2">Email Address</label>
                    <input 
                      type="email" 
                      id="email" 
                      name="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                      placeholder="Enter your email address"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="service" className="block text-sm font-semibold text-[#373e51] mb-2">Service Needed</label>
                    <select 
                      id="service" 
                      name="service"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 bg-white"
                    >
                      <option value="">Select a service</option>
                      <option value="networking">Networking Solutions</option>
                      <option value="security">Security & Surveillance</option>
                      <option value="cloud">Cloud & Servers</option>
                      <option value="power">Power & Backup</option>
                      <option value="consultation">ICT Consultancy</option>
                      <option value="communication">Business Communication</option>
                    </select>
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-semibold text-[#373e51] mb-2">Message</label>
                    <textarea 
                      id="message" 
                      name="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 resize-vertical"
                      placeholder="Tell us about your project requirements..."
                    ></textarea>
                  </div>
                  
                  <button 
                    type="submit"
                    className="w-full bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-3 px-6 rounded-lg hover:from-[#e55a17] hover:to-[#e56b35] transition-colors duration-200 shadow-md"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
    );
}