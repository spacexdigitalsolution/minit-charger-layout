export const productData = {
  maximus: {
    hero: {
      breadcrumbs: [
        { label: "Categories", href: "/categories" },
        { label: "Hardware", href: "/category/hardware" },
        { label: "Products", href: "/products" },
        { label: "MAXIMUS", href: "#" }
      ],
      imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
      imageAlt: "MAXIMUS",
      imageDescription: "Placeholder for /product-images/Maximus/MAXIMUS.webp",
      eyebrow: "Indoor Rated",
      title: "MAXIMUS",
      description: "High-capacity indoor dual-port warehouse charger. Built to support heavy-duty material handling equipment, providing uninterrupted power for round-the-clock operations.",
      industries: [
        { label: "Warehouse/Manufacturing", href: "/industry/warehouse" },
        { label: "Logistics", href: "/industries" }
      ],
      features: [
        "Up to 30 kW total output",
        "Multi-voltage and multi-chemistry capable",
        "Built-in Cumulus connectivity"
      ],
      cta: { text: "Request a Quote", href: "/contact" },
      datasheetCta: { text: "Download Datasheet (PDF)", href: "#" }
    },
    installPhoto: {
      eyebrow: "Real-world Deployment",
      heading: "Designed for the warehouse floor.",
      description: "MAXIMUS is built to withstand the rigors of heavy industrial use. Deploy it directly where your operators need it, eliminating the wasted time and space of dedicated battery rooms.",
      listItems: [
        { id: 'f1', text: 'Space-saving wall or pedestal mountable footprint.' },
        { id: 'f2', text: 'Impact resistant heavy-gauge steel enclosure.' }
      ],
      imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
      imageAlt: "MAXIMUS deployed in a warehouse",
      imageDescription: "A MAXIMUS charger installed on a warehouse floor next to racking.",
      cta: { text: "See Installation Guide", href: "#" }
    },
    videoSpotlight: {
      heading: "Watch MAXIMUS in action",
      description: "See how dual-port charging and Cumulus integration keep fleets moving without bottlenecking at the charger.",
      cta: { text: "Play Video", href: "#" },
      imageSrc: "/new_images/warehouse_bg.webp",
      imageAlt: "Video Thumbnail",
      imageDescription: "Thumbnail of MAXIMUS video."
    },
    bentoFeatures: {
      eyebrow: "Performance Engineering",
      heading: "Key Features of MAXIMUS.",
      description: "Everything you need to keep your fleet operational, packed into a single industrial enclosure.",
      cards: [
        {
          id: 'bf1',
          title: "Dual-Port Capability",
          description: "Charge two vehicles simultaneously. Intelligently manages power to prioritize the vehicle with lower SoC.",
          spanClass: 'md:col-span-2 lg:row-span-2',
          icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
        },
        {
          id: 'bf2',
          title: "Universal Chemistry",
          description: "Seamlessly switch between Lead-Acid, Lithium-Ion, and AGM batteries.",
          spanClass: 'md:col-span-1 lg:col-span-2',
          icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" /></svg>
        },
        {
          id: 'bf3',
          title: "Cumulus Ready",
          description: "Native cloud telemetry for real-time fleet management.",
          spanClass: 'md:col-span-1 lg:col-span-2',
          icon: <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="2" fill="currentColor" /><path d="M4 12a8 8 0 0 1 8-8M12 20a8 8 0 0 0 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" /></svg>
        }
      ]
    },
    specs: {
      eyebrow: "Technical Specifications",
      heading: "MAXIMUS Details",
      description: "Comprehensive specs for planning your electrical infrastructure.",
      column1Label: "Specification",
      column2Label: "Value",
      specs: [
        { id: 's1', capability: "Input Voltage", value: "Universal 208-480 VAC, 3-Phase" },
        { id: 's2', capability: "Output Power", value: "Up to 30 kW (Dual Port combined)" },
        { id: 's3', capability: "Battery Voltages", value: "24V, 36V, 48V, 80V (Auto-detecting)" },
        { id: 's4', capability: "Enclosure Rating", value: "NEMA 1 (Indoor Rated)" },
        { id: 's5', capability: "Connectivity", value: "Wi-Fi, Cellular, Ethernet" }
      ]
    },
    comparison: {
      eyebrow: "Compare Models",
      heading: "Find the right charger for your fleet.",
      description: "Compare MAXIMUS with our other flagship products to ensure you get the perfect fit.",
      columns: [
        { id: 'c1', name: "MOMENTUS" },
        { id: 'c2', name: "MAXIMUS", highlight: true },
        { id: 'c3', name: "ALTUS II" }
      ],
      rows: [
        { id: 'r1', feature: "Max Power Output", values: ["15 kW", "30 kW", "30 kW"] },
        { id: 'r2', feature: "Dual-Port Capable", values: [false, true, true] },
        { id: 'r3', feature: "Environment", values: ["Indoor", "Indoor", "Outdoor (NEMA 3R)"] },
        { id: 'r4', feature: "Cumulus", values: [true, true, true] },
        { id: 'r5', feature: "Best For", values: ["Standard Warehouse", "High-Throughput 3PL", "Airport GSE"] }
      ]
    },
    faq: {
      heading: "Common Questions",
      description: "Details about MAXIMUS installation and usage.",
      faqs: [
        {
          id: 'q1',
          question: "Can the MAXIMUS be installed outdoors?",
          answer: "No, the MAXIMUS is specifically designed for indoor environments. If you need an outdoor charging solution, we recommend looking at our ALTUS II model."
        },
        {
          id: 'q2',
          question: "How does the dual-port feature work?",
          answer: "The charger can intelligently split its 30 kW output between two connected vehicles, allowing both to charge simultaneously. It automatically routes more power to the vehicle with the lower state of charge."
        }
      ]
    }
  }
};
