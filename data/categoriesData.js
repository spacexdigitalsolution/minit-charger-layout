export const categoriesData = {
  hero: {
    eyebrow: "Complete Portfolio",
    heading: "Product Categories",
    description: "Explore Minit Charger's expansive portfolio of industrial battery chargers and fleet management software. We support low or high voltages for indoor and outdoor use cases across warehouses, airports, and more.",
    imageSrc: "/new_images/industry_warehouse_1786134258340.webp", // Placeholder
    imageAlt: "Categories Hero",
    imageDescription: "Placeholder for /product-images/Industry Image Renders/Material handeling.webp"
  },
  badgeStrip: {
    label: "Deployed Across:",
    badges: [
      { id: 'b1', text: "Warehousing & 3PL" },
      { id: 'b2', text: "Aviation GSE" },
      { id: 'b3', text: "Cold Storage" },
      { id: 'b4', text: "Manufacturing" }
    ]
  },
  coreCategories: {
    heading: "Core Product Lines",
    categories: [
      {
        id: 'c1',
        title: "Hardware Infrastructure",
        description: "Our complete lineup of rugged, high-power indoor and outdoor battery chargers. Designed for single-shift opportunity charging and multi-shift heavy duty cycles.",
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "Hardware Infrastructure",
        imageDescription: "Placeholder for /product-images/Altus II/ALTUS II.14.webp",
        href: "/category/hardware"
      },
      {
        id: 'c2',
        title: "AssetPro 360 Software",
        description: "Intelligent cloud fleet charging management, analytics, and telemetry platforms. Gain full visibility into battery health, charge cycles, and operator compliance.",
        imageSrc: "/product-images/CMS/CMS.1.webp",
        imageAlt: "AssetPro 360 Software",
        imageDescription: "Placeholder for /product-images/CMS/CMS.1.webp",
        href: "/category/software"
      }
    ]
  },
  whyChoose: {
    eyebrow: "The Minit Charger Advantage",
    heading: "Engineered for absolute reliability",
    features: [
      {
        id: 'w1',
        title: "ROI Focused",
        description: "Eliminate dedicated battery rooms and battery swapping labor. Opportunity charging keeps operators moving.",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
      },
      {
        id: 'w2',
        title: "Universal Chemistry",
        description: "Support for Lithium-Ion, Lead Acid, and AGM batteries through intelligent, programmable charge algorithms.",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/></svg>
      },
      {
        id: 'w3',
        title: "Cloud Connected",
        description: "Every charger connects to AssetPro 360, providing telemetry, remote diagnostics, and automated reporting.",
        icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 12a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m9 9H3m9 9a9 9 0 0 1-9-9m9 9c1.66 0 3-4.03 3-9s-1.34-9-3-9m0 18c-1.66 0-3-4.03-3-9s1.34-9 3-9m-9 9a9 9 0 0 1 9-9"/></svg>
      }
    ]
  },
  testimonials: {
    heading: "Trusted by industry leaders",
    testimonials: [
      {
        id: 't1',
        quote: "Moving to Minit Charger's hardware allowed us to eliminate our battery swapping room entirely, recovering 10,000 sq ft of warehouse space.",
        badge: "3PL",
        authorName: "Director of Facilities",
        authorRole: "National 3PL Provider"
      },
      {
        id: 't2',
        quote: "The outdoor Altus II chargers have survived the harshest ramp conditions while keeping our GSE fleet charged and ready between flights.",
        badge: "GSE",
        authorName: "Fleet Manager",
        authorRole: "International Airport Hub"
      },
      {
        id: 't3',
        quote: "AssetPro 360 software finally gave us the visibility we needed to enforce charging compliance and extend battery life across 300+ lifts.",
        badge: "MHE",
        authorName: "VP of Operations",
        authorRole: "Grocery Distribution Center"
      }
    ]
  },
  faq: {
    heading: "Category FAQs",
    description: "Need help deciding between product lines? Find quick answers here.",
    faqs: [
      {
        id: 'q1',
        question: "Do hardware products include the software?",
        answer: "Yes. All new Minit Charger hardware comes hardware-ready for AssetPro 360. A software subscription unlocks the full cloud dashboard, telemetry, and automated reports."
      },
      {
        id: 'q2',
        question: "Can I mix hardware models at a single site?",
        answer: "Absolutely. You can deploy Maximus chargers for heavy-duty forklifts and Momentus chargers for pallet jacks, and manage them all seamlessly within the same AssetPro 360 portal."
      },
      {
        id: 'q3',
        question: "Are products rated for outdoor use?",
        answer: "Our Altus II series is specifically NEMA-rated and designed for harsh outdoor environments, making it ideal for Ground Support Equipment (GSE) and outdoor lumber yards."
      }
    ]
  },
  cta: {
    heading: "Ready to optimize your fleet charging?",
    description: "Get in touch with a Minit Charger specialist to build a custom hardware and software quote tailored to your facility.",
    primaryCta: { text: "Request a Quote", href: "/contact" }
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
};
