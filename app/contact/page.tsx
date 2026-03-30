'use client';
import { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  MapPin as IconMapPin, 
  Phone as IconPhone, 
  Mail as IconMail, 
  Clock as IconClock, 
  Check as IconCheck, 
  Send as IconSend 
} from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { EncryptedText } from '@/components/ui/encrypted-text';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  // animation state for map entrance
  const [mapVisible, setMapVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setMapVisible(true), 150);
    return () => clearTimeout(t);
  }, []);

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
      <section className="py-24 bg-linear-to-b from-[#fff9f5] to-white relative overflow-hidden">
        <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-orange-100 rounded-full blur-3xl opacity-50" />
        <div className="absolute bottom-0 left-0 translate-y-1/2 -translate-x-1/2 w-64 h-64 bg-orange-200 rounded-full blur-3xl opacity-30" />

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <div className="text-5xl md:text-6xl font-bold text-[#373e51] mb-6 flex flex-wrap justify-center gap-x-3 gap-y-1">
              <EncryptedText
                text="Get In"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
              />
              <EncryptedText
                text="Touch"
                className="text-[#ff6219]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              />
            </div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-xl text-gray-600 leading-relaxed max-w-2xl mx-auto"
            >
              Ready to transform your ICT infrastructure? Contact us today for a free consultation and let&apos;s build something great together.
            </motion.p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h2 className="text-3xl font-bold text-[#373e51] mb-8">Contact Information</h2>

              <div className="space-y-6">
                {[
                  {
                    icon: IconMapPin,
                    title: "Location",
                    details: ["Arusha, Tanzania", "East Africa"],
                    delay: 0
                  },
                  {
                    icon: IconPhone,
                    title: "Phone",
                    details: ["+255 784 142 152"],
                    subText: "Available Monday - Friday, 8am - 5pm",
                    delay: 0.1
                  },
                  {
                    icon: IconMail,
                    title: "Email",
                    details: ["info@forgetech.com"],
                    subText: "We'll respond within 24 hours",
                    delay: 0.2
                  },
                  {
                    icon: IconClock,
                    title: "Business Hours",
                    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 1:00 PM"],
                    delay: 0.3
                  }
                ].map((item, idx) => (
                  <motion.div
                    key={idx}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: item.delay, duration: 0.5 }}
                    className="flex items-start gap-5 p-4 rounded-xl hover:bg-orange-50 transition-colors duration-300 group"
                  >
                    <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-xl flex items-center justify-center shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                      <item.icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold text-[#373e51] mb-1">{item.title}</h3>
                      {item.details.map((detail, dIdx) => (
                        <p key={dIdx} className="text-gray-600">{detail}</p>
                      ))}
                      {item.subText && <p className="text-sm text-gray-500 mt-1">{item.subText}</p>}
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <div className="bg-gray-50 p-8 rounded-3xl border border-orange-100 shadow-xl relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-orange-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />

                <h2 className="text-3xl font-bold text-[#373e51] mb-8 relative z-10">Send us a Message</h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="bg-green-50 border border-green-200 text-green-800 p-8 rounded-2xl text-center"
                  >
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <IconCheck className="w-8 h-8 text-green-600" />
                    </div>
                    <h3 className="text-xl font-bold mb-2">Message Sent!</h3>
                    <p>Thank you for reaching out. Our team will get back to you within 24 hours.</p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6 relative z-10">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="name" className="text-sm font-bold text-[#373e51] ml-1">
                          Full Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 placeholder:text-gray-300"
                          placeholder="Your name"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="email" className="text-sm font-bold text-[#373e51] ml-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          required
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 placeholder:text-gray-300"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label htmlFor="phone" className="text-sm font-bold text-[#373e51] ml-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 placeholder:text-gray-300"
                          placeholder="+255 XXX XXX XXX"
                        />
                      </div>

                      <div className="space-y-2">
                        <label htmlFor="service" className="text-sm font-bold text-[#373e51] ml-1">
                          Service Needed
                        </label>
                        <select
                          id="service"
                          name="service"
                          value={formData.service}
                          onChange={handleChange}
                          className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 bg-white cursor-pointer"
                        >
                          <option value="">Select a service</option>
                          <option value="software">Custom Software</option>
                          <option value="cloud">Cloud-Native Systems</option>
                          <option value="security">Cyber Security</option>
                          <option value="ai">AI & Data Solutions</option>
                          <option value="networking">Modern Networking</option>
                          <option value="iot">IoT & Smart Systems</option>
                          <option value="other">Other</option>
                        </select>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label htmlFor="message" className="text-sm font-bold text-[#373e51] ml-1">
                        Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={4}
                        className="w-full px-5 py-4 bg-white border border-gray-200 rounded-xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-300 resize-vertical placeholder:text-gray-300"
                        placeholder="How can we help you?"
                      />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-14 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold text-lg rounded-xl shadow-lg hover:shadow-orange-200/50 transition-all duration-300 group"
                    >
                      <span className="flex items-center justify-center gap-2">
                        Send Message
                        <IconSend className="w-5 h-5 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                      </span>
                    </Button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Coverage Check Section */}
      <section className="py-24 bg-orange-50/50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-10 md:p-16 shadow-xl border border-orange-100 flex flex-col md:flex-row items-center gap-12">
            <div className="flex-1 text-center md:text-left">
              <h2 className="text-3xl font-bold text-[#373e51] mb-6">Check Service Coverage</h2>
              <p className="text-gray-600 text-lg leading-relaxed mb-0">
                Wondering if we can deploy at your specific location? Enter your ward or address and our team will verify the infrastructure availability in your area.
              </p>
            </div>
            <div className="w-full md:w-80 space-y-4">
              <input
                placeholder="Enter address or ward"
                className="w-full px-6 py-4 border border-gray-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#ff6219] transition-all"
              />
              <button className="w-full bg-[#373e51] text-white font-bold py-4 rounded-2xl hover:bg-[#ff6219] transition-colors shadow-lg shadow-orange-500/10">
                Check Availability
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-[#373e51] mb-8 text-center">Our Location</h2>
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="max-w-4xl mx-auto bg-white rounded-3xl overflow-hidden shadow-2xl h-[450px] border border-orange-100"
          >
            <iframe
              title="Forgetech - Arusha Location"
              src="https://www.google.com/maps?q=-3.371291966395252,36.69467616329542&z=15&output=embed"
              width="100%"
              height="100%"
              className="border-0 w-full h-full grayscale hover:grayscale-0 transition-all duration-700"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>

          <p className="text-center text-sm text-gray-400 mt-6 italic">
            📍 Arusha, Tanzania — Coordinates: -3.371291966395252, 36.69467616329542
          </p>
        </div>
      </section>
    </div>
  );
}