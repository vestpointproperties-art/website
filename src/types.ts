/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface Property {
  id: string;
  title: string;
  description: string;
  category: 'luxury' | 'land' | 'commercial' | 'residential' | 'investment';
  type: 'Apartment' | 'Duplex' | 'Penthouse' | 'Land Plot' | 'Commercial Space' | 'Maisonette' | 'Bungalow' | 'Cashback Opportunity' | 'Buy to Resell' | 'REITs' | 'Agricultural Land';
  price: number; // in Naira (₦)
  priceLabel?: string; // For customized price formatting (e.g., "From ₦45M")
  location: string; // e.g. "Ikoyi", "Lekki Phase 1", "Epe", "Ibeju-Lekki", "Ikeja GRA"
  size: string; // e.g., "500 SQM", "5 Bedroom Duplex"
  bedrooms?: number;
  bathrooms?: number;
  titleType: 'C of O' | "Governor's Consent" | 'Gazette' | 'Registered Survey' | 'Freehold' | 'Bank Guarantee' | 'Deed of Assignment' | 'Government Allocation';
  paymentPlan: 'Outright' | '6 Months' | '12 Months' | '24 Months';
  image: string;
  images: string[];
  features: string[];
  amenities: string[];
  landmarks: string[];
  roi?: string; // Expected appreciation, e.g., "28% Annual ROI"
  investmentPotential?: string; // Text summary of ROI potential
  isFeatured?: boolean;
  isLuxury?: boolean;
  isLand?: boolean;
  virtualTourUrl?: string;
}

export interface BlogArticle {
  id: string;
  title: string;
  excerpt: string;
  content: string; // Detailed educational content in markdown/paragraphs
  category: 'Buying Guides' | 'Investment' | 'Luxury Living' | 'Property News' | 'Market Trends' | 'Legal Tips';
  author: string;
  date: string;
  image: string;
  readTime: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  location: string; // e.g. "London, UK (Diaspora)", "Lekki, Lagos"
  image: string;
  quote: string;
  rating: number;
}

export interface InspectionBooking {
  id: string;
  name: string;
  phone: string;
  email: string;
  propertyId: string;
  propertyName: string;
  preferredDate: string;
  preferredTime: string;
  specialRequests?: string;
  isVirtual?: boolean;
  createdAt: string;
}

export interface InvestmentProject {
  id: string;
  title: string;
  location: string;
  description: string;
  expectedAppreciation: string;
  minInvestment: number;
  roi: string;
  features: string[];
  image: string;
  paymentPlan: string;
}
