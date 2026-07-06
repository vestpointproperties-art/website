/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, MapPin, ShieldCheck, DollarSign, List, Home, Compass, MessageSquare, Calendar, CreditCard, ChevronLeft, ChevronRight, CheckCircle2, Bookmark, Share2, HelpCircle, AlertTriangle, Video } from 'lucide-react';
import { Property } from '../types';
import { PROPERTIES } from '../data';

interface PropertyDetailModalProps {
  propertyId: string;
  onClose: () => void;
  onOpenInspection: (propId?: string) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
  onSelectProperty?: (id: string) => void;
}

export default function PropertyDetailModal({ propertyId, onClose, onOpenInspection, isSaved, onToggleSave, onSelectProperty }: PropertyDetailModalProps) {
  const property = PROPERTIES.find((p) => p.id === propertyId);
  if (!property) return null;

  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const [activeTab, setActiveTab] = useState<'overview' | 'payment' | 'roi' | 'faq'>('overview');
  
  // Reservation states
  const [showReserveForm, setShowReserveForm] = useState(false);
  const [reserveName, setReserveName] = useState('');
  const [reservePhone, setReservePhone] = useState('');
  const [reserveEmail, setReserveEmail] = useState('');
  const [reservePlan, setReservePlan] = useState(property.paymentPlan);
  const [reserveUnits, setReserveUnits] = useState(1);
  const [isReserved, setIsReserved] = useState(false);

  // Currency helper
  const formatNaira = (num: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(num).replace('NGN', '₦');
  };

  const handleNextImage = () => {
    setActiveImageIndex((prev) => (prev + 1) % property.images.length);
  };

  const handlePrevImage = () => {
    setActiveImageIndex((prev) => (prev - 1 + property.images.length) % property.images.length);
  };

  const handleWhatsAppEnquiry = () => {
    const text = encodeURIComponent(`Hello Vestpoint, I am highly interested in securing detailed documentation and pricing for your property: "${property.title}" located in ${property.location}. Please connect me with an advisor.`);
    window.open(`https://wa.me/2348030564502?text=${text}`, '_blank');
  };

  const handleReserveSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!reserveName.trim() || !reservePhone.trim() || !reserveEmail.trim()) {
      return;
    }

    const reservation = {
      id: 'res-' + Math.random().toString(36).substr(2, 9),
      propertyName: property.title,
      propertyId: property.id,
      name: reserveName,
      phone: reservePhone,
      email: reserveEmail,
      plan: reservePlan,
      units: reserveUnits,
      pricePerUnit: property.price,
      totalPrice: property.price * reserveUnits,
      createdAt: new Date().toISOString()
    };

    // Save to local storage
    const existing = JSON.parse(localStorage.getItem('vestpoint_reservations') || '[]');
    existing.push(reservation);
    localStorage.setItem('vestpoint_reservations', JSON.stringify(existing));

    setIsReserved(true);
  };

  const handleResetReservation = () => {
    setIsReserved(false);
    setShowReserveForm(false);
    setReserveName('');
    setReservePhone('');
    setReserveEmail('');
    setReserveUnits(1);
  };

  // Find 2 related properties in the same general category (land or luxury/residential)
  const relatedProperties = PROPERTIES.filter(
    (p) => p.id !== property.id && (p.category === property.category || p.type === property.type)
  ).slice(0, 2);

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-5xl overflow-hidden relative border border-gray-100 max-h-[95vh] flex flex-col">
        
        {/* Header bar */}
        <div className="bg-brand-charcoal text-white p-4 flex justify-between items-center shrink-0 border-b border-gray-800">
          <div className="flex items-center gap-2">
            <span className="text-[10px] uppercase tracking-wider bg-brand-orange text-white px-2 py-0.5 rounded font-bold font-mono">
              {property.type}
            </span>
            <span className="text-xs text-gray-400 hidden sm:inline">Title: {property.titleType}</span>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={() => onToggleSave(property.id)}
              className={`p-1.5 rounded-lg border transition-colors cursor-pointer flex items-center gap-1.5 text-xs font-semibold ${
                isSaved
                  ? 'bg-rose-500 border-rose-500 text-white'
                  : 'border-gray-700 text-gray-300 hover:text-white hover:border-gray-600'
              }`}
            >
              <Bookmark className={`w-4 h-4 ${isSaved ? 'fill-current' : ''}`} />
              <span className="hidden sm:inline">{isSaved ? 'Saved' : 'Save'}</span>
            </button>
            <button
              onClick={onClose}
              className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
              aria-label="Close"
              id="property-detail-close"
            >
              <X className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Scrollable Content wrapper */}
        <div className="flex-grow overflow-y-auto grid grid-cols-1 lg:grid-cols-12">
          
          {/* Left Column: Media & Core Information (7 cols) */}
          <div className="lg:col-span-7 p-4 sm:p-6 space-y-6 border-r border-gray-100">
            
            {/* Image Gallery */}
            <div className="space-y-2">
              <div className="relative aspect-[16/10] bg-gray-100 rounded-xl overflow-hidden shadow-inner group">
                <img
                  src={property.images[activeImageIndex]}
                  alt={`${property.title} - View ${activeImageIndex + 1}`}
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                
                {/* Arrow Controllers */}
                {property.images.length > 1 && (
                  <>
                    <button
                      onClick={handlePrevImage}
                      className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                      aria-label="Previous image"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={handleNextImage}
                      className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-black/40 text-white flex items-center justify-center hover:bg-black/60 transition-colors cursor-pointer"
                      aria-label="Next image"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                  </>
                )}
                
                {/* Count Indicator */}
                <span className="absolute bottom-4 right-4 bg-black/60 text-white text-[10px] font-mono px-2 py-1 rounded">
                  {activeImageIndex + 1} / {property.images.length}
                </span>
              </div>

              {/* Thumbnails list */}
              {property.images.length > 1 && (
                <div className="flex items-center gap-2 overflow-x-auto pb-1">
                  {property.images.map((img, idx) => (
                    <button
                      key={idx}
                      onClick={() => setActiveImageIndex(idx)}
                      className={`relative w-20 aspect-[4/3] rounded-lg overflow-hidden border-2 transition-all cursor-pointer shrink-0 ${
                        activeImageIndex === idx ? 'border-brand-orange scale-95' : 'border-transparent opacity-70 hover:opacity-100'
                      }`}
                    >
                      <img src={img} alt="thumbnail" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Headline and Location */}
            <div className="space-y-2">
              <div className="flex items-center gap-1.5 text-gray-500 text-xs font-semibold">
                <MapPin className="w-4 h-4 text-brand-orange" />
                <span>{property.location}</span>
              </div>
              <h1 className="font-display font-bold text-2xl text-brand-charcoal leading-tight">
                {property.title}
              </h1>
              <div className="flex items-center gap-4 text-sm font-mono font-bold text-brand-orange">
                <span className="text-2xl">{property.priceLabel ? property.priceLabel : formatNaira(property.price)}</span>
                <span className="text-xs bg-brand-orange-light text-brand-orange px-2.5 py-1 rounded border border-brand-orange/20">
                  {property.size}
                </span>
              </div>
            </div>

            {/* Details tabs (Overview, Payment, ROI, FAQs) */}
            <div className="border-b border-gray-100">
              <div className="flex gap-4">
                {(['overview', 'payment', 'roi', 'faq'] as const).map((tab) => (
                  <button
                    key={tab}
                    onClick={() => setActiveTab(tab)}
                    className={`pb-3 text-xs uppercase tracking-wider font-semibold border-b-2 transition-colors cursor-pointer ${
                      activeTab === tab
                        ? 'border-brand-orange text-brand-orange font-bold'
                        : 'border-transparent text-gray-500 hover:text-brand-charcoal'
                    }`}
                  >
                    {tab === 'roi' ? 'ROI / Analysis' : tab}
                  </button>
                ))}
              </div>
            </div>

            {/* Tab content panel */}
            <div className="space-y-4">
              {activeTab === 'overview' && (
                <div className="space-y-4 animate-fade-in text-sm text-gray-600 leading-relaxed">
                  <p>{property.description}</p>
                  
                  {/* Features and Amenities section */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                    <div className="bg-brand-grey p-4 rounded-xl border border-gray-100">
                      <h4 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1">
                        <Home className="w-4 h-4 text-brand-orange" />
                        <span>Core Features</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {property.features.map((f, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="bg-brand-grey p-4 rounded-xl border border-gray-100">
                      <h4 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1">
                        <List className="w-4 h-4 text-brand-orange" />
                        <span>Infrastructure & Amenities</span>
                      </h4>
                      <ul className="space-y-1.5 text-xs text-gray-600">
                        {property.amenities.map((a, i) => (
                          <li key={i} className="flex items-center gap-1.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-600" />
                            <span>{a}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Landmarks */}
                  <div className="bg-brand-orange-light/40 border border-brand-orange/10 p-4 rounded-xl">
                    <h4 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider mb-2 flex items-center gap-1">
                      <Compass className="w-4 h-4 text-brand-orange" />
                      <span>Proximity & Landmarks</span>
                    </h4>
                    <p className="text-xs text-gray-500 mb-2 leading-relaxed">
                      Lagos real estate values are driven heavily by accessibility. This property is near major economic hubs:
                    </p>
                    <div className="flex flex-wrap gap-1.5">
                      {property.landmarks.map((l, i) => (
                        <span key={i} className="bg-white border border-gray-200 text-gray-700 text-xs px-2.5 py-1 rounded font-medium">
                          📍 {l}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'payment' && (
                <div className="space-y-4 animate-fade-in text-sm text-gray-600">
                  <h4 className="font-display font-bold text-brand-charcoal text-base">
                    Flexible Payment Structuring
                  </h4>
                  <p className="leading-relaxed">
                    We offer tailored options designed to simplify acquisition for both corporate entities and private individuals. Our plans span outright purchases and structured installments.
                  </p>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                      <span className="text-[10px] uppercase tracking-wider text-brand-orange font-mono font-bold">
                        Option 1
                      </span>
                      <h5 className="font-display font-bold text-sm text-brand-charcoal mt-1">Outright Purchase</h5>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Pay 100% of the property cost upfront and receive an immediate **3% - 5% cash-back discount** on the property value, with immediate physical allocation.
                      </p>
                    </div>

                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50">
                      <span className="text-[10px] uppercase tracking-wider text-emerald-700 font-mono font-bold">
                        Option 2
                      </span>
                      <h5 className="font-display font-bold text-sm text-brand-charcoal mt-1">Structured Instalments</h5>
                      <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                        Secure the unit with a **30% downpayment**, then spread the remaining balance evenly over **6, 12, or 24 months** (or up to {property.paymentPlan}) without any predatory interest fees.
                      </p>
                    </div>
                  </div>

                  <div className="bg-brand-orange-light/30 border border-brand-orange/20 rounded-xl p-4 flex gap-3 items-start">
                    <CreditCard className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                    <div>
                      <h6 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider">
                        Diaspora Escrow Available
                      </h6>
                      <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">
                        International buyers can structure secure, registered Escrow accounts through our offshore compliance desks to assure transaction integrity.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {activeTab === 'roi' && (
                <div className="space-y-4 animate-fade-in text-sm text-gray-600">
                  <h4 className="font-display font-bold text-brand-charcoal text-base">
                    Investment Performance Analysis
                  </h4>
                  
                  {property.roi ? (
                    <div className="bg-emerald-50 border border-emerald-100 rounded-xl p-4 flex items-center gap-4">
                      <div className="bg-emerald-600 text-white p-3 rounded-lg text-center shrink-0">
                        <span className="text-xs uppercase tracking-widest block font-mono">ROI Target</span>
                        <span className="font-mono font-bold text-lg">{property.roi.split(' ')[0]}</span>
                      </div>
                      <div>
                        <h5 className="font-display font-bold text-emerald-800 text-sm">
                          Capital Appreciation Matrix
                        </h5>
                        <p className="text-xs text-emerald-700 mt-0.5 leading-relaxed">
                          This development is positioned in a designated high-velocity economic corridor. Capital values in this sector outperform standard domestic treasury bills.
                        </p>
                      </div>
                    </div>
                  ) : null}

                  {property.investmentPotential ? (
                    <div className="border border-gray-100 rounded-xl p-4 bg-gray-50 text-xs space-y-2 leading-relaxed">
                      <h5 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-wider">
                        Market Outlook & Yield Analysis
                      </h5>
                      <p className="text-gray-600">{property.investmentPotential}</p>
                    </div>
                  ) : (
                    <p className="text-xs text-gray-500 leading-relaxed">
                      Lagos is Africa's premier economic corridor. Commercial and residential land acquisitions in Lekki, Ibeju-Lekki, and Epe currently experience a compounded annual growth rate of 35% - 45% due to major capital projects like the Deep Sea Port and Free Trade Zones.
                    </p>
                  )}

                  <div className="p-4 bg-brand-charcoal text-white rounded-xl text-center space-y-2">
                    <h5 className="font-display font-bold text-sm">Request Comprehensive Valuation Report</h5>
                    <p className="text-xs text-gray-400 max-w-lg mx-auto leading-relaxed">
                      Our legal and investment compliance advisory teams publish detailed prospectus dossiers. Tap "Inquire on WhatsApp" to receive the immediate PDF brochure.
                    </p>
                  </div>
                </div>
              )}

              {activeTab === 'faq' && (
                <div className="space-y-3.5 animate-fade-in">
                  {[
                    {
                      q: "What is the timeline for immediate physical allocation?",
                      a: "Physical allocation is completed immediately upon 100% outright payment clearance, or once 50% of an instalment layout is cleared, accompanied by formal Deed execution."
                    },
                    {
                      q: "Does this property have any Omo-Onile family claims?",
                      a: "No. Every listed asset is under absolute corporate security, legally registered, fenced, and entirely isolated from local indigenous land administrative claims."
                    },
                    {
                      q: "Can I assign or resell my property during the payment plan?",
                      a: "Yes. Our contracts support formal resale assignments, permitting clients to capitalize on intermediate appreciation and flip their units securely."
                    }
                  ].map((f, i) => (
                    <div key={i} className="bg-gray-50 p-3.5 rounded-xl border border-gray-100 space-y-1">
                      <h5 className="font-display font-bold text-brand-charcoal text-xs flex items-center gap-1.5">
                        <HelpCircle className="w-4 h-4 text-brand-orange shrink-0" />
                        <span>{f.q}</span>
                      </h5>
                      <p className="text-xs text-gray-500 leading-relaxed pl-5">{f.a}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Virtual Tour section */}
            {property.virtualTourUrl && (
              <div className="bg-brand-charcoal text-white p-4 rounded-xl space-y-3">
                <div className="flex justify-between items-center">
                  <h4 className="font-display font-bold text-xs uppercase tracking-wider text-brand-orange flex items-center gap-1.5">
                    <Video className="w-4.5 h-4.5" />
                    <span>Experience Video Virtual Tour</span>
                  </h4>
                  <span className="text-[10px] bg-emerald-600 px-2 py-0.5 rounded font-mono font-bold uppercase animate-pulse">
                    Interactive HD
                  </span>
                </div>
                <div className="aspect-video bg-black rounded-lg overflow-hidden relative border border-gray-800">
                  <iframe
                    className="w-full h-full"
                    src={property.virtualTourUrl}
                    title="Property Virtual Tour"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Reservation & Action Panels (5 cols) */}
          <div className="lg:col-span-5 p-4 sm:p-6 bg-brand-grey flex flex-col justify-between">
            <div className="space-y-6">
              
              {/* Trust Panel & Advisor Details */}
              <div className="bg-white rounded-xl p-4 shadow-sm border border-gray-100 text-center space-y-3.5">
                <div className="relative w-16 h-16 mx-auto">
                  <img
                    src="/src/assets/images/franklin_adebayo.jpg"
                    alt="Franklin Adebayo"
                    className="w-full h-full rounded-full object-cover border-2 border-brand-orange"
                  />
                  <div className="absolute bottom-0 right-1 w-3.5 h-3.5 rounded-full bg-green-500 border-2 border-white" />
                </div>
                <div>
                  <h4 className="font-display font-bold text-sm text-brand-charcoal">Franklin Adebayo</h4>
                  <p className="text-xs text-gray-500">Your Senior Real Estate & Investment Advisor</p>
                </div>
                <div className="flex justify-center items-center gap-2">
                  <span className="text-xs text-brand-green bg-emerald-50 px-2.5 py-1 rounded-full border border-emerald-100 font-medium">
                    Verified BRG Partner
                  </span>
                  <span className="text-xs text-brand-orange bg-brand-orange-light px-2.5 py-1 rounded-full border border-brand-orange/20 font-medium">
                    Lagos Real Estate Expert
                  </span>
                </div>
              </div>

              {/* Action Panels */}
              {showReserveForm ? (
                /* Reservation Portal Form */
                <div className="bg-white rounded-xl p-5 shadow-sm border border-gray-100 space-y-4 animate-fade-in">
                  <div className="flex justify-between items-center pb-2 border-b border-gray-100">
                    <h4 className="font-display font-bold text-sm text-brand-charcoal">
                      Reserve Property Unit
                    </h4>
                    <button
                      onClick={() => setShowReserveForm(false)}
                      className="text-xs text-gray-500 hover:text-brand-orange font-semibold cursor-pointer"
                    >
                      Back
                    </button>
                  </div>

                  {isReserved ? (
                    <div className="text-center py-4 space-y-3">
                      <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
                      <h5 className="font-display font-bold text-sm text-brand-charcoal">
                        Reservation Request Sent!
                      </h5>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        We have reserved **{reserveUnits} Unit(s)** of **"{property.title}"** under your name: **{reserveName}**.
                      </p>
                      <div className="bg-gray-50 p-3 rounded-lg text-xs space-y-1 font-mono text-left">
                        <p>Total Value: {formatNaira(property.price * reserveUnits)}</p>
                        <p>Plan Selected: {reservePlan}</p>
                        <p>Lock-in Fee: Free</p>
                      </div>
                      <button
                        onClick={handleResetReservation}
                        className="w-full bg-brand-charcoal text-white text-xs font-bold py-2.5 rounded-lg font-display uppercase cursor-pointer"
                      >
                        Done
                      </button>
                    </div>
                  ) : (
                    <form onSubmit={handleReserveSubmit} className="space-y-3 text-xs">
                      <div className="space-y-1">
                        <label className="font-semibold text-gray-700">Full Name *</label>
                        <input
                          type="text"
                          required
                          value={reserveName}
                          onChange={(e) => setReserveName(e.target.value)}
                          className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:border-brand-orange text-xs"
                          placeholder="Jane Doe"
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="font-semibold text-gray-700">WhatsApp / Phone *</label>
                          <input
                            type="tel"
                            required
                            value={reservePhone}
                            onChange={(e) => setReservePhone(e.target.value)}
                            className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:border-brand-orange text-xs"
                            placeholder="e.g. +234"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-gray-700">Email Address *</label>
                          <input
                            type="email"
                            required
                            value={reserveEmail}
                            onChange={(e) => setReserveEmail(e.target.value)}
                            className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:border-brand-orange text-xs"
                            placeholder="email@example.com"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-2 gap-2">
                        <div className="space-y-1">
                          <label className="font-semibold text-gray-700">Units to Reserve</label>
                          <input
                            type="number"
                            min="1"
                            max="10"
                            value={reserveUnits}
                            onChange={(e) => setReserveUnits(parseInt(e.target.value) || 1)}
                            className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:border-brand-orange text-xs"
                          />
                        </div>
                        <div className="space-y-1">
                          <label className="font-semibold text-gray-700">Payment Plan</label>
                          <select
                            value={reservePlan}
                            onChange={(e) => setReservePlan(e.target.value as any)}
                            className="w-full border border-gray-200 rounded p-2 focus:outline-none focus:border-brand-orange bg-white text-xs"
                          >
                            <option value="Outright">Outright Purchase</option>
                            <option value="6 Months">6 Months Instalment</option>
                            <option value="12 Months">12 Months Instalment</option>
                            <option value="24 Months">24 Months Instalment</option>
                          </select>
                        </div>
                      </div>

                      <div className="bg-brand-orange-light p-3 rounded-lg space-y-1 border border-brand-orange/10 font-mono">
                        <div className="flex justify-between font-bold text-brand-charcoal text-xs">
                          <span>Total Valuation:</span>
                          <span>{formatNaira(property.price * reserveUnits)}</span>
                        </div>
                        <p className="text-[9px] text-gray-500 leading-normal">
                          * Reservation is 100% complimentary. Holds property for 72 hours until advisor clearance confirmation.
                        </p>
                      </div>

                      <button
                        type="submit"
                        className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-2.5 rounded-lg font-display uppercase tracking-wider text-xs cursor-pointer"
                      >
                        Confirm Reservation
                      </button>
                    </form>
                  )}
                </div>
              ) : (
                /* Main Action Options Panel */
                <div className="space-y-3.5">
                  <div className="bg-white p-4 rounded-xl border border-gray-100 shadow-sm space-y-3">
                    <span className="text-[10px] uppercase font-mono tracking-wider text-gray-400 font-bold block">
                      Secure Advisory Service
                    </span>
                    <button
                      onClick={handleWhatsAppEnquiry}
                      className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-display uppercase tracking-wider text-xs"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Inquire on WhatsApp</span>
                    </button>
                    <button
                      onClick={() => onOpenInspection(property.id)}
                      className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-display uppercase tracking-wider text-xs animate-pulse"
                    >
                      <Calendar className="w-4 h-4" />
                      <span>Schedule Site Tour</span>
                    </button>
                    <button
                      onClick={() => setShowReserveForm(true)}
                      className="w-full bg-brand-charcoal hover:bg-brand-orange text-white font-bold py-3.5 px-4 rounded-xl transition-all cursor-pointer flex items-center justify-center gap-2 shadow-sm font-display uppercase tracking-wider text-xs"
                    >
                      <ShieldCheck className="w-4 h-4" />
                      <span>Reserve This Property</span>
                    </button>
                  </div>

                  <div className="bg-amber-50 border border-amber-100 rounded-xl p-4 flex gap-2.5 items-start">
                    <AlertTriangle className="w-4.5 h-4.5 text-amber-600 shrink-0 mt-0.5" />
                    <div>
                      <h5 className="font-display font-bold text-amber-800 text-xs uppercase tracking-wider">
                        Limited Supply Notification
                      </h5>
                      <p className="text-[10px] text-amber-700 mt-0.5 leading-relaxed">
                        Lagos premium plots and luxury developments appreciate daily. Rates and available coordinates are subject to continuous demand adjustments.
                      </p>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Related Properties Subpanel */}
            {relatedProperties.length > 0 && (
              <div className="pt-6 border-t border-gray-200 mt-6">
                <h4 className="font-display font-bold text-brand-charcoal text-xs uppercase tracking-widest mb-3">
                  Recommended Properties
                </h4>
                <div className="space-y-3">
                  {relatedProperties.map((related) => (
                    <button
                      key={related.id}
                      onClick={() => {
                        window.scrollTo({ top: 0, behavior: 'smooth' });
                        setActiveImageIndex(0);
                        if (onSelectProperty) {
                          onSelectProperty(related.id);
                        } else {
                          onClose();
                        }
                      }}
                      className="w-full text-left bg-white p-2.5 rounded-lg border border-gray-100 shadow-sm hover:border-brand-orange transition-all flex gap-3 cursor-pointer group"
                    >
                      <img
                        src={related.image}
                        alt={related.title}
                        className="w-16 h-12 object-cover rounded"
                        referrerPolicy="no-referrer"
                      />
                      <div className="min-w-0 flex-grow">
                        <span className="text-[9px] uppercase tracking-wider text-brand-orange font-mono block">
                          ₦{related.price / 1000000}M
                        </span>
                        <h5 className="font-display font-bold text-xs text-brand-charcoal group-hover:text-brand-orange transition-colors truncate">
                          {related.title}
                        </h5>
                        <p className="text-[10px] text-gray-500 truncate">{related.location}</p>
                      </div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
