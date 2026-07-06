/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { BookOpen, Calendar, Clock, User, ArrowLeft, Search, ShieldCheck, HelpCircle, ArrowRight, Sparkles } from 'lucide-react';
import { BLOG_ARTICLES } from '../data';
import { BlogArticle } from '../types';

export default function BlogView() {
  // States
  const [selectedArticleId, setSelectedArticleId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('');

  // Get active selected article object
  const activeArticle = BLOG_ARTICLES.find((art) => art.id === selectedArticleId);

  // Filter logic
  const filteredArticles = BLOG_ARTICLES.filter((art) => {
    // 1. Category
    if (selectedCategory !== '' && art.category !== selectedCategory) {
      return false;
    }
    // 2. Search query
    if (searchQuery.trim() !== '') {
      const q = searchQuery.toLowerCase();
      const match =
        art.title.toLowerCase().includes(q) ||
        art.excerpt.toLowerCase().includes(q) ||
        art.author.toLowerCase().includes(q);
      if (!match) return false;
    }
    return true;
  });

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-12 font-sans" id="blog-hub-container">
      
      {/* 1. Header Banner (only show if not reading a single article) */}
      {!activeArticle && (
        <div className="text-center space-y-2">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Compliance Advisory Hub
          </span>
          <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Vestpoint Real Estate Education Desk
          </h1>
          <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
            Avoid costly transaction mistakes. Read through our deep, simplified compliance journals covering land titles, surveyor verification steps, and safe diaspora transfers.
          </p>
        </div>
      )}

      {/* 2. Main content router */}
      {activeArticle ? (
        
        /* SINGLE ARTICLE DETAILED DIGITAL READER */
        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-10 text-left max-w-4xl mx-auto space-y-8 animate-fade-in" id="article-reader">
          
          {/* Back Action Bar */}
          <button
            onClick={() => setSelectedArticleId(null)}
            className="flex items-center gap-2 text-xs font-bold text-brand-orange uppercase tracking-wider hover:text-brand-orange-dark transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Back to Educational Hub</span>
          </button>

          {/* Featured Image */}
          <div className="rounded-xl overflow-hidden aspect-[16/9] bg-brand-charcoal">
            <img
              src={activeArticle.image}
              alt={activeArticle.title}
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>

          {/* Metadata Block */}
          <div className="space-y-4">
            <div className="flex flex-wrap gap-4 text-xs text-gray-400 font-mono">
              <span className="text-brand-orange font-bold uppercase tracking-wider bg-brand-orange-light px-2.5 py-0.5 rounded">
                {activeArticle.category}
              </span>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" />
                <span>{activeArticle.date}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" />
                <span>{activeArticle.readTime}</span>
              </span>
              <span className="flex items-center gap-1.5">
                <User className="w-3.5 h-3.5 text-brand-orange" />
                <span>Written by {activeArticle.author}</span>
              </span>
            </div>

            <h1 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal leading-tight">
              {activeArticle.title}
            </h1>
          </div>

          {/* Simulated educational HTML content text */}
          <div className="text-xs sm:text-sm text-gray-650 leading-relaxed space-y-6">
            <p className="font-semibold text-brand-charcoal text-base">
              {activeArticle.excerpt}
            </p>
            
            <p>
              In Lagos real estate, the word "Verification" must be treated with absolute gravity. Thousands of local and diaspora land buyers lose millions of Naira annually simply because they accepted a seller’s photocopy documents without carrying out secondary physical coordinates charting. 
            </p>

            <div className="bg-brand-grey p-5 border-l-4 border-brand-orange rounded-r-xl space-y-2">
              <h4 className="font-display font-bold text-brand-charcoal text-sm flex items-center gap-1.5">
                <ShieldCheck className="w-4.5 h-4.5 text-brand-orange" />
                <span>The Golden Rule of coordinates charting</span>
              </h4>
              <p className="text-xs text-gray-500 leading-relaxed">
                Before releasing any down-payments, hire an independent licensed surveyor to physically visit the site with a dual-frequency GNSS receiver. Log the exact global coordinates of the boundaries, and crosscheck them at the Surveyor General’s Office in Alausa to verify if the land falls under excision, gazette layout, or general government acquisition.
              </p>
            </div>

            <p>
              Another primary compliance failure is bypassing the official Lands Registry search. While a property owner may showcase a certified Certificate of Occupancy (C of O), only a formal registry search can confirm that there are no registered encumbrances or mortgages tied to the title. 
            </p>

            <h3 className="font-display font-bold text-base text-brand-charcoal pt-4 border-t border-gray-100">
              Senior Advisor's Final Checklist
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-xs">
              <li>Confirm physical beacons are laid in perfect sync with the survey coordinates.</li>
              <li>Ask for the CAC registration certificate of the vendor/developer if buying an estate plot.</li>
              <li>Always execute a Deed of Assignment signed by all principal partners of the family or estate firm.</li>
              <li>Formally lodge your registered survey and apply for Governor’s Consent immediately to secure terminal state title registry.</li>
            </ul>

            <p>
              At Vestpoint Properties Limited, our legal desk oversees this entire workflow on behalf of clients. We verify every title history so you can invest with total peace of mind.
            </p>
          </div>

          {/* Outro Advisor Card */}
          <div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center gap-4 justify-between">
            <div className="flex items-center gap-3">
              <div className="bg-brand-orange-light text-brand-orange w-10 h-10 rounded-full flex items-center justify-center font-bold">
                VP
              </div>
              <div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Vestpoint Compliance Desk</h4>
                <p className="text-[11px] text-gray-400">Trusted advisory team for local & international investors</p>
              </div>
            </div>

            <button
              onClick={() => setSelectedArticleId(null)}
              className="bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold py-2.5 px-6 rounded-lg uppercase tracking-wider font-display transition-colors cursor-pointer"
            >
              Back to Articles
            </button>
          </div>

        </article>

      ) : (
        
        /* EDUCATIONAL MAIN DIRECTORY VIEW */
        <div className="space-y-8">
          
          {/* Controls Bar */}
          <div className="bg-white rounded-2xl border border-gray-100 p-6 flex flex-col md:flex-row gap-4 items-center justify-between shadow-sm">
            
            {/* Search Input */}
            <div className="relative w-full md:max-w-md">
              <input
                type="text"
                placeholder="Search advisory articles, author, keywords..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs border border-gray-200 bg-gray-50 rounded-xl pl-10 pr-4 py-3 focus:outline-none focus:border-brand-orange font-medium"
              />
              <Search className="absolute left-3.5 top-3.5 w-4 h-4 text-gray-400" />
            </div>

            {/* Category Select Filters */}
            <div className="flex flex-wrap gap-2 w-full md:w-auto justify-end">
              <button
                onClick={() => setSelectedCategory('')}
                className={`text-xs px-3.5 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  selectedCategory === ''
                    ? 'bg-brand-charcoal text-white shadow'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                All Articles
              </button>
              <button
                onClick={() => setSelectedCategory('Legal Compliance')}
                className={`text-xs px-3.5 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  selectedCategory === 'Legal Compliance'
                    ? 'bg-brand-orange text-white shadow'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                Legal Title Guidance
              </button>
              <button
                onClick={() => setSelectedCategory('Investment Guide')}
                className={`text-xs px-3.5 py-2 rounded-lg font-bold transition-colors cursor-pointer ${
                  selectedCategory === 'Investment Guide'
                    ? 'bg-emerald-700 text-white shadow'
                    : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                }`}
              >
                Investment Analysis
              </button>
            </div>

          </div>

          {/* Articles Listing Grid */}
          {filteredArticles.length === 0 ? (
            <div className="text-center py-12 bg-white border border-gray-100 rounded-2xl max-w-sm mx-auto space-y-3">
              <HelpCircle className="w-10 h-10 text-brand-orange mx-auto opacity-70" />
              <h3 className="font-display font-bold text-base text-brand-charcoal">No Articles Found</h3>
              <p className="text-xs text-gray-500">
                We couldn't find educational articles matching your search phrase. Try selecting all articles.
              </p>
              <button
                onClick={() => { setSearchQuery(''); setSelectedCategory(''); }}
                className="text-xs bg-brand-charcoal text-white font-bold py-2 px-4 rounded-lg uppercase cursor-pointer"
              >
                Reset Search
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredArticles.map((art) => (
                <div
                  key={art.id}
                  onClick={() => setSelectedArticleId(art.id)}
                  className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all text-left flex flex-col justify-between group cursor-pointer"
                >
                  <div>
                    {/* Cover image */}
                    <div className="aspect-[16/10] overflow-hidden bg-brand-charcoal relative">
                      <img
                        src={art.image}
                        alt={art.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-350"
                        referrerPolicy="no-referrer"
                      />
                      <span className="absolute top-3 left-3 bg-white/95 text-[10px] text-brand-orange font-bold uppercase tracking-wider px-2.5 py-1 rounded shadow-sm font-mono">
                        {art.category}
                      </span>
                    </div>

                    <div className="p-5 space-y-3">
                      {/* Meta reading stats */}
                      <div className="flex gap-4 text-[10px] text-gray-400 font-mono">
                        <span className="flex items-center gap-1">
                          <Calendar className="w-3 h-3" />
                          <span>{art.date}</span>
                        </span>
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          <span>{art.readTime}</span>
                        </span>
                      </div>

                      {/* Title & snippet */}
                      <h3 className="font-display font-bold text-base text-brand-charcoal group-hover:text-brand-orange transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                      <p className="text-xs text-gray-500 line-clamp-3 leading-relaxed">
                        {art.excerpt}
                      </p>
                    </div>
                  </div>

                  {/* Read More button */}
                  <div className="p-5 pt-0 border-t border-gray-50 mt-auto flex items-center justify-between text-xs font-bold text-brand-orange">
                    <span className="flex items-center gap-1">
                      <BookOpen className="w-3.5 h-3.5" />
                      <span>{art.author}</span>
                    </span>
                    <span className="flex items-center gap-1 group-hover:gap-2 transition-all">
                      <span>Read Advisory Article</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </span>
                  </div>

                </div>
              ))}
            </div>
          )}

        </div>
      )}

    </div>
  );
}
