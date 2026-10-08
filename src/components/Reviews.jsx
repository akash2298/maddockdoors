import React, { useState } from 'react';
import { Star, Quote, CheckCircle2, MapPin, ThumbsUp } from 'lucide-react';

export default function Reviews() {
  const [filter, setFilter] = useState('all');

  const reviews = [
    {
      id: 1,
      name: 'David & Sarah Mitchell',
      location: 'Peachtree City, GA',
      service: 'Broken Spring Repair',
      category: 'repair',
      stars: 5,
      date: '2 weeks ago',
      quote: 'Our garage door spring snapped at 7:30 AM right when we were leaving for work. Called Maddock Garage Doors and they had a technician at our home by 9:15 AM! He replaced both springs, lubed the tracks, and had us running in under an hour. Fair price and incredible service!'
    },
    {
      id: 2,
      name: 'Marcus Vance',
      location: 'Brooks, GA',
      service: 'New Carriage Door Installation',
      category: 'installation',
      stars: 5,
      date: '1 month ago',
      quote: 'We wanted to upgrade our 20-year-old builder doors to modern Clopay carriage house doors with custom arch windows. Jessica and the Maddock team helped us pick the perfect design. The installation was immaculate and our house curb appeal went through the roof!'
    },
    {
      id: 3,
      name: 'Patricia Reynolds',
      location: 'Fayetteville, GA',
      service: 'Smart Opener & High-Lift',
      category: 'opener',
      stars: 5,
      date: '3 weeks ago',
      quote: 'Replaced an ancient noisy chain opener with a LiftMaster belt drive with MyQ smartphone app and battery backup. Now I can open the door from anywhere and check if I left it open. Unbelievably quiet operation. 10/10 recommend Maddock!'
    },
    {
      id: 4,
      name: 'Robert K.',
      location: 'Senoia, GA',
      service: 'Emergency Off-Track Repair',
      category: 'repair',
      stars: 5,
      date: '1 month ago',
      quote: 'Accidentally backed into the lower garage door panel and pulled it off the tracks. Maddock came out the same afternoon, straightened the track, replaced damaged rollers with quiet nylon ones, and saved me thousands vs buying a whole new door.'
    },
    {
      id: 5,
      name: 'Jennifer Miller',
      location: 'Newnan, GA',
      service: 'Insulated Double Door Upgrade',
      category: 'installation',
      stars: 5,
      date: '2 months ago',
      quote: 'Living in Georgia, our garage used to turn into an oven during summer. Maddock installed an R-18 polyurethane insulated steel door. It keeps our garage 15 degrees cooler and looks stunning. True professionals!'
    },
    {
      id: 6,
      name: 'Thomas H.',
      location: 'Tyrone, GA',
      service: '21-Point Maintenance & Opener Repair',
      category: 'opener',
      stars: 5,
      date: '3 months ago',
      quote: 'Top tier customer service! Honest flat-rate quote over the phone with no upselling. They tuned up both of our garage doors and replaced worn cables. Will never use any other company!'
    }
  ];

  const filteredReviews = filter === 'all'
    ? reviews
    : reviews.filter(r => r.category === filter);

  return (
    <section id="reviews" className="section-padding" style={{
      backgroundColor: '#FFFFFF',
      position: 'relative',
      borderTop: '1px solid #E2E8F0'
    }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', marginBottom: '44px' }}>
          <div className="sub-heading">
            <ThumbsUp size={16} /> Homeowner Feedback
          </div>
          <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.2rem)', fontWeight: 800, marginBottom: '14px', color: '#0F172A' }}>
            5-Star Rated by Your <span className="gradient-text">Georgia Neighbors</span>
          </h2>
          <p style={{ color: '#64748B', fontSize: '1.05rem', maxWidth: '600px', margin: '0 auto' }}>
            Read real verified reviews from homeowners in Brooks, Peachtree City, Fayetteville, and Fayette County.
          </p>

          {/* Rating Summary Pill */}
          <div style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '20px',
            padding: '12px 28px',
            borderRadius: 'var(--radius-full)',
            background: '#EFF6FF',
            border: '1px solid rgba(57, 127, 245, 0.25)',
            marginTop: '24px',
            flexWrap: 'wrap',
            justifyContent: 'center'
          }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontSize: '1.6rem', fontWeight: 900, color: '#0F172A', fontFamily: 'var(--font-heading)' }}>5.0</span>
              <div style={{ display: 'flex', gap: '2px' }}>
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>
            </div>
            <div style={{ height: '20px', width: '1px', background: '#CBD5E1' }} className="desktop-only" />
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="http://www.homeadvisor.com/images/sp-badges/elite-border.png?sp=38991783&key=984dbba91615680453ac40abd1c42e46" alt="HomeAdvisor Elite" style={{ height: '32px' }} />
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontSize: '0.82rem', fontWeight: 800, color: '#0F172A' }}>HomeAdvisor Elite Service Provider</div>
                <div style={{ fontSize: '0.72rem', color: '#64748B' }}>Verified Peachtree City Service Badge</div>
              </div>
            </div>
          </div>
        </div>

        {/* Filters */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          gap: '8px',
          marginBottom: '36px',
          flexWrap: 'wrap'
        }}>
          {[
            { id: 'all', label: 'All Reviews' },
            { id: 'repair', label: 'Spring & Cable Repairs' },
            { id: 'installation', label: 'New Door Installations' },
            { id: 'opener', label: 'Smart Openers' }
          ].map(btn => (
            <button
              key={btn.id}
              onClick={() => setFilter(btn.id)}
              className={filter === btn.id ? 'btn btn-primary btn-sm' : 'btn btn-secondary btn-sm'}
            >
              {btn.label}
            </button>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid-3" style={{ gap: '24px' }}>
          {filteredReviews.map((rev) => (
            <div
              key={rev.id}
              className="clean-card clean-card-hover"
              style={{
                padding: '28px',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative',
                backgroundColor: '#FFFFFF',
                border: '1px solid #E2E8F0'
              }}
            >
              <div>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '14px' }}>
                  <div style={{ display: 'flex', gap: '2px' }}>
                    {[...Array(rev.stars)].map((_, i) => (
                      <Star key={i} size={15} fill="#F59E0B" color="#F59E0B" />
                    ))}
                  </div>
                  <Quote size={20} color="#397FF5" style={{ opacity: 0.3 }} />
                </div>

                <span className="badge-pill badge-blue" style={{ marginBottom: '12px', fontSize: '0.72rem' }}>
                  {rev.service}
                </span>

                <p style={{
                  color: '#334155',
                  fontSize: '0.92rem',
                  lineHeight: 1.6,
                  fontStyle: 'italic',
                  marginBottom: '20px'
                }}>
                  "{rev.quote}"
                </p>
              </div>

              <div style={{
                paddingTop: '14px',
                borderTop: '1px solid #F1F5F9',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between'
              }}>
                <div>
                  <div style={{ fontWeight: 800, color: '#0F172A', fontSize: '0.9rem', display: 'flex', alignItems: 'center', gap: '6px' }}>
                    {rev.name}
                    <CheckCircle2 size={14} color="#10B981" />
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#64748B', display: 'flex', alignItems: 'center', gap: '4px', marginTop: '2px' }}>
                    <MapPin size={12} color="#397FF5" /> {rev.location}
                  </div>
                </div>

                <span style={{ fontSize: '0.72rem', color: '#94A3B8' }}>
                  {rev.date}
                </span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
