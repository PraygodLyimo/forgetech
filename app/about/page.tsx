'use client';

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="bg-linear-to-b from-[#fff9f5] to-white py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center mb-12">
            <h1 className="text-5xl font-bold text-[#373e51] mb-6">ForgeTech</h1>
            <p className="text-xl text-gray-600 leading-relaxed">
              Is the leading ICT solutions provider in East Africa, delivering reliable technology infrastructure and support since our founding.
            </p>
          </div>
        </div>
      </section>

      {/* Company Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#373e51] mb-8">Who We Are:</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              ForgeTech is a premier Information and Communication Technology (ICT) company headquartered in Arusha, Tanzania. Our team of highly skilled and certified engineers and technicians is dedicated to delivering reliable, scalable, and sustainable technology solutions — ranging from small business networks to enterprise-grade server infrastructure and integrated security systems.
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              We prioritise uptime, security and clear documentation so your operations keep running. Our approach combines local knowledge with international standards to provide solutions that work for East African businesses.
            </p>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#373e51] mb-12 text-center">Our Core Values</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-[#373e51] mb-4">Reliability</h3>
                <p className="text-gray-600 leading-relaxed">
                  We build systems that stay up. Our solutions are designed for uptime, with redundancy and failover built in from the start.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-[#373e51] mb-4">Security</h3>
                <p className="text-gray-600 leading-relaxed">
                  Your data is precious. We implement industry-standard security practices across all our solutions.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-[#373e51] mb-4">Support</h3>
                <p className="text-gray-600 leading-relaxed">
                  Fast on-site support with local presence. We're here when you need us most.
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg">
                <div className="w-12 h-12 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] rounded-lg mb-4"></div>
                <h3 className="text-2xl font-bold text-[#373e51] mb-4">Transparency</h3>
                <p className="text-gray-600 leading-relaxed">
                  Clear communication and fair pricing. No hidden costs or surprises.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-[#373e51] mb-12 text-center">Why Choose ForgeTech?</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6219] text-white rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Local Presence with Fast Support</h3>
                  <p className="text-gray-600">Based in Arusha with quick on-site response times for urgent issues.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6219] text-white rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Certified Vendors & Warranties</h3>
                  <p className="text-gray-600">We work with certified vendors and provide comprehensive warranties on all installations.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6219] text-white rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">End-to-End Project Management</h3>
                  <p className="text-gray-600">From planning to deployment to ongoing maintenance, we handle it all.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6219] text-white rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">Transparent Pricing & SLAs</h3>
                  <p className="text-gray-600">Clear pricing structure and Service Level Agreements so you know what to expect.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="w-8 h-8 bg-[#ff6219] text-white rounded-full flex items-center justify-center shrink-0 font-bold">✓</div>
                <div>
                  <h3 className="text-xl font-semibold text-[#373e51] mb-2">International Standards</h3>
                  <p className="text-gray-600">We follow industry best practices and international standards while understanding local needs.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-linear-to-br from-[#ff6219] to-[#ff7a3d]">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold text-white mb-6">Ready to Work With Us?</h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Let's discuss how ForgeTech can help transform your ICT infrastructure.
          </p>
          <a
            href="/contact"
            className="inline-block bg-white text-[#ff6219] font-bold py-3 px-8 rounded-lg hover:bg-gray-100 transition-colors duration-200"
          >
            Get In Touch
          </a>
        </div>
      </section>
    </div>
  );
}