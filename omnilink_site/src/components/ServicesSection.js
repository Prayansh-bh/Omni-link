"use client";
import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { services, categories } from '@/data/services';

export default function ServicesSection() {
  const [activeCat, setActiveCat] = useState('All');
  const filteredServices = activeCat === 'All' 
    ? services 
    : services.filter(s => s.cat === activeCat);

  return (
    <section className="section" id="services">
      <div className="section-header">
        <div className="section-eyebrow">Our Specialized Expertise</div>
        <h2 className="section-title">Infrastructure Solutions for a Smarter Future</h2>
        <p className="section-desc">Leading-edge technology combined with expert engineering to deliver reliable, secure, and smart infrastructure.</p>
      </div>

      <div className="cat-tabs">
        {categories.map(cat => (
          <div 
            key={cat}
            className={`cat-tab ${cat === activeCat ? 'active' : ''}`}
            onClick={() => setActiveCat(cat)}
          >
            {cat}
          </div>
        ))}
      </div>

      <motion.div 
        className="services-grid"
        layout
      >
        <AnimatePresence mode='popLayout'>
          {filteredServices.map(svc => (
            <motion.div 
              key={svc.id}
              className="svc-card"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.9 }}
              transition={{ duration: 0.2 }}
              layout
            >
              <div className="svc-arrow"><svg viewBox="0 0 24 24"><path d="M5 12h14M12 5l7 7-7 7"/></svg></div>
              <div className="svc-icon-wrap">{svc.icon}</div>
              <div className="svc-name">{svc.name}</div>
              <div className="svc-desc">{svc.desc}</div>
              <span className="svc-tag">{svc.tag}</span>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
