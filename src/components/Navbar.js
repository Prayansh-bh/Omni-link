"use client";
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: 'Services', href: '/#services' },
    { name: 'Solutions', href: '/solutions' },
    { name: 'Projects', href: '/projects' },
    { name: 'About', href: '/about' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo">
        <div className="nav-logo-mark">
          <svg viewBox="0 0 24 24"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
        </div>
        <div className="nav-brand">OmniLink <span>Infrastructure</span></div>
      </Link>
      
      <div className="nav-links" style={{position: 'relative', zIndex: 10, pointerEvents: 'auto'}}>
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
            style={{pointerEvents: 'auto'}}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <div style={{position: 'absolute', bottom: '-12px', right: '40px', fontSize: '9px', opacity: 0.3, color: 'var(--text-secondary)'}}>
        Build v2.2
      </div>

      <Link href="/contact" className="nav-cta" style={{pointerEvents: 'auto'}}>
        Get a Free Quote
      </Link>
    </nav>
  );
}
