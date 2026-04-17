import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: {
    default: "OmniLink Infrastructure | Smart Connectivity & IoT Solutions India",
    template: "%s | OmniLink Infrastructure"
  },
  description: "India's trusted partner for IT infrastructure, CCTV surveillance, solar energy, managed networking, and smart home automation. ISO 9001:2015 certified.",
  keywords: ["IT Infrastructure India", "CCTV Surveillance Systems", "Solar Power Solutions", "Enterprise Networking", "Smart Home Automation", "IoT Connectivity", "Managed IT Services", "Digital Transformation", "OmniLink Infrastructure"],
  authors: [{ name: "OmniLink Infrastructure Team" }],
  creator: "OmniLink Infrastructure",
  publisher: "OmniLink Infrastructure",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    title: "OmniLink Infrastructure | Smart Connectivity Solutions",
    description: "End-to-end IT and energy infrastructure solutions for homes, businesses & institutions.",
    url: "https://omnilinkinfra.com",
    siteName: "OmniLink Infrastructure",
    locale: "en_IN",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "OmniLink Infrastructure | Smart Connectivity Solutions",
    description: "India's trusted IT infrastructure partner. CCTV, Solar, Networking, Smart Homes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({ children }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "OmniLink Infrastructure",
    "url": "https://omnilinkinfra.com",
    "logo": "https://omnilinkinfra.com/logo.png",
    "description": "India's trusted IT infrastructure partner specializing in CCTV, Solar, Networking, and Smart Automation.",
    "contactPoint": {
      "@type": "ContactPoint",
      "telephone": "+91-XXXXXXXXXX",
      "contactType": "customer service",
      "areaServed": "IN",
      "availableLanguage": "en"
    },
    "sameAs": [
      "https://www.linkedin.com/company/omnilink-infrastructure",
      "https://twitter.com/omnilinkinfra"
    ]
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <div id="omni-site">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
