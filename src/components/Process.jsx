import React from 'react';
import { Calendar, Search, Wrench, ShieldCheck, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function Process({ onOpenBooking }) {
  const steps = [
    {
      num: '01',
      title: 'Free On-Site Inspection',
      icon: Search,
      description: 'We inspect your garage door springs, cables, tracks, opener gear, and safety sensors to pinpoint exact issues.',
      highlight: 'Stocked truck ready for instant fix'
    },
    {
      num: '02',
      title: 'Upfront Flat-Rate Quote',
      icon: Calendar,
      description: 'Zero surprise fees. You receive a clear itemized price quote before any work begins.',
      highlight: '100% price transparency guarantee'
    },
    {
      num: '03',
      title: '1-Visit Precision Repair',
      icon: Wrench,
      description: 'Our factory-trained technicians install heavy-duty springs, quiet rollers, or custom doors cleanly.',
      highlight: 'Finished in under 2 hours'
    },
    {
      num: '04',
      title: '21-Point Safety Pass',
      icon: ShieldCheck,
      description: 'We test balance, track alignment, and infrared safety auto-reversal sensors before leaving.',
      highlight: 'Written parts & labor warranty'
    }
  ];

  return (
    <section id="process" className="section-padding" style={{
      backgroundColor: '#F8FAFC',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '56px' }}>
          <div className="sub-heading">
            <CheckCircle2 size={16} /> Seamless 4-Step Experience
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '14px', color: '#0F172A' }}>
            How We Deliver <span className="gradient-text">Flawless 5-Star Service</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            From your first call to the final safety check, our process is designed for zero stress and complete peace of mind.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid-4" style={{ gap: '24px' }}>
          {steps.map((step, idx) => {
            const IconComponent = step.icon;
            return (
              <div
                key={idx}
                className="clean-card clean-card-hover"
                style={{
                  padding: '28px 20px',
                  borderRadius: 'var(--radius-lg)',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  backgroundColor: '#FFFFFF',
                  border: '1px solid #E2E8F0'
                }}
              >
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '20px'
                }}>
                  <div style={{
                    width: '48px',
                    height: '48px',
                    borderRadius: 'var(--radius-md)',
                    background: 'rgba(57, 127, 245, 0.1)',
                    color: '#397FF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <IconComponent size={24} />
                  </div>

                  <span style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: '2.2rem',
                    fontWeight: 900,
                    color: '#E2E8F0',
                    lineHeight: 1
                  }}>
                    {step.num}
                  </span>
                </div>

                <h3 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0F172A', marginBottom: '8px' }}>
                  {step.title}
                </h3>

                <p style={{ fontSize: '0.9rem', color: '#64748B', lineHeight: 1.55, marginBottom: '18px', flexGrow: 1 }}>
                  {step.description}
                </p>

                <div style={{
                  padding: '4px 10px',
                  borderRadius: 'var(--radius-full)',
                  background: '#ECFDF5',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                  color: '#059669',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: 'auto'
                }}>
                  <CheckCircle2 size={13} /> {step.highlight}
                </div>

              </div>
            );
          })}
        </div>

        {/* Process CTA Button */}
        <div style={{ textAlign: 'center', marginTop: '48px' }}>
          <button onClick={onOpenBooking} className="btn btn-primary btn-lg" style={{ gap: '8px' }}>
            Book Your Free Inspection Today <ArrowRight size={18} />
          </button>
        </div>

      </div>
    </section>
  );
}
