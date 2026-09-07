import React from 'react';

export const aboutPageData = {
  hero: {
    eyebrow: "About us",
    heading: "Fast charging wasn't an industry. We built it.",
    sub: "Before opportunity charging existed, Minit Charger invented it — and we've been building the charging and fleet-intelligence systems that followed ever since.",
    bgImageSrc: "/product-images/Magnus/magnus-situtation-use.webp",
    bgImageAlt: "Ground crew member operating a Minit Charger unit on an airport ramp at dusk, aircraft in background",
    bgImageDescription: "Ground crew member operating a Minit Charger unit on an airport ramp at dusk, aircraft in background"
  },
  origin: {
    eyebrow: "Our origin",
    heading: "Slow charging was costing fleets a shift. We fixed that first.",
    description: "Before opportunity charging existed, an electric forklift or ground-support vehicle went down for hours to recharge — sometimes an entire shift, sometimes a spare-battery room's worth of labor and space. Minit Charger pioneered fast, opportunity-style charging to solve exactly that problem, replacing slow overnight cycles with charging that fits inside a break instead of stopping the operation. The rest of the industry followed.",
    imageSrc: "/product-images/Maximus/maximus-internals-studio.webp",
    imageAlt: "Internal power electronics and control board of a Minit Charger unit, panel open",
    imageDescription: "Internal power electronics and control board of a Minit Charger unit, panel open"
  },
  stats: [
    { num: "Chandler, AZ", lbl: "Headquartered & engineered" },
    { num: "8", lbl: "Charging & fleet-intelligence products" },
    { num: "3", lbl: "Industries served — aviation, warehouse, low-speed fleets" },
    { num: "Est. 20xx", lbl: "Pioneers of fast charging — exact year pending confirmation" }
  ],
  quote: {
    eyebrow: "From our CEO",
    text: "Since inception, Minit Charger has pushed the limits of the industrial charging status quo. Through our strong foothold in the industry and the trust we've established with our long-time customers, we have been able to continue creating innovative products that truly address and serve the needs of our market.",
    name: "Arun Patel",
    role: "CEO, Minit Charger",
    sourceNote: "Originally published via PR Newswire, September 2019. [Client to confirm this quote is still current before republishing.]"
  },
  today: {
    eyebrow: "Today",
    heading: "One ecosystem, from the ramp to the warehouse floor.",
    description: "What started as a single fast charger is now a full ecosystem — dual-port and high-voltage chargers, mobile and onboard formats, and the battery-health and fleet-data layer that ties them together. Airports, warehouses, and low-speed fleets all run on the same underlying technology we started with.",
    linkText: "Explore our products",
    linkHref: "/products"
  },
  values: [
    {
      num: "01",
      heading: "Engineering-led, not white-labeled.",
      description: "We're a small, focused team — every charger, connector, and control board is engineered by us, not rebadged from a generic supplier. That's how a company this size keeps pace with much larger competitors.",
      imageSrc: "/product-images/Maximus/maximus-internals-studio.webp",
      imageAlt: "Minit Charger power electronics, engineered and built in-house",
      imageDescription: "Minit Charger power electronics, engineered and built in-house"
    },
    {
      num: "02",
      heading: "Proven in the field, not just the lab.",
      description: (
        <>
          Our chargers run at some of the busiest ramps and warehouse floors in the country. <span className="text-ink-950">[Client to confirm which named customers/airports can be publicly referenced here.]</span>
        </>
      ),
      imageSrc: "/product-images/Maximus/maximus-field-service.webp",
      imageAlt: "Technician servicing a Minit Charger unit in the field",
      imageDescription: "Technician servicing a Minit Charger unit in the field"
    },
    {
      num: "03",
      heading: "Safety and uptime, built in — not bolted on.",
      description: "Pre-use safety checks, incident monitoring, and predictive diagnostics are part of the platform from day one, not an add-on module.",
      imageSrc: "/product-images/Magnus/magnus-use-1.webp",
      imageAlt: "Ground crew technician using a Minit Charger touchscreen at night",
      imageDescription: "Ground crew technician using a Minit Charger touchscreen at night"
    }
  ],
  finalCta: {
    heading: "Want to see it in person?",
    description: "Talk to an engineer about your fleet, or explore the full product lineup.",
    primaryCta: { text: "Talk to an Engineer", href: "/contact" },
    secondaryCta: { text: "Explore Products", href: "/products" }
  }
};
