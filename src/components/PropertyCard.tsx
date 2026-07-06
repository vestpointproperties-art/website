/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { MapPin, ShieldCheck, Share2, Heart, Eye, ArrowRight, BedDouble, Bath, Maximize } from 'lucide-react';
import { Property } from '../types';

interface PropertyCardProps {
  key?: React.Key;
  property: Property;
  onViewDetails: (id: string) => void;
  isSaved: boolean;
  onToggleSave: (id: string) => void;
}

export default function PropertyCard({ property, onViewDetails, isSaved, onToggleSave }: PropertyCardProps) {
  const [showShareTooltip, setShowShareTooltip] = useState(false);
  const [copied, setCopied] = useState(false);

  // Format currency helper
  const formatNaira = (num: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(num).replace('NGN', '₦');
  };

  const handleShare = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowShareTooltip(!showShareTooltip);
    if (!showShareTooltip) {
      setCopied(false);
    }
  };

  const copyLink = (e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/property/${property.id}`;
    navigator.clipboard.writeText(url).then(() => {
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowShareTooltip(false);
      }, 2000);
    }).catch(() => {
      // fallback
      setCopied(true);
      setTimeout(() => {
        setCopied(false);
        setShowShareTooltip(false);
      }, 2000);
    });
  };

  return (
    <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col h-full font-sans group relative">
      {/* Top badges & Image container */}
      <div className="relative overflow-hidden aspect-[4/3] shrink-0">
        <img
          src={property.image}
          alt={property.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          referrerPolicy="no-referrer"
        />
        
        {/* Absolute Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-60" />

        {/* Investment and Category Badges */}
        <div className="absolute top-4 left-4 flex flex-col gap-1.5 items-start">
          {property.isLuxury && (
            <span className="bg-brand-charcoal/90 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded font-display font-semibold border border-brand-orange/30">
              Luxury Collection
            </span>
          )}
          {property.isLand && (
            <span className="bg-emerald-700/95 text-white text-[10px] uppercase tracking-widest px-2.5 py-1 rounded font-display font-semibold">
              Estate Land
            </span>
          )}
          <span className="bg-brand-orange text-white text-[10px] uppercase tracking-wider px-2.5 py-1 rounded font-bold shadow-sm">
            {property.type}
          </span>
        </div>

        {/* Action Overlays: Save & Share */}
        <div className="absolute top-4 right-4 flex flex-col gap-2">
          <button
            onClick={() => onToggleSave(property.id)}
            className={`w-9 h-9 rounded-full flex items-center justify-center transition-all shadow-md cursor-pointer ${
              isSaved
                ? 'bg-rose-500 text-white hover:bg-rose-600 scale-110'
                : 'bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-rose-500'
            }`}
            aria-label="Save Property"
          >
            <Heart className={`w-4.5 h-4.5 ${isSaved ? 'fill-current' : ''}`} />
          </button>
          
          <div className="relative">
            <button
              onClick={handleShare}
              className="w-9 h-9 rounded-full bg-white/80 backdrop-blur-sm text-gray-700 hover:bg-white hover:text-brand-orange flex items-center justify-center transition-all shadow-md cursor-pointer"
              aria-label="Share Property"
            >
              <Share2 className="w-4.5 h-4.5" />
            </button>

            {/* Share Tooltip */}
            {showShareTooltip && (
              <div className="absolute right-0 top-11 bg-brand-charcoal text-white text-xs p-2.5 rounded-lg shadow-xl border border-gray-800 z-10 w-44 animate-fade-in text-center">
                <p className="font-semibold text-gray-300 mb-1.5">Share with others</p>
                <button
                  onClick={copyLink}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white text-[11px] font-bold py-1.5 px-2 rounded tracking-wide transition-all cursor-pointer font-sans"
                >
                  {copied ? 'Copied Link!' : 'Copy Property Link'}
                </button>
              </div>
            )}
          </div>
        </div>

        {/* Legal Title badge on image */}
        <div className="absolute bottom-3 left-4 flex items-center gap-1 bg-white/95 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-mono font-bold text-brand-charcoal shadow-sm border border-gray-100">
          <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
          <span>Title: {property.titleType}</span>
        </div>
      </div>

      {/* Property Details */}
      <div className="p-5 flex-grow flex flex-col justify-between">
        <div className="space-y-2">
          {/* Location Marker */}
          <div className="flex items-center gap-1 text-gray-500 text-xs font-medium">
            <MapPin className="w-3.5 h-3.5 text-brand-orange shrink-0" />
            <span className="truncate">{property.location}</span>
          </div>

          {/* Title */}
          <h4 className="font-display font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors line-clamp-1">
            {property.title}
          </h4>

          {/* Sizing and basic parameters */}
          <div className="flex items-center gap-3 pt-1 border-t border-gray-50 text-xs text-gray-500 font-mono">
            <span className="flex items-center gap-1">
              <Maximize className="w-3.5 h-3.5 text-gray-400" />
              <span>{property.size}</span>
            </span>
            {property.bedrooms !== undefined && (
              <span className="flex items-center gap-1">
                <BedDouble className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.bedrooms} Bed</span>
              </span>
            )}
            {property.bathrooms !== undefined && (
              <span className="flex items-center gap-1">
                <Bath className="w-3.5 h-3.5 text-gray-400" />
                <span>{property.bathrooms} Bath</span>
              </span>
            )}
          </div>

          {/* Short description */}
          <p className="text-xs text-gray-500 line-clamp-2 leading-relaxed pt-1">
            {property.description}
          </p>
        </div>

        {/* Footer Area: Price & CTA */}
        <div className="pt-4 mt-4 border-t border-gray-100 flex items-center justify-between">
          <div>
            <span className="text-[9px] uppercase tracking-widest text-gray-400 font-semibold font-mono block">
              Investment Pricing
            </span>
            <span className="text-brand-charcoal font-mono font-bold text-lg tracking-tight">
              {property.priceLabel ? property.priceLabel : formatNaira(property.price)}
            </span>
          </div>
          
          <button
            onClick={() => onViewDetails(property.id)}
            className="flex items-center gap-1 bg-brand-charcoal hover:bg-brand-orange text-white text-[11px] font-bold font-display uppercase tracking-widest py-2 px-3.5 rounded-lg transition-all cursor-pointer group/btn shadow-sm"
          >
            <span>Explore</span>
            <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
