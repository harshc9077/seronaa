'use client';

import React from 'react';
import { Container } from '@/components/ui/Container';
import { SectionHeading } from '@/components/ui/SectionHeading';
import { Button } from '@/components/ui/Button';

export default function ContactPage() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real app, handle form submission
    alert('Thank you for your message. We will get back to you shortly.');
  };

  return (
    <div className="pt-[24vw] md:pt-[12vw] pb-[16vw] md:pb-[8vw] min-h-screen bg-ivory">
      <Container>
        <div className="text-center mb-[12vw] md:mb-[8vw]">
          <h1 className="font-heading text-5xl md:text-7xl text-charcoal mb-4">Contact Us</h1>
          <p className="text-taupe text-lg">We are here to assist you.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 max-w-6xl mx-auto">
          {/* Left Column - Contact Form */}
          <div>
            <SectionHeading title="Send a Message" className="mb-8" />
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="flex flex-col">
                <label htmlFor="name" className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Name</label>
                <input 
                  type="text" 
                  id="name" 
                  required
                  className="bg-transparent border-b border-taupe/30 py-2 focus:outline-none focus:border-charcoal transition-colors font-body text-charcoal"
                />
              </div>
              
              <div className="flex flex-col">
                <label htmlFor="email" className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Email</label>
                <input 
                  type="email" 
                  id="email" 
                  required
                  className="bg-transparent border-b border-taupe/30 py-2 focus:outline-none focus:border-charcoal transition-colors font-body text-charcoal"
                />
              </div>

              <div className="flex flex-col">
                <label htmlFor="subject" className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Subject</label>
                <select 
                  id="subject"
                  className="bg-transparent border-b border-taupe/30 py-2 focus:outline-none focus:border-charcoal transition-colors font-body text-charcoal appearance-none rounded-none"
                >
                  <option>General Inquiry</option>
                  <option>Product Question</option>
                  <option>Custom Design</option>
                  <option>Press</option>
                  <option>Other</option>
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4}
                  required
                  className="bg-transparent border-b border-taupe/30 py-2 focus:outline-none focus:border-charcoal transition-colors font-body text-charcoal resize-none"
                ></textarea>
              </div>

              <Button type="submit" variant="primary" className="w-full justify-center mt-8">
                SEND MESSAGE
              </Button>
            </form>
          </div>

          {/* Right Column - Contact Info */}
          <div className="flex flex-col space-y-12">
            <div>
              <SectionHeading title="Contact Information" className="mb-8" />
              <div className="space-y-6 text-charcoal font-body">
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Email</h3>
                  <a href="mailto:hello@seronaa.com" className="hover:text-gold transition-colors">hello@seronaa.com</a>
                </div>
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Phone</h3>
                  <a href="tel:+1800SERONAA" className="hover:text-gold transition-colors">+1 (800) SERONAA</a>
                </div>
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Address</h3>
                  <p>New York, NY<br/>(By Appointment Only)</p>
                </div>
                <div>
                  <h3 className="text-[11px] uppercase tracking-[0.2em] text-taupe mb-2">Hours</h3>
                  <p>Monday–Friday, 10am–6pm EST</p>
                </div>
              </div>
            </div>

            <div>
              <SectionHeading title="Follow Us" className="mb-6" />
              <div className="flex space-x-6">
                <a href="#" className="text-charcoal hover:text-gold transition-colors font-body uppercase text-sm tracking-widest">Instagram</a>
                <a href="#" className="text-charcoal hover:text-gold transition-colors font-body uppercase text-sm tracking-widest">Pinterest</a>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
