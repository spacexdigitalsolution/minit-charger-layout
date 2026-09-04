/**
 * Centralized Product Registry and Filtering Logic
 * 
 * Based on:
 * 1. Product Comparison Matrix
 * 2. PRODUCT_INDUSTRY_GROUPING
 */

export const productRegistry = [
  {
    id: "altus-ii",
    title: "Altus II",
    cardDescription: "Outdoor-rated dual-port DC fast charger for GSE.",
    imageSrc: "/assets/Products/Altus II/Altus II Listing.webp",
    imageAlt: "Altus II charger",
    href: "/product/altus-ii",
    category: "Hardware",
    metadata: {
      primaryApplication: "Airport GSE",
      chargingType: "DC Fast",
      typicalCustomer: "Airports, Airlines, Ground Handlers",
      bestFor: "Standard airport GSE fleets",
      portConfiguration: "Dual Port",
      installation: "Pedestal",
      indoorOutdoor: "Both"
    },
    industries: ["aviation"],
    hierarchy: {
      aviation: "parent"
    }
  },
  {
    id: "magnus",
    title: "Magnus",
    cardDescription: "One charger for virtually any fleet with expandable configurations.",
    imageSrc: "/assets/Products/Magnus/Magnus Hardware Listing.webp",
    imageAlt: "Magnus charger",
    href: "/product/magnus",
    category: "Hardware",
    metadata: {
      primaryApplication: "Universal Mixed Fleet",
      chargingType: "DC Fast",
      typicalCustomer: "Airports, Fleet Operators, Transit, Ports",
      bestFor: "Mixed fleets with varying battery platforms",
      portConfiguration: "Dual Port (expandable)",
      installation: "Pedestal",
      indoorOutdoor: "Both"
    },
    industries: ["aviation", "commercial", "warehouse"],
    hierarchy: {
      aviation: "child",
      warehouse: "child"
    }
  },
  {
    id: "maximus",
    title: "Maximus",
    cardDescription: "High-throughput dual-port charging for industrial operations.",
    imageSrc: "/assets/maximus/maximus-warehouse-dual-charge.webp",
    imageAlt: "Maximus industrial charger",
    href: "/product/maximus",
    category: "Hardware",
    metadata: {
      primaryApplication: "High-Throughput Industrial",
      chargingType: "DC Fast",
      typicalCustomer: "Large Warehouses, Distribution Centers",
      bestFor: "Multi-shift industrial operations",
      portConfiguration: "Dual Port",
      installation: "Wall or Pedestal",
      indoorOutdoor: "Indoor / Optional Outdoor"
    },
    industries: ["warehouse"],
    hierarchy: {
      warehouse: "parent"
    }
  },
  {
    id: "momentus",
    title: "Momentus",
    cardDescription: "Compact opportunity charging for indoor forklift operations.",
    imageSrc: "/assets/Products/Momentus/MOMENTUs Hardware Listing.webp",
    imageAlt: "Momentus charger",
    href: "/product/momentus",
    category: "Hardware",
    metadata: {
      primaryApplication: "Industrial / Forklift",
      chargingType: "DC Fast",
      typicalCustomer: "Warehouses, Manufacturing",
      bestFor: "Indoor forklift operations",
      portConfiguration: "Single Port",
      installation: "Wall or Pedestal",
      indoorOutdoor: "Primarily Indoor"
    },
    industries: ["warehouse"],
    hierarchy: {
      warehouse: "child"
    }
  },
  {
    id: "pharus",
    title: "Pharus",
    cardDescription: "Reliable passenger EV charging for workplaces and public facilities.",
    imageSrc: "/assets/Products/Altus II/Altus II Listing.webp", // Placeholder
    imageAlt: "Pharus charger",
    href: "/product/pharus",
    category: "Hardware",
    metadata: {
      primaryApplication: "Passenger EV",
      chargingType: "Level 2 AC",
      typicalCustomer: "Businesses, Municipalities, Parking Facilities",
      bestFor: "Workplace & public EV charging",
      portConfiguration: "Single or Dual",
      installation: "Pedestal",
      indoorOutdoor: "Both"
    },
    industries: ["commercial"],
    hierarchy: {}
  },
  {
    id: "durus",
    title: "Durus",
    cardDescription: "Compact onboard AC charger with integrated battery management.",
    imageSrc: "/assets/Products/Durus/Durus Hardware Listing.webp", // Fallback
    imageAlt: "Durus charger",
    href: "/product/durus",
    category: "Hardware",
    metadata: {
      primaryApplication: "Small Electric Equipment",
      chargingType: "Onboard AC",
      typicalCustomer: "Golf Courses, AGVs, Utility Fleets",
      bestFor: "Small equipment requiring onboard charging",
      portConfiguration: "Single Port",
      installation: "Onboard Vehicle",
      indoorOutdoor: "Primarily Indoor"
    },
    industries: ["lsv"],
    hierarchy: {
      lsv: "parent"
    }
  },
  {
    id: "mobilus",
    title: "Mobilus",
    cardDescription: "Mobile DC fast charging on a trailer or skid platform.",
    imageSrc: "/assets/Products/Mobilus/MOBILUS Hardware Listing.webp",
    imageAlt: "Mobilus mobile charger",
    href: "/product/mobilus",
    category: "Hardware",
    metadata: {
      primaryApplication: "Mobile Charging & Energy Storage",
      chargingType: "Mobile DC Fast",
      typicalCustomer: "Airports, Utilities, Construction, Emergency Response",
      bestFor: "Temporary, remote, or emergency charging",
      portConfiguration: "Multiple output configurations",
      installation: "Mobile Trailer / Skid",
      indoorOutdoor: "Outdoor"
    },
    industries: ["aviation", "tracking"],
    hierarchy: {
      aviation: "child",
      tracking: "child"
    }
  },
  {
    id: "celltrac",
    title: "CellTrac",
    cardDescription: "Onboard BMS with GPS tracking and cloud connectivity.",
    imageSrc: "/new_images/celltrac_dash.webp",
    imageAlt: "CellTrac dashboard",
    href: "/product/celltrac",
    category: "Software",
    metadata: {
      primaryApplication: "Vehicle/Driver Tracking",
      chargingType: "N/A",
      typicalCustomer: "Fleet Managers",
      bestFor: "Onboard tracking and BMS",
      portConfiguration: "N/A",
      installation: "Onboard",
      indoorOutdoor: "Both"
    },
    industries: ["aviation", "warehouse", "lsv", "tracking"],
    hierarchy: {
      tracking: "parent",
      aviation: "child",
      warehouse: "child",
      lsv: "child"
    }
  },
  {
    id: "assetpro-360",
    title: "AssetPro 360",
    cardDescription: "Fleet-level reporting, analytics, and infrastructure dashboard.",
    imageSrc: "/assets/Products/Cumulus/Cumulus Software Lisitng.webp",
    imageAlt: "AssetPro 360 dashboard",
    href: "/product/assetpro-360",
    category: "Software",
    metadata: {
      primaryApplication: "Fleet Management",
      chargingType: "N/A",
      typicalCustomer: "Fleet Managers",
      bestFor: "Fleet analytics and reporting",
      portConfiguration: "N/A",
      installation: "Cloud",
      indoorOutdoor: "N/A"
    },
    industries: ["aviation", "warehouse", "lsv", "tracking"],
    hierarchy: {
      aviation: "child",
      warehouse: "child",
      lsv: "child",
      tracking: "child"
    }
  }
];

/**
 * Returns a list of related products dynamically based on the current context.
 * 
 * @param {Object} options
 * @param {string} [options.currentProductId] - The slug of the current product being viewed.
 * @param {string} [options.currentIndustryId] - The slug of the current industry being viewed.
 * @param {number} [options.maxItems=3] - Maximum number of products to return.
 * @returns {Array} List of related products formatted for the RelatedProducts component.
 */
export function getRelatedProducts({ currentProductId, currentIndustryId, maxItems = 3 }) {
  let related = [];

  if (currentProductId) {
    const currentProduct = productRegistry.find(p => p.id === currentProductId);
    if (!currentProduct) return [];

    // Prioritize products in the same primary industries
    const primaryIndustries = currentProduct.industries || [];
    
    // Find parents in those industries
    const parents = productRegistry.filter(p => 
      p.id !== currentProductId &&
      primaryIndustries.some(ind => p.hierarchy?.[ind] === 'parent')
    );

    // Find children in those industries
    const children = productRegistry.filter(p => 
      p.id !== currentProductId &&
      primaryIndustries.some(ind => p.hierarchy?.[ind] === 'child')
    );

    // If current is a child, prioritize parents. If parent, prioritize children.
    const isParentAnywhere = primaryIndustries.some(ind => currentProduct.hierarchy?.[ind] === 'parent');
    
    if (isParentAnywhere) {
      related = [...children, ...parents];
    } else {
      related = [...parents, ...children];
    }
  } else if (currentIndustryId) {
    // For industry pages
    const parents = productRegistry.filter(p => p.hierarchy?.[currentIndustryId] === 'parent');
    const children = productRegistry.filter(p => p.hierarchy?.[currentIndustryId] === 'child');
    related = [...parents, ...children];
  }

  // Remove duplicates
  const uniqueRelated = Array.from(new Set(related));

  // Limit items
  const limitedRelated = uniqueRelated.slice(0, maxItems);

  // Format to match the expected RelatedProducts component props
  return limitedRelated.map(p => ({
    id: p.id,
    title: p.title,
    description: p.cardDescription,
    imageSrc: p.imageSrc,
    imageAlt: p.imageAlt,
    href: p.href
  }));
}
