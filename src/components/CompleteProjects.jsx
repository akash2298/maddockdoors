import React, { useState } from 'react';
import { Camera, Eye, MapPin, X, CheckCircle2, Sliders } from 'lucide-react';

export default function CompleteProjects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [lightboxImage, setLightboxImage] = useState(null);
  const [sliderPos, setSliderPos] = useState(50);

  const projects = [
    {
      id: 1,
      title: 'Modern Black Glass Carriage House',
      category: 'modern',
      location: 'Peachtree City, GA',
      details: 'Clopay Modern Steel Collection with custom obscure glass top windows & black hardware.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_0899-1-rotated.jpg',
      badge: 'Modern Steel'
    },
    {
      id: 2,
      title: 'Full View Anodized Aluminum Door',
      category: 'modern',
      location: 'Brooks, GA',
      details: 'High-end black aluminum frame with privacy frosted glass panels & quiet belt drive opener.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_6189-rotated.jpeg',
      badge: 'Full View Glass'
    },
    {
      id: 3,
      title: 'Classic White Carriage House Doors',
      category: 'carriage',
      location: 'Fayetteville, GA',
      details: 'Twin 8x7 carriage house installation with decorative spade handles and wrought iron hinges.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_8820-rotated.jpg',
      badge: 'Carriage House'
    },
    {
      id: 4,
      title: 'Twin Double-Car Carriage Installation',
      category: 'carriage',
      location: 'Peachtree City, GA',
      details: 'CHI Overlay Carriage House doors with Stockton window inserts & R-17 insulation.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_8817-rotated.jpg',
      badge: 'CHI Premium'
    },
    {
      id: 5,
      title: 'Rich Woodgrain Insulated Steel Door',
      category: 'steel',
      location: 'Senoia, GA',
      details: 'Durable steel door with realistic walnut wood finish & scratch-resistant top coat.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_2524.jpeg',
      badge: 'Wood Grain Steel'
    },
    {
      id: 6,
      title: 'Craftsman Cedar Overlay Garage Door',
      category: 'steel',
      location: 'Newnan, GA',
      details: 'Custom cedar tone carriage door with wrought iron hardware & arch windows.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_2526.jpeg',
      badge: 'Craftsman Style'
    },
    {
      id: 7,
      title: 'Dark Walnut Double Garage Door',
      category: 'modern',
      location: 'Peachtree City, GA',
      details: '16x7 insulated double-car garage door with LiftMaster smart camera opener installation.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_6390-rotated.jpeg',
      badge: 'Insulated 16x7'
    },
    {
      id: 8,
      title: 'Arched Window Carriage Elevation',
      category: 'carriage',
      location: 'Brooks, GA',
      details: 'High-headroom installation featuring arched top grilles and quiet nylon rollers.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_6392-rotated.jpeg',
      badge: 'Arch Windows'
    },
    {
      id: 9,
      title: 'High-Lift Automotive Conversion',
      category: 'conversion',
      location: 'Peachtree City, GA',
      details: 'Custom high-lift track extension to 11ft ceiling height for car lift headroom.',
      image: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_7058-rotated.jpeg',
      badge: 'High-Lift Track'
    }
  ];

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(p => p.category === activeCategory);

  return (
    <section id="projects" className="section-padding" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        {/* Title */}
        <div style={{ textAlign: 'center', marginBottom: '40px' }}>
          <div className="sub-heading">
            <Camera size={16} /> Portfolio & Work Gallery
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '14px', color: '#0F172A' }}>
            Real Work from <span className="gradient-text">Local Georgia Homes</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '640px', margin: '0 auto' }}>
            Explore actual installations and repairs completed by Maddock Garage Doors LLC throughout Brooks, Peachtree City, and Fayetteville.
          </p>

          {/* Filters */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            flexWrap: 'wrap',
            marginTop: '28px'
          }}>
            {[
              { id: 'all', label: 'All Work' },
              { id: 'carriage', label: 'Carriage House' },
              { id: 'modern', label: 'Modern Glass & Steel' },
              { id: 'steel', label: 'Wood Grain & Insulated' },
              { id: 'conversion', label: 'High-Lift Conversions' }
            ].map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={activeCategory === cat.id ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Gallery Grid */}
        <div className="grid-3" style={{ gap: '24px' }}>
          {filteredProjects.map((item) => (
            <div
              key={item.id}
              className="clean-card clean-card-hover"
              style={{
                overflow: 'hidden',
                borderRadius: 'var(--radius-md)',
                cursor: 'pointer',
                display: 'flex',
                flexDirection: 'column'
              }}
              onClick={() => setLightboxImage(item)}
            >
              <div style={{
                position: 'relative',
                height: '240px',
                overflow: 'hidden',
                backgroundColor: '#F1F5F9'
              }}>
                <img
                  src={item.image}
                  alt={item.title}
                  loading="lazy"
                  style={{
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease'
                  }}
                  className="gallery-img-hover"
                />
                
                <div style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  background: 'rgba(15, 23, 42, 0.85)',
                  color: '#FFFFFF',
                  fontSize: '0.72rem',
                  fontWeight: 700,
                  padding: '3px 10px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  {item.badge}
                </div>

                <div style={{
                  position: 'absolute',
                  inset: 0,
                  background: 'rgba(15, 23, 42, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  opacity: 0,
                  transition: 'opacity 0.3s ease'
                }} className="hover-overlay">
                  <span className="btn btn-primary btn-sm" style={{ gap: '6px' }}>
                    <Eye size={16} /> View Details
                  </span>
                </div>
              </div>

              <div style={{ padding: '18px', display: 'flex', flexDirection: 'column', gap: '6px', flexGrow: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#397FF5', fontSize: '0.8rem', fontWeight: 700 }}>
                  <MapPin size={14} /> {item.location}
                </div>
                <h4 style={{ fontSize: '1.1rem', color: '#0F172A', fontWeight: 700 }}>
                  {item.title}
                </h4>
                <p style={{ fontSize: '0.85rem', color: '#64748B', lineHeight: 1.5 }}>
                  {item.details}
                </p>
              </div>

            </div>
          ))}
        </div>

        {/* Before & After Interactive Slider */}
        <div className="clean-card" style={{
          marginTop: '60px',
          padding: '36px',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #E2E8F0',
          background: 'linear-gradient(135deg, #EFF6FF 0%, #FFFFFF 100%)'
        }}>
          <div style={{
            display: 'grid',
            gridTemplateColumns: '1fr 1.2fr',
            gap: '36px',
            alignItems: 'center'
          }} className="transformation-grid">

            <div>
              <div className="sub-heading">
                <Sliders size={16} /> Before & After Transformation
              </div>
              <h3 style={{ fontSize: '1.8rem', fontWeight: 800, color: '#0F172A', marginBottom: '14px' }}>
                Transform Your Home's Exterior in 1 Day
              </h3>
              <p style={{ color: '#475569', fontSize: '0.98rem', lineHeight: 1.6, marginBottom: '20px' }}>
                Slide the handle to compare an old dented door with a new insulated Maddock carriage door.
              </p>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#397FF5" />
                  <span>Instant 100%+ ROI Home Resale Value Increase</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#1E293B', fontSize: '0.9rem' }}>
                  <CheckCircle2 size={16} color="#397FF5" />
                  <span>Whisper-Quiet Insulation reduces street noise</span>
                </div>
              </div>
            </div>

            {/* Slider */}
            <div style={{
              position: 'relative',
              width: '100%',
              height: '340px',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              userSelect: 'none',
              border: '2px solid #E2E8F0'
            }}>
              <img
                src="https://maddockdoors.com/wp-content/uploads/2023/11/IMG_8817-rotated.jpg"
                alt="After Installation"
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover'
                }}
              />
              <div style={{
                position: 'absolute',
                top: '14px',
                right: '14px',
                background: '#10B981',
                color: '#FFFFFF',
                fontWeight: 800,
                fontSize: '0.78rem',
                padding: '4px 12px',
                borderRadius: 'var(--radius-full)',
                zIndex: 2
              }}>
                AFTER (Maddock Door)
              </div>

              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                bottom: 0,
                width: `${sliderPos}%`,
                overflow: 'hidden',
                zIndex: 3
              }}>
                <img
                  src="https://maddockdoors.com/wp-content/uploads/2021/03/Jessica-Maddock-EF89BDBC-5EE7-4D8F-84EA-63C85A5B3460-scaled.jpeg"
                  alt="Before Installation"
                  style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    maxWidth: 'none',
                    width: '480px',
                    height: '340px',
                    objectFit: 'cover'
                  }}
                />
                <div style={{
                  position: 'absolute',
                  top: '14px',
                  left: '14px',
                  background: '#EF4444',
                  color: '#FFFFFF',
                  fontWeight: 800,
                  fontSize: '0.78rem',
                  padding: '4px 12px',
                  borderRadius: 'var(--radius-full)'
                }}>
                  BEFORE
                </div>
              </div>

              <div style={{
                position: 'absolute',
                top: 0,
                bottom: 0,
                left: `${sliderPos}%`,
                width: '4px',
                background: '#397FF5',
                boxShadow: '0 0 8px rgba(0,0,0,0.4)',
                zIndex: 10,
                transform: 'translateX(-2px)'
              }}>
                <div style={{
                  position: 'absolute',
                  top: '50%',
                  left: '50%',
                  transform: 'translate(-50%, -50%)',
                  width: '32px',
                  height: '32px',
                  borderRadius: '50%',
                  background: '#397FF5',
                  color: '#FFFFFF',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontWeight: 800,
                  fontSize: '0.8rem'
                }}>
                  ↔
                </div>
              </div>

              <input
                type="range"
                min="0"
                max="100"
                value={sliderPos}
                onChange={(e) => setSliderPos(e.target.value)}
                style={{
                  position: 'absolute',
                  inset: 0,
                  width: '100%',
                  height: '100%',
                  opacity: 0,
                  zIndex: 20,
                  cursor: 'ew-resize'
                }}
              />
            </div>

          </div>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxImage && (
        <div className="lightbox-backdrop" onClick={() => setLightboxImage(null)}>
          <div className="lightbox-content" onClick={(e) => e.stopPropagation()}>
            <button
              onClick={() => setLightboxImage(null)}
              style={{
                position: 'absolute',
                top: '16px',
                right: '16px',
                zIndex: 10,
                background: '#0F172A',
                color: '#FFFFFF',
                width: '36px',
                height: '36px',
                borderRadius: '50%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                cursor: 'pointer',
                border: 'none'
              }}
            >
              <X size={18} />
            </button>

            <div style={{ maxHeight: '65vh', backgroundColor: '#0F172A', overflow: 'hidden' }}>
              <img
                src={lightboxImage.image}
                alt={lightboxImage.title}
                style={{
                  width: '100%',
                  maxHeight: '65vh',
                  objectFit: 'contain',
                  display: 'block'
                }}
              />
            </div>

            <div style={{ padding: '24px', background: '#FFFFFF' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', color: '#397FF5', fontSize: '0.85rem', fontWeight: 700 }}>
                <MapPin size={16} /> {lightboxImage.location}
              </div>
              <h3 style={{ fontSize: '1.4rem', fontWeight: 800, color: '#0F172A', marginTop: '4px', marginBottom: '6px' }}>
                {lightboxImage.title}
              </h3>
              <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5 }}>
                {lightboxImage.details}
              </p>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
