import React, { useState } from 'react';
import { X, Calendar, CheckCircle2, ShieldCheck } from 'lucide-react';

export default function BookingModal({ isOpen, onClose }) {
  const [step, setStep] = useState(1);
  const [service, setService] = useState('Broken Spring Replacement');
  const [preferredDate, setPreferredDate] = useState('');
  const [preferredTime, setPreferredTime] = useState('Morning (8:00 AM - 12:00 PM)');
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const [message, setMessage] = useState('');

  if (!isOpen) return null;

  const handleSubmit = (e) => {
    e.preventDefault();
    setStep(2);
  };

  return (
    <div className="lightbox-backdrop" onClick={onClose}>
      <div 
        className="clean-card" 
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '580px',
          width: '100%',
          maxHeight: '90vh',
          overflowY: 'auto',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #397FF5',
          background: '#FFFFFF',
          padding: '32px',
          position: 'relative',
          boxShadow: '0 25px 50px rgba(15, 23, 42, 0.25)'
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

        {step === 1 ? (
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#397FF5', fontSize: '0.82rem', fontWeight: 700, textTransform: 'uppercase', marginBottom: '6px' }}>
              <Calendar size={15} /> Fast Online Scheduling
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '4px' }}>
              Schedule Service & Get Free Quote
            </h3>
            <p style={{ color: '#64748B', fontSize: '0.9rem', marginBottom: '20px' }}>
              Pick your preferred date & time slot. Our Brooks, GA team will confirm your appointment promptly.
            </p>

            <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '14px' }}>
              
              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Select Service Required:
                </label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    color: '#0F172A',
                    fontSize: '0.9rem',
                    outline: 'none'
                  }}
                >
                  <option value="Broken Spring Replacement">Broken Spring & Cable Repair</option>
                  <option value="New Garage Door Installation">New Garage Door Installation & Sales</option>
                  <option value="Smart Garage Opener Repair">Smart Opener Repair / Installation</option>
                  <option value="Off-Track Derailed Door">Off-Track Door Safe Realignment</option>
                  <option value="High-Lift Track Conversion">High-Lift Track Ceiling Conversion</option>
                  <option value="21-Point Maintenance Tune Up">21-Point Safety Maintenance Tune-Up</option>
                </select>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Preferred Date:
                  </label>
                  <input
                    type="date"
                    required
                    value={preferredDate}
                    onChange={(e) => setPreferredDate(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      color: '#0F172A',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Preferred Window:
                  </label>
                  <select
                    value={preferredTime}
                    onChange={(e) => setPreferredTime(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      color: '#0F172A',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  >
                    <option>Morning (8:00 AM - 12:00 PM)</option>
                    <option>Afternoon (12:00 PM - 5:00 PM)</option>
                    <option>First Available Same-Day</option>
                  </select>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Full Name:
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="John Doe"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      color: '#0F172A',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>

                <div>
                  <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                    Phone Number:
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="(678) 000-0000"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '11px',
                      borderRadius: 'var(--radius-sm)',
                      backgroundColor: '#F8FAFC',
                      border: '1px solid #CBD5E1',
                      color: '#0F172A',
                      fontSize: '0.88rem',
                      outline: 'none'
                    }}
                  />
                </div>
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Street Address & City (GA):
                </label>
                <input
                  type="text"
                  required
                  placeholder="e.g. 123 Peachtree Pkwy, Peachtree City, GA 30269"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    color: '#0F172A',
                    fontSize: '0.88rem',
                    outline: 'none'
                  }}
                />
              </div>

              <div>
                <label style={{ display: 'block', fontSize: '0.85rem', fontWeight: 700, color: '#334155', marginBottom: '4px' }}>
                  Additional Notes (Optional):
                </label>
                <textarea
                  rows="2"
                  placeholder="Describe your garage door issue or preferred style..."
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  style={{
                    width: '100%',
                    padding: '11px',
                    borderRadius: 'var(--radius-sm)',
                    backgroundColor: '#F8FAFC',
                    border: '1px solid #CBD5E1',
                    color: '#0F172A',
                    fontSize: '0.88rem',
                    outline: 'none',
                    resize: 'none'
                  }}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary btn-lg"
                style={{ width: '100%', marginTop: '4px' }}
              >
                Confirm Appointment Request
              </button>

              <div style={{ textAlign: 'center', fontSize: '0.78rem', color: '#64748B' }}>
                <ShieldCheck size={14} style={{ display: 'inline', verticalAlign: 'middle', marginRight: '4px' }} />
                Your information is 100% private. Upfront flat-rate quote guarantee.
              </div>

            </form>
          </div>
        ) : (
          <div style={{ textAlign: 'center', padding: '20px 0' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: '#ECFDF5',
              border: '2px solid #10B981',
              color: '#10B981',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 16px auto'
            }}>
              <CheckCircle2 size={38} />
            </div>

            <h3 style={{ fontSize: '1.6rem', fontWeight: 800, color: '#0F172A', marginBottom: '10px' }}>
              Appointment Reserved!
            </h3>
            <p style={{ color: '#475569', fontSize: '0.95rem', lineHeight: 1.5, marginBottom: '20px' }}>
              Thank you, <strong>{name}</strong>! We have received your request for <strong>{service}</strong> at <strong>{address}</strong> on <strong>{preferredDate || 'the next available date'} ({preferredTime})</strong>.
            </p>
            <p style={{ color: '#64748B', fontSize: '0.88rem', marginBottom: '24px' }}>
              Our technician from Brooks, GA will call <strong>{phone}</strong> to confirm exact arrival window. Emergency? Call <strong>678-723-5744</strong>.
            </p>

            <button onClick={onClose} className="btn btn-primary btn-lg">
              Close & Return to Website
            </button>
          </div>
        )}

      </div>
    </div>
  );
}
