import React from 'react';

export const industryAviationData = {
  hero: {
    heading: (
      <>
        Your ramp doesn&apos;t stop for a dead charger. <span className="text-volt">Neither should you.</span>
      </>
    ),
    description: "A gate delay caused by a charger — not a plane — is still a gate delay. Minit Charger builds outdoor-rated, dual-port fast chargers engineered for the pace of airside operations, so your ground crew isn't the reason for a slow turn.",
    imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
    imageAlt: "Aviation eGSE Charging",
    bgImage: "/assets/Industries/Aviation/Banner/Banner-Aviation page.webp",
    imageDescription: "Tug silhouette parked next to a Minit Charger Altus II pedestal on an airport tarmac.",
    primaryCta: { text: "Get Your Free Charging Assessment", href: "#assessment" },
    secondaryCta: { text: "Download the Airport Ops Guide", href: "#guide" }
  },
  quickAnswer: {
    eyebrow: "In short",
    heading: "What is an electric GSE fast charger?",
    description: "An electric GSE (ground support equipment) fast charger is a DC charging system built to power airside vehicles — baggage tractors, belt loaders, tow tractors, and pushback tugs — faster than standard AC charging, while withstanding outdoor ramp conditions. Minit Charger's Altus II is a dual-port, outdoor-rated (IP65) fast charger purpose-built for this environment, supporting lead-acid, lithium, and EV battery chemistries from a single unit."
  },
  painPoints: {
    eyebrow: "The attrition of the 20-minute turn",
    heading: "Airside charging doesn't fail quietly.",
    description: "A pushback tug that won't hold a charge doesn't just sit in the yard. It sits at the gate, next to an aircraft that's ready to leave and can't.",
    cards: [
      {
        id: "p1",
        title: "Charger downtime becomes gate delay",
        description: "Most GSE chargers were built for warehouse floors, then bolted onto a ramp. When one goes down mid-shift, the fix is a maintenance ticket — while your tug sits dead 200 feet from an aircraft that's ready to push.",
        fix: "Altus II is outdoor-rated (IP65) from day one, with remote diagnostics that flag a fault before your ground crew finds it the hard way.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      },
      {
        id: "p2",
        title: "Electrical upgrades hold projects hostage",
        description: "Every new charger installation runs into the same wall: the airport's existing power feed wasn't sized for a fleet of fast chargers, and infrastructure upgrades can take a construction season you don't have.",
        fix: "Bridge Power Manager (BPM) intelligently shares power across chargers on a single feed, so you can add chargers without waiting on a utility upgrade.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "p3",
        title: "Mixed battery chemistries, one charger that can't keep up",
        description: "Lead-acid tugs, a lithium belt loader pilot, a battery vendor change halfway through a fleet refresh — most chargers force you to standardize equipment before they'll support it.",
        fix: "Altus II charges lead-acid, lithium, and EV chemistries from the same dual-port unit, so procurement isn't boxed in by the charger.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "p4",
        title: "No visibility until a vehicle strands mid-shift",
        description: "By the time someone notices a battery is failing, it's already stranded a tug on the tarmac — and pulled a tech off another job to go retrieve it.",
        fix: "CellTrac and AssetPro 360 track battery health and location in real time, flagging a failing battery before it fails your operation.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.4" /><path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" strokeLinecap="round" /></svg>
      }
    ]
  },
  causalChain: {
    eyebrow: "What a delay actually costs",
    heading: "Told in gate minutes, not kilowatts.",
    steps: [
      { id: "c1", title: "01 — Charger", description: "Charger down" },
      { id: "c2", title: "02 — Vehicle", description: "Tug down" },
      { id: "c3", title: "03 — Ops", description: "Turn delayed" }
    ]
  },
  valueProp: {
    eyebrow: "Why Minit",
    heading: "The only charger engineered for airport turnaround pressure.",
    description: "Most industrial chargers are built for warehouses and retrofitted for airports. The Altus II is designed from the ground up for high-cycle, outdoor, multi-shift GSE operations — where a charger failure doesn't just cost money, it delays flights.",
    features: [
      "Dual-port fast charging",
      "Outdoor-rated IP65",
      "Remote diagnostics",
      "Compatible with all major GSE types"
    ],
    imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
    imageAlt: "Altus II Charger",
    imageDescription: "Minit Charger Altus II, IP65 dual port fast charger for airport GSE",
    primaryCta: { text: "See Altus II Specs", href: "/products/altus-ii" }
  },
  bpmCallout: {
    eyebrow: "The infrastructure objection, solved",
    heading: "Add chargers without adding a utility project.",
    description: "The biggest reason airport charging rollouts stall isn't the charger — it's the electrical infrastructure underneath it. Ramp power feeds are rarely sized for a full fleet of fast chargers on day one. Bridge Power Manager (BPM) intelligently allocates power across every charger on a shared feed in real time, so you can scale your fleet without a construction season and a utility application standing in the way.",
    features: [
      "No infrastructure upgrade required in many installations",
      "Real-time power allocation across every charger on the feed",
      "Add chargers in phases as your fleet electrifies"
    ],
    imageSrc: "/new_images/industry_airport_1786134268548.webp",
    imageAlt: "BPM Power Sharing",
    imageDescription: "Bridge Power Manager intelligently balancing load between three airport chargers."
  },
  fleetIntelligence: {
    eyebrow: "Beyond the charger",
    heading: "Know your fleet before it fails you.",
    description: "",
    cards: [
      {
        id: "f1",
        title: "CellTrac wireless BMS",
        description: "Know exactly which batteries in your fleet are failing before they strand a vehicle. AssetPro 360 tells you before your driver finds out.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.4" /><path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" strokeLinecap="round" /></svg>
      },
      {
        id: "f2",
        title: "AssetPro 360 / Cumulus",
        description: "One screen for every charger and every vehicle on the ramp — not a spreadsheet someone updates after a tug already broke down.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" /></svg>
      }
    ],
    features: [
      "Real-time battery health",
      "GPS / asset location on every unit",
      "Predictive maintenance alerts",
      "One dashboard across every charger"
    ]
  },
  rampVsHangar: {
    eyebrow: "Every environment on your airfield",
    heading: "Ramp power and hangar power aren't the same problem.",
    leftTitle: "On the ramp",
    leftItems: [
      "Outdoor-rated IP65 enclosure built for weather and vibration",
      "Pedestal mount, positioned where the vehicle actually parks",
      "Remote diagnostics matter most — crews aren't standing next to it",
      "BPM power sharing across every ramp charger on a shared feed"
    ],
    rightTitle: "In the hangar / maintenance bay",
    rightItems: [
      "Wall or pedestal mount, compact indoor footprint",
      "Single-port opportunity charging between maintenance windows",
      "Same fleet dashboard as your outdoor chargers",
      "Off-peak / scheduled charging to manage facility load"
    ]
  },
  growthPath: {
    eyebrow: "Built for what's next",
    heading: "One ecosystem from ground support to electric ramp vehicles.",
    description: "",
    cards: [
      {
        id: "g1",
        title: "Magnus",
        specLine: "100–200 kW · 24–1000 VDC · GSE + CCS/NACS EV connectors",
        description: "When your fleet adds electric shuttle buses or passenger EVs alongside your GSE, you don't need a second charging system. Magnus covers both from one platform — one charging ecosystem from GSE to EV.",
        imageSrc: "/product-images/Magnus/MAGNUS.15.webp",
        imageAlt: "Magnus",
        imageDescription: "Magnus EV charging station",
        href: "/products/magnus"
      },
      {
        id: "g2",
        title: "Mobilus",
        specLine: "Mobile DC fast charging · trailer / skid platform · outdoor rated",
        description: "A de-icing pad two runways over, a temporary gate during construction, a charger that needs to move before the infrastructure can catch up — Mobilus brings fast charging to wherever the ramp actually needs it.",
        imageSrc: "/product-images/Mobilus/MOBILUS.30.webp",
        imageAlt: "Mobilus",
        imageDescription: "Mobilus mobile charging station",
        href: "/products/mobilus"
      }
    ]
  },
  testimonials: {
    eyebrow: "From the ramp",
    heading: "What fleets running on Minit Charger say.",
    testimonials: [
      {
        id: "t1",
        quote: "Quote from an airport GSE fleet manager or ground-handler ops director goes here.",
        authorName: "Name",
        authorRole: "Title — Organization"
      },
      {
        id: "t2",
        quote: "Quote highlighting reduced downtime or turnaround reliability goes here.",
        authorName: "Name",
        authorRole: "Title — Organization"
      },
      {
        id: "t3",
        quote: "Quote highlighting fleet visibility / CellTrac / AssetPro 360 goes here.",
        authorName: "Name",
        authorRole: "Title — Organization"
      }
    ],
    badges: [
      "UL / CE compliance options",
      "Airport systems / SCADA integration",
      "Multi-chemistry certified"
    ]
  },
  faq: {
    heading: "Frequently Asked Questions",
    description: "",
    items: [
      {
        id: "q1",
        question: "What is an eGSE fast charger?",
        answer: "An eGSE (electric ground support equipment) fast charger is a DC charging system built to power airside equipment like baggage tractors, belt loaders, tow tractors, and pushback tugs faster than standard AC charging, while withstanding outdoor ramp conditions."
      },
      {
        id: "q2",
        question: "How fast can an eGSE charger like the Altus II charge airport ground support equipment?",
        answer: "Altus II delivers 30–80 kW of DC fast charging across two ports simultaneously. Actual charge time depends on the battery chemistry, pack size, and state of charge of the vehicle being charged — a charging assessment maps this to your specific fleet."
      },
      {
        id: "q3",
        question: "Do airport GSE chargers need to be rated for outdoor installation?",
        answer: "Yes. Ramp-based chargers are exposed to rain, heat, cold, and constant vibration from nearby aircraft and vehicle traffic. Altus II carries an outdoor-rated IP65 enclosure, built for ramp duty rather than adapted from an indoor warehouse design."
      },
      {
        id: "q4",
        question: "Can one charger support both lead-acid and lithium GSE batteries?",
        answer: "Yes. Altus II supports lead-acid, lithium, and EV battery chemistries from the same dual-port unit, so a mixed fleet or a mid-refresh chemistry change doesn't require a different charger."
      },
      {
        id: "q5",
        question: "What is Bridge Power Manager (BPM) and how does it help airport projects?",
        answer: "BPM is Minit Charger's intelligent power-sharing system. It allocates available power across every charger on a shared electrical feed in real time, which can let airports add charging stations without a separate utility infrastructure upgrade — a common reason GSE electrification projects stall."
      }
    ]
  },
  cta: {
    heading: "Ready to stop losing gate time to a charger?",
    description: "Talk to an engineer about your fleet, your ramp power, and whether BPM can get you charging without an infrastructure upgrade.",
    buttons: [
      { id: "b1", text: "Request a Quote", href: "#assessment", variant: "primary" },
      { id: "b2", text: "Download the Airport Ops Guide", href: "#guide", variant: "outline" }
    ]
  },
  specs: {
    eyebrow: "Specifications",
    heading: "Industrial eGSE charger specs buyers search for.",
    items: [
      { label: "Power Output", value: "30–80 kW*" },
      { label: "Input Voltage", value: "208–480 VAC, 3-phase" },
      { label: "Output Voltage", value: "24–1000 VDC*" },
      { label: "Port Configuration", value: "Dual Port" },
      { label: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
      { label: "Connector Options", value: "Anderson, Euro, REMA" },
      { label: "Max Efficiency", value: "Up to 95%" },
      { label: "Operating Environment", value: "Outdoor rated (IP65)" },
      { label: "Regulatory Compliance", value: "UL / CE options" },
      { label: "Mounting", value: "Pedestal" },
      { label: "Connectivity", value: "Cellular (4G/LTE), Wi-Fi, Ethernet, OTA updates" },
      { label: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" }
    ],
    footer: "*Output range reflects platform capability — configuration is confirmed for your fleet during the site survey."
  },
  process: {
    eyebrow: "From first call to fully installed",
    heading: "What working with Minit Charger looks like.",
    steps: [
      { id: "pr1", number: "01", title: "Charging assessment call", description: "Walk through your fleet mix, ramp layout, and existing power feed with an engineer." },
      { id: "pr2", number: "02", title: "Site survey & power plan", description: "Including whether BPM lets you skip an infrastructure upgrade entirely." },
      { id: "pr3", number: "03", title: "Install & commission", description: "Pedestal or wall, indoor or outdoor — scheduled around your operations, not around ours." },
      { id: "pr4", number: "04", title: "Monitor & support", description: "CellTrac and AssetPro 360 live from day one, with remote diagnostics backing up your team." }
    ]
  },
  leadMagnet: {
    eyebrow: "Free download",
    heading: "The Airport GSE Charging Guide",
    description: "What ops directors need to know before their next fleet electrification project — sizing a charger fleet, reading a power feed, and the infrastructure question every airport asks before signing off.",
    features: [
      "How to size a charger fleet to your GSE mix",
      "What BPM does and does not eliminate",
      "A checklist for your first site survey call"
    ]
  },
  calculator: {
    eyebrow: "Put a number on downtime",
    heading: "What is charger downtime actually costing your ramp?",
    description: "Move the sliders to match your operation. This is your estimate, built from your numbers — not ours."
  },
  resources: {
    eyebrow: "Recommended resources",
    heading: "Go deeper before your assessment call.",
    guides: [
      { id: "r1", title: "The Airport GSE Charging Guide", description: "Sizing, power feeds, and the infrastructure question every airport asks.", ctaText: "Read Guide", ctaHref: "#guide" },
      { id: "r2", title: "GSE Downtime & ROI Calculator", description: "See what charger downtime is costing your ramp today.", ctaText: "Use Tool", ctaHref: "#calculator" },
      { id: "r3", title: "Altus II Spec Sheet (PDF)", description: "Full technical specifications for procurement and engineering. [Client to confirm link.]", ctaText: "Download PDF", ctaHref: "/resources/altus-ii-spec-sheet/" }
    ],
    exploreHeading: "Explore other fleets we power",
    explorePills: [
      { id: "e1", label: "Warehouse & Manufacturing", href: "/industries/warehouse-manufacturing/" },
      { id: "e2", label: "Low Speed Vehicles", href: "/industries/low-speed-vehicles/" },
      { id: "e3", label: "Vehicle & Asset Tracking", href: "/industries/vehicle-asset-tracking/" }
    ]
  },
  leadMagnet: {
    eyebrow: "Free download",
    heading: "The Airport GSE Charging Guide",
    description: "What ops directors need to know before their next fleet electrification project — sizing a charger fleet, reading a power feed, and the infrastructure question every airport asks before signing off. [Client to confirm final guide content before this goes live.]",
    checklist: [
      "How to size a charger fleet to your GSE mix",
      "What BPM does and does not eliminate",
      "A checklist for your first site survey call"
    ]
  },
  specStory: {
    eyebrow: "Product deep-dive",
    heading: "Altus II, translated from engineering spec to ramp reality.",
    description: "Minit Charger's technical depth is a competitive advantage — if it's communicated in terms an ops director actually feels.",
    cards: [
      {
        id: "ss1",
        title: "Dual-port DC fast charging, 30–80 kW",
        description: "Two tugs charge at once, off the same pedestal — so your ground crew isn't rationing which vehicle gets power first during a bank push.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss2",
        title: "Outdoor-rated IP65 enclosure",
        description: "The Altus II runs in the rain, the cold, and the heat of a tarmac summer — because airport GSE doesn't get to take weather days.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss3",
        title: "Lead acid, lithium & EV chemistry support",
        description: "Your fleet doesn't have to match your charger. Standardize on whatever battery makes sense for each vehicle — the Altus II keeps up either way.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss4",
        title: "Remote diagnostics, cellular / Wi-Fi / OTA",
        description: "You find out about a fault from a dashboard alert — not a stranded tug and a call from the ramp.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.4" /><path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" strokeLinecap="round" /></svg>
      }
    ]
  },
  relatedProducts: {
    heading: "Build your ground support charging ecosystem.",
    products: [
      {
        id: "altus",
        title: "Altus II",
        description: "Outdoor-rated dual-port DC fast charger for GSE.",
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "Altus II charger",
        href: "/products/altus-ii"
      },
      {
        id: "magnus",
        title: "Magnus",
        description: "24–1000 VDC, one platform from GSE to high-voltage EV.",
        imageSrc: "/assets/magnus/magnus-iso1.webp",
        imageAlt: "Magnus universal mixed-fleet DC fast charger",
        href: "/products/magnus"
      },
      {
        id: "mobilus",
        title: "Mobilus",
        description: "Mobile DC fast charging on a trailer or skid platform.",
        imageSrc: "/assets/altus/altus-related-mobilus.webp",
        imageAlt: "Mobilus mobile DC fast charger",
        href: "/products/mobilus"
      },
      {
        id: "celltrac",
        title: "CellTrac",
        description: "Onboard BMS with GPS tracking and cloud connectivity.",
        imageSrc: "/new_images/celltrac_dash.webp",
        imageAlt: "CellTrac dashboard",
        href: "/products/celltrac"
      }
    ]
  }
};
