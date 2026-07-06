/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import WhatsAppWidget from './components/WhatsAppWidget';
import InspectionModal from './components/InspectionModal';
import InvestmentGuideModal from './components/InvestmentGuideModal';
import PropertyDetailModal from './components/PropertyDetailModal';

// Views
import HomeView from './components/HomeView';
import ListingsView from './components/ListingsView';
import InvestmentsView from './components/InvestmentsView';
import LuxuryView from './components/LuxuryView';
import LandView from './components/LandView';
import AboutView from './components/AboutView';
import BlogView from './components/BlogView';
import ContactView from './components/ContactView';

export default function App() {
  // Navigation State
  const [currentView, setCurrentView] = useState<string>('home');
  const [activeFilters, setActiveFilters] = useState<any>(null);

  // Global Saved/Favorites List
  const [savedPropertyIds, setSavedPropertyIds] = useState<string[]>([]);

  // Modal Triggers
  const [selectedPropertyId, setSelectedPropertyId] = useState<string | null>(null);
  const [isInspectionOpen, setIsInspectionOpen] = useState<boolean>(false);
  const [inspectionPreselectId, setInspectionPreselectId] = useState<string | undefined>(undefined);
  const [isGuideOpen, setIsGuideOpen] = useState<boolean>(false);

  // Load favorites from local storage on mount
  useEffect(() => {
    try {
      const stored = localStorage.getItem('vestpoint_saved_properties');
      if (stored) {
        setSavedPropertyIds(JSON.parse(stored));
      }
    } catch (e) {
      console.warn("Could not read saved properties from local storage", e);
    }
  }, []);

  // Sync scroll to top on routing changes
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [currentView]);

  // Handle saving/unsaving properties
  const handleToggleSaveProperty = (id: string) => {
    let updated: string[];
    if (savedPropertyIds.includes(id)) {
      updated = savedPropertyIds.filter((item) => item !== id);
    } else {
      updated = [...savedPropertyIds, id];
    }
    setSavedPropertyIds(updated);
    try {
      localStorage.setItem('vestpoint_saved_properties', JSON.stringify(updated));
    } catch (e) {
      console.warn("Could not write saved properties to local storage", e);
    }
  };

  // Advanced router transitions from search clicks
  const handleNavigateWithFilters = (view: string, filters?: any) => {
    setActiveFilters(filters || null);
    setCurrentView(view);
  };

  // Open property inspection with optional preset property
  const handleOpenInspection = (propId?: string) => {
    setInspectionPreselectId(propId);
    setIsInspectionOpen(true);
  };

  // Render current active sub-page view
  const renderActiveView = () => {
    switch (currentView) {
      case 'listings':
        return (
          <ListingsView
            initialFilters={activeFilters}
            onViewProperty={setSelectedPropertyId}
            savedPropertyIds={savedPropertyIds}
            onToggleSaveProperty={handleToggleSaveProperty}
          />
        );
      case 'investments':
        return (
          <InvestmentsView
            onOpenGuide={() => setIsGuideOpen(true)}
            onNavigate={handleNavigateWithFilters}
          />
        );
      case 'luxury':
        return (
          <LuxuryView
            onViewProperty={setSelectedPropertyId}
            savedPropertyIds={savedPropertyIds}
            onToggleSaveProperty={handleToggleSaveProperty}
          />
        );
      case 'land':
        return (
          <LandView
            onViewProperty={setSelectedPropertyId}
            savedPropertyIds={savedPropertyIds}
            onToggleSaveProperty={handleToggleSaveProperty}
            onOpenInspection={handleOpenInspection}
          />
        );
      case 'about':
        return (
          <AboutView
            onOpenInspection={() => handleOpenInspection()}
            onNavigate={handleNavigateWithFilters}
          />
        );
      case 'blog':
        return <BlogView />;
      case 'contact':
        return <ContactView />;
      case 'home':
      default:
        return (
          <HomeView
            onNavigate={handleNavigateWithFilters}
            onViewProperty={setSelectedPropertyId}
            onOpenInspection={handleOpenInspection}
            onOpenGuide={() => setIsGuideOpen(true)}
            savedPropertyIds={savedPropertyIds}
            onToggleSaveProperty={handleToggleSaveProperty}
          />
        );
    }
  };

  return (
    <div className="min-h-screen bg-brand-grey flex flex-col justify-between text-brand-charcoal selection:bg-brand-orange selection:text-white" id="vestpoint-master-shell">
      
      {/* Navigation Header */}
      <Navbar
        currentView={currentView}
        onNavigate={handleNavigateWithFilters}
        onOpenInspection={() => handleOpenInspection()}
      />

      {/* Main Page Area */}
      <main className="flex-grow pt-26 pb-12">
        {renderActiveView()}
      </main>

      {/* Footer Navigation */}
      <Footer onNavigate={handleNavigateWithFilters} />

      {/* Floating Sticky Actions */}
      <WhatsAppWidget />

      {/* Global Modals overlay stack */}
      {isInspectionOpen && (
        <InspectionModal
          isOpen={isInspectionOpen}
          onClose={() => setIsInspectionOpen(false)}
          preselectedPropertyId={inspectionPreselectId}
        />
      )}

      {isGuideOpen && (
        <InvestmentGuideModal
          isOpen={isGuideOpen}
          onClose={() => setIsGuideOpen(false)}
        />
      )}

      {selectedPropertyId && (
        <PropertyDetailModal
          propertyId={selectedPropertyId}
          onClose={() => setSelectedPropertyId(null)}
          onOpenInspection={handleOpenInspection}
          isSaved={savedPropertyIds.includes(selectedPropertyId)}
          onToggleSave={handleToggleSaveProperty}
          onSelectProperty={setSelectedPropertyId}
        />
      )}

    </div>
  );
}
