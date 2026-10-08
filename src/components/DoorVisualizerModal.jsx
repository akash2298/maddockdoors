import React, { useState } from 'react';
import { X, Sparkles, CheckCircle2 } from 'lucide-react';

export default function DoorVisualizerModal({ isOpen, onClose, onBookWithStyle }) {
  const [style, setStyle] = useState('carriage');
  const [color, setColor] = useState('#ffffff');
  const [colorName, setColorName] = useState('Alpine White');
  const [hardware, setHardware] = useState(true);

  if (!isOpen) return null;

  const styleImages = {
    carriage: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_8820-rotated.jpg',
    modern: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_6189-rotated.jpeg',
    woodgrain: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_2524.jpeg',
    craftsman: 'https://maddockdoors.com/wp-content/uploads/2023/11/IMG_8817-rotated.jpg'
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div 
        className="clean-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '860px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #397FF5',
          background: '#FFFFFF',
          padding: '32px',
          position: 'relative'
        }}
      >
        <button
          onClick={onClose}
          style={{
            position: 'absolute',
            top: '18px',
            right: '18px',
            background: '#F1F5F9',
            border: 'none',
            color: '#0F172A',
            width: '32px',
            height: '32px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer'
          }}
        >
          <X size={18} />
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#397FF5', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
          <Sparkles size={16} /> Interactive Garage Door Designer
        </div>

        <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '6px' }}>
          Visualize Your Custom Garage Door
        </h3>
        <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '24px' }}>
          Test colors, panel styles, and hardware accents to find your home’s perfect match.
        </p>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1.2fr 1fr',
          gap: '32px',
          alignItems: 'start'
        }} className="visualizer-grid">
          
          <div>
            <div style={{
              position: 'relative',
              borderRadius: 'var(--radius-md)',
              overflow: 'hidden',
              height: '320px',
              border: '2px solid #E2E8F0',
              backgroundColor: '#F8FAFC'
            }}>
              <img
                src={styleImages[style]}
                alt="Selected Garage Door Preview"
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  filter: color === '#1e293b' 
                    ? 'contrast(115%) brightness(85%)' 
                    : color === '#78350f' 
                    ? 'sepia(60%) hue-rotate(-20deg) brightness(90%)' 
                    : 'none',
                  transition: 'all 0.35s ease'
                }}
              />

              <div style={{
                position: 'absolute',
                bottom: '12px',
                left: '12px',
                right: '12px',
                background: 'rgba(255, 255, 255, 0.95)',
                backdropFilter: 'blur(8px)',
                padding: '10px 14px',
                borderRadius: 'var(--radius-sm)',
                border: '1px solid #E2E8F0',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontSize: '0.72rem', color: '#64748B', textTransform: 'uppercase', fontWeight: 700 }}>Custom Configuration</div>
                  <div style={{ fontSize: '0.88rem', color: '#0F172A', fontWeight: 800 }}>
                    {style.toUpperCase()} • {colorName}
                  </div>
                </div>
                <span className="badge-pill badge-blue" style={{ fontSize: '0.72rem' }}>In Stock</span>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
            
            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                1. Select Door Style:
              </label>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px' }}>
                {[
                  { id: 'carriage', label: 'Carriage House' },
                  { id: 'modern', label: 'Modern Glass' },
                  { id: 'woodgrain', label: 'Insulated Steel' },
                  { id: 'craftsman', label: 'Craftsman Arch' }
                ].map(item => (
                  <button
                    key={item.id}
                    onClick={() => setStyle(item.id)}
                    style={{
                      padding: '8px',
                      borderRadius: 'var(--radius-sm)',
                      border: style === item.id ? '2px solid #397FF5' : '1px solid #CBD5E1',
                      backgroundColor: style === item.id ? '#EFF6FF' : '#F8FAFC',
                      color: style === item.id ? '#397FF5' : '#475569',
                      fontSize: '0.82rem',
                      fontWeight: 700,
                      cursor: 'pointer'
                    }}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                2. Select Finish Color:
              </label>
              <div style={{ display: 'flex', gap: '10px' }}>
                {[
                  { code: '#ffffff', name: 'Alpine White' },
                  { code: '#1e293b', name: 'Matte Black' },
                  { code: '#78350f', name: 'Cedar Woodgrain' },
                  { code: '#475569', name: 'Slate Gray' }
                ].map(c => (
                  <button
                    key={c.name}
                    onClick={() => { setColor(c.code); setColorName(c.name); }}
                    style={{
                      width: '36px',
                      height: '36px',
                      borderRadius: '50%',
                      backgroundColor: c.code,
                      border: color === c.code ? '3px solid #397FF5' : '2px solid #CBD5E1',
                      cursor: 'pointer',
                      boxShadow: color === c.code ? '0 0 10px rgba(57, 127, 245, 0.4)' : 'none'
                    }}
                    title={c.name}
                  />
                ))}
              </div>
            </div>

            <div>
              <label style={{ display: 'block', fontSize: '0.82rem', fontWeight: 700, color: '#334155', marginBottom: '6px' }}>
                3. Decorative Wrought Iron Hardware:
              </label>
              <button
                onClick={() => setHardware(!hardware)}
                style={{
                  width: '100%',
                  padding: '8px 12px',
                  borderRadius: 'var(--radius-sm)',
                  border: '1px solid #CBD5E1',
                  backgroundColor: hardware ? '#ECFDF5' : '#F8FAFC',
                  color: hardware ? '#059669' : '#64748B',
                  fontSize: '0.85rem',
                  fontWeight: 700,
                  cursor: 'pointer',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between'
                }}
              >
                <span>{hardware ? 'Spade Handles & Hinges Included' : 'No Decorative Hardware'}</span>
                <CheckCircle2 size={16} color={hardware ? '#10B981' : '#64748B'} />
              </button>
            </div>

            <button
              onClick={() => {
                onClose();
                onBookWithStyle();
              }}
              className="btn btn-primary btn-lg"
              style={{ width: '100%', marginTop: '6px' }}
            >
              Get Custom Quote for This Design
            </button>

          </div>

        </div>

      </div>
    </div>
  );
}
