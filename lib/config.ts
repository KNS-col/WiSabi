export const siteConfig = {
  name: "WiSabi",
  krioTagline: "Wetin yu de luk fɔ?",
  description:
    "Sierra Leone's trusted business directory and call centre. Find any business, product, or service instantly. Dial 3999 or visit wisabi.sl.",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://wisabi.sl",
  poweredBy: "KNS",
  poweredByFull: "Knowledge Network Solutions",
  shortCode: "3999",
  expressInterestUrl: "https://wisabimapper.com/express-interest",
  contact: {
    hotline: "3999",
    phone: "+232 32 442442",
    whatsapp: "079 442 442",
    email: "info@wisabi.sl",
    website: "www.wisabi.sl",
    address: "18 Dundas Street, Freetown, Sierra Leone",
    businessHours: {
      days: "Monday – Friday",
      hours: "8:00 AM – 5:00 PM",
    },
  },
  social: {
    facebook: "",
    twitter: "",
    linkedin: "",
    instagram: "",
  },
  mission:
    "To become Sierra Leone's most trusted business information platform by connecting customers with verified businesses nationwide.",
  statistics: {
    shortCode: "3999",
    shortCodeLabel: "National Short Code",
    listing: "FREE",
    listingLabel: "Business Listing",
    ai: "24/7",
    aiLabel: "Call Support",
  },
  directoryCategories: [
    "Shops",
    "Pharmacies",
    "Hotels",
    "Restaurants",
    "Mechanics",
    "Schools",
    "Hospitals",
    "Lawyers",
    "Banks",
    "Beauty Salons",
    "Electronics",
    "Clinics",
    "Contractors",
    "Transport",
    "Government Offices",
  ],
} as const;

export const brandColors = {
  primary: "#FE6102",
  primaryDark: "#E94F00",
  black: "#050505",
  white: "#FFFFFF",
  offWhite: "#F7F7F7",
  lightGray: "#EDEDED",
  darkGray: "#333333",
} as const;

export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/#ai-assistant", label: "AI Assistant" },
  { href: "/about", label: "About Us" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
] as const;

/** Core call-centre & directory services */
export const services = [
  {
    id: "directory",
    title: "Business Directory",
    shortDescription:
      "Free nationwide listing. Verified by field officers before going live on wisabi.sl and the 3999 knowledge base.",
    description:
      "Join Sierra Leone's most comprehensive business directory at zero cost. Our field officers visit your business, verify your information, and register your profile, making you discoverable online and via 3999.",
    capabilities: [
      "Free business listing",
      "Field officer verification",
      "Online & 3999 directory",
      "Location aware search",
      "Products & services listing",
    ],
    icon: "MapPin",
  },
  {
    id: "priority-listings",
    title: "Priority Listings",
    shortDescription:
      "Top placement in category searches on 3999 and wisabi.sl, with a featured badge and monthly reporting.",
    description:
      "The free listing gets a business found. A priority listing gets it chosen first. Priority listed businesses appear at the top of category searches on 3999 and wisabi.sl, ahead of standard listings in the same category.",
    capabilities: [
      "Top placement in category searches",
      "Featured business badge",
      "Enhanced profile with photos and details",
      "Priority on 3999 call routing",
      "Social media promotion",
      "Monthly performance report",
    ],
    icon: "Star",
  },
  {
    id: "call-centre",
    title: "Directory & Call Centre",
    shortDescription:
      "Dial 3999 from any network. Trained agents connect callers to verified businesses instantly.",
    description:
      "Sierra Leone's answer line. Customers dial 3999 or visit wisabi.sl to search for businesses. Our trained agents, backed by an intelligent knowledge base, retrieve details and connect callers directly to your business.",
    capabilities: [
      "National short code 3999",
      "Trained live agents",
      "Semantic knowledge retrieval",
      "Works on all networks",
      "24/7 directory access",
    ],
    icon: "PhoneIncoming",
  },
  {
    id: "website-design",
    title: "Website Design",
    shortDescription:
      "Professional, mobile friendly websites built and delivered in two to three weeks.",
    description:
      "Your website is often a customer's first impression of your business. WiSabi designs fast, mobile friendly websites tailored to your brand, complete with a contact form and a WhatsApp button so enquiries reach you directly.",
    capabilities: [
      "Custom design built around your brand",
      "Mobile responsive on any device",
      "Up to five pages included",
      "Contact form and WhatsApp button",
      "Search optimised to rank on Google",
      "Hosting setup included",
    ],
    icon: "Globe",
  },
  {
    id: "domain-hosting",
    title: "Domain Hosting",
    shortDescription:
      "Domain registration and website hosting, secured and monitored around the clock.",
    description:
      "Every business needs a reliable online address. WiSabi registers your domain and hosts your website on secure, monitored infrastructure, so it stays fast and available at all times.",
    capabilities: [
      "Sierra Leone (.sl) and international domains",
      "Free SSL certificate included",
      "99.9% uptime",
      "Email hosting add on available",
      "Continuous uptime monitoring",
      "Renewal reminders before expiry",
    ],
    icon: "Server",
  },
  {
    id: "corporate-email",
    title: "Corporate Email",
    shortDescription:
      "Branded business email that replaces personal Gmail and WhatsApp numbers.",
    description:
      "A professional email address builds trust and makes your business look credible. WiSabi sets up branded email for your whole team, with webmail, mobile access, shared calendars, and spam protection included.",
    capabilities: [
      "Email on your own business domain",
      "Webmail and mobile app access",
      "Shared calendars for your team",
      "Cloud file storage",
      "Multiple staff accounts",
      "Spam and virus filtering",
    ],
    icon: "Mail",
  },
  {
    id: "chatbots",
    title: "Chatbots",
    shortDescription:
      "Trained chatbots that answer customer questions on your website and WhatsApp, day and night.",
    description:
      "Customers ask questions at all hours. WiSabi builds chatbots trained on your products, prices, and frequently asked questions, deployed on your website and WhatsApp Business, so no enquiry goes unanswered.",
    capabilities: [
      "Trained on your own business information",
      "Answers customers around the clock",
      "Works on WhatsApp Business and your website",
      "Captures leads and contact details",
      "Books appointments directly",
      "Hands off to a human agent when needed",
    ],
    icon: "Bot",
  },
  {
    id: "ecommerce",
    title: "E-Commerce Platform",
    shortDescription:
      "A full online store with mobile money, card, and bank payments built in.",
    description:
      "WiSabi builds your complete online store, from product pages to checkout, with the payment methods Sierra Leone customers already trust. Orders and payments land in one dashboard so you can fulfil them without delay.",
    capabilities: [
      "Full store build with cart and checkout",
      "Unlimited products with photos and prices",
      "Orange Money and Africell Money",
      "Bank transfer and card payments",
      "Order dashboard with delivery tracking",
      "Automatic order and payment notifications",
    ],
    icon: "ShoppingCart",
  },
  {
    id: "social-media",
    title: "Social Media Marketing",
    shortDescription:
      "Content, community management, and paid ads across Facebook, Instagram, and WhatsApp.",
    description:
      "Sierra Leone's customers spend their time on Facebook, Instagram, and WhatsApp. WiSabi builds your presence there: creating content, managing your community, and running paid campaigns that reach real customers.",
    capabilities: [
      "Profile setup on Facebook, Instagram, and WhatsApp Business",
      "Original content created weekly",
      "Comments and messages managed for you",
      "Targeted Facebook and Instagram ads",
      "Regular WhatsApp broadcasts",
      "Monthly performance report",
    ],
    icon: "Share2",
  },
  {
    id: "managed-shortcode",
    title: "Managed Short Code",
    shortDescription:
      "Own your short code. We run the call centre. Full managed or hybrid models for banks, telcos, and enterprises.",
    description:
      "Register your own short code (e.g. 8888) and let WiSabi manage inbound calls: IVR menus, agent handling, smart lookups, live dashboards, and escalation to your team.",
    capabilities: [
      "Full managed or hybrid",
      "IVR & ACD routing",
      "Central knowledge base",
      "Live monitoring & analytics",
      "Call recording & CDR logs",
      "Elastic agent capacity",
    ],
    icon: "Headphones",
  },
  {
    id: "telemarketing",
    title: "Telemarketing",
    shortDescription:
      "Trained agents make outbound calls on your behalf to generate leads and book appointments.",
    description:
      "Reach new customers before they find your competitors. WiSabi's trained agents call on your behalf, introduce your business, qualify prospects, and set appointments, so your sales team spends time only with people who are genuinely interested.",
    capabilities: [
      "Professional call scripts written for you",
      "Agents trained on your business",
      "Targeted customer lists",
      "Lead qualification and appointment setting",
      "Recorded calls for quality assurance",
      "Daily call reports",
    ],
    icon: "PhoneOutgoing",
  },
  {
    id: "training",
    title: "Staff Productivity Training",
    shortDescription:
      "Practical training in customer service, digital tools, and sales, delivered on site or online.",
    description:
      "Your team is your greatest asset. WiSabi's training programme covers customer service, digital literacy, workplace productivity tools, and sales, delivered through practical sessions built around real Sierra Leone business scenarios.",
    capabilities: [
      "Customer service and complaint handling",
      "Digital productivity tools for the workplace",
      "Digital literacy and online safety basics",
      "Business communication and sales technique",
      "Delivered on site or online",
      "Certificate of completion for every participant",
    ],
    icon: "GraduationCap",
  },
] as const;

export const coreValues = [
  {
    title: "Trust & Verification",
    description: "Every business is verified by field officers before listing.",
    icon: "Shield",
  },
  {
    title: "Customer First",
    description: "Connecting callers to the right business, fast.",
    icon: "Heart",
  },
  {
    title: "Innovation",
    description: "Smart directory and call centre built for Sierra Leone.",
    icon: "Lightbulb",
  },
  {
    title: "Local Impact",
    description: "Data stays in Sierra Leone. Infrastructure runs locally.",
    icon: "MapPin",
  },
  {
    title: "Accessibility",
    description: "Free listings, one short code, works on all networks.",
    icon: "Users",
  },
  {
    title: "Reliability",
    description: "Enterprise level call centre platform, fraction of the cost.",
    icon: "Clock",
  },
] as const;

export const trustCards = [
  {
    title: "Free Business Listing",
    description: "Be discovered nationwide at no cost. No hidden charges.",
    icon: "Gift",
  },
  {
    title: "Verified Information",
    description: "Field officers verify every business before it goes live.",
    icon: "ShieldCheck",
  },
  {
    title: "Trained Agents",
    description: "Trained agents backed by an intelligent knowledge base.",
    icon: "Brain",
  },
  {
    title: "Dial 3999",
    description: "One memorable number on all networks. Sierra Leone's answer line.",
    icon: "Phone",
  },
] as const;

export const whyWiSabi = [
  {
    title: "Free Listing",
    description: "List your business at zero cost and start receiving enquiries after verification.",
  },
  {
    title: "Customers Call 3999",
    description: "We connect customers directly to your business through trained agents.",
  },
  {
    title: "More Enquiries",
    description: "Increase visibility and grow your customer base across Sierra Leone.",
  },
  {
    title: "Get Found Near You",
    description: "Location aware search helps nearby customers find you first.",
  },
  {
    title: "Digital Presence",
    description: "Take your business online: websites, chatbots, email, and ecommerce.",
  },
  {
    title: "Verified & Trusted",
    description: "Accurate contact details, location, and opening hours, always up to date.",
  },
] as const;

export const howItWorks = [
  {
    step: "1",
    title: "Field Officer Visits Your Business",
    checklist: [
      "Verify your information",
      "Record products & services",
      "Capture your business location",
      "Register your contact details",
    ],
  },
  {
    step: "2",
    title: "Your Business Joins the National Directory",
    description:
      "Your verified profile goes live on the national Wi Sabi Directory, online and in the 3999 knowledge base.",
  },
  {
    step: "3",
    title: "Customers Dial 3999 or Visit wisabi.sl",
    description:
      "Callers and online visitors search for businesses in their area or category, anytime, from any network.",
  },
  {
    step: "4",
    title: "AI Assisted Agents Connect the Customer",
    description:
      "Our customer service agents, backed by AI, retrieve your details instantly and connect the caller directly to your business.",
  },
  {
    step: "5",
    title: "More Enquiries. More Customers. More Growth.",
    description:
      "Your business receives increased enquiries, calls, and opportunities, at zero ongoing cost for a basic listing.",
  },
] as const;

export const callCentreFeatures = [
  {
    title: "ACD Groups",
    description: "Route calls to the right agent group by skill, availability, or priority.",
    icon: "GitBranch",
  },
  {
    title: "Call Hunting",
    description: "Sequential or simultaneous ring groups find the first available agent.",
    icon: "Search",
  },
  {
    title: "IVR Menus",
    description: "Automated voice menus, fully customisable for your organisation.",
    icon: "Menu",
  },
  {
    title: "Call Forwarding",
    description: "Smart routing based on missed calls, busy lines, or time of day.",
    icon: "PhoneForwarded",
  },
  {
    title: "Live Monitoring",
    description: "Live dashboards, call recording, and advanced analytics.",
    icon: "BarChart3",
  },
  {
    title: "Short Code Hosting",
    description: "Dedicated short codes fully managed and supported 24/7.",
    icon: "Hash",
  },
] as const;

export const images = {
  hero: "/images/Hero-img.jpg",
  about: "/images/About-hero.jpg",
  services: "/images/Services-top.jpg",
  workplace: "/images/services-bottom.jpg",
  contact: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=1200&q=80",
  callCenter: "/images/Footer-img.jpg",
  team: "/images/About-call-center.jpg",
} as const;
