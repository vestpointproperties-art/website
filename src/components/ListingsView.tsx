/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Search, MapPin, Building, ShieldCheck, CreditCard, RotateCcw, AlertCircle, Sparkles } from 'lucide-react';
import { PROPERTIES } from '../data';
import { Property } from '../types';
import PropertyCard from './PropertyCard';

interface ListingsViewProps {
  initialFilters?: any;
  onViewProperty: (id: string) => void;
  savedPropertyIds: string[];
  onToggleSaveProperty: (id: string) => void;
}

export default function ListingsView({
  initialFilters,
  onViewProperty,
  savedPropertyIds,
  onToggleSaveProperty,
}: ListingsViewProps) {
  // Filter States
  const [query, setQuery] = useState('');
  const [location, setLocation] = useState(initialFilters?.location || '');
  const [type, setType] = useState(initialFilters?.type || '');
  const [budget, setBudget] = useState(initialFilters?.budget || '');
  const [title, setTitle] = useState(initialFilters?.title || '');
  const [plan, setPlan] = useState(initialFilters?.paymentPlan || '');
  const [category, setCategory] = useState(initialFilters?.category || '');

  // Synchronize with initial filters if passed from home search
  useEffect(() => {
    if (initialFilters) {
      if (initialFilters.location !== undefined) setLocation(initialFilters.location);
      if (initialFilters.type !== undefined) setType(initialFilters.type);
      if (initialFilters.budget !== undefined) setBudget(initialFilters.budget);
      if (initialFilters.title !== undefined) setTitle(initialFilters.title);
      if (initialFilters.paymentPlan !== undefined) setPlan(initialFilters.paymentPlan);
      if (initialFilters.category !== undefined) setCategory(initialFilters.category);
    }
  }, [initialFilters]);

  const handleReset = () => {
    setQuery('');
    setLocation('');
    setType('');
    setBudget('');
    setTitle('');
    setPlan('');
    setCategory('');
  };

  // Filter Logic
  const filteredProperties = PROPERTIES.filter((prop) => {
    // 1. Text Query Search (title, description, location)
    if (query.trim() !== '') {
      const q = query.toLowerCase();
      const matchText =
        prop.title.toLowerCase().includes(q) ||
        prop.description.toLowerCase().includes(q) ||
        prop.location.toLowerCase().includes(q);
      if (!matchText) return false;
    }

    // 2. Location
    if (location !== '' && !prop.location.toLowerCase().includes(location.toLowerCase())) {
      return false;
    }

    // 3. Type
    if (type !== '' && prop.type !== type) {
      return false;
    }

    // 4. Budget Mapping
    if (budget !== '') {
      const price = prop.price;
      if (budget === 'under20m' && price >= 20000000) return false;
      if (budget === '20mto100m' && (price < 20000000 || price > 100000000)) return false;
      if (budget === '100mto250m' && (price < 100000000 || price > 250000000)) return false;
      if (budget === 'over250m' && price <= 250000000) return false;
    }

    // 5. Title type
    if (title !== '' && prop.titleType !== title) {
      return false;
    }

    // 6. Payment Plan
    if (plan !== '' && prop.paymentPlan !== plan) {
      return false;
    }

    // 7. Category
    if (category !== '') {
      if (category === 'luxury' && !prop.isLuxury) return false;
      if (category === 'land' && !prop.isLand) return false;
      if (category === 'investment' && prop.category !== 'investment') return false;
    }

    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 font-sans" id="listings-view-container">
      {/* Page Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
          Interactive Portfolio
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
          Browse Verified Properties & Lands
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Filter through our absolute catalog of verified real estate across Nigeria and abroad. From high-growth land banking options and premium developments in Lagos, Abuja, Enugu, Port Harcourt, Oyo, and Ogun to prime international opportunities.
        </p>
      </div>

      {/* Advanced Filter Control Bar */}
      <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 space-y-6">
        <div className="flex flex-col lg:flex-row gap-4 items-center justify-between">
          
          {/* Main search input */}
          <div className="relative w-full lg:max-w-md">
            <input
              type="text"
              placeholder="Search by keyword, estate title, landmark..."
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-xl py-3 pl-10 pr-4 focus:outline-none focus:border-brand-orange bg-gray-50 font-medium"
            />
            <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
          </div>

          <div className="flex flex-wrap items-center gap-3 w-full lg:w-auto justify-end">
            <span className="text-xs font-bold text-gray-400 uppercase mr-1">Quick Select Category:</span>
            <button
              onClick={() => setCategory('')}
              className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                category === ''
                  ? 'bg-brand-charcoal text-white shadow-sm font-bold'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              All Assets
            </button>
            <button
              onClick={() => setCategory('luxury')}
              className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                category === 'luxury'
                  ? 'bg-brand-orange text-white shadow-sm font-bold'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Luxury Homes
            </button>
            <button
              onClick={() => setCategory('land')}
              className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                category === 'land'
                  ? 'bg-emerald-700 text-white shadow-sm font-bold'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
              }`}
            >
              Land Sales
            </button>
            <button
              onClick={() => setCategory('investment')}
              className={`text-xs px-3.5 py-2 rounded-lg font-semibold transition-all cursor-pointer ${
                category === 'investment'
                  ? 'bg-brand-orange text-white shadow-sm font-bold'
                  : 'bg-gray-100 hover:bg-gray-200 text-gray-700 border border-brand-orange/10'
              }`}
            >
              🔥 Investment Listings
            </button>
          </div>
        </div>

        {/* Detailed Grid Filter Selections */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-5 gap-4 pt-4 border-t border-gray-100">
          
          {/* Location */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <MapPin className="w-3 h-3 text-brand-orange" />
              <span>Location Region</span>
            </label>
            <select
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange font-medium"
            >
              <option value="">Any Location</option>
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

          {/* Building/Asset Type */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <Building className="w-3 h-3 text-brand-orange" />
              <span>Asset Structure</span>
            </label>
            <select
              value={type}
              onChange={(e) => setType(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange font-medium"
            >
              <option value="">Any Structure</option>
              <option value="Apartment">Apartment</option>
              <option value="Duplex">Duplex / Terrace</option>
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
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <Sparkles className="w-3 h-3 text-brand-orange" />
              <span>Budget Plan</span>
            </label>
            <select
              value={budget}
              onChange={(e) => setBudget(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange font-medium"
            >
              <option value="">Any Budget</option>
              <option value="under20m">Under ₦20 Million</option>
              <option value="20mto100m">₦20 Million - ₦100 Million</option>
              <option value="100mto250m">₦100 Million - ₦250 Million</option>
              <option value="over250m">Above ₦250 Million</option>
            </select>
          </div>

          {/* Title type */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <ShieldCheck className="w-3 h-3 text-brand-orange" />
              <span>Legal Document</span>
            </label>
            <select
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange font-medium"
            >
              <option value="">Any Legal Title</option>
              <option value="C of O">C of O</option>
              <option value="Governor's Consent">Governor's Consent</option>
              <option value="Registered Survey">Registered Survey</option>
              <option value="Gazette">Gazette</option>
              <option value="Government Allocation">Government Allocation</option>
            </select>
          </div>

          {/* Payment Plan */}
          <div className="space-y-1">
            <label className="text-[10px] font-bold text-gray-500 uppercase flex items-center gap-1">
              <CreditCard className="w-3 h-3 text-brand-orange" />
              <span>Payment Installment</span>
            </label>
            <select
              value={plan}
              onChange={(e) => setPlan(e.target.value)}
              className="w-full text-xs border border-gray-200 rounded-lg p-2.5 bg-gray-50 focus:outline-none focus:border-brand-orange font-medium"
            >
              <option value="">Any Installment</option>
              <option value="Outright">Outright Purchase</option>
              <option value="6 Months">6 Months spreads</option>
              <option value="12 Months">12 Months spreads</option>
              <option value="24 Months">24 Months spreads</option>
            </select>
          </div>

        </div>

        {/* Clear Actions and stats */}
        <div className="flex flex-col sm:flex-row gap-3 items-center justify-between pt-4 border-t border-gray-50 text-xs">
          <p className="text-gray-500 font-medium">
            Showing <strong className="text-brand-charcoal">{filteredProperties.length}</strong> verified property results in our portfolio.
          </p>

          <button
            type="button"
            onClick={handleReset}
            className="flex items-center gap-1 text-brand-orange font-bold uppercase tracking-wider hover:text-brand-orange-dark cursor-pointer transition-colors"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Database Filters</span>
          </button>
        </div>
      </div>

      {/* Search Output Section */}
      {filteredProperties.length === 0 ? (
        <div className="bg-white border border-gray-100 rounded-2xl p-12 text-center max-w-md mx-auto space-y-4 shadow-sm animate-fade-in">
          <AlertCircle className="w-12 h-12 text-brand-orange mx-auto opacity-70" />
          <h3 className="font-display font-bold text-lg text-brand-charcoal">No Matching Properties Found</h3>
          <p className="text-xs text-gray-500 leading-relaxed">
            We currently do not have active listings matching your exact parameters. Our compliance advisors add checked coordinates daily. Try widening your criteria or reset filters.
          </p>
          <button
            onClick={handleReset}
            className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold font-display uppercase tracking-widest px-6 py-3 rounded-lg transition-colors cursor-pointer"
          >
            Clear Search Filters
          </button>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-in">
          {filteredProperties.map((prop) => (
            <PropertyCard
              key={prop.id}
              property={prop}
              onViewDetails={onViewProperty}
              isSaved={savedPropertyIds.includes(prop.id)}
              onToggleSave={onToggleSaveProperty}
            />
          ))}
        </div>
      )}
    </div>
  );
}
