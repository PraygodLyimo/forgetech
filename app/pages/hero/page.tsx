'use client';


import { useState } from 'react';

export default function HeroPage() {
    const [query, setQuery] = useState('');

    const handleSearch = (value = query) => {
        alert(`Searching: ${value}`);
    };

    return (
        <div className="w-full">
            <section className="min-h-screen flex items-center justify-center bg-linear-to-b from-white to-[#fff9f5]">
                <div className="mx-auto px-4 py-20 space-y-8 text-center max-w-4xl">
                    <span className="inline-block px-4 py-2 rounded-full bg-[#fff7f1] text-[#ff6219] font-bold text-sm">
                        Trusted by organisations across East Africa
                    </span>
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#373e51] leading-tight mx-auto">
                        Design, deploy and support modern ICT systems
                    </h1>
                    <p className="text-gray-600 text-lg leading-relaxed mx-auto max-w-3xl">
                        ForgeTech delivers end-to-end Information and Communication Technology services 
                        from structured cabling and network design to CCTV, access control and cloud migration.
                        We combine local knowledge with international standards.
                    </p>
                    <div className="flex justify-center pt-4">
                        <div className="w-full max-w-2xl border border-gray-200 rounded-xl overflow-hidden shadow-lg bg-white flex">
                            <input
                                type="text"
                                placeholder="Search services, products or assets..."
                                value={query}
                                onChange={(e) => setQuery(e.target.value)}
                                className="flex-1 px-6 py-4 outline-none text-gray-700 placeholder-gray-400"
                            />
                            <button
                                onClick={() => handleSearch()}
                                className="bg-linear-to-br from-[#ff6219] to-[#ff7a3d] text-white font-bold px-8 py-4 hover:from-[#e55a17] hover:to-[#e56b35] transition-colors duration-200 shrink-0"
                            >
                                Search
                            </button>
                        </div>
                    </div>

                    <div className="flex flex-wrap justify-center gap-3 pt-4">
                        {['CCTV', 'Networking', 'Cloud', 'Access Control'].map((chip) => (
                            <span
                                key={chip}
                                onClick={() => {
                                    setQuery(chip);
                                    handleSearch(chip);
                                }}
                                className="px-4 py-2 rounded-full bg-white border border-gray-200 text-[#ff6219] font-semibold cursor-pointer hover:bg-[#fff2ec] hover:border-[#ff6219] transition-all duration-200 shadow-sm"
                            >
                                {chip}
                            </span>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}
