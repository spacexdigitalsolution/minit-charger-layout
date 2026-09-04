import React from 'react';

export const industryAviationGseData = {
  hero: {
    eyebrow: "Aviation / Ground support equipment",
    heading: (
      <>
        Your ramp doesn't stop.<br />
        Neither should your<br />
        charger.
      </>
    ),
    description: "Outdoor-rated fast charging engineered for airside pressure - not retrofitted for it.",
    bgImage: "/assets/Industries/Aviation-GSE/Banner/Banner-Aviation.webp",
    bgAlt: "Altus II charging a TLD electric tug and a TLD GPU 2400 unit on an airport ramp, aircraft and jet bridge in background",
    primaryCta: { text: "Get a Charging Assessment", href: "#assessment" },
    secondaryCta: { text: "See the products", href: "#ecosystem" },
    scrollCue: "Scroll"
  },
  painPoints: [
    {
      id: "pp1",
      num: "01",
      eyebrow: "THE PROBLEM",
      heading: "Downtime at the gate isn't optional.",
      description: "A dead charger doesn't just cost you a tug — it costs you a turn. Minit Charger builds charging infrastructure for the ramp, not retrofitted from a warehouse floor.",
      cta: { text: "Talk to an engineer", href: "#assessment" }
    },
    {
      id: "pp2",
      num: "02",
      eyebrow: "THE PROBLEM",
      heading: "Energy accountability shouldn't be manual.",
      description: "Shared ramp power across airlines and handlers needs automated tracking — not a spreadsheet reconciled by hand.",
      cta: { text: "See Cumulus", href: "#cumulus" }
    },
    {
      id: "pp3",
      num: "03",
      eyebrow: "THE PROBLEM",
      heading: "Electrification shouldn't mean two charging systems.",
      description: "Adding high-voltage EVs alongside GSE shouldn't force a second, separate charging platform.",
      cta: { text: "Explore Magnus", href: "/products/magnus/" }
    }
  ],
  whyMinitBanner: {
    heading: "The only charger engineered for airport turnaround pressure.",
    description: "Most industrial chargers are built for warehouses and retrofitted for airports. Altus II is designed from the ground up for high-cycle, outdoor, multi-shift GSE operations - where a charger failure doesn't just cost money, it delays flights.",
    bgImage: "/assets/Industries/Aviation-GSE/Why Minit Charger/Banner.webp",
    bgAlt: "Altus II charging a TLD electric tug and a TLD GPU 2400 unit on an airport ramp, aircraft and jet bridge in background"
  },
  thesis: [
    {
      id: "consistency",
      heading: "One charging standard, every station you fly to.",
      description: "Airlines running GSE across dozens of stations don't need a different charger at every gate — they need one platform and one fleet view, wherever they operate. Altus II is the everyday charger built for that consistency; AssetPro 360 gives your ops team a single dashboard across every station, not a login per airport.",
      features: [
        { icon: "bolt", text: "Dual-port fast charging" },
        { icon: "cloud", text: "Fleet-wide visibility across stations (Cumulus)" },
        { icon: "shield", text: "Outdoor-rated IP65" },
        { icon: "arrow", text: "Compatible with existing GSE connectors" }
      ],
      imageSrc: "/assets-src/Industries/Aviation/The only charger engineered for airport turnaround pressure/ALTUS_II-DUAL PORT-IP65.png"
    },
    {
      id: "power",
      heading: "Add chargers across the ramp without a utility project.",
      description: "Airports don't approve one charger — they plan electrical capacity across an entire airfield, for tenants who don't always coordinate with each other. Bridge Power Manager allocates power across every charger on a shared feed in real time, so you can scale capacity as more airlines electrify, without a utility upgrade every time a new gate comes online.",
      features: [
        { icon: "bolt", text: "Power sharing across chargers, no utility project (BPM)" },
        { icon: "cloud", text: "Certified metering for multi-tenant billing (AssetPro 360)" },
        { icon: "arrow", text: "One platform, GSE through high-voltage EV (Magnus)" },
        { icon: "shield", text: "Outdoor-rated across the whole ramp" }
      ],
      imageSrc: "/assets-src/Home Page/Warehouse & Manufacturing/Indoor · High-capacity Maximus-01.png"
    },
    {
      id: "platform",
      heading: "One platform, every voltage class, in your load calc.",
      description: "When you're speccing a multi-year electrification roadmap, the platform needs to outlast phase one. Magnus covers 24–1000 VDC and 100–200 kW from a single architecture, with connectors for both legacy GSE (Anderson, Euro, REMA) and high-voltage EV (CCS1, CCS2, NACS, GB/T) — so your design doesn't need a second system when the fleet mix changes.",
      features: [
        { icon: "bolt", text: "24–1000 VDC, one platform (Magnus)" },
        { icon: "arrow", text: "CCS1, CCS2, NACS, GB/T, Anderson, Euro, REMA" },
        { icon: "shield", text: "Modern SiC power electronics" },
        { icon: "cloud", text: "Full spec documentation available" }
      ],
      imageSrc: "/assets/aviation/aviation-hero-altus-tld.webp"
    }
  ],
  boldStats: {
    stats: [
      { num: "30–80", unit: "kW", label: "Charger output range" },
      { num: "3", unit: "", label: "Battery chemistries supported" },
      { num: "IP65", unit: "", label: "Outdoor rated, every unit", isTextNum: true }
    ]
  },
  whyAlternating: [
    {
      id: "w1",
      num: "01",
      heading: "Built for the ramp.",
      problemTag: "The problem",
      problemText: "Most industrial chargers are built for warehouse floors, then bolted onto a ramp — and fail right when weather and vibration test them hardest.",
      fixTag: "Minit response",
      fixText: "Altus II is outdoor-rated, dual-port charging purpose-built for GSE — not adapted from an indoor design.",
      imageSrc: "/assets/Industries/Aviation-GSE/Features/Built for the ramp.webp",
      imageAlt: "Built for the ramp",
      imageClass: "object-fit:cover;",
      isReverse: false,
      isIconic: false
    },
    {
      id: "w2",
      num: "02",
      heading: "No infrastructure upgrade required.",
      problemTag: "The problem",
      problemText: "Adding chargers to an older ramp usually hits the same wall: the existing electrical feed wasn't sized for more fast chargers.",
      fixTag: "Minit response",
      fixText: "Bridge Power Manager shares power across chargers on a single feed — add capacity without a utility project.",
      imageSrc: "/assets/Industries/Aviation-GSE/Features/No infrastructure upgrade required.webp",
      imageAlt: "No infrastructure upgrade required",
      isReverse: true,
      isIconic: false
    },
    {
      id: "w3",
      num: "03",
      heading: "See your fleet before it strands you.",
      problemTag: "The problem",
      problemText: "Without fleet-wide battery data, the first sign of a problem is usually a dead tug at the gate, not a dashboard alert.",
      fixTag: "Minit response",
      fixText: "CellTrac and AssetPro 360 track battery health and charge history, fleet-wide, from one dashboard.",
      imageSrc: "/assets/Industries/Aviation-GSE/Features/See your fleet before it strands you.webp",
      imageAlt: "See your fleet before it strands you",
      isReverse: false,
      isIconic: false
    }
  ],
  ecosystem: {
    eyebrow: "The lineup",
    heading: "Everything your ramp needs to run on electric.",
    products: [
      {
        id: "altus",
        title: "Altus II",
        description: "Outdoor dual-port GSE charger.",
        imageSrc: "/assets/altus/altus-ii-main.webp",
        imageAlt: "Altus II",
        href: "/products/altus-ii/"
      },
      {
        id: "magnus",
        title: "Magnus",
        description: "Mixed-fleet, high-voltage charging.",
        imageSrc: "/assets/magnus/magnus-iso1.webp",
        imageAlt: "Magnus",
        href: "/products/magnus/"
      },
      {
        id: "mobilus",
        title: "Mobilus",
        description: "Mobile charging, anywhere power's needed.",
        imageSrc: "/assets/altus/altus-related-mobilus.webp",
        imageAlt: "Mobilus",
        href: "/products/mobilus/"
      },
      {
        id: "celltrac",
        title: "CellTrac",
        description: "Battery health and GPS tracking.",
        imageSrc: "/assets/altus/altus-related-celltrac.webp",
        imageAlt: "CellTrac",
        href: "/products/celltrac/"
      },
      {
        id: "assetpro",
        title: "AssetPro 360",
        description: "Fleet-wide charge data and alerts.",
        imageSrc: "/assets/altus/altus-related-assetpro.webp",
        imageAlt: "AssetPro 360",
        href: "/products/assetpro-360/"
      }
    ]
  },
  faq: {
    eyebrow: "Questions",
    heading: "What airports ask us first.",
    items: [
      {
        id: "q1",
        question: "What is an eGSE fast charger?",
        answer: "A DC charging system built to power airside equipment — tugs, belt loaders, tractors — faster than standard AC charging, while withstanding outdoor ramp conditions."
      },
      {
        id: "q2",
        question: "Do chargers need to be rated for outdoor use?",
        answer: "Yes. Ramp chargers face rain, heat, and constant vibration from nearby traffic. Every Minit Charger GSE unit is outdoor-rated from day one."
      },
      {
        id: "q3",
        question: "Can I avoid an electrical infrastructure upgrade?",
        answer: "In many cases, yes — Bridge Power Manager (BPM) allocates power across chargers on your existing feed in real time."
      },
      {
        id: "q4",
        question: "How do I get started?",
        answer: "One call. We'll walk through your fleet mix, ramp layout, and existing power feed, then scope a plan."
      }
    ]
  },
  finalCta: {
    heading: "Ready to electrify your ramp?",
    description: "Talk to an engineer about your fleet, your power, and what's possible.",
    bgImage: "/assets/Industries/Aviation-GSE/CTA/Banner.webp",
    primaryCta: { text: "Get a Charging Assessment", href: "mailto:info@minitcharger.com" },
    secondaryCta: { text: "Browse Products", href: "/products/" }
  }
};
