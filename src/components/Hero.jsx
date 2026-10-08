import React, { useState } from 'react';
import { Shield, Star, Phone, ArrowRight, CheckCircle2, Wrench, Sparkles, Clock, MapPin, Zap } from 'lucide-react';
import heroImg from '../assets/hero.jpeg';

export default function Hero({ onOpenBooking }) {
  const [serviceType, setServiceType] = useState('Broken Spring Repair');
  const [zipCode, setZipCode] = useState('');
  const [phone, setPhone] = useState('');
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleQuickQuoteSubmit = (e) => {
    e.preventDefault();
    if (!phone) return;
    setFormSubmitted(true);
  };

  return (
    <section id="hero" style={{
      position: 'relative',
      padding: '72px 0 60px 0',
      background: 'linear-gradient(180deg, #EFF6FF 0%, #F8FAFC 100%)',
      overflow: 'hidden'
    }}>
      {/* Decorative Subtle Light Overlay */}
      <div style={{
        position: 'absolute',
        top: 0,
        right: 0,
        width: '80%',
        height: '84%',
        backgroundImage: `url(${heroImg})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        opacity: 0.4,
        maskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        WebkitMaskImage: 'linear-gradient(to left, rgba(0,0,0,1) 0%, rgba(0,0,0,0) 100%)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 0.95fr',
          gap: '48px',
          alignItems: 'center'
        }} className="hero-grid">

          {/* Left Column: Focused Copy */}
          <div>
            <div className="sub-heading">
              <Sparkles size={16} /> Brooks & Peachtree City's Premier Garage Door Experts
            </div>

            <h1 style={{
              fontSize: 'clamp(2.5rem, 4.8vw, 3.8rem)',
              fontWeight: 900,
              lineHeight: 1.12,
              letterSpacing: '-0.03em',
              marginBottom: '20px',
              color: '#0F172A'
            }}>
              Superior Garage Doors. <br />
              <span className="gradient-text">Flawless Same-Day Repair.</span>
            </h1>

            <p style={{
              fontSize: '1.1rem',
              color: '#475569',
              lineHeight: 1.65,
              marginBottom: '28px',
              maxWidth: '580px'
            }}>
              From urgent spring replacements and quiet smart openers to luxury custom carriage house installations. Maddock Garage Doors LLC delivers 5-star precision craftsmanship across Brooks, Peachtree City & Fayette County.
            </p>

            {/* Bullet Highlights */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '12px',
              marginBottom: '32px',
              maxWidth: '540px'
            }} className="hero-features">
              {[
                'Same-Day Emergency Repair',
                'Upfront Flat-Rate Pricing',
                'LiftMaster & Clopay Dealer',
                '100% Satisfaction Guarantee'
              ].map((feature, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontSize: '0.92rem', fontWeight: 600 }}>
                  <CheckCircle2 size={18} color="#397FF5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>

            {/* Action Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', flexWrap: 'wrap', marginBottom: '36px' }}>
              <button
                onClick={onOpenBooking}
                className="btn btn-primary btn-lg"
              >
                <Wrench size={18} />
                Schedule Free Estimate
              </button>

              <a
                href="tel:678-723-5744"
                className="btn btn-secondary btn-lg"
              >
                <Phone size={18} color="#397FF5" />
                Call (678) 723-5744
              </a>
            </div>

            {/* Rating Badges */}
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              paddingTop: '20px',
              borderTop: '1px solid #E2E8F0',
              flexWrap: 'wrap'
            }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  background: '#FEF3C7',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                  <Star size={22} fill="#D97706" color="#D97706" />
                </div>
                <div>
                  <div style={{ fontWeight: 800, fontSize: '1.05rem', color: '#0F172A' }}>5.0 / 5.0 Rating</div>
                  <div style={{ fontSize: '0.8rem', color: '#64748B' }}>HomeAdvisor Elite & Google Reviews</div>
                </div>
              </div>

              <div style={{ height: '28px', width: '1px', background: '#E2E8F0' }} className="desktop-only" />

              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Shield size={20} color="#397FF5" />
                <span style={{ fontSize: '0.88rem', color: '#334155', fontWeight: 600 }}>Licensed & Insured Local Team</span>
              </div>
            </div>

          </div>

          {/* Right Column: Clean Quick Quote Form */}
          <div>
            <div className="clean-card" style={{
              padding: '32px',
              borderRadius: 'var(--radius-lg)',
              border: '1.5px solid rgba(57, 127, 245, 0.25)',
              boxShadow: '0 20px 40px -10px rgba(57, 127, 245, 0.12)',
              backgroundColor: '#FFFFFF'
            }}>

              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: '20px',
                paddingBottom: '16px',
                borderBottom: '1px solid #F1F5F9'
              }}>
                <div>
                  <h3 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>
                    Instant Service Estimate
                  </h3>
                  <p style={{ fontSize: '0.85rem', color: '#64748B' }}>
                    Flat-rate pricing & fast local dispatch
                  </p>
                </div>
                <span className="badge-pill badge-blue" style={{ fontSize: '0.75rem' }}>
                  <Zap size={14} /> Fast Response
                </span>
              </div>

              {!formSubmitted ? (
                <form onSubmit={handleQuickQuoteSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Needed Service:
                    </label>
                    <select
                      value={serviceType}
                      onChange={(e) => setServiceType(e.target.value)}
                      style={{
                        width: '100%',
                        padding: '12px 14px',
                        borderRadius: 'var(--radius-sm)',
                        backgroundColor: '#F8FAFC',
                        border: '1px solid #CBD5E1',
                        color: '#0F172A',
                        fontSize: '0.92rem',
                        fontWeight: 600,
                        outline: 'none'
                      }}
                    >
                      <option value="Broken Spring Repair">Broken Spring & Cable Repair</option>
                      <option value="Garage Door Opener Service">Smart Opener Repair / Sales</option>
                      <option value="New Garage Door Installation">New Garage Door Installation</option>
                      <option value="Off-Track Derailed Door">Off-Track Door Realignment</option>
                      <option value="High Lift Conversion">High-Lift Track Conversion</option>
                      <option value="Routine Tune-Up & Maintenance">21-Point Maintenance Tune-Up</option>
                    </select>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Your Zip Code (GA):
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="text"
                        placeholder="e.g. 30205 (Brooks) or 30269 (Peachtree City)"
                        value={zipCode}
                        onChange={(e) => setZipCode(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 38px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                      <MapPin size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                    </div>
                  </div>

                  <div>
                    <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                      Phone Number:
                    </label>
                    <div style={{ position: 'relative' }}>
                      <input
                        type="tel"
                        required
                        placeholder="(678) 000-0000"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        style={{
                          width: '100%',
                          padding: '12px 14px 12px 38px',
                          borderRadius: 'var(--radius-sm)',
                          backgroundColor: '#F8FAFC',
                          border: '1px solid #CBD5E1',
                          color: '#0F172A',
                          fontSize: '0.92rem',
                          outline: 'none'
                        }}
                      />
                      <Phone size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="btn btn-primary btn-lg"
                    style={{ width: '100%', marginTop: '6px' }}
                  >
                    Request Free Estimate <ArrowRight size={18} />
                  </button>

                  <div style={{
                    textAlign: 'center',
                    fontSize: '0.78rem',
                    color: '#64748B',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '4px'
                  }}>
                    <Clock size={12} /> No obligation estimate. 100% private.
                  </div>

                </form>
              ) : (
                <div style={{
                  textAlign: 'center',
                  padding: '24px 10px',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  gap: '14px'
                }}>
                  <div style={{
                    width: '56px',
                    height: '56px',
                    borderRadius: '50%',
                    background: '#ECFDF5',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '2px solid #10B981'
                  }}>
                    <CheckCircle2 size={32} color="#10B981" />
                  </div>
                  <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0F172A' }}>Estimate Requested!</h4>
                  <p style={{ fontSize: '0.9rem', color: '#475569', lineHeight: 1.5 }}>
                    Thank you! Our Maddock Doors team will review your request for <strong>{serviceType}</strong> and call <strong>{phone}</strong> shortly.
                  </p>
                  <button
                    onClick={onOpenBooking}
                    className="btn btn-secondary btn-sm"
                  >
                    Schedule specific time slot online →
                  </button>
                </div>
              )}

            </div>
          </div>

        </div>

        {/* Vendor Partner Brands Bar */}
        <div style={{
          marginTop: '60px',
          paddingTop: '28px',
          borderTop: '1px solid #E2E8F0'
        }}>
          <p style={{
            textAlign: 'center',
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.12em',
            color: '#64748B',
            marginBottom: '20px'
          }}>
            Authorized Dealer & Factory-Trained Installer
          </p>

          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-around',
            flexWrap: 'wrap',
            gap: '28px',
            opacity: 0.85
          }}>
            {[
              { name: 'LiftMaster', url: 'https://maddockdoors.com/wp-content/uploads/2026/03/LiftMaster.png' },
              { name: 'Clopay', url: 'https://maddockdoors.com/wp-content/uploads/2026/03/Clopay.png' },
              { name: 'CHI Overhead Doors', url: 'https://maddockdoors.com/wp-content/uploads/2026/03/CHI.png' },
              { name: 'Genie Opener', url: 'https://maddockdoors.com/wp-content/uploads/2026/03/Genie.png' },
              { name: 'SouthEast Garage Doors', url: 'https://maddockdoors.com/wp-content/uploads/2026/03/SouthEast.png' }
            ].map((brand, i) => (
              <img
                key={i}
                src={brand.url}
                alt={brand.name}
                style={{
                  height: '38px',
                  objectFit: 'contain',
                  filter: 'grayscale(20%)',
                  transition: 'all 0.3s ease',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => {
                  e.target.style.filter = 'grayscale(0%)';
                  e.target.style.transform = 'scale(1.06)';
                }}
                onMouseLeave={(e) => {
                  e.target.style.filter = 'grayscale(20%)';
                  e.target.style.transform = 'scale(1)';
                }}
              />
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
