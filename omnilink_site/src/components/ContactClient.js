"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';

export default function ContactClient() {
  const [status, setStatus] = useState('idle'); // idle, loading, success, error
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'CCTV Installation',
    message: ''
  });

  const services = [
    'CCTV Installation', 'Networking & WiFi', 'Access Control', 
    'Power Backup / UPS', 'Solar Solutions', 'Smart Home Automation',
    'Smart Classroom', 'Fire & Safety', 'Audio PA Systems', 'Other'
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (res.ok) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', service: 'CCTV Installation', message: '' });
      } else {
        setStatus('error');
      }
    } catch (error) {
      setStatus('error');
    }
  };

  return (
    <main className="section">
      <div className="why-grid">
        <motion.div 
          className="why-left"
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
        >
          <div className="section-eyebrow">Contact Us</div>
          <h1 className="section-title" style={{textAlign:'left'}}>Get a Free Site Survey & Quote</h1>
          <p className="section-desc" style={{marginLeft:0, marginBottom:'32px'}}>
            Fill out the form below and our certified engineers will get back to you within 4 hours.
          </p>
          
          <div className="why-feat">
            <div className="why-feat-icon"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 15.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 4.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 11a16 16 0 006 6l1.09-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg></div>
            <div><div className="why-feat-title">Call for Support</div><div className="why-feat-desc">+91 [Your Number] (24/7 Available)</div></div>
          </div>
          <div className="why-feat">
            <div className="why-feat-icon"><svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg></div>
            <div><div className="why-feat-title">Email Us</div><div className="why-feat-desc">info@omnilinkinfra.com</div></div>
          </div>
        </motion.div>

        <motion.div 
          className="why-right" 
          style={{background:'white', border:'1px solid var(--border)', color:'var(--text-primary)'}}
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
        >
          <form onSubmit={handleSubmit} style={{display:'flex', flexDirection:'column', gap:'16px'}}>
            <div style={{display:'grid', gridTemplateColumns:'1fr 1fr', gap:'12px'}}>
              <input 
                type="text" 
                placeholder="Your Name" 
                required 
                style={{padding:'12px', borderRadius:'8px', border:'1.5px solid var(--border)', fontSize:'14px'}}
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
              <input 
                type="tel" 
                placeholder="Phone Number" 
                required 
                style={{padding:'12px', borderRadius:'8px', border:'1.5px solid var(--border)', fontSize:'14px'}}
                value={formData.phone}
                onChange={(e) => setFormData({...formData, phone: e.target.value})}
              />
            </div>
            <input 
              type="email" 
              placeholder="Email Address" 
              required 
              style={{padding:'12px', borderRadius:'8px', border:'1.5px solid var(--border)', fontSize:'14px'}}
              value={formData.email}
              onChange={(e) => setFormData({...formData, email: e.target.value})}
            />
            <select 
              style={{padding:'12px', borderRadius:'8px', border:'1.5px solid var(--border)', fontSize:'14px'}}
              value={formData.service}
              onChange={(e) => setFormData({...formData, service: e.target.value})}
            >
              {services.map(s => <option key={s} value={s}>{s}</option>)}
            </select>
            <textarea 
              placeholder="Project Details" 
              rows="4" 
              required
              style={{padding:'12px', borderRadius:'8px', border:'1.5px solid var(--border)', fontSize:'14px', resize:'none'}}
              value={formData.message}
              onChange={(e) => setFormData({...formData, message: e.target.value})}
            ></textarea>
            
            <button 
              type="submit" 
              className="btn-primary" 
              disabled={status === 'loading'}
              style={{width:'100%', justifyContent:'center', padding:'14px'}}
            >
              {status === 'loading' ? 'Sending...' : 'Request Free Quote'}
            </button>

            {status === 'success' && (
              <motion.div initial={{opacity:0, y:10}} animate={{opacity:1, y:0}} style={{color:'#166534', background:'#DCFCE7', padding:'12px', borderRadius:'8px', textAlign:'center', fontSize:'14px', fontWeight:500}}>
                Thank you! We will contact you shortly.
              </motion.div>
            )}
            {status === 'error' && (
              <div style={{color:'#991B1B', background:'#FEE2E2', padding:'12px', borderRadius:'8px', textAlign:'center', fontSize:'14px', fontWeight:500}}>
                Something went wrong. Please try again.
              </div>
            )}
          </form>
        </motion.div>
      </div>
    </main>
  );
}
