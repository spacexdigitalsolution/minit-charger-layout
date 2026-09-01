export const productAltusData = {
  hero: {
    eyebrow: "Ground support equipment (GSE) DC fast charger",
    heading: "ALTUS II",
    description: "Trusted by airports around the world — the everyday fast charger for a standard GSE fleet.",
  },
  
  intro: {
    eyebrow: "Product overview",
    heading: "Trusted by airports around the world.",
    description: "Altus II is Minit Charger's outdoor-rated, dual-port DC fast charger built specifically for airport ground support equipment — the everyday workhorse for tugs, belt loaders, and baggage tractors across a standard airport fleet.",
    badges: [
      "Outdoor rated",
      "Dual port",
      "Multi-chemistry",
      "Auto-retracting cable",
      "AssetPro connected"
    ],
    stats: [
      { num: "30–80", lbl: "kW output*" },
      { num: "24–1000", lbl: "VDC range*" },
      { num: "Dual", lbl: "Port config" },
      { num: "95%", lbl: "Max efficiency" }
    ],
    gallery: [
      { src: "/assets/altus/altus-ii-main.webp", alt: "Altus II charger, front view" },
      { src: "/assets/altus/altus-ii-field.svg", alt: "View on the ramp illustration" },
      { src: "/assets/altus/altus-ii-dualport.svg", alt: "Dual-port charging illustration" }
    ],
    mainGalleryCaption: "Product photo — dual-port pedestal charger"
  },

  engineeringStrip: [
    { icon: "shield", value: "UL / CE Options", label: "Regulatory compliance" },
    { icon: "bolt", value: "208–480 VAC · 3-phase", label: "Input power" },
    { icon: "cloud", value: "Airport Systems", label: "Integration" },
    { icon: "shield", value: "Outdoor Rated", label: "Operating environment" }
  ],

  quickAnswer: {
    eyebrow: "In short",
    heading: "What is the Minit Charger Altus II?",
    description: "Altus II is an outdoor-rated, dual-port DC fast charger built for airport ground support equipment (GSE) — the everyday charger for tugs, belt loaders, and baggage tractors across a standard airport fleet. It delivers 30–80 kW across two ports, supports lead-acid, lithium, and EV battery chemistries with Anderson, Euro, and REMA connectors, and connects to AssetPro 360 / Cumulus for fleet-wide charge and battery data."
  },

  failureModes: {
    eyebrow: "Built for ramp reality",
    heading: "Where an everyday GSE charger actually earns its keep.",
    description: "A charger that only performs well on a spec sheet doesn't help a ground crew at 5am. Here's where that gap shows up, and how Altus II is specified against it.",
    cards: [
      {
        tag: "Failure mode",
        title: "Charger not built for the ramp",
        description: "Most industrial chargers are adapted from warehouse designs, then asked to survive rain, heat, and constant vibration on an active ramp.",
        fixTag: "Design response",
        fixDescription: "Altus II is outdoor-rated from the ground up, built specifically for high-cycle GSE duty — not retrofitted for it."
      },
      {
        tag: "Failure mode",
        title: "One battery type, one charger",
        description: "A fleet with lead-acid tugs and a newer lithium belt loader often ends up needing two different chargers just to keep both running.",
        fixTag: "Design response",
        fixDescription: "Altus II charges lead-acid, lithium, and EV battery packs from the same dual-port unit."
      },
      {
        tag: "Failure mode",
        title: "Downtime nobody sees coming",
        description: "Without remote diagnostics, the first sign of a charger fault is usually a dead tug at the gate, not a dashboard alert.",
        fixTag: "Design response",
        fixDescription: "Cloud connectivity, remote monitoring, and predictive maintenance alerts flag a fault before it strands a vehicle."
      },
      {
        tag: "Failure mode",
        title: "Power-constrained ramps stall expansion",
        description: "Adding chargers to an older ramp often runs into the same wall: the existing feed wasn't sized for more fast chargers.",
        fixTag: "Design response",
        fixDescription: "Altus II pairs with Bridge Power Manager (BPM) for constrained infrastructure, sharing available power across chargers on a single feed."
      },
      {
        tag: "Failure mode",
        title: "No accountability for shared ramp power",
        description: "Multiple airlines or ground handlers sharing the same charging infrastructure need a way to see who used what — not a shared utility line nobody can reconcile.",
        fixTag: "Design response",
        fixDescription: "AssetPro 360 integration gives usage and charge-history data by vehicle and session, supporting cost allocation across airlines and handlers."
      },
      {
        tag: "Failure mode",
        title: "A charging cable left on the ramp",
        description: "A cable dropped and forgotten after charging doesn't just look untidy — it's a tripping hazard, and repeated run-overs from tugs and belt loaders wear through the jacket until it fails or shorts.",
        fixTag: "Design response",
        fixDescription: "Altus II retracts its charging cable automatically into the housing the moment a session ends — nobody has to remember to coil it, and it isn't lying on the ramp for the next vehicle to run over."
      }
    ]
  },

  valueProp: {
    eyebrow: "Why Altus II",
    heading: "The everyday charger for a standard airport GSE fleet.",
    description: "Not every ramp needs 200 kW high-voltage capability — most need a charger that's reliably outdoor-rated, straightforward to install, and built to run every shift, every day. Altus II is Minit Charger's answer to that everyday reliability requirement, backed by the same charger + CellTrac + AssetPro 360 ecosystem behind the rest of the fleet.",
    features: [
      { icon: "shield", text: "Outdoor rated" },
      { icon: "plug", text: "Dual port" },
      { icon: "battery", text: "Lead acid, lithium & EV" },
      { icon: "cloud", text: "AssetPro 360 connected" }
    ]
  },

  infrastructure: {
    eyebrow: "For the team that owns the ramp systems",
    heading: "Reports into airport systems, not around them.",
    description: "This is the part of the spec sheet that matters to whoever has to answer for ramp power, not just the ops manager who picked the charger.",
    features: [
      { icon: "cloud", title: "Airport systems integration", description: "Connects into the systems an airport's ops and maintenance teams already monitor, over cellular, Wi-Fi, or Ethernet." },
      { icon: "monitor", title: "On-screen + remote diagnostics", description: "A fault shows up on the unit's own screen and on a dashboard alert — not just a dead tug at the gate." },
      { icon: "bolt", title: "Optional BPM power sharing", description: "Add Bridge Power Manager where the electrical feed is constrained, allocating power across chargers in real time." },
      { icon: "cpu", title: "OTA software updates", description: "Charger firmware and diagnostics improvements ship without a truck roll to the pedestal." }
    ]
  },

  featureDeepDive: {
    eyebrow: "Feature deep-dive",
    heading: "Every spec, translated into what it means on the ramp.",
    cards: [
      {
        icon: "plug",
        label: "Spec — Dual-port DC fast charging, 30–80 kW*",
        title: "Two vehicles, one pedestal",
        description: "Two vehicles charge at once, off the same unit — so your ground crew isn't rationing power during a bank push."
      },
      {
        icon: "shield",
        label: "Spec — Outdoor-rated enclosure",
        title: "Runs through weather, not around it",
        description: "Rain, cold, and the heat of a tarmac summer — airport GSE doesn't get to take weather days, and neither does Altus II."
      },
      {
        icon: "battery",
        label: "Spec — Lead acid, lithium & EV support",
        title: "Standardize on the charger, not the battery",
        description: "Whatever chemistry makes sense per vehicle, Altus II keeps up — no fleet-wide battery mandate required."
      },
      {
        icon: "truck",
        label: "Spec — Anderson, Euro, REMA connectors",
        title: "Matches the fleet you already have",
        description: "Tugs, tractors, and belt loaders already on your ramp connect without a fleet-wide connector swap."
      },
      {
        icon: "monitor",
        label: "Spec — On-screen + remote diagnostics",
        title: "A fault you see before it strands a vehicle",
        description: "Status shows on the unit's own screen and on a remote dashboard alert — not just a dead tug at the gate."
      },
      {
        icon: "cloud",
        label: "Spec — AssetPro 360 / CellTrac integration",
        title: "One dashboard, every charger",
        description: "Charge history and battery health by vehicle, feeding the same fleet dashboard as the rest of your charging infrastructure."
      }
    ],
    diagnostics: [
      { icon: "monitor", title: "On-screen diagnostics", description: "Fault codes and status visible directly on the unit — no separate tool required." },
      { icon: "radio", title: "Remote diagnostics", description: "Chargers and batteries monitored from AssetPro 360, not just from the ramp." },
      { icon: "wrench", title: "Predictive maintenance alerts", description: "Flags a likely fault before it becomes a stranded vehicle and an emergency call." }
    ]
  },

  cableVideo: {
    eyebrow: "Built-in cable management",
    heading: "The cable doesn't stay on the ramp. Neither does the risk.",
    description: "A charging cable left on the tarmac after a session isn't just untidy — it's a hazard. Staff forget to coil it, a tug or belt loader rolls over it, and what should be a five-year cable becomes a replacement part after five months. Altus II's cable retracts automatically into the housing the moment a session ends.",
    videoSrc: "/assets/altus/altus-cable-retract-demo.mp4",
    posterSrc: "/assets/altus/altus-cable-retract-poster.svg",
    videoCaption: "DEMO — Automatic cable retraction at end of charging session",
    bullets: [
      "Retracts automatically when charging completes — no manual coiling",
      "Keeps the ramp clear of trip and roll-over hazards",
      "Extends cable lifespan by keeping it off abrasive tarmac",
      "One less thing for ground crews to remember during a fast turn"
    ]
  },

  uspGraphics: {
    eyebrow: "At a glance",
    heading: "What makes Altus II different, in six graphics.",
    cards: [
      { title: "Auto-retracting cable", description: "Stows itself at the end of every session — no cables left on the ramp." },
      { title: "Adaptive charging", description: "Charge behavior adjusts to protect battery health over the pack's lifetime." },
      { title: "Outdoor-rated housing", description: "Built for rain, heat, and constant ramp vibration — not adapted from indoor use." },
      { title: "Dual-port pedestal", description: "Two vehicles charge simultaneously off one footprint." },
      { title: "Airport systems integration", description: "Reports directly into the SCADA and ops systems an airport already uses." },
      { title: "Multi-chemistry support", description: "Lead acid, lithium, and EV charging from a single unit." }
    ]
  },

  specs: {
    eyebrow: "Specifications",
    heading: "Full technical specifications.",
    items: [
      { label: "Charging Type", value: "DC Fast" },
      { label: "Power Output", value: "30–80 kW*" },
      { label: "Input Voltage", value: "208–480 VAC, 3-phase" },
      { label: "Output Voltage", value: "24–1000 VDC*" },
      { label: "Port Configuration", value: "Dual Port" },
      { label: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
      { label: "Connector Options", value: "Anderson, Euro, REMA" },
      { label: "Max Efficiency", value: "Up to 95%" },
      { label: "Operating Environment", value: "Outdoor Rated" },
      { label: "Regulatory Compliance", value: "UL / CE Options" },
      { label: "Mounting", value: "Pedestal" },
      { label: "Installation Environment", value: "Indoor or Outdoor" },
      { label: "Connectivity", value: "Cellular, Wi-Fi, Ethernet, OTA updates" },
      { label: "Systems Integration", value: "Airport Systems" },
      { label: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" },
      { label: "Cable Management", value: "Automatic retraction at end of session (optional feature)" },
      { label: "Off-Peak / Scheduled Charging", value: "Yes" },
      { label: "Optional Power Sharing", value: "Via Bridge Power Manager (BPM)" }
    ],
    footers: [
      "*Output range reflects platform capability — configuration is confirmed for your fleet during the site survey. [Client to confirm: existing site references an optional Level 2 (J1772) EV charging port not currently listed in the internal spec matrix — verify before publishing.]",
      "Need this as a shareable document? Download the full Altus II spec sheet (PDF) — [client to confirm link]."
    ]
  },

  trustBand: {
    cards: [
      { icon: "globe", title: "Industrial Expertise", description: "Two decades of EV fast charging for airports, warehouses, and ports, ensuring quality." },
      { icon: "battery", title: "Universal Compatibility", description: "Supports lithium, lead acid, and AGM batteries across the Minit Charger portfolio for various industrial uses." },
      { icon: "cloud", title: "Cloud-Connected Solutions", description: "Boost efficiency with real-time data, remote monitoring, and timely maintenance." }
    ]
  },

  relatedProducts: {
    eyebrow: "Related products",
    heading: "Build the rest of your charging ecosystem.",
    products: [
      {
        id: "mobilus",
        title: "Mobilus",
        description: "Mobile DC fast charging on a trailer or skid platform.",
        imageSrc: "/assets/altus/altus-related-mobilus.webp",
        imageAlt: "Mobilus mobile DC fast charger",
        href: "/products/mobilus"
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
        id: "celltrac",
        title: "CellTrac",
        description: "Wireless battery health monitoring and GPS asset tracking.",
        imageSrc: "/assets/altus/altus-related-celltrac.webp",
        imageAlt: "CellTrac battery monitoring module",
        href: "/products/celltrac"
      },
      {
        id: "assetpro",
        title: "AssetPro 360",
        description: "Real-time analytics and predictive alerts across your fleet.",
        imageSrc: "/assets/altus/altus-related-assetpro.webp",
        imageAlt: "AssetPro 360 fleet management dashboard",
        href: "/products/assetpro-360"
      }
    ]
  },

  form: {
    eyebrow: "Talk to an engineer",
    heading: "See if Altus II fits your ramp.",
    description: "One call to walk through your GSE mix, connector types, and site power — no obligation."
  },

  faq: {
    eyebrow: "Frequently asked questions",
    heading: "What buyers ask about Altus II.",
    items: [
      { q: "What is the Minit Charger Altus II?", a: "Altus II is an outdoor-rated, dual-port DC fast charger built for airport ground support equipment (GSE) — the everyday charger for tugs, belt loaders, and baggage tractors across a standard airport fleet." },
      { q: "How much power does Altus II deliver?", a: "Altus II delivers 30–80 kW of DC fast charging across two ports. Actual output depends on configuration — a charging assessment will confirm the right setup for your fleet." },
      { q: "What connectors does Altus II support?", a: "Altus II supports Anderson, Euro, and REMA connectors, matching the tugs, tractors, and belt loaders already in use across most airport GSE fleets." },
      { q: "Can Altus II charge lithium and lead-acid batteries from the same unit?", a: "Yes. Altus II supports lead-acid, lithium, and EV battery chemistries from the same dual-port charger." },
      { q: "Is Altus II rated for outdoor installation?", a: "Yes. Altus II is outdoor-rated and supports both indoor and outdoor pedestal installation, built for ramp conditions rather than adapted from an indoor design." },
      { q: "Does Altus II integrate with existing airport systems?", a: "Yes. Altus II connects via cellular, Wi-Fi, or Ethernet and integrates with airport systems, plus CellTrac and AssetPro 360 / Cumulus for fleet-wide charge and battery data." },
      { q: "Can Altus II add power sharing for a constrained electrical feed?", a: "Yes. Altus II can be paired with Bridge Power Manager (BPM), Minit Charger's intelligent power-sharing system, to allocate available power across multiple chargers on a single feed — useful where ramp electrical capacity is limited." },
      { q: "How is charging usage tracked when multiple airlines or ground handlers share a charger?", a: "AssetPro 360 / Cumulus records charge history and usage data by vehicle and session, which supports cost allocation across airlines and ground handlers sharing the same charging infrastructure." },
      { q: "Does the Altus II charging cable retract automatically?", a: "Yes, as an optional cable management feature. The charging cable retracts automatically into the housing at the end of a session, so ground crews don't need to manually coil it and it isn't left lying on the ramp where it could be a tripping hazard or run over by other vehicles." }
    ]
  },

  finalCta: {
    heading: "See if Altus II fits your everyday GSE fleet.",
    description: "Talk to an engineer about your equipment mix, connector types, and ramp power — no obligation.",
    contact: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
  }
};
