/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { X, Mail, User, ShieldCheck, Download, CheckCircle2, ChevronRight, ChevronLeft, BookOpen, Sparkles } from 'lucide-react';

interface InvestmentGuideModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function InvestmentGuideModal({ isOpen, onClose }: InvestmentGuideModalProps) {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [step, setStep] = useState<'form' | 'compiling' | 'reader'>('form');
  const [progress, setProgress] = useState(0);
  const [loadingText, setLoadingText] = useState('Assembling macroeconomic indexes...');
  const [activeGuidePage, setActiveGuidePage] = useState(0);

  useEffect(() => {
    if (isSubmitting) {
      const interval = setInterval(() => {
        setProgress((p) => {
          if (p >= 100) {
            clearInterval(interval);
            setStep('reader');
            setIsSubmitting(false);
            return 100;
          }
          
          // Dynamic loading labels based on percentages
          if (p < 30) {
            setLoadingText('Assembling macroeconomic indexes...');
          } else if (p < 60) {
            setLoadingText('Charting nationwide high-growth loops (Lagos, Abuja, Enugu, PH, etc.)...');
          } else if (p < 85) {
            setLoadingText('Compiling official title integrity checklists...');
          } else {
            setLoadingText('Finalizing premium PDF formatting...');
          }
          return p + 4;
        });
      }, 100);
      return () => clearInterval(interval);
    }
  }, [isSubmitting]);

  if (!isOpen) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !email.trim()) return;

    // Save lead to local storage
    const existing = JSON.parse(localStorage.getItem('vestpoint_leads') || '[]');
    existing.push({ name, email, type: 'Investment Guide', date: new Date().toISOString() });
    localStorage.setItem('vestpoint_leads', JSON.stringify(existing));

    setIsSubmitting(true);
    setStep('compiling');
    setProgress(0);
  };

  const GUIDE_SLIDES = [
    {
      title: "Nigerian Real Estate: Premier Growth Markets",
      subtitle: "Chapter 1: The Macroeconomic Growth Factors",
      content: [
        "Nigeria has some of the fastest-growing cities in Africa, including Lagos, Abuja, Enugu, Port Harcourt, and Ibadan. The structural supply shortage is massive, driven by high urbanization.",
        "Compounded Annual Growth Rates (CAGR) for verified land plots and luxury housing in prime municipal layouts and designated estate expansion areas routinely exceed 25% to 45% annually.",
        "With key infrastructure projects, economic hubs, and rapid development, capital appreciation is consistently protected against inflation."
      ]
    },
    {
      title: "Land Registry & Title Checklists",
      subtitle: "Chapter 2: Understanding Titles & Securing Transactions",
      content: [
        "Certificate of Occupancy (C of O): Issued directly by the state government for 99 years. Ensure coordinates match Surveyor General files.",
        "Governor's Consent: Mandatory approval when a property with an active C of O is sold. Transactions without consent lack complete legal coverage.",
        "Government Allocation: Direct allocation of plots within officially planned state layout grids, offering legal safety and pre-approved coordinate charting.",
        "Always cross-reference boundaries at the official Lands Registries (Alausa in Lagos, AGIS in Abuja, etc.) prior to payment. Vestpoint compliance desks handle this charting automatically for all clients."
      ]
    },
    {
      title: "Land Banking Tactics: Compounding Capital Safely",
      subtitle: "Chapter 3: Strategic Portfolio Allocations",
      content: [
        "Acquisition Horizon: Hold undeveloped estate plots for 3 to 5 years. This low-maintenance option offers high leverage against standard currency inflation.",
        "Location Focus: Epe remains the ultimate haven for low-entry, high-growth acquisitions. Ibeju-Lekki caters perfectly to heavy commercial developments.",
        "Payment Strategy: Utilize zero-interest instalment plans to maximize your capital footprint across multiple appreciation nodes simultaneously."
      ]
    }
  ];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in font-sans">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-xl overflow-hidden relative border border-gray-100 max-h-[90vh] flex flex-col">
        {/* Header */}
        <div className="bg-brand-charcoal text-white p-5 flex justify-between items-center shrink-0">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-brand-orange" />
            <div>
              <span className="text-[10px] uppercase tracking-wider text-brand-orange font-mono font-bold">
                Knowledge Dossier
              </span>
              <h3 className="font-display font-bold text-lg">National & International Real Estate Guide</h3>
            </div>
          </div>
          <button
            onClick={onClose}
            className="text-gray-400 hover:text-white p-1 rounded-lg transition-colors cursor-pointer"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal body */}
        <div className="p-6 overflow-y-auto">
          {step === 'form' && (
            <div className="space-y-4">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-orange-50 text-brand-orange border border-brand-orange/20 mb-1">
                  <Sparkles className="w-6 h-6" />
                </div>
                <h4 className="font-display font-bold text-lg text-brand-charcoal">
                  Get Immediate Access to Our 2026 Prospectus
                </h4>
                <p className="text-xs text-gray-500 max-w-sm mx-auto leading-relaxed">
                  Enter your details below to instantly download our expert-curated analysis of Nigeria’s and abroad highest-performing investment areas, land title compliance, and ROI forecasts.
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-gray-700 flex items-center gap-1">
                    <User className="w-3.5 h-3.5 text-brand-orange" />
                    <span>Your Name *</span>
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

                <button
                  type="submit"
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg text-center font-display uppercase tracking-wider text-xs transition-colors cursor-pointer flex items-center justify-center gap-2"
                >
                  <Download className="w-4 h-4" />
                  <span>Download Investment Guide</span>
                </button>
              </form>

              <div className="flex items-center justify-center gap-1.5 text-[10px] text-gray-400 font-mono text-center pt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>We respect your privacy. No spam. Secure database.</span>
              </div>
            </div>
          )}

          {step === 'compiling' && (
            <div className="text-center py-12 space-y-6">
              <div className="relative w-20 h-20 mx-auto">
                {/* Circular spinner */}
                <div className="absolute inset-0 rounded-full border-4 border-gray-100" />
                <div className="absolute inset-0 rounded-full border-4 border-brand-orange border-t-transparent animate-spin" />
                <div className="absolute inset-0 flex items-center justify-center font-mono font-bold text-brand-charcoal text-sm">
                  {progress}%
                </div>
              </div>

              <div className="space-y-2 max-w-sm mx-auto">
                <h4 className="font-display font-bold text-sm text-brand-charcoal">
                  Assembling Your Custom Dossier
                </h4>
                <p className="text-xs text-gray-500 min-h-[32px] animate-pulse">
                  {loadingText}
                </p>
              </div>
            </div>
          )}

          {step === 'reader' && (
            <div className="space-y-5 animate-fade-in">
              <div className="bg-emerald-50 border border-emerald-100 p-4 rounded-xl text-center space-y-1">
                <CheckCircle2 className="w-8 h-8 text-emerald-600 mx-auto" />
                <h4 className="font-display font-bold text-sm text-emerald-800">
                  Dossier Successfully Prepared!
                </h4>
                <p className="text-xs text-emerald-600">
                  A comprehensive copy was dispatched to **{email}**. Read below:
                </p>
              </div>

              {/* Digital Reader Slide */}
              <div className="border border-gray-100 rounded-xl p-5 bg-gray-50 space-y-4">
                <div className="flex justify-between items-center pb-2 border-b border-gray-200">
                  <span className="text-[10px] uppercase font-mono text-brand-orange font-bold">
                    {GUIDE_SLIDES[activeGuidePage].subtitle}
                  </span>
                  <span className="text-[10px] font-mono text-gray-400">
                    Slide {activeGuidePage + 1} / {GUIDE_SLIDES.length}
                  </span>
                </div>

                <div className="space-y-3">
                  <h5 className="font-display font-bold text-base text-brand-charcoal">
                    {GUIDE_SLIDES[activeGuidePage].title}
                  </h5>
                  <div className="space-y-2 text-xs text-gray-600 leading-relaxed">
                    {GUIDE_SLIDES[activeGuidePage].content.map((p, i) => (
                      <p key={i} className="flex gap-2 items-start">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-orange shrink-0 mt-1.5" />
                        <span>{p}</span>
                      </p>
                    ))}
                  </div>
                </div>
              </div>

              {/* Controls */}
              <div className="flex justify-between items-center">
                <button
                  disabled={activeGuidePage === 0}
                  onClick={() => setActiveGuidePage((p) => p - 1)}
                  className="px-3 py-2 border border-gray-200 rounded-lg text-xs font-semibold flex items-center gap-1 disabled:opacity-40 disabled:cursor-not-allowed cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                  <span>Previous</span>
                </button>

                <button
                  onClick={() => {
                    if (activeGuidePage === GUIDE_SLIDES.length - 1) {
                      onClose();
                    } else {
                      setActiveGuidePage((p) => p + 1);
                    }
                  }}
                  className="px-4 py-2 bg-brand-charcoal hover:bg-brand-orange text-white rounded-lg text-xs font-semibold flex items-center gap-1 cursor-pointer"
                >
                  <span>{activeGuidePage === GUIDE_SLIDES.length - 1 ? 'Finish Reading' : 'Next Section'}</span>
                  <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
