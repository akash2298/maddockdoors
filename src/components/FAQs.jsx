import React, { useState } from 'react';
import { HelpCircle, ChevronDown, Phone } from 'lucide-react';

export default function FAQs({ onOpenBooking }) {
  const [openIndex, setOpenIndex] = useState(0);

  const faqs = [
    {
      question: 'How fast can Maddock Garage Doors repair a broken spring in Peachtree City or Brooks?',
      answer: 'We offer same-day service throughout Brooks, Peachtree City, Fayetteville, and Fayette/Coweta County. Our technicians carry standard torsion springs, extension springs, and aircraft cables right on our service trucks to resolve spring failures on the first visit.'
    },
    {
      question: 'Why is garage door replacement rated the #1 ROI home upgrade?',
      answer: 'Replacing your garage door delivers over 100% return on investment at home resale according to Cost vs. Value reports. A new carriage house or modern glass garage door instantly transforms your home exterior curb appeal while improving thermal insulation and home security.'
    },
    {
      question: 'Do you offer upfront flat-rate quotes without hidden fees?',
      answer: 'Yes! We believe in 100% price transparency. Before any work begins, our technician inspects your door system and provides a clear flat-rate quote. What we quote is what you pay.'
    },
    {
      question: 'What garage door brands and openers do you work with?',
      answer: 'We are authorized dealers and installers for industry-leading manufacturers including Clopay, CHI Overhead Doors, LiftMaster, Genie, and SouthEast Garage Doors. We install ultra-quiet belt drives, wall-mount jackshaft openers, and smart MyQ Wi-Fi openers.'
    },
    {
      question: 'Can you convert my garage door track to a High-Lift system for a car lift?',
      answer: 'Absolutely. We specialize in high-lift track engineering and wall-mount jackshaft opener conversions. This raises your garage door tracks closer to the ceiling, giving you maximum vertical clearance for automotive lifts or tall trucks.'
    },
    {
      question: 'What should I do if my garage door comes off its tracks?',
      answer: 'Do NOT attempt to operate your garage door opener or pull the emergency release cord manually when a door is derailed. Call us immediately at 678-723-5744 so our technicians can safely secure and reset the tracks.'
    }
  ];

  const toggleAccordion = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faqs" className="section-padding" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container" style={{ maxWidth: '920px' }}>
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="sub-heading">
            <HelpCircle size={16} /> Homeowner Assistance
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, marginBottom: '14px', color: '#0F172A' }}>
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.02rem' }}>
            Have a question about garage door repairs, opener smart tech, or installation pricing? We’re here to help!
          </p>
        </div>

        {/* Accordion */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                className="clean-card"
                style={{
                  borderRadius: 'var(--radius-md)',
                  border: isOpen ? '1.5px solid #397FF5' : '1px solid #E2E8F0',
                  transition: 'all 0.3s ease',
                  overflow: 'hidden',
                  backgroundColor: '#FFFFFF'
                }}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  style={{
                    width: '100%',
                    padding: '20px 24px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    gap: '16px',
                    background: 'none',
                    border: 'none',
                    color: isOpen ? '#397FF5' : '#0F172A',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    textAlign: 'left',
                    cursor: 'pointer'
                  }}
                >
                  <span>{faq.question}</span>
                  <div style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    background: isOpen ? '#EFF6FF' : '#F1F5F9',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: isOpen ? '#397FF5' : '#64748B',
                    transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                    transition: 'transform 0.3s ease',
                    flexShrink: 0
                  }}>
                    <ChevronDown size={18} />
                  </div>
                </button>

                {isOpen && (
                  <div style={{
                    padding: '0 24px 20px 24px',
                    color: '#475569',
                    fontSize: '0.95rem',
                    lineHeight: 1.65,
                    borderTop: '1px solid #F1F5F9',
                    paddingTop: '14px'
                  }}>
                    {faq.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Still Have Questions */}
        <div style={{
          textAlign: 'center',
          marginTop: '40px',
          padding: '20px',
          borderRadius: 'var(--radius-md)',
          background: '#F8FAFC',
          border: '1px solid #E2E8F0',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '14px',
          flexWrap: 'wrap'
        }}>
          <span style={{ color: '#475569', fontWeight: 600, fontSize: '0.92rem' }}>
            Have a specific garage door question not answered here?
          </span>
          <a href="tel:678-723-5744" className="btn btn-secondary btn-sm">
            <Phone size={16} color="#397FF5" /> Ask Our Techs: 678-723-5744
          </a>
        </div>

      </div>
    </section>
  );
}
