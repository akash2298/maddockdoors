import React from 'react';
import { ShieldCheck, Award, TrendingUp, CheckCircle, XCircle } from 'lucide-react';
import heroImg from '../assets/about.jpeg';

export default function About({ onOpenBooking }) {
  const comparisonData = [
    {
      feature: 'Technician Expertise',
      maddock: 'Certified, factory-trained garage door specialists',
      others: 'Subcontractors or general handyman laborers'
    },
    {
      feature: 'Parts & Components',
      maddock: 'High-cycle oil-tempered springs & quiet nylon rollers',
      others: 'Low-grade standard 10,000-cycle plastic rollers'
    },
    {
      feature: 'Response Time',
      maddock: 'Same-day service & stocked trucks for 1-visit fix',
      others: 'Multi-day waiting windows & ordering delays'
    },
    {
      feature: 'Pricing Model',
      maddock: 'Upfront flat-rate transparent quotes with zero surprises',
      others: 'Surprise add-on fees after work is disassembled'
    },
    {
      feature: 'Workmanship Warranty',
      maddock: 'Written parts & labor lifetime warranty options',
      others: '30-day limited guarantee or no warranty'
    }
  ];

  return (
    <section id="about" className="section-padding" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container">

        {/* About Overview */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '56px',
          alignItems: 'center',
          marginBottom: '72px'
        }} className="about-grid">

          {/* Left Column: Visual Card */}
          <div style={{ position: 'relative' }}>
            <div className="clean-card" style={{
              overflow: 'hidden',
              borderRadius: 'var(--radius-lg)',
              border: '1px solid #E2E8F0',
              position: 'relative',
              backgroundColor: '#000000'
            }}>
              <img
                src={heroImg}
                alt="Maddock Garage Doors Work"
                style={{
                  width: '100%',
                  height: '400px',
                  objectFit: 'cover',
                  display: 'block',
                  maskImage: 'linear-gradient(to bottom, rgb(0, 0, 0) 0%, rgba(0, 0, 0, 0) 100%)'
                }}
              />
              <div style={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                width: '100%',
                padding: '24px',
                background: 'linear-gradient(to top, rgba(15, 23, 42, 0.95) 0%, rgba(15, 23, 42, 0) 100%)',
                color: '#FFFFFF'
              }}>
                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#60A5FA',
                  fontSize: '0.8rem',
                  fontWeight: 800,
                  textTransform: 'uppercase',
                  letterSpacing: '0.08em',
                  marginBottom: '4px'
                }}>
                  <TrendingUp size={16} /> High Resale ROI Fact
                </div>
                <h4 style={{ fontSize: '1.2rem', color: '#FFFFFF', fontWeight: 800 }}>
                  Did You Know? Garage Door Replacement Delivers #1 Resale ROI
                </h4>
                <p style={{ fontSize: '0.88rem', color: '#CBD5E1', marginTop: '4px' }}>
                  Upgrading your garage door yields over 100% return on investment when selling your home.
                </p>
              </div>
            </div>

            {/* Floating Experience Badge */}
            <div style={{
              position: 'absolute',
              top: '-16px',
              right: '-16px',
              background: '#397FF5',
              color: '#FFFFFF',
              padding: '16px 20px',
              borderRadius: 'var(--radius-md)',
              boxShadow: '0 12px 25px rgba(57, 127, 245, 0.35)',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              fontWeight: 800
            }} className="desktop-only">
              <span style={{ fontSize: '1.8rem', lineHeight: 1 }}>15+</span>
              <span style={{ fontSize: '0.75rem', textTransform: 'uppercase' }}>Years Local</span>
            </div>
          </div>

          {/* Right Column: Copy */}
          <div>
            <div className="sub-heading">
              <ShieldCheck size={16} /> About Maddock Garage Doors LLC
            </div>

            <h2 style={{ fontSize: 'clamp(2rem, 3.5vw, 2.75rem)', marginBottom: '18px', lineHeight: 1.2, color: '#0F172A' }}>
              Local Family-Owned Excellence in <span className="gradient-text">Brooks & Peachtree City</span>
            </h2>

            <p style={{ color: '#475569', fontSize: '1.05rem', lineHeight: 1.65, marginBottom: '18px' }}>
              Maddock Garage Doors LLC is your local, trusted residential garage door repair and installation specialist located on Hwy 85 Connector in Brooks, GA — just 1 mile from Hwy 74 in Peachtree City.
            </p>

            <p style={{ color: '#64748B', fontSize: '0.95rem', lineHeight: 1.65, marginBottom: '28px' }}>
              We understand that a broken garage door spring or stuck opener disrupts your day. That’s why our licensed, factory-trained technicians arrive in fully stocked trucks to restore safety and convenience in a single visit.
            </p>

            {/* Stats Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(3, 1fr)',
              gap: '14px',
              marginBottom: '28px'
            }} className="stats-grid">
              {[
                { number: '2,500+', label: 'Doors Serviced' },
                { number: '5.0★', label: 'HomeAdvisor Rated' },
                { number: '100%', label: 'Flat-Rate Honest' }
              ].map((stat, i) => (
                <div key={i} style={{
                  background: '#F8FAFC',
                  border: '1px solid #E2E8F0',
                  padding: '14px',
                  borderRadius: 'var(--radius-sm)',
                  textAlign: 'center'
                }}>
                  <div style={{ fontSize: '1.5rem', fontWeight: 900, color: '#397FF5', fontFamily: 'var(--font-heading)' }}>
                    {stat.number}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 600, marginTop: '2px' }}>
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>

            <button onClick={onOpenBooking} className="btn btn-primary">
              Learn More & Schedule Free Inspection
            </button>

          </div>

        </div>

        {/* Comparative Table */}
        <div style={{ marginTop: '48px' }}>
          <div style={{ textAlign: 'center', marginBottom: '32px' }}>
            <div className="sub-heading">
              <Award size={16} /> Unmatched Standards
            </div>
            <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A' }}>
              The Maddock Garage Doors Difference
            </h3>
          </div>

          <div className="clean-card" style={{ overflowX: 'auto', borderRadius: 'var(--radius-md)' }}>
            <table style={{
              width: '100%',
              borderCollapse: 'collapse',
              textAlign: 'left',
              minWidth: '600px'
            }}>
              <thead>
                <tr style={{ background: '#F8FAFC', borderBottom: '1px solid #E2E8F0' }}>
                  <th style={{ padding: '16px 20px', color: '#0F172A', fontSize: '0.92rem', fontWeight: 700 }}>Service Standard</th>
                  <th style={{ padding: '16px 20px', color: '#397FF5', fontSize: '0.98rem', fontWeight: 800, background: '#EFF6FF' }}>
                    ★ Maddock Garage Doors LLC
                  </th>
                  <th style={{ padding: '16px 20px', color: '#64748B', fontSize: '0.92rem', fontWeight: 600 }}>Generic Contractors</th>
                </tr>
              </thead>
              <tbody>
                {comparisonData.map((row, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #F1F5F9' }}>
                    <td style={{ padding: '14px 20px', fontWeight: 700, color: '#1E293B', fontSize: '0.88rem' }}>
                      {row.feature}
                    </td>
                    <td style={{ padding: '14px 20px', background: 'rgba(57, 127, 245, 0.03)', color: '#059669', fontWeight: 600, fontSize: '0.88rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <CheckCircle size={16} color="#10B981" />
                        {row.maddock}
                      </div>
                    </td>
                    <td style={{ padding: '14px 20px', color: '#64748B', fontSize: '0.88rem' }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                        <XCircle size={16} color="#EF4444" />
                        {row.others}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}
