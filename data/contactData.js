import React from 'react';

export const contactData = {
  contactForm: {
    eyebrow: "Get in Touch",
    heading: "Let's power your fleet.",
    description: "Have questions about our chargers, software, or an upcoming project? Fill out the form and our industrial charging experts will get back to you shortly.",
    contactDetails: [
      {
        id: 'cd1',
        icon: <svg className="h-5 w-5 text-volt-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>,
        content: (
          <div>
            <h3 className="font-semibold text-ink-950">Sales & Support</h3>
            <p className="mt-1 text-[#4C5C54]">1-800-MINIT-CH (646-4824)</p>
          </div>
        )
      },
      {
        id: 'cd2',
        icon: <svg className="h-5 w-5 text-volt-dim" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>,
        content: (
          <div>
            <h3 className="font-semibold text-ink-950">Email Us</h3>
            <p className="mt-1 text-[#4C5C54]">sales@minitcharger.com</p>
          </div>
        )
      }
    ]
  },
  supportRouting: {
    heading: "How else can we help?",
    cards: [
      {
        id: 'sr1',
        title: "Technical Support",
        description: "Need help with a charger or Cumulus?",
        linkText: "Open Support Ticket",
        href: "#"
      },
      {
        id: 'sr2',
        title: "Warranty Claims",
        description: "Register a product or file a warranty claim.",
        linkText: "Visit Warranty Center",
        href: "#"
      },
      {
        id: 'sr3',
        title: "Partner Program",
        description: "Interested in becoming a certified Minit Charger dealer?",
        linkText: "Apply to Partner",
        href: "#"
      }
    ]
  },
  addresses: {
    heading: "Our Global Offices",
    addresses: [
      {
        id: 'a1',
        title: "Global Headquarters",
        lines: [
          "1234 Charger Way",
          "Suite 500",
          "Irvine, CA 92614",
          "United States"
        ]
      },
      {
        id: 'a2',
        title: "European Office",
        lines: [
          "Voltstraße 42",
          "60486 Frankfurt am Main",
          "Germany"
        ]
      },
      {
        id: 'a3',
        title: "Asia Pacific Office",
        lines: [
          "Level 15, 100 Battery Road",
          "Singapore 049907",
          "Singapore"
        ]
      }
    ]
  },
  networkMap: {
    heading: "Powering operations in over 40 countries.",
    description: "From regional distribution centers to major international airports, our network of certified technicians and distribution partners ensures global uptime.",
    imageSrc: "/product-images/CMS/CMS.1.webp",
    imageAlt: "Global Network",
    imageDescription: "Placeholder for /product-images/CMS/CMS.3.webp"
  },
  faq: {
    heading: "Frequently Asked Questions",
    description: "",
    faqs: [
      {
        id: 'f1',
        question: "What is the lead time on new chargers?",
        answer: "Standard models like the ALTUS 2 and MAXIMUS typically ship within 4-6 weeks. Custom configurations may require 8-10 weeks."
      },
      {
        id: 'f2',
        question: "Do you offer on-site infrastructure audits?",
        answer: "Yes, our sales engineering team can perform a comprehensive energy audit to determine the optimal charging strategy and electrical requirements for your facility."
      },
      {
        id: 'f3',
        question: "Can I integrate Cumulus with my existing warehouse management system?",
        answer: "Absolutely. Cumulus offers a robust REST API for seamless integration with major WMS and ERP platforms."
      }
    ]
  },
  logoStrip: {
    eyebrow: "Join industry leaders",
    logos: [
      { id: 'l1', name: 'Delta' },
      { id: 'l2', name: 'Amazon' },
      { id: 'l3', name: 'Walmart' },
      { id: 'l4', name: 'FedEx' },
      { id: 'l5', name: 'Toyota' }
    ]
  },
  newsletter: {
    heading: "Not ready to chat?",
    description: "Subscribe to our newsletter for the latest logistics insights and product updates delivered to your inbox once a month.",
    placeholder: "Enter your email",
    buttonText: "Subscribe"
  },
  galleryStrip: {
    eyebrow: "Trusted across industries",
    images: [
      { id: 'g1', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Warehouse', description: 'Warehouse' },
      { id: 'g2', src: '/new_images/industry_airport_1786134268548.webp', alt: 'Aviation', description: 'Aviation' },
      { id: 'g3', src: '/new_images/industry_lsev_1786134282031.webp', alt: 'LSV', description: 'LSV' },
      { id: 'g4', src: '/new_images/industry_commercial_1786134294460.webp', alt: 'CMS', description: 'CMS' },
      { id: 'g5', src: '/new_images/industry_warehouse_1786134258340.webp', alt: 'Maximus', description: 'Maximus' },
      { id: 'g6', src: '/product-images/Altus II/ALTUS II.14.webp', alt: 'Altus', description: 'Altus' }
    ],
    buttons: [
      { id: 'b1', text: "Back Home", href: "/", variant: "primary" },
      { id: 'b2', text: "Contact Sales", href: "/contact", variant: "primary" },
      { id: 'b3', text: "View Products", href: "/products", variant: "outline" }
    ]
  }
};
