import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import CompleteProjects from './components/CompleteProjects';
import Process from './components/Process';
import Reviews from './components/Reviews';
import ServiceArea from './components/ServiceArea';
import FAQs from './components/FAQs';
import CTA from './components/CTA';
import Footer from './components/Footer';
import BookingModal from './components/BookingModal';
import DoorVisualizerModal from './components/DoorVisualizerModal';
import { Phone, Sparkles, Calendar } from 'lucide-react';

export default function App() {
  const [isBookingOpen, setIsBookingOpen] = useState(false);
  const [isVisualizerOpen, setIsVisualizerOpen] = useState(false);

  const handleOpenBooking = () => setIsBookingOpen(true);
  const handleCloseBooking = () => setIsBookingOpen(false);

  const handleOpenVisualizer = () => setIsVisualizerOpen(true);
  const handleCloseVisualizer = () => setIsVisualizerOpen(false);

  return (
    <div style={{ backgroundColor: 'var(--bg-dark)', color: 'var(--text-primary)', minHeight: '100vh' }}>

      {/* Navigation Header */}
      <Navbar onOpenBooking={handleOpenBooking} />

      {/* Hero Section with Quick Quote Widget */}
      <Hero onOpenBooking={handleOpenBooking} />

      {/* About Maddock Garage Doors LLC */}
      <About onOpenBooking={handleOpenBooking} />

      {/* Services Grid */}
      <Services onOpenBooking={handleOpenBooking} />

      {/* Complete Projects / Work Gallery & Before-After Slider */}
      <CompleteProjects />

      {/* 4-Step Customer Journey Process */}
      <Process onOpenBooking={handleOpenBooking} />

      {/* Reviews & Ratings */}
      <Reviews />

      {/* Service Area & Zip Code Checker */}
      <ServiceArea onOpenBooking={handleOpenBooking} />

      {/* FAQs Accordion */}
      <FAQs onOpenBooking={handleOpenBooking} />

      {/* CTA Conversion Banner */}
      <CTA onOpenBooking={handleOpenBooking} />

      {/* Footer */}
      <Footer onOpenBooking={handleOpenBooking} />

      {/* Floating Emergency Call Widget (Fixed Bottom Right) */}
      <a
        href="tel:678-723-5744"
        className="floating-hotline"
        title="Call Maddock Garage Doors Dispatch"
      >
        <div style={{
          width: '36px',
          height: '36px',
          borderRadius: '50%',
          background: '#397ff5',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: '#fff'
        }}>
          <Phone size={20} />
        </div>
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <span style={{ fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '0.08em', color: '#397ff5', fontWeight: 800 }}>
            Emergency Repair
          </span>
          <span style={{ fontSize: '0.95rem', fontWeight: 800, color: '#397ff5' }}>
            678-723-5744
          </span>
        </div>
      </a>

      {/* Floating Door Visualizer Button (Fixed Bottom Left) */}
      <button
        onClick={handleOpenVisualizer}
        style={{
          position: 'fixed',
          bottom: '24px',
          left: '24px',
          zIndex: 99,
          display: 'flex',
          alignItems: 'center',
          gap: '10px',
          padding: '12px 20px',
          background: 'rgba(17, 24, 39, 0.9)',
          backdropFilter: 'blur(16px)',
          border: '1px solid rgba(16, 185, 129, 0.5)',
          borderRadius: 'var(--radius-full)',
          boxShadow: '0 10px 30px rgba(0,0,0,0.8)',
          color: '#ffffff',
          fontWeight: 700,
          fontSize: '0.88rem',
          cursor: 'pointer'
        }}
        className="desktop-only"
      >
        <Sparkles size={18} color="#10b981" />
        Design Your Door
      </button>

      {/* Booking Popover Modal */}
      <BookingModal
        isOpen={isBookingOpen}
        onClose={handleCloseBooking}
      />

      {/* Door Visualizer Popover Modal */}
      <DoorVisualizerModal
        isOpen={isVisualizerOpen}
        onClose={handleCloseVisualizer}
        onBookWithStyle={() => {
          setIsVisualizerOpen(false);
          setIsBookingOpen(true);
        }}
      />

    </div>
  );
}
