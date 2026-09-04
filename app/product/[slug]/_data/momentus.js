export const productMomentusData = {
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
        label: 'Momentus',
        href: '/product/momentus'
      }
    ],
    imageAlt: 'Momentus',
    imageDescription: 'Placeholder for Momentus banner',
    eyebrow: 'Compact DC fast charger for material handling equipment',
    title: 'MOMENTUS',
    description: 'The everyday charger for a busy warehouse floor — fast, compact, and built to keep equipment moving.',
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
    heading: 'What is the Minit Charger Momentus?',
    description: 'Momentus is a compact, single-port 20 kW DC fast charger built for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses, distribution centers, and manufacturing facilities. It mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.',
    badges: [
      'Single port',
      '20 kW',
      'AssetPro connected'
    ],
    stats: [
      {
        num: '20 kW',
        lbl: 'output'
      },
      {
        num: '24–100',
        lbl: 'VDC range'
      },
      {
        num: 'Single',
        lbl: 'Port config'
      },
      {
        num: '94%',
        lbl: 'Max efficiency'
      }
    ],
    gallery: [
      {
        src: '/assets/Products/Momentus/MOMENTUs Hardware Listing.webp',
        alt: 'Momentus charger'
      }
    ]
  },
  inShort: {
    eyebrow: 'In short',
    heading: 'What is the Minit Charger Momentus?',
    description: 'Momentus is a compact, single-port 20 kW DC fast charger built for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses, distribution centers, and manufacturing facilities. It mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.'
  },
  engineeringStrip: [
    {
      icon: 'bolt',
      value: '20 kW',
      label: 'output'
    },
    {
      icon: 'bolt',
      value: '24–100',
      label: 'VDC range'
    },
    {
      icon: 'shield',
      value: 'Single',
      label: 'Port config'
    },
    {
      icon: 'shield',
      value: '94%',
      label: 'Max efficiency'
    }
  ],
  painPoints: {
    eyebrow: 'Built for the everyday floor',
    heading: 'Where a compact charger actually earns its keep.',
    description: "A busy warehouse doesn't need the highest-power charger on the market — it needs one that installs fast, fits the floor plan, and keeps equipment moving. Here's where that shows up.",
    painPoints: [
      {
        id: 'p1',
        title: 'Battery swapping eats labor hours every shift',
        description: "An operator pulled off the floor to swap a battery isn't picking, staging, or loading — and a spare-battery room adds its own labor and space overhead.",
        fix: 'Momentus delivers fast opportunity charging between shifts and breaks, so equipment returns to operation sooner instead of waiting on a full swap cycle.'
      },
      {
        id: 'p2',
        title: "Chargers eat floor space you'd rather use for racking",
        description: "A traditional floor-standing charger cabinet claims aisle space permanently, and doesn't move easily when the layout changes.",
        fix: 'Modern SiC power electronics keep Momentus compact enough to wall-mount, so charging fits the floor plan instead of dictating it.'
      },
      {
        id: 'p3',
        title: "Mixed battery chemistries, one charger that can't keep up",
        description: "Lead-acid forklifts, an AGM order picker, a lithium pilot program — most single-purpose chargers force a fleet to standardize before they'll support it.",
        fix: "Momentus charges lead-acid, lithium, EV, and AGM batteries from the same unit, so procurement isn't boxed in."
      },
      {
        id: 'p4',
        title: "Electrical service doesn't match the charger",
        description: "A facility running 208V service and another running 480V shouldn't need two different chargers just because the incoming voltage differs site to site.",
        fix: 'Momentus switches between 208 and 480 VAC input with minimal effort, so the same charger works across sites with different electrical service.'
      },
      {
        id: 'p5',
        title: 'No visibility into fleet uptime until a truck goes down',
        description: 'Without fleet-wide charge and battery-health data, the first sign of a problem is usually a forklift stalled mid-aisle.',
        fix: 'CellTrac and AssetPro 360 track battery health, charge history, and predictive maintenance alerts, flagging a failing battery before it strands equipment.'
      },
      {
        id: 'p6',
        title: 'Installation drags out the project timeline',
        description: 'A charger that needs a specialized crew or custom electrical work turns a simple equipment purchase into a multi-week installation project.',
        fix: 'Momentus installs to a wall or pedestal with a single AC input connection — built for quick, straightforward installation.'
      }
    ]
  },
  valueProp: {
    eyebrow: 'Why Momentus',
    heading: 'The everyday charger for a busy warehouse floor.',
    description: "Not every operation needs Magnus's high-voltage range or Maximus's dual-port throughput — most need a compact, reliable charger that installs fast and keeps material handling equipment moving. Momentus is Minit Charger's answer to that everyday reliability requirement.",
    features: [
      {
        icon: 'bolt',
        text: 'Single-port 20 kW'
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
    eyebrow: 'Who runs on Momentus',
    items: [
      'Warehouses',
      'Distribution Centers',
      'Manufacturing',
      'Forklift Fleets',
      'Industrial Facilities'
    ]
  },
  specStory: {
    eyebrow: 'Feature deep-dive',
    heading: 'Every spec, translated into what it means on the floor.',
    cards: [
      {
        title: 'Wall-mount installation — Off the floor entirely',
        description: "Mounts flush to a wall, taking up vertical space you weren't using anyway — no aisle footprint at all."
      },
      {
        title: 'Pedestal-mount installation — Or freestanding, wherever it fits',
        description: "Set it on a pedestal wherever a wall isn't an option — the same charger, a different footprint."
      },
      {
        title: 'Modern SiC power electronics — More capability, less space',
        description: "Silicon Carbide power electronics deliver charging capability from a footprint a traditional cabinet can't match."
      },
      {
        title: 'On-screen diagnostics — Status at a glance',
        description: "Port status and battery info shown right on the unit — a technician doesn't need a laptop to see what's going on."
      },
      {
        title: 'Lead acid, lithium, EV & AGM support — Standardize on the charger, not the battery',
        description: 'Whatever chemistry makes sense per vehicle, Momentus keeps up — no fleet-wide battery mandate required.'
      },
      {
        title: '208–480 VAC universal input — Works across sites, not just one',
        description: "Switch between 208V and 480V service with minimal effort — the same charger works wherever the site's electrical service lands."
      }
    ]
  },
  demo: {
    eyebrow: 'DEMO — Wall and pedestal installation, side by side',
    heading: 'See it in action',
    description: "Whether it's mounted to a wall to save floor space or set up on a pedestal for flexible placement, Momentus installs the same way every time: fast, straightforward, no specialized crew required.",
    listItems: [
      {
        id: 'f1',
        text: 'Wall or pedestal mount, same charger either way'
      },
      {
        id: 'f2',
        text: 'Single AC input connection — no custom electrical work'
      },
      {
        id: 'f3',
        text: 'Touchscreen commissioning, no laptop required'
      },
      {
        id: 'f4',
        text: 'Switches between 208V and 480V input with minimal effort'
      }
    ],
    imageSrc: '/new_images/warehouse_bg.webp',
    imageAlt: 'Momentus Demo',
    imageDescription: 'Thumbnail of Momentus.',
    cta: {
      text: 'Ask About Installation',
      href: '/contact'
    }
  },
  comparison: {
    eyebrow: 'Why not just buy a traditional charger cabinet',
    heading: 'Momentus vs. a typical single-purpose charger',
    description: "Most industrial chargers in this class are built around an older, bulkier cabinet design. Here's what that comparison looks like on published specifications.",
    columns: [
      {
        id: 'c1',
        name: 'Typical single-purpose charger'
      },
      {
        id: 'c2',
        name: 'Momentus',
        highlight: true
      }
    ],
    rows: [
      {
        id: 'r1',
        feature: 'Footprint / architecture',
        values: [
          'Large floor-standing cabinet',
          'Compact wall or pedestal enclosure'
        ]
      },
      {
        id: 'r2',
        feature: 'Power electronics',
        values: [
          'Older IGBT-based technology',
          'Modern Silicon Carbide (SiC) power electronics'
        ]
      },
      {
        id: 'r3',
        feature: 'Installation flexibility',
        values: [
          'Fixed floor-standing placement only',
          'Wall-mount or pedestal-mount, indoor or outdoor'
        ]
      }
    ]
  },
  specs: {
    eyebrow: 'Specifications',
    heading: 'Full technical specifications.',
    description: '[Client to confirm before publishing any named-competitor comparison.]',
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
        value: '20 kW'
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
        value: 'Single Port'
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
        value: 'Indoor or Outdoor'
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
    description: 'What buyers ask about Momentus.',
    faqs: [
      {
        id: 'q1',
        question: 'What is the Minit Charger Momentus?',
        answer: 'Momentus is a compact, single-port 20kW DC fast charger designed for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses and distribution centers.'
      },
      {
        id: 'q2',
        question: 'How much power does Momentus deliver?',
        answer: 'Momentus delivers 20 kW from a single port at up to 94% efficiency. Actual charge time depends on battery chemistry, pack size, and state of charge.'
      },
      {
        id: 'q3',
        question: 'Can Momentus be wall-mounted or does it need a pedestal?',
        answer: "Both are supported. Momentus installs to a wall to save floor space, or on a pedestal where a wall mount isn't an option — the same charger, two installation choices."
      },
      {
        id: 'q4',
        question: 'What batteries does Momentus support?',
        answer: 'Momentus supports lead-acid, lithium, EV, and AGM battery chemistries from the same charger, with SB350, Euro, and REMA connector options.'
      },
      {
        id: 'q5',
        question: 'Can Momentus run on both 208V and 480V power?',
        answer: 'Yes. Momentus accepts a universal 208–480 VAC, 3-phase input and switches between 208V and 480V service with minimal effort, so the same charger works across sites with different electrical service.'
      },
      {
        id: 'q6',
        question: 'How is Momentus different from Maximus?',
        answer: "Momentus is a compact single-port 20kW charger built for efficient opportunity charging where the higher power or dual-port throughput of Maximus isn't required. Maximus adds a second port and higher power output for higher-utilization, multi-shift operations."
      },
      {
        id: 'q7',
        question: 'Does Momentus integrate with AssetPro 360?',
        answer: 'Yes. Momentus connects to AssetPro 360 / Cumulus and CellTrac for remote monitoring, battery health, charge history and analytics, and predictive maintenance alerts.'
      },
      {
        id: 'q8',
        question: 'Is Momentus suitable for outdoor installation?',
        answer: "Yes, Momentus supports both indoor and outdoor installation, though it's most commonly deployed indoors in warehouses and distribution centers."
      }
    ]
  },
  finalCta: {
    heading: 'See if Momentus fits your floor.',
    description: 'Talk to an engineer about your equipment mix, electrical service, and installation timeline.',
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
        id: 'maximus',
        title: 'Maximus',
        description: 'Dual-port, higher-throughput charging for multi-shift operations.',
        imageSrc: '/new_images/industry_warehouse_1786134258340.webp',
        imageAlt: 'Maximus charger',
        href: '/product/maximus'
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
