"use client";
import { motion } from 'framer-motion';

export default function ProjectsClient() {
  const projects = [
    {
      title: 'Smart School Integration',
      client: 'Bright Future Academy',
      type: 'EdTech & Surveillance',
      desc: 'Complete deployment of 25+ smart classrooms with interactive panels and school-wide IP CCTV surveillance.'
    },
    {
      title: 'Corporate Office Networking',
      client: 'NovaTech Pvt. Ltd.',
      type: 'Connectivity & Security',
      desc: 'Structured cabling for 200+ nodes, enterprise-grade WiFi 6 deployment, and biometric access control.'
    },
    {
      title: 'Industrial Solar Farm',
      client: 'Pune MIDC Facility',
      type: 'Renewable Power',
      desc: 'Installation of 50kW rooftop solar system with high-capacity hybrid power backup for critical manufacturing units.'
    }
  ];

  return (
    <main className="section">
      <div className="section-header">
        <div className="section-eyebrow">Our Portfolio</div>
        <h1 className="section-title">Major Project Deliveries</h1>
        <p className="section-desc">Showcasing our commitment to quality and technical precision across various industrial and commercial sectors.</p>
      </div>

      <div className="services-grid">
        {projects.map((p, i) => (
          <motion.div 
            key={p.title}
            className="svc-card"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="svc-tag" style={{marginBottom:'12px'}}>{p.type}</div>
            <div className="svc-name" style={{fontSize:'18px', marginBottom:'4px'}}>{p.title}</div>
            <div className="svc-desc" style={{fontWeight:600, color:'var(--accent)', marginBottom:'12px'}}>{p.client}</div>
            <p className="svc-desc">{p.desc}</p>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
