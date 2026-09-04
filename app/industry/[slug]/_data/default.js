export const industryData = {
  warehouse: {
    hero: {
      breadcrumbs: [
        { label: "Industries", href: "/industries" },
        { label: "Warehouse & Manufacturing", href: "#" }
      ],
      imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
      imageAlt: "Material Handling",
      imageDescription: "Placeholder for /product-images/Industry Image Renders/Material handeling.webp",
      title: "Powering Distribution & Logistics",
      description: "Minit Charger fast-charging solutions keep material handling equipment (MHE) and forklifts operating at peak efficiency, eliminating the need for battery swapping rooms and dangerous multi-battery handling."
    },
    logoStrip: {
      label: "Trusted by top 100 logistics companies",
      logos: [
        { id: 'l1', name: "Amazon" },
        { id: 'l2', name: "Walmart" },
        { id: 'l3', name: "Kroger" },
        { id: 'l4', name: "Target" }
      ]
    },
    prose: {
      contentBlocks: [
        { id: 'b1', type: 'heading2', content: "Efficiency in the Warehouse" },
        { id: 'b2', type: 'paragraph', content: "In high-volume distribution centers, downtime is not an option. Our charging systems are designed to deliver rapid opportunity charges during operator breaks and shift changes. This allows fleets to operate 24/7 on a single battery per vehicle." },
        { id: 'b3', type: 'paragraph', content: "By switching to Minit Charger's fast-charge technology, warehouses regain the valuable square footage previously wasted on battery rooms. Our chargers can be distributed throughout the facility near break rooms and active operational zones to maximize charging efficiency." },
        { id: 'b4', type: 'heading3', content: "Key Benefits" },
        { id: 'b5', type: 'list', content: [
          "Eliminate battery changing rooms and equipment.",
          "Reduce workplace injuries associated with battery handling.",
          "Regain valuable warehouse floor space for product storage.",
          "Extend battery life with intelligent thermal management."
        ]}
      ],
      sidebarProducts: [
        {
          id: 'sp1',
          title: "MAXIMUS",
          description: "High-capacity indoor charger",
          imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
          imageAlt: "MAXIMUS",
          imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp",
          href: "/product/maximus"
        },
        {
          id: 'sp2',
          title: "MOMENTUS",
          description: "Single-port MHE charger",
          imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
          imageAlt: "MOMENTUS",
          imageDescription: "Placeholder for /product-images/Momentus/Momentus.2100.webp",
          href: "/product/momentus"
        }
      ],
      sidebarCategory: {
        title: "View Hardware Category",
        description: "See our full lineup of chargers designed for the toughest environments.",
        buttonText: "View Hardware",
        href: "/category/hardware"
      }
    },
    challenges: {
      eyebrow: "Operational Challenges Solved",
      heading: "Why distribution centers are abandoning conventional charging.",
      features: [
        {
          id: 'c1',
          title: "Recover Lost Space",
          description: "Conventional charging requires dedicated battery rooms that take up massive square footage. Minit Chargers can be installed directly in operational areas, letting you repurpose the battery room for revenue-generating product storage."
        },
        {
          id: 'c2',
          title: "Eliminate Battery Swaps",
          description: "Stop paying operators to swap 3,000lb batteries multiple times a shift. With opportunity charging, operators simply plug in during their scheduled breaks, keeping the vehicle operational 24/7 on a single battery."
        },
        {
          id: 'c3',
          title: "Improve Workplace Safety",
          description: "Battery swaps are inherently dangerous, involving acid spills and heavy lifting equipment. Fast charging eliminates the need for battery extraction entirely."
        }
      ],
      imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
      imageAlt: "Material Handling",
      imageDescription: "Placeholder for /product-images/Industry Image Renders/Material handeling.webp"
    },
    spotlight: {
      eyebrow: "Warehouse Fleet Management",
      heading: "Complete visibility with Cumulus",
      description: "Managing hundreds of chargers across multiple distribution centers used to be impossible. With Cumulus, warehouse managers get real-time dashboards showing charger status, fleet utilization, and operator compliance.",
      stats: [
        { label: "Ensure operators are plugging in during breaks", value: "✓" },
        { label: "Identify underutilized assets", value: "✓" },
        { label: "Track energy consumption per facility", value: "✓" }
      ],
      imageSrc: "/product-images/CMS/CMS.1.webp",
      imageAlt: "Cumulus Dashboard",
      imageDescription: "Placeholder for /product-images/CMS/CMS.2.webp"
    },
    faq: {
      heading: "Warehouse Charging FAQs",
      description: "Common questions about implementing opportunity charging in distribution centers.",
      faqs: [
        {
          id: 'q1',
          question: "Does fast charging damage forklift batteries?",
          answer: "No. Minit Chargers are designed with intelligent algorithms and thermal management (via CellTrac) to safely fast-charge lead-acid and lithium batteries without accelerating degradation."
        },
        {
          id: 'q2',
          question: "How many chargers do I need for my fleet?",
          answer: "This depends on your shift schedules, vehicle types, and break durations. Our dual-port chargers (like MAXIMUS) typically allow you to support more vehicles with fewer charger installations. Contact our team for a custom ROI analysis."
        },
        {
          id: 'q3',
          question: "Where should we install the chargers?",
          answer: "For maximum operator compliance, chargers should be installed in decentralized locations near break rooms, loading docks, and high-traffic operational zones."
        }
      ]
    },
    cta: {
      heading: "Ready to eliminate your battery room?",
      description: "Our warehouse specialists will build a custom transition plan and ROI calculation for your facility.",
      primaryCta: { text: "Request a Consultation", href: "/contact" },
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
        { id: 'g5', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Maximus', description: 'Maximus' },
        { id: 'g6', src: '/product-images/Altus II/ALTUS II.14.webp', alt: 'Altus', description: 'Altus' }
      ],
      buttons: [
        { id: 'b1', text: "Contact Sales", href: "/contact", variant: "primary" },
        { id: 'b2', text: "View Products", href: "/products", variant: "outline" },
        { id: 'b3', text: "Explore Industries", href: "/industries", variant: "outline" },
        { id: 'b4', text: "About Us", href: "/about", variant: "primary" }
      ]
    },
    relatedProducts: {
    eyebrow: "Related products",
    heading: "Build your charging ecosystem.",
      products: [
        {
          id: "magnus",
          title: "Magnus",
          description: "24–1000 VDC, one platform from GSE to high-voltage EV.",
          imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
          imageAlt: "Magnus universal mixed-fleet DC fast charger",
          href: "/products/magnus"
        },
        {
          id: "maximus",
          title: "Maximus",
          description: "High-capacity indoor dual-port warehouse charger.",
          imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
          imageAlt: "Maximus charger",
          href: "/product/maximus"
        },
        {
          id: "celltrac",
          title: "CellTrac",
          description: "Battery asset tracking and BMS telemetry.",
          imageSrc: "/new_images/celltrac_dash.webp",
          imageAlt: "CellTrac dashboard",
          href: "/product/celltrac"
        }
      ]
    }
  }
};
