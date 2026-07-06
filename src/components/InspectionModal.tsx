/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { X, Calendar, Clock, Phone, Mail, User, ShieldCheck, CheckCircle2, Video } from 'lucide-react';
import { PROPERTIES } from '../data';

interface InspectionModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedPropertyId?: string;
}

export default function InspectionModal({ isOpen, onClose, preselectedPropertyId }: InspectionModalProps) {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [propertyId, setPropertyId] = useState(preselectedPropertyId || '');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('');
  const [isVirtual, setIsVirtual] = useState(false);
  const [specialRequests, setSpecialRequests] = useState('');
  
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [error, setError] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !phone.trim() || !email.trim() || !preferredDate || !preferredTime) {
      setError('Please fill out all required fields marked with *');
      return;
    }

    const selectedProp = PROPERTIES.find(p => p.id === propertyId);
    const newBooking = {
      id: 'book-' + Math.random().toString(36).substr(2, 9),
      name,
      phone,
      email,
      propertyId,
      propertyName: selectedProp ? selectedProp.title : 'General Consultation',
      preferredDate,
      preferredTime,
      isVirtual,
      specialRequests,
      createdAt: new Date().toISOString()
    };

    // Save to local storage for persistence
    const existing = JSON.parse(localStorage.getItem('vestpoint_bookings') || '[]');
    existing.push(newBooking);
    localStorage.setItem('vestpoint_bookings', JSON.stringify(existing));

    setIsSubmitted(true);
    setError('');
  };

  const handleReset = () => {
    setIsSubmitted(false);
    setName('');
    setPhone('');
    setEmail('');
    setPreferredDate('');
    setPreferredTime('');
    setIsVirtual(false);
    setSpecialRequests('');
    onClose();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden relative border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-brand-charcoal text-white p-5 flex justify-between items-center shrink-0">
          <div>
            <span className="text-[10px] uppercase tracking-wider text-brand-orange font-mono font-bold">
              Secure Consultation
            </span>
            <h3 className="font-display font-bold text-lg">Schedule Property Inspection</h3>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Body */}
        <div className="p-6 overflow-y-auto">
          {isSubmitted ? (
            <div className="text-center py-8 space-y-4">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 mb-2 border border-emerald-200">
                <CheckCircle2 className="w-10 h-10" />
              </div>
              <h4 className="font-display font-bold text-xl text-brand-charcoal">
                Inspection Scheduled Successfully!
              </h4>
              <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
                Dear <strong className="text-brand-charcoal">{name}</strong>, we have received your booking for{' '}
                <strong className="text-brand-charcoal">
                  {PROPERTIES.find((p) => p.id === propertyId)?.title || 'General Property Consultation'}
                </strong>.
              </p>
              <div className="bg-gray-50 p-4 rounded-xl text-left max-w-md mx-auto border border-gray-100 text-xs space-y-2">
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Type:</span>
                  <span className="font-semibold text-brand-charcoal flex items-center gap-1">
                    {isVirtual ? (
                      <>
                        <Video className="w-3.5 h-3.5 text-brand-orange" />
                        <span>Virtual Video Call (Zoom/WhatsApp)</span>
                      </>
                    ) : (
                      'Physical Tour (Executive Vehicle)'
                    )}
                  </span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Date:</span>
                  <span className="font-semibold text-brand-charcoal">{preferredDate}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Preferred Time Slot:</span>
                  <span className="font-semibold text-brand-charcoal">{preferredTime}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-500 font-medium">Contact Number:</span>
                  <span className="font-semibold text-brand-charcoal">{phone}</span>
                </div>
              </div>
              <p className="text-xs text-gray-400 max-w-xs mx-auto">
                One of our professional property compliance advisors will call you shortly to confirm logistics.
              </p>
              <div className="pt-4">
                <button
                  onClick={handleReset}
                  className="bg-brand-charcoal text-white text-xs font-bold font-display uppercase tracking-widest px-6 py-3 rounded-lg hover:bg-brand-orange transition-all cursor-pointer"
                >
                  Close & Continue
                </button>
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Type Selector (Physical vs. Virtual) */}
              <div className="grid grid-cols-2 gap-3 mb-2">
                <button
                  type="button"
                  onClick={() => setIsVirtual(false)}
                  className={`py-3 px-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                    !isVirtual
                      ? 'bg-brand-orange-light border-brand-orange text-brand-orange font-semibold shadow-sm'
                      : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm">Physical Tour</span>
                  <span className="text-[10px] text-gray-500 font-normal">Complimentary Chauffeur</span>
                </button>
                <button
                  type="button"
                  onClick={() => setIsVirtual(true)}
                  className={`py-3 px-4 rounded-xl border text-center transition-all cursor-pointer flex flex-col items-center justify-center gap-1.5 ${
                    isVirtual
                      ? 'bg-brand-orange-light border-brand-orange text-brand-orange font-semibold shadow-sm'
                      : 'border-gray-200 text-gray-500 hover:bg-gray-50'
                  }`}
                >
                  <span className="text-sm">Virtual Inspection</span>
                  <span className="text-[10px] text-gray-500 font-normal">HD Video & Drone Stream</span>
                </button>
              </div>

              {/* Personal Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Full Name *</span>
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <Phone className="w-3.5 h-3.5 text-brand-orange" />
                    <span>WhatsApp / Phone *</span>
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="e.g. +234 or local number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange"
                  />
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                  <Mail className="w-3.5 h-3.5 text-brand-orange" />
                  <span>Email Address *</span>
                </label>
                <input
                  type="email"
                  required
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange"
                />
              </div>

              {/* Property Selector */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Property of Interest</label>
                <select
                  value={propertyId}
                  onChange={(e) => setPropertyId(e.target.value)}
                  className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange bg-white"
                >
                  <option value="">General Consultation (Advisor Call)</option>
                  {PROPERTIES.map((prop) => (
                    <option key={prop.id} value={prop.id}>
                      [{prop.type}] {prop.title} - {prop.location}
                    </option>
                  ))}
                </select>
              </div>

              {/* Date & Time Slot */}
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Preferred Date *</span>
                  </label>
                  <input
                    type="date"
                    required
                    min={new Date().toISOString().split('T')[0]}
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Preferred Time Slot *</span>
                  </label>
                  <select
                    required
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    className="w-full text-sm border border-gray-200 rounded-lg p-2.5 focus:outline-none focus:border-brand-orange bg-white"
                  >
                    <option value="">Select a slot</option>
                    <option value="9:00 AM - 11:00 AM">Morning (9:00 AM - 11:00 AM)</option>
                    <option value="11:30 AM - 1:30 PM">Mid-Day (11:30 AM - 1:30 PM)</option>
                    <option value="2:00 PM - 4:00 PM">Afternoon (2:00 PM - 4:00 PM)</option>
                    <option value="4:30 PM - 6:00 PM">Evening (4:30 PM - 6:00 PM)</option>
                  </select>
                </div>
              </div>

              {/* Special Requests */}
              <div className="space-y-1">
                <label className="text-xs font-semibold text-gray-700">Special Requests / Requirements</label>
                <textarea
                  placeholder="Specify any dietary, travel, scheduling, or specific queries you want our consultant to prepare."
                  value={specialRequests}
                  onChange={(e) => setSpecialRequests(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg p-2.5 h-16 focus:outline-none focus:border-brand-orange"
                />
              </div>

              {error && <p className="text-xs font-medium text-red-500">{error}</p>}

              {/* Actions */}
              <div className="pt-2 flex flex-col sm:flex-row gap-3">
                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg text-center font-display uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Schedule Inspection
                </button>
                <button
                  type="button"
                  onClick={onClose}
                  className="w-full sm:w-1/3 border border-gray-200 text-gray-500 hover:bg-gray-50 font-bold py-3 px-4 rounded-lg text-center font-display uppercase tracking-wider text-xs transition-colors cursor-pointer"
                >
                  Cancel
                </button>
              </div>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-mono text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Verified Legal Real Estate Brokerage. Zero charges.</span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}
