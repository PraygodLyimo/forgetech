export default function AboutPage() {
    return (
        <section id="about" className="bg-(--backgound)">
            <div className="mx-auto max-w-7xl px-4 py-20 grid gap-12 md:grid-cols-2 lg:grid-cols-1">
                <h3 className="text-3xl font-bold mb-6 text-[#373e51] text-center">About ForgeTech</h3>
                <div className="p-8 rounded-2xl shadow-lg">
                    <p className="text-gray-600 mb-6 leading-relaxed">ForgeTech is a leading ICT company based in Arusha, Tanzania. Our team of certified engineers and technicians delivers reliable, scalable and maintainable solutions — from small business networks to enterprise grade server rooms and security systems. We prioritise uptime, security and clear documentation so your operations keep running.</p>
                    <h4 className="font-bold text-lg mb-4 text-[#373e51]">Why choose us</h4>
                    <ul className="space-y-3 text-gray-600">
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#ff6219] rounded-full mt-2 shrink-0"></span>
                            Local presence with fast on-site support.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#ff6219] rounded-full mt-2 shrink-0"></span>
                            Certified vendors and warranties.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#ff6219] rounded-full mt-2 shrink-0"></span>
                            End-to-end project management and maintenance.
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="w-2 h-2 bg-[#ff6219] rounded-full mt-2 shrink-0"></span>
                            Transparent pricing and clear SLAs.
                        </li>
                    </ul>
                </div>
                <div className="bg-white p-8 rounded-2xl shadow-lg">
                    <h4 className="font-bold text-xl mb-4 text-[#373e51] text-center">Check Coverage & Quick Inquiry</h4>
                    <p className="text-gray-600 mb-6">Enter your ward or address and let us know what you need.</p>
                    <div className="space-y-4">
                        <input
                            placeholder="Enter address or ward"
                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200"
                        />
                        <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff6219] focus:border-transparent transition-all duration-200 bg-white">
                            <option>Networking</option>
                            <option>Security Systems</option>
                            <option>Cloud & Servers</option>
                            <option>Managed Services</option>
                        </select>
                    </div>
                    <div className="flex gap-3 mt-6">
                        <button className="flex-1 bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold py-3 rounded-lg hover:from-[#e55a17] hover:to-[#e56b35] transition-colors duration-200">Check</button>
                        <button className="flex-1 border-2 border-[#ff6219] text-[#ff6219] rounded-lg py-3 font-bold hover:bg-[#ff6219] hover:text-white transition-colors duration-200">Request Call</button>
                    </div>
                </div>
            </div>
        </section>

    );
}