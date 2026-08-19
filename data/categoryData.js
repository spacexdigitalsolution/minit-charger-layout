export const categoryData = {
  hardware: {
    hero: {
      breadcrumbs: [
        { label: "Categories", href: "/categories" },
        { label: "Hardware", href: "#" }
      ],
      title: "Industrial Charging Hardware",
      description: "Our most popular chargers for warehouse and aviation environments. Built to handle 24/7 operations and high-throughput opportunity charging.",
      features: [
        "NEMA-rated outdoor options available",
        "Lithium, Lead-Acid, and AGM support",
        "Fleet intelligence with Cumulus"
      ],
      cta: { text: "View Hardware", href: "#hardware-list" },
      imageSrc: "/product-images/Altus II/ALTUS II.14.webp", // Maximus placeholder
      imageAlt: "MAXIMUS",
      imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp"
    },
    badgeStrip: {
      label: "Hardware Environments:",
      badges: ["Distribution Centers", "Airport Aprons", "Ports", "Manufacturing"]
    },
    products: {
      eyebrow: "Explore Models",
      heading: "Hardware in this category",
      items: [
        {
          id: 'p1',
          title: "ALTUS II",
          description: "Outdoor dual-port eGSE charger designed for aviation and extreme weather.",
          imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
          imageAlt: "ALTUS II",
          imageDescription: "Placeholder for /product-images/Altus II/ALTUS II.14.webp",
          href: "/product/altus-ii"
        },
        {
          id: 'p2',
          title: "MAXIMUS",
          description: "Indoor high-capacity dual-port warehouse charger for heavy-duty material handling.",
          imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
          imageAlt: "MAXIMUS",
          imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp",
          href: "/product/maximus"
        },
        {
          id: 'p3',
          title: "MOMENTUS",
          description: "Standard mid-level single-port MHE charging for mixed fleet environments.",
          imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
          imageAlt: "MOMENTUS",
          imageDescription: "Placeholder for /product-images/Momentus/Momentus.2100.webp",
          href: "/product/momentus"
        }
      ]
    },
    logoFeature: {
      logoLabel: "Tested and trusted by industry leaders",
      logos: ["AviationCorp", "LogisticsPlus", "GlobalFreight", "AeroHub"],
      features: [
        {
          id: 'lf1',
          title: "Fast Opportunity Charging",
          description: "Eliminate battery swapping and maximize uptime by charging during driver breaks.",
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        },
        {
          id: 'lf2',
          title: "Built-in Diagnostics",
          description: "Intelligent charging displays provide immediate feedback and connect directly to Cumulus.",
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
        },
        {
          id: 'lf3',
          title: "Universal Chemistry",
          description: "Safely charge Lithium, Lead-Acid, and AGM batteries from a single charger.",
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        }
      ]
    },
    comparison: {
      eyebrow: "Hardware Environments",
      heading: "Indoor vs Outdoor Performance.",
      left: {
        title: "Outdoor (eGSE & Ports)",
        description: "Engineered for extreme conditions, our outdoor models withstand rain, snow, and extreme temperatures while delivering massive dual-port power.",
        features: [
          "NEMA 3R weather-resistant enclosures",
          "Dual-port capability for simultaneous charging",
          "Pedestal and wall-mount options"
        ],
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "ALTUS II",
        imageDescription: "Placeholder for /product-images/Altus II/ALTUS II.14.webp"
      },
      right: {
        title: "Indoor (Warehousing & MHE)",
        description: "Compact, highly efficient chargers designed to minimize floorspace while keeping your forklifts and reach trucks running 24/7.",
        features: [
          "High-efficiency power conversion",
          "Scalable port configurations",
          "Universal battery chemistry support"
        ],
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "MAXIMUS",
        imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp"
      }
    },
    faq: {
      heading: "Hardware FAQs",
      description: "Common questions about Minit Charger hardware installations and capabilities.",
      faqs: [
        {
          id: 'q1',
          question: "What electrical input is required for the hardware?",
          answer: "Our standard industrial hardware accepts universal 208–480 VAC, 3-phase, 50/60 Hz input, making it easy to integrate into existing facility infrastructure."
        },
        {
          id: 'q2',
          question: "Can one charger support multiple vehicles simultaneously?",
          answer: "Yes, models like the Altus II and Maximus offer dual-port configurations that can intelligently share power across multiple connected vehicles."
        },
        {
          id: 'q3',
          question: "How do these chargers communicate with the cloud?",
          answer: "Our hardware is equipped with telemetry modules that sync charging data, faults, and performance metrics securely to AssetPro 360 via cellular or Wi-Fi."
        }
      ]
    },
    cta: {
      heading: "Need help choosing the right hardware?",
      description: "Our experts can recommend the perfect combination of indoor and outdoor chargers for your specific operations.",
      primaryCta: { text: "Get a Quote", href: "/contact" },
      images: [
        {
          id: 'i1',
          src: "/product-images/Altus II/ALTUS II.14.webp",
          alt: "Maximus",
          description: "Placeholder for /product-images/Maximus/MAXIMUS.webp"
        }
      ]
    },
    galleryStrip: {
      eyebrow: "Trusted across industries",
      images: [
        { id: 'g1', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Warehouse', description: 'Warehouse' },
        { id: 'g2', src: '/new_images/industry_airport_1786134268548.webp', alt: 'Aviation', description: 'Aviation' },
        { id: 'g3', src: '/new_images/industry_lsev_1786134282031.webp', alt: 'LSV', description: 'LSV' },
        { id: 'g4', src: '/new_images/industry_commercial_1786134294460.webp', alt: 'CMS', description: 'CMS' },
        { id: 'g5', src: '/product-images/Altus II/ALTUS II.14.webp', alt: 'Maximus', description: 'Maximus' },
        { id: 'g6', src: '/product-images/Altus II/ALTUS II.14.webp', alt: 'Altus', description: 'Altus' }
      ]
    }
  },
  software: {
    hero: {
      breadcrumbs: [
        { label: "Categories", href: "/categories" },
        { label: "Software", href: "#" }
      ],
      title: "Fleet Intelligence Software",
      description: "AssetPro 360 gives you real-time visibility into your entire charging network, helping you optimize operations and reduce downtime.",
      features: [
        "Real-time charger health monitoring",
        "Automated alerts and notifications",
        "Comprehensive utilization reporting"
      ],
      cta: { text: "Explore AssetPro 360", href: "/product/assetpro-360" },
      imageSrc: "/product-images/CMS/CMS.1.webp",
      imageAlt: "AssetPro 360",
      imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp"
    },
    badgeStrip: {
      label: "Software Features:",
      badges: ["Telemetry", "Reporting", "Fleet Health", "Cloud Management"]
    },
    products: {
      eyebrow: "Explore Platforms",
      heading: "Software in this category",
      items: [
        {
          id: 's1',
          title: "ASSETPRO 360",
          description: "Cloud-based fleet charging management platform for full operational visibility.",
          imageSrc: "/product-images/CMS/CMS.1.webp",
          imageAlt: "ASSETPRO 360",
          imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp",
          href: "/product/assetpro-360"
        }
      ]
    },
    logoFeature: {
      logoLabel: "Trusted by fleet managers",
      logos: ["LogisticsPlus", "GlobalFreight"],
      features: [
        {
          id: 'lf1',
          title: "Real-time Monitoring",
          description: "See the exact state of charge for every vehicle in your fleet.",
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round"/></svg>
        },
        {
          id: 'lf2',
          title: "Automated Alerts",
          description: "Get notified immediately if a charger goes offline or a fault occurs.",
          icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><polyline points="22 4 12 14.01 9 11.01"></polyline></svg>
        }
      ]
    },
    comparison: {
      eyebrow: "Software Editions",
      heading: "Standard vs Premium.",
      left: {
        title: "Standard Edition",
        description: "Included with all Minit Charger hardware, providing basic telemetry and status monitoring.",
        features: [
          "Live charger status",
          "Basic fault reporting",
          "Web dashboard access"
        ],
        imageSrc: "/product-images/CMS/CMS.1.webp",
        imageAlt: "AssetPro 360 Standard",
        imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp"
      },
      right: {
        title: "Premium Edition",
        description: "Advanced analytics, API integrations, and historical reporting for large fleets.",
        features: [
          "Historical trend analysis",
          "Custom alert routing",
          "API access for ERP integration"
        ],
        imageSrc: "/product-images/CMS/CMS.1.webp",
        imageAlt: "AssetPro 360 Premium",
        imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp"
      }
    },
    faq: {
      heading: "Software FAQs",
      description: "Common questions about our software platforms.",
      faqs: [
        {
          id: 'q1',
          question: "Is AssetPro 360 cloud-based?",
          answer: "Yes, it is a fully cloud-hosted solution accessible from any web browser."
        },
        {
          id: 'q2',
          question: "Can it integrate with my maintenance software?",
          answer: "Yes, our Premium Edition offers API access to integrate with popular CMMS and ERP systems."
        }
      ]
    },
    cta: {
      heading: "Ready to connect your fleet?",
      description: "Get a demo of AssetPro 360.",
      primaryCta: { text: "Request Demo", href: "/contact" },
      images: [
        {
          id: 'i1',
          src: "/product-images/CMS/CMS.1.webp",
          alt: "AssetPro 360",
          description: "Placeholder for /product-images/CMS/CMS.3.webp"
        }
      ]
    },
    galleryStrip: {
      eyebrow: "Software Interface",
      images: [
        { id: 'g1', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Dashboard', description: 'Dashboard view' }
      ]
    }
  }
};
