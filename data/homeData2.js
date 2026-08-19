export const homeData2 = {
  productCatalogList: {
    eyebrow: "Product line",
    heading: "Cutting-edge charging solutions, by use case.",
    description: "Purpose-built systems designed for efficiency and reliability across your operation.",
    jumpLinks: [
      { id: "j1", label: "Aviation", href: "#aviation" },
      { id: "j2", label: "Warehouse", href: "#warehouse" },
      { id: "j3", label: "Low Speed Vehicles", href: "#lsv" },
      { id: "j4", label: "Vehicle Tracking", href: "#tracking" }
    ],
    industries: [
      {
        id: "aviation",
        name: "Aviation (Airport GSE)",
        parentProducts: [
          {
            id: "p-altus",
            badge: "Outdoor rated",
            imageSrc: "/product-images/Altus II/ALTUS II.14.webp",
            imageAlt: "Altus II outdoor dual-port eGSE charger",
            imageDescription: "A robust outdoor charger unit featuring intuitive screen diagnostics.",
            eyebrow: "Outdoor · EV-ready",
            title: "Altus II",
            description: "Outdoor dual-port eGSE charger with optional Level 2 EV port, intelligent power sharing, and weather-minded construction for aprons, yards, and exposed sites.",
            specs: [
              { label: "Ports", value: "Dual · ~20 kW each" },
              { label: "Environment", value: "Outdoor rated" },
              { label: "Battery support", value: "Li-ion / Lead-acid / AGM" },
              { label: "Connectivity", value: "Cumulus cloud" }
            ],
            features: [
              "On-screen diagnostics",
              "Optional Level 2 EV",
              "Adaptive charging"
            ],
            useCases: "Airports · Ports · Outdoor fleet yards",
            primaryCta: { text: "Talk to sales", href: "#contact" },
            secondaryCta: { text: "Request a quote", href: "#contact" },
            reverse: false,
            childProducts: [
              {
                id: "c-magnus",
                title: "Magnus",
                badge: "Hardware",
                specs: [
                  { label: "Type", value: "Pedestal" },
                  { label: "Power", value: "High-yield" }
                ],
                description: "Our largest, most resilient outdoor pedestal engineered specifically for high-traffic airport hubs. Features fully integrated Cumulus reporting.",
                ctaText: "View Magnus",
                href: "/product/magnus",
                imageSrc: "/product-images/Ultimate/9.1918.webp"
              },
              {
                id: "c-mobilus",
                title: "Mobilus",
                badge: "Hardware",
                specs: [
                  { label: "Form", value: "Mobile Unit" },
                  { label: "Use", value: "Temporary" }
                ],
                description: "A completely portable, temporary charging unit for remote aprons and yards that lack immediate fixed electrical infrastructure.",
                ctaText: "View Mobilus",
                href: "/product/mobile-charging-unit",
                imageSrc: "/product-images/Mobilus/3D MODLE.10.webp"
              },
              {
                id: "c-celltrac-1",
                title: "CellTrac",
                badge: "Telematics",
                specs: [
                  { label: "Mount", value: "Onboard" },
                  { label: "Tracking", value: "GPS & SoC" }
                ],
                description: "An advanced onboard Battery Management System providing high-resolution GPS and State of Charge (SoC) monitoring for all GSE equipment.",
                ctaText: "View CellTrac",
                href: "/product/celltrac",
                imageSrc: "/product-images/Cell trac/Render.2055.webp"
              },
              {
                id: "c-cumulus-1",
                title: "Cumulus",
                badge: "Software",
                specs: [
                  { label: "Platform", value: "Cloud SaaS" },
                  { label: "Data", value: "Real-time" }
                ],
                description: "Comprehensive fleet-wide monitoring and analytics software layered directly on top of your airport charging ecosystem.",
                ctaText: "View Cumulus",
                href: "/product/cumulus",
                imageSrc: "/product-images/CMS/CMS.1.webp"
              }
            ]
          }
        ]
      },
      {
        id: "warehouse",
        name: "Warehouse & Manufacturing",
        parentProducts: [
          {
            id: "p-maximus",
            badge: "Indoor · High-capacity",
            imageSrc: "/product-images/Maximus/MAXIMUS.webp",
            imageAlt: "Maximus high-capacity indoor dual-port charger",
            imageDescription: "A high-capacity indoor charger station suited for demanding warehouse floors.",
            eyebrow: "Indoor · High-capacity",
            title: "Maximus",
            description: "Dual-port indoor high-capacity charger sized for large-scale warehouse and distribution fleets that cannot bottleneck at the bay.",
            specs: [
              { label: "Ports", value: "Dual" },
              { label: "Environment", value: "Indoor" },
              { label: "Battery support", value: "Li-ion / Lead-acid / AGM" },
              { label: "Connectivity", value: "Cumulus cloud" }
            ],
            features: [
              "High-capacity delivery",
              "On-screen diagnostics",
              "Net Zero build"
            ],
            useCases: "Warehouses · Distribution centers · Large indoor fleets",
            primaryCta: { text: "Talk to sales", href: "#contact" },
            secondaryCta: { text: "Request a quote", href: "#contact" },
            reverse: true,
            childProducts: [
              {
                id: "c-momentus",
                title: "Momentus",
                badge: "Hardware",
                specs: [
                  { label: "Mount", value: "Wall / Pole" },
                  { label: "Class", value: "Mid-level" }
                ],
                description: "A highly reliable mid-level indoor forklift charger balancing performance and fast installation for standard indoor warehouse fleets.",
                ctaText: "View Momentus",
                href: "/product/momentus",
                imageSrc: "/product-images/Momentus/Momentus.2100.webp"
              },
              {
                id: "c-celltrac-2",
                title: "CellTrac",
                badge: "Telematics",
                specs: [
                  { label: "Mount", value: "Onboard" },
                  { label: "Tracking", value: "GPS & SoC" }
                ],
                description: "Onboard telematics unit for per-vehicle battery and asset tracking, ensuring your material handling fleets stay fully operational.",
                ctaText: "View CellTrac",
                href: "/product/celltrac",
                imageSrc: "/product-images/Cell trac/Render.2055.webp"
              },
              {
                id: "c-cumulus-2",
                title: "Cumulus",
                badge: "Software",
                specs: [
                  { label: "Platform", value: "Cloud SaaS" },
                  { label: "Data", value: "Real-time" }
                ],
                description: "The centralized cloud analytics and reporting layer, giving warehouse operators full operational transparency and proactive alerts.",
                ctaText: "View Cumulus",
                href: "/product/cumulus",
                imageSrc: "/product-images/CMS/CMS.1.webp"
              }
            ]
          }
        ]
      },
      {
        id: "lsv",
        name: "Low Speed Vehicles",
        parentProducts: [
          {
            id: "p-durus",
            badge: "Compact · Mobility",
            imageSrc: "/product-images/Durus/DCXC.webp",
            imageAlt: "Durus compact charger for low-speed electric vehicles",
            imageDescription: "A small, highly portable charging device designed for mobility.",
            eyebrow: "Compact · Built-in BMS",
            title: "Durus",
            description: "Compact charging ideal for low-speed electric vehicles and lighter industrial mobility fleets. Standardized with built-in battery management systems.",
            specs: [
              { label: "Form", value: "Compact / Portable" },
              { label: "Environment", value: "Mixed use" },
              { label: "Battery support", value: "LSV standards" },
              { label: "Connectivity", value: "Cumulus cloud" }
            ],
            features: [
              "Ultra-compact footprint",
              "Built-in BMS",
              "Plug-and-play"
            ],
            useCases: "Golf courses · AGVs · Utility fleets",
            primaryCta: { text: "Talk to sales", href: "#contact" },
            secondaryCta: { text: "Request a quote", href: "#contact" },
            reverse: false,
            childProducts: [
              {
                id: "c-celltrac-3",
                title: "CellTrac",
                badge: "Telematics",
                specs: [
                  { label: "Mount", value: "Onboard" },
                  { label: "Tracking", value: "GPS & SoC" }
                ],
                description: "Seamlessly integrates with lighter industrial mobility fleets to provide an additional layer of critical GPS tracking and SoC visibility.",
                ctaText: "View CellTrac",
                href: "/product/celltrac",
                imageSrc: "/product-images/Cell trac/Render.2055.webp"
              },
              {
                id: "c-cumulus-3",
                title: "Cumulus",
                badge: "Software",
                specs: [
                  { label: "Platform", value: "Cloud SaaS" },
                  { label: "Data", value: "Real-time" }
                ],
                description: "Fleet-level reporting and health monitoring dashboard that centralizes data for widely distributed low speed vehicle fleets.",
                ctaText: "View Cumulus",
                href: "/product/cumulus",
                imageSrc: "/product-images/CMS/CMS.1.webp"
              }
            ]
          }
        ]
      },
      {
        id: "tracking",
        name: "Vehicle & Driver Tracking",
        parentProducts: [
          {
            id: "p-celltrac-parent",
            badge: "Onboard · Telematics",
            imageSrc: "/product-images/Cell trac/Render.2055.webp",
            imageAlt: "CellTrac onboard smart battery management module",
            imageDescription: "A compact, intelligent battery management module with connected wires.",
            eyebrow: "Onboard · Tracking",
            title: "CellTrac",
            description: "Dedicated onboard BMS featuring GPS tracking, State of Charge monitoring, alarms, and direct cloud connection.",
            specs: [
              { label: "Mounting", value: "Onboard vehicle" },
              { label: "Sensors", value: "GPS / SoC / Temp" },
              { label: "Alerts", value: "Real-time alarms" },
              { label: "Connectivity", value: "Cumulus direct" }
            ],
            features: [
              "GPS location tracking",
              "Driver behavior monitoring",
              "Battery health analytics"
            ],
            useCases: "Fleet optimization · Mixed vehicle tracking · Equipment monitoring",
            primaryCta: { text: "Talk to sales", href: "#contact" },
            secondaryCta: { text: "Request a quote", href: "#contact" },
            reverse: true,
            childProducts: [
              {
                id: "c-cumulus-4",
                title: "Cumulus",
                badge: "Software",
                specs: [
                  { label: "Platform", value: "Cloud SaaS" },
                  { label: "Data", value: "Real-time" }
                ],
                description: "The primary command center and dashboard that natively consumes all of CellTrac's onboard data to deliver actionable real-time insights.",
                ctaText: "View Cumulus",
                href: "/product/cumulus",
                imageSrc: "/product-images/CMS/CMS.1.webp"
              },
              {
                id: "c-mobilus-2",
                title: "Mobilus",
                badge: "Hardware",
                specs: [
                  { label: "Form", value: "Mobile Unit" },
                  { label: "Use", value: "Temporary" }
                ],
                description: "A rugged, portable outdoor charger that comes natively equipped with integrated GPS and Asset Tracking right out of the box.",
                ctaText: "View Mobilus",
                href: "/product/mobile-charging-unit",
                imageSrc: "/product-images/Mobilus/3D MODLE.10.webp"
              }
            ]
          }
        ]
      }
    ]
  }
};
