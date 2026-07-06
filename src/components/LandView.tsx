/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ShieldCheck, MapPin, Grid, Compass, Award, Calendar, Phone, Mail, User, CheckCircle2, DollarSign, BookOpen } from 'lucide-react';
import { PROPERTIES } from '../data';
import PropertyCard from './PropertyCard';

interface LandViewProps {
  onViewProperty: (id: string) => void;
  savedPropertyIds: string[];
  onToggleSaveProperty: (id: string) => void;
  onOpenInspection: (propId?: string) => void;
}

export default function LandView({
  onViewProperty,
  savedPropertyIds,
  onToggleSaveProperty,
  onOpenInspection,
}: LandViewProps) {
  // Local states for land booking
  const [landName, setLandName] = useState('');
  const [landPhone, setLandPhone] = useState('');
  const [landEmail, setLandEmail] = useState('');
  const [landProp, setLandProp] = useState('');
  const [landDate, setLandDate] = useState('');
  const [landSuccess, setLandSuccess] = useState(false);

  // Filter properties specifically in the land category
  const landProperties = PROPERTIES.filter((p) => p.isLand);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!landName.trim() || !landPhone.trim() || !landEmail.trim() || !landDate) {
      return;
    }

    const landBooking = {
      id: 'lnd-' + Math.random().toString(36).substr(2, 9),
      name: landName,
      phone: landPhone,
      email: landEmail,
      propertyId: landProp,
      propertyName: PROPERTIES.find((p) => p.id === landProp)?.title || 'General Land Portfolio',
      preferredDate: landDate,
      preferredTime: '10:00 AM (Standard Site Tour)',
      isVirtual: false,
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('vestpoint_bookings') || '[]');
    existing.push(landBooking);
    localStorage.setItem('vestpoint_bookings', JSON.stringify(existing));

    setLandSuccess(true);
  };

  const handleReset = () => {
    setLandSuccess(false);
    setLandName('');
    setLandPhone('');
    setLandEmail('');
    setLandProp('');
    setLandDate('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 font-sans" id="land-hub-container">
      
      {/* Land Sales Informational Banner */}
      <section className="relative rounded-2xl overflow-hidden min-h-[40vh] flex items-center bg-brand-charcoal text-white p-8 sm:p-12 text-left shadow-xl border border-gray-800" id="land-banner-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=1200&q=80"
            alt="Estate land plots background"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-xl space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange bg-brand-orange/15 border border-brand-orange/20 px-3.5 py-1.5 rounded-full inline-block font-semibold">
            ✦ Secure Land Banking ✦
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            Verified Residential & Commercial Lands in Lagos
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Acquire fully dry, secure, and legally protected estate plots with clean titles (C of O, Governor's Consent, Gazette, Government Allocation) in high-growth corridors of Epe and Ibeju-Lekki. Zero communal hassles, guaranteed coordinates allocation.
          </p>
        </div>
      </section>

      {/* Educational Infographics: Understanding Land Documentation */}
      <section className="bg-white border border-gray-100 shadow-sm rounded-2xl p-6 sm:p-10 space-y-8" id="land-education-dossier">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Compliance Guide
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Understanding Lagos Land Title Structures
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            As your trusted advisor, we insist you understand local land documents. Never buy land anywhere in Nigeria without verifying these key titles.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 text-left">
          {[
            {
              title: "Certificate of Occupancy",
              abrv: "C of O",
              desc: "The premier statutory land title issued directly by the state government, leasing the land to the holder for 99 years. Highly secure and excellent for corporate collateral."
            },
            {
              title: "Governor's Consent",
              abrv: "Consent",
              desc: "The formal stamp of approval from the state Governor required whenever a property with an existing C of O is sold or transferred to a new buyer. Guarantees legal ownership transfer."
            },
            {
              title: "Government Allocation",
              abrv: "Allocation",
              desc: "Direct allocation from officially planned government layouts. Fully backed by state or federal authority, offering bulletproof protection and pre-approved survey charting."
            },
            {
              title: "Government Gazette",
              abrv: "Gazette",
              desc: "An official government record book documenting lands that have been excised (formally released) back to the indigenous community. Safe if your plot is registered within the coordinates."
            },
            {
              title: "Registered Survey",
              abrv: "Survey",
              desc: "A physical coordinates map drafted by a licensed surveyor and formally registered with the Surveyor General. Confirms the land boundary coordinates are completely free."
            }
          ].map((item, idx) => (
            <div key={idx} className="bg-brand-grey border border-gray-50 rounded-xl p-5 space-y-3 relative overflow-hidden group hover:border-brand-orange transition-all">
              <span className="font-mono text-3xl font-extrabold text-brand-orange/15 absolute right-4 top-2">
                {item.abrv}
              </span>
              <h3 className="font-display font-bold text-sm text-brand-charcoal pt-4">{item.title}</h3>
              <p className="text-[11px] text-gray-500 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Active Land Listings */}
      <section className="space-y-10" id="land-portfolio-grid">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Available Plots
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Our Premium Verified Estate Plots
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Fully cleared, beacons laid, and ready for immediate allocation. Review our list of active residential and commercial land developments.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {landProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onViewDetails={onViewProperty}
              isSaved={savedPropertyIds.includes(prop.id)}
              onToggleSave={onToggleSaveProperty}
            />
          ))}
        </div>
      </section>

      {/* Quick Land Tour Booking Panel */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm items-center" id="land-inspection-section">
        
        {/* Pitch content */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Free Chauffeur Service
          </span>
          <h2 className="font-display font-bold text-2xl text-brand-charcoal leading-tight">
            Book a Land Site Tour
          </h2>
          <p className="text-xs text-gray-650 leading-relaxed">
            Inspect our estate layouts in person. Our daily physical site tours leave our corporate office daily in executive transport vehicles. We provide free advice, CAC documents review, and physical charting right on site.
          </p>
          <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-xs text-emerald-800 space-y-1.5 leading-relaxed">
            <strong className="block">Why inspect with Vestpoint?</strong>
            <p>• Complimentary pickup & logistics in executive cars.</p>
            <p>• Charting surveyor available to take coordinates instantly.</p>
            <p>• Complete documentation review with compliance attorneys.</p>
          </div>
        </div>

        {/* Quick form */}
        <div className="lg:col-span-7 bg-brand-grey border border-gray-50 rounded-xl p-6 text-left">
          {landSuccess ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-display font-bold text-lg text-brand-charcoal font-bold">Land Tour Booked!</h3>
              <p className="text-xs text-gray-650 leading-relaxed max-w-sm mx-auto">
                Thank you, **{landName}**. We have booked your land site tour slot for **{landDate}**. One of our compliance executives will phone you shortly to confirm the pickup timing.
              </p>
              <button
                onClick={handleReset}
                className="bg-brand-charcoal text-white text-xs font-bold px-6 py-2.5 rounded-lg font-display uppercase tracking-widest cursor-pointer"
              >
                Book Another Tour
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4 text-xs">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Your Full Name *</label>
                  <input
                    type="text"
                    required
                    placeholder="Enter name"
                    value={landName}
                    onChange={(e) => setLandName(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234"
                    value={landPhone}
                    onChange={(e) => setLandPhone(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Email Address *</label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={landEmail}
                  onChange={(e) => setLandEmail(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Target Estate Development</label>
                  <select
                    value={landProp}
                    onChange={(e) => setLandProp(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="">General Land Consultation</option>
                    {landProperties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Preferred Date *</label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={landDate}
                    onChange={(e) => setLandDate(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2 bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg font-display uppercase tracking-widest text-xs transition-colors cursor-pointer"
              >
                Schedule complimentary site tour
              </button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
}
