import React from 'react';
import { Phone, Mail, MapPin, Clock, ShieldCheck, ChevronRight } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Footer({ onOpenBooking }) {
  return (
    <footer style={{
      backgroundColor: '#0F172A',
      color: '#94A3B8',
      paddingTop: '72px',
      paddingBottom: '36px'
    }}>
      <div className="container">

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.4fr 1fr 1fr 1.2fr',
          gap: '40px',
          marginBottom: '52px'
        }} className="footer-grid">

          {/* Column 1: Brand */}
          <div>
            <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none', marginBottom: '18px' }}>
              <img
                src={logoImg}
                alt="Maddock Garage Doors LLC"
                style={{ height: '46px', objectFit: 'contain', filter: 'invert(1)' }}
              />
            </a>

            <p style={{ fontSize: '0.9rem', color: '#94A3B8', lineHeight: 1.6, marginBottom: '20px' }}>
              Your local residential garage door & opener specialists serving Brooks, Peachtree City, Fayetteville, Senoia, Newnan, and Fayette/Coweta County.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
              <img
                src="https://maddockdoors.com/wp-content/uploads/2021/03/creditCardlogos-300x55.png"
                alt="Credit Cards Accepted"
                style={{ height: '30px', objectFit: 'contain', opacity: 0.9, width: 'fit-content' }}
              />
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontSize: '0.8rem', color: '#CBD5E1' }}>
                <ShieldCheck size={16} color="#397FF5" /> HomeAdvisor Elite Service Provider
              </div>
            </div>
          </div>

          {/* Column 2: Navigation */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Quick Navigation
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px' }}>
              {[
                { name: 'Home', href: '#hero' },
                { name: 'About Us', href: '#about' },
                { name: 'Services & Repairs', href: '#services' },
                { name: 'Complete Projects', href: '#projects' },
                { name: '4-Step Process', href: '#process' },
                { name: 'Customer Reviews', href: '#reviews' },
                { name: 'Service Area', href: '#service-area' },
                { name: 'FAQs', href: '#faqs' },
              ].map(link => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    style={{
                      color: '#94A3B8',
                      textDecoration: 'none',
                      fontSize: '0.88rem',
                      display: 'flex',
                      alignItems: 'center',
                      gap: '6px',
                      transition: 'color 0.2s ease'
                    }}
                    onMouseEnter={(e) => e.target.style.color = '#60A5FA'}
                    onMouseLeave={(e) => e.target.style.color = '#94A3B8'}
                  >
                    <ChevronRight size={14} color="#397FF5" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '10px', fontSize: '0.88rem' }}>
              <li>Broken Torsion Spring Repair</li>
              <li>New Carriage Door Installation</li>
              <li>LiftMaster Smart Opener Sales</li>
              <li>High-Lift Track Conversions</li>
              <li>Off-Track Door Realignment</li>
              <li>Quiet Nylon Roller Upgrades</li>
              <li>21-Point Safety Inspection</li>
            </ul>
          </div>

          {/* Column 4: Contact */}
          <div>
            <h4 style={{ fontSize: '1.05rem', fontWeight: 800, color: '#FFFFFF', marginBottom: '18px' }}>
              Contact & Location
            </h4>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <MapPin size={18} color="#60A5FA" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong style={{ color: '#FFFFFF' }}>Maddock Garage Doors LLC</strong><br />
                  Hwy 85 Connector, Brooks, GA 30215<br />
                  <span style={{ fontSize: '0.78rem', color: '#60A5FA' }}>(1 mile from Hwy 74 in Peachtree City)</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Phone size={18} color="#397FF5" style={{ flexShrink: 0 }} />
                <a href="tel:678-723-5744" style={{ color: '#FFFFFF', fontWeight: 700, textDecoration: 'none' }}>
                  678-723-5744
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                <Mail size={18} color="#60A5FA" style={{ flexShrink: 0 }} />
                <a href="mailto:maddockgaragedoors@gmail.com" style={{ color: '#94A3B8', textDecoration: 'none' }}>
                  maddockgaragedoors@gmail.com
                </a>
              </div>

              <div style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                <Clock size={18} color="#94A3B8" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div style={{ fontSize: '0.82rem' }}>
                  <strong>Mon – Sat:</strong> 8:00 AM – 5:00 PM<br />
                  <strong>Sunday:</strong> Closed
                </div>
              </div>

              <a
                href="http://www.facebook.com/pages/Maddock-Garage-Doors/345836608851233"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  color: '#60A5FA',
                  fontWeight: 600,
                  fontSize: '0.82rem',
                  textDecoration: 'none',
                  marginTop: '4px'
                }}
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="#60A5FA"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C20.212 23.027 24 18.062 24 12.073z" /></svg> Follow Us on Facebook
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div style={{
          paddingTop: '20px',
          borderTop: '1px solid rgba(255, 255, 255, 0.08)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
          fontSize: '0.8rem'
        }}>
          <div>
            © {new Date().getFullYear()} Maddock Garage Doors LLC. All Rights Reserved. Brooks, GA 30215.
          </div>

          <div style={{ display: 'flex', gap: '16px' }}>
            <span>Privacy Policy</span>
            <span>Terms of Service</span>
            <span>Licensed & Insured</span>
          </div>

          <strong><a href="https://www.facebook.com/devakash2298" style={{ color: '#ffffff', textDecoration: 'none' }}>Build by Akash Hasan</a></strong>
        </div>

      </div>
    </footer>
  );
}
