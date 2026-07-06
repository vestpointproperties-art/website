/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Award, Compass, Heart, ShieldCheck, Mail, User, Phone, CheckCircle2, Star, Key, Calendar } from 'lucide-react';
import { PROPERTIES } from '../data';
import PropertyCard from './PropertyCard';

interface LuxuryViewProps {
  onViewProperty: (id: string) => void;
  savedPropertyIds: string[];
  onToggleSaveProperty: (id: string) => void;
}

export default function LuxuryView({
  onViewProperty,
  savedPropertyIds,
  onToggleSaveProperty,
}: LuxuryViewProps) {
  // Local states for private viewing form
  const [privateName, setPrivateName] = useState('');
  const [privatePhone, setPrivatePhone] = useState('');
  const [privateEmail, setPrivateEmail] = useState('');
  const [privateProperty, setPrivateProperty] = useState('');
  const [privateTime, setPrivateTime] = useState('');
  const [privateRequests, setPrivateRequests] = useState('');
  const [privateSuccess, setPrivateSuccess] = useState(false);

  // Filter properties specifically in the luxury tier
  const luxuryProperties = PROPERTIES.filter((p) => p.isLuxury);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!privateName.trim() || !privatePhone.trim() || !privateEmail.trim() || !privateProperty) {
      return;
    }

    const viewingRequest = {
      id: 'lux-' + Math.random().toString(36).substr(2, 9),
      name: privateName,
      phone: privatePhone,
      email: privateEmail,
      propertyId: privateProperty,
      propertyName: PROPERTIES.find((p) => p.id === privateProperty)?.title || 'General Luxury Portfolio',
      preferredTime: privateTime,
      specialRequests: privateRequests,
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('vestpoint_viewings') || '[]');
    existing.push(viewingRequest);
    localStorage.setItem('vestpoint_viewings', JSON.stringify(existing));

    setPrivateSuccess(true);
  };

  const handleReset = () => {
    setPrivateSuccess(false);
    setPrivateName('');
    setPrivatePhone('');
    setPrivateEmail('');
    setPrivateProperty('');
    setPrivateTime('');
    setPrivateRequests('');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 font-sans" id="luxury-hub-container">
      
      {/* Editorial Luxury Header Banner */}
      <section className="relative rounded-2xl overflow-hidden min-h-[45vh] flex items-center bg-brand-charcoal text-white p-8 sm:p-12 text-left shadow-xl border border-gray-800" id="luxury-banner-section">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80"
            alt="Luxury Living Interior Room"
            className="w-full h-full object-cover opacity-20"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-transparent" />
        </div>

        <div className="relative z-10 max-w-xl space-y-4">
          <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange bg-brand-orange/15 border border-brand-orange/20 px-3.5 py-1.5 rounded-full inline-block font-semibold">
            ★ Elite Collections ★
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
            The Vestpoint Private Luxury Collection
          </h1>
          <p className="text-xs sm:text-sm text-gray-300 leading-relaxed">
            Curating supreme luxury assets for diplomats, executives, and high-net-worth families in Lagos’s ultra-exclusive enclaves—Ikoyi, Lekki Phase 1, and Ikeja GRA. Expect privacy, flawless design, and legal certitude.
          </p>
        </div>
      </section>

      {/* Luxury listings portfolio */}
      <section className="space-y-10" id="luxury-portfolio-grid">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Exclusive Residences
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Exclusive Luxury Homes Portfolio
          </h2>
          <p className="text-sm text-gray-500 max-w-lg mx-auto leading-relaxed">
            Each luxury asset features high-end architectural systems, private pools, smart home automation, and unmatched lagoon views.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {luxuryProperties.map((prop) => (
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

      {/* Private Viewing request Section */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 bg-white rounded-2xl border border-gray-100 p-6 sm:p-10 shadow-sm items-center" id="luxury-showing-section">
        
        {/* Editorial column (5 cols) */}
        <div className="lg:col-span-5 space-y-4 text-left">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Bespoke Concierge
          </span>
          <h2 className="font-display font-bold text-2xl text-brand-charcoal leading-tight">
            Request a Private Viewing & Consultation
          </h2>
          <p className="text-xs text-gray-650 leading-relaxed">
            Due to privacy and exclusivity agreements, certain penthouses are only accessible for private showings. Fill out the request panel and our executive concierge department will coordinate logistics.
          </p>
          
          <ul className="space-y-2 text-xs text-gray-500">
            <li className="flex items-center gap-2">
              <ShieldCheck className="w-4.5 h-4.5 text-brand-orange" />
              <span>100% Client Privacy Guaranteed</span>
            </li>
            <li className="flex items-center gap-2">
              <Calendar className="w-4.5 h-4.5 text-brand-orange" />
              <span>Flexible Weekend & Evening Coordination</span>
            </li>
            <li className="flex items-center gap-2">
              <Key className="w-4.5 h-4.5 text-brand-orange" />
              <span>Full Advisory Portfolio Access</span>
            </li>
          </ul>
        </div>

        {/* Form column (7 cols) */}
        <div className="lg:col-span-7 bg-brand-grey border border-gray-50 rounded-xl p-6 text-left">
          {privateSuccess ? (
            <div className="text-center py-6 space-y-4">
              <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
              <h3 className="font-display font-bold text-lg text-brand-charcoal">Showing Request Confirmed!</h3>
              <p className="text-xs text-gray-600 leading-relaxed max-w-sm mx-auto">
                Thank you, **{privateName}**. Our private showing desk has received your coordinates and will call you to arrange the transport logistics.
              </p>
              <button
                onClick={handleReset}
                className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold px-6 py-2.5 rounded-lg font-display uppercase tracking-widest cursor-pointer"
              >
                Close View
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
                    value={privateName}
                    onChange={(e) => setPrivateName(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Phone / WhatsApp *</label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234"
                    value={privatePhone}
                    onChange={(e) => setPrivatePhone(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Corporate Email *</label>
                <input
                  type="email"
                  required
                  placeholder="name@company.com"
                  value={privateEmail}
                  onChange={(e) => setPrivateEmail(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Target Luxury Asset *</label>
                  <select
                    required
                    value={privateProperty}
                    onChange={(e) => setPrivateProperty(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="">Select an asset</option>
                    {luxuryProperties.map((p) => (
                      <option key={p.id} value={p.id}>
                        {p.title} - {p.location}
                      </option>
                    ))}
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="font-bold text-gray-700 uppercase tracking-wider">Preferred Time Slot</label>
                  <select
                    value={privateTime}
                    onChange={(e) => setPrivateTime(e.target.value)}
                    className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white focus:outline-none focus:border-brand-orange cursor-pointer"
                  >
                    <option value="">Select timeframe</option>
                    <option value="9am-12pm">Morning (9:00 AM - 12:00 PM)</option>
                    <option value="1pm-4pm">Afternoon (1:00 PM - 4:00 PM)</option>
                    <option value="5pm-7pm">Evening (5:00 PM - 7:00 PM)</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="font-bold text-gray-700 uppercase tracking-wider">Private Requests / Security Requirements</label>
                <textarea
                  placeholder="Specify any high-priority requests or details (e.g. airport pickup, diaspora escort service)."
                  value={privateRequests}
                  onChange={(e) => setPrivateRequests(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded p-2.5 bg-white h-16 focus:outline-none focus:border-brand-orange"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-brand-charcoal hover:bg-brand-orange text-white font-bold py-3 px-4 rounded-lg font-display uppercase tracking-widest text-xs transition-colors cursor-pointer"
              >
                Submit Private Viewing Request
              </button>
            </form>
          )}
        </div>

      </section>

    </div>
  );
}
