"use client";
import { motion } from 'framer-motion';

export default function WhyChooseUs() {
  const features = [
    {
      title: 'Vendor-Neutral Approach',
      desc: "We recommend what's best for your project — no forced brand affiliations.",
      icon: <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    },
    {
      title: 'Single Vendor, All Services',
      desc: 'One point of contact for 11+ services — CCTV to solar to smart classrooms.',
      icon: <><circle cx="12" cy="12" r="3"/><path d="M19.07 4.93a10 10 0 0 1 0 14.14M4.93 4.93a10 10 0 0 0 0 14.14"/></>
    },
    {
      title: 'Structured Portfolio System',
      desc: 'Clear categorization, SKU-based portfolio with documented specifications.',
      icon: <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/>
    },
    {
      title: 'Rapid Response SLA',
      desc: '4-hour response time for critical infrastructure within city limits.',
      icon: <path d="M12 2v4M12 18v4M4.93 4.93l2.83 2.83M16.24 16.24l2.83 2.83M2 12h4M18 12h4"/>
    }
  ];

  return (
    <div className="section">
      <div className="why-grid">
        <div className="why-left">
          <div className="section-eyebrow">Why Choose Us</div>
          <h2 className="section-title" style={{textAlign:'left', marginBottom:'32px'}}>Built on trust.<br/>Backed by expertise.</h2>
          
          {features.map((f, i) => (
            <motion.div 
              key={f.title}
              className="why-feat"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="why-feat-icon">
                <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
                  {f.icon}
                </svg>
              </div>
              <div>
                <div className="why-feat-title">{f.title}</div>
                <div className="why-feat-desc">{f.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div 
          className="why-right"
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <div className="section-eyebrow" style={{color:'rgba(255,255,255,0.45)'}}>By the Numbers</div>
          <h3 style={{fontFamily:'Syne, sans-serif', fontSize:'20px', fontWeight:700, color:'white', marginTop:'8px'}}>Performance Metrics</h3>
          <div className="metric-grid">
            <div className="metric-item"><div className="metric-num">98<span className="metric-unit">%</span></div><div className="metric-label">Client Satisfaction</div></div>
            <div className="metric-item"><div className="metric-num">4<span className="metric-unit">hr</span></div><div className="metric-label">Avg Response Time</div></div>
            <div className="metric-item"><div className="metric-num">7+<span className="metric-unit">yr</span></div><div className="metric-label">Industry Experience</div></div>
            <div className="metric-item"><div className="metric-num">50+<span className="metric-unit"> </span></div><div className="metric-label">Trained Technicians</div></div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
