export const productMaximusData = {
  hero: {
    breadcrumbs: [
      {
        label: 'Home',
        href: '/'
      },
      {
        label: 'Products',
        href: '/products'
      },
      {
        label: 'Maximus',
        href: '/product/maximus'
      }
    ],
    imageSrc: '/assets/maximus/maximus-warehouse-dual-charge.webp',
    imageAlt: 'Maximus',
    imageDescription: 'Placeholder for Maximus banner',
    eyebrow: 'Dual-port DC fast charger for high-throughput MHE fleets',
    title: 'MAXIMUS',
    description: 'Two vehicles, one charger. Built for the pace of continuous multi-shift operations.',
    cta: {
      text: 'Request a Quote',
      href: '/contact'
    },
    datasheetCta: {
      text: 'Download Spec Sheet',
      href: '#'
    }
  },
  intro: {
    eyebrow: 'Product overview',
    heading: 'What is the Minit Charger Maximus?',
    description: 'Maximus is a dual-port 40kW DC fast charger — two independent 20kW ports — built for high-throughput material handling fleets in large warehouses and distribution centers. It charges two vehicles simultaneously from one unit, mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.',
    badges: [
      'Dual port',
      '40 kW',
      'AssetPro connected'
    ],
    stats: [
      {
        num: '40 kW',
        lbl: 'total output'
      },
      {
        num: '24–100',
        lbl: 'VDC range'
      },
      {
        num: 'Dual',
        lbl: 'Port config'
      },
      {
        num: '94%',
        lbl: 'Max efficiency'
      }
    ],
    gallery: [
      {
        src: '/assets/maximus/maximus-warehouse-dual-charge.webp',
        alt: 'Maximus charger'
      }
    ]
  },
  inShort: {
    eyebrow: 'In short',
    heading: 'What is the Minit Charger Maximus?',
    description: 'Maximus is a dual-port 40kW DC fast charger — two independent 20kW ports — built for high-throughput material handling fleets in large warehouses and distribution centers. It charges two vehicles simultaneously from one unit, mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.'
  },
  engineeringStrip: [
    {
      icon: 'bolt',
      value: '40 kW',
      label: 'total output'
    },
    {
      icon: 'bolt',
      value: '24–100',
      label: 'VDC range'
    },
    {
      icon: 'shield',
      value: 'Dual',
      label: 'Port config'
    },
    {
      icon: 'shield',
      value: '94%',
      label: 'Max efficiency'
    }
  ],
  painPoints: {
    eyebrow: 'Built for the pace of multi-shift',
    heading: 'Where a single-port charger becomes the bottleneck.',
    description: "A high-throughput floor doesn't get a break to catch up on charging. Here's where a single port stops being enough, and how Maximus is specified against it.",
    painPoints: [
      {
        id: 'p1',
        title: 'A single port becomes the queue',
        description: "When two vehicles need power at the same time and there's only one port, one of them waits — and in a multi-shift operation, waiting is the whole problem.",
        fix: "Maximus charges two vehicles at once from independent 20kW ports, so throughput doesn't stall behind a single charging queue."
      },
      {
        id: 'p2',
        title: 'Multi-shift fleets outrun single-port charging',
        description: "A 3-shift warehouse doesn't get downtime to catch up — equipment needs to be ready at the start of every shift, not just some of them.",
        fix: "Maximus's dual-port, 40kW total output is built for the pace of continuous multi-shift operations, not just a single-shift facility."
      },
      {
        id: 'p3',
        title: 'Higher throughput usually means a bigger cabinet',
        description: 'A traditional floor-standing charger capable of this much output usually claims more aisle space than a facility can spare.',
        fix: "Modern SiC power electronics keep Maximus compact enough to wall-mount even at 40kW, so higher throughput doesn't mean a bigger footprint."
      },
      {
        id: 'p4',
        title: 'Mixed battery chemistries across a growing fleet',
        description: 'Lead-acid forklifts, an AGM order picker, a lithium pilot — a high-throughput fleet is often the most chemistry-mixed fleet on the floor.',
        fix: 'Maximus charges lead-acid, lithium, EV, and AGM batteries from the same dual-port unit.'
      },
      {
        id: 'p5',
        title: 'No visibility into which port, which vehicle',
        description: 'With two vehicles charging from one unit, knowing which port is doing what — and which battery needs attention — gets harder to track by hand.',
        fix: 'The touchscreen shows live status for port A and port B independently, with CellTrac and AssetPro 360 tracking battery health per vehicle.'
      },
      {
        id: 'p6',
        title: 'Maintenance means downtime for the whole unit',
        description: 'A charger that has to be pulled offline entirely for routine maintenance takes both ports down at once — doubling the impact of a single service visit.',
        fix: 'Maximus opens from the front panel for filter changes and diagnostics, built to be serviced quickly on-site, on your schedule.'
      }
    ]
  },
  valueProp: {
    eyebrow: 'Why Maximus',
    heading: 'The top-end charger for demanding multi-shift floors.',
    description: 'Choose Maximus when a single-port charger is no longer enough. It delivers higher throughput than Momentus while maintaining a compact footprint — charging two vehicles at once without doubling the number of chargers across your facility.',
    features: [
      {
        icon: 'bolt',
        text: 'Dual 20kW ports, 40kW total'
      },
      {
        icon: 'shield',
        text: 'Wall or pedestal'
      },
      {
        icon: 'battery',
        text: 'Multi-chemistry'
      },
      {
        icon: 'cloud',
        text: 'AssetPro 360 connected'
      }
    ]
  },
  targetIndustries: {
    eyebrow: 'Who runs on Maximus',
    items: [
      'Large Warehouses',
      'Distribution Centers',
      'Manufacturing Facilities',
      'Material Handling Fleets',
      'High-Throughput Operations'
    ]
  },
  specStory: {
    eyebrow: 'Feature deep-dive',
    heading: 'Every spec, translated into what it means on the floor.',
    cards: [
      {
        title: 'Dual 20kW ports, 40kW total — Two vehicles, zero rationing',
        description: "Two forklifts charge at once, off the same pedestal — nobody's rationing power during a shift change."
      },
      {
        title: 'Wall or pedestal mount — Fits your floor plan either way',
        description: 'Mounts flush to a wall or stands on a pedestal — the same 40kW charger, whichever fits your facility.'
      },
      {
        title: 'Modern SiC power electronics — More throughput, less space',
        description: "Silicon Carbide power electronics deliver 40kW from a footprint a traditional floor-standing cabinet can't match."
      },
      {
        title: "Independent port status (A/B) — Know exactly what's charging",
        description: 'Each port reports its own status on the touchscreen — you know exactly which vehicle is charging and which is done.'
      },
      {
        title: 'Lead acid, lithium, EV & AGM support — Standardize on the charger, not the battery',
        description: 'Whatever chemistry makes sense per vehicle, Maximus keeps up — no fleet-wide battery mandate required.'
      },
      {
        title: '208–480 VAC universal input — Works across sites, not just one',
        description: "Switch between 208V and 480V service with minimal effort — the same charger works wherever the site's electrical service lands."
      }
    ]
  },
  demo: {
    eyebrow: 'DEMO — Front-panel access: control board and replaceable air filter',
    heading: 'Built to be opened, not replaced',
    description: 'Maximus opens from the front panel to expose the control board, power electronics, and a replaceable air filter — routine maintenance happens on-site, on your schedule, without shipping the unit out.',
    listItems: [
      {
        id: 'f1',
        text: 'Front-panel access to control board and power electronics'
      },
      {
        id: 'f2',
        text: 'Replaceable air filter — no specialized tools required'
      },
      {
        id: 'f3',
        text: 'On-screen and remote diagnostics before a technician even arrives'
      },
      {
        id: 'f4',
        text: 'Serviced on-site, on your schedule — not shipped back to a factory'
      }
    ],
    imageSrc: '/new_images/warehouse_bg.webp',
    imageAlt: 'Maximus Demo',
    imageDescription: 'Thumbnail of MAXIMUS video.',
    cta: {
      text: 'Ask About Service & Support',
      href: '/contact'
    }
  },
  outdoor: {
    eyebrow: "Serviced where it's installed",
    heading: 'indoors or out.',
    description: 'Maximus supports optional outdoor installation alongside its primary indoor use, and applies across GSE, MHE, and warehouse deployments in the Minit Charger portfolio — a filter swap takes minutes, not a shipping label.',
    listItems: [],
    imageSrc: '/new_images/industry_warehouse_1786134258340.webp',
    imageAlt: 'Maximus Outdoor',
    imageDescription: 'A MAXIMUS charger installed on a warehouse floor next to racking.',
    cta: {
      text: 'Ask About Service & Support',
      href: '/contact'
    }
  },
  comparison: {
    eyebrow: 'Why not just buy a traditional dual-vehicle charger',
    heading: 'Maximus vs. a typical 40kW-class charger',
    description: "Most dual-vehicle chargers in this power class are built around an older, bulkier cabinet design. Here's what that comparison looks like on published specifications.",
    columns: [
      {
        id: 'c1',
        name: 'Typical 40kW-class charger'
      },
      {
        id: 'c2',
        name: 'Maximus',
        highlight: true
      }
    ],
    rows: [
      {
        id: 'r1',
        feature: 'Power output',
        values: [
          '40 kW, dual port',
          '40 kW, dual port'
        ]
      },
      {
        id: 'r2',
        feature: 'Efficiency',
        values: [
          'Published around 90% for chargers in this class',
          'Up to 94%'
        ]
      },
      {
        id: 'r3',
        feature: 'Power electronics',
        values: [
          'Older IGBT-based technology',
          'Modern Silicon Carbide (SiC) power electronics'
        ]
      },
      {
        id: 'r4',
        feature: 'Mounting',
        values: [
          'Floor-standing only',
          'Wall or pedestal'
        ]
      },
      {
        id: 'r5',
        feature: 'Footprint & weight',
        values: [
          'Significantly larger, heavier enclosure',
          'Compact, lightweight enclosure*'
        ]
      }
    ]
  },
  specs: {
    eyebrow: 'Specifications',
    heading: 'Full technical specifications.',
    description: '[Client to confirm: a GB/T connector option is noted as pending in the product positioning brief but is not yet reflected in the internal spec matrix — add once confirmed shipping.]',
    column1Label: 'Specification',
    column2Label: 'Value',
    specs: [
      {
        id: 's1',
        capability: 'Charging Type',
        value: 'DC Fast'
      },
      {
        id: 's2',
        capability: 'Power Output',
        value: '40 kW (dual 20kW ports)'
      },
      {
        id: 's3',
        capability: 'Input Voltage',
        value: '208–480 VAC, 3-phase (switchable)'
      },
      {
        id: 's4',
        capability: 'Output Voltage',
        value: '24–100 VDC'
      },
      {
        id: 's5',
        capability: 'Port Configuration',
        value: 'Dual Port'
      },
      {
        id: 's6',
        capability: 'Battery Chemistry Support',
        value: 'Lead Acid, Lithium, EV, AGM'
      },
      {
        id: 's7',
        capability: 'Connector Options',
        value: 'SB350, Euro, REMA'
      },
      {
        id: 's8',
        capability: 'Max Efficiency',
        value: 'Up to 94%'
      },
      {
        id: 's9',
        capability: 'Operating Temperature',
        value: '-25°C to 50°C'
      },
      {
        id: 's10',
        capability: 'Regulatory Compliance',
        value: 'UL 1564'
      },
      {
        id: 's11',
        capability: 'Mounting',
        value: 'Wall or Pedestal'
      },
      {
        id: 's12',
        capability: 'Installation Environment',
        value: 'Indoor / Optional Outdoor'
      },
      {
        id: 's13',
        capability: 'Cable Management',
        value: 'Optional'
      },
      {
        id: 's14',
        capability: 'Connectivity',
        value: 'Cellular, Wi-Fi, OTA updates'
      },
      {
        id: 's15',
        capability: 'Fleet Integration',
        value: 'CellTrac, AssetPro 360 / Cumulus'
      },
      {
        id: 's16',
        capability: 'Off-Peak / Scheduled Charging',
        value: 'Yes'
      }
    ]
  },
  faq: {
    heading: 'Frequently asked questions',
    description: 'What buyers ask about Maximus.',
    faqs: [
      {
        id: 'q1',
        question: 'What is the Minit Charger Maximus?',
        answer: 'Maximus is a dual-port 40kW DC fast charger built for high-throughput material handling fleets in large warehouses and distribution centers, charging two vehicles simultaneously from one unit.'
      },
      {
        id: 'q2',
        question: 'How much power does Maximus deliver?',
        answer: 'Maximus delivers 40 kW total across two 20kW ports at up to 94% efficiency. Actual charge time depends on battery chemistry, pack size, and state of charge.'
      },
      {
        id: 'q3',
        question: 'Can Maximus charge two vehicles at once?',
        answer: 'Yes. Maximus has two independent charging ports, so two vehicles can charge simultaneously from the same unit, each with its own status shown on the touchscreen.'
      },
      {
        id: 'q4',
        question: 'How is Maximus different from Momentus?',
        answer: 'Momentus is a compact single-port 20kW charger for standard opportunity charging. Maximus adds a second 20kW port for 40kW total output, built for higher-utilization, multi-shift operations where a single-port charger becomes a bottleneck.'
      },
      {
        id: 'q5',
        question: 'What batteries does Maximus support?',
        answer: 'Maximus supports lead-acid, lithium, EV, and AGM battery chemistries from the same charger, with SB350, Euro, and REMA connector options.'
      },
      {
        id: 'q6',
        question: 'Can Maximus be installed outdoors?',
        answer: 'Maximus is primarily an indoor charger with an optional outdoor installation configuration, mounted to a wall or pedestal.'
      },
      {
        id: 'q7',
        question: 'How is Maximus serviced or maintained?',
        answer: 'Maximus opens from the front panel to expose the control board, power electronics, and a replaceable air filter, so routine maintenance happens on-site without shipping the unit out.'
      },
      {
        id: 'q8',
        question: 'Does Maximus integrate with AssetPro 360?',
        answer: 'Yes. Maximus connects to AssetPro 360 / Cumulus and CellTrac for remote monitoring, battery health, charge history and analytics, and predictive maintenance alerts.'
      }
    ]
  },
  finalCta: {
    heading: "See if Maximus fits your fleet's next five years.",
    description: 'Talk to an engineer about voltage range, connector mix, and whether one Maximus platform can replace what you were about to buy twice.',
    cta: {
      text: 'Request a Quote',
      href: '#assessment'
    },
    datasheetCta: {
      text: 'Download Spec Sheet',
      href: '#spec-sheet'
    },
    contact: 'MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]'
  },
  relatedProducts: {
    eyebrow: 'Related products',
    heading: 'Build the rest of your charging ecosystem.',
    products: [
      {
        id: 'momentus',
        title: 'Momentus',
        description: 'Compact single-port 20kW charger for standard opportunity charging.',
        imageSrc: '/assets/Products/Momentus/MOMENTUs Hardware Listing.webp',
        imageAlt: 'Momentus charger',
        href: '/product/momentus'
      },
      {
        id: 'magnus',
        title: 'Magnus',
        description: '24–1000 VDC, one platform from GSE to high-voltage EV.',
        imageSrc: '/assets/Products/Magnus/Magnus Hardware Listing.webp',
        imageAlt: 'Magnus charger',
        href: '/products/magnus'
      },
      {
        id: 'celltrac',
        title: 'CellTrac',
        description: 'Wireless battery health monitoring and GPS asset tracking.',
        imageSrc: '/new_images/celltrac_dash.webp',
        imageAlt: 'CellTrac dashboard',
        href: '/products/celltrac'
      },
      {
        id: 'assetpro360',
        title: 'AssetPro 360',
        description: 'Real-time analytics and predictive alerts across your fleet.',
        imageSrc: '/assets/Products/Cumulus/Cumulus Software Lisitng.webp',
        imageAlt: 'AssetPro 360',
        href: '/products/assetpro-360'
      }
    ]
  }
};
