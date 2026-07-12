import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { PROFILE } from '../../data';
import Icon from '../Icon';

export default function ContactView() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsSubmitting(true);
    // Simulate real API ledger submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitSuccess(true);
    }, 1200);
  };

  return (
    <div className="space-y-xl py-base">
      {/* Contact Header */}
      <section className="text-center max-w-2xl mx-auto space-y-xs">
        <span className="text-accent-dark font-semibold text-label-sm tracking-widest uppercase bg-accent/15 px-3 py-1 rounded-full">
          Inquiries
        </span>
        <h1 className="font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-primary">Let's Connect</h1>
        <p className="text-body-md text-on-surface-variant max-w-lg mx-auto">
          I am actively seeking internship or entry-level opportunities in auditing and finance. Let's discuss how my analytical skills can add value.
        </p>
      </section>

      {/* Main Grid Layout */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-lg lg:gap-xl">
        {/* Sidebar Info & Map (colspan-5) */}
        <div className="lg:col-span-5 space-y-lg">
          {/* Direct Details Card */}
          <div className="bg-white border border-outline-variant rounded-xl p-md sm:p-lg shadow-sm space-y-md">
            <h2 className="font-display text-xl font-bold text-primary">Direct Credentials</h2>
            
            <div className="space-y-md">
              <div className="flex gap-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon name="mail" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase">Professional Email</p>
                  <a href={`mailto:${PROFILE.email}`} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    {PROFILE.email}
                  </a>
                </div>
              </div>

              <div className="flex gap-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon name="phone" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase">Telephone Contact</p>
                  <a href={`tel:${PROFILE.phone}`} className="text-sm font-medium text-primary hover:text-accent transition-colors">
                    {PROFILE.phone}
                  </a>
                </div>
              </div>

              <div className="flex gap-sm">
                <div className="w-10 h-10 rounded-lg bg-primary/5 flex items-center justify-center text-primary flex-shrink-0">
                  <Icon name="location_on" size={20} />
                </div>
                <div>
                  <p className="text-xs font-semibold text-secondary uppercase">Geographic Availability</p>
                  <p className="text-sm font-medium text-primary">
                    {PROFILE.workLocation} & {PROFILE.location}
                  </p>
                </div>
              </div>
            </div>

            <div className="h-px bg-outline-variant my-md"></div>

            <div className="bg-surface-container-low p-md rounded-lg border border-outline-variant space-y-xs">
              <p className="text-xs font-semibold text-accent-dark uppercase">Chartered Aspirations</p>
              <p className="text-xs text-on-surface-variant leading-relaxed">
                Actively preparing for professional accounting qualifications (e.g. ACCA or MICPA-CAANZ) to provide high-stakes advisory services to corporate firms.
              </p>
            </div>
          </div>

          {/* Interactive Map Overlay block */}
          <div className="bg-white border border-outline-variant rounded-xl overflow-hidden shadow-sm aspect-video sm:aspect-square lg:aspect-auto lg:h-[220px] relative group">
            <img 
              src={PROFILE.illustrations.mapSelangor} 
              alt="Selangor/Kuala Lumpur Map Overlay"
              className="w-full h-full object-cover group-hover:scale-101 transition-transform duration-700"
              referrerPolicy="no-referrer"
            />
            {/* Dark blueprint map card details overlay */}
            <div className="absolute inset-0 bg-primary/25"></div>
            <div className="absolute bottom-4 left-4 right-4 bg-white/95 text-primary p-sm rounded-lg shadow backdrop-blur-xs flex items-center gap-xs">
              <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
                <Icon name="distance" size={16} />
              </div>
              <div>
                <h4 className="text-xs font-bold font-display uppercase tracking-wider">Placement Readiness</h4>
                <p className="text-[11px] font-medium text-secondary">Selangor, Kuala Lumpur & surrounding corporate hubs</p>
              </div>
            </div>
          </div>
        </div>

        {/* Contact Form Column (colspan-7) */}
        <div className="lg:col-span-7">
          <div className="bg-white border border-outline-variant rounded-xl p-md sm:p-lg shadow-sm h-full flex flex-col justify-between">
            <AnimatePresence mode="wait">
              {!submitSuccess ? (
                <motion.form 
                  onSubmit={handleSubmit} 
                  className="space-y-md"
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  <h2 className="font-display text-xl font-bold text-primary">Send a Secure Message</h2>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-md">
                    <div className="space-y-xs">
                      <label htmlFor="name" className="text-xs font-semibold text-secondary uppercase">Your Name</label>
                      <input 
                        type="text" 
                        id="name"
                        name="name" 
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className="w-full border border-outline-variant rounded-lg p-sm text-sm focus:outline-none focus:border-primary transition-colors bg-surface-container-low"
                      />
                    </div>

                    <div className="space-y-xs">
                      <label htmlFor="email" className="text-xs font-semibold text-secondary uppercase">Your Email</label>
                      <input 
                        type="email" 
                        id="email"
                        name="email" 
                        required
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@firm.com"
                        className="w-full border border-outline-variant rounded-lg p-sm text-sm focus:outline-none focus:border-primary transition-colors bg-surface-container-low"
                      />
                    </div>
                  </div>

                  <div className="space-y-xs">
                    <label htmlFor="subject" className="text-xs font-semibold text-secondary uppercase">Subject</label>
                    <input 
                      type="text" 
                      id="subject"
                      name="subject" 
                      required
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder="Internship / Recruitment Opportunities"
                      className="w-full border border-outline-variant rounded-lg p-sm text-sm focus:outline-none focus:border-primary transition-colors bg-surface-container-low"
                    />
                  </div>

                  <div className="space-y-xs">
                    <label htmlFor="message" className="text-xs font-semibold text-secondary uppercase">Message Description</label>
                    <textarea 
                      id="message"
                      name="message" 
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Write your professional message detail here..."
                      className="w-full border border-outline-variant rounded-lg p-sm text-sm focus:outline-none focus:border-primary transition-colors bg-surface-container-low resize-none"
                    />
                  </div>

                  <div className="pt-xs flex justify-end">
                    <button 
                      type="submit" 
                      disabled={isSubmitting}
                      className="bg-primary text-on-primary px-xl py-md rounded-lg font-semibold text-xs hover:bg-opacity-95 transition-all duration-300 disabled:opacity-50 flex items-center gap-xs cursor-pointer"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/35 border-t-white rounded-full animate-spin"></div>
                          Processing Inquiry...
                        </>
                      ) : (
                        'Send Secure Message'
                      )}
                    </button>
                  </div>
                </motion.form>
              ) : (
                <motion.div 
                  className="h-full flex flex-col items-center justify-center text-center p-md space-y-md"
                  key="submit-success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5 }}
                >
                  <div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shadow-inner border border-emerald-100">
                    <Icon name="CheckCircle" size={32} />
                  </div>
                  <div className="space-y-xs">
                    <h3 className="text-2xl font-semibold font-display text-primary">Inquiry Successfully Logged</h3>
                    <p className="text-sm text-on-surface-variant max-w-md mx-auto leading-relaxed">
                      Thank you, <strong className="text-primary">{formData.name}</strong>! Your inquiry regarding <span className="italic">"{formData.subject}"</span> has been logged. I will respond to your professional address (<span className="font-semibold text-primary">{formData.email}</span>) within 24 business hours.
                    </p>
                  </div>
                  <button 
                    onClick={() => {
                      setFormData({ name: '', email: '', subject: '', message: '' });
                      setSubmitSuccess(false);
                    }}
                    className="border border-outline-variant text-primary px-md py-sm rounded-lg font-semibold text-xs hover:bg-surface-container-low transition-colors duration-150 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
