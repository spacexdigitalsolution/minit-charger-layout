export const productData = {
  maximus: {
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Maximus", href: "/product/maximus" }
      ],
      imageSrc: "/assets/maximus/maximus-warehouse-dual-charge.webp",
      imageAlt: "Maximus",
      imageDescription: "Placeholder for Maximus banner",
      eyebrow: "Dual-port DC fast charger for high-throughput MHE fleets",
      title: "MAXIMUS",
      description: "Two vehicles, one charger. Built for the pace of continuous multi-shift operations.",
      cta: { text: "Request a Quote", href: "/contact" },
      datasheetCta: { text: "Download Spec Sheet", href: "#" }
    },
    intro: {
      eyebrow: "Product overview",
      heading: "What is the Minit Charger Maximus?",
      description: "Maximus is a dual-port 40kW DC fast charger — two independent 20kW ports — built for high-throughput material handling fleets in large warehouses and distribution centers. It charges two vehicles simultaneously from one unit, mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.",
      badges: ["Dual port", "40 kW", "AssetPro connected"],
      stats: [
        { num: "40 kW", lbl: "total output" },
        { num: "24–100", lbl: "VDC range" },
        { num: "Dual", lbl: "Port config" },
        { num: "94%", lbl: "Max efficiency" }
      ],
      gallery: [
        { src: "/assets/maximus/maximus-warehouse-dual-charge.webp", alt: "Maximus charger" }
      ]
    },
    inShort: {
      eyebrow: "In short",
      heading: "What is the Minit Charger Maximus?",
      description: "Maximus is a dual-port 40kW DC fast charger — two independent 20kW ports — built for high-throughput material handling fleets in large warehouses and distribution centers. It charges two vehicles simultaneously from one unit, mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility."
    },
    engineeringStrip: [
      { icon: "bolt", value: "40 kW", label: "total output" },
      { icon: "bolt", value: "24–100", label: "VDC range" },
      { icon: "shield", value: "Dual", label: "Port config" },
      { icon: "shield", value: "94%", label: "Max efficiency" }
    ],
    painPoints: {
      eyebrow: "Built for the pace of multi-shift",
      heading: "Where a single-port charger becomes the bottleneck.",
      description: "A high-throughput floor doesn't get a break to catch up on charging. Here's where a single port stops being enough, and how Maximus is specified against it.",
      painPoints: [
        {
          id: 'p1',
          title: "A single port becomes the queue",
          description: "When two vehicles need power at the same time and there's only one port, one of them waits — and in a multi-shift operation, waiting is the whole problem.",
          fix: "Maximus charges two vehicles at once from independent 20kW ports, so throughput doesn't stall behind a single charging queue."
        },
        {
          id: 'p2',
          title: "Multi-shift fleets outrun single-port charging",
          description: "A 3-shift warehouse doesn't get downtime to catch up — equipment needs to be ready at the start of every shift, not just some of them.",
          fix: "Maximus's dual-port, 40kW total output is built for the pace of continuous multi-shift operations, not just a single-shift facility."
        },
        {
          id: 'p3',
          title: "Higher throughput usually means a bigger cabinet",
          description: "A traditional floor-standing charger capable of this much output usually claims more aisle space than a facility can spare.",
          fix: "Modern SiC power electronics keep Maximus compact enough to wall-mount even at 40kW, so higher throughput doesn't mean a bigger footprint."
        },
        {
          id: 'p4',
          title: "Mixed battery chemistries across a growing fleet",
          description: "Lead-acid forklifts, an AGM order picker, a lithium pilot — a high-throughput fleet is often the most chemistry-mixed fleet on the floor.",
          fix: "Maximus charges lead-acid, lithium, EV, and AGM batteries from the same dual-port unit."
        },
        {
          id: 'p5',
          title: "No visibility into which port, which vehicle",
          description: "With two vehicles charging from one unit, knowing which port is doing what — and which battery needs attention — gets harder to track by hand.",
          fix: "The touchscreen shows live status for port A and port B independently, with CellTrac and AssetPro 360 tracking battery health per vehicle."
        },
        {
          id: 'p6',
          title: "Maintenance means downtime for the whole unit",
          description: "A charger that has to be pulled offline entirely for routine maintenance takes both ports down at once — doubling the impact of a single service visit.",
          fix: "Maximus opens from the front panel for filter changes and diagnostics, built to be serviced quickly on-site, on your schedule."
        }
      ]
    },
    valueProp: {
      eyebrow: "Why Maximus",
      heading: "The top-end charger for demanding multi-shift floors.",
      description: "Choose Maximus when a single-port charger is no longer enough. It delivers higher throughput than Momentus while maintaining a compact footprint — charging two vehicles at once without doubling the number of chargers across your facility.",
      features: [
        { icon: "bolt", text: "Dual 20kW ports, 40kW total" },
        { icon: "shield", text: "Wall or pedestal" },
        { icon: "battery", text: "Multi-chemistry" },
        { icon: "cloud", text: "AssetPro 360 connected" }
      ]
    },
    targetIndustries: {
      eyebrow: "Who runs on Maximus",
      items: [
        "Large Warehouses",
        "Distribution Centers",
        "Manufacturing Facilities",
        "Material Handling Fleets",
        "High-Throughput Operations"
      ]
    },
    specStory: {
      eyebrow: "Feature deep-dive",
      heading: "Every spec, translated into what it means on the floor.",
      cards: [
        {
          title: "Dual 20kW ports, 40kW total — Two vehicles, zero rationing",
          description: "Two forklifts charge at once, off the same pedestal — nobody's rationing power during a shift change."
        },
        {
          title: "Wall or pedestal mount — Fits your floor plan either way",
          description: "Mounts flush to a wall or stands on a pedestal — the same 40kW charger, whichever fits your facility."
        },
        {
          title: "Modern SiC power electronics — More throughput, less space",
          description: "Silicon Carbide power electronics deliver 40kW from a footprint a traditional floor-standing cabinet can't match."
        },
        {
          title: "Independent port status (A/B) — Know exactly what's charging",
          description: "Each port reports its own status on the touchscreen — you know exactly which vehicle is charging and which is done."
        },
        {
          title: "Lead acid, lithium, EV & AGM support — Standardize on the charger, not the battery",
          description: "Whatever chemistry makes sense per vehicle, Maximus keeps up — no fleet-wide battery mandate required."
        },
        {
          title: "208–480 VAC universal input — Works across sites, not just one",
          description: "Switch between 208V and 480V service with minimal effort — the same charger works wherever the site's electrical service lands."
        }
      ]
    },
    demo: {
      eyebrow: "DEMO — Front-panel access: control board and replaceable air filter",
      heading: "Built to be opened, not replaced",
      description: "Maximus opens from the front panel to expose the control board, power electronics, and a replaceable air filter — routine maintenance happens on-site, on your schedule, without shipping the unit out.",
      listItems: [
        { id: 'f1', text: 'Front-panel access to control board and power electronics' },
        { id: 'f2', text: 'Replaceable air filter — no specialized tools required' },
        { id: 'f3', text: 'On-screen and remote diagnostics before a technician even arrives' },
        { id: 'f4', text: 'Serviced on-site, on your schedule — not shipped back to a factory' }
      ],
      imageSrc: "/new_images/warehouse_bg.webp",
      imageAlt: "Maximus Demo",
      imageDescription: "Thumbnail of MAXIMUS video.",
      cta: { text: "Ask About Service & Support", href: "/contact" }
    },
    outdoor: {
      eyebrow: "Serviced where it's installed",
      heading: "indoors or out.",
      description: "Maximus supports optional outdoor installation alongside its primary indoor use, and applies across GSE, MHE, and warehouse deployments in the Minit Charger portfolio — a filter swap takes minutes, not a shipping label.",
      listItems: [],
      imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
      imageAlt: "Maximus Outdoor",
      imageDescription: "A MAXIMUS charger installed on a warehouse floor next to racking.",
      cta: { text: "Ask About Service & Support", href: "/contact" }
    },
    comparison: {
      eyebrow: "Why not just buy a traditional dual-vehicle charger",
      heading: "Maximus vs. a typical 40kW-class charger",
      description: "Most dual-vehicle chargers in this power class are built around an older, bulkier cabinet design. Here's what that comparison looks like on published specifications.",
      columns: [
        { id: 'c1', name: "Typical 40kW-class charger" },
        { id: 'c2', name: "Maximus", highlight: true }
      ],
      rows: [
        { id: 'r1', feature: "Power output", values: ["40 kW, dual port", "40 kW, dual port"] },
        { id: 'r2', feature: "Efficiency", values: ["Published around 90% for chargers in this class", "Up to 94%"] },
        { id: 'r3', feature: "Power electronics", values: ["Older IGBT-based technology", "Modern Silicon Carbide (SiC) power electronics"] },
        { id: 'r4', feature: "Mounting", values: ["Floor-standing only", "Wall or pedestal"] },
        { id: 'r5', feature: "Footprint & weight", values: ["Significantly larger, heavier enclosure", "Compact, lightweight enclosure*"] }
      ]
    },
    specs: {
      eyebrow: "Specifications",
      heading: "Full technical specifications.",
      description: "[Client to confirm: a GB/T connector option is noted as pending in the product positioning brief but is not yet reflected in the internal spec matrix — add once confirmed shipping.]",
      column1Label: "Specification",
      column2Label: "Value",
      specs: [
        { id: 's1', capability: "Charging Type", value: "DC Fast" },
        { id: 's2', capability: "Power Output", value: "40 kW (dual 20kW ports)" },
        { id: 's3', capability: "Input Voltage", value: "208–480 VAC, 3-phase (switchable)" },
        { id: 's4', capability: "Output Voltage", value: "24–100 VDC" },
        { id: 's5', capability: "Port Configuration", value: "Dual Port" },
        { id: 's6', capability: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV, AGM" },
        { id: 's7', capability: "Connector Options", value: "SB350, Euro, REMA" },
        { id: 's8', capability: "Max Efficiency", value: "Up to 94%" },
        { id: 's9', capability: "Operating Temperature", value: "-25°C to 50°C" },
        { id: 's10', capability: "Regulatory Compliance", value: "UL 1564" },
        { id: 's11', capability: "Mounting", value: "Wall or Pedestal" },
        { id: 's12', capability: "Installation Environment", value: "Indoor / Optional Outdoor" },
        { id: 's13', capability: "Cable Management", value: "Optional" },
        { id: 's14', capability: "Connectivity", value: "Cellular, Wi-Fi, OTA updates" },
        { id: 's15', capability: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" },
        { id: 's16', capability: "Off-Peak / Scheduled Charging", value: "Yes" }
      ]
    },
    faq: {
      heading: "Frequently asked questions",
      description: "What buyers ask about Maximus.",
      faqs: [
        {
          id: 'q1',
          question: "What is the Minit Charger Maximus?",
          answer: "Maximus is a dual-port 40kW DC fast charger built for high-throughput material handling fleets in large warehouses and distribution centers, charging two vehicles simultaneously from one unit."
        },
        {
          id: 'q2',
          question: "How much power does Maximus deliver?",
          answer: "Maximus delivers 40 kW total across two 20kW ports at up to 94% efficiency. Actual charge time depends on battery chemistry, pack size, and state of charge."
        },
        {
          id: 'q3',
          question: "Can Maximus charge two vehicles at once?",
          answer: "Yes. Maximus has two independent charging ports, so two vehicles can charge simultaneously from the same unit, each with its own status shown on the touchscreen."
        },
        {
          id: 'q4',
          question: "How is Maximus different from Momentus?",
          answer: "Momentus is a compact single-port 20kW charger for standard opportunity charging. Maximus adds a second 20kW port for 40kW total output, built for higher-utilization, multi-shift operations where a single-port charger becomes a bottleneck."
        },
        {
          id: 'q5',
          question: "What batteries does Maximus support?",
          answer: "Maximus supports lead-acid, lithium, EV, and AGM battery chemistries from the same charger, with SB350, Euro, and REMA connector options."
        },
        {
          id: 'q6',
          question: "Can Maximus be installed outdoors?",
          answer: "Maximus is primarily an indoor charger with an optional outdoor installation configuration, mounted to a wall or pedestal."
        },
        {
          id: 'q7',
          question: "How is Maximus serviced or maintained?",
          answer: "Maximus opens from the front panel to expose the control board, power electronics, and a replaceable air filter, so routine maintenance happens on-site without shipping the unit out."
        },
        {
          id: 'q8',
          question: "Does Maximus integrate with AssetPro 360?",
          answer: "Yes. Maximus connects to AssetPro 360 / Cumulus and CellTrac for remote monitoring, battery health, charge history and analytics, and predictive maintenance alerts."
        }
      ]
    },
    finalCta: {
      heading: "See if Maximus fits your fleet's next five years.",
      description: "Talk to an engineer about voltage range, connector mix, and whether one Maximus platform can replace what you were about to buy twice.",
      cta: { text: "Request a Quote", href: "#assessment" },
      datasheetCta: { text: "Download Spec Sheet", href: "#spec-sheet" },
      contact: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
    },
    relatedProducts: {
    eyebrow: "Related products",
    heading: "Build the rest of your charging ecosystem.",
      products: [
        {
          id: "momentus",
          title: "Momentus",
          description: "Compact single-port 20kW charger for standard opportunity charging.",
          imageSrc: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp",
          imageAlt: "Momentus charger",
          href: "/product/momentus"
        },
        {
          id: "magnus",
          title: "Magnus",
          description: "24–1000 VDC, one platform from GSE to high-voltage EV.",
          imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
          imageAlt: "Magnus charger",
          href: "/products/magnus"
        },
        {
          id: "celltrac",
          title: "CellTrac",
          description: "Wireless battery health monitoring and GPS asset tracking.",
          imageSrc: "/new_images/celltrac_dash.webp",
          imageAlt: "CellTrac dashboard",
          href: "/products/celltrac"
        },
        {
          id: "assetpro360",
          title: "AssetPro 360",
          description: "Real-time analytics and predictive alerts across your fleet.",
          imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
          imageAlt: "AssetPro 360",
          href: "/products/assetpro-360"
        }
      ]
    }
  },
  mobilus: {
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Mobilus", href: "/product/mobilus" }
      ],
      imageSrc: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp",
      imageAlt: "Mobilus",
      imageDescription: "Placeholder for Mobilus banner",
      eyebrow: "Mobile DC fast charger & battery energy storage",
      title: "MOBILUS",
      description: "Charger and generator in one — power that goes where you need it, not the other way around.",
      cta: { text: "Request a Quote", href: "/contact" },
      datasheetCta: { text: "Download Spec Sheet", href: "#" }
    },
    intro: {
      eyebrow: "Product overview",
      heading: "What is the Minit Charger Mobilus?",
      description: "Mobilus is a mobile DC fast charger with an onboard Battery Energy Storage System (BESS) — charger and generator in one — deployed on a trailer or skid platform to deliver charging power wherever it's needed, without a fixed electrical installation. It supports lead-acid, lithium, and EV battery chemistries with configurable connectors, and connects to AssetPro 360 / Cumulus with built-in GPS tracking for remote visibility.",
      badges: ["Charger & generator", "Trailer / skid deployed", "GPS tracked"],
      stats: [
        { num: "30–80", lbl: "kW output*" },
        { num: "24–1000", lbl: "VDC range*" },
        { num: "Config.", lbl: "Port setup" },
        { num: "95%", lbl: "Max efficiency*" }
      ],
      gallery: [
        { src: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp", alt: "Mobilus charger" }
      ]
    },
    inShort: {
      eyebrow: "In short",
      heading: "What is the Minit Charger Mobilus?",
      description: "Mobilus is a mobile DC fast charger with an onboard Battery Energy Storage System (BESS) — charger and generator in one — deployed on a trailer or skid platform to deliver charging power wherever it's needed, without a fixed electrical installation. It supports lead-acid, lithium, and EV battery chemistries with configurable connectors, and connects to AssetPro 360 / Cumulus with built-in GPS tracking for remote visibility."
    },
    engineeringStrip: [
      { icon: "bolt", value: "30–80", label: "kW output*" },
      { icon: "bolt", value: "24–1000", label: "VDC range*" },
      { icon: "shield", value: "Config.", label: "Port setup" },
      { icon: "shield", value: "95%", label: "Max efficiency*" }
    ],
    painPoints: {
      eyebrow: "Where fixed infrastructure runs out",
      heading: "Some charging needs can't wait on a utility timeline.",
      description: "A temporary gate, a construction site, an emergency deployment — none of them come with a charger already installed. Here's where that gap shows up, and how Mobilus is built against it.",
      painPoints: [
        {
          id: 'p1',
          title: "No fixed infrastructure where you need it",
          description: "A temporary gate, a construction site, a disaster-response staging area — none of them have a charger already installed, and waiting on a utility interconnection isn't an option when equipment needs power today.",
          fix: "Mobilus brings DC fast charging to any site on a trailer or skid platform, delivering power wherever it's needed without a fixed installation."
        },
        {
          id: 'p2',
          title: "A power outage strands an electric fleet",
          description: "When grid power drops at a ramp or facility, chargers that depend entirely on that feed go down with it — right when backup power matters most.",
          fix: "Mobilus's onboard Battery Energy Storage System lets it function as a charger and generator in one, delivering clean power independent of a live grid connection."
        },
        {
          id: 'p3',
          title: "Temporary demand doesn't justify permanent infrastructure",
          description: "A construction project, a temporary terminal gate, a seasonal peak — building permanent charging infrastructure for a need that might not exist in six months rarely pencils out.",
          fix: "Mobilus relocates with the demand — deploy it where it's needed, then move it to the next site when the job is done."
        },
        {
          id: 'p4',
          title: "Emergency response can't wait on a permitting timeline",
          description: "A disaster-response deployment or an emergency backup power need doesn't come with the luxury of a permitting and interconnection schedule.",
          fix: "Mobilus is outdoor-rated and mobile by design, ready to deliver power the moment it arrives on site."
        },
        {
          id: 'p5',
          title: "Mixed equipment shows up wherever you deploy",
          description: "A mobile deployment often has to serve whatever equipment happens to be on site — different battery chemistries, different connectors — not a single predictable fleet.",
          fix: "Mobilus supports lead-acid, lithium, and EV chemistries with configurable, interchangeable connectors, adapting to whatever shows up."
        },
        {
          id: 'p6',
          title: "No visibility into a charger that isn't on your property",
          description: "Equipment deployed off-site or to a remote location is easy to lose track of — is it charging, is it idle, is it even still there?",
          fix: "Built-in GPS tracking and AssetPro 360 connectivity mean Mobilus reports its location and status from wherever it's deployed."
        }
      ]
    },
    valueProp: {
      eyebrow: "Why Mobilus",
      heading: "Charger and generator in one — power that goes where you need it.",
      description: "Most chargers assume fixed infrastructure is already there. Mobilus doesn't — its onboard Battery Energy Storage System lets it deliver clean, reliable DC fast charging anywhere, whether that's a remote ramp, a construction site, or an emergency deployment.",
      features: [
        { icon: "bolt", text: "Mobile trailer / skid platform" },
        { icon: "shield", text: "Onboard BESS" },
        { icon: "battery", text: "Outdoor rated" },
        { icon: "cloud", text: "GPS tracked" }
      ]
    },
    targetIndustries: {
      eyebrow: "Who runs on Mobilus",
      items: [
        "Construction Sites",
        "Disaster Response",
        "Temporary Terminals",
        "Remote Operations",
        "Airports"
      ]
    },
    specStory: {
      eyebrow: "Feature deep-dive",
      heading: "Every spec, translated into what it means on site.",
      cards: [
        {
          title: "Mobile trailer / skid platform — Tow it, place it, start charging",
          description: "Hook it up, tow it to the site, and start charging — no electrical contractor, no permit for a new interconnection."
        },
        {
          title: "Onboard Battery Energy Storage — Clean power, even off the grid",
          description: "Reliable charging power on demand, even where the grid doesn't reach or isn't reliable."
        },
        {
          title: "Configurable output configurations — One trailer, several vehicles",
          description: "Configured to match whatever's on site, from GSE to passenger EVs, not a single fixed output."
        },
        {
          title: "Lead acid, lithium & EV support — Adapts to what's already there",
          description: "A mixed deployment doesn't need a matched fleet — Mobilus adapts to the batteries already on site."
        },
        {
          title: "Integrated cable storage — Stowed for the next move",
          description: "Cables stow in a built-in storage compartment between deployments, not tangled in a truck bed for the next job."
        },
        {
          title: "Built-in GPS tracking — Know where every unit is",
          description: "Track location and status through AssetPro 360, without a phone call to the field."
        }
      ]
    },
    demo: {
      eyebrow: "The infrastructure gap, solved",
      heading: "Power doesn't need to already be there.",
      description: "A fixed charger is only as useful as the electrical infrastructure underneath it. Mobilus flips that — its onboard Battery Energy Storage System stores and delivers power independently, so it can charge equipment at a site with no charging infrastructure at all, then relocate to the next one when the job changes.",
      listItems: [
        { id: 'f1', text: 'Functions as charger and generator in one' },
        { id: 'f2', text: 'Deploys on a trailer or skid — no fixed installation required' },
        { id: 'f3', text: 'Outdoor rated for remote and temporary sites' },
        { id: 'f4', text: 'GPS tracked, so you always know where it is' }
      ],
      imageSrc: "/new_images/warehouse_bg.webp",
      imageAlt: "Mobilus Demo",
      imageDescription: "Thumbnail of Mobilus.",
      cta: { text: "Ask About Deployment Options", href: "/contact" }
    },
    outdoor: {
      eyebrow: "This is Mobilus in the field",
      heading: "Charging power, wherever the job takes it.",
      description: "A vehicle charging in a lot with no fixed charging station in sight — this is what mobile, BESS-backed charging looks like when the infrastructure doesn't exist yet, or doesn't exist here at all.",
      listItems: [],
      imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
      imageAlt: "Mobilus in the field",
      imageDescription: "Mobilus trailer deployed.",
      cta: { text: "Ask About a Deployment", href: "/contact" }
    },
    comparison: {
      eyebrow: "Compare",
      heading: "Fixed / grid-tied vs Mobilus / self-contained",
      description: "Compare Mobilus with typical fixed chargers.",
      columns: [
        { id: 'c1', name: "Fixed Charger" },
        { id: 'c2', name: "Mobilus", highlight: true }
      ],
      rows: [
        { id: 'r1', feature: "Utility Feed", values: ["Needs a utility feed", "Onboard BESS (charger + generator)"] },
        { id: 'r2', feature: "Grid Required", values: ["Yes", "No fixed grid connection required on site"] }
      ]
    },
    specs: {
      eyebrow: "Specifications",
      heading: "Full technical specifications.",
      description: "*Output range reflects platform capability — configuration is confirmed for your deployment during the site survey. [Client to confirm: the existing site cites dual 90 kW ports (180 kW total), CCS1/CCS2 connectors, 400/480V outlets up to 128A, charging up to 4 GSE units simultaneously, and OCPP 1.6J+ compliance — none of these specific figures appear in the internal spec matrix; verify before publishing.]",
      column1Label: "Specification",
      column2Label: "Value",
      specs: [
        { id: 's1', capability: "Charging Type", value: "Mobile DC Fast" },
        { id: 's2', capability: "Power Output", value: "30–80 kW*" },
        { id: 's3', capability: "Input Voltage", value: "208–480 VAC, 3-phase" },
        { id: 's4', capability: "Output Voltage", value: "24–1000 VDC*" },
        { id: 's5', capability: "Port Configuration", value: "Configurable / multiple output configurations" },
        { id: 's6', capability: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV" },
        { id: 's7', capability: "Connector Options", value: "Configurable" },
        { id: 's8', capability: "Max Efficiency", value: "Up to 95%*" },
        { id: 's9', capability: "Operating Environment", value: "Outdoor Rated" },
        { id: 's10', capability: "Regulatory Compliance", value: "UL / CE Options" },
        { id: 's11', capability: "Installation", value: "Mobile trailer / skid platform" },
        { id: 's12', capability: "Cable Management", value: "Integrated storage" },
        { id: 's13', capability: "Energy Storage", value: "Onboard Battery Energy Storage System (BESS)" },
        { id: 's14', capability: "GPS / Asset Tracking", value: "Built-in" },
        { id: 's15', capability: "Connectivity", value: "Cellular, Wi-Fi, Ethernet, OTA updates, SCADA / ERP integration" },
        { id: 's16', capability: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" },
        { id: 's17', capability: "Intelligent Power Sharing", value: "Yes" },
        { id: 's18', capability: "Off-Peak / Scheduled Charging", value: "Yes" }
      ]
    },
    faq: {
      heading: "Frequently asked questions",
      description: "What buyers ask about Mobilus.",
      faqs: [
        {
          id: 'q1',
          question: "What is the Minit Charger Mobilus?",
          answer: "Mobilus is a mobile DC fast charger with an onboard Battery Energy Storage System (BESS) — charger and generator in one — deployed on a trailer or skid platform to deliver charging power wherever it's needed, without a fixed electrical installation."
        },
        {
          id: 'q2',
          question: "How does Mobilus provide power without a fixed electrical connection?",
          answer: "Mobilus's onboard Battery Energy Storage System stores and delivers power independently of a live grid connection, so it can charge equipment at a site with no existing charging infrastructure and be recharged or relocated as needed."
        },
        {
          id: 'q3',
          question: "What is Mobilus's power output?",
          answer: "Mobilus delivers 30–80 kW of DC fast charging with configurable port and connector options. Actual configuration depends on the deployment — a charging assessment will confirm the right setup."
        },
        {
          id: 'q4',
          question: "What types of equipment can Mobilus charge?",
          answer: "Mobilus supports lead-acid, lithium, and EV battery chemistries with configurable, interchangeable connectors, so it can adapt to airport GSE, passenger EVs, transit vehicles, and other equipment on a mixed or temporary deployment."
        },
        {
          id: 'q5',
          question: "Is Mobilus rated for outdoor and remote deployment?",
          answer: "Yes. Mobilus is outdoor-rated and built for mobile deployment on a trailer or skid platform, suited to construction sites, remote ramps, and emergency-response locations."
        },
        {
          id: 'q6',
          question: "Can Mobilus be tracked once it's deployed off-site?",
          answer: "Yes. Mobilus includes built-in GPS tracking and connects to AssetPro 360 / Cumulus, so its location, charge status, and usage are visible remotely wherever it's deployed."
        },
        {
          id: 'q7',
          question: "Does Mobilus integrate with AssetPro 360?",
          answer: "Yes. Mobilus is cloud-connected through AssetPro 360 / Cumulus for remote monitoring, charge history and analytics, and predictive maintenance alerts, the same as the rest of the Minit Charger fleet."
        },
        {
          id: 'q8',
          question: "What situations is Mobilus best suited for?",
          answer: "Mobilus is built for temporary, remote, or emergency charging — construction sites, temporary airport gates, disaster-response deployments, and any location where fixed charging infrastructure doesn't exist yet or isn't practical to install."
        }
      ]
    },
    finalCta: {
      heading: "See if Mobilus fits your deployment.",
      description: "Talk to an engineer about your environment, available power, and when you need it delivered.",
      cta: { text: "Request a Quote", href: "#assessment" },
      datasheetCta: { text: "Download Spec Sheet", href: "#spec-sheet" },
      contact: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
    },
    relatedProducts: {
    eyebrow: "Related products",
    heading: "Build the rest of your charging ecosystem.",
      products: [
        {
          id: "altusii",
          title: "Altus II",
          description: "Dual-port, outdoor-rated fast charging for everyday GSE fleets.",
          imageSrc: "/assets/Products/Altus II/Altus II Listing.webp",
          imageAlt: "Altus II charger",
          href: "/products/altus-ii"
        },
        {
          id: "magnus",
          title: "Magnus",
          description: "24–1000 VDC, one platform from GSE to high-voltage EV.",
          imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
          imageAlt: "Magnus charger",
          href: "/products/magnus"
        },
        {
          id: "celltrac",
          title: "CellTrac",
          description: "Wireless battery health monitoring and GPS asset tracking.",
          imageSrc: "/new_images/celltrac_dash.webp",
          imageAlt: "CellTrac dashboard",
          href: "/products/celltrac"
        },
        {
          id: "assetpro360",
          title: "AssetPro 360",
          description: "Real-time analytics and predictive alerts across your fleet.",
          imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
          imageAlt: "AssetPro 360",
          href: "/products/assetpro-360"
        }
      ]
    }
  },
  momentus: {
    hero: {
      breadcrumbs: [
        { label: "Home", href: "/" },
        { label: "Products", href: "/products" },
        { label: "Momentus", href: "/product/momentus" }
      ],
      // imageSrc: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp",
      imageAlt: "Momentus",
      imageDescription: "Placeholder for Momentus banner",
      eyebrow: "Compact DC fast charger for material handling equipment",
      title: "MOMENTUS",
      description: "The everyday charger for a busy warehouse floor — fast, compact, and built to keep equipment moving.",
      cta: { text: "Request a Quote", href: "/contact" },
      datasheetCta: { text: "Download Spec Sheet", href: "#" }
    },
    intro: {
      eyebrow: "Product overview",
      heading: "What is the Minit Charger Momentus?",
      description: "Momentus is a compact, single-port 20 kW DC fast charger built for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses, distribution centers, and manufacturing facilities. It mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility.",
      badges: ["Single port", "20 kW", "AssetPro connected"],
      stats: [
        { num: "20 kW", lbl: "output" },
        { num: "24–100", lbl: "VDC range" },
        { num: "Single", lbl: "Port config" },
        { num: "94%", lbl: "Max efficiency" }
      ],
      gallery: [
        { src: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp", alt: "Momentus charger" }
      ]
    },
    inShort: {
      eyebrow: "In short",
      heading: "What is the Minit Charger Momentus?",
      description: "Momentus is a compact, single-port 20 kW DC fast charger built for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses, distribution centers, and manufacturing facilities. It mounts to a wall or pedestal, supports lead-acid, lithium, EV, and AGM battery chemistries, and connects to AssetPro 360 / Cumulus for fleet-wide visibility."
    },
    engineeringStrip: [
      { icon: "bolt", value: "20 kW", label: "output" },
      { icon: "bolt", value: "24–100", label: "VDC range" },
      { icon: "shield", value: "Single", label: "Port config" },
      { icon: "shield", value: "94%", label: "Max efficiency" }
    ],
    painPoints: {
      eyebrow: "Built for the everyday floor",
      heading: "Where a compact charger actually earns its keep.",
      description: "A busy warehouse doesn't need the highest-power charger on the market — it needs one that installs fast, fits the floor plan, and keeps equipment moving. Here's where that shows up.",
      painPoints: [
        {
          id: 'p1',
          title: "Battery swapping eats labor hours every shift",
          description: "An operator pulled off the floor to swap a battery isn't picking, staging, or loading — and a spare-battery room adds its own labor and space overhead.",
          fix: "Momentus delivers fast opportunity charging between shifts and breaks, so equipment returns to operation sooner instead of waiting on a full swap cycle."
        },
        {
          id: 'p2',
          title: "Chargers eat floor space you'd rather use for racking",
          description: "A traditional floor-standing charger cabinet claims aisle space permanently, and doesn't move easily when the layout changes.",
          fix: "Modern SiC power electronics keep Momentus compact enough to wall-mount, so charging fits the floor plan instead of dictating it."
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
          fix: "Momentus switches between 208 and 480 VAC input with minimal effort, so the same charger works across sites with different electrical service."
        },
        {
          id: 'p5',
          title: "No visibility into fleet uptime until a truck goes down",
          description: "Without fleet-wide charge and battery-health data, the first sign of a problem is usually a forklift stalled mid-aisle.",
          fix: "CellTrac and AssetPro 360 track battery health, charge history, and predictive maintenance alerts, flagging a failing battery before it strands equipment."
        },
        {
          id: 'p6',
          title: "Installation drags out the project timeline",
          description: "A charger that needs a specialized crew or custom electrical work turns a simple equipment purchase into a multi-week installation project.",
          fix: "Momentus installs to a wall or pedestal with a single AC input connection — built for quick, straightforward installation."
        }
      ]
    },
    valueProp: {
      eyebrow: "Why Momentus",
      heading: "The everyday charger for a busy warehouse floor.",
      description: "Not every operation needs Magnus's high-voltage range or Maximus's dual-port throughput — most need a compact, reliable charger that installs fast and keeps material handling equipment moving. Momentus is Minit Charger's answer to that everyday reliability requirement.",
      features: [
        { icon: "bolt", text: "Single-port 20 kW" },
        { icon: "shield", text: "Wall or pedestal" },
        { icon: "battery", text: "Multi-chemistry" },
        { icon: "cloud", text: "AssetPro 360 connected" }
      ]
    },
    targetIndustries: {
      eyebrow: "Who runs on Momentus",
      items: [
        "Warehouses",
        "Distribution Centers",
        "Manufacturing",
        "Forklift Fleets",
        "Industrial Facilities"
      ]
    },
    specStory: {
      eyebrow: "Feature deep-dive",
      heading: "Every spec, translated into what it means on the floor.",
      cards: [
        {
          title: "Wall-mount installation — Off the floor entirely",
          description: "Mounts flush to a wall, taking up vertical space you weren't using anyway — no aisle footprint at all."
        },
        {
          title: "Pedestal-mount installation — Or freestanding, wherever it fits",
          description: "Set it on a pedestal wherever a wall isn't an option — the same charger, a different footprint."
        },
        {
          title: "Modern SiC power electronics — More capability, less space",
          description: "Silicon Carbide power electronics deliver charging capability from a footprint a traditional cabinet can't match."
        },
        {
          title: "On-screen diagnostics — Status at a glance",
          description: "Port status and battery info shown right on the unit — a technician doesn't need a laptop to see what's going on."
        },
        {
          title: "Lead acid, lithium, EV & AGM support — Standardize on the charger, not the battery",
          description: "Whatever chemistry makes sense per vehicle, Momentus keeps up — no fleet-wide battery mandate required."
        },
        {
          title: "208–480 VAC universal input — Works across sites, not just one",
          description: "Switch between 208V and 480V service with minimal effort — the same charger works wherever the site's electrical service lands."
        }
      ]
    },
    demo: {
      eyebrow: "DEMO — Wall and pedestal installation, side by side",
      heading: "See it in action",
      description: "Whether it's mounted to a wall to save floor space or set up on a pedestal for flexible placement, Momentus installs the same way every time: fast, straightforward, no specialized crew required.",
      listItems: [
        { id: 'f1', text: 'Wall or pedestal mount, same charger either way' },
        { id: 'f2', text: 'Single AC input connection — no custom electrical work' },
        { id: 'f3', text: 'Touchscreen commissioning, no laptop required' },
        { id: 'f4', text: 'Switches between 208V and 480V input with minimal effort' }
      ],
      imageSrc: "/new_images/warehouse_bg.webp",
      imageAlt: "Momentus Demo",
      imageDescription: "Thumbnail of Momentus.",
      cta: { text: "Ask About Installation", href: "/contact" }
    },
    comparison: {
      eyebrow: "Why not just buy a traditional charger cabinet",
      heading: "Momentus vs. a typical single-purpose charger",
      description: "Most industrial chargers in this class are built around an older, bulkier cabinet design. Here's what that comparison looks like on published specifications.",
      columns: [
        { id: 'c1', name: "Typical single-purpose charger" },
        { id: 'c2', name: "Momentus", highlight: true }
      ],
      rows: [
        { id: 'r1', feature: "Footprint / architecture", values: ["Large floor-standing cabinet", "Compact wall or pedestal enclosure"] },
        { id: 'r2', feature: "Power electronics", values: ["Older IGBT-based technology", "Modern Silicon Carbide (SiC) power electronics"] },
        { id: 'r3', feature: "Installation flexibility", values: ["Fixed floor-standing placement only", "Wall-mount or pedestal-mount, indoor or outdoor"] }
      ]
    },
    specs: {
      eyebrow: "Specifications",
      heading: "Full technical specifications.",
      description: "[Client to confirm before publishing any named-competitor comparison.]",
      column1Label: "Specification",
      column2Label: "Value",
      specs: [
        { id: 's1', capability: "Charging Type", value: "DC Fast" },
        { id: 's2', capability: "Power Output", value: "20 kW" },
        { id: 's3', capability: "Input Voltage", value: "208–480 VAC, 3-phase (switchable)" },
        { id: 's4', capability: "Output Voltage", value: "24–100 VDC" },
        { id: 's5', capability: "Port Configuration", value: "Single Port" },
        { id: 's6', capability: "Battery Chemistry Support", value: "Lead Acid, Lithium, EV, AGM" },
        { id: 's7', capability: "Connector Options", value: "SB350, Euro, REMA" },
        { id: 's8', capability: "Max Efficiency", value: "Up to 94%" },
        { id: 's9', capability: "Operating Temperature", value: "-25°C to 50°C" },
        { id: 's10', capability: "Regulatory Compliance", value: "UL 1564" },
        { id: 's11', capability: "Mounting", value: "Wall or Pedestal" },
        { id: 's12', capability: "Installation Environment", value: "Indoor or Outdoor" },
        { id: 's13', capability: "Cable Management", value: "Optional" },
        { id: 's14', capability: "Connectivity", value: "Cellular, Wi-Fi, OTA updates" },
        { id: 's15', capability: "Fleet Integration", value: "CellTrac, AssetPro 360 / Cumulus" },
        { id: 's16', capability: "Off-Peak / Scheduled Charging", value: "Yes" }
      ]
    },
    faq: {
      heading: "Frequently asked questions",
      description: "What buyers ask about Momentus.",
      faqs: [
        {
          id: 'q1',
          question: "What is the Minit Charger Momentus?",
          answer: "Momentus is a compact, single-port 20kW DC fast charger designed for opportunity charging of industrial electric vehicles — forklifts, pallet jacks, and other material handling equipment — in warehouses and distribution centers."
        },
        {
          id: 'q2',
          question: "How much power does Momentus deliver?",
          answer: "Momentus delivers 20 kW from a single port at up to 94% efficiency. Actual charge time depends on battery chemistry, pack size, and state of charge."
        },
        {
          id: 'q3',
          question: "Can Momentus be wall-mounted or does it need a pedestal?",
          answer: "Both are supported. Momentus installs to a wall to save floor space, or on a pedestal where a wall mount isn't an option — the same charger, two installation choices."
        },
        {
          id: 'q4',
          question: "What batteries does Momentus support?",
          answer: "Momentus supports lead-acid, lithium, EV, and AGM battery chemistries from the same charger, with SB350, Euro, and REMA connector options."
        },
        {
          id: 'q5',
          question: "Can Momentus run on both 208V and 480V power?",
          answer: "Yes. Momentus accepts a universal 208–480 VAC, 3-phase input and switches between 208V and 480V service with minimal effort, so the same charger works across sites with different electrical service."
        },
        {
          id: 'q6',
          question: "How is Momentus different from Maximus?",
          answer: "Momentus is a compact single-port 20kW charger built for efficient opportunity charging where the higher power or dual-port throughput of Maximus isn't required. Maximus adds a second port and higher power output for higher-utilization, multi-shift operations."
        },
        {
          id: 'q7',
          question: "Does Momentus integrate with AssetPro 360?",
          answer: "Yes. Momentus connects to AssetPro 360 / Cumulus and CellTrac for remote monitoring, battery health, charge history and analytics, and predictive maintenance alerts."
        },
        {
          id: 'q8',
          question: "Is Momentus suitable for outdoor installation?",
          answer: "Yes, Momentus supports both indoor and outdoor installation, though it's most commonly deployed indoors in warehouses and distribution centers."
        }
      ]
    },
    finalCta: {
      heading: "See if Momentus fits your floor.",
      description: "Talk to an engineer about your equipment mix, electrical service, and installation timeline.",
      cta: { text: "Request a Quote", href: "#assessment" },
      datasheetCta: { text: "Download Spec Sheet", href: "#spec-sheet" },
      contact: "MINIT CHARGER — CHANDLER, AZ — [PHONE / EMAIL: CLIENT TO CONFIRM]"
    },
    relatedProducts: {
    eyebrow: "Related products",
    heading: "Build the rest of your charging ecosystem.",
      products: [
        {
          id: "maximus",
          title: "Maximus",
          description: "Dual-port, higher-throughput charging for multi-shift operations.",
          imageSrc: "/new_images/industry_warehouse_1786134258340.webp",
          imageAlt: "Maximus charger",
          href: "/product/maximus"
        },
        {
          id: "magnus",
          title: "Magnus",
          description: "24–1000 VDC, one platform from GSE to high-voltage EV.",
          imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
          imageAlt: "Magnus charger",
          href: "/products/magnus"
        },
        {
          id: "celltrac",
          title: "CellTrac",
          description: "Wireless battery health monitoring and GPS asset tracking.",
          imageSrc: "/new_images/celltrac_dash.webp",
          imageAlt: "CellTrac dashboard",
          href: "/products/celltrac"
        },
        {
          id: "assetpro360",
          title: "AssetPro 360",
          description: "Real-time analytics and predictive alerts across your fleet.",
          imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
          imageAlt: "AssetPro 360",
          href: "/products/assetpro-360"
        }
      ]
    }
  }
};
