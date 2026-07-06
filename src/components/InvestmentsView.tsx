/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { AreaChart, TrendingUp, DollarSign, ArrowUpRight, Award, Compass, Calculator, Clock, HelpCircle, ShieldAlert, Sparkles, Download } from 'lucide-react';
import { INVESTMENT_PROJECTS } from '../data';

interface InvestmentsViewProps {
  onOpenGuide: () => void;
  onNavigate: (view: string, filters?: any) => void;
}

export default function InvestmentsView({ onOpenGuide, onNavigate }: InvestmentsViewProps) {
  // Calculator States
  const [calcProperty, setCalcProperty] = useState('chrysland');
  const [calcAmount, setCalcAmount] = useState(20000000); // 20M Naira
  const [calcYears, setCalcYears] = useState(3);

  // Property profile configuration for ROI calculator
  const calcProfiles: { [key: string]: { rate: number; rentalRate: number; name: string } } = {
    chrysland: { rate: 0.35, rentalRate: 0.0, name: 'Chrysland City Epe (500 SQM Estate Plot)' },
    micasa: { rate: 0.45, rentalRate: 0.0, name: 'Micasa Lagos, Ibeju-Lekki (Commercial Plot)' },
    avana: { rate: 0.30, rentalRate: 0.06, name: 'Lekki Avana Estate Bungalow (Residential / Short-let)' },
    ambiance: { rate: 0.25, rentalRate: 0.08, name: 'Ambiance Height, Lekki Phase 1 (Luxury Maisonette & BQ)' },
    reits: { rate: 0.24, rentalRate: 0.0, name: 'Vestpoint High-Yield Liquid REITs' },
  };

  // Calculations
  const activeProfile = calcProfiles[calcProperty];
  
  // Compound interest: A = P * (1 + r)^t
  const projectedAppreciation = calcAmount * Math.pow(1 + activeProfile.rate, calcYears) - calcAmount;
  const projectedRentalYield = calcAmount * activeProfile.rentalRate * calcYears;
  const totalValuation = calcAmount + projectedAppreciation + projectedRentalYield;
  const netProfit = totalValuation - calcAmount;
  const growthMultiplier = (totalValuation / calcAmount).toFixed(1);

  const formatNaira = (num: number) => {
    return new Intl.NumberFormat('en-NG', {
      style: 'currency',
      currency: 'NGN',
      maximumFractionDigits: 0
    }).format(num).replace('NGN', '₦');
  };

  const handlePropertyChange = (val: string) => {
    setCalcProperty(val);
    if (val === 'chrysland') setCalcAmount(20000000);
    else if (val === 'micasa') setCalcAmount(32400000);
    else if (val === 'avana') setCalcAmount(78000000);
    else if (val === 'ambiance') setCalcAmount(250000000);
    else if (val === 'reits') setCalcAmount(10000000);
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 space-y-16 font-sans" id="investments-hub-container">
      
      {/* Page Header */}
      <div className="text-center space-y-2">
        <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
          Advisory Hub
        </span>
        <h1 className="font-display font-bold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
          Lagos Real Estate Investment Intelligence
        </h1>
        <p className="text-sm text-gray-500 max-w-xl mx-auto leading-relaxed">
          Position your capital securely. We analyze macroeconomic, legal, and structural developments across Lagos to map out high-yielding investment blueprints.
        </p>
      </div>

      {/* 1. Macro Section: Why Invest in Lagos */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
        <div className="lg:col-span-7 space-y-6 text-left">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono bg-brand-orange-light px-3.5 py-1.5 rounded-full border border-brand-orange/15">
            The Lagos Phenomenon
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-brand-charcoal tracking-tight leading-tight">
            Why Lagos is Africa’s Premier Real Estate Goldmine
          </h2>
          <p className="text-sm text-gray-600 leading-relaxed">
            Lagos is Africa's primary financial heartbeat—hosting over 22 million residents inside West Africa’s smallest geographical landmass. This geographic constraint, coupled with a massive inward migration rate of over 2,000 residents daily, creates an unmatched economic supply mismatch.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
            <div className="bg-brand-grey p-4 rounded-xl border border-gray-100 flex gap-3">
              <TrendingUp className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Hyper-Appreciation Loop</h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  Average property values in designated corridors (Epe, Ibeju-Lekki) double every 2.5 to 3 years, heavily outperforming domestic equities.
                </p>
              </div>
            </div>

            <div className="bg-brand-grey p-4 rounded-xl border border-gray-100 flex gap-3">
              <Compass className="w-6 h-6 text-brand-orange shrink-0 mt-0.5" />
              <div>
                <h4 className="font-display font-bold text-sm text-brand-charcoal">Infrastructure Backed Growth</h4>
                <p className="text-xs text-gray-500 leading-relaxed mt-1">
                  Value increases are pinned directly to tangible state projects: Lekki Deep Sea Port, Dangote Petrochemical Refinery, and Metro Line expansions.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Projections Visual Panel */}
        <div className="lg:col-span-5 relative">
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-emerald-600 to-teal-500 opacity-20 blur-lg" />
          <div className="relative bg-white border border-gray-100 shadow-xl rounded-2xl p-6 text-left space-y-4">
            <div className="flex justify-between items-center pb-3 border-b border-gray-50">
              <span className="text-[10px] uppercase font-mono tracking-wider text-emerald-700 font-bold bg-emerald-50 px-2 py-0.5 rounded">
                Macro Projections (2026 - 2030)
              </span>
              <Award className="w-4 h-4 text-emerald-650" />
            </div>

            <ul className="space-y-4 text-xs">
              <li className="flex justify-between">
                <span className="text-gray-500">Ibeju-Lekki Corridor CAGR:</span>
                <span className="font-mono font-bold text-brand-charcoal text-right text-emerald-600">+45% Annual</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Epe Land Banking CAGR:</span>
                <span className="font-mono font-bold text-brand-charcoal text-right text-emerald-600">+35% Annual</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Corporate Rental Yield (Ikoyi):</span>
                <span className="font-mono font-bold text-brand-charcoal text-right text-emerald-600">8% - 11% Annual</span>
              </li>
              <li className="flex justify-between">
                <span className="text-gray-500">Average Inflation Hedge Margin:</span>
                <span className="font-mono font-bold text-brand-charcoal text-right text-emerald-600">+18.5% Net Clear</span>
              </li>
            </ul>

            <button
              onClick={onOpenGuide}
              className="w-full bg-brand-charcoal hover:bg-brand-orange text-white text-xs font-bold py-3 px-4 rounded-xl font-display uppercase tracking-wider transition-colors cursor-pointer text-center flex items-center justify-center gap-2 shadow"
            >
              <Download className="w-4 h-4" />
              <span>Download Macro Prospects Dossier</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Interactive Calculator Section */}
      <section className="bg-brand-charcoal text-white rounded-2xl p-6 sm:p-10 shadow-xl border border-gray-800 space-y-8" id="roi-calculator-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <Calculator className="w-10 h-10 text-brand-orange mx-auto animate-pulse" />
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">Interactive ROI Projection Matrix</h2>
          <p className="text-xs text-gray-400">
            Select an asset class below and simulate capital growth potentials based on target holding horizons. Formulas mirror standard historical Lagos growth curves.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Controls form (5 cols) */}
          <form className="lg:col-span-5 space-y-5 bg-gray-900 border border-gray-800 p-5 rounded-xl text-left text-xs">
            
            {/* Property Category selector */}
            <div className="space-y-1.5">
              <label className="font-semibold text-gray-300">Target Asset Category</label>
              <select
                value={calcProperty}
                onChange={(e) => handlePropertyChange(e.target.value)}
                className="w-full border border-gray-700 bg-brand-charcoal rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-orange font-medium"
              >
                <option value="chrysland">Chrysland City Epe (35% growth)</option>
                <option value="micasa">Micasa Lagos, Ibeju-Lekki (45% growth)</option>
                <option value="avana">Lekki Avana Estate Bungalow (30% growth + 6% yield)</option>
                <option value="ambiance">Ambiance Height, Lekki Phase 1 (25% growth + 8% yield)</option>
                <option value="reits">Vestpoint High-Yield Liquid REITs (24% growth)</option>
              </select>
            </div>

            {/* Principal Investment input */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-300">Principal Allocation Amount</label>
                <span className="text-[10px] text-gray-500 font-mono">Naira (₦)</span>
              </div>
              <input
                type="number"
                step="1000000"
                min="1000000"
                value={calcAmount}
                onChange={(e) => setCalcAmount(parseInt(e.target.value) || 0)}
                className="w-full border border-gray-700 bg-brand-charcoal rounded p-2.5 text-xs text-white focus:outline-none focus:border-brand-orange font-mono font-semibold"
              />
              <p className="text-[10px] text-gray-500">
                Default reflects current baseline market cost for 1 unit of chosen class.
              </p>
            </div>

            {/* Holding Years slider */}
            <div className="space-y-1.5">
              <div className="flex justify-between items-center">
                <label className="font-semibold text-gray-300">Holding Horizon Period</label>
                <span className="text-[11px] text-brand-orange font-bold font-mono">{calcYears} Years</span>
              </div>
              <input
                type="range"
                min="1"
                max="10"
                value={calcYears}
                onChange={(e) => setCalcYears(parseInt(e.target.value) || 1)}
                className="w-full accent-brand-orange cursor-pointer"
              />
              <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                <span>1 Year</span>
                <span>3 Years</span>
                <span>5 Years</span>
                <span>10 Years</span>
              </div>
            </div>

            {/* Disclaimer */}
            <div className="flex items-start gap-2 text-[10px] text-gray-500 leading-relaxed border-t border-gray-800 pt-4">
              <ShieldAlert className="w-4 h-4 text-brand-orange shrink-0 mt-0.5" />
              <p>
                Calculations represent typical appreciation and leasing profiles and are based on CAC registered surveys. Real-world returns remain subject to infrastructural schedules.
              </p>
            </div>

          </form>

          {/* Results readout (7 cols) */}
          <div className="lg:col-span-7 bg-gray-900 border border-gray-800 rounded-xl p-6 text-left space-y-6">
            <div>
              <span className="text-[9px] uppercase tracking-wider font-mono text-gray-500 font-bold">
                Projected Evaluation Result
              </span>
              <h3 className="font-display font-bold text-lg text-white mt-1">
                {activeProfile.name}
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              
              {/* Box 1: Principal */}
              <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono uppercase block">Principal Capital</span>
                <span className="font-mono font-bold text-lg text-white">{formatNaira(calcAmount)}</span>
              </div>

              {/* Box 2: Profit */}
              <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono uppercase block text-brand-orange">Projected Net Returns</span>
                <span className="font-mono font-bold text-lg text-brand-orange">{formatNaira(netProfit)}</span>
              </div>

              {/* Box 3: Growth */}
              <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono uppercase block">Valuation Multiple</span>
                <span className="font-mono font-extrabold text-2xl text-emerald-500 flex items-center gap-1.5 mt-0.5">
                  <span>{growthMultiplier}x</span>
                  <span className="text-xs font-normal text-gray-400">of principal</span>
                </span>
              </div>

              {/* Box 4: Total Value */}
              <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
                <span className="text-[9px] text-gray-400 font-mono uppercase block">Terminal Asset Value</span>
                <span className="font-mono font-bold text-lg text-white">{formatNaira(totalValuation)}</span>
              </div>

            </div>

            {/* Breakdown graph simulation */}
            <div className="bg-brand-charcoal rounded-lg p-4 border border-gray-800 space-y-3 font-mono text-xs text-gray-400">
              <span className="text-[10px] uppercase font-bold text-gray-500">Estimated Cumulative Breakdown</span>
              <div className="space-y-1.5">
                <div className="flex justify-between">
                  <span>Compound Capital Appreciation (+{Math.round(activeProfile.rate * 100)}%/yr):</span>
                  <span className="text-white">{formatNaira(projectedAppreciation)}</span>
                </div>
                {activeProfile.rentalRate > 0 && (
                  <div className="flex justify-between">
                    <span>Rent Accumulations ({Math.round(activeProfile.rentalRate * 100)}%/yr cash flow):</span>
                    <span className="text-white">{formatNaira(projectedRentalYield)}</span>
                  </div>
                )}
              </div>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row gap-3">
              <button
                type="button"
                onClick={onOpenGuide}
                className="w-full bg-brand-orange hover:bg-brand-orange-dark text-white font-bold py-3.5 px-4 rounded-lg text-center font-display uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                Download Investment Prospectus
              </button>
              <button
                type="button"
                onClick={() => onNavigate('listings', { category: calcProperty === 'chrysland' || calcProperty === 'micasa' ? 'land' : 'luxury' })}
                className="w-full sm:w-1/2 border border-gray-700 text-gray-300 hover:text-white font-bold py-3.5 px-4 rounded-lg text-center font-display uppercase tracking-wider text-xs transition-colors cursor-pointer"
              >
                Browse Matching Properties
              </button>
            </div>
          </div>

        </div>
      </section>

      {/* 2.5 Real Estate Cashback / Buy to Resell Section */}
      <section className="bg-gradient-to-b from-white to-gray-50 border border-gray-150 rounded-2xl p-6 sm:p-10 shadow-lg space-y-10" id="real-estate-cashback-section">
        {/* Header Block */}
        <div className="text-center space-y-3 max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-1.5 px-3.5 py-1.5 bg-brand-orange-light text-brand-orange rounded-full border border-brand-orange/20 text-[10px] font-mono font-extrabold uppercase tracking-widest">
            <Sparkles className="w-3.5 h-3.5 animate-pulse" />
            Buy To Resell Initiative
          </div>
          <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-brand-charcoal tracking-tight">
            Real Estate Cashback Program
          </h2>
          <p className="text-sm text-gray-650 leading-relaxed font-sans">
            <strong>Invest Together, Profit Smarter.</strong> Turning shared investment into shared prosperity. 
            Fractional buy-to-resell ownership breaks down entry barriers and opens doors of opportunities 
            where communities can invest, grow, and prosper together with robust asset-backed security.
          </p>
        </div>

        {/* Dynamic Cashback Calculator Widget */}
        <div className="bg-brand-charcoal text-white rounded-xl p-6 sm:p-8 border border-gray-800 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-5 space-y-5 text-left">
            <div className="space-y-1">
              <span className="text-[10px] uppercase font-mono tracking-widest text-brand-orange font-bold">
                Dynamic Simulator
              </span>
              <h3 className="font-display font-bold text-xl text-white">
                Interactive Dividend Forecaster
              </h3>
              <p className="text-xs text-gray-400 leading-relaxed">
                Adjust your capital contribution below to instantly calculate your land size equivalent and guaranteed 12-month cashback dividend payout.
              </p>
            </div>

            {/* Contribution Quick Presets */}
            <div className="space-y-2">
              <label className="text-[10px] uppercase font-mono text-gray-400 font-semibold block">Select Contribution Level</label>
              <div className="grid grid-cols-3 gap-2">
                {[
                  { label: '₦2M (Starter)', value: 2000000 },
                  { label: '₦20M (500 SQM)', value: 20000000 },
                  { label: '₦101M (2778 SQM)', value: 101000000 },
                ].map((preset) => (
                  <button
                    key={preset.value}
                    type="button"
                    onClick={() => {
                      const input = document.getElementById('cashback-input-amount') as HTMLInputElement;
                      if (input) {
                        input.value = preset.value.toString();
                        // Trigger synthetic change event to update state if needed
                        const event = new Event('input', { bubbles: true });
                        input.dispatchEvent(event);
                      }
                    }}
                    className="bg-gray-900 border border-gray-800 hover:border-brand-orange text-[10px] font-bold py-2 px-1 text-center rounded transition-all cursor-pointer text-gray-300"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Slider Input */}
            <div className="space-y-3.5 pt-2">
              <div className="flex justify-between items-center text-xs">
                <span className="font-semibold text-gray-300">Equity Contribution:</span>
                <span className="font-mono font-bold text-brand-orange text-sm" id="cashback-display-amount">₦20,000,000</span>
              </div>
              <input
                id="cashback-input-amount"
                type="range"
                min="1000000"
                max="1000000000"
                step="1000000"
                defaultValue="20000000"
                className="w-full accent-brand-orange cursor-pointer"
                onInput={(e) => {
                  const val = parseInt((e.target as HTMLInputElement).value) || 1000000;
                  const display = document.getElementById('cashback-display-amount');
                  const divRateEl = document.getElementById('cashback-display-rate');
                  const sqMEl = document.getElementById('cashback-display-sqm');
                  const profitEl = document.getElementById('cashback-display-profit');
                  const totalEl = document.getElementById('cashback-display-total');

                  // Format helpers
                  const fN = (num: number) => new Intl.NumberFormat('en-NG', { style: 'currency', currency: 'NGN', maximumFractionDigits: 0 }).format(num).replace('NGN', '₦');
                  
                  // Logic from flyers:
                  // N1m - N100m -> 35% Dividend
                  // N101m - N1B -> 37% Dividend
                  const isHighTier = val >= 101000000;
                  const rate = isHighTier ? 0.37 : 0.35;
                  
                  // SQM Calculation:
                  // N1M = 28 SQM, N20M = 500 SQM, N100M = 2778 SQM
                  // N101M = 2778 SQM, N1B = 27780 SQM
                  let sqm = 0;
                  if (val <= 100000000) {
                    // interpolate between 28 and 2778 SQM
                    sqm = Math.round(28 + ((val - 1000000) / 99000000) * (2778 - 28));
                  } else {
                    // interpolate between 2778 and 27780 SQM
                    sqm = Math.round(2778 + ((val - 101000000) / 899000000) * (27780 - 2778));
                  }

                  const dividendProfit = val * rate;
                  const terminalPayout = val + dividendProfit;

                  if (display) display.innerText = fN(val);
                  if (divRateEl) divRateEl.innerText = `${rate * 100}% Dividend`;
                  if (sqMEl) sqMEl.innerText = `${sqm.toLocaleString()} SQM`;
                  if (profitEl) profitEl.innerText = fN(dividendProfit);
                  if (totalEl) totalEl.innerText = fN(terminalPayout);
                }}
              />
              <div className="flex justify-between text-[9px] text-gray-500 font-mono">
                <span>₦1M Min</span>
                <span>₦100M</span>
                <span>₦500M</span>
                <span>₦1B Max</span>
              </div>
            </div>
          </div>

          {/* Results Box */}
          <div className="lg:col-span-7 bg-gray-900 border border-gray-800 rounded-xl p-5 sm:p-6 grid grid-cols-1 sm:grid-cols-2 gap-4 text-left">
            <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
              <span className="text-[9px] text-gray-400 font-mono uppercase block">Land Size Security Equivalent</span>
              <span className="font-mono font-bold text-lg text-white" id="cashback-display-sqm">500 SQM</span>
              <span className="text-[10px] text-gray-500 block mt-0.5">Asset-Backed Collateral</span>
            </div>

            <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
              <span className="text-[9px] text-gray-400 font-mono uppercase block text-brand-orange">Contracted Dividend Rate</span>
              <span className="font-mono font-bold text-lg text-brand-orange" id="cashback-display-rate">35% Dividend</span>
              <span className="text-[10px] text-gray-500 block mt-0.5">Guaranteed 12-Month Period</span>
            </div>

            <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
              <span className="text-[9px] text-gray-400 font-mono uppercase block">Net Yield Profit</span>
              <span className="font-mono font-bold text-lg text-emerald-500" id="cashback-display-profit">₦7,000,000</span>
              <span className="text-[10px] text-gray-500 block mt-0.5">Direct Payout on Maturity</span>
            </div>

            <div className="bg-brand-charcoal border border-gray-800 p-4 rounded-lg">
              <span className="text-[9px] text-gray-400 font-mono uppercase block">Total Cash Backed Return</span>
              <span className="font-mono font-extrabold text-lg text-white" id="cashback-display-total">₦27,000,000</span>
              <span className="text-[10px] text-gray-500 block mt-0.5">Principal + Profit</span>
            </div>
          </div>
        </div>

        {/* The Dividend Payment Sheets "Together On A Roll" */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
            <div>
              <h3 className="font-display font-bold text-lg text-brand-charcoal text-left">
                Official Dividend Payment Breakdown Sheets
              </h3>
              <p className="text-xs text-gray-500 text-left">
                Swipe left or right to inspect the exact package matrices side-by-side.
              </p>
            </div>
            
            <div className="flex gap-2 shrink-0">
              <span className="text-[10px] bg-brand-charcoal text-white font-mono font-bold py-1 px-2 rounded uppercase">
                Offer Valid: July 1st – July 31st, 2026
              </span>
            </div>
          </div>

          {/* Horizontally scrollable panel - "Together on a roll" */}
          <div className="overflow-x-auto pb-4 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent -mx-4 px-4 sm:mx-0 sm:px-0">
            <div className="flex gap-6 min-w-[840px] md:min-w-full">
              
              {/* Table 1: 35% Dividend Matrix */}
              <div className="w-1/2 min-w-[420px] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="bg-brand-charcoal text-white p-4 text-left border-b border-gray-800 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-tight text-brand-orange uppercase">
                      Tier 1: Buy to Resell
                    </h4>
                    <p className="text-[10px] text-gray-400">Investments from ₦1 Million to ₦100 Million</p>
                  </div>
                  <span className="bg-brand-orange text-white text-[11px] font-mono font-extrabold py-1 px-2 rounded-full">
                    35% Dividend
                  </span>
                </div>
                
                <div className="divide-y divide-gray-100 max-h-[360px] overflow-y-auto text-xs text-left">
                  <div className="grid grid-cols-3 bg-gray-50 py-2.5 px-4 text-gray-500 font-mono text-[9px] uppercase tracking-wider font-bold sticky top-0 border-b border-gray-150">
                    <span>Land Size (SQM)</span>
                    <span>Equity Contribution</span>
                    <span className="text-right">Cash Backed (12M)</span>
                  </div>
                  {[
                    { sqm: '28 SQM', equity: '₦1,000,000', return: '₦1,350,000' },
                    { sqm: '56 SQM', equity: '₦2,000,000', return: '₦2,700,000' },
                    { sqm: '83 SQM', equity: '₦3,000,000', return: '₦4,050,000' },
                    { sqm: '111 SQM', equity: '₦4,000,000', return: '₦5,400,000' },
                    { sqm: '139 SQM', equity: '₦5,000,000', return: '₦6,750,000' },
                    { sqm: '194 SQM', equity: '₦7,000,000', return: '₦9,450,000' },
                    { sqm: '333 SQM', equity: '₦12,000,000', return: '₦16,200,000' },
                    { sqm: '417 SQM', equity: '₦15,000,000', return: '₦20,250,000' },
                    { sqm: '500 SQM', equity: '₦20,000,000', return: '₦27,000,000' },
                    { sqm: '694 SQM', equity: '₦25,000,000', return: '₦33,750,000' },
                    { sqm: '833 SQM', equity: '₦30,000,000', return: '₦40,500,000' },
                    { sqm: '972 SQM', equity: '₦35,000,000', return: '₦47,250,000' },
                    { sqm: '1,111 SQM', equity: '₦40,000,000', return: '₦54,000,000' },
                    { sqm: '1,250 SQM', equity: '₦45,000,000', return: '₦60,750,000' },
                    { sqm: '1,389 SQM', equity: '₦50,000,000', return: '₦67,500,000' },
                    { sqm: '1,528 SQM', equity: '₦55,000,000', return: '₦74,250,000' },
                    { sqm: '1,667 SQM', equity: '₦60,000,000', return: '₦81,000,000' },
                    { sqm: '1,944 SQM', equity: '₦70,000,000', return: '₦94,500,000' },
                    { sqm: '2,222 SQM', equity: '₦80,000,000', return: '₦108,000,000' },
                    { sqm: '2,500 SQM', equity: '₦90,000,000', return: '₦121,500,000' },
                    { sqm: '2,778 SQM', equity: '₦100,000,000', return: '₦135,000,000' }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 py-2 px-4 hover:bg-gray-50 items-center">
                      <span className="font-mono font-semibold text-gray-750">{row.sqm}</span>
                      <span className="font-mono text-gray-600 font-medium">{row.equity}</span>
                      <span className="font-mono font-bold text-brand-orange text-right">{row.return}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Table 2: 37% Dividend Matrix */}
              <div className="w-1/2 min-w-[420px] bg-white border border-gray-200 rounded-xl shadow-sm overflow-hidden flex flex-col">
                <div className="bg-brand-charcoal text-white p-4 text-left border-b border-gray-800 flex justify-between items-center">
                  <div>
                    <h4 className="font-display font-bold text-sm tracking-tight text-emerald-500 uppercase">
                      Tier 2: Institutional
                    </h4>
                    <p className="text-[10px] text-gray-400">Investments from ₦101 Million to ₦1 Billion</p>
                  </div>
                  <span className="bg-emerald-600 text-white text-[11px] font-mono font-extrabold py-1 px-2 rounded-full">
                    37% Dividend
                  </span>
                </div>
                
                <div className="divide-y divide-gray-100 max-h-[360px] overflow-y-auto text-xs text-left">
                  <div className="grid grid-cols-3 bg-gray-50 py-2.5 px-4 text-gray-500 font-mono text-[9px] uppercase tracking-wider font-bold sticky top-0 border-b border-gray-150">
                    <span>Land Size (SQM)</span>
                    <span>Equity Contribution</span>
                    <span className="text-right">Cash Backed (12M)</span>
                  </div>
                  {[
                    { sqm: '2,778 SQM', equity: '₦101,000,000', return: '₦138,370,000' },
                    { sqm: '5,556 SQM', equity: '₦200,000,000', return: '₦274,000,000' },
                    { sqm: '8,334 SQM', equity: '₦300,000,000', return: '₦411,000,000' },
                    { sqm: '11,112 SQM', equity: '₦400,000,000', return: '₦548,000,000' },
                    { sqm: '13,890 SQM', equity: '₦500,000,000', return: '₦685,000,000' },
                    { sqm: '16,668 SQM', equity: '₦600,000,000', return: '₦822,000,000' },
                    { sqm: '19,446 SQM', equity: '₦700,000,000', return: '₦959,000,000' },
                    { sqm: '22,224 SQM', equity: '₦800,000,000', return: '₦1,096,000,000' },
                    { sqm: '25,002 SQM', equity: '₦900,000,000', return: '₦1,233,000,000' },
                    { sqm: '27,780 SQM', equity: '₦1,000,000,000', return: '₦1,370,000,000' }
                  ].map((row, idx) => (
                    <div key={idx} className="grid grid-cols-3 py-2 px-4 hover:bg-gray-50 items-center">
                      <span className="font-mono font-semibold text-gray-750">{row.sqm}</span>
                      <span className="font-mono text-gray-600 font-medium">{row.equity}</span>
                      <span className="font-mono font-bold text-emerald-600 text-right">{row.return}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          </div>
          
          <p className="text-[10px] text-gray-400 text-left leading-relaxed">
            * Terms & Conditions apply. All investments are secured with registered survey backed deeds and bank-guaranteed refund agreements. Offers are exclusively open from July 1st to July 31st, 2026.
          </p>
        </div>
      </section>

      {/* 3. Emerging investment locations list */}
      <section className="space-y-10" id="investment-locations-section">
        <div className="text-center space-y-2 max-w-xl mx-auto">
          <span className="text-xs font-bold text-brand-orange uppercase tracking-widest font-mono">
            Focus Zones
          </span>
          <h2 className="font-display font-bold text-3xl text-brand-charcoal tracking-tight">
            Designated High-Growth Lagos Corridors
          </h2>
          <p className="text-sm text-gray-500 leading-relaxed">
            We direct investor capital into four primary development corridors, chosen for their massive infrastructural backing.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 text-left">
          {[
            {
              loc: 'Epe Axis (Tech & Academic Corridor)',
              desc: 'Epe has emerged as the ultimate epicenter for low-barrier land banking. Known for pristine state-built road networks, zero grid instabilities, Augustine University, and close proximity to Alaro City.',
              app: '35% CAGR',
              strategy: 'Purchase acreage or plots, hold for 2 - 5 years, resell to developers.'
            },
            {
              loc: 'Ibeju-Lekki Axis (Megastructure Corridor)',
              desc: 'West Africa’s fastest-growing logistics zone. Hosting the multi-billion-dollar Lekki Deep Sea Port, Dangote Petrochemical Refinery, and Free Trade Zones. Direct oceanic logistics backing.',
              app: '45% CAGR',
              strategy: 'Acquire road-facing plots for corporate warehouses, logistics parks, or workforce housing.'
            },
            {
              loc: 'Lekki Phase 1 (Executive Residential Zone)',
              desc: 'Lagos’s premier residential and retail corridor. Extremely high density of top-earning executives, corporate offices, and lifestyle hubs. Yields represent highly stable, inflation-resistant structures.',
              app: '20% CAGR + 6% Yield',
              strategy: 'Invest in multi-family smart terraces and detached duplexes for premium rental yields.'
            },
            {
              loc: 'Ikoyi (Diplomatic & Flagship Luxury Hub)',
              desc: 'Nigeria’s most valuable real estate sub-market. Extremely high barrier to entry, offering supreme asset security, diplomatic standard security grids, and corporate executive leasing contracts.',
              app: '28% CAGR + 8% Yield',
              strategy: 'Acquire penthouse units and duplex terraces for corporate expatriate tenancy pools.'
            }
          ].map((locationData, idx) => (
            <div key={idx} className="bg-white border border-gray-100 rounded-xl p-6 shadow-sm space-y-4 hover:border-brand-orange transition-all group">
              <div className="flex justify-between items-center">
                <h3 className="font-display font-bold text-lg text-brand-charcoal group-hover:text-brand-orange transition-colors">
                  {locationData.loc}
                </h3>
                <span className="text-xs font-mono font-bold text-emerald-600 bg-emerald-50 px-2.5 py-1 rounded">
                  {locationData.app}
                </span>
              </div>
              <p className="text-xs text-gray-600 leading-relaxed">{locationData.desc}</p>
              <div className="bg-brand-grey p-3.5 rounded-lg border border-gray-50 text-xs">
                <strong className="text-brand-charcoal block">Advisory Recommendation:</strong>
                <span className="text-gray-500 mt-1 block leading-relaxed">{locationData.strategy}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 4. Advisory CTA */}
      <section className="bg-gradient-to-r from-brand-charcoal to-gray-900 text-white rounded-2xl p-8 sm:p-12 text-center space-y-6" id="investment-outro-cta">
        <div className="max-w-xl mx-auto space-y-3">
          <span className="text-[10px] bg-brand-orange-light/10 text-brand-orange border border-brand-orange/30 font-mono font-bold px-3 py-1 rounded-full uppercase tracking-wider">
            Wealth Advisory Desk
          </span>
          <h2 className="font-display font-bold text-2xl sm:text-3xl text-white">
            Schedule a Private Investment Consultation
          </h2>
          <p className="text-xs text-gray-300 leading-relaxed">
            Connect one-on-one with our senior real estate advisors. We will help you analyze title histories, evaluate tax guidelines for international transfers, and customize a high-yielding real estate portfolio.
          </p>
          <div className="pt-4 flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => onNavigate('contact')}
              className="bg-brand-orange hover:bg-brand-orange-dark text-white font-bold px-8 py-3.5 rounded-xl transition-all font-display uppercase tracking-widest text-xs cursor-pointer shadow-md"
            >
              Book Advisory Consultation
            </button>
            <button
              onClick={() => window.open('https://wa.me/2348030564502?text=Hello%20Vestpoint%20Advisory%2C%20I%20want%20to%20schedule%20a%20private%20investment%20consultation%20for%20Lagos%20properties.', '_blank')}
              className="bg-white/10 hover:bg-white/20 text-white font-bold px-8 py-3.5 rounded-xl transition-all font-display uppercase tracking-widest text-xs cursor-pointer border border-white/20"
            >
              Inquire on WhatsApp
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
