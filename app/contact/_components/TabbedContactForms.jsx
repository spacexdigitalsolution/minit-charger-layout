"use client";

import React, { useState } from 'react';

export default function TabbedContactForms({ formsData }) {
  const [activeTab, setActiveTab] = useState('sales');
  const [successMessage, setSuccessMessage] = useState('');

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    setSuccessMessage('');
  };

  const handleSubmit = (e, successText) => {
    e.preventDefault();
    setSuccessMessage(successText);
    e.target.reset();
  };

  return (
    <section className="pt-[8px] pb-[96px] max-md:pb-[60px]" id="route">
      <div className="container">
        <div className="flex gap-[8px] flex-wrap border-b border-line pb-0">
          <button 
            className={`font-sans font-semibold text-[14.5px] px-[4px] py-[13px] mr-[26px] border-b-2 transition-colors duration-200 ${activeTab === 'sales' ? 'text-green-deep border-green' : 'text-muted border-transparent hover:text-text'}`}
            onClick={() => handleTabClick('sales')}
            aria-pressed={activeTab === 'sales'}
          >
            Sales
          </button>
          <button 
            className={`font-sans font-semibold text-[14.5px] px-[4px] py-[13px] mr-[26px] border-b-2 transition-colors duration-200 ${activeTab === 'support' ? 'text-green-deep border-green' : 'text-muted border-transparent hover:text-text'}`}
            onClick={() => handleTabClick('support')}
            aria-pressed={activeTab === 'support'}
          >
            Support
          </button>
          <button 
            className={`font-sans font-semibold text-[14.5px] px-[4px] py-[13px] mr-[26px] border-b-2 transition-colors duration-200 ${activeTab === 'service' ? 'text-green-deep border-green' : 'text-muted border-transparent hover:text-text'}`}
            onClick={() => handleTabClick('service')}
            aria-pressed={activeTab === 'service'}
          >
            Customer Service
          </button>
        </div>

        {/* ===== SALES FORM ===== */}
        {activeTab === 'sales' && (
          <form 
            className="max-w-[720px] mt-[56px]" 
            onSubmit={(e) => handleSubmit(e, 'Thanks — our sales team will reach out shortly.')}
          >
            <h3 className="text-[clamp(22px,2.8vw,28px)] font-display font-bold text-text">
              {formsData.sales.heading}
            </h3>
            <p className="mt-[10px] text-[15px] text-muted">
              {formsData.sales.sub}
            </p>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[18px] mt-[32px]">
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Product type <span className="text-amber font-bold">*</span>
                </label>
                <select required className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors">
                  <option value="">Select a product</option>
                  {formsData.sales.products.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Fleet size <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" placeholder="e.g. 12 vehicles" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Location <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" placeholder="City, state, or airport code" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Company name <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Contact name <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Phone <span className="text-amber font-bold">*</span>
                </label>
                <input required type="tel" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Email <span className="text-amber font-bold">*</span>
                </label>
                <input required type="email" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div className="col-span-2 max-sm:col-span-1 mt-[8px] flex items-center gap-[18px] flex-wrap">
                <button type="submit" className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] px-[28px] py-[15px] rounded-[100px] no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-[1px] border-none cursor-pointer">
                  Send to Sales
                </button>
                <span className="text-[12.5px] text-muted">A sales engineer replies within one business day.</span>
              </div>
              {successMessage && (
                <div className="col-span-2 max-sm:col-span-1 px-[18px] py-[16px] rounded-[10px] bg-green-wash text-green-deep text-[14px] font-semibold">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        )}

        {/* ===== SUPPORT FORM ===== */}
        {activeTab === 'support' && (
          <form 
            className="max-w-[720px] mt-[56px]" 
            onSubmit={(e) => handleSubmit(e, 'Thanks — a support engineer will follow up shortly.')}
          >
            <h3 className="text-[clamp(22px,2.8vw,28px)] font-display font-bold text-text">
              {formsData.support.heading}
            </h3>
            <p className="mt-[10px] text-[15px] text-muted">
              {formsData.support.sub}
            </p>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[18px] mt-[32px]">
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Are you an existing customer? <span className="text-amber font-bold">*</span>
                </label>
                <select required className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors">
                  <option value="">Select one</option>
                  <option value="Yes">Yes</option>
                  <option value="No">No</option>
                </select>
              </div>

              <div className="col-span-2 max-sm:col-span-1 flex items-center gap-[12px] my-[6px] font-mono text-[11px] tracking-[0.08em] uppercase text-muted after:content-[''] after:flex-1 after:h-[1px] after:bg-line">
                Where & what
              </div>
              
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Site / location <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" placeholder="e.g. PHX Ground Ops, Bay 4" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Product name <span className="text-amber font-bold">*</span>
                </label>
                <select required className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors">
                  <option value="">Select a product</option>
                  {formsData.support.products.map(p => <option key={p} value={p}>{p}</option>)}
                </select>
              </div>
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Serial number <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" placeholder="Found on the unit's nameplate" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>

              <div className="col-span-2 max-sm:col-span-1 flex items-center gap-[12px] my-[6px] font-mono text-[11px] tracking-[0.08em] uppercase text-muted after:content-[''] after:flex-1 after:h-[1px] after:bg-line">
                The issue
              </div>

              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Complaint details <span className="text-amber font-bold">*</span>
                </label>
                <textarea required placeholder="What's happening, when it started, any error codes or messages" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors min-h-[110px] resize-y"></textarea>
              </div>
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Attachments <span className="text-muted font-medium font-mono text-[11px] uppercase tracking-[0.06em]">optional</span>
                </label>
                <div className="border-[1.5px] border-dashed border-line rounded-[10px] p-[20px] text-center text-[13.5px] text-muted transition-colors hover:border-green">
                  Photos, error screenshots, or data files help us diagnose faster.
                  <input type="file" multiple accept="image/*,.pdf,.csv,.xlsx,.txt,.log" className="block mx-auto mt-[10px] text-[13px]" />
                </div>
              </div>

              <div className="col-span-2 max-sm:col-span-1 flex items-center gap-[12px] my-[6px] font-mono text-[11px] tracking-[0.08em] uppercase text-muted after:content-[''] after:flex-1 after:h-[1px] after:bg-line">
                Your contact info
              </div>

              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Contact name <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Phone <span className="text-amber font-bold">*</span>
                </label>
                <input required type="tel" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Email <span className="text-amber font-bold">*</span>
                </label>
                <input required type="email" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>

              <div className="col-span-2 max-sm:col-span-1 mt-[8px] flex items-center gap-[18px] flex-wrap">
                <button type="submit" className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] px-[28px] py-[15px] rounded-[100px] no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-[1px] border-none cursor-pointer">
                  Send to Support
                </button>
                <span className="text-[12.5px] text-muted">Urgent equipment down? Call us directly — see below.</span>
              </div>
              {successMessage && (
                <div className="col-span-2 max-sm:col-span-1 px-[18px] py-[16px] rounded-[10px] bg-green-wash text-green-deep text-[14px] font-semibold">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        )}

        {/* ===== CUSTOMER SERVICE FORM ===== */}
        {activeTab === 'service' && (
          <form 
            className="max-w-[720px] mt-[56px]" 
            onSubmit={(e) => handleSubmit(e, 'Thanks — our customer service team will be in touch.')}
          >
            <h3 className="text-[clamp(22px,2.8vw,28px)] font-display font-bold text-text">
              {formsData.service.heading}
            </h3>
            <p className="mt-[10px] text-[15px] text-muted">
              {formsData.service.sub}
            </p>
            <div className="grid grid-cols-2 max-sm:grid-cols-1 gap-[18px] mt-[32px]">
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Details <span className="text-amber font-bold">*</span>
                </label>
                <textarea required placeholder="Tell us what you need" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors min-h-[110px] resize-y"></textarea>
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Part No <span className="text-muted font-medium font-mono text-[11px] uppercase tracking-[0.06em]">optional</span>
                </label>
                <input type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  PO No <span className="text-muted font-medium font-mono text-[11px] uppercase tracking-[0.06em]">optional</span>
                </label>
                <input type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Contact name <span className="text-amber font-bold">*</span>
                </label>
                <input required type="text" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div>
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Phone <span className="text-amber font-bold">*</span>
                </label>
                <input required type="tel" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>
              <div className="col-span-2 max-sm:col-span-1">
                <label className="block text-[13px] font-semibold text-text mb-[7px]">
                  Email <span className="text-amber font-bold">*</span>
                </label>
                <input required type="email" className="w-full px-[14px] py-[13px] border-[1.5px] border-line rounded-[10px] font-sans text-[14.5px] text-text bg-white focus:outline-none focus:border-green transition-colors" />
              </div>

              <div className="col-span-2 max-sm:col-span-1 mt-[8px] flex items-center gap-[18px] flex-wrap">
                <button type="submit" className="inline-flex items-center gap-[9px] font-sans font-semibold text-[15px] px-[28px] py-[15px] rounded-[100px] no-underline transition-all duration-200 whitespace-nowrap bg-green text-white hover:bg-green-deep hover:-translate-y-[1px] border-none cursor-pointer">
                  Send to Customer Service
                </button>
                <span className="text-[12.5px] text-muted">We typically reply within one business day.</span>
              </div>
              {successMessage && (
                <div className="col-span-2 max-sm:col-span-1 px-[18px] py-[16px] rounded-[10px] bg-green-wash text-green-deep text-[14px] font-semibold">
                  {successMessage}
                </div>
              )}
            </div>
          </form>
        )}
      </div>
    </section>
  );
}
