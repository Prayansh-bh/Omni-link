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
      
      <div className="nav-links">
        {links.map((link) => (
          <Link 
            key={link.name} 
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.name}
          </Link>
        ))}
      </div>

      <Link href="/contact" className="nav-cta">
        Get a Free Quote
      </Link>
    </nav>
  );
}
