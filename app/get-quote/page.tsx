'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams } from 'next/navigation';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '+255657530700';

function QuoteForm() {
  const searchParams = useSearchParams();
  const initialItem = (searchParams.get('item') || '').trim();
  const initialType = (searchParams.get('type') || '').trim() || '';

  const [selectedType, setSelectedType] = useState(initialType || 'product');
  const [selectedItem, setSelectedItem] = useState(initialItem);

  // product and service lists (kept inline for now)
  const productsList = [
    'Enterprise Network Solutions',
    'CCTV & Surveillance Systems',
    'Access Control Systems',
    'Cloud Migration Services',
    'Server Room Design & Setup',
    'UPS & Backup Power Systems',
    'IP Telephony Systems',
    'Business Communication Suite',
  ];

  const servicesList = [
    'ICT Consultancy & Support',
    'Networking Solutions',
    'Security & Surveillance',
    'Power & Backup',
    'Cloud & Servers',
    'Business Communication',
  ];

  useEffect(() => {
    // if user accessed directly and no item chosen, default to the first item of selectedType
    if (!selectedItem) {
      const list = selectedType === 'product' ? productsList : servicesList;
      if (list.length) setSelectedItem(list[0]);
    }
  }, [selectedType]);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [organization, setOrganization] = useState('');
  const [details, setDetails] = useState('');

  const handleWhatsAppSend = () => {
    if (!name.trim()) {
      alert('Please enter your name');
      return;
    }

    const itemToSend = selectedItem || initialItem || 'Not specified';
    const typeToSend = selectedType || initialType || 'unspecified';

    const lines = [
      `Get Quote Request (${typeToSend})`,
      `Item: ${itemToSend}`,
      `Name: ${name}`,
    ];

    if (organization) lines.push(`Organization: ${organization}`);
    if (email) lines.push(`Email: ${email}`);
    if (phone) lines.push(`Phone: ${phone}`);
    if (details) lines.push(`Details: ${details}`);

    const message = lines.join('\n');
    const encoded = encodeURIComponent(message);
    const phoneDigits = WHATSAPP_NUMBER.replace(/\D/g, '');
    const url = `https://wa.me/${phoneDigits}?text=${encoded}`;

    window.open(url, '_blank');
  };

  return (
    <div className="min-h-screen bg-white py-20">
      <div className="container mx-auto px-4 max-w-2xl">
        <h1 className="text-3xl font-bold text-[#373e51] mb-4">Get a Quote</h1>
        <p className="text-gray-600 mb-6">Fill the details below and send your request via WhatsApp to our sales team.</p>

        <div className="bg-white rounded-2xl shadow p-6">
          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#373e51] mb-2">Type</label>
            <select value={selectedType} onChange={(e) => { setSelectedType(e.target.value); setSelectedItem(''); }} className="w-full px-4 py-3 border border-orange-200 rounded-lg">
              <option value="product">Product</option>
              <option value="service">Service</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-sm font-semibold text-[#373e51] mb-2">Select {selectedType}</label>
            <select value={selectedItem} onChange={(e) => setSelectedItem(e.target.value)} className="w-full px-4 py-3 border border-orange-200 rounded-lg">
              {(selectedType === 'product' ? productsList : servicesList).map((it) => (
                <option key={it} value={it}>{it}</option>
              ))}
            </select>
          </div>

          <div className="grid grid-cols-1 gap-4">
            <div>
              <label className="block text-sm font-semibold text-[#373e51] mb-2">Full Name *</label>
              <input className="w-full px-4 py-3 border border-orange-200 rounded-lg" value={name} onChange={(e) => setName(e.target.value)} placeholder="Jane Doe" />
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#373e51] mb-2">Organization</label>
              <input className="w-full px-4 py-3 border border-orange-200 rounded-lg" value={organization} onChange={(e) => setOrganization(e.target.value)} placeholder="Company / Organization" />
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-[#373e51] mb-2">Email</label>
                <input className="w-full px-4 py-3 border border-orange-200 rounded-lg" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-[#373e51] mb-2">Phone</label>
                <input className="w-full px-4 py-3 border border-orange-200 rounded-lg" value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+255 7XX XXX XXX" />
              </div>
            </div>

            <div>
              <label className="block text-sm font-semibold text-[#373e51] mb-2">Project Details</label>
              <textarea className="w-full px-4 py-3 border border-orange-200 rounded-lg resize-vertical" rows={5} value={details} onChange={(e) => setDetails(e.target.value)} placeholder="Tell us more about your requirements..." />
            </div>

            <div className="flex gap-3">
              <button onClick={() => { window.history.back(); }} className="px-4 py-3 border border-gray-300 rounded-lg">Back</button>
              <button onClick={handleWhatsAppSend} className="ml-auto bg-linear-to-br from-[#25D366] to-[#20BA5E] text-white px-4 py-3 rounded-lg font-semibold flex items-center gap-2">
                <FaWhatsapp />
                Send via WhatsApp
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function GetQuotePage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <QuoteForm />
    </Suspense>
  );
}
