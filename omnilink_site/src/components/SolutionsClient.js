"use client";
import { motion } from 'framer-motion';

export default function SolutionsClient() {
  const solutions = [
    {
      title: 'Smart Home Automation',
      desc: 'Complete home integration including smart lighting, climate control, automated blinds, and multi-room audio.',
      features: ['Voice Control', 'Remote Access', 'Scenes & Scheduling']
    },
    {
      title: 'Smart Classrooms',
      desc: 'Modernizing education with interactive flat panels, digital podiums, and integrated AV systems.',
      features: ['Interactive Panels', 'Cloud Management', 'Hybrid Learning']
    },
    {
      title: 'Enterprise Networking',
      desc: 'Redundant, high-speed networking solutions for corporate offices and data centers.',
      features: ['Fiber Optics', 'SD-WAN', 'Server Room Setup']
    }
  ];

  return (
    <main className="section">
      <div className="section-header">
        <div className="section-eyebrow">Tailored Solutions</div>
        <h1 className="section-title">Industry-Specific Implementations</h1>
        <p className="section-desc">Go beyond individual services with our integrated solution packages designed for specific environments.</p>
      </div>

      <div className="services-grid">
        {solutions.map((s, i) => (
          <motion.div 
            key={s.title}
            className="svc-card"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
          >
            <div className="svc-name" style={{fontSize:'18px', marginBottom:'12px'}}>{s.title}</div>
            <p className="svc-desc" style={{marginBottom:'20px'}}>{s.desc}</p>
            <ul style={{listStyle:'none', display:'flex', flexWrap:'wrap', gap:'8px'}}>
              {s.features.map(f => (
                <li key={f} className="svc-tag" style={{background:'var(--accent-light)', color:'var(--accent)'}}>{f}</li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </main>
  );
}
