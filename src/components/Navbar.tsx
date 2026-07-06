/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { Menu, X, Phone, Mail, Award, Globe, Building } from 'lucide-react';
import { VestpointLogo } from './VestpointLogo';

interface NavbarProps {
  currentView: string;
  onNavigate: (view: string) => void;
  onOpenInspection: () => void;
}

export default function Navbar({ currentView, onNavigate, onOpenInspection }: NavbarProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'listings', label: 'Properties' },
    { id: 'investments', label: 'Investments' },
    { id: 'luxury', label: 'Luxury Homes' },
    { id: 'land', label: 'Land Sales' },
    { id: 'about', label: 'About Us' },
    { id: 'blog', label: 'Educational Hub' },
    { id: 'contact', label: 'Contact' },
  ];

  const handleNavClick = (viewId: string) => {
    onNavigate(viewId);
    setIsOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="w-full z-50 transition-all duration-300">
      {/* Top Utility Information Bar */}
      <div className="w-full bg-brand-charcoal text-white text-xs py-2 px-4 border-b border-gray-800">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-2">
          <div className="flex items-center gap-4 text-gray-300">
            <span className="flex items-center gap-1">
              <Phone className="w-3.5 h-3.5 text-brand-orange" />
              <span>+234 803 056 4502</span>
            </span>
            <span className="flex items-center gap-1">
              <Mail className="w-3.5 h-3.5 text-brand-orange" />
              <span>vestpointproperties@gmail.com</span>
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1 text-xs text-brand-orange bg-brand-orange-light/10 px-2 py-0.5 rounded border border-brand-orange/20">
              <Globe className="w-3 h-3 animate-pulse" />
              <span>Diaspora Support Desk Active</span>
            </span>
            <span className="text-gray-400 hidden sm:inline">Lagos Office: Ketu, Lagos</span>
          </div>
        </div>
      </div>

      {/* Main Sticky Navbar */}
      <nav
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? 'sticky top-0 bg-white shadow-md py-3 border-b border-gray-100'
            : 'bg-white py-4 border-b border-gray-100'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Brand Logo & Name */}
          <button
            onClick={() => handleNavClick('home')}
            className="flex items-center group text-left cursor-pointer"
            id="nav-logo-btn"
          >
            <VestpointLogo variant="light" className="h-14 sm:h-18 md:h-22" />
          </button>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex items-center gap-1 xl:gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => handleNavClick(item.id)}
                className={`px-3 py-2 rounded-md font-medium text-sm transition-all cursor-pointer ${
                  currentView === item.id
                    ? 'text-brand-orange bg-brand-orange-light'
                    : 'text-gray-600 hover:text-brand-orange hover:bg-gray-50'
                }`}
                id={`nav-link-${item.id}`}
              >
                {item.label}
              </button>
            ))}
          </div>

          {/* Call To Action Buttons */}
          <div className="hidden md:flex items-center gap-3">
            <button
              onClick={onOpenInspection}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm hover:shadow transition-all cursor-pointer font-display uppercase tracking-wider"
              id="nav-cta-inspection"
            >
              Book Inspection
            </button>
          </div>

          {/* Mobile Menu Trigger Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="lg:hidden p-2 text-brand-charcoal hover:bg-gray-50 rounded-lg cursor-pointer"
            id="mobile-menu-trigger"
            aria-label="Toggle Navigation Menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {isOpen && (
          <div className="lg:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl z-50 animate-fade-in">
            <div className="px-4 py-3 space-y-1 bg-gray-50/50">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`w-full text-left px-4 py-3 rounded-lg text-base font-semibold transition-colors flex items-center justify-between ${
                    currentView === item.id
                        ? 'text-brand-orange bg-brand-orange-light font-bold'
                        : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  id={`mobile-nav-link-${item.id}`}
                >
                  <span>{item.label}</span>
                  {currentView === item.id && (
                    <div className="w-1.5 h-1.5 rounded-full bg-brand-orange" />
                  )}
                </button>
              ))}
              <div className="pt-4 pb-2 px-4 space-y-3">
                <button
                  onClick={() => {
                    setIsOpen(false);
                    onOpenInspection();
                  }}
                  className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3 px-4 rounded-lg text-center font-display uppercase tracking-wider text-sm shadow-sm transition-all block"
                  id="mobile-nav-cta-inspection"
                >
                  Book Free Inspection
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
