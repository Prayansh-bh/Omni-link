import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="nav-logo" style={{gap: '10px'}}>
            <div className="nav-logo-mark"><svg viewBox="0 0 24 24" style={{fill: 'white', width: '18px', height: '18px'}}><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg></div>
            <div style={{fontFamily: 'Syne, sans-serif', fontWeight: 700, fontSize: '15px', color: 'white'}}>OmniLink <span style={{color: '#3B82F6'}}>Infrastructure</span></div>
          </div>
          <p className="footer-brand-desc">Your single-source IT infrastructure partner — from security systems to solar energy, smart automation to enterprise networking.</p>
        </div>
        <div>
          <div className="footer-col-title">Services</div>
          <Link href="/services" className="footer-link">CCTV & Surveillance</Link>
          <Link href="/services" className="footer-link">Networking & WiFi</Link>
          <Link href="/services" className="footer-link">Access Control</Link>
          <Link href="/services" className="footer-link">Power Backup / UPS</Link>
          <Link href="/services" className="footer-link">Solar Solutions</Link>
        </div>
        <div>
          <div className="footer-col-title">Solutions</div>
          <Link href="/solutions" className="footer-link">Smart Home</Link>
          <Link href="/solutions" className="footer-link">Smart Classrooms</Link>
          <Link href="/solutions" className="footer-link">VoIP Systems</Link>
          <Link href="/solutions" className="footer-link">Fire & Safety</Link>
          <Link href="/solutions" className="footer-link">Audio PA Systems</Link>
        </div>
        <div>
          <div className="footer-col-title">Company</div>
          <Link href="/about" className="footer-link">About Us</Link>
          <Link href="/projects" className="footer-link">Our Projects</Link>
          <Link href="/careers" className="footer-link">Careers</Link>
          <Link href="/amc" className="footer-link">AMC Plans</Link>
          <Link href="/contact" className="footer-link">Contact Us</Link>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-text">© 2025 OmniLink Infrastructure. All rights reserved.</div>
        <div className="seo-badges">
          <div className="seo-badge">GST Registered</div>
          <div className="seo-badge">ISO 9001</div>
          <div className="seo-badge">MSME Certified</div>
        </div>
      </div>
    </footer>
  );
}
