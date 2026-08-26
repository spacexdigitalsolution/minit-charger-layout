import { homeData2 } from './homeData2';
import { homeData3 } from './homeData3';
import SmartImage from '../components/ui/SmartImage';

export const homeData = {
  heroBanner: {
    heading: (
      <>
        Keep your fleet moving with<br />
        <span className="text-[#28A745]">end-to-end</span> rapid charging.
      </>
    ),
    description: "Smart industrial battery chargers and Cumulus visibility for warehouses, airports, and distribution centers, built for mixed fleets that cannot afford downtime.",
    primaryCta: { text: "Get a Quote", href: "#quote" },
    secondaryCta: { text: "Explore Solutions", href: "#solutions" },
    images: [
      {
        src: "/crafted_images/Home Page Slider 1.png",
        alt: "Momentus rapid charger banner",
        description: "A wide banner showing a dynamic industrial environment with an electric fleet rapidly charging."
      },
      {
        src: "/crafted_images/Home Page Slider 2.png",
        alt: "Airport tarmac operations banner",
        description: "An airport tarmac with ground support equipment parked near an aircraft."
      },
      {
        src: "/crafted_images/Home Page Slider 3.png",
        alt: "Fleet charging slider image 3",
        description: "A wide landscape view of an industrial environment showcasing fleet chargers in action."
      },
      {
        src: "/crafted_images/Home Page Slider 4.png",
        alt: "Fleet charging slider image 4",
        description: "A landscape view showing chargers providing power to industrial vehicles."
      }
    ]
  },
  logoStripFeatureGrid: {
    eyebrow: 'Trusted by industry leaders',
    logos: [
      { id: 'l1', name: 'BOEING' },
      { id: 'l2', name: 'AMERICOLD' },
      { id: 'l3', name: 'UNITED' },
      { id: 'l4', name: 'ENTERPRISE' }
    ],
    features: [
      {
        id: 'f1',
        title: 'Industrial expertise',
        description: 'Decades of EV fast charging for airports, warehouses, and ports.',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'f2',
        title: 'Universal compatibility',
        description: 'Lithium, lead-acid, and AGM solutions for mixed fleets.',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )
      },
      {
        id: 'f3',
        title: 'Cloud-connected',
        description: 'Real-time data, remote monitoring, and timely maintenance.',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M4 12a8 8 0 0 1 8-8M12 20a8 8 0 0 0 8-8" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
            <circle cx="12" cy="12" r="2" fill="currentColor" />
          </svg>
        )
      }
    ]
  },
  lightFeatureGrid: {
    eyebrow: "Operational challenges",
    heading: "Why industrial fleets switch to smart rapid charging.",
    description: "Forklift battery chargers, GSE chargers, and fleet charging management only pay off when they cut downtime, protect batteries, and fit mixed chemistries.",
    cards: [
      {
        id: 'lc1',
        title: 'Charger-related downtime',
        description: 'When material handling equipment sits waiting on a slow or failed charge, shift plans slip. Rapid industrial battery chargers with on-screen diagnostics keep MHE and GSE moving.'
      },
      {
        id: 'lc2',
        title: 'Mixed battery chemistries',
        description: 'Fleets migrating from lead-acid to lithium often run both. Minit Charger supports lithium, lead-acid, and AGM so you standardize hardware without forcing a one-chemistry rip-and-replace.'
      },
      {
        id: 'lc3',
        title: 'No visibility into battery health',
        description: 'Without CellTrac and Cumulus, maintenance reacts after failures. Cloud fleet charging management surfaces SoC, alarms, and charger status before equipment goes dark.'
      },
      {
        id: 'lc4',
        title: 'Outdoor GSE harsh conditions',
        description: 'Airport apron and port yards need outdoor-rated eGSE chargers. Altus II is built for dual-port outdoor duty with remote diagnostics for ground support fleets.'
      },
      {
        id: 'lc5',
        title: 'Multi-site standardization',
        description: '3PL and distribution networks need one industrial charging stack across warehouses. Configure Maximus, Momentus, and Cumulus once, then scale the same playbook site to site.'
      },
      {
        id: 'lc6',
        title: 'CapEx without clear ROI',
        description: 'Procurement needs a consultative quote—not consumer pricing pages. We scope fleet size, duty cycles, and install constraints so CapEx maps to measurable uptime outcomes.'
      }
    ]
  },
  darkUseCasesGrid: {
    heading: "Engineered for Every Environment",
    cards: [
      {
        id: 'uc1',
        title: 'Warehouses',
        href: '#',
        imageSrc: '/crafted_images/MOMENTUS for warehouse-01.png',
        imageAlt: 'Warehouses',
        imageDescription: "A bustling warehouse interior showing rows of shelving and electric forklifts."
      },
      {
        id: 'uc2',
        title: 'Airports',
        href: '#',
        imageSrc: '/crafted_images/Magnus Airport View 1_!.png',
        imageAlt: 'Airports',
        imageDescription: "An airport tarmac with ground support equipment parked near an aircraft."
      },
      {
        id: 'uc3',
        title: 'LSEVs',
        href: '#',
        imageSrc: '/crafted_images/Durus-01.png',
        imageAlt: 'LSEVs',
        imageDescription: "A low-speed electric vehicle navigating through a large resort campus."
      },
      {
        id: 'uc4',
        title: 'Industrial & Commercial',
        href: '#',
        imageSrc: '/crafted_images/Turbocharging warehouse MHE-01.png',
        imageAlt: 'Industrial & Commercial',
        imageDescription: "An industrial manufacturing facility showing heavy commercial equipment."
      }
    ]
  },
  bentoFeatureGrid: {
    eyebrow: "Why Minit Charger",
    heading: "Engineered advantages, not marketing checkboxes.",
    description: "Every charger ships with the diagnostics, efficiency, and installation flexibility your fleet actually runs on.",
    cards: [
      {
        id: 'bf1',
        title: 'Smart technology & diagnostics',
        description: 'On-screen diagnostics and remote monitoring surface issues before they become downtime — every unit reports back to Cumulus in real time.',
        spanClass: 'md:col-span-2 lg:row-span-2',
        icon: (
          <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
            <path d="M13 2 4 14h6l-1 8 9-12h-6l1-8Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'bf2',
        title: 'Eco-friendly efficiency',
        description: 'Minit Charger units support lead-acid, lithium, and AGM batteries natively. No hard-coding, no forced fleet migration.',
        spanClass: 'md:col-span-1 lg:col-span-2',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M12 3c4 3 6 6 6 10a6 6 0 0 1-12 0c0-4 2-7 6-10Z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'bf3',
        title: 'Versatile installation',
        description: 'Wall-mount, pedestal, or fleet-bay configurations for outdoor extremes and tight indoor footprints.',
        spanClass: 'md:col-span-1 lg:col-span-2',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M4 20V10l8-6 8 6v10M9 20v-6h6v6" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
          </svg>
        )
      },
      {
        id: 'bf4',
        title: 'Comprehensive coverage',
        description: 'From compact LSEV chargers to dual-port high-capacity systems — one vendor for your mixed fleet.',
        spanClass: 'md:col-span-2 lg:col-span-2',
        icon: (
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <rect x="3" y="7" width="18" height="12" rx="2" stroke="currentColor" strokeWidth="1.5" />
            <path d="M7 7V5a2 2 0 0 1 2-2h6a2 2 0 0 1 2 2v2" stroke="currentColor" strokeWidth="1.5" />
          </svg>
        )
      }
    ]
  },
  tallImageCardGrid: {
    cards: [
      {
        id: 'tc1',
        title: 'Warehouses',
        description: 'Uninterrupted power for round-the-clock operations.',
        imageSrc: '/crafted_images/MOMENTUS for warehouse-02.png',
        imageAlt: 'Warehouse',
        imageDescription: "Dark warehouse setting with glowing accents highlighting a charging forklift.",
        icon: (
          <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"></path>
          </svg>
        )
      },
      {
        id: 'tc2',
        title: 'Airports',
        description: 'Clean mobility for a smarter infrastructure.',
        imageSrc: '/crafted_images/ALTUS for Airport vehicle 16_9.png',
        imageAlt: 'Airport',
        imageDescription: "Airport runway at dusk with ground support vehicles in operation.",
        icon: (
          <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      },
      {
        id: 'tc3',
        title: 'Low-Speed Electric Vehicles (LSEVs)',
        description: 'Clean energy for campus, resort and community mobility.',
        imageSrc: '/crafted_images/Durus-02.png',
        imageAlt: 'LSEV',
        imageDescription: "Scenic view of a low-speed electric vehicle parked outdoors.",
        icon: (
          <svg className="w-12 h-12 text-white mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"></path>
          </svg>
        )
      }
    ]
  },
  interactiveSceneTabs: {
    eyebrow: "Environments",
    heading: "Interactive Charging Scenes",
    description: "Explore how Minit Charger fits into real-world industrial and aviation environments without disrupting operations.",
    warehouseScene: (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        <SmartImage
          src="/crafted_images/MOMENTUS for warehouse-03.png"
          alt="Interactive Warehouse Scene"
          fill
          displayHeight={540}
          displayWidth={1080}
          safeAreaHeight={540}
          safeAreaWidth={1080}
          className="object-cover"
          description="Interactive warehouse scene showing forklifts charging."
        />
      </div>
    ),
    warehouseCaption: "Maximus and Momentus chargers integrated directly onto the warehouse floor, eliminating the need for dedicated battery rooms.",
    airportScene: (
      <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-2xl border-4 border-white">
        <SmartImage
          src="/crafted_images/Magnus Airport View 1_!.png"
          alt="Interactive Airport Scene"
          fill
          className="object-cover"
          description="Interactive airport scene showing GSE charging on the tarmac."
        />
      </div>
    ),
    airportCaption: "Altus II dual-port outdoor chargers deployed at the apron, providing rapid opportunity charging for GSE."
  },
  comparisonSplit: {
    eyebrow: "Environments",
    heading: "Indoor warehouse chargers vs outdoor GSE chargers.",
    description: "Match the industrial battery charger to the site—not the other way around.",
    cards: [
      {
        id: 'cs1',
        imageSrc: '/crafted_images/Maximus Indoor.png',
        imageAlt: 'Maximus indoor high-capacity forklift battery charger',
        imageDescription: "Detailed front view of the Maximus charger unit emphasizing its robust build.",
        title: 'Indoor material handling',
        description: 'Maximus and Momentus serve warehouses, cold storage, and distribution centers where dual- or single-port forklift battery chargers need high uptime, wall or pedestal mounts, and Cumulus visibility.',
        features: [
          'High-throughput MHE fleets',
          '3PL and manufacturing floors',
          'Controlled electrical infrastructure'
        ]
      },
      {
        id: 'cs2',
        imageSrc: '/crafted_images/ALTUS for Airport vehicle 16_9.png',
        imageAlt: 'Altus II outdoor dual-port eGSE airport charger',
        imageDescription: "The Altus II dual-port eGSE charger shown in an outdoor setting.",
        title: 'Outdoor eGSE & yards',
        description: 'Altus II is an outdoor-rated dual-port GSE charger for airports, ports, and exposed fleet yards—with optional Level 2 EV port and intelligent power sharing for constrained infrastructure.',
        features: [
          'Airport ground support equipment',
          'Port and outdoor fleet yards',
          'Weather-exposed apron operations'
        ]
      }
    ]
  },
  pillStrip: {
    eyebrow: "Deployed across",
    items: [
      "Airports", "Warehouses", "Ports", "Ground Support", "Material Handling", "Last-Mile Fleets"
    ]
  },
  productSpotlight: {
    imageSrc: '/crafted_images/Meet MOMENTUs-01.png',
    imageAlt: 'Momentus industrial battery charger product view',
    imageDescription: "A sleek, industrial design of the Momentus mid-level forklift battery charger.",
    eyebrow: 'Flagship · Industrial MHE',
    heading: 'Meet Momentus.',
    description: 'Mid-level material handling charging with smart diagnostics, fast install paths, and Cumulus connectivity — built for warehouses that cannot wait on a bay.',
    badges: [
      'Smart diagnostics',
      'Mixed chemistries',
      'Net Zero contributor'
    ],
    primaryCta: { text: 'See full specs', href: '#p-momentus' },
    secondaryCta: { text: 'Request a quote', href: '#contact' }
  },
  galleryFeaturesGrid: {
    gallery: [
      {
        id: 'g1',
        imageSrc: '/crafted_images/MAGNUS-  Front view.png',
        imageAlt: 'Front View',
        imageDescription: "Front elevation of the charging unit showing the main interface screen.",
        label: 'Front View'
      },
      {
        id: 'g2',
        imageSrc: '/crafted_images/MAGNUS-  45 view-.png',
        imageAlt: '45° View',
        imageDescription: "Three-quarter perspective view highlighting the depth and side vents.",
        label: '45° View'
      },
      {
        id: 'g3',
        imageSrc: '/crafted_images/MAGNUS-  side view.png',
        imageAlt: 'Side View',
        imageDescription: "Direct side profile showing the slim form factor and mounting brackets.",
        label: 'Side View'
      },
      {
        id: 'g4',
        imageSrc: '/crafted_images/MAGNUS-  Close up view.png',
        imageAlt: 'Close-Up',
        imageDescription: "Macro shot focusing on the high-quality finish and durable materials.",
        label: 'Close-Up'
      },
      {
        id: 'g5',
        imageSrc: '/crafted_images/MAGNUS-  top view-02.png',
        imageAlt: 'Top Isometric',
        imageDescription: "Elevated isometric view providing a sense of scale and cable management.",
        label: 'Top Isometric'
      }
    ],
    features: [
      {
        id: 'gf1',
        title: 'Built for Performance',
        description: 'Robust design for demanding environments',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
          </svg>
        )
      },
      {
        id: 'gf2',
        title: 'Future Ready',
        description: 'Scalable, upgradeable, and built to evolve',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path>
          </svg>
        )
      },
      {
        id: 'gf3',
        title: 'Global Standards',
        description: 'Compliant with international safety norms',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"></path>
          </svg>
        )
      },
      {
        id: 'gf4',
        title: 'Sustainable Impact',
        description: 'Driving towards a cleaner, greener planet',
        icon: (
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
        )
      }
    ]
  },
  ...homeData2,
  ...homeData3
};
