/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Search, Compass, ShieldCheck, DollarSign, Calendar, MessageSquare, ArrowRight, Star, Heart, FileText, Award, Building, User, Phone, Mail, Clock, Download, Zap, Users, HelpCircle, Globe, CheckCircle2 } from 'lucide-react';
import { PROPERTIES, BLOG_ARTICLES, TESTIMONIALS, INVESTMENT_PROJECTS } from '../data';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface HomeViewProps {
  onNavigate: (view: string, filters?: any) => void;
  onViewProperty: (id: string) => void;
  savedPropertyIds: string[];
  onToggleSaveProperty: (id: string) => void;
  onOpenInspection: (propId?: string) => void;
  onOpenGuide: () => void;
}

export default function HomeView({
  onNavigate,
  onViewProperty,
  savedPropertyIds,
  onToggleSaveProperty,
  onOpenInspection,
  onOpenGuide,
}: HomeViewProps) {
  // Search state
  const [searchLocation, setSearchLocation] = useState('');
  const [searchType, setSearchType] = useState('');
  const [searchBudget, setSearchBudget] = useState('');
  const [searchTitle, setSearchTitle] = useState('');
  const [searchPlan, setSearchPlan] = useState('');
  const [searchCategory, setSearchCategory] = useState('');

  // Local inline booking state
  const [inlineName, setInlineName] = useState('');
  const [inlinePhone, setInlinePhone] = useState('');
  const [inlineEmail, setInlineEmail] = useState('');
  const [inlineProp, setInlineProp] = useState('');
  const [inlineDate, setInlineDate] = useState('');
  const [inlineTime, setInlineTime] = useState('');
  const [inlineRequests, setInlineRequests] = useState('');
  const [inlineSuccess, setInlineSuccess] = useState(false);

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    onNavigate('listings', {
      location: searchLocation,
      type: searchType,
      budget: searchBudget,
      title: searchTitle,
      paymentPlan: searchPlan,
      category: searchCategory,
    });
  };

  const handleInlineBook = (e: React.FormEvent) => {
    e.preventDefault();
    if (!inlineName.trim() || !inlinePhone.trim() || !inlineEmail.trim() || !inlineDate || !inlineTime) {
      return;
    }

    const booking = {
      id: 'book-inline-' + Math.random().toString(36).substr(2, 9),
      name: inlineName,
      phone: inlinePhone,
      email: inlineEmail,
      propertyId: inlineProp,
      propertyName: PROPERTIES.find(p => p.id === inlineProp)?.title || 'General Property Consultation',
      preferredDate: inlineDate,
      preferredTime: inlineTime,
      specialRequests: inlineRequests,
      createdAt: new Date().toISOString()
    };

    // Save
    const existing = JSON.parse(localStorage.getItem('vestpoint_bookings') || '[]');
    existing.push(booking);
    localStorage.setItem('vestpoint_bookings', JSON.stringify(existing));

    setInlineSuccess(true);
  };

  const handleResetInlineBook = () => {
    setInlineSuccess(false);
    setInlineName('');
    setInlinePhone('');
    setInlineEmail('');
    setInlineProp('');
    setInlineDate('');
    setInlineTime('');
    setInlineRequests('');
  };

  // Curate 3 featured properties
  const featuredProperties = PROPERTIES.filter(p => p.isFeatured).slice(0, 3);

  // Format currency helper
  const formatNaira = (num: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(num).replace('NGN', '₦');
  };

  return (
    <div className="space-y-20 pb-16 font-sans">
      
      {/* 1. Hero Section */}
      <section className="relative min-h-[85vh] lg:h-[90vh] flex items-center bg-brand-charcoal text-white overflow-hidden py-16 px-4" id="hero-section">
        {/* Background Premium Image Overlay */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80"
            alt="Luxury Lagos Skyline Development"
            className="w-full h-full object-cover opacity-25"
            referrerPolicy="no-referrer"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-brand-charcoal via-brand-charcoal/90 to-brand-charcoal/50" />
        </div>

        <div className="max-w-7xl mx-auto w-full z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Hero text */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <span className="inline-flex items-center gap-1.5 bg-brand-orange/15 border border-brand-orange/30 text-brand-orange text-xs font-bold font-mono px-3.5 py-1.5 rounded-full uppercase tracking-wider">
              <Award className="w-4 h-4 animate-pulse" />
              <span>Nigeria's Premier Property Advisory Firm</span>
            </span>
            <h1 className="font-display font-bold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight">
              Helping You Build Wealth Through <span className="text-brand-orange">Smart Real Estate</span> Investments
            </h1>
            <p className="text-gray-300 text-base sm:text-lg max-w-2xl leading-relaxed">
              Discover verified land, luxury homes, and secure high-return investment opportunities across Nigeria (Lagos, Abuja, Enugu, PH, Oyo, Ogun, etc.) and abroad, with expert legal compliance guidance every step of the way.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 pt-4">
              <button
                onClick={() => onNavigate('listings')}
                className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-4 rounded-xl text-sm font-display uppercase tracking-widest transition-all cursor-pointer shadow-lg hover:shadow-brand-orange/30 text-center"
                id="hero-cta-properties"
              >
                Browse Properties
              </button>
              <button
                onClick={() => onOpenInspection()}
                className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-4 rounded-xl text-sm font-display uppercase tracking-widest border border-white/20 transition-all cursor-pointer text-center"
                id="hero-cta-inspection"
              >
                Book Free Inspection
              </button>
              <button
                onClick={() => window.open('https://wa.me/2348030564502?text=Hello%20Vestpoint%2C%20I%20am%20interested%20in%20real%20estate%20investment.%20Please%20assign%20an%20advisor.', '_blank')}
                className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold px-8 py-4 rounded-xl text-sm font-display uppercase tracking-widest transition-all cursor-pointer flex items-center justify-center gap-2 text-center"
                id="hero-cta-whatsapp"
              >
                <MessageSquare className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </button>
            </div>

            {/* Micro proof points */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-gray-800 text-left max-w-lg">
              <div>
                <span className="block font-mono text-2xl font-bold text-brand-orange">150</span>
                <span className="text-xs text-gray-400">Transactions Secured</span>
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-brand-orange">100</span>
                <span className="text-xs text-gray-400">Verified Legal Titles</span>
              </div>
              <div>
                <span className="block font-mono text-2xl font-bold text-brand-orange">70</span>
                <span className="text-xs text-gray-400">Diaspora Investors</span>
              </div>
            </div>
          </div>

          {/* Luxury Banner Feature right block */}
          <div className="lg:col-span-5 hidden lg:block relative">
            <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-brand-orange to-brand-orange-dark opacity-30 blur-lg" />
            <div className="relative bg-brand-charcoal border border-gray-800 rounded-2xl p-6 space-y-4 shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80"
                alt="Lekki Ambiance Height Apartment"
                className="w-full aspect-[4/3] object-cover rounded-xl border border-gray-800"
                referrerPolicy="no-referrer"
              />
              <div className="flex justify-between items-start">
                <div>
                  <span className="text-[10px] bg-brand-orange-light text-brand-orange px-2 py-0.5 rounded font-mono font-bold uppercase">
                    Featured Asset
                  </span>
                  <h3 className="font-display font-bold text-base text-white mt-1">Ambiance Height Apartment</h3>
                  <p className="text-xs text-gray-400">Lekki Phase 1, Lagos • 2 Beds Maisonette</p>
                </div>
                <div className="text-right">
                  <span className="text-[10px] text-gray-500 font-mono block">Outright Sale</span>
                  <span className="font-mono font-bold text-brand-orange text-sm">₦250,000,000</span>
                </div>
              </div>
              <button
                onClick={() => onViewProperty('prop-1')}
                className="w-full bg-white hover:bg-brand-orange hover:text-white text-brand-charcoal text-xs font-bold py-3 rounded-lg font-display uppercase tracking-wider transition-all cursor-pointer flex items-center justify-center gap-1.5"
              >
                <span>Read Advisory Prospectus</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Smart Property Search */}
      <section className="max-w-7xl mx-auto px-4 -mt-16 relative z-20" id="search-section">
        <form onSubmit={handleSearch} className="bg-white rounded-2xl shadow-xl border border-gray-100 p-6 md:p-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Location */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Property Location</label>
            <select
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-orange bg-gray-50 font-medium"
            >
              <option value="">All Regions</option>
              <option value="Ikoyi">Ikoyi, Lagos</option>
              <option value="Lekki Phase 1">Lekki, Lagos</option>
              <option value="Abuja">Abuja (FCT)</option>
              <option value="Enugu">Enugu State</option>
              <option value="Port Harcourt">Port Harcourt (PH)</option>
              <option value="Ogun">Ogun State</option>
              <option value="Oyo">Oyo State</option>
              <option value="Epe">Epe, Lagos</option>
              <option value="Ibeju-Lekki">Ibeju-Lekki, Lagos</option>
              <option value="Abroad">International / Abroad</option>
            </select>
          </div>

          {/* Property Type */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Property Type</label>
            <select
              value={searchType}
              onChange={(e) => setSearchType(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-orange bg-gray-50 font-medium"
            >
              <option value="">All Types</option>
              <option value="Apartment">Apartment</option>
              <option value="Duplex">Duplex / Terraces</option>
              <option value="Penthouse">Luxury Penthouse</option>
              <option value="Land Plot">Land Plot</option>
              <option value="Commercial Space">Commercial Space</option>
              <option value="Cashback Opportunity">Cashback Opportunity</option>
              <option value="Buy to Resell">Buy to Resell</option>
              <option value="REITs">REITs</option>
              <option value="Agricultural Land">Agricultural Land</option>
            </select>
          </div>

          {/* Budget */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold text-gray-700 uppercase tracking-wider">Budget Layout</label>
            <select
              value={searchBudget}
              onChange={(e) => setSearchBudget(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-3 focus:outline-none focus:border-brand-orange bg-gray-50 font-medium"
            >
              <option value="">Any Budget</option>
              <option value="under20m">Under ₦20 Million</option>
              <option value="20mto100m">₦20 Million - ₦100 Million</option>
              <option value="100mto250m">₦100 Million - ₦250 Million</option>
              <option value="over250m">Above ₦250 Million</option>
            </select>
          </div>

          {/* Search Button */}
          <div className="flex items-end">
            <button
              type="submit"
              className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg flex items-center justify-center gap-2 font-display uppercase tracking-wider text-xs shadow transition-all cursor-pointer h-[46px]"
              id="search-submit-btn"
            >
              <Search className="w-4 h-4" />
              <span>Search Database</span>
            </button>
          </div>

          {/* Secondary filter collapsibles */}
          <div className="sm:col-span-2 lg:col-span-4 border-t border-gray-100 pt-4 mt-2 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Legal Title:</span>
              <select
                value={searchTitle}
                onChange={(e) => setSearchTitle(e.target.value)}
                className="text-xs border-none bg-transparent font-semibold text-brand-charcoal focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="">All (C of O / Consent)</option>
                <option value="C of O">Certificate of Occupancy</option>
                <option value="Governor's Consent">Governor's Consent</option>
                <option value="Registered Survey">Registered Survey</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Payment Plan:</span>
              <select
                value={searchPlan}
                onChange={(e) => setSearchPlan(e.target.value)}
                className="text-xs border-none bg-transparent font-semibold text-brand-charcoal focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="">All Payment Options</option>
                <option value="Outright">Outright Discount</option>
                <option value="6 Months">6 Months Instalment</option>
                <option value="12 Months">12 Months Instalment</option>
                <option value="24 Months">24 Months Instalment</option>
              </select>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-[10px] font-bold text-gray-400 uppercase">Category:</span>
              <select
                value={searchCategory}
                onChange={(e) => setSearchCategory(e.target.value)}
                className="text-xs border-none bg-transparent font-semibold text-brand-charcoal focus:outline-none focus:ring-0 cursor-pointer"
              >
                <option value="">All Categories</option>
                <option value="luxury">Luxury Homes Collection</option>
                <option value="land">Premium Land Assets</option>
                <option value="investment">High-Yield Investment Plans</option>
              </select>
            </div>
          </div>
        </form>
      </section>

      {/* 3. Featured Properties */}
      <section className="max-w-7xl mx-auto px-4 space-y-10" id="featured-section">
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Exclusive Listings
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Our Featured Premium Real Estate
          </h2>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Every property listed below has undergone rigorous title authentication and physical mapping to guarantee legally secure transactions and immediate equity.
          </p>
        </div>

        {/* Card grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onViewDetails={onViewProperty}
              isSaved={savedPropertyIds.includes(prop.id)}
              onToggleSave={onToggleSaveProperty}
            />
          ))}
        </div>

        <div className="text-center pt-4">
          <button
            onClick={() => onNavigate('listings')}
            className="inline-flex items-center gap-2 border-2 border-brand-charcoal text-brand-charcoal hover:bg-brand-orange hover:border-brand-orange hover:text-white text-xs font-bold font-display uppercase tracking-widest px-6 py-3.5 rounded-lg transition-all cursor-pointer"
            id="view-all-properties-btn"
          >
            <span>View All Properties Portfolio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </section>

      {/* 4. Why Choose Vestpoint (Bento Grid) */}
      <section className="bg-brand-charcoal text-white py-20 px-4" id="why-choose-us-section">
        <div className="max-w-7xl mx-auto space-y-14">
          <div className="text-center space-y-2 max-w-2xl mx-auto">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
              The Vestpoint Integrity Guarantee
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight">
              Why Discerning Investors Trust Us
            </h2>
            <p className="text-sm text-gray-400 leading-relaxed">
              We operate differently. Rather than rushing sales, we act as compliance consultants to ensure your capital is anchored in secure, legally protected, high-ROI physical assets.
            </p>
          </div>

          {/* Bento Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            
            {/* Box 1 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4 hover:border-brand-orange transition-all group">
              <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">100% Verified Properties</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We handle comprehensive charting at the Alausa Lands Registry, physical coords vetting, and title auditing before exposing any property to the market. Zero 'Omo-Onile' issues, zero government acquisition overlap.
              </p>
            </div>

            {/* Box 2 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4 hover:border-brand-orange transition-all group">
              <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                <Compass className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Strategic Investment Advisory</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                We don't sell randomly. We analyze infrastructure direction (Dangote Refinery, Alaro City, Lekki Deep Sea Port) to secure your money in areas with high-velocity appreciation.
              </p>
            </div>

            {/* Box 3 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4 hover:border-brand-orange transition-all group">
              <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                <DollarSign className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Transparent Transactions</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                No hidden fees, no agency surprises, and zero legal ambiguity. Every contract, surveyor chart, and corporate transaction account is laid out with absolute precision.
              </p>
            </div>

            {/* Box 4 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4 hover:border-brand-orange transition-all group">
              <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                <Calendar className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Flexible Payment Structures</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Own secure property comfortably with low initial commitments and interest-free payment plans stretched across 6, 12, or 24 months.
              </p>
            </div>

            {/* Box 5 */}
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 space-y-4 hover:border-brand-orange transition-all group">
              <div className="bg-brand-orange/10 text-brand-orange w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                <Globe className="w-6 h-6" />
              </div>
              <h3 className="font-display font-bold text-lg text-white">Diaspora Representation</h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Over 250 Nigerians living in the UK, USA, Canada, and Europe use our remote advisory framework to acquire, verify, and monitor properties securely.
              </p>
            </div>

            {/* Box 6 */}
            <div className="bg-brand-orange/10 border border-brand-orange/30 rounded-2xl p-6 space-y-4 flex flex-col justify-between">
              <div className="space-y-2">
                <span className="text-[10px] uppercase font-mono bg-brand-orange text-white px-2.5 py-1 rounded font-bold inline-block">
                  Download 2026 Prospectus
                </span>
                <h3 className="font-display font-bold text-lg text-white">National & International Wealth Study</h3>
                <p className="text-xs text-gray-300 leading-relaxed">
                  Get our exclusive, data-driven report analyzing high-growth investment nodes in Lagos, Abuja, Enugu, Port Harcourt, and abroad.
                </p>
              </div>
              <button
                onClick={onOpenGuide}
                className="bg-white hover:bg-brand-charcoal hover:text-white text-brand-charcoal text-xs font-bold py-3 px-4 rounded-xl font-display uppercase tracking-wider transition-colors cursor-pointer text-center flex items-center justify-center gap-2"
              >
                <Download className="w-4 h-4" />
                <span>Get PDF Report</span>
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* 5. Investment Opportunities */}
      <section className="max-w-7xl mx-auto px-4 space-y-12" id="investment-opportunities-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            High-Yield Projects
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            High-ROI Investment Opportunities
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Curated investment proposals matching premium capital appreciations with robust legal title shields across fast-expanding zones in Lagos, Abuja, Enugu, Port Harcourt, and abroad.
          </p>
        </div>

        {/* Project proposal cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {INVESTMENT_PROJECTS.map((proj) => (
            <div key={proj.id} className="bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
              <div>
                <div className="relative aspect-[16/10] overflow-hidden">
                  <img src={proj.image} alt={proj.title} className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                  <div className="absolute top-4 right-4 bg-brand-charcoal/90 border border-brand-orange/30 text-brand-orange text-xs font-mono font-bold px-2.5 py-1 rounded">
                    Expected: {proj.expectedAppreciation}
                  </div>
                </div>

                <div className="p-5 space-y-3">
                  <span className="text-[10px] font-bold text-brand-orange uppercase tracking-wider font-mono">
                    📍 {proj.location}
                  </span>
                  <h3 className="font-display font-bold text-lg text-brand-charcoal">{proj.title}</h3>
                  <p className="text-xs text-gray-500 leading-relaxed">{proj.description}</p>
                  
                  <div className="border-t border-gray-100 pt-3 space-y-2">
                    <p className="text-xs text-gray-600 flex items-center justify-between">
                      <span className="font-semibold">Minimum Entry:</span>
                      <span className="font-mono text-brand-charcoal font-bold">{formatNaira(proj.minInvestment)}</span>
                    </p>
                    <p className="text-xs text-gray-600 flex items-center justify-between">
                      <span className="font-semibold">Projected Growth:</span>
                      <span className="text-brand-green font-semibold">{proj.roi}</span>
                    </p>
                    <p className="text-xs text-gray-600 flex items-center justify-between">
                      <span className="font-semibold">Payment Layout:</span>
                      <span className="text-gray-500 text-[11px] truncate max-w-[160px]">{proj.paymentPlan}</span>
                    </p>
                  </div>
                </div>
              </div>

              <div className="p-5 border-t border-gray-50 bg-gray-50/50">
                <button
                  onClick={onOpenGuide}
                  className="w-full bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold font-display uppercase tracking-wider py-3 px-4 rounded-xl transition-colors cursor-pointer text-center"
                >
                  Download Prospectus Guide
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Our Process */}
      <section className="bg-brand-grey py-16 px-4 border-y border-gray-100" id="process-section">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-2 max-w-xl mx-auto">
            <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
              The Journey to Secure Ownership
            </span>
            <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
              Our Simple 5-Step Acquisition Process
            </h2>
            <p className="text-sm text-gray-500 leading-relaxed">
              We have completely streamlined property purchase, removing standard hassles and assuring full legal security.
            </p>
          </div>

          {/* Connected Steps */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6 relative">
            {[
              { num: '01', title: 'Advisory Consultation', desc: 'Connect with a senior compliance advisor to align budgets, objectives, and investment timelines.' },
              { num: '02', title: 'Property Selection', desc: 'Select from our highly curated portfolio of legally pre-charted land and premium homes.' },
              { num: '03', title: 'Physical / Virtual Tour', desc: 'Inspect properties physically in our executive cars or stream virtual drone inspections.' },
              { num: '04', title: 'Legal Documentation', desc: 'Execute contracts of sale, receive surveyors charts, and obtain registered Deed documents.' },
              { num: '05', title: 'Allocation & Ownership', desc: 'Take immediate possession of your physical coordinates with complete corporate guarantees.' }
            ].map((step, idx) => (
              <div key={idx} className="bg-white rounded-xl p-5 border border-gray-100 shadow-sm relative group hover:border-brand-orange transition-all">
                <span className="font-mono text-3xl font-extrabold text-brand-orange/25 group-hover:text-brand-orange transition-colors">
                  {step.num}
                </span>
                <h3 className="font-display font-bold text-sm text-brand-charcoal mt-2.5">
                  {step.title}
                </h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Client Testimonials */}
      <section className="max-w-7xl mx-auto px-4 space-y-12" id="testimonials-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Client Success
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            What Our Partners Say About Us
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Real stories of wealth creation, title security, and seamless purchases from local and international clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {TESTIMONIALS.map((t) => (
            <div key={t.id} className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm flex flex-col justify-between hover:shadow-md transition-all">
              <div className="space-y-4">
                <div className="flex gap-0.5 text-amber-500">
                  {Array.from({ length: t.rating }).map((_, i) => (
                    <Star key={i} className="w-4.5 h-4.5 fill-current" />
                  ))}
                </div>
                <p className="text-xs text-gray-600 italic leading-relaxed">
                  "{t.quote}"
                </p>
              </div>
              <div className="flex items-center gap-3 pt-6 border-t border-gray-50 mt-6">
                <img src={t.image} alt={t.name} className="w-11 h-11 rounded-full object-cover border border-gray-100" referrerPolicy="no-referrer" />
                <div>
                  <h4 className="font-display font-bold text-xs text-brand-charcoal">{t.name}</h4>
                  <p className="text-[10px] text-gray-400">{t.role}</p>
                  <span className="text-[10px] text-brand-orange font-medium block mt-0.5">{t.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Educational Section */}
      <section className="max-w-7xl mx-auto px-4 space-y-10" id="education-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Knowledge Hub
          </span>
          <h2 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Latest Real Estate Advice & Insights
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We prioritize education over aggressive selling. Equip yourself with insights directly from our legal and investment compliance advisors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {BLOG_ARTICLES.slice(0, 3).map((article) => (
            <div key={article.id} className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-md transition-all flex flex-col justify-between">
              <div>
                <img src={article.image} alt={article.title} className="w-full aspect-[16/10] object-cover" referrerPolicy="no-referrer" />
                <div className="p-5 space-y-2.5">
                  <span className="text-[10px] uppercase font-mono font-bold bg-brand-orange-light text-brand-orange px-2 py-0.5 rounded border border-brand-orange/10">
                    {article.category}
                  </span>
                  <h3 className="font-display font-bold text-base text-brand-charcoal line-clamp-2 hover:text-brand-orange transition-colors">
                    {article.title}
                  </h3>
                  <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>
              </div>

              <div className="p-5 border-t border-gray-50 flex justify-between items-center bg-gray-50/50">
                <span className="text-[10px] text-gray-400 font-mono font-medium">{article.date} • {article.readTime}</span>
                <button
                  onClick={() => onNavigate('blog')}
                  className="text-xs font-bold text-brand-orange flex items-center gap-1 hover:text-brand-orange-dark cursor-pointer font-display uppercase tracking-wider"
                >
                  <span>Read Article</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 9. Book Property Inspection Form (Inline) */}
      <section className="bg-white border border-gray-100 shadow-sm rounded-2xl max-w-4xl mx-auto px-6 py-10 md:p-12 text-center space-y-8" id="book-tour-inline-section">
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Complimentary Logistics
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Schedule a Free Inspection Tour
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our daily physical inspection tours leave our Ikoyi office in fully air-conditioned corporate vehicles, accompanied by an executive advisor. For international buyers, we provide high-definition drone virtual streams.
          </p>
        </div>

        {inlineSuccess ? (
          <div className="bg-emerald-50 border border-emerald-100 p-8 rounded-2xl max-w-md mx-auto space-y-4 animate-fade-in">
            <CheckCircle2 className="w-12 h-12 text-emerald-600 mx-auto" />
            <h3 className="font-display font-bold text-lg text-emerald-800">Site Tour Scheduled!</h3>
            <p className="text-xs text-emerald-700 leading-relaxed">
              Thank you, **{inlineName}**. We have booked your site inspection slot. A Vestpoint consultant will reach out via **{inlinePhone}** or **{inlineEmail}** shortly to verify transportation arrangements.
            </p>
            <button
              onClick={handleResetInlineBook}
              className="bg-brand-charcoal text-white text-xs font-bold px-6 py-2.5 rounded-lg font-display uppercase tracking-widest cursor-pointer"
            >
              Book Another Tour
            </button>
          </div>
        ) : (
          <form onSubmit={handleInlineBook} className="grid grid-cols-1 md:grid-cols-2 gap-4 text-left max-w-2xl mx-auto">
            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-700 uppercase">Full Name *</label>
              <input
                type="text"
                required
                placeholder="Enter your name"
                value={inlineName}
                onChange={(e) => setInlineName(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-700 uppercase">Phone / WhatsApp *</label>
              <input
                type="tel"
                required
                placeholder="e.g. +234..."
                value={inlinePhone}
                onChange={(e) => setInlinePhone(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-[10px] font-bold text-gray-700 uppercase">Email Address *</label>
              <input
                type="email"
                required
                placeholder="name@example.com"
                value={inlineEmail}
                onChange={(e) => setInlineEmail(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="space-y-1">
              <label className="text-[10px] font-bold text-gray-700 uppercase">Select Target Asset</label>
              <select
                value={inlineProp}
                onChange={(e) => setInlineProp(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange cursor-pointer font-medium"
              >
                <option value="">General Consultation Study</option>
                {PROPERTIES.map((p) => (
                  <option key={p.id} value={p.id}>
                    [{p.type}] {p.title}
                  </option>
                ))}
              </select>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-700 uppercase">Date *</label>
                <input
                  type="date"
                  required
                  min={new Date().toISOString().split('T')[0]}
                  value={inlineDate}
                  onChange={(e) => setInlineDate(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 bg-gray-50 focus:outline-none focus:border-brand-orange"
                />
              </div>
              <div className="space-y-1">
                <label className="text-[10px] font-bold text-gray-700 uppercase">Time Slot *</label>
                <select
                  required
                  value={inlineTime}
                  onChange={(e) => setInlineTime(e.target.value)}
                  className="w-full text-xs border border-gray-200 rounded-lg p-2 bg-gray-50 focus:outline-none focus:border-brand-orange cursor-pointer"
                >
                  <option value="">Select slot</option>
                  <option value="9am-11am">9:00 AM</option>
                  <option value="11:30am-1:30pm">11:30 AM</option>
                  <option value="2pm-4pm">2:00 PM</option>
                </select>
              </div>
            </div>

            <div className="space-y-1 md:col-span-2">
              <label className="text-[10px] font-bold text-gray-700 uppercase">Special Instructions</label>
              <textarea
                placeholder="State any specific details or request virtual video drone stream instead of physical tour."
                value={inlineRequests}
                onChange={(e) => setInlineRequests(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 h-16 focus:outline-none focus:border-brand-orange"
              />
            </div>

            <div className="md:col-span-2 pt-2">
              <button
                type="submit"
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg font-display uppercase tracking-widest text-xs shadow-md cursor-pointer transition-all"
              >
                Schedule Site Tour Now
              </button>
            </div>
          </form>
        )}
      </section>

      {/* 10. WhatsApp Floating section */}
      <section className="bg-emerald-550 bg-gradient-to-r from-emerald-600 to-teal-700 text-white rounded-2xl max-w-5xl mx-auto p-8 sm:p-12 text-center space-y-6 relative overflow-hidden shadow-xl" id="whatsapp-outro-section">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#fff_1px,transparent_1px)] [background-size:16px_16px]" />
        <div className="max-w-xl mx-auto space-y-3 relative z-10">
          <span className="text-[10px] bg-emerald-500/30 text-emerald-100 font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Direct Advisor Access
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Need Immediate Assistance?</h2>
          <p className="text-xs text-emerald-100 leading-relaxed">
            Skip forms and talk directly with one of our certified, on-the-ground property consultants. We can send instant site tour recordings, survey layouts, and price listings via WhatsApp.
          </p>
          <div className="pt-4 flex justify-center">
            <button
              onClick={() => window.open('https://wa.me/2348030564502?text=Hello%20Vestpoint%2C%20I%20am%20looking%20for%20assistance%20with%20buying%20verified%20properties.%20Can%20I%20speak%20with%20an%20advisor%3F', '_blank')}
              className="bg-white hover:bg-emerald-50 text-emerald-700 font-bold px-8 py-3.5 rounded-xl transition-all font-display uppercase tracking-widest text-xs flex items-center gap-2 cursor-pointer shadow-md"
            >
              <MessageSquare className="w-4 h-4 text-emerald-500" />
              <span>Connect Instantly via WhatsApp</span>
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
