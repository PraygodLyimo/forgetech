'use client';

export default function ServicesPage() {
  const services = [
    {
      title: 'ICT Consultancy & Support',
      description: 'Infrastructure planning, managed support, documentation and SLA-based maintenance.',
      features: ['Infrastructure audits', 'System design', 'Best practices consulting', 'SLA management'],
      icon: '🔧'
    },
    {
      title: 'Networking Solutions',
      description: 'Structured cabling, fiber, network design, switching and WiFi optimisation.',
      features: ['Structured cabling', 'Fiber optics', 'Network design', 'WiFi optimization'],
      icon: '🌐'
    },
    {
      title: 'Security & Surveillance',
      description: 'CCTV installations, NVR systems, access control and alarm systems.',
      features: ['CCTV systems', 'NVR/DVR setup', 'Access control', 'Alarm systems'],
      icon: '🔒'
    },
    {
      title: 'Power & Backup',
      description: 'UPS, battery banks and generator integration for high-availability sites.',
      features: ['UPS systems', 'Battery banks', 'Generator setup', 'Power monitoring'],
      icon: '⚡'
    },
    {
      title: 'Cloud & Servers',
      description: 'Server room design, virtualization, cloud migration and managed hosting.',
      features: ['Server room design', 'Virtualization', 'Cloud migration', 'Managed hosting'],
      icon: '☁️'
    },
    {
      title: 'Business Communication',
      description: 'IP telephony, PBX, video conferencing and unified communications.',
      features: ['IP telephony', 'PBX systems', 'Video conferencing', 'Unified messaging'],
      icon: '📞'
    },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#fff9f5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-[#373e51] mb-6">Our Services</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              We offer a full spectrum of ICT services tailored to your organisation's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <div key={index} className="bg-white border border-orange-200 rounded-2xl overflow-hidden hover:shadow-xl hover:-translate-y-2 hover:border-[#ff6219] transition-all duration-300 group">
                <div className="h-32 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] flex items-center justify-center group-hover:scale-105 transition-transform duration-300">
                  <div className="text-6xl">{service.icon}</div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-[#373e51] mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-sm mb-6">{service.description}</p>
                  
                  <div className="space-y-2">
                    <h4 className="text-sm font-semibold text-[#373e51]">Key Features:</h4>
                    <ul className="space-y-2">
                      {service.features.map((feature, idx) => (
                        <li key={idx} className="text-sm text-gray-600 flex items-center gap-2">
                          <span className="w-2 h-2 bg-[#ff6219] rounded-full"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                  
                  <a
                    href="/contact"
                    className="mt-6 inline-block bg-[#ff6219] text-white px-4 py-2 rounded-lg hover:bg-[#e55a17] transition-colors duration-200 text-sm font-semibold"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Our Services */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#373e51] mb-12 text-center">Why Choose Our Services?</h2>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Expert Team</h3>
                  <p className="text-gray-600">Our certified engineers bring years of experience in ICT infrastructure.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Fast Response</h3>
                  <p className="text-gray-600">Quick on-site support with local presence in Arusha.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Quality Assured</h3>
                  <p className="text-gray-600">All work backed by warranties and certified partnerships.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="text-3xl">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">24/7 Support</h3>
                  <p className="text-gray-600">Managed services with round the clock monitoring available.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#ff6219] to-[#ff7a3d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Get Started?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss which service is right for your organization.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#ff6219] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Contact Us
          </a>
        </div>
      </section>
    </div>
  );
}