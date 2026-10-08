import React from 'react';
import { Phone, Calendar, ShieldCheck, Tag, Zap } from 'lucide-react';

export default function CTA({ onOpenBooking }) {
  return (
    <section id="cta" style={{
      position: 'relative',
      padding: '80px 0',
      background: 'linear-gradient(135deg, #EFF6FF 0%, #F8FAFC 100%)',
      borderTop: '1px solid #E2E8F0',
      overflow: 'hidden'
    }}>
      <div className="container" style={{ position: 'relative', zIndex: 2 }}>
        
        <div className="clean-card" style={{
          padding: '52px 40px',
          borderRadius: 'var(--radius-lg)',
          border: '1.5px solid #397FF5',
          background: '#FFFFFF',
          boxShadow: '0 20px 40px -10px rgba(57, 127, 245, 0.15)',
          textAlign: 'center',
          maxWidth: '960px',
          margin: '0 auto'
        }}>
          
          <div className="sub-heading" style={{ margin: '0 auto 16px auto' }}>
            <Zap size={16} /> Exclusive Online Offer
          </div>

          <h2 style={{
            fontSize: 'clamp(2.2rem, 4vw, 3.4rem)',
            fontWeight: 900,
            lineHeight: 1.15,
            marginBottom: '14px',
            color: '#0F172A'
          }}>
            Ready for a Smoother, Quieter, & <br />
            <span className="gradient-text">Stunning Garage Door?</span>
          </h2>

          <p style={{
            fontSize: '1.08rem',
            color: '#475569',
            maxWidth: '640px',
            margin: '0 auto 32px auto',
            lineHeight: 1.6
          }}>
            Don't let a squeaky or broken door ruin your day. Experience 5-star local service in Brooks, Peachtree City & Fayette County with upfront flat-rate pricing.
          </p>

          {/* Promo Coupons */}
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gap: '16px',
            maxWidth: '600px',
            margin: '0 auto 36px auto'
          }} className="promo-grid">
            
            <div style={{
              border: '2px dashed #397FF5',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              background: '#EFF6FF',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left'
            }}>
              <Tag size={26} color="#397FF5" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                  $50 OFF
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600 }}>
                  New Garage Door Installation
                </div>
              </div>
            </div>

            <div style={{
              border: '2px dashed #10B981',
              borderRadius: 'var(--radius-md)',
              padding: '16px 20px',
              background: '#ECFDF5',
              display: 'flex',
              alignItems: 'center',
              gap: '12px',
              textAlign: 'left'
            }}>
              <Tag size={26} color="#10B981" style={{ flexShrink: 0 }} />
              <div>
                <div style={{ fontSize: '1.2rem', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>
                  $25 OFF
                </div>
                <div style={{ fontSize: '0.8rem', color: '#475569', fontWeight: 600 }}>
                  Any Repair or Spring Swap
                </div>
              </div>
            </div>

          </div>

          {/* CTAs */}
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
            <button
              onClick={onOpenBooking}
              className="btn btn-primary btn-lg"
            >
              <Calendar size={20} />
              Book Online & Claim Discount
            </button>

            <a
              href="tel:678-723-5744"
              className="btn btn-emerald btn-lg"
              style={{ gap: '8px' }}
            >
              <Phone size={20} />
              Call Dispatch: 678-723-5744
            </a>
          </div>

          <div style={{
            marginTop: '24px',
            display: 'inline-flex',
            alignItems: 'center',
            gap: '6px',
            fontSize: '0.85rem',
            color: '#64748B'
          }}>
            <ShieldCheck size={16} color="#10B981" />
            <span>Licensed & Insured • Factory Trained Techs • 100% Satisfaction Guarantee</span>
          </div>

        </div>

      </div>
    </section>
  );
}
