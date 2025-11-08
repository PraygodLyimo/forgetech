"use client";

import { FaNetworkWired, FaShieldAlt, FaCloud, FaBolt, FaPhone, FaBriefcase } from "react-icons/fa";

export default function ServicesPage() {
  const services = [
    { title: "ICT Consultancy & Support", desc: "Infrastructure planning, managed support, documentation and SLA-based maintenance.", key: "consult" },
    { title: "Networking Solutions", desc: "Structured cabling, fiber, network design, switching and WiFi optimisation.", key: "networking" },
    { title: "Security & Surveillance", desc: "CCTV installations, NVR systems, access control and alarm systems.", key: "security" },
    { title: "Power & Backup", desc: "UPS, battery banks and generator integration for high-availability sites.", key: "power" },
    { title: "Cloud & Servers", desc: "Server room design, virtualization, cloud migration and managed hosting.", key: "cloud" },
    { title: "Business Communication", desc: "IP telephony, PBX, video conferencing and unified communications.", key: "communication" },
  ];

  const iconMap: Record<string, any> = {
    networking: FaNetworkWired,
    security: FaShieldAlt,
    cloud: FaCloud,
    power: FaBolt,
    communication: FaPhone,
    consult: FaBriefcase,
  };

  return (
    <section id="services" className="py-20">
      <div className="mx-auto px-4 text-center">
        <h2 className="text-4xl font-bold mb-4 text-[#373e51]">Our Services</h2>
        <p className="text-gray-600 text-lg mb-12 max-w-2xl mx-auto">
          We offer a full spectrum of ICT services tailored to your organisation's needs.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((s) => {
            const Icon = iconMap[s.key] || FaBriefcase;
            return (
              <div
                key={s.title}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group"
              >
                <Icon
                  size={48}
                  className="mx-auto mb-4 text-[#ff6219] group-hover:scale-110 transition-transform duration-300"
                />
                <h4 className="font-bold text-lg mb-3 text-[#373e51]">{s.title}</h4>
                <p className="text-gray-600 leading-relaxed">{s.desc}</p>
                <div className="mt-6">
                  <a
                    href={`/get-quote?type=service&item=${encodeURIComponent(s.title)}`}
                    className="inline-block bg-[#ff6219] text-white px-4 py-2 rounded-lg text-sm font-semibold hover:bg-[#e55a17] transition-colors"
                  >
                    Get Quote
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
