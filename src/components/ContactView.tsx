/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, ShieldCheck, CheckCircle2, ChevronDown, ChevronUp, HelpCircle, HelpCircle as HelpIcon } from 'lucide-react';

export default function ContactView() {
  // Form States
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [type, setType] = useState('General');
  const [message, setMessage] = useState('');
  const [success, setSuccess] = useState(false);

  // FAQ Accordion State (stores expanded index or null)
  const [expandedFaq, setExpandedFaq] = useState<number | null>(0); // first is open by default

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim()) return;

    const contactSubmission = {
      id: 'con-' + Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
      inquiryType: type,
      message,
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('vestpoint_leads') || '[]');
    existing.push(contactSubmission);
    localStorage.setItem('vestpoint_leads', JSON.stringify(existing));

    setSuccess(true);
  };

  const handleReset = () => {
    setSuccess(false);
    setName('');
    setPhone('');
    setEmail('');
    setType('General');
    setMessage('');
  };

  const faqs = [
    {
      q: "How does Vestpoint guarantee that listed properties are free from government acquisition?",
      a: "Our legal and compliance division charts every property coordinate at the official Lands Registries (such as Alausa Lands Registry in Lagos, AGIS in Abuja, or corresponding geographic GIS departments in Enugu, Rivers/PH, Oyo, Ogun, etc.). We map boundaries against official masterplan coordinates, obtaining written verification from the Surveyor General's Office. We never list properties that are under government commitment or communal dispute."
    },
    {
      q: "I live outside Nigeria. How can I securely monitor land allocations and sign documents?",
      a: "Over 60% of our clients are Nigerians in the diaspora (UK, USA, Canada, Germany). We provide full virtual inspections via high-definition drone videos and real-time live video calls on site. All contract papers (Deeds of Assignment, Contract of Sale) are drafted and transmitted securely via certified digital signing platforms. Physical copies are shipped internationally via DHL upon allocation completion."
    },
    {
      q: "What is the physical allocation timeline after purchasing land?",
      a: "For outright purchases, land boundary allocation is completed within 30 days of payment clearance. For installment purchases, allocation is initiated immediately upon final installment settlement. We lay concrete beacon stones stamped with your unique coordinate numbers."
    },
    {
      q: "Are there other development fees or surprise charges?",
      a: "No. Unlike other real estate firms, Vestpoint provides comprehensive, transparent cost breakdowns before any transaction. We explicitly separate land costs, developmental levies, surveyor charting, and deed registration costs, ensuring you face zero surprise fees downstream."
    },
    {
      q: "Can I pay in installments for properties across Nigeria?",
      a: "Yes. We offer highly flexible payment options across all our listings nationwide. Most of our land and housing developments support initial down-payments of 20% to 30%, with the balance spread comfortably over 3, 6, 12, or 24 months to support smooth capital allocation."
    },
    {
      q: "How can I verify Vestpoint’s legal status in Nigeria?",
      a: "Vestpoint Properties Limited is a fully incorporated corporate entity under the Laws of the Federal Republic of Nigeria, registered with the Corporate Affairs Commission (CAC RC: 1729452). We operate under full legal accountability, and our corporate bank accounts are monitored by anti-money laundering compliance bodies."
    }
  ];

  const toggleFaq = (idx: number) => {
    if (expandedFaq === idx) {
      setExpandedFaq(null);
    } else {
      setExpandedFaq(idx);
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-20 font-sans" id="contact-us-container">
      
      {/* Page Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
          Contact Advisory Team
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
          Connect with Vestpoint
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Have an inquiry about our properties in Lagos, Abuja, Enugu, Port Harcourt, Oyo, Ogun, or abroad? Connect with our expert advisors. Our head office is based in Lagos, but we represent premier assets across Nigeria and internationally.
        </p>
      </div>

      {/* 1. Split Panel: Contact form (7 cols) and Details card (5 cols) */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start" id="contact-grid">
        
        {/* CONTACT FORM CONTAINER (7 cols) */}
        <div className="lg:col-span-7 bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm text-left">
          
          <h2 className="font-display font-bold text-xl text-brand-charcoal mb-2">Send an Advisory Request</h2>
          <p className="text-xs text-gray-500 mb-6 leading-relaxed">
            Fill out this brief contact file. Our compliance desk averages a 15-minute response window during official work hours.
          </p>

          {success ? (
            <div className="text-center py-8 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-display font-bold text-lg text-brand-charcoal font-bold">Message Lodged Successfully!</h3>
              <p className="text-xs text-gray-600 max-w-sm mx-auto leading-relaxed">
                Thank you, **{name}**. We have logged your request under the **{type}** category. A designated senior advisor will phone or message you via WhatsApp within 15 minutes.
              </p>
              <button
                onClick={handleReset}
                className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold px-6 py-2.5 rounded-lg font-display uppercase tracking-widest cursor-pointer"
              >
                Send Another Request
              </button>
            </div>
          ) : (
            <form onSubmit={handleFormSubmit} className="space-y-4 text-xs">
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Email Address *</label>
                  <input
                    type="email"
                    required
                    placeholder="name@example.com"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Inquiry Category</label>
                  <select
                    value={type}
                    onChange={(e) => setType(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="General">General Inquiries</option>
                    <option value="Diaspora">Diaspora Verification Support</option>
                    <option value="Land Sale">Epe & Ibeju-Lekki Lands</option>
                    <option value="Luxury Home">Luxury Penthouses / Terraces</option>
                    <option value="Site Tour">Book Site Inspection</option>
                    <option value="Partnership">Development Partnerships</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Your Message / Inquiry Details</label>
                <textarea
                  required
                  placeholder="How can our real estate compliance desk assist you? Please mention if you have specific estate plots in mind or prefer virtual video streams."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded p-2.5 bg-gray-50 h-28 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 px-4 rounded-xl font-display uppercase tracking-widest text-xs transition-colors cursor-pointer"
              >
                Submit Secure Advisory Request
              </button>
            </form>
          )}

        </div>

        {/* DETAILS CARD STACK (5 cols) */}
        <div className="lg:col-span-5 space-y-6 text-left">
          
          {/* Main info card */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm space-y-6">
            <h3 className="font-display font-bold text-lg text-brand-charcoal">Corporate Presence</h3>
            
            <div className="space-y-4 text-xs text-gray-650">
              
              <div className="flex gap-3 items-start">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-charcoal block font-bold">Lagos Head Office (Headquarters):</strong>
                  <span className="text-gray-500 block mt-0.5 leading-relaxed">
                    Ketu, Lagos, Nigeria.
                  </span>
                  <span className="text-brand-orange block text-[11px] mt-1 font-semibold">
                    *Serving listings in Lagos, Abuja, Enugu, PH, Oyo, Ogun, & Abroad
                  </span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Phone className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-charcoal block font-bold">Hotline & WhatsApp Desk:</strong>
                  <span className="text-gray-500 block mt-0.5 font-mono font-semibold">+234 803 056 4502</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Mail className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-charcoal block font-bold">Advisory Email Contact:</strong>
                  <span className="text-gray-500 block mt-0.5 font-mono">vestpointproperties@gmail.com</span>
                </div>
              </div>

              <div className="flex gap-3 items-start">
                <Clock className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <div>
                  <strong className="text-brand-charcoal block font-bold">Official Business Hours:</strong>
                  <span className="text-gray-500 block mt-1 leading-relaxed">
                    • Monday - Friday: 8:00 AM - 6:00 PM<br />
                    • Saturday: 9:00 AM - 4:00 PM<br />
                    • Sunday: Pre-Booked Diaspora virtual viewings only
                  </span>
                </div>
              </div>

            </div>
          </div>

          {/* Legal Compliance Block (incorporating CAC) */}
          <div className="bg-emerald-50 border border-emerald-100 rounded-2xl p-6 flex gap-4 items-start">
            <ShieldCheck className="w-8 h-8 text-emerald-700 shrink-0 mt-0.5" />
            <div className="space-y-1.5 text-xs text-emerald-800 text-left">
              <h4 className="font-display font-bold">Official CAC Registration Verification</h4>
              <p className="font-mono text-[10px] bg-emerald-100 text-emerald-900 px-2 py-0.5 rounded font-bold inline-block">
                CAC RC No: 1729452
              </p>
              <p className="text-[11px] text-emerald-700 leading-relaxed">
                Vestpoint Properties Limited is a fully incorporated corporate entity under the Laws of the Federal Republic of Nigeria. This guarantees absolute legal liability and legal protections for every contract, deed, and coordinate allocation you sign.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* 2. FAQS SECTION (FAQ Accordion) */}
      <section className="bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm space-y-8" id="faq-section">
        
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <HelpIcon className="w-10 h-10 text-brand-orange mx-auto opacity-70" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Frequently Asked Compliance Questions
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Unpack common concerns about Nigerian real estate law, diaspora bank integrations, and allocation processes.
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4 text-left">
          {faqs.map((faq, idx) => {
            const isExpanded = expandedFaq === idx;
            return (
              <div
                key={idx}
                className="border border-gray-100 rounded-xl overflow-hidden transition-all duration-300"
              >
                <button
                  type="button"
                  onClick={() => toggleFaq(idx)}
                  className="w-full flex justify-between items-center p-5 bg-gray-50 hover:bg-gray-100 transition-colors font-semibold text-xs sm:text-sm text-brand-charcoal text-left focus:outline-none cursor-pointer"
                >
                  <span className="pr-4">{faq.q}</span>
                  {isExpanded ? (
                    <ChevronUp className="w-4 h-4 text-brand-orange shrink-0" />
                  ) : (
                    <ChevronDown className="w-4 h-4 text-brand-orange shrink-0" />
                  )}
                </button>

                {isExpanded && (
                  <div className="p-5 bg-white border-t border-gray-100 text-xs text-gray-500 leading-relaxed animate-fade-in">
                    {faq.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </section>

    </div>
  );
}
