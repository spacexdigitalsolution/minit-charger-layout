export const productsData = {
  hero: {
    heading: "Browse Industrial Battery Charger Solutions",
    description: "Browse Minit Charger's expansive portfolio of industrial battery chargers for low or high voltages or indoor or outdoor use cases. Find the perfect fit for your fleet.",
    imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
    imageAlt: "Material Handling",
    imageDescription: "Placeholder for /product-images/Industry Image Renders/Material handeling.webp",
    primaryCta: { text: "View Catalog", href: "#catalog" },
    secondaryCta: { text: "Request a Quote", href: "/contact" }
  },
  strip: {
    label: "Supported Applications:",
    badges: [
      { id: 'b1', text: "Warehousing" },
      { id: 'b2', text: "Aviation (GSE)" },
      { id: 'b3', text: "Cold Storage" },
      { id: 'b4', text: "Manufacturing" },
      { id: 'b5', text: "Low-Speed Vehicles" }
    ]
  },
  catalog: {
    eyebrow: "Our Portfolio",
    heading: "Industrial Battery Chargers & Systems",
    description: "Engineered for reliability, our chargers support multiple chemistries (Lithium, Lead-Acid, AGM) across diverse operational environments.",
    products: [
      {
        id: 'p1',
        title: "MAXIMUS",
        description: "High-capacity indoor dual-port charger.",
        imageSrc: "/new_images/industry_warehouse_1786134258340.webp", // Maximus
        imageAlt: "MAXIMUS",
        imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp",
        href: "/product/maximus"
      },
      {
        id: 'p2',
        title: "ALTUS II",
        description: "Outdoor dual-port eGSE charger.",
        imageSrc: "/assets/Products/Altus II/Altus II Listing.webp", // Altus II
        imageAlt: "ALTUS II",
        imageDescription: "Placeholder for /product-images/Altus II/ALTUS II.14.webp",
        href: "/products/altus-ii"
      },
      {
        id: 'p3',
        title: "MOMENTUS",
        description: "Mid-level single-port MHE charger.",
        imageSrc: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp", // Momentus
        imageAlt: "MOMENTUS",
        imageDescription: "Placeholder for /product-images/Momentus/Momentus.2100.webp",
        href: "/product/momentus"
      },
      {
        id: 'p4',
        title: "DURUS",
        description: "Compact charger for LSEV.",
        imageSrc: "/assets/Products/Durus/Durus Listing.webp", // Durus
        imageAlt: "DURUS",
        imageDescription: "Placeholder for /product-images/Durus/DCXC.webp",
        href: "/products/durus"
      },
      {
        id: 'p5',
        title: "CELLTRAC",
        description: "Onboard BMS telemetry and monitoring.",
        imageSrc: "/new_images/celltrac_dash.webp", // CellTrac
        imageAlt: "CELLTRAC",
        imageDescription: "Placeholder for /product-images/Cell trac/Render.2055.webp",
        href: "/products/celltrac"
      },
      {
        id: 'p6',
        title: "CUMULUS",
        description: "Cloud fleet charging analytics platform.",
        imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp", // Cumulus
        imageAlt: "CUMULUS",
        imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp",
        href: "/products/cumulus"
      },
      {
        id: 'p7',
        title: "MOBILUS",
        description: "Mobile and adaptable rapid charger.",
        imageSrc: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp", // Mobilus
        imageAlt: "MOBILUS",
        imageDescription: "Placeholder for /product-images/Mobilus/3D MODLE.10.webp",
        href: "/product/mobilus"
      },
      {
        id: 'p8',
        title: "MAGNUS",
        description: "Versatile heavy-duty industrial unit.",
        imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp", // Magnus
        imageAlt: "MAGNUS",
        imageDescription: "Placeholder for /product-images/Industry Image Renders/work platforms.webp",
        href: "/products/magnus"
      }
    ]
  },
  spotlight: {
    eyebrow: "Fleet Management Software",
    heading: "Cumulus",
    description: "Connect your entire fleet of chargers to the cloud. Cumulus provides real-time charging status, advanced analytics, and proactive issue detection across all your facilities.",
    stats: [
      { label: "Real-time telemetry", value: "" },
      { label: "Actionable analytics", value: "" },
      { label: "ERP Integration", value: "" }
    ],
    imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
    imageAlt: "Cumulus Dashboard",
    imageDescription: "Placeholder for /product-images/CMS/CMS.2.webp"
  },
  specs: {
    eyebrow: "Platform Capabilities",
    heading: "Technical overview across the Minit Charger line.",
    tableCol1Header: "Capability",
    tableCol2Header: "Minit Charger standard",
    rows: [
      { id: 's1', label: "AC input", value: "Universal 208–480 VAC, 3-phase, 50/60 Hz" },
      { id: 's2', label: "Dual-port power class", value: "Up to ~20 kW per port (Altus II / Maximus)" },
      { id: 's3', label: "Supported chemistries", value: "Lithium, lead-acid, AGM" },
      { id: 's4', label: "Onboard BMS", value: "CellTrac with GPS, SoC, alarms, cloud" }
    ]
  },
  faq: {
    heading: "Frequently asked questions",
    description: "Common questions about our industrial charger lineup.",
    faqs: [
      {
        id: 'f1',
        question: "Can I use the same charger for Lithium and Lead-Acid?",
        answer: "Yes, Minit Chargers support multiple chemistries, allowing you to transition your fleet to lithium without stranding older lead-acid assets."
      },
      {
        id: 'f2',
        question: "Which charger is best for outdoor GSE?",
        answer: "The Altus II and Magnus are specifically designed with NEMA-rated enclosures and weather-resistant components for harsh outdoor environments."
      },
      {
        id: 'f3',
        question: "Do these connect to Cumulus automatically?",
        answer: "Yes, our chargers come with built-in telemetry capabilities to sync real-time data to your Cumulus dashboard."
      }
    ]
  },
  cta: {
    heading: "Ready to upgrade your fleet's charging infrastructure?",
    description: "Get a customized recommendation based on your shift schedule and vehicle types.",
    primaryCta: { text: "Request a Quote", href: "/contact" },
    images: [
      {
        id: 'i1',
        src: "/assets/Products/Altus II/Altus II Listing.webp",
        alt: "Altus II",
        description: "Placeholder for /product-images/Altus II/ALTUS II.14.webp"
      },
      {
        id: 'i2',
        src: "/new_images/industry_warehouse_1786134258340.webp",
        alt: "Maximus",
        description: "Placeholder for /product-images/Maximus/MAXIMUS.webp",
        hiddenOnMobile: true
      }
    ]
  }
};
