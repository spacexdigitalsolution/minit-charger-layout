import React from 'react';

export const aboutData = {
  heroBanner: {
    eyebrow: "Our Story",
    heading: "Pioneering Fast Charge Technology",
    description: "For over 25 years, Minit Charger has been at the forefront of industrial fast charging, providing robust hardware and intelligent software to keep the world's supply chain moving.",
  },
  imageBlock: {
    imageSrc: "/new_images/industry_warehouse_1786134258340.webp", // using a placeholder image that exists
    imageAlt: "ALTUS 2",
    imageDescription: "Placeholder for /product-images/Industry Image Renders/ALTUS 2 V2.1765.webp",
  },
  logoStrip: {
    eyebrow: "Trusted globally since 1998",
    logos: [
      { id: 'l1', name: 'Delta' },
      { id: 'l2', name: 'Amazon' },
      { id: 'l3', name: 'Walmart' },
      { id: 'l4', name: 'FedEx' },
      { id: 'l5', name: 'Toyota' }
    ]
  },
  legacyProse: {
    content: (
      <>
        <h2 className="text-3xl font-display font-semibold text-ink-950">A Legacy of Innovation</h2>
        <p>
          Founded in 1998, Minit Charger revolutionized the material handling industry by proving that electric forklifts didn't need multiple batteries to operate continuously. By patenting advanced thermal management algorithms, we enabled true "opportunity charging."
        </p>
        <p>
          Today, our solutions power mission-critical operations globally, from the busiest airport tarmacs to massive e-commerce distribution centers. We engineer, manufacture, and support our products to the highest standards of durability and performance.
        </p>
        
        <h2 className="text-3xl font-display font-semibold text-ink-950 mt-12">Driven by Data</h2>
        <p>
          The future of fleet management isn't just power—it's intelligence. With our AssetPro 360 cloud platform, we provide actionable telemetry that allows operations managers to extend battery life, predict maintenance, and guarantee charging compliance. We don't just sell chargers; we deliver uptime.
        </p>
      </>
    )
  },
  coreValues: {
    heading: "Our Core Principles",
    cards: [
      { 
        id: 'c1', 
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>, 
        title: 'Uptime is Everything', 
        description: 'Our hardware is over-engineered because our customers operate in environments where downtime halts global supply chains.' 
      },
      { 
        id: 'c2', 
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>, 
        title: 'Intelligent Power', 
        description: 'Raw power is useless without control. We lead the industry in data-driven charging, extending battery life through precision algorithms.' 
      },
      { 
        id: 'c3', 
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/></svg>, 
        title: 'Future-Proof Architecture', 
        description: "Whether you're charging lead-acid today or lithium-ion tomorrow, our systems adapt without requiring complete infrastructure replacement." 
      }
    ]
  },
  manufacturing: {
    eyebrow: "Manufacturing Excellence",
    heading: "Engineered and Supported in the USA",
    description: "We take pride in our domestic engineering and support teams. By keeping our core development close to our customers, we ensure rapid response times, higher quality control, and continuous innovation tailored to the specific needs of North American logistics and aviation.",
    bullets: [
      "Dedicated National Support Team",
      "Rapid Component Availability"
    ],
    imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
    imageAlt: "Altus 2",
    imageDescription: "Placeholder for /product-images/Altus 2/altus 2 v3.webp",
    imagePosition: "right"
  },
  ctaBanner: {
    heading: "Join the electric revolution",
    description: "Discover how Minit Charger can optimize your fleet, or reach out to explore partnership and career opportunities.",
    primaryCta: { text: "Contact Us", href: "/contact" },
    secondaryCta: { text: "Explore Products", href: "/products" }
  },
  galleryStrip: {
    eyebrow: "Trusted across industries",
    images: [
      { id: 'g1', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Warehouse', description: 'Warehouse' },
      { id: 'g2', src: '/new_images/industry_airport_1786134268548.webp', alt: 'Aviation', description: 'Aviation' },
      { id: 'g3', src: '/new_images/industry_lsev_1786134282031.webp', alt: 'LSV', description: 'LSV' },
      { id: 'g4', src: '/new_images/industry_commercial_1786134294460.webp', alt: 'CMS', description: 'CMS' },
      { id: 'g5', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Maximus', description: 'Maximus' },
      { id: 'g6', src: '/product-images/Altus II/ALTUS II.14.webp', alt: 'Altus', description: 'Altus' }
    ],
    buttons: [
      { id: 'b1', text: "Contact Sales", href: "/contact", variant: "primary" },
      { id: 'b2', text: "View Products", href: "/products", variant: "outline" }
    ]
  }
};
