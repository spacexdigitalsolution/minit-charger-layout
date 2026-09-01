import React from 'react';

export const industryWarehouseData = {
  hero: {
    eyebrow: "Warehouse & Manufacturing",
    heading: (
      <>
        Your fleet shouldn&apos;t run out of power before the shift does. <span className="text-amber">Neither should you.</span>
      </>
    ),
    description: "Every minute a forklift spends parked for a battery swap is a minute it isn't picking, staging, or loading. Minit Charger builds compact, multi-chemistry fast chargers built for multi-shift warehouse floors — so opportunity charging replaces the swap-and-wait routine.",
    imageSrc: "/assets/Home Page/industry_warehouse_1786134258340.webp", // placeholder path assuming assets-optimize output
    imageAlt: "Warehouse fleet charging",
    imageDescription: "A bustling warehouse interior showing rows of shelving and electric forklifts charging.",
    primaryCta: { text: "Get Your Free Charging Assessment", href: "#assessment" },
    secondaryCta: { text: "Download the Warehouse Fleet Guide", href: "#guide" },
    tagsLabel: "Engineered for",
    tags: [
      "Forklifts", "Pallet jacks", "Order pickers",
      "Reach trucks", "Tow tractors", "AGVs"
    ]
  },
  quickAnswer: {
    eyebrow: "In short",
    heading: "What is a fast charger for forklifts and material handling equipment?",
    description: "A material handling equipment (MHE) fast charger is a DC charging system built to power forklifts, pallet jacks, order pickers, reach trucks, and AGVs faster than standard AC charging, so equipment can top off during breaks and shift changes instead of requiring a full battery swap. Minit Charger's Momentus (20 kW, single port) and Maximus (40 kW, dual port) are compact, wall- or pedestal-mounted chargers built for exactly this — supporting lead-acid, lithium, EV, and AGM battery chemistries from the same platform."
  },
  painPoints: {
    eyebrow: "The cost of the battery-swap routine",
    heading: "Multi-shift floors don't have room for downtime that's optional.",
    description: "A forklift parked for a battery swap isn't broken — it's just not moving product. Multiply that across a fleet and three shifts, and the swap routine becomes its own hidden labor line.",
    cards: [
      {
        id: "p1",
        title: "Battery swapping eats labor hours every shift",
        description: "Driving to the battery room, waiting for the swap, logging the change — what feels like 15 minutes adds up to thousands of hours of lost productivity per year across a large fleet.",
        fix: "Momentus and Maximus deliver fast, opportunity-style charging between shifts and breaks, so a full swap program isn't the only way to keep a multi-shift fleet running.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>
      },
      {
        id: "p2",
        title: "Mixed equipment, mixed batteries, one charger that can't keep up",
        description: "Lead-acid forklifts, an AGM order picker, a lithium pilot on the newest reach trucks — most charging fleets end up with a different charger for every battery type on the floor.",
        fix: "Momentus and Maximus support lead-acid, lithium, EV, and AGM chemistries from the same platform, with interchangeable connectors so procurement isn't locked into one equipment brand.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6l7-3Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "p3",
        title: "Every charger eats floor space you'd rather use for racking",
        description: "Traditional charger cabinets weren't designed for a warehouse floor plan — they're bulky, they take up aisle space, and they don't move easily when the layout changes.",
        fix: "Modern SiC power electronics keep Momentus and Maximus compact and wall- or pedestal-mountable, indoors or outdoors, so charging fits the floor plan instead of dictating it.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="12" rx="2"></rect></svg>
      },
      {
        id: "p4",
        title: "No visibility into fleet uptime until a truck goes down",
        description: "Without fleet-wide charge and battery-health data, the first sign of a problem is usually a forklift stalled mid-aisle during a pick run.",
        fix: "CellTrac and AssetPro 360 track battery health, charge history, and predictive maintenance alerts across the fleet, so a failing battery gets flagged before it strands equipment.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.4" /><path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" strokeLinecap="round" /></svg>
      }
    ]
  },
  causalChain: {
    eyebrow: "What a slow charger actually costs",
    heading: "Told in pick rate, not kilowatts.",
    steps: [
      { id: "c1", title: "01 — Charger", description: "Charge lags" },
      { id: "c2", title: "02 — Fleet", description: "Truck down" },
      { id: "c3", title: "03 — Ops", description: "Throughput drops" }
    ]
  },
  valueProp: {
    eyebrow: "Why Minit",
    heading: "Stop managing charging. Start managing production.",
    description: "Multi-shift warehouses lose hundreds of hours per year to battery swaps and slow chargers. Maximus and Momentus eliminate that loss — fast charging that keeps pace with 3-shift operations without expensive infrastructure rewiring.",
    features: [
      "Up to 50% faster charge times",
      "No battery swap required",
      "Dual-port efficiency",
      "Drop-in installation"
    ],
    imageSrc: "/assets/Home Page/MOMENTUS for warehouse-01.webp",
    imageAlt: "Momentus / Maximus Dual Port Wall Mount",
    imageDescription: "Momentus and Maximus wall mount configuration.",
    primaryCta: { text: "See Momentus & Maximus Specs", href: "#specs" }
  },
  specStory: {
    eyebrow: "Product deep-dive",
    heading: "Momentus and Maximus, translated from spec sheet to shop floor.",
    description: "Minit Charger's technical depth is a competitive advantage — if the content communicates it in terms a warehouse floor actually feels.",
    cards: [
      {
        id: "ss1",
        title: "Momentus — 20 kW single port",
        description: "A compact charger for every forklift bay — sized for opportunity charging one truck at a time, not a bulky shared station.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss2",
        title: "Maximus — 40 kW dual port",
        description: "Two trucks charge at once, off the same unit — built for the throughput a 3-shift distribution center actually needs.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss3",
        title: "Modern SiC power electronics",
        description: "More charging capability in less space — a compact wall-mounted footprint instead of a traditional bulky cabinet eating aisle space.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="12" rx="2"></rect></svg>
      },
      {
        id: "ss4",
        title: "Lead acid, lithium, EV & AGM support",
        description: "Your fleet doesn't have to standardize on one battery type. Whatever chemistry makes sense per truck, the charger keeps up.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss5",
        title: "Interchangeable connectors — SB350, Euro, REMA",
        description: "Matches whatever connector is already on your forklifts, so a mixed-brand fleet doesn't force a charger-by-charger workaround.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" /></svg>
      },
      {
        id: "ss6",
        title: "Wall or pedestal, indoor or outdoor",
        description: "Fits the dock, the charging room, or a covered outdoor bay — built around your floor plan, not the other way around.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="7" width="18" height="12" rx="2"></rect></svg>
      }
    ]
  },
  bpmCallout: {
    eyebrow: "The footprint objection, solved",
    heading: "More charging capability in less floor space.",
    description: "Traditional charger cabinets were designed to sit on a floor and stay there — bulky, hard to move, and expensive to work around when a layout changes. Momentus and Maximus use modern SiC power electronics to deliver comparable or greater charging capability from a compact, wall-mountable enclosure, so charging infrastructure adapts to your floor plan instead of claiming a permanent piece of it.",
    features: [
      "Wall or pedestal mount — reclaim the aisle space a floor-standing cabinet would take",
      "Reduce charger footprint without sacrificing charging capability",
      "Off-peak and scheduled charging to manage facility electrical load"
    ],
    imageSrc: "/assets/Home Page/industry_warehouse_1786134258340.webp",
    imageAlt: "Compact footprint compared to traditional cabinets",
    imageDescription: "Wall-mounted Momentus / Maximus charger vs. traditional floor-standing cabinet."
  },
  environmentCompare: {
    eyebrow: "This is opportunity charging",
    heading: "Topped off between picks, not swapped between shifts.",
    leftTitle: "The Problem",
    leftItems: [
      "Wait for a forklift battery to deplete",
      "Drive to the battery room",
      "Swap out for a fresh battery",
      "Log the swap, lose 15+ minutes per shift"
    ],
    rightTitle: "The Solution",
    rightItems: [
      "A break, a shift change, a lull between pick waves",
      "Momentus and Maximus are built for this window",
      "No spare-battery room required",
      "No forklift parked mid-aisle waiting on a swap crew"
    ]
  },
  fleetIntelligence: {
    eyebrow: "Beyond the charger",
    heading: "Know your fleet before it strands a pick run.",
    description: "",
    cards: [
      {
        id: "f1",
        title: "CellTrac battery health & charge history",
        description: "Know exactly which batteries in your fleet are degrading before they strand a truck mid-aisle. AssetPro 360 flags it before your operator does.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="2.4" /><path d="M7 9a7 7 0 0 0 0 6M17 9a7 7 0 0 1 0 6M4 6a11 11 0 0 0 0 12M20 6a11 11 0 0 1 0 12" strokeLinecap="round" /></svg>
      },
      {
        id: "f2",
        title: "AssetPro 360 / Cumulus fleet dashboard",
        description: "One screen for every charger and every truck on the floor — not a maintenance log someone updates after equipment already went down.",
        icon: <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="m12 3 9 5-9 5-9-5 9-5Z" strokeLinejoin="round" /><path d="m3 13 9 5 9-5" strokeLinejoin="round" /></svg>
      }
    ],
    features: [
      "Remote fleet monitoring",
      "Predictive maintenance alerts",
      "Charge history & analytics",
      "GPS / asset tracking via CellTrac"
    ]
  },
  specs: {
    eyebrow: "Why not just buy a traditional dual-vehicle charger",
    heading: "Maximus vs. a typical high-throughput charger",
    items: [
      { label: "Power output", value: "40 kW, dual port" },
      { label: "Efficiency", value: "Up to 94%" },
      { label: "Mounting", value: "Wall or pedestal mountable" },
      { label: "Chemistry", value: "Agnostic (Lead-acid, Lithium, AGM, EV)" },
      { label: "Diagnostics", value: "On-screen touch display + cloud monitoring" },
      { label: "Footprint", value: "Compact enclosure, saves floor space" }
    ],
    footer: "Most 40 kW-class dual-vehicle chargers on the market are built around a large traditional cabinet design. Maximus provides the same power in a compact wall-mountable form."
  },
  process: {
    eyebrow: "From first call to fully installed",
    heading: "How to deploy Minit Charger across your facility.",
    steps: [
      { id: "pr1", number: "01", title: "Charging assessment call", description: "Walk through your fleet mix, shift pattern, and existing power feed with an engineer." },
      { id: "pr2", number: "02", title: "Site survey & power plan", description: "Including optimal placement to minimize travel time for opportunity charging." },
      { id: "pr3", number: "03", title: "Install & commission", description: "Pedestal or wall, indoor or outdoor — scheduled around your operations, not around ours." },
      { id: "pr4", number: "04", title: "Monitor & support", description: "CellTrac and AssetPro 360 live from day one, with remote diagnostics backing up your team." }
    ]
  },
  calculator: {
    eyebrow: "Put a number on downtime",
    heading: "What is battery swapping actually costing your warehouse?",
    description: "Move the sliders to match your operation. This is your estimate, built from your numbers — not ours."
  },
  resources: {
    eyebrow: "Recommended resources",
    heading: "Go deeper before your assessment call.",
    guides: [
      { id: "r1", title: "The Warehouse Fleet Charging Guide", description: "Sizing a charger fleet, mapping power feeds, and the opportunity charging question.", ctaText: "Read Guide", ctaHref: "#guide" },
      { id: "r2", title: "MHE Downtime & ROI Calculator", description: "See what battery swaps are costing your operation today.", ctaText: "Use Tool", ctaHref: "#calculator" },
      { id: "r3", title: "Maximus & Momentus Specs (PDF)", description: "Full technical specifications for procurement and engineering.", ctaText: "Download PDF", ctaHref: "/resources/maximus-momentus-spec/" }
    ],
    exploreHeading: "Explore other fleets we power",
    explorePills: [
      { id: "e1", label: "Aviation & GSE", href: "/industries/aviation-ground-support-equipment/" },
      { id: "e2", label: "Low Speed Vehicles", href: "/industries/low-speed-vehicles/" },
      { id: "e3", label: "Vehicle & Asset Tracking", href: "/industries/vehicle-asset-tracking/" }
    ]
  },
  leadMagnet: {
    eyebrow: "Free download",
    heading: "The Warehouse Fleet Charging Checklist",
    description: "What ops directors need to know before their next fleet upgrade — sizing a charger fleet, reading a power feed, and understanding opportunity charging vs. battery swapping.",
    checklist: [
      "How to size a charger fleet to your MHE mix",
      "Opportunity charging implementation plan",
      "A checklist for your first site survey call"
    ]
  },
  cta: {
    heading: "Ready to stop losing hours to a battery room?",
    description: "Talk to an engineer about your fleet, your warehouse layout, and whether opportunity charging makes sense for your shift pattern.",
    buttons: [
      { id: "b1", text: "Request a Quote", href: "#assessment", variant: "primary" },
      { id: "b2", text: "Download the Warehouse Guide", href: "#guide", variant: "outline" }
    ]
  },
  relatedProducts: {
    heading: "Complete your warehouse charging ecosystem.",
    products: [
      {
        id: "maximus",
        title: "Maximus",
        description: "High-capacity indoor dual-port warehouse charger.",
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "Maximus charger",
        href: "/product/maximus"
      },
      {
        id: "momentus",
        title: "Momentus",
        description: "Mid-level compact indoor MHE charger.",
        imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
        imageAlt: "Momentus charger",
        href: "/product/momentus"
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
};
