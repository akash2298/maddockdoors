import React, { useState, useEffect } from 'react';
import { Phone, Clock, MapPin, Menu, X, ShieldCheck, ChevronRight, Calendar, Star } from 'lucide-react';
import logoImg from '../assets/logo.png';

export default function Navbar({ onOpenBooking }) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Home', href: '#hero' },
    { name: 'About', href: '#about' },
    { name: 'Services', href: '#services' },
    { name: 'Our Work', href: '#projects' },
    { name: 'Process', href: '#process' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Service Area', href: '#service-area' },
    { name: 'FAQs', href: '#faqs' },
  ];

  return (
    <>
      {/* Top Banner Bar */}
      <div style={{
        backgroundColor: '#0F172A',
        color: '#94A3B8',
        padding: '8px 0',
        fontSize: '0.85rem'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '12px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '20px', flexWrap: 'wrap' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#60A5FA', fontWeight: 600 }}>
              <ShieldCheck size={16} /> Same-Day Service Available
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#CBD5E1' }}>
              <MapPin size={14} color="#60A5FA" /> Brooks & Peachtree City, GA
            </span>
            <span style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#94A3B8' }} className="desktop-only">
              <Clock size={14} color="#94A3B8" /> Mon - Sat: 8:00 AM – 5:00 PM
            </span>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '4px', color: '#FBBF24', fontSize: '0.85rem', fontWeight: 700 }}>
              <Star size={14} fill="#FBBF24" color="#FBBF24" />
              <span>5.0 HomeAdvisor & Google Rated</span>
            </div>
            <a
              href="tel:678-723-5744"
              style={{
                color: '#FFFFFF',
                fontWeight: 700,
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                gap: '6px',
                background: '#397FF5',
                padding: '3px 12px',
                borderRadius: '20px'
              }}
            >
              <Phone size={14} />
              678-723-5744
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Light Navbar */}
      <header style={{
        position: 'sticky',
        top: 0,
        zIndex: 100,
        backgroundColor: '#FFFFFF',
        borderBottom: isScrolled ? '1px solid #E2E8F0' : '1px solid #F1F5F9',
        transition: 'all 0.3s ease',
        boxShadow: isScrolled ? '0 10px 25px -5px rgba(15, 23, 42, 0.08)' : 'none'
      }}>
        <div className="container" style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', height: '76px' }}>

          {/* Logo from assets */}
          <a href="#hero" style={{ display: 'flex', alignItems: 'center', gap: '12px', textDecoration: 'none' }}>
            <img
              src={logoImg}
              alt="Maddock Garage Doors LLC Logo"
              style={{ height: '46px', objectFit: 'contain' }}
            />
          </a>

          {/* Desktop Nav Links */}
          <nav style={{ display: 'flex', alignItems: 'center', gap: '28px' }} className="desktop-nav">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                style={{
                  color: '#475569',
                  textDecoration: 'none',
                  fontSize: '0.92rem',
                  fontWeight: 600,
                  transition: 'color 0.2s ease',
                }}
                onMouseEnter={(e) => e.target.style.color = '#397FF5'}
                onMouseLeave={(e) => e.target.style.color = '#475569'}
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Header Action CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }} className="desktop-nav">
            <button
              onClick={onOpenBooking}
              className="btn btn-primary btn-sm"
              style={{ display: 'flex', alignItems: 'center', gap: '8px' }}
            >
              <Calendar size={16} />
              Book Online
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            style={{
              background: 'none',
              border: 'none',
              color: '#0F172A',
              cursor: 'pointer',
              padding: '8px'
            }}
            className="mobile-toggle"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        {mobileMenuOpen && (
          <div style={{
            position: 'absolute',
            top: '100%',
            left: 0,
            width: '100%',
            backgroundColor: '#FFFFFF',
            borderBottom: '2px solid #397FF5',
            padding: '20px 24px',
            boxShadow: '0 20px 30px rgba(15, 23, 42, 0.1)',
            display: 'flex',
            flexDirection: 'column',
            gap: '12px'
          }}>
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                style={{
                  color: '#1E293B',
                  textDecoration: 'none',
                  fontSize: '1rem',
                  fontWeight: 600,
                  padding: '8px 0',
                  borderBottom: '1px solid #F1F5F9',
                  display: 'flex',
                  justify: 'space-between',
                  alignItems: 'center'
                }}
              >
                {link.name}
                <ChevronRight size={16} color="#397FF5" />
              </a>
            ))}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '8px' }}>
              <a
                href="tel:678-723-5744"
                className="btn btn-secondary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Phone size={18} color="#397FF5" /> Call (678) 723-5744
              </a>
              <button
                onClick={() => { setMobileMenuOpen(false); onOpenBooking(); }}
                className="btn btn-primary"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <Calendar size={18} /> Schedule Free Estimate
              </button>
            </div>
          </div>
        )}
      </header>
    </>
  );
}
