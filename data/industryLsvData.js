import React from 'react';

export const industryLsvData = {
  heroBanner: {
    eyebrow: 'Low Speed Vehicles',
    heading: 'Your fleet keeps growing.',
    headingHighlight: 'Your charging plan should too.',
    description: "Golf carts, campus shuttles, and utility vehicles don't need a bank of dedicated charging stations — they need a charger that travels with them. Durus is an onboard charger built into the vehicle itself, so every outlet becomes a charging bay.",
    primaryCta: { text: "Get Your Free Fleet Assessment", href: "#assessment" },
    secondaryCta: { text: "Download the Grant Eligibility Guide", href: "#guide" },
    tagsLabel: "Powers fleets of",
    tags: ["Golf carts", "Campus shuttles", "Utility vehicles", "Security carts", "Municipal fleets", "AGVs"],
    videoSrc: "/assets/lsv/lsv-fleet-hero.mp4",
    posterSrc: "/assets/lsv/lsv-hero-poster.svg",
    bgImage: "/assets/Industries/Low-Speed-Vehicles/Banner/Banner -Low-Speed-Vehicles-Page.webp",
    formTitle: "Get a charging plan for your fleet",
    formSubtitle: "One call. We'll size onboard charging to your fleet mix and growth plan."
  },
  shortAnswer: {
    eyebrow: "In short",
    heading: "What is a low speed vehicle (LSV) charger?",
    description: "A low speed vehicle (LSV) charger powers small electric vehicles such as golf carts, campus shuttles, security carts, and municipal utility vehicles. Unlike a pedestal or wall charger, Minit Charger's Durus is an onboard charger installed on the vehicle itself — it plugs into any compatible standard outlet and supports lead-acid, lithium, and EV battery chemistries, so fleets don't need to build dedicated charging infrastructure at every parking or storage location."
  },
  painPoints: {
    eyebrow: "The cost of outgrowing your charging plan",
    heading: "LSV fleets grow faster than charging infrastructure keeps up.",
    description: "A resort, campus, or municipal fleet rarely stays the same size two seasons in a row — and a charging plan built for last year's fleet becomes this year's bottleneck.",
    cards: [
      {
        id: 'pp1',
        tag: 'Pain point',
        title: 'Fleet growth outpaces charging infrastructure',
        description: 'A property adds five more carts for the season, and suddenly there aren\'t enough charging bays, outlets, or staff hours to keep every vehicle topped off overnight.',
        fixTag: 'Minit response',
        fix: 'Durus\'s onboard charger travels with the vehicle — plug into any compatible outlet at any bay, cart barn, or maintenance closet. No dedicated charging station buildout per new vehicle.'
      },
      {
        id: 'pp2',
        tag: 'Pain point',
        title: 'Mixed-brand fleets, mismatched chargers',
        description: 'A fleet built up over years ends up with carts and utility vehicles from different manufacturers side by side — each with a different charger, a different plug, a different failure mode.',
        fixTag: 'Minit response',
        fix: 'Durus supports lead-acid, lithium, and EV chemistries with SB350, Euro, or open-lead connector options, so it standardizes charging across a genuinely mixed fleet.'
      },
      {
        id: 'pp3',
        tag: 'Pain point',
        title: 'No visibility until a vehicle dies mid-shift',
        description: 'A cart that won\'t hold a charge doesn\'t announce itself until a guest is stranded on the back nine or a groundskeeper is stuck at the far end of the property.',
        fixTag: 'Minit response',
        fix: 'Durus\'s built-in battery management and CellTrac integration track battery health and charge status in real time, flagging a failing pack before it strands a vehicle.'
      },
      {
        id: 'pp4',
        tag: 'Pain point',
        title: 'Outdoor duty cycles most chargers weren\'t built for',
        description: 'Golf carts and utility vehicles live outside through heat, rain, and an off-season of sitting idle — conditions that shorten the life of a charger built for a warehouse floor.',
        fixTag: 'Minit response',
        fix: 'Durus is rated from -25°C to 60°C and installs indoors or outdoors, holding up to the same duty cycle as the vehicle it\'s mounted on.'
      }
    ]
  },
  causalChain: {
    eyebrow: 'What a missed charge actually costs',
    heading: 'Told in stranded vehicles, not kilowatts.',
    steps: [
      { id: 'c1', label: '01 — Charger', value: 'Charge missed' },
      { id: 'c2', label: '02 — Vehicle', value: 'Cart grounded' },
      { id: 'c3', label: '03 — Fleet', value: 'Runs short' }
    ],
    footerText: "Every link in that chain starts with a charger that isn't where the vehicle is. See what it's worth to break the chain — use the fleet downtime calculator below."
  },
  valueProp: {
    eyebrow: "Why Minit",
    heading: "One charger design, wherever the vehicle goes.",
    description: "Whether it's a golf fleet at a resort, a shuttle fleet on a campus, or a utility fleet across a municipal property, Durus travels with the vehicle instead of asking the property to build charging infrastructure around it. Built for today's fleet. Designed for what's next.",
    chips: [
      { id: 'vp1', label: 'Onboard — travels with the vehicle', icon: 'bolt' },
      { id: 'vp2', label: 'Lead acid, lithium & EV support', icon: 'battery' },
      { id: 'vp3', label: 'Built-in battery management', icon: 'shield' },
      { id: 'vp4', label: 'Cloud-connected via AssetPro 360', icon: 'radio' }
    ]
  },
  onboardAdvantage: {
    eyebrow: "The infrastructure objection, solved",
    heading: "Stop building charging stations. Start plugging in.",
    description: "A pedestal or wall charger is a fixed destination — the vehicle has to find its way back to one spot, and every new vehicle may mean another station to install and wire. Durus flips that: the charger is part of the vehicle, so any compatible standard outlet becomes a valid charging bay, wherever the cart happens to be parked.",
    chips: [
      "No dedicated charging station required per vehicle",
      "Charge at any compatible outlet — bay, barn, or maintenance closet",
      "Fleet grows without a parallel infrastructure project"
    ],
    cta: { text: "Ask About Fleet Growth Planning", href: "#assessment" }
  },
  venueGrid: {
    eyebrow: "Where Durus powers fleets",
    heading: "Built for the properties that run on low speed vehicles.",
    cards: [
      {
        id: 'v1',
        title: 'Golf & Resort',
        description: 'Guest and grounds fleets that can\'t afford a cart stranded mid-round.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M5 21V4M5 4h13l-3 4 3 4H5" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'v2',
        title: 'Campus & University',
        description: 'Shuttle and maintenance fleets running on a fixed daily schedule.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="m2 9 10-5 10 5-10 5-10-5Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M6 12v5c0 1.5 3 3 6 3s6-1.5 6-3v-5" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'v3',
        title: 'Municipal & Utility',
        description: 'Public-works and security fleets spread across a large property.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M4 21V6l8-3 8 3v15M4 21h16M9 21v-6h6v6" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'v4',
        title: 'Airport Landside',
        description: 'Terminal and campus movement, distinct from airside GSE.',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-6 h-6">
            <path d="M2 16l20-6-3 7-6 1-3 4-2-5-6-1Z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round" />
          </svg>
        )
      }
    ]
  },
  productBlurbs: {
    eyebrow: "Built for this fleet",
    heading: "The three products behind every LSV deployment.",
    description: "The charger, the battery intelligence, and the fleet dashboard — three pieces, one connected system.",
    cards: [
      {
        id: 'pb1',
        eyebrow: 'Onboard charger',
        title: 'Durus',
        description: 'An onboard AC/DC charger with integrated battery management, built into golf carts, utility vehicles, AGVs, and other small electric equipment — so the charger goes wherever the vehicle goes.',
        specLine: '2.2–3.3 kW · Lead Acid / Lithium / EV',
        href: '/products/durus/',
        imageSrc: '/assets/Home Page/Low Speed Vehicles/Compact - Built-in BMS Durus-01.webp',
        imageAlt: 'Low speed utility cart representative of the vehicles Durus is installed on'
      },
      {
        id: 'pb2',
        eyebrow: 'Battery intelligence',
        title: 'CellTrac',
        description: 'Wireless battery health monitoring and GPS asset tracking on every vehicle, so a fleet manager knows which cart is degrading before it strands a guest or grounds a shift.',
        specLine: 'Battery health · GPS tracking',
        href: '/products/celltrac/',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
            <rect x="6" y="6" width="12" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M9 3v3M15 3v3M9 18v3M15 18v3M3 9h3M3 15h3M18 9h3M18 15h3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
          </svg>
        )
      },
      {
        id: 'pb3',
        eyebrow: 'Fleet dashboard',
        title: 'AssetPro 360',
        description: 'One cloud dashboard for every vehicle\'s charge status, battery health, and location — real-time visibility across the whole property, not a walk through the cart barn.',
        specLine: 'Real-time data · Predictive alerts',
        href: '/products/assetpro-360/',
        icon: (
          <svg viewBox="0 0 24 24" fill="none" className="w-14 h-14">
            <rect x="3" y="4" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.7" />
            <path d="M8 20h8M12 16v4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" />
          </svg>
        )
      }
    ]
  },
  techSpecs: {
    eyebrow: "Specifications",
    heading: "Durus, in full.",
    footerNote: "Standard outlet input (90–264 VAC) means Durus charges from ordinary single-phase power — no dedicated 3-phase electrical service required.",
    rows: [
      { label: "Charging Type", value: "Onboard AC/DC" },
      { label: "Power Output", value: "2.2–3.3 kW" },
      { label: "Input Voltage", value: "90–264 VAC, single-phase" },
      { label: "Output Voltage", value: "24–80 VDC" },
      { label: "Port Configuration", value: "Single Port" },
      { label: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
      { label: "Connector Options", value: "SB350, Euro, Open Leads" },
      { label: "Max Efficiency", value: "Up to 94%" },
      { label: "Operating Temperature", value: "-25°C to 60°C" },
      { label: "Regulatory Compliance", value: "UL 1564" },
      { label: "Installation", value: "Onboard vehicle, indoor or outdoor" },
      { label: "Fleet Integration", value: "CellTrac (built-in BMS), AssetPro 360 / Cumulus" }
    ]
  },
  processSteps: {
    eyebrow: "From first call to fully installed",
    heading: "What working with Minit Charger looks like.",
    steps: [
      { id: 'ps1', num: '01', title: 'Fleet assessment call', description: 'Walk through your vehicle mix, property layout, and growth plans with an engineer.' },
      { id: 'ps2', num: '02', title: 'Chemistry & connector plan', description: 'Confirm battery types and connector options across a mixed-brand fleet.' },
      { id: 'ps3', num: '03', title: 'Install & commission', description: 'Onboard install per vehicle — no separate charging station buildout.' },
      { id: 'ps4', num: '04', title: 'Monitor & support', description: 'CellTrac and AssetPro 360 live from day one, with fleet-wide alerts backing up your team.' }
    ]
  },
  leadMagnet: {
    eyebrow: "Free download",
    heading: "The LSV Fleet Electrification Grant Eligibility Guide",
    description: "Many golf, resort, campus, and municipal electrification projects qualify for state or local clean-fleet incentives. This guide walks through what to check before you budget your next fleet expansion. [Client to confirm final guide content and current grant program references before this goes live.]",
    checkmarks: [
      "Common grant and incentive categories for LSV fleets",
      "What documentation a charging assessment can provide",
      "A checklist for your first site survey call"
    ],
    cta: { text: "Send Me the Guide" }
  },
  roiCalculator: {
    eyebrow: "Put a number on stranded vehicles",
    heading: "What is charging downtime actually costing your fleet?",
    description: "Move the sliders to match your property. This is your estimate, built from your numbers — not ours."
  },
  faq: {
    eyebrow: "FAQ",
    heading: "Common questions",
    questions: [
      {
        id: 'fq1',
        question: 'What types of low-speed vehicles are compatible with Minit Charger?',
        answer: 'Durus is built for golf carts, utility vehicles, AGVs, and other small electric equipment, supporting lead-acid, lithium, and EV battery chemistries so it can charge a mixed-brand LSV fleet.'
      },
      {
        id: 'fq2',
        question: 'Can Minit Charger be used in outdoor environments?',
        answer: 'Yes. Durus is rated from -25°C to 60°C and supports both indoor and outdoor installation, matching the duty cycle of golf carts and utility vehicles that live outside.'
      },
      {
        id: 'fq3',
        question: 'How does cloud connectivity enhance my operations?',
        answer: 'Durus connects to AssetPro 360 / Cumulus for remote monitoring, charge history, and predictive maintenance alerts, and integrates with CellTrac for battery health and asset tracking, so a fleet manager can see every vehicle\'s charge status from one dashboard instead of walking the cart barn.'
      },
      {
        id: 'fq4',
        question: 'What is a low-speed vehicle (LSV) charger?',
        answer: 'An LSV charger powers small electric vehicles such as golf carts, campus shuttles, and municipal utility carts. Unlike a pedestal or wall charger, Durus is an onboard charger installed on the vehicle itself, so it travels with the vehicle rather than requiring a dedicated charging station.'
      },
      {
        id: 'fq5',
        question: 'What\'s the difference between onboard and offboard charging?',
        answer: 'An offboard or pedestal charger is a fixed station the vehicle must return to. An onboard charger like Durus is built into the vehicle itself and plugs into any compatible standard outlet, so charging infrastructure doesn\'t need to be built out at every parking or storage location.'
      },
      {
        id: 'fq6',
        question: 'Does Durus support lithium and lead-acid batteries?',
        answer: 'Yes. Durus supports lead-acid, lithium, and EV battery chemistries with SB350, Euro, or open-lead connector options, so a fleet with mixed battery types or brands can standardize on one charger.'
      },
      {
        id: 'fq7',
        question: 'What venues use Minit Charger for LSV fleets?',
        answer: 'Golf courses and resorts, university and corporate campuses, municipal and utility fleets, and airport landside operations commonly use Minit Charger\'s onboard LSV charging for golf carts and utility vehicles.'
      }
    ]
  },
  ctaBanner: {
    heading: 'Your fleet keeps growing. Your charging plan should too.',
    description: 'Get an onboard charging strategy scoped to your exact property footprint and fleet mix.',
    primaryCta: { text: 'Get Your Free Assessment', href: '#contact' }
  },
  contactForm: {
    heading: 'Talk to an engineer',
    description: 'One call to size your onboard chargers and scope your power constraints.'
  },
  relatedProducts: {
    eyebrow: "Related products",
    heading: "Build your LSV charging ecosystem.",
    products: [
      {
        id: "durus",
        title: "Durus",
        description: "Compact onboard charger ideal for low-speed vehicles.",
        bgImage: "/assets/Industries/Low-Speed-Vehicles/Banner/Banner -Low-Speed-Vehicles Page.webp",
        imageAlt: "Durus charger",
        href: "/product/durus"
      },
      {
        id: "celltrac",
        title: "CellTrac",
        description: "Battery asset tracking and BMS telemetry.",
        imageSrc: "/new_images/celltrac_dash.webp",
        imageAlt: "CellTrac dashboard",
        href: "/product/celltrac"
      },
      {
        id: "assetpro",
        title: "AssetPro 360",
        description: "Fleet management and analytics dashboard.",
        imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
        imageAlt: "AssetPro 360 dashboard",
        href: "/product/assetpro-360"
      }
    ]
  }
};
