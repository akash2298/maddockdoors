import React, { useState } from 'react';
import { Wrench, Shield, Smartphone, ArrowUpRight, Zap, CheckCircle2, ChevronRight, Sparkles, Settings } from 'lucide-react';

export default function Services({ onOpenBooking }) {
  const [activeTab, setActiveTab] = useState('all');

  const services = [
    {
      id: 'spring-repair',
      category: 'repair',
      icon: Wrench,
      title: 'Garage Door Repair & Spring Replacement',
      tagline: 'Same-day urgent repair for snapped torsion & extension springs',
      description: 'A broken spring renders your garage door dangerous and stuck. We carry high-cycle oil-tempered springs, heavy-duty cables, and precision balance tools to restore safe operation immediately.',
      features: [
        '25,000+ cycle oil-tempered springs',
        'Aircraft-grade steel cable replacement',
        'Track alignment & roller swap',
        'Same-day emergency dispatch'
      ],
      popular: true,
      priceBadge: 'Flat-Rate Honest Quotes'
    },
    {
      id: 'new-doors',
      category: 'installation',
      icon: Sparkles,
      title: 'New Garage Door Installation & Replacement',
      tagline: 'Elevate your home curb appeal with Clopay & CHI doors',
      description: 'Choose from timeless carriage house designs, sleek modern glass doors, or energy-efficient polyurethane insulated steel doors engineered for Georgia climate resilience.',
      features: [
        'Clopay & CHI authorized dealer',
        'Custom carriage house & modern glass',
        'R-18+ thermal insulation options',
        'Free in-home design & quote'
      ],
      popular: true,
      priceBadge: 'High Resale ROI'
    },
    {
      id: 'openers',
      category: 'openers',
      icon: Smartphone,
      title: 'Smart Garage Opener Repair & Installation',
      tagline: 'Ultra-quiet belt drives, Wi-Fi controls & wall jackshafts',
      description: 'Upgrade to smooth, whisper-quiet LiftMaster and Genie openers equipped with smartphone app control, battery backup, and integrated security cameras.',
      features: [
        'LiftMaster & Genie official installer',
        'MyQ smartphone remote operation',
        'Space-saving wall jackshaft openers',
        'Battery backup during power outages'
      ],
      popular: false,
      priceBadge: 'Whisper Quiet Tech'
    },
    {
      id: 'high-lift',
      category: 'conversions',
      icon: ArrowUpRight,
      title: 'High-Lift Track & Ceiling Space Conversions',
      tagline: 'Maximize garage ceiling height for car lifts or overhead storage',
      description: 'Convert standard horizontal door tracks to high-lift configurations. Perfect for homeowners installing automotive lifts or storing tall vehicles.',
      features: [
        'Custom high-lift track extension',
        'Wall-mount direct drive opener',
        'Automotive car lift headroom',
        'Heavy-duty spring re-torsion'
      ],
      popular: false,
      priceBadge: 'Custom Engineering'
    },
    {
      id: 'maintenance',
      category: 'repair',
      icon: Settings,
      title: '21-Point Safety Inspection & Tune-Up',
      tagline: 'Prevent costly emergency breakdowns & eliminate noisy squeaks',
      description: 'Extend the lifespan of your garage door system with our 21-point safety inspection. We lubricate moving parts, adjust spring tension, and test safety sensors.',
      features: [
        'Full 21-point diagnostic check',
        'High-grade silicone lube application',
        'Safety eye sensor calibration',
        'Hardware & bolt tightening'
      ],
      popular: false,
      priceBadge: 'Preventative Care'
    },
    {
      id: 'off-track',
      category: 'repair',
      icon: Zap,
      title: 'Off-Track Repair & Quiet Roller Upgrades',
      tagline: 'Safely reset crooked or derailed garage doors without panel damage',
      description: 'Has your garage door jumped off its tracks due to a snapped cable? Our technicians safely realign tracks and install sealed ball-bearing nylon rollers for quiet operation.',
      features: [
        'Derailed door safe reset',
        '13-ball bearing nylon quiet rollers',
        'Heavy-gauge track brackets',
        'Immediate safety risk mitigation'
      ],
      popular: false,
      priceBadge: 'Silent Glide'
    }
  ];

  const filteredServices = activeTab === 'all' 
    ? services 
    : services.filter(s => s.category === activeTab);

  return (
    <section id="services" className="section-padding" style={{
      backgroundColor: '#F8FAFC',
      position: 'relative'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '48px' }}>
          <div className="sub-heading">
            <Wrench size={16} /> Comprehensive Garage Solutions
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '14px', color: '#0F172A' }}>
            Expert Garage Door Services in <span className="gradient-text">Brooks & Peachtree City</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Whether you need emergency spring repair today or are shopping for a custom garage door upgrade, Maddock Garage Doors LLC delivers quality.
          </p>

          {/* Filter Tabs */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '8px',
            padding: '6px',
            borderRadius: 'var(--radius-full)',
            background: '#FFFFFF',
            border: '1px solid #E2E8F0',
            marginTop: '28px',
            flexWrap: 'wrap',
            justifyContent: 'center',
            boxShadow: 'var(--shadow-sm)'
          }}>
            {[
              { id: 'all', label: 'All Services' },
              { id: 'repair', label: 'Repairs & Springs' },
              { id: 'installation', label: 'New Door Installation' },
              { id: 'openers', label: 'Smart Openers' },
              { id: 'conversions', label: 'High-Lift Conversions' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                style={{
                  padding: '8px 20px',
                  borderRadius: 'var(--radius-full)',
                  border: 'none',
                  fontSize: '0.88rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  transition: 'all 0.3s ease',
                  backgroundColor: activeTab === tab.id ? '#397FF5' : 'transparent',
                  color: activeTab === tab.id ? '#FFFFFF' : '#64748B'
                }}
              >
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Services Cards Grid */}
        <div className="grid-3" style={{ gap: '28px' }}>
          {filteredServices.map((service) => {
            const IconComp = service.icon;
            return (
              <div
                key={service.id}
                className="clean-card clean-card-hover"
                style={{
                  padding: '32px 28px',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  borderRadius: 'var(--radius-lg)',
                  position: 'relative',
                  border: service.popular ? '1.5px solid #397FF5' : '1px solid #E2E8F0',
                  backgroundColor: '#FFFFFF'
                }}
              >
                {service.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: '#397FF5',
                    color: '#FFFFFF',
                    fontSize: '0.72rem',
                    fontWeight: 800,
                    padding: '3px 10px',
                    borderRadius: 'var(--radius-full)',
                    textTransform: 'uppercase'
                  }}>
                    Most Requested
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                    <div style={{
                      width: '52px',
                      height: '52px',
                      borderRadius: 'var(--radius-md)',
                      background: 'rgba(57, 127, 245, 0.1)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#397FF5'
                    }}>
                      <IconComp size={26} />
                    </div>

                    <span className="badge-pill badge-blue" style={{ fontSize: '0.75rem' }}>
                      {service.priceBadge}
                    </span>
                  </div>

                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
                    {service.title}
                  </h3>

                  <p style={{ fontSize: '0.88rem', color: '#397FF5', fontWeight: 600, marginBottom: '12px' }}>
                    {service.tagline}
                  </p>

                  <p style={{ fontSize: '0.92rem', color: '#64748B', lineHeight: 1.6, marginBottom: '20px' }}>
                    {service.description}
                  </p>

                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', marginBottom: '24px' }}>
                    {service.features.map((feat, idx) => (
                      <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.86rem', color: '#334155' }}>
                        <CheckCircle2 size={15} color="#397FF5" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <button
                  onClick={onOpenBooking}
                  className="btn btn-secondary"
                  style={{
                    width: '100%',
                    justifyContent: 'space-between',
                    marginTop: 'auto'
                  }}
                >
                  <span>Book {service.title.split(' ')[0]} Service</span>
                  <ChevronRight size={16} color="#397FF5" />
                </button>

              </div>
            );
          })}
        </div>

        {/* Emergency Banner */}
        <div className="clean-card" style={{
          marginTop: '56px',
          padding: '28px 36px',
          borderRadius: 'var(--radius-lg)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          gap: '20px',
          border: '1.5px solid #397FF5',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
        }}>
          <div style={{ maxWidth: '680px' }}>
            <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Need Emergency Spring Repair Right Now?
            </h4>
            <p style={{ color: '#475569', fontSize: '0.95rem' }}>
              Our service trucks are fully stocked with all standard torsion spring sizes. Same-day service available in Peachtree City, Brooks, and Fayette County!
            </p>
          </div>

          <a href="tel:678-723-5744" className="btn btn-primary btn-lg">
            Call Dispatch: 678-723-5744
          </a>
        </div>

      </div>
    </section>
  );
}
