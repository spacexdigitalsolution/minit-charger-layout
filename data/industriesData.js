import React from 'react';

export const industriesData = {
  heroGrid: {
    eyebrow: "Solutions By Industry",
    heading: "Industries We Serve",
    description: "From airports to massive distribution centers, Minit Charger's fast charging technology keeps mission-critical fleets powered across diverse sectors.",
    cards: [
      {
        id: 'i1',
        title: "Warehouses",
        description: "Keep forklifts and material handling equipment running multiple shifts without swapping batteries.",
        imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
        imageAlt: "Warehouses",
        imageDescription: "Placeholder for /new_images/industry_warehouse_1786134258340.webp",
        href: "/industry/warehouse-manufacturing"
      },
      {
        id: 'i2',
        title: "Airports",
        description: "Rugged, weather-proof charging for electric ground support equipment and baggage tractors.",
        imageSrc: "/new_images/industry_airport_1786134268548.webp",
        imageAlt: "Airports",
        imageDescription: "Placeholder for /new_images/industry_airport_1786134268548.webp",
        href: "/industry/aviation-ground-support-equipment"
      },
      {
        id: 'i3',
        title: "LSEVs",
        description: "Compact charging solutions for golf carts, campus shuttles, and light utility vehicles.",
        imageSrc: "/new_images/industry_lsev_1786134282031.webp",
        imageAlt: "LSEVs",
        imageDescription: "Placeholder for /new_images/industry_lsev_1786134282031.webp",
        href: "/industry/low-speed-vehicles"
      },
      {
        id: 'i4',
        title: "Industrial & Commercial",
        description: "Telemetry and cloud-based analytics to monitor fleet health and charging compliance.",
        imageSrc: "/new_images/industry_commercial_1786134294460.webp",
        imageAlt: "Industrial & Commercial",
        imageDescription: "Placeholder for /new_images/industry_commercial_1786134294460.webp",
        href: "#"
      }
    ]
  },
  logoStrip: {
    eyebrow: "Trusted by top industry leaders worldwide",
    logos: [
      { id: 'l1', name: 'Delta' },
      { id: 'l2', name: 'FedEx' },
      { id: 'l3', name: 'Amazon' },
      { id: 'l4', name: 'Toyota' },
      { id: 'l5', name: 'Kroger' }
    ]
  },
  insights: {
    eyebrow: "Why Industries Choose Us",
    heading: "Powering continuous operations.",
    description: "",
    cards: [
      {
        id: 'c1',
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" strokeLinecap="round" strokeLinejoin="round"/></svg>,
        title: "Lower TCO",
        description: "Eliminate battery swapping infrastructure and reduce battery inventory by up to 50% with fast opportunity charging."
      },
      {
        id: 'c2',
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
        title: "24/7 Uptime",
        description: "Keep vehicles operational across multiple shifts. Short charging sessions during breaks prevent battery depletion."
      },
      {
        id: 'c3',
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>,
        title: "Seamless Integration",
        description: "Connects smoothly with existing ERP and fleet management software through our Cumulus cloud platform."
      }
    ]
  },
  caseStudy: {
    eyebrow: "Aviation Success Story",
    heading: "How AviationCorp Reduced GSE Downtime by 40%",
    description: "By deploying Altus II fast chargers across their airport aprons, AviationCorp eliminated mid-shift battery swaps for their baggage tractors, leading to massive operational savings.",
    stats: [
      { label: "Downtime", value: "-40%" },
      { label: "Fleet Availability", value: "+22%" }
    ],
    imageSrc: "/product-images/Altus II/ALTUS II.14.webp", // using available placeholder
    imageAlt: "Altus II Case Study",
    imageDescription: "Placeholder for /product-images/Industry Image Renders/ALTUS II.1771.webp"
  },
  testimonials: {
    heading: "What Industry Leaders Say",
    testimonials: [
      {
        id: 't1',
        quote: "Minit Charger's fast chargers completely transformed our distribution center operations. We no longer have a dedicated battery room, saving thousands of square feet.",
        authorName: "Sarah Jenkins",
        authorRole: "VP Logistics, GlobalFreight"
      },
      {
        id: 't2',
        quote: "The outdoor durability of the Altus II is unmatched. It survives the harsh winter apron conditions without missing a beat, ensuring our ground support teams never stop.",
        authorName: "Marcus Thorne",
        authorRole: "GSE Director, AeroHub"
      }
    ]
  },
  comparison: {
    eyebrow: "Operational Shift",
    heading: "Conventional vs. Fast Charging.",
    leftTitle: "Conventional Charging",
    leftItems: [
      "Requires massive dedicated battery rooms",
      "Frequent manual battery swaps required",
      "Significant labor costs and downtime",
      "8-hour charge + 8-hour cool down cycle"
    ],
    rightTitle: "Minit Charger Fast Charging",
    rightItems: [
      "Charge directly at staging areas and break rooms",
      "No battery swapping required (1 battery per truck)",
      "Rapidly injects power during operator breaks",
      "Universal chemistry support (Lithium & Lead-Acid)"
    ]
  },
  cta: {
    heading: "Ready to optimize your industry operations?",
    description: "Speak with our industry experts to build a tailored charging strategy.",
    buttons: [
      { id: 'b1', text: "Contact an Expert", href: "/contact", variant: "primary" } // We can reuse standard button component
    ]
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
      { id: 'b2', text: "View Products", href: "/products", variant: "outline" },
      { id: 'b3', text: "Explore Industries", href: "/industries", variant: "outline" },
      { id: 'b4', text: "About Us", href: "/about", variant: "primary" }
    ]
  }
};
