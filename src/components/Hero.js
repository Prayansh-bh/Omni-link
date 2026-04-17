"use client";
import { motion } from 'framer-motion';
import { services } from '@/data/services';
import { useState, useEffect } from 'react';
import Link from 'next/link';

export default function Hero() {
  const [activeChip, setActiveChip] = useState(0);
  const chipLabels = services.slice(0, 11).map(s => s.name);

  return (
    <div style={{maxWidth:'1180px', margin:'0 auto'}}>
      <div className="hero">
        <motion.div 
          className="hero-content"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="hero-tag">India's Trusted IT Infrastructure Partner</div>
          <h1>Smart IoT Infrastructure. <em>Seamless</em> Connectivity Solutions.</h1>
          <p className="hero-sub">From advanced CCTV surveillance to sustainable solar energy, smart automation to enterprise networking — OmniLink delivers end-to-end IT infrastructure solutions in India.</p>
          <div className="hero-actions">
            <Link href="/#services" className="btn-primary">
              <svg viewBox="0 0 24 24" width="16" height="16" stroke="currentColor" fill="none" strokeWidth="2"><circle cx="11" cy="11" r="8"/><path d="m21 21-4.35-4.35"/></svg>
              Explore Services
            </Link>
            <Link href="/projects" className="btn-ghost" style={{textDecoration:'none', color:'inherit'}}>View Portfolio</Link>
          </div>
          <div className="hero-stats">
            <div><div className="stat-num">500+</div><div className="stat-label">Projects Delivered</div></div>
            <div><div className="stat-num">11</div><div className="stat-label">Service Categories</div></div>
            <div><div className="stat-num">24/7</div><div className="stat-label">Support Available</div></div>
          </div>
        </motion.div>

        <motion.div 
          className="hero-visual"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="hero-card-main">
            <div className="hero-card-title">Our Service Portfolio</div>
            <div className="service-chips">
              {chipLabels.map((label, i) => (
                <div 
                  key={label}
                  className={`service-chip ${activeChip === i ? 'active' : ''}`}
                  onClick={() => setActiveChip(i)}
                >
                  {label}
                </div>
              ))}
            </div>
          </div>
          <div className="hero-card-bottom">
            <div className="hcb-left">
              <div className="hcb-icon">
                <svg viewBox="0 0 24 24"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
              </div>
              <div>
                <div className="hcb-text-main">ISO-certified installations</div>
                <div className="hcb-text-sub">Verified by industry standards</div>
              </div>
            </div>
            <div className="hcb-badge">Trusted</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
