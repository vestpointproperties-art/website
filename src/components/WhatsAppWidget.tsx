/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MessageSquare, Send, X, ShieldCheck } from 'lucide-react';

export default function WhatsAppWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [userMessage, setUserMessage] = useState('');
  const [showNotification, setShowNotification] = useState(false);

  useEffect(() => {
    // Show a small notification toast after 5 seconds to prompt the user
    const timer = setTimeout(() => {
      setShowNotification(true);
    }, 5000);
    return () => clearTimeout(timer);
  }, []);

  const preFilledMessages = [
    'Hello Vestpoint, I am interested in property investments across Nigeria.',
    'I want to inquire about land options in Epe/Ibeju-Lekki.',
    'Can I get details on your luxury listings in Ikoyi/Lekki?',
    'Hi, I am living in the diaspora and want to consult on buying land safely.',
  ];

  const handleStartChat = (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const text = encodeURIComponent(userMessage || 'Hello Vestpoint, I would like to make an inquiry.');
    const whatsappUrl = `https://wa.me/2348030564502?text=${text}`;
    window.open(whatsappUrl, '_blank', 'noopener,noreferrer');
    setIsOpen(false);
  };

  const selectPrompt = (msg: string) => {
    setUserMessage(msg);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40 font-sans" id="whatsapp-assistance-widget">
      {/* Notification Bubble for attention */}
      {showNotification && !isOpen && (
        <div className="absolute bottom-16 right-2 bg-white text-brand-charcoal text-xs p-3.5 rounded-xl shadow-xl border border-gray-100 w-64 animate-bounce duration-1000">
          <div className="flex justify-between items-start mb-1">
            <span className="font-semibold text-brand-orange">Consultant Online</span>
            <button
              onClick={(e) => {
                e.stopPropagation();
                setShowNotification(false);
              }}
              className="text-gray-400 hover:text-gray-600 cursor-pointer"
            >
              <X className="w-3 h-3" />
            </button>
          </div>
          <p className="text-gray-600 text-[11px] leading-relaxed">
            "Hi there! I’m Franklin, your senior advisor. Looking for secure land or a luxury home today? Let's chat!"
          </p>
        </div>
      )}

      {/* Main floating action button */}
      <button
        onClick={() => {
          setIsOpen(!isOpen);
          setShowNotification(false);
        }}
        className="w-14 h-14 rounded-full bg-emerald-500 text-white flex items-center justify-center shadow-lg hover:shadow-2xl hover:scale-105 transition-all cursor-pointer border border-emerald-400"
        aria-label="Chat on WhatsApp"
        id="whatsapp-fab"
      >
        {isOpen ? <X className="w-6 h-6" /> : <MessageSquare className="w-6 h-6" />}
      </button>

      {/* Interactive Chat Dialog */}
      {isOpen && (
        <div className="absolute bottom-16 right-0 bg-white rounded-2xl shadow-2xl border border-gray-100 w-[350px] overflow-hidden animate-fade-in">
          {/* Header */}
          <div className="bg-emerald-600 text-white p-4">
            <div className="flex items-center gap-3">
              <div className="relative">
                <img
                  src="/src/assets/images/franklin_adebayo.jpg"
                  alt="Franklin Adebayo"
                  className="w-10 h-10 rounded-full object-cover border border-emerald-400"
                />
                <div className="absolute bottom-0 right-0 w-3 h-3 rounded-full bg-green-400 border-2 border-emerald-600" />
              </div>
              <div>
                <h4 className="font-display font-bold text-sm">Franklin Adebayo</h4>
                <p className="text-xs text-emerald-100">Senior Advisor • Verified BRG Partner</p>
              </div>
            </div>
            <p className="text-xs text-emerald-50 mt-3 leading-relaxed">
              We help you acquire legally secured, verified lands and premium luxury homes across Nigeria and abroad. Ask me anything!
            </p>
          </div>

          {/* Chat Body */}
          <div className="p-4 bg-gray-50 max-h-72 overflow-y-auto">
            <p className="text-[10px] text-gray-400 font-semibold uppercase tracking-wider mb-2">
              Select an Inquiry Topic
            </p>
            <div className="space-y-1.5">
              {preFilledMessages.map((msg, idx) => (
                <button
                  key={idx}
                  onClick={() => selectPrompt(msg)}
                  className={`w-full text-left p-2.5 rounded-lg text-xs transition-all border ${
                    userMessage === msg
                      ? 'bg-emerald-50 border-emerald-400 text-emerald-800 font-medium'
                      : 'bg-white border-gray-100 hover:border-emerald-300 hover:bg-gray-50 text-gray-700'
                  }`}
                >
                  {msg}
                </button>
              ))}
            </div>
          </div>

          {/* Chat Form */}
          <form onSubmit={handleStartChat} className="p-3 border-t border-gray-100 bg-white">
            <div className="relative flex items-center">
              <input
                type="text"
                placeholder="Type your question..."
                value={userMessage}
                onChange={(e) => setUserMessage(e.target.value)}
                className="w-full text-xs border border-gray-200 rounded-lg py-2.5 pl-3 pr-10 focus:outline-none focus:border-emerald-500 focus:ring-1 focus:ring-emerald-500"
              />
              <button
                type="submit"
                className="absolute right-1.5 p-1.5 bg-emerald-500 hover:bg-emerald-600 text-white rounded-md transition-colors"
                aria-label="Send WhatsApp Inquiry"
              >
                <Send className="w-3.5 h-3.5" />
              </button>
            </div>
            <div className="flex items-center gap-1 text-[9px] text-gray-400 mt-2 font-mono">
              <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
              <span>Response in under 5 minutes</span>
            </div>
          </form>
        </div>
      )}
    </div>
  );
}
