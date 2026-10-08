import React, { useState } from 'react';
import { MapPin, Search, CheckCircle2, Phone, Navigation } from 'lucide-react';

export default function ServiceArea({ onOpenBooking }) {
  const [searchZip, setSearchZip] = useState('');
  const [checkResult, setCheckResult] = useState(null);

  const coveredZips = [
    { zip: '30205', name: 'Brooks', county: 'Fayette County' },
    { zip: '30269', name: 'Peachtree City', county: 'Fayette County' },
    { zip: '30214', name: 'Fayetteville', county: 'Fayette County' },
    { zip: '30215', name: 'Fayetteville / Brooks', county: 'Fayette County' },
    { zip: '30276', name: 'Senoia', county: 'Coweta County' },
    { zip: '30263', name: 'Newnan', county: 'Coweta County' },
    { zip: '30265', name: 'Newnan / East', county: 'Coweta County' },
    { zip: '30290', name: 'Tyrone', county: 'Fayette County' },
    { zip: '30277', name: 'Sharpsburg', county: 'Coweta County' }
  ];

  const handleZipCheck = (e) => {
    e.preventDefault();
    const cleanZip = searchZip.trim();
    if (!cleanZip) return;

    const matched = coveredZips.find(z => z.zip === cleanZip);
    if (matched || cleanZip.startsWith('302') || cleanZip.startsWith('303')) {
      setCheckResult({
        status: 'covered',
        locationName: matched ? matched.name : 'Your GA Area',
        message: `Great news! We provide same-day garage door service & spring repair in ${cleanZip} (${matched ? matched.name : 'Fayette/Coweta County'}).`
      });
    } else {
      setCheckResult({
        status: 'extended',
        locationName: 'Surrounding GA Area',
        message: `Zipcode ${cleanZip} is in our extended Georgia service region. Call 678-723-5744 to confirm fast dispatch time!`
      });
    }
  };

  return (
    <section id="service-area" className="section-padding" style={{
      backgroundColor: '#F8FAFC',
      position: 'relative',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1.1fr',
          gap: '48px',
          alignItems: 'center'
        }} className="service-area-grid">
          
          <div>
            <div className="sub-heading">
              <Navigation size={16} /> Local Service Area
            </div>

            <h2 style={{ fontSize: 'clamp(2.2rem, 3.8vw, 3rem)', fontWeight: 800, marginBottom: '16px', lineHeight: 1.2, color: '#0F172A' }}>
              Serving Brooks, Peachtree City & <span className="gradient-text">Fayette / Coweta County</span>
            </h2>

            <p style={{ color: '#475569', fontSize: '1.02rem', lineHeight: 1.6, marginBottom: '28px' }}>
              Located on Hwy 85 Connector in Brooks, GA (just 1 mile from Hwy 74 in Peachtree City), Maddock Garage Doors LLC provides rapid response repairs across all local communities.
            </p>

            {/* Zip Checker */}
            <div className="clean-card" style={{
              padding: '24px',
              borderRadius: 'var(--radius-md)',
              border: '1.5px solid #397FF5',
              marginBottom: '28px',
              backgroundColor: '#FFFFFF'
            }}>
              <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#0F172A', marginBottom: '6px' }}>
                Check Same-Day Service Availability in Your Zip Code:
              </h4>
              
              <form onSubmit={handleZipCheck} style={{ display: 'flex', gap: '10px', marginTop: '10px' }}>
                <div style={{ position: 'relative', flexGrow: 1 }}>
                  <input
                    type="text"
                    placeholder="Enter 5-Digit GA Zip Code (e.g. 30269)"
                    value={searchZip}
                    onChange={(e) => setSearchZip(e.target.value)}
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
                  <Search size={16} color="#64748B" style={{ position: 'absolute', left: '12px', top: '14px' }} />
                </div>
                <button type="submit" className="btn btn-primary btn-sm">
                  Check Zip
                </button>
              </form>

              {checkResult && (
                <div style={{
                  marginTop: '14px',
                  padding: '12px 14px',
                  borderRadius: 'var(--radius-sm)',
                  backgroundColor: checkResult.status === 'covered' ? '#ECFDF5' : '#FEF3C7',
                  border: `1px solid ${checkResult.status === 'covered' ? '#10B981' : '#F59E0B'}`,
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '10px'
                }}>
                  <CheckCircle2 size={18} color={checkResult.status === 'covered' ? '#10B981' : '#D97706'} style={{ flexShrink: 0, marginTop: '2px' }} />
                  <div>
                    <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.88rem' }}>
                      {checkResult.locationName}
                    </div>
                    <div style={{ fontSize: '0.82rem', color: '#334155', marginTop: '2px' }}>
                      {checkResult.message}
                    </div>
                    <button
                      onClick={onOpenBooking}
                      style={{
                        background: 'none',
                        border: 'none',
                        color: '#397FF5',
                        fontWeight: 700,
                        fontSize: '0.82rem',
                        cursor: 'pointer',
                        marginTop: '4px',
                        textDecoration: 'underline'
                      }}
                    >
                      Book Appointment Now →
                    </button>
                  </div>
                </div>
              )}
            </div>

            {/* Towns Grid */}
            <div style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(2, 1fr)',
              gap: '10px'
            }}>
              {coveredZips.map((item, idx) => (
                <div key={idx} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '8px',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  background: '#FFFFFF',
                  border: '1px solid #E2E8F0'
                }}>
                  <MapPin size={15} color="#397FF5" />
                  <div>
                    <div style={{ fontWeight: 700, fontSize: '0.85rem', color: '#0F172A' }}>{item.name}</div>
                    <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Zip {item.zip} • {item.county}</div>
                  </div>
                </div>
              ))}
            </div>

          </div>

          {/* Location Card */}
          <div className="clean-card" style={{
            padding: '32px',
            borderRadius: 'var(--radius-lg)',
            border: '1.5px solid #E2E8F0',
            backgroundColor: '#FFFFFF',
            boxShadow: 'var(--shadow-md)'
          }}>
            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              marginBottom: '20px',
              paddingBottom: '16px',
              borderBottom: '1px solid #F1F5F9'
            }}>
              <div style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'rgba(57, 127, 245, 0.1)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#397FF5'
              }}>
                <MapPin size={22} />
              </div>
              <div>
                <h3 style={{ fontSize: '1.25rem', color: '#0F172A', fontWeight: 800 }}>
                  Headquarters & Service Hub
                </h3>
                <p style={{ fontSize: '0.82rem', color: '#64748B' }}>
                  Brooks & Peachtree City Dispatch Center
                </p>
              </div>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '24px' }}>
              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Physical Address:</div>
                <div style={{ fontSize: '1rem', color: '#0F172A', fontWeight: 700, marginTop: '2px' }}>
                  Hwy 85 Connector, Brooks, GA 30215
                </div>
                <div style={{ fontSize: '0.82rem', color: '#397FF5', marginTop: '2px' }}>
                  (1 mile from Hwy 74 in Peachtree City)
                </div>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Dispatch Phone:</div>
                <a href="tel:678-723-5744" style={{ fontSize: '1.2rem', color: '#0F172A', fontWeight: 800, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', marginTop: '2px' }}>
                  <Phone size={18} color="#397FF5" /> 678-723-5744
                </a>
              </div>

              <div>
                <div style={{ fontSize: '0.78rem', color: '#64748B', fontWeight: 700, textTransform: 'uppercase' }}>Operating Hours:</div>
                <div style={{ fontSize: '0.88rem', color: '#475569', marginTop: '2px', lineHeight: 1.5 }}>
                  Monday – Saturday: 8:00 AM – 5:00 PM<br />
                  Sunday: Closed (Emergency Dispatch Available)
                </div>
              </div>
            </div>

            <button onClick={onOpenBooking} className="btn btn-primary" style={{ width: '100%' }}>
              Request Local Technician Visit
            </button>

          </div>

        </div>

      </div>
    </section>
  );
}
