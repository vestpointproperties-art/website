/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { Target, Eye, ShieldCheck, Heart, Award, Users, BookOpen, Clock, Phone, Mail, MapPin } from 'lucide-react';

interface AboutViewProps {
  onOpenInspection: () => void;
  onNavigate: (view: string) => void;
}

export default function AboutView({ onOpenInspection, onNavigate }: AboutViewProps) {
  
  const coreValues = [
    {
      title: "Absolute Transparency",
      desc: "We lay out every title history, CAC credential, and survey coordinate up-front. No hidden development levies, no agent surprises.",
      icon: <ShieldCheck className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Compliance First",
      desc: "Our legal compliance desk charts every single coordinate at the official Lands Registries (Alausa in Lagos, AGIS in Abuja, and other state GIS departments) before any listings exposure. If it isn't 100% free, we don't sell it.",
      icon: <Award className="w-6 h-6 text-brand-orange" />
    },
    {
      title: "Long-Term Wealth Advocacy",
      desc: "We view real estate as a compound asset. We focus on securing long-term wealth, capital appreciation, and reliable rental yields for clients.",
      icon: <Target className="w-6 h-6 text-brand-orange" />
    }
  ];

  const team = [
    {
      name: "Dr. Olumide Adebayo",
      role: "Managing Director / CEO",
      desc: "Alumnus of Lagos Business School with over 15 years of structured real estate brokerage and corporate investment compliance experience across Nigeria and West Africa.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=300&h=300&q=80"
    },
    {
      name: "Franklin Adebayo",
      role: "Senior Real Estate Advisor (Verified BRG Partner)",
      desc: "Specialist in land banking portfolios, luxury residential acquisitions, and macroeconomic investment matching for local and diaspora investors.",
      image: "/src/assets/images/franklin_adebayo.jpg"
    },
    {
      name: "Barr. Chidi Okechukwu",
      role: "Head, Legal & Title Compliance Desk",
      desc: "Ex-compliance counsel at Alausa Land Registry, specializing in property conveyancing, surveyor GPS coordinates charting, and secure diaspora contracts.",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=300&h=300&q=80"
    }
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-20 font-sans" id="about-us-container">
      
      {/* 1. Page Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
          Our Company Profile
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
          Who We Are: Vestpoint Properties Limited
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Nigeria's premier real estate brokerage and property investment advisory firm, helping clients build secure wealth through verified assets across Nigeria and abroad, with our head office currently based in Lagos.
        </p>
      </div>

      {/* 2. Company Story & Vision */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center" id="company-story-section">
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Est. 2018
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal leading-tight">
            Redefining Property Acquisition across Nigeria & Beyond
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Vestpoint Properties Limited was established to address the primary failure point in Nigerian and international real estate: **Trust**. For years, local buyers and diaspora Nigerians struggled to buy properties in major hubs like Lagos, Abuja, Enugu, Port Harcourt, Oyo, Ogun, and internationally due to title scams, communal disputes, or diverted funds.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed">
            We redrafted the rulebook. By integrating licensed surveyors, lands compliance attorneys, and data-driven investment advisors directly into our corporate staff, we established a robust shield. Every property on our roster goes through rigorous coordinates charting and legal vetting (via Alausa for Lagos, AGIS for Abuja, and state registries) before being presented. While our head office is currently based in Lagos, our operations and vetted listings span nationwide and abroad.
          </p>
          <p className="text-sm text-gray-600 leading-relaxed font-semibold text-brand-orange">
            We are not simply brokers; we are your lifelong real estate advisory partners, focusing on wealth compounding, transparency, and bulletproof security.
          </p>
        </div>

        {/* Vision/Mission right stack (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-4 items-start text-left">
            <div className="bg-brand-orange-light p-3 rounded-xl border border-brand-orange/10 text-brand-orange shrink-0">
              <Target className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-charcoal">Our Corporate Mission</h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">
                To simplify and secure real estate ownership across Nigeria and abroad, enabling local and international investors to build wealth confidently through certified, pre-vetted, and high-yielding assets.
              </p>
            </div>
          </div>

          <div className="bg-white rounded-2xl border border-gray-100 p-6 shadow-sm flex gap-4 items-start text-left">
            <div className="bg-brand-orange-light p-3 rounded-xl border border-brand-orange/10 text-brand-orange shrink-0">
              <Eye className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-display font-bold text-base text-brand-charcoal">Our Vision</h3>
              <p className="text-xs text-gray-500 leading-relaxed mt-1">
                To stand as West Africa’s most trusted, transparent, and client-centric real estate brand—recognized as the premier gateway for confident, hands-free diaspora investments.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Core values */}
      <section className="space-y-12" id="core-values-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Guiding Principles
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Our Core Corporate Values
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Every transaction we advise, coordinate, or execute is guided by our three core operational pillars.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {coreValues.map((val, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm text-left space-y-4 hover:border-brand-orange transition-all">
              <div className="bg-brand-orange-light w-12 h-12 rounded-xl flex items-center justify-center border border-brand-orange/20">
                {val.icon}
              </div>
              <h3 className="font-display font-bold text-lg text-brand-charcoal">{val.title}</h3>
              <p className="text-xs text-gray-500 leading-relaxed">{val.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Meet the Team */}
      <section className="space-y-12" id="team-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Expert Advisory Staff
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Meet Our Senior Leadership Team
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            Combining legal expertise, Surveyor General compliance, and wealth coaching to protect and compound your funds.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {team.map((member, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all text-left flex flex-col justify-between">
              <div>
                <img src={member.image} alt={member.name} className="w-full aspect-square object-cover" referrerPolicy="no-referrer" />
                <div className="p-6 space-y-2">
                  <h3 className="font-display font-bold text-lg text-brand-charcoal">{member.name}</h3>
                  <span className="text-xs text-brand-orange font-bold font-mono uppercase block">
                    {member.role}
                  </span>
                  <p className="text-xs text-gray-500 leading-relaxed">
                    {member.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 5. Corporate achievements */}
      <section className="bg-brand-charcoal text-white rounded-2xl p-8 sm:p-12 text-center space-y-10 shadow-xl border border-gray-800" id="achievements-section">
        <div className="space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-mono text-brand-orange font-bold uppercase tracking-widest">
            Corporate Footprint
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl">Our Key Milestones & Achievements</h2>
          <p className="text-xs text-gray-400">
            Backed by years of secure physical transactions and certified CAC registrations.
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-orange block">1,000+</span>
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Plots Safely Allocated</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-orange block">0 Cases</span>
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Title Disputes or Litigation</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-orange block">₦45B+</span>
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Asset Capital Secured</span>
          </div>
          <div className="space-y-1">
            <span className="font-mono text-3xl sm:text-4xl font-extrabold text-brand-orange block">100%</span>
            <span className="text-[10px] sm:text-xs text-gray-400 uppercase tracking-wider font-semibold">Compliance Rating</span>
          </div>
        </div>
      </section>

      {/* 6. Consultation CTA */}
      <section className="bg-white border border-gray-100 shadow-sm rounded-2xl max-w-4xl mx-auto p-8 sm:p-12 text-center space-y-6" id="about-outro-section">
        <div className="max-w-xl mx-auto space-y-3">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Partner with Vestpoint
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight">
            Ready to Begin Your Real Estate Portfolio?
          </h2>
          <p className="text-xs text-gray-500 leading-relaxed">
            Our daily physical site inspections in fully air-conditioned executive vehicles leave our office Monday through Saturday. For international diaspora buyers, we provide high-definition drone virtual streams.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={onOpenInspection}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all font-display uppercase tracking-widest text-xs cursor-pointer shadow"
            >
              Book Complimentary Site Tour
            </button>
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-charcoal hover:bg-brand-orange text-white font-bold px-8 py-3.5 rounded-xl transition-all font-display uppercase tracking-widest text-xs cursor-pointer"
            >
              Schedule Office Consultation
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
