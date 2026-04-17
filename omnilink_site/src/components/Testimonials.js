"use client";
import { motion } from 'framer-motion';

export default function Testimonials() {
  const testimonials = [
    {
      author: 'RS',
      name: 'Rahul Sharma',
      role: 'Principal, Bright Future Academy',
      text: '"OmniLink transformed our school with a complete smart classroom and PA system setup. Professional, on-time, and excellent post-installation support."'
    },
    {
      author: 'PD',
      name: 'Priya Desai',
      role: 'IT Head, NovaTech Pvt. Ltd.',
      text: '"We had OmniLink install our entire office network, access control, and UPS systems. Single vendor, zero headache. Highly recommended for corporates."'
    },
    {
      author: 'AK',
      name: 'Amit Kumar',
      role: 'Factory Owner, Pune MIDC',
      text: '"Their solar + power backup solution cut our electricity bill by 40%. The team was knowledgeable and the project was finished ahead of schedule."'
    }
  ];

  return (
    <div className="testimonials-bg">
      <div className="section" style={{paddingTop:0, paddingBottom:0}}>
        <div className="section-header">
          <div className="section-eyebrow">Client Stories</div>
          <h2 className="section-title">What Our Clients Say</h2>
        </div>
        <div className="testi-grid">
          {testimonials.map((t, i) => (
            <motion.div 
              key={t.name}
              className="testi-card"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
            >
              <div className="testi-stars">★★★★★</div>
              <p className="testi-text">{t.text}</p>
              <div className="testi-author">
                <div className="testi-avatar">{t.author}</div>
                <div>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
