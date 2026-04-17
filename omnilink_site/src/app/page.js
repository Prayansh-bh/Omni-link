import Hero from '@/components/Hero';
import TrustBar from '@/components/TrustBar';
import WhyChooseUs from '@/components/WhyChooseUs';
import Testimonials from '@/components/Testimonials';
import ServicesSection from '@/components/ServicesSection';
import Link from 'next/link';

export const metadata = {
  title: "OmniLink Infrastructure | Smart Connectivity & IoT Solutions India",
  description: "India's leading partner for smart infrastructure and connectivity. We provide end-to-end solutions for CCTV, Solar, Networking, and Smart Homes.",
  alternates: {
    canonical: "https://omnilinkinfra.com",
  },
};

export default function Home() {
  return (
    <main>
      <Hero />
      <TrustBar />
      
      {/* Full Services Section now on HomePage */}
      <ServicesSection />

      <WhyChooseUs />
      
      {/* How It Works Section */}
      <div className="how-section">
        <div className="how-inner">
          <div className="section-header">
            <div className="section-eyebrow">Our Process</div>
            <h2 className="section-title" style={{color:'white'}}>How We Deliver</h2>
            <p className="section-desc">A systematic, transparent approach — from consultation to handover.</p>
          </div>
          <div className="steps-grid">
            <div className="step-item"><div className="step-num">01</div><div className="step-title">Site Survey</div><div className="step-desc">Free on-site assessment of your requirements and infrastructure.</div></div>
            <div className="step-item"><div className="step-num">02</div><div className="step-title">Custom Design</div><div className="step-desc">Tailored solution architecture with transparent pricing.</div></div>
            <div className="step-item"><div className="step-num">03</div><div className="step-title">Expert Install</div><div className="step-desc">Certified technicians execute with minimal disruption.</div></div>
            <div className="step-item"><div className="step-num">04</div><div className="step-title">Handover & AMC</div><div className="step-desc">Training, documentation, and Annual Maintenance Contract.</div></div>
          </div>
        </div>
      </div>

      <Testimonials />

      {/* CTA BAND */}
      <div className="cta-band">
        <h2>Ready to Build Smarter Infrastructure?</h2>
        <p>Get a free site survey and customised quote within 24 hours.</p>
        <div className="cta-row">
          <Link href="/contact" className="btn-white">Get Free Consultation</Link>
          <button className="btn-outline-white">Download Brochure</button>
        </div>
      </div>
    </main>
  );
}
