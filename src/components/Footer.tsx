/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Mail, Phone, MapPin, Clock, Facebook, Instagram, Linkedin, Send, CheckCircle2, ShieldCheck } from 'lucide-react';
import { VestpointLogo } from './VestpointLogo';

interface FooterProps {
  onNavigate: (view: string) => void;
}

export default function Footer({ onNavigate }: FooterProps) {
  const [subName, setSubName] = useState('');
  const [subEmail, setSubEmail] = useState('');
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [error, setError] = useState('');

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!subName.trim() || !subEmail.trim()) {
      setError('Please provide both your name and email.');
      return;
    }
    
    // Save to local storage simulated subscribers
    const existing = JSON.parse(localStorage.getItem('vestpoint_subscribers') || '[]');
    existing.push({ name: subName, email: subEmail, date: new Date().toISOString() });
    localStorage.setItem('vestpoint_subscribers', JSON.stringify(existing));

    setIsSubscribed(true);
    setSubName('');
    setSubEmail('');
    setError('');
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-charcoal text-gray-300 pt-16 pb-8 border-t border-gray-800 font-sans" id="app-footer">
      <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
        {/* Company Overview column */}
        <div className="space-y-4">
          <div className="flex items-center text-white">
            <VestpointLogo variant="dark" className="h-10 md:h-12" />
          </div>
          <p className="text-sm text-gray-400 leading-relaxed">
            Vestpoint Properties Limited is Nigeria’s premier real estate brokerage and investment advisory firm. We empower local and diaspora investors to securely acquire verified land, luxury residences, and high-ROI investments across Nigeria (Lagos, Abuja, Enugu, PH, Oyo, Ogun, etc.) and abroad, with our head office currently based in Lagos.
          </p>
          <div className="flex items-center gap-3 pt-2">
            <a href="https://facebook.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
              <Facebook className="w-4 h-4" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
              <Instagram className="w-4 h-4" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noreferrer" className="w-8 h-8 rounded-full bg-gray-800 flex items-center justify-center hover:bg-brand-orange hover:text-white transition-all">
              <Linkedin className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Quick Links Column */}
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-6 border-l-2 border-brand-orange pl-3">
            Quick Navigation
          </h3>
          <ul className="space-y-3 text-sm">
            {[
              { id: 'home', label: 'Home Page' },
              { id: 'listings', label: 'Verified Properties' },
              { id: 'investments', label: 'Investment Hub' },
              { id: 'luxury', label: 'Luxury Homes Collection' },
              { id: 'land', label: 'Land Sales Portfolio' },
              { id: 'about', label: 'Company Profile & Story' },
              { id: 'blog', label: 'Real Estate Education' },
              { id: 'contact', label: 'Get in Touch' },
            ].map((link) => (
              <li key={link.id}>
                <button
                  onClick={() => {
                    onNavigate(link.id);
                    window.scrollTo({ top: 0, behavior: 'smooth' });
                  }}
                  className="hover:text-brand-orange hover:translate-x-1 transition-all text-left cursor-pointer"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>

        {/* Contacts Column */}
        <div className="space-y-6">
          <div>
            <h3 className="font-display font-semibold text-white text-base mb-6 border-l-2 border-brand-orange pl-3">
              Office HQ
            </h3>
            <ul className="space-y-4 text-sm">
              <li className="flex items-start gap-2.5">
                <MapPin className="w-5 h-5 text-brand-orange shrink-0 mt-0.5" />
                <span className="text-gray-400">
                  Ketu, Lagos, Nigeria.
                </span>
              </li>
              <li className="flex items-center gap-2.5">
                <Phone className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-gray-400">+234 803 056 4502</span>
              </li>
              <li className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-brand-orange shrink-0" />
                <span className="text-gray-400">vestpointproperties@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-medium text-white text-sm mb-2 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-brand-orange" />
              <span>Business Hours</span>
            </h4>
            <p className="text-xs text-gray-400 pl-5 leading-relaxed">
              Mon - Sat: 8:00 AM - 6:00 PM<br />
              Sunday (Virtual Consultations): 12:00 PM - 5:00 PM
            </p>
          </div>
        </div>

        {/* Newsletter Column */}
        <div>
          <h3 className="font-display font-semibold text-white text-base mb-6 border-l-2 border-brand-orange pl-3">
            Market Intelligence
          </h3>
          <p className="text-sm text-gray-400 leading-relaxed mb-4">
            Stay ahead of Nigeria's rapid property market with premium newsletters, ROI updates, and alerts on verified listings.
          </p>

          {isSubscribed ? (
            <div className="bg-brand-orange-light/10 border border-brand-orange/30 rounded-lg p-4 text-center">
              <CheckCircle2 className="w-8 h-8 text-brand-orange mx-auto mb-2" />
              <h4 className="text-white text-sm font-bold font-display">Subscription Active!</h4>
              <p className="text-xs text-gray-400 mt-1">
                You are now subscribed to Vestpoint property updates.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubscribe} className="space-y-3">
              <div>
                <input
                  type="text"
                  placeholder="Your Name"
                  value={subName}
                  onChange={(e) => setSubName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg py-2 px-3 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
              </div>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Your Email Address"
                  value={subEmail}
                  onChange={(e) => setSubEmail(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 text-white placeholder-gray-500 rounded-lg py-2 pl-3 pr-10 text-sm focus:outline-none focus:border-brand-orange transition-colors"
                  required
                />
                <button
                  type="submit"
                  className="absolute right-1.5 top-1.5 p-1.5 bg-brand-orange hover:bg-brand-orange-dark text-white rounded transition-colors"
                  aria-label="Subscribe"
                >
                  <Send className="w-3.5 h-3.5" />
                </button>
              </div>
              {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
              <div className="flex items-center gap-1.5 text-[10px] text-gray-500 font-mono mt-2">
                <ShieldCheck className="w-3.5 h-3.5 text-brand-orange" />
                <span>Zero spam. Secure compliance.</span>
              </div>
            </form>
          )}
        </div>
      </div>

      {/* Under-Footer Legal Line */}
      <div className="max-w-7xl mx-auto px-4 border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500">
        <p>© {currentYear} Vestpoint Properties Limited. RC: 1827464. All Rights Reserved.</p>
        <div className="flex items-center gap-6">
          <a href="#privacy" className="hover:text-white transition-colors">Privacy Policy</a>
          <a href="#terms" className="hover:text-white transition-colors">Terms of Engagement</a>
          <a href="#compliance" className="hover:text-white transition-colors">CAC Verification</a>
        </div>
      </div>
    </footer>
  );
}
