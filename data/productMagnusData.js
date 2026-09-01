export const productMagnusData = {
  hero: {
    eyebrow: "Universal mixed-fleet DC fast charger",
    heading: "MAGNUS",
    description: "One charger. Every voltage. Every vehicle you're about to add next.",
    imageSrc: "/assets/magnus/magnus-vehicle.webp",
    imageAlt: "Magnus charger in action",
  },
  
  intro: {
    eyebrow: "Product overview",
    heading: "Built for the fleet you have — and the one you're about to add.",
    description: "Magnus is a future-proof DC fast charger for airports, fleets, and commercial operators. It charges traditional GSE, buses, trucks, and passenger EVs from the same platform, so a fleet that's mid-transition to electric doesn't need a second charging system standing next to the first.",
    badges: [
      "Chemistry agnostic",
      "Intelligent power sharing",
      "Certified metering",
      "Cloud-connected"
    ],
    stats: [
      { num: "100–200", lbl: "kW output" },
      { num: "24–1000", lbl: "VDC range" },
      { num: "Dual", lbl: "Port config" },
      { num: "95%", lbl: "Max efficiency" }
    ],
    gallery: [
      { src: "/assets/magnus/magnus-iso1.webp", alt: "Magnus charger, front isometric angle" },
      { src: "/assets/magnus/magnus-iso2.webp", alt: "Magnus charger, alternate isometric angle" },
      { src: "/assets/magnus/magnus-cc1-connector.webp", alt: "Magnus high-voltage connector detail" },
      { src: "/assets/magnus/magnus-display1.webp", alt: "Magnus touchscreen display detail" },
      { src: "/assets/magnus/magnus-open-door.webp", alt: "Magnus internal components, panel open" }
    ]
  },

  engineeringStrip: [
    { icon: "shield", value: "UL 2202 / UL 2231-1 / -2", label: "Regulatory compliance" },
    { icon: "bolt", value: "323–530 VAC · 3Ø", label: "Single power feed" },
    { icon: "cloud", value: "SCADA / ERP ready", label: "Integration protocol" },
    { icon: "shield", value: "-25°C to 60°C", label: "Operating range" }
  ],

  quickAnswer: {
    eyebrow: "In short",
    heading: "What is the Minit Charger Magnus?",
    description: "Magnus is a universal DC fast charger built to serve mixed fleets — airport ground support equipment, buses, trucks, and passenger EVs — from a single platform. It outputs 24–1000 VDC at 100–200 kW, supports lead-acid, lithium, and EV battery chemistries, and includes intelligent power sharing and certified metering, so one charger can replace what would otherwise be two or three separate charging systems."
  },

  failureModes: {
    eyebrow: "Reliability, by design",
    heading: "Don't engineer a single point of failure into your charging plan.",
    description: "A one-voltage, one-chemistry charger isn't just inflexible — it's a constraint every future fleet, budget, and infrastructure decision has to work around. Here's where that constraint actually bites, and how Magnus is specified against it.",
    cards: [
      {
        tag: "Failure mode",
        title: "Voltage-class silos",
        description: "A GSE tug goes electric this year, a shuttle next year, a truck the year after — and most platforms only serve one voltage class. You end up specifying a second charging system before the first is depreciated.",
        fixTag: "Design response",
        fixDescription: "24–1000 VDC on one platform. Low-voltage GSE and high-voltage EVs charge from the same pedestal — no separate high-voltage system to capital-plan for later."
      },
      {
        tag: "Failure mode",
        title: "Chemistry lock-in",
        description: "Lead-acid tugs, a lithium pilot, a passenger EV with its own onboard charger — procurement asks the same question every purchase cycle: will the charger even support this?",
        fixTag: "Design response",
        fixDescription: "Chemistry-agnostic charging. Lead-acid, lithium, and EV packs all run from the same unit, so the charger stops constraining what you're allowed to buy."
      },
      {
        tag: "Failure mode",
        title: "Unattributed energy draw",
        description: "Shared charging infrastructure across departments, tenants, or ground handlers usually means shared costs too — with no clean way to see which vehicle, shift, or operator actually drew the power.",
        fixTag: "Design response",
        fixDescription: "Certified power metering with AssetPro-based reporting turns every session into billable, attributable data — not a shared utility line nobody can reconcile."
      },
      {
        tag: "Failure mode",
        title: "Feed capacity ceiling",
        description: "Every new charger request turns into the same conversation with facilities: does the feed have enough capacity, and if not, whose capital budget absorbs the upgrade?",
        fixTag: "Design response",
        fixDescription: "Intelligent power sharing on a single power feed allocates available power across connected chargers in real time — add charging capacity without necessarily adding electrical capacity."
      },
      {
        tag: "Failure mode",
        title: "The standalone-system island",
        description: "A charger that can't talk to the BMS, SCADA, or ERP system your team already runs becomes one more screen to check, disconnected from the operational picture everything else feeds into.",
        fixTag: "Design response",
        fixDescription: "Native SCADA / ERP integration plus cellular, Wi-Fi, Ethernet, and remote configuration — Magnus reports into the systems you already monitor, not a separate one."
      },
      {
        tag: "Failure mode",
        title: "Peak-demand penalty",
        description: "A fleet that all charges at once during peak hours turns into the largest controllable line item on the utility bill — and nobody notices until the demand charge posts.",
        fixTag: "Design response",
        fixDescription: "Off-peak and scheduled charging, combined with intelligent power sharing, shifts and balances load automatically instead of leaving it to chance."
      }
    ]
  },

  valueProp: {
    eyebrow: "Why Magnus",
    heading: "One charging ecosystem from GSE to EV.",
    description: "Most operations run one charger for forklifts, another for buses, and a third for passenger EVs — three vendors, three dashboards, three spare-parts inventories. Magnus consolidates that into a single platform built to grow with your fleet instead of being replaced by it.",
    features: [
      { icon: "bolt", text: "24–1000 VDC output range" },
      { icon: "battery", text: "Chemistry agnostic" },
      { icon: "shield", text: "Certified metering" },
      { icon: "cloud", text: "SCADA / ERP integration" }
    ]
  },

  infrastructure: {
    eyebrow: "For the team that owns the interconnection",
    heading: "One line into the panel. One system into SCADA.",
    description: "This is the page for whoever has to size the feed, pull the permit, and answer for the load calc — not just the fleet manager who picked the color.",
    features: [
      { icon: "bolt", title: "Single power feed", description: "One interconnection point serves the full 100–200 kW, dual-port output — not a separate service run per charger." },
      { icon: "cloud", title: "Native SCADA / ERP integration", description: "Reports into the airport's existing facilities and asset-management systems over cellular, Wi-Fi, or Ethernet — not a siloed vendor portal." },
      { icon: "shield", title: "Certified energy metering", description: "Utility-grade metering at the charger, not an estimate — the same data source that feeds automated, attributable billing." },
      { icon: "battery", title: "Off-peak & scheduled charging", description: "Charging load can be scheduled and shared across units instead of landing entirely inside a utility peak-demand window." },
      { icon: "truck", title: "Remote configuration", description: "Adjust charger settings from the network — fewer truck rolls to a pedestal for a configuration change." }
    ]
  },

  featureDeepDive: {
    eyebrow: "Feature deep-dive",
    heading: "Every spec, translated into what it means on the ground.",
    description: "Minit Charger's technical depth is a competitive advantage — if it's communicated in terms your team actually feels.",
    cards: [
      {
        image: "/assets/magnus/magnus-cc1-connector1.webp",
        label: "Spec — CCS1, CCS2, NACS, GB/T connectors",
        title: "High-voltage EV connectors, built in",
        description: "When a passenger EV or an electric shuttle pulls up next to your GSE fleet, it plugs into the same charger — no separate high-voltage station to install and maintain."
      },
      {
        image: "/assets/magnus/magnus-euro-rem-connector.webp",
        label: "Spec — Anderson, Euro, REMA connectors",
        title: "Your existing GSE connectors just work",
        description: "Traditional tugs and tractors keep the connectors they already use. Magnus doesn't ask your ramp to change to fit the charger."
      },
      {
        image: "/assets/magnus/magnus-display1.webp",
        label: "Spec — Touchscreen + RFID tap-to-charge",
        title: "A session, logged the moment it starts",
        description: "A driver taps a badge, the screen confirms \"Ready to Charge,\" and the session is already attributed to that vehicle — no clipboard, no guesswork."
      },
      {
        image: "/assets/magnus/magnus-retractor.webp",
        label: "Spec — Built-in overhead cable management",
        title: "Cables off the pavement, by design",
        description: "Four heavy charging cables don't end up coiled on wet concrete between shifts. The overhead booms keep them clear of foot and vehicle traffic."
      },
      {
        image: "/assets/magnus/magnus-e-stop.webp",
        label: "Spec — Emergency shutoff, per-port status LEDs",
        title: "Safety your ground crew can see",
        description: "Every port shows its state at a glance, and one clearly marked button cuts power to the whole unit if something goes wrong — no hunting for a breaker panel."
      },
      {
        image: "/assets/magnus/magnus-cc1-port.webp",
        label: "Spec — Dual port, expandable configurations",
        title: "Sized for today's fleet, expandable for the next phase",
        description: "A second port is already built in, and additional configurations scale from there — so a phase-two rollout doesn't mean re-specifying the platform from scratch."
      }
    ]
  },

  multiVehicle: {
    eyebrow: "One charger, whole fleet",
    heading: "Two tugs. One charger. Zero rationing.",
    description: "Dual-port charging on a real ramp at dusk — two ground-support vehicles charging at once from the same Magnus unit, with intelligent power sharing keeping both sessions running without tripping the feed.",
    image: "/assets/magnus/magnus-vehicle.webp"
  },

  comparison: {
    eyebrow: "Why not just buy a single-purpose charger",
    heading: "Magnus vs. a typical single-voltage charging setup",
    description: "Most charging platforms on the market are purpose-built for one voltage class — low-voltage GSE on one system, a separate high-voltage station bolted on for buses and passenger EVs. Here's what that comparison looks like in practice.",
    note: "Figures reflect Magnus's published specifications compared to typical purpose-built industry equipment. [Client to confirm before publishing any named-competitor comparison.]",
    rows: [
      {
        feature: "Voltage range covered",
        typical: "Low-voltage GSE only, or a separate add-on high-voltage unit",
        magnus: "24–1000 VDC from one platform"
      },
      {
        feature: "High-voltage output",
        typical: "Typically up to ~30 kW from AC input on add-on high-voltage stations",
        magnus: "100–200 kW"
      },
      {
        feature: "Charging ecosystem",
        typical: "Separate chargers and dashboards per vehicle class",
        magnus: "One cloud platform across GSE, buses, trucks & EVs"
      },
      {
        feature: "Energy accountability",
        typical: "Manual or session-level reporting, billing support often manual",
        magnus: "Certified metering with automated, attributable billing"
      },
      {
        feature: "Power infrastructure",
        typical: "Fixed power allocation per charger",
        magnus: "Intelligent, real-time power sharing across connected units"
      }
    ]
  },

  serviceability: {
    eyebrow: "Designed to be opened, not replaced",
    heading: "Built for a technician with a toolkit, not a factory return.",
    description: "Every Magnus unit opens from the front panel to expose the power electronics, air filter, and control board — routine maintenance happens on your ramp, on your schedule.",
    cards: [
      {
        image: "/assets/magnus/magnus-tech.webp",
        tag: "Field service",
        title: "Serviced where it's installed",
        description: "No shipping the unit out — a technician opens the front panel on-site, tools in hand."
      },
      {
        image: "/assets/magnus/magnus-open-door.webp",
        tag: "Front access",
        title: "Control board & power electronics up front",
        description: "The panel that matters most for diagnostics is the first one you open — not the last."
      },
      {
        image: "/assets/magnus/magnus-filter.webp",
        tag: "Filter access",
        title: "Replaceable air filter",
        description: "A dedicated side panel keeps filter changes routine instead of a teardown."
      },
      {
        image: "/assets/magnus/magnus-tech1.webp",
        tag: "Any shift",
        title: "Scheduled around your ops, not ours",
        description: "Day or night ramp operations — service work fits the maintenance window you actually have."
      }
    ]
  },

  specs: {
    eyebrow: "Specifications",
    heading: "Full technical specifications.",
    items: [
      { label: "Charging Type", value: "DC Fast" },
      { label: "Power Output", value: "100–200 kW" },
      { label: "Input Voltage", value: "323–530 VAC, 3-phase" },
      { label: "Output Voltage", value: "24–1000 VDC" },
      { label: "Port Configuration", value: "Dual Port (expandable configurations)" },
      { label: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
      { label: "Connector Options", value: "CCS1, CCS2, NACS, GB/T, Anderson, Euro, REMA" },
      { label: "Max Efficiency", value: "Up to 95%" },
      { label: "Operating Temperature", value: "-25°C to 60°C" },
      { label: "Regulatory Compliance", value: "UL 2202, UL 2231-1 / -2" },
      { label: "Mounting", value: "Pedestal" },
      { label: "Installation Environment", value: "Indoor or outdoor" },
      { label: "Cable Management", value: "Built-in overhead retractable booms" },
      { label: "Connectivity", value: "Cellular, Wi-Fi, Ethernet, remote configuration, SCADA / ERP integration" },
      { label: "Over-the-Air Updates", value: "Planned" },
      { label: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" }
    ]
  },

  form: {
    eyebrow: "Talk to an engineer",
    heading: "See if Magnus fits your fleet plan.",
    description: "One call to walk through your voltage range, connector mix, and site power — no obligation."
  },

  faq: {
    eyebrow: "Frequently asked questions",
    heading: "What buyers ask about Magnus.",
    items: [
      { q: "What is the Minit Charger Magnus?", a: "Magnus is a DC fast charger built to serve airport GSE, buses, trucks, and passenger EVs from a single platform, with an output range of 24–1000 VDC and 100–200 kW of power." },
      { q: "What connectors does Magnus support?", a: "CCS1, CCS2, NACS, and GB/T for high-voltage EV charging, plus Anderson, Euro, and REMA connectors for traditional GSE and industrial equipment." },
      { q: "Can Magnus charge both low-voltage GSE and high-voltage EVs?", a: "Yes. Magnus's 24–1000 VDC output range and multiple connector options let it serve traditional ground support equipment and high-voltage electric vehicles from the same unit." },
      { q: "Does Magnus support lithium and lead-acid batteries?", a: "Yes, Magnus is chemistry-agnostic and supports lead-acid, lithium, and EV battery packs from the same charger." },
      { q: "What electrical input does Magnus require?", a: "Magnus runs on 323–530 VAC three-phase input power, higher than Minit Charger's lower-voltage products, reflecting its expanded 100–200 kW output range. Confirm site power availability during a charging assessment." },
      { q: "Can Magnus be installed outdoors?", a: "Yes, Magnus is rated for both indoor and outdoor pedestal installation." },
      { q: "Does Magnus support power sharing across multiple chargers?", a: "Yes. Magnus includes intelligent power sharing, allocating available power across connected chargers on a shared feed in real time." },
      { q: "How is charging activity tracked and billed on Magnus?", a: "Magnus includes certified power metering integrated with AssetPro 360 / Cumulus, so each charging session is recorded and attributable for reporting or billing." },
      { q: "Does Magnus integrate with airport SCADA, BMS, or ERP systems?", a: "Yes. Magnus supports SCADA / ERP integration alongside cellular, Wi-Fi, and Ethernet connectivity and remote configuration, so it reports into the systems an airport engineering or facilities team already uses instead of running as a standalone system." },
      { q: "Can Magnus help reduce peak demand charges?", a: "Magnus supports off-peak and scheduled charging combined with intelligent power sharing across connected units, which can help shift and balance charging load instead of concentrating it during peak utility demand periods." }
    ]
  },

  finalCta: {
    heading: "See if Magnus fits your fleet's next five years.",
    description: "Talk to an engineer about voltage range, connector mix, and whether one Magnus platform can replace what you were about to buy twice.",
    contact: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
  },

  relatedProducts: {
    heading: "Build the rest of your charging ecosystem.",
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
