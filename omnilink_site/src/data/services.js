export const services = [
  { 
    id: 'cctv',
    name: 'CCTV Installation', 
    desc: 'HD & IP surveillance systems for homes, offices, and industrial sites with remote monitoring.', 
    tag: 'Security', 
    cat: 'Security & Safety', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M15 10l4.553-2.069A1 1 0 0121 8.87v6.26a1 1 0 01-1.447.894L15 14M3 8a2 2 0 012-2h10a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2V8z"/>
      </svg>
    )
  },
  { 
    id: 'fire',
    name: 'Fire Alarm & Hydrant', 
    desc: 'Addressable & conventional fire detection systems with hydrant and suppression installations.', 
    tag: 'Safety', 
    cat: 'Security & Safety', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M12 2c0 0-4 4-4 8a4 4 0 008 0c0-4-4-8-4-8z"/><path d="M12 14v4M8 18h8"/>
      </svg>
    )
  },
  { 
    id: 'access',
    name: 'Access Control', 
    desc: 'Biometric, card-based & facial recognition access systems for secure entry management.', 
    tag: 'Security', 
    cat: 'Security & Safety', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
      </svg>
    )
  },
  { 
    id: 'wifi',
    name: 'WiFi & Networking', 
    desc: 'Structured cabling, enterprise WiFi, LAN/WAN setup and managed network infrastructure.', 
    tag: 'Connectivity', 
    cat: 'Connectivity', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M5 12.55a11 11 0 0114.08 0"/><path d="M1.42 9a16 16 0 0121.16 0"/><path d="M8.53 16.11a6 6 0 016.95 0"/><circle cx="12" cy="20" r="1"/>
      </svg>
    )
  },
  { 
    id: 'voip',
    name: 'VoIP Installation', 
    desc: 'IP-PBX, SIP trunk and VoIP phone systems for modern business communication infrastructure.', 
    tag: 'Communication', 
    cat: 'Connectivity', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 014.69 15.1a19.79 19.79 0 01-3.07-8.67A2 2 0 013.6 4.27h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L7.91 11a16 16 0 006 6l1.09-.95a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
      </svg>
    )
  },
  { 
    id: 'audio',
    name: 'Audio PA Systems', 
    desc: 'Public address and audio distribution systems for schools, hospitals, malls, and large facilities.', 
    tag: 'AV', 
    cat: 'Connectivity', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/><path d="M19.07 4.93a10 10 0 010 14.14M15.54 8.46a5 5 0 010 7.07"/>
      </svg>
    )
  },
  { 
    id: 'power',
    name: 'Power Backup / UPS', 
    desc: 'Online UPS, inverters, and battery bank solutions for critical IT and industrial power protection.', 
    tag: 'Power', 
    cat: 'Power & Energy', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"/>
      </svg>
    )
  },
  { 
    id: 'solar',
    name: 'Solar Solutions', 
    desc: 'Rooftop solar panels, grid-tie and off-grid systems, solar street lighting and EPC services.', 
    tag: 'Energy', 
    cat: 'Power & Energy', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>
      </svg>
    )
  },
  { 
    id: 'smart-home',
    name: 'Smart Home Automation', 
    desc: 'Lighting control, motorized blinds, smart locks, climate automation and integrated home management.', 
    tag: 'Automation', 
    cat: 'Smart Solutions', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/>
      </svg>
    )
  },
  { 
    id: 'smart-classroom',
    name: 'Smart Classroom', 
    desc: 'Interactive flat panels, projectors, digital podiums and complete AV setup for modern education.', 
    tag: 'EdTech', 
    cat: 'Smart Solutions', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <path d="M2 3h6a4 4 0 014 4v14a3 3 0 00-3-3H2z"/><path d="M22 3h-6a4 4 0 00-4 4v14a3 3 0 013-3h7z"/>
      </svg>
    )
  },
  { 
    id: 'it-infra',
    name: 'IT Infrastructure', 
    desc: 'Server rooms, data centers, rack installations, structured cabling and network security appliances.', 
    tag: 'Enterprise', 
    cat: 'Smart Solutions', 
    icon: (
      <svg viewBox="0 0 24 24" stroke="currentColor" fill="none" strokeWidth="1.8">
        <rect x="2" y="2" width="20" height="8" rx="2" ry="2"/><rect x="2" y="14" width="20" height="8" rx="2" ry="2"/><line x1="6" y1="6" x2="6.01" y2="6"/><line x1="6" y1="18" x2="6.01" y2="18"/>
      </svg>
    )
  },
];

export const categories = ['All', 'Security & Safety', 'Connectivity', 'Power & Energy', 'Smart Solutions'];
