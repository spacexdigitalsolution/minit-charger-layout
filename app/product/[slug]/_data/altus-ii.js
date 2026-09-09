export const productAltusData = {
  hero: {
    eyebrow: "Altus II — Outdoor DC Fast Charger",
    heading: "Built for the ramp. Not adapted for it.",
    description: "Two ports, one pedestal, one power feed — charging tugs, loaders and small EVs where they actually park, in the weather they actually work in.",
    videoSrc: [
      "/assets/video/altus-ii-banner-1.mp4",
      "/assets/video/altus-ii-banner-2.mp4"
    ],
    posterSrc: "/assets/img/altus-ii-ramp-poster.jpg",
    posterAlt: "Altus II charger on an airport ramp",
    specRibbon: [
      { num: "80", prefix: "30–", suffix: " kW", label: "DC fast output" },
      { num: "Dual port", prefix: "", suffix: "", label: "Two vehicles, one feed" },
      { num: "Lead acid · Li · EV", prefix: "", suffix: "", label: "Chemistry support" },
      { num: "Outdoor rated", prefix: "", suffix: "", label: "Indoor or ramp-side" }
    ],
    ctas: [
      { text: "Get a charging assessment", href: "#quote", type: "primary" },
      { text: "See the specs", href: "#closer-look", type: "ghost" }
    ]
  },

  closerLook: {
    heading: "Take a closer look.",
    description: "Open only what matters to your site. Everything below is drawn from the current Altus II specification sheet.",
    sections: [
      {
        id: "power",
        title: "Power and output",
        description: "DC fast charging sized for ground support duty rather than passenger EV duty — enough power to matter between turns, without a footprint that needs its own building.",
        chips: [
          { label: "Charging type", value: "DC Fast" },
          { label: "Power output", value: "30–80 kW" },
          { label: "Input voltage", value: "208–480 VAC, 3Ø" },
          { label: "Output voltage", value: "24–1000 VDC" },
          { label: "Max efficiency", value: "Up to 95%" }
        ],
        note: "Configuration dependent. Final output and voltage range are confirmed against your fleet during the site survey.",
        imageSrc: "/assets/img/altus-ii-power-detail.jpg",
        imageAlt: "Altus II power module detail"
      },
      {
        id: "ports",
        title: "Ports and connectors",
        description: "Two ports from one pedestal and one feed, with connector options matched to the equipment already on your ramp — so nothing gets rewired to suit the charger.",
        chips: [
          { label: "Ports", value: "Dual" },
          { label: "Connectors", value: "Anderson, Euro, REMA" },
          { label: "Multiple connector options", value: "Yes" },
          { label: "Cable management", value: "Optional" }
        ],
        imageSrc: "/assets/img/altus-ii-ports.jpg",
        imageAlt: "Altus II dual ports and connectors"
      },
      {
        id: "chemistry",
        title: "Battery chemistry",
        description: "The reason most operations end up with two charger fleets is chemistry. Altus II charges lead acid, lithium and EV packs, so the transition happens on your timeline instead of the charger's.",
        chips: [
          { label: "Supported", value: "Lead acid" },
          { label: "Supported", value: "Lithium" },
          { label: "Supported", value: "EV" },
          { label: "Battery health monitoring", value: "Yes" }
        ],
        imageSrc: "/assets/img/altus-ii-battery-chemistry.jpg",
        imageAlt: "Mixed battery chemistry equipment charging"
      },
      {
        id: "siting",
        title: "Installation and siting",
        description: "Pedestal mounted, compact, and rated for indoor or outdoor placement — it can sit at the gate where equipment already stops, not in a maintenance building the crew has to drive to.",
        chips: [
          { label: "Mounting", value: "Pedestal" },
          { label: "Indoor", value: "Yes" },
          { label: "Outdoor", value: "Yes" },
          { label: "Power feed", value: "Single" },
          { label: "Footprint", value: "Compact" }
        ],
        note: "[CLIENT TO CONFIRM] Publish enclosure rating and operating temperature range once the matrix value is finalised.",
        imageSrc: "/assets/img/altus-ii-pedestal-siting.jpg",
        imageAlt: "Altus II pedestal mounted outdoors"
      },
      {
        id: "connectivity",
        title: "Connectivity and control",
        description: "Cloud connected as standard, with over-the-air updates and integration into airport systems, so charging data reaches the people planning the shift rather than staying on the unit.",
        chips: [
          { label: "Cellular", value: "4G / LTE" },
          { label: "Wi-Fi", value: "Yes" },
          { label: "Ethernet", value: "Yes" },
          { label: "OTA updates", value: "Yes" },
          { label: "Integration", value: "Airport systems" }
        ],
        imageSrc: "/assets/img/altus-ii-connectivity.jpg",
        imageAlt: "Altus II LCD showing connectivity status"
      },
      {
        id: "fleet",
        title: "Fleet data and scheduling",
        description: "Charging is only half of it. Altus II reports into Cumulus with CellTrac on the vehicle side, so battery health, charge history and maintenance alerts sit in one place.",
        chips: [
          { label: "Platform", value: "Cumulus" },
          { label: "CellTrac", value: "Compatible" },
          { label: "Charge history", value: "Yes" },
          { label: "Predictive maintenance alerts", value: "Yes" },
          { label: "Off-peak charging", value: "Scheduled" }
        ],
        imageSrc: "/assets/img/cumulus-dashboard-detail.jpg",
        imageAlt: "Cumulus fleet dashboard detail"
      },
      {
        id: "compliance",
        title: "Compliance",
        description: "UL and CE options are available so the same platform can be specified across North American and international sites.",
        chips: [
          { label: "Regulatory", value: "UL / CE options" }
        ],
        note: "[CLIENT TO CONFIRM] Brochure lists UL1564 specifically; matrix lists UL/CE options.",
        imageSrc: "/assets/img/altus-ii-compliance-plate.jpg",
        imageAlt: "Altus II regulatory compliance plate"
      }
    ]
  },

  turnaround: {
    kicker: "Turnaround",
    heading: "Charge between turns, not after shift.",
    description: "DC fast charging on both ports means a tug plugs in during the gap it already has, instead of waiting on a bay overnight.",
    bgImageSrc: "/assets/img/altus-ii-plugging-in.jpg",
    alignment: "left",
    scrim: "side"
  },

  mixedFleets: {
    kicker: "Mixed fleets",
    heading: "One charger for three chemistries.",
    description: "Lead acid, lithium and EV from the same unit, so a phased battery refresh doesn't strand the hardware you already bought.",
    bgImageSrc: "/assets/img/altus-ii-mixed-fleet.jpg",
    alignment: "right",
    scrim: "side-reverse",
    theme: "light"
  },

  rampReality: {
    kicker: "Before the survey",
    heading: "The charger is never the problem. Until it is.",
    description: "Nobody buys a charger because they want a charger. They buy one because something else in the operation keeps breaking.",
    bgImageSrc: "/assets/img/ramp-reality-bg.jpg",
    quotes: [
      {
        q: "\"We electrified the fleet, then found out we can't charge it fast enough.\"",
        a: "Altus II is DC fast charging, not overnight AC. Two ports on one pedestal means {opportunity charging} instead of a queue."
      },
      {
        q: "\"Half our equipment is lead acid, half is going lithium, and nobody wants to buy twice.\"",
        a: "One unit covers lead acid, lithium and EV, so {a mixed fleet doesn't need a mixed inventory}."
      },
      {
        q: "\"The utility quoted us a service upgrade before we could add a single charger.\"",
        a: "Altus II runs on a single power feed, and Bridge Power Manager can share available power — {often more charge points without new service}."
      }
    ]
  },

  fleetIntelligence: {
    kicker: "Beyond the charger",
    heading: "You can't schedule around a battery you can't see.",
    description: "Cumulus brings every charger and every session into one view. CellTrac reports battery health and location from the equipment itself, so a failing pack shows up before it strands a tug at a gate.",
    bgImageSrc: "/assets/img/cumulus-dashboard.jpg",
    alignment: "left",
    scrim: "side",
    theme: "light",
    pills: [
      { label: "Cumulus", desc: "fleet management platform" },
      { label: "CellTrac", desc: "on-vehicle battery monitoring" }
    ]
  },

  bpm: {
    tag: "Optional add-on",
    heading: "When the utility says no, before you've plugged anything in.",
    description: "Bridge Power Manager allocates the power you already have across chargers on a shared feed, in real time — often the difference between adding charge points this quarter and waiting on a service upgrade.",
    cta: { text: "Check what your feed will carry", href: "/contact/" },
    bgImageSrc: "/assets/img/bpm-power-sharing.jpg",
    alignment: "right",
    scrim: "side-reverse"
  },

  compare: {
    heading: "Not sure Altus II is the one?",
    description: "Three chargers cover most of what comes through the door. Here's where each one lands.",
    products: [
      { name: "Altus II", tag: "You're here", bestFor: "Standard airport GSE, outdoors", output: "30–80 kW", ports: "Dual", siting: "Indoor / outdoor", isCurrent: true },
      { name: "Magnus", tag: "Mixed fleets", bestFor: "GSE, buses, trucks, passenger EV", output: "100–200 kW", ports: "Dual", siting: "Indoor / outdoor" },
      { name: "Momentus", tag: "Indoor forklifts", bestFor: "Indoor material handling", output: "20 kW", ports: "Single", siting: "Primarily indoor" }
    ],
    links: [
      { text: "See Magnus", href: "/products/magnus/" },
      { text: "See Momentus", href: "/products/momentus/" }
    ]
  },

  faq: {
    heading: "Questions we get before a survey.",
    faqs: [
      { id: "f1", question: "Can one Altus II charge both lead acid and lithium equipment?", answer: "Yes. Altus II supports lead acid, lithium and EV chemistries from the same unit, so a mixed fleet or a staged battery refresh doesn't require a second charger type.", isOpen: false },
      { id: "f2", question: "Can it be installed outdoors at the gate?", answer: "Yes. Altus II is rated for both indoor and outdoor installation on a pedestal mount, so it can be sited where equipment already stops rather than inside a maintenance building.", isOpen: false },
      { id: "f3", question: "Do we need an electrical service upgrade to add chargers?", answer: "Not always. Altus II runs on a single power feed, and Bridge Power Manager can be added to allocate available power across chargers sharing that feed. A site survey confirms how many charge points your existing service will carry.", isOpen: false },
      { id: "f4", question: "Which connectors are available?", answer: "Anderson, Euro and REMA connector options are available, so the charger matches the tugs, loaders and tractors already in the fleet.", isOpen: false }
    ]
  },

  finalCta: {
    heading: "Bring us your fleet mix and your feed.",
    description: "An engineer will size the charge points around your equipment, your turn times and the power you already have — before anyone quotes hardware.",
    bgImageSrc: "/assets/img/altus-ii-final-cta-banner.png",
    ctas: [
      { text: "Get a charging assessment", href: "/contact/", type: "primary" },
      { text: "Download the spec sheet", href: "/resources/altus-ii-spec-sheet/", type: "ghost" }
    ],
    contactInfo: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
  }
};
