'use client';

import { useState } from 'react';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      });
    }, 3000);
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-[#373e51] mb-6">Get In Touch</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Ready to transform your ICT infrastructure? Contact us today for a free consultation.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Contact Information */}
            <div>
              <h2 className="text-3xl font-bold text-[#373e51] mb-8">Contact Information</h2>
              
              <div className="space-y-8">
                {/* Location */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#373e51] mb-2">Location</h3>
                    <p className="text-gray-600">Arusha, Tanzania</p>
                    <p className="text-gray-600">East Africa</p>
                  </div>
                </div>

                {/* Phone */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#373e51] mb-2">Phone</h3>
                    <p className="text-gray-600">+255 XXX XXX XXX</p>
                    <p className="text-sm text-gray-500 mt-1">Available Monday - Friday, 8am - 5pm</p>
                  </div>
                </div>

                {/* Email */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#373e51] mb-2">Email</h3>
                    <p className="text-gray-600">info@forgetech.co.tz</p>
                    <p className="text-sm text-gray-500 mt-1">We'll respond within 24 hours</p>
                  </div>
                </div>

                {/* Hours */}
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg flex items-center justify-center shrink-0">
                    <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold text-[#373e51] mb-2">Business Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 1:00 PM</p>
                    <p className="text-gray-600">Sunday: Closed</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div>
              <div className="bg-gray-50 p-8 rounded-2xl">
                <h2 className="text-3xl font-bold text-[#373e51] mb-8">Send us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 p-6 rounded-lg text-center">
                    <h3 className="text-lg font-semibold mb-2">✓ Message Sent Successfully!</h3>
                    <p>Thank you for reaching out. We'll get back to you soon.</p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm font-semibold text-[#373e51] mb-2">
                        Full Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        placeholder="John Doe"
                      />
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-[#373e51] mb-2">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                          placeholder="john@example.com"
                        />
                      </div>

                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-[#373e51] mb-2">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                          placeholder="+255 XXX XXX XXX"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="service" className="block text-sm font-semibold text-[#373e51] mb-2">
                        Service Needed
                      </label>
                      <select
                        id="service"
                        name="service"
                        value={formData.service}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 bg-white"
                      >
                        <option value="">Select a service</option>
                        <option value="networking">Networking Solutions</option>
                        <option value="security">Security & Surveillance</option>
                        <option value="cloud">Cloud & Servers</option>
                        <option value="power">Power & Backup</option>
                        <option value="consultation">ICT Consultancy</option>
                        <option value="communication">Business Communication</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-[#373e51] mb-2">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={5}
                        className="w-full px-4 py-3 border border-orange-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 resize-vertical"
                        placeholder="Tell us about your project requirements..."
                      />
                    </div>

                    <button
                      type="submit"
                      className="w-full bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-3 px-6 rounded-lg hover:from-[#e55a17] hover:to-[#e56b35] transition-all duration-200 shadow-md hover:shadow-lg"
                    >
                      Send Message
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section (placeholder) */}
      <section className="py-20 bg-orange-100">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#373e51] mb-8 text-center">Our Location</h2>
          <div className="max-w-4xl mx-auto bg-white rounded-2xl overflow-hidden shadow-lg h-96">
            <div className="w-full h-full bg-gray-200 flex items-center justify-center">
              <div className="text-center">
                <p className="text-gray-500 text-lg">📍 Arusha, Tanzania</p>
                <p className="text-gray-400 mt-2">Map integration coming soon</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}