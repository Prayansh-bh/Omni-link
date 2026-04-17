"use client";
import { motion } from 'framer-motion';

export default function AboutClient() {
  const stats = [
    { num: '500+', label: 'Projects Delivered' },
    { num: '50+', label: 'Certified Technicians' },
    { num: '11+', label: 'Service Categories' },
    { num: '7+', label: 'Years of Excellence' }
  ];

  return (
    <main className="section">
      <div className="why-grid">
        <motion.div 
          className="why-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="section-eyebrow">Our Story</div>
          <h1 className="section-title" style={{textAlign:'left'}}>Pioneering Infrastructure Excellence in India</h1>
          <p className="section-desc" style={{marginLeft:0, marginBottom:'24px', fontSize:'16px'}}>
            OmniLink Infrastructure was founded with a singular mission: to provide world-class, integrated IT and energy infrastructure solutions under one roof. 
          </p>
          <p className="section-desc" style={{marginLeft:0, marginBottom:'32px'}}>
            From securing homes with high-definition surveillance to powering industrial sites with sustainable solar energy, we combine technical expertise with a customer-centric approach to build smarter environments.
          </p>

          <div style={{display:'flex', flexWrap:'wrap', gap:'20px'}}>
            <div className="seo-badge" style={{padding:'8px 16px', fontSize:'14px'}}>ISO 9001:2015 Certified</div>
            <div className="seo-badge" style={{padding:'8px 16px', fontSize:'14px'}}>MSME Registered</div>
            <div className="seo-badge" style={{padding:'8px 16px', fontSize:'14px'}}>GST Compliant</div>
          </div>
        </motion.div>

        <motion.div 
          className="why-right"
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <div className="metric-grid" style={{gridTemplateColumns:'1fr'}}>
            {stats.map((s, i) => (
              <div key={s.label} className="metric-item" style={{textAlign:'center'}}>
                <div className="metric-num">{s.num}</div>
                <div className="metric-label" style={{fontSize:'14px'}}>{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </main>
  );
}
