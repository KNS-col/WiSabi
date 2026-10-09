export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceDetail {
  emoji: string;
  tags: string[];
  heroImage: string;
  heroImageAlt: string;
  intro: string;
  paymentOptions?: { emoji: string; label: string }[];
  trainingModules?: { module: string; learn: string; duration: string }[];
  comparisonTable?: {
    title: string;
    rows: { feature: string; free: boolean; priority: boolean }[];
  };
  features: ServiceFeature[];
  whoFor: string[];
  ctaHeadline: string;
  ctaSubtext: string;
  ctaButtonLabel: string;
  ctaHref: string;
}

export const serviceDetails: Record<string, ServiceDetail> = {
  directory: {
    emoji: "📍",
    tags: ["100% Free", "Verified Listings", "3999 & Online"],
    heroImage: "/images/directory.jpg",
    heroImageAlt: "Illustration of a local shop pinned on a map with a geo-targeted search on a phone",
    intro:
      "Join Sierra Leone's most comprehensive business directory at zero cost. Our field officers visit your business, verify your information, and register your profile, making you discoverable online and via 3999.",
    features: [
      {
        title: "Free Business Listing",
        description:
          "List your business at zero cost, with no setup fee and no monthly charge, ever.",
      },
      {
        title: "Field Officer Verification",
        description:
          "Our field officers visit your business in person to verify your details before you go live.",
      },
      {
        title: "Online & 3999 Directory",
        description:
          "Your listing appears both on wisabi.sl and in the knowledge base agents use when callers dial 3999.",
      },
      {
        title: "Location Aware Search",
        description:
          "Customers searching nearby are shown your business first, based on your registered location.",
      },
      {
        title: "Products & Services Listing",
        description:
          "List every product or service you offer, so customers know exactly what you provide before they call.",
      },
    ],
    whoFor: [
      "Any registered business in Sierra Leone",
      "Shops & retailers",
      "Service providers",
      "Restaurants & hospitality",
      "Healthcare & professional services",
    ],
    ctaHeadline: "Get listed for free. Get found today.",
    ctaSubtext: "No cost · Verified by field officers · Live on wisabi.sl and 3999",
    ctaButtonLabel: "List Your Business",
    ctaHref: "expressInterest",
  },

  "priority-listings": {
    emoji: "⭐",
    tags: ["Premium", "Top Placement", "Dedicated Support"],
    heroImage: "/images/priority-listings.jpg",
    heroImageAlt: "Illustration of a clipboard checklist and calendar representing priority scheduling",
    intro:
      "The free listing gets you found. The Priority Listing gets you chosen first. Priority listed businesses appear at the top of search results when callers dial 3999 and when customers search on wisabi.sl, giving you a significant advantage over competitors in your category.",
    comparisonTable: {
      title: "Free vs Priority Listing",
      rows: [
        { feature: "Directory Listing", free: true, priority: true },
        { feature: "Appear in 3999 search results", free: true, priority: true },
        { feature: "Business name, phone, address", free: true, priority: true },
        { feature: "Top placement in category searches", free: false, priority: true },
        { feature: "Featured business badge", free: false, priority: true },
        { feature: "Enhanced profile (photos, description)", free: false, priority: true },
        { feature: "Priority on 3999 call routing", free: false, priority: true },
        { feature: "Social media promotion", free: false, priority: true },
        { feature: "Monthly performance report", free: false, priority: true },
        { feature: "Dedicated account manager", free: false, priority: true },
      ],
    },
    features: [
      {
        title: "Top Placement in Search",
        description:
          "When a caller asks for a business in your category, your listing is presented first, ahead of any standard listings.",
      },
      {
        title: "Featured Business Badge",
        description:
          "A visible \"Featured\" badge on your profile signals trust and credibility to customers browsing the directory.",
      },
      {
        title: "Enhanced Profile",
        description:
          "Add multiple photos, a detailed business description, opening hours, product list, and social media links to your listing.",
      },
      {
        title: "Priority on 3999 Call Routing",
        description:
          "When callers dial 3999 with a category request, agents present your business as the top recommendation in your area.",
      },
      {
        title: "Social Media Promotion",
        description:
          "Your business is featured in WiSabi's social media posts, reaching thousands of followers across Sierra Leone.",
      },
      {
        title: "Monthly Performance Report",
        description:
          "How many times your listing appeared in search, how many calls were directed to you, and how to improve your visibility.",
      },
    ],
    whoFor: [
      "Businesses in competitive categories",
      "Hotels & restaurants",
      "Healthcare providers",
      "Law firms & professional services",
      "Any business wanting to dominate their category",
    ],
    ctaHeadline: "Get chosen first in your category.",
    ctaSubtext: "Featured badge · Top placement · Priority call routing",
    ctaButtonLabel: "Upgrade to Priority",
    ctaHref: "/contact",
  },

  "call-centre": {
    emoji: "📞",
    tags: ["National Short Code", "Live Agents", "24/7 Access"],
    heroImage: "/images/call-centre.jpg",
    heroImageAlt: "Illustration of a call centre agent at a computer connecting a caller",
    intro:
      "Sierra Leone's answer line. Customers dial 3999 or visit wisabi.sl to search for businesses. Our trained agents, backed by an intelligent knowledge base, retrieve details and connect callers directly to your business.",
    features: [
      {
        title: "National Short Code 3999",
        description:
          "One memorable number, working on every network in Sierra Leone. No data or app required.",
      },
      {
        title: "Trained Live Agents",
        description:
          "Real agents answer every call, trained to search the directory and connect customers accurately.",
      },
      {
        title: "Semantic Knowledge Retrieval",
        description:
          "Our knowledge base understands natural language, so agents find the right business even from vague requests.",
      },
      {
        title: "Works on All Networks",
        description:
          "3999 connects regardless of mobile network: Orange, Africell, or Qcell.",
      },
      {
        title: "24/7 Directory Access",
        description:
          "wisabi.sl and the 3999 knowledge base are available around the clock.",
      },
    ],
    whoFor: [
      "Every listed business in the directory",
      "Customers searching for services",
      "Businesses wanting inbound call leads",
    ],
    ctaHeadline: "Be the business agents recommend.",
    ctaSubtext: "Free with your listing · Live agents · Available 24/7",
    ctaButtonLabel: "Join the Directory",
    ctaHref: "expressInterest",
  },

  "website-design": {
    emoji: "💻",
    tags: ["Digital Presence", "Mobile Responsive", "Locally Hosted"],
    heroImage: "/images/website-design.jpg",
    heroImageAlt: "Illustration of a developer building a website on a laptop",
    intro:
      "Your website is your business card to the world. WiSabi designs professional, fast-loading, mobile-first websites tailored specifically for Sierra Leone businesses, reflecting your brand, your products, and your story.",
    features: [
      {
        title: "Custom Design",
        description:
          "Unique design built around your brand identity, colours, and logo, not a generic template.",
      },
      {
        title: "Mobile Responsive",
        description:
          "Looks perfect on smartphones, tablets, and desktops. Critical for Sierra Leone's mobile-first audience.",
      },
      {
        title: "Up to 5 Pages",
        description:
          "Home, About, Services, Gallery/Products, and Contact: everything a business needs to get online.",
      },
      {
        title: "Contact Form",
        description:
          "Customers can reach you directly from your website. Messages delivered to your email or WhatsApp.",
      },
      {
        title: "SEO Optimised",
        description:
          "Built to rank well on Google, so customers in Sierra Leone can find you by searching online.",
      },
      {
        title: "Hosting Setup Included",
        description:
          "We handle the technical side. Your site goes live on a fast, reliable server with minimal downtime.",
      },
      {
        title: "WhatsApp Integration",
        description:
          "A click-to-WhatsApp button lets mobile visitors message you instantly, driving enquiries direct to your phone.",
      },
      {
        title: "Delivered in 2–3 Weeks",
        description:
          "From briefing to go-live in under three weeks. We keep the process simple and fast.",
      },
    ],
    whoFor: [
      "Businesses without an online presence",
      "Shops & retailers",
      "Service providers",
      "NGOs & community organisations",
      "Hotels & hospitality",
      "Healthcare providers",
    ],
    ctaHeadline: "Get your business online today.",
    ctaSubtext: "Free consultation · Delivered in 2–3 weeks · Locally designed in Sierra Leone",
    ctaButtonLabel: "Request a Quote",
    ctaHref: "/contact",
  },

  "domain-hosting": {
    emoji: "🖥️",
    tags: ["Hosting & Infrastructure", "SSL Included", "99.9% Uptime"],
    heroImage: "/images/domain-hosting.jpg",
    heroImageAlt: "Illustration of a person registering a domain name on a laptop",
    intro:
      "Every business needs an online address. WiSabi handles domain registration and website hosting so your online presence is fast, secure, and always available. We manage the technical infrastructure so you can focus on running your business.",
    features: [
      {
        title: ".sl Domain Registration",
        description:
          "Own a Sierra Leone domain (yourname.sl), establishing your local credibility and national identity.",
      },
      {
        title: "International Domains",
        description:
          ".com, .org, .net, .africa and more. Register global domains alongside your local presence.",
      },
      {
        title: "SSL Certificate Included",
        description:
          "Every hosted website includes a free SSL certificate, the padlock icon that tells customers your site is secure.",
      },
      {
        title: "99.9% Uptime Guarantee",
        description:
          "Your website stays online around the clock, even during peak traffic, backed by enterprise infrastructure.",
      },
      {
        title: "Email Hosting Add-on",
        description:
          "Add professional email accounts (info@yourbusiness.sl) to your hosting package, including team inboxes, shared calendars, and file storage.",
      },
      {
        title: "Uptime Monitoring",
        description:
          "We monitor your site 24/7. If it goes down for any reason, our team is alerted and responds immediately.",
      },
      {
        title: "Annual Renewal Management",
        description:
          "We remind you before your domain or hosting expires so you never accidentally lose your online address.",
      },
      {
        title: "Technical Support",
        description:
          "Our technical team is available to help with any hosting issues, by phone, WhatsApp, or email.",
      },
    ],
    whoFor: [
      "Any business wanting a web address",
      "Businesses switching hosting providers",
      "Developers building client sites",
      "Organisations needing email hosting",
    ],
    ctaHeadline: "Secure your domain name today.",
    ctaSubtext: "Domains registered within 24 hours · SSL included at no extra charge",
    ctaButtonLabel: "Register Your Domain",
    ctaHref: "/contact",
  },

  "corporate-email": {
    emoji: "📧",
    tags: ["Business Email", "Team Collaboration", "Mobile & Web"],
    heroImage: "/images/corporate-email.jpg",
    heroImageAlt: "Illustration of a hand sending an email from a smartphone",
    intro:
      "Replace informal WhatsApp numbers and Gmail addresses with a professional corporate email such as info@yourbusiness.sl. Corporate email builds trust, improves communication, and gives your business a credible, polished identity.",
    features: [
      {
        title: "Your Business Domain",
        description:
          "Emails like ceo@yourbusiness.sl and sales@yourbusiness.sl: professional, branded, and memorable.",
      },
      {
        title: "Webmail Access",
        description:
          "Access your inbox from any browser, anywhere. No software installation required.",
      },
      {
        title: "Mobile App Support",
        description:
          "Works seamlessly on Android and iPhone. Stay connected on the go, just like a standard email app.",
      },
      {
        title: "Business Calendar",
        description:
          "Shared calendars for your team to schedule meetings, set reminders, and co-ordinate across departments.",
      },
      {
        title: "File Storage",
        description:
          "Cloud file storage for your business documents, accessible to your team from any device.",
      },
      {
        title: "Multiple Accounts",
        description:
          "Set up as many staff email accounts as you need, each with their own inbox, calendar, and storage.",
      },
      {
        title: "Spam Filtering",
        description:
          "Enterprise-grade spam and virus filtering keeps your inbox clean and your business secure.",
      },
      {
        title: "Email Signatures",
        description:
          "We help you set up professional branded email signatures for your whole team, consistent and polished.",
      },
    ],
    whoFor: [
      "Any business communicating with clients",
      "Banks & financial services",
      "Law firms & professional services",
      "Schools & institutions",
      "Government agencies",
    ],
    ctaHeadline: "Stop using Gmail. Start looking professional.",
    ctaSubtext: "Setup in 24 hours · Multiple staff accounts · Mobile ready",
    ctaButtonLabel: "Get Corporate Email",
    ctaHref: "/contact",
  },

  chatbots: {
    emoji: "🤖",
    tags: ["Automated Responses", "24/7 Customer Support", "WhatsApp & Website"],
    heroImage: "/images/chatbots.jpg",
    heroImageAlt: "Illustration of a customer chatting with a chatbot on a smartphone",
    intro:
      "Your business can't answer every customer question at 2am. A chatbot can. WiSabi builds intelligent chatbots trained on your business knowledge, including products, prices, opening hours, services, and FAQs, then deploys them on your website and WhatsApp Business account.",
    features: [
      {
        title: "Trained on Your Business",
        description:
          "We load your product catalogue, FAQ documents, and service information into the chatbot, so it knows your business inside out.",
      },
      {
        title: "24/7 Customer Handling",
        description:
          "Answers customer questions around the clock, even when your team is asleep, on weekends, and on public holidays.",
      },
      {
        title: "WhatsApp Integration",
        description:
          "Deploy directly on WhatsApp Business, where most Sierra Leone customers already are. No app download required.",
      },
      {
        title: "Website Chat Widget",
        description:
          "Embedded chat window on your website that greets visitors, answers questions, and captures contact details.",
      },
      {
        title: "Lead Capture",
        description:
          "Collects customer names, phone numbers, and enquiry details, then sends them directly to your inbox or CRM.",
      },
      {
        title: "Appointment Booking",
        description:
          "Customers can book consultations, services, or visits directly through the chatbot, no back and forth needed.",
      },
      {
        title: "Human Escalation",
        description:
          "When a query is too complex, the bot hands over to a human agent, with full conversation history included.",
      },
      {
        title: "Analytics Dashboard",
        description:
          "See what customers are asking most, where conversations drop off, and how to improve your knowledge base.",
      },
    ],
    whoFor: [
      "High-volume customer enquiry businesses",
      "Banks & financial services",
      "Hospitals & clinics",
      "E-commerce stores",
      "Hotels & hospitality",
      "Telecoms & utilities",
    ],
    ctaHeadline: "Handle far more customer queries without hiring extra staff.",
    ctaSubtext: "Trained on your documents · Quick to set up · WhatsApp ready",
    ctaButtonLabel: "Get a Chatbot",
    ctaHref: "/contact",
  },

  telemarketing: {
    emoji: "📣",
    tags: ["Outbound Sales", "Lead Generation", "Appointment Setting"],
    heroImage: "/images/telemarketing.jpg",
    heroImageAlt: "Illustration of an agent on a headset calling a customer",
    intro:
      "Reach new customers before they find your competitors. WiSabi's trained telemarketing agents make professional outbound calls on your behalf, introducing your business, generating leads, qualifying prospects, and setting appointments. You provide the product; we bring you the customers.",
    features: [
      {
        title: "Campaign Script Development",
        description:
          "We write a professional call script that accurately represents your product or service and resonates with your target audience.",
      },
      {
        title: "Trained Agents",
        description:
          "Our agents are trained in your business before making any calls, so they speak knowledgeably and professionally about what you offer.",
      },
      {
        title: "Target Customer Lists",
        description:
          "Call your existing database, or work with us to build a targeted list of potential customers by location, industry, or business type.",
      },
      {
        title: "Lead Qualification",
        description:
          "Agents identify and qualify prospects, so your sales team only spends time with customers who are genuinely interested.",
      },
      {
        title: "Appointment Setting",
        description:
          "For businesses that need face-to-face meetings, agents book confirmed appointments directly into your calendar.",
      },
      {
        title: "Call Recording",
        description:
          "All outbound calls are recorded for quality assurance and compliance. Recordings available on request.",
      },
      {
        title: "Daily Call Reports",
        description:
          "End-of-day reports covering calls made, contacts reached, leads generated, and follow-ups required.",
      },
      {
        title: "Scalable Campaigns",
        description:
          "Run a small pilot with 200 calls or a national campaign with thousands. We scale to your requirements.",
      },
    ],
    whoFor: [
      "Banks & microfinance institutions",
      "Insurance companies",
      "Real estate & property",
      "Training & education providers",
      "Product & FMCG companies",
      "Any business looking for new customers",
    ],
    ctaHeadline: "Let us make the calls. You close the deals.",
    ctaSubtext: "Professional agents · Fully managed campaigns · Daily reporting",
    ctaButtonLabel: "Start a Campaign",
    ctaHref: "/contact",
  },

  "social-media": {
    emoji: "📱",
    tags: ["Facebook", "Instagram", "WhatsApp Business"],
    heroImage: "/images/social-media.jpg",
    heroImageAlt: "Illustration of a megaphone in front of a phone surrounded by social media icons",
    intro:
      "Sierra Leone's customers are on Facebook, Instagram, and WhatsApp every day. WiSabi's social media team builds your brand presence on these platforms: creating content, growing your audience, managing your community, and running paid advertising campaigns that deliver real results.",
    features: [
      {
        title: "Profile Setup & Optimisation",
        description:
          "We set up or refresh your Facebook Page, Instagram Business account, and WhatsApp Business profile, branded correctly from day one.",
      },
      {
        title: "Content Creation",
        description:
          "Eye-catching posts, stories, and reels designed for West African audiences, combining your products with engaging local storytelling.",
      },
      {
        title: "Posting Schedule",
        description:
          "Consistent posting, typically 3 to 5 times per week, keeps your business visible and your audience engaged.",
      },
      {
        title: "Community Management",
        description:
          "We respond to comments and messages on your behalf, professionally, promptly, and in your brand's voice.",
      },
      {
        title: "Paid Advertising",
        description:
          "Targeted Facebook and Instagram ad campaigns reaching customers in Freetown, upcountry, or across the diaspora.",
      },
      {
        title: "WhatsApp Broadcast",
        description:
          "Regular broadcasts to your WhatsApp list, including promotions, new products, events, and updates sent directly to customers.",
      },
      {
        title: "Graphic Design",
        description:
          "Professional graphics for every post, using your brand colours, logo, and fonts. Consistent and polished every time.",
      },
      {
        title: "Monthly Analytics Report",
        description:
          "Monthly breakdown of reach, engagement, follower growth, ad performance, and recommendations for the next month.",
      },
    ],
    whoFor: [
      "Retail businesses & shops",
      "Fashion & beauty",
      "Restaurants & food businesses",
      "Events & entertainment",
      "Healthcare & wellness",
      "Any brand wanting social media growth",
    ],
    ctaHeadline: "Build the brand Sierra Leone talks about.",
    ctaSubtext: "Content created weekly · Facebook · Instagram · WhatsApp",
    ctaButtonLabel: "Start Growing",
    ctaHref: "/contact",
  },

  ecommerce: {
    emoji: "🛒",
    tags: ["Integrated Payments", "Mobile Money", "Order Management"],
    heroImage: "/images/ecommerce.jpg",
    heroImageAlt: "Illustration of a phone storefront with a shopping cart, order receipt, and payment card",
    intro:
      "We build your complete e-commerce platform: a full online store where customers can browse your products, place orders, and pay using the payment methods they trust. From mobile money to bank transfer to card, your customers pay how they prefer, and you receive orders and payments automatically.",
    paymentOptions: [
      { emoji: "📱", label: "Orange Money" },
      { emoji: "📱", label: "Africell Money" },
      { emoji: "🏦", label: "Bank Transfer" },
      { emoji: "💳", label: "Card Payments" },
      { emoji: "💵", label: "Pay on Delivery" },
    ],
    features: [
      {
        title: "Full Store Build",
        description:
          "We design and build your complete e-commerce store, including product pages, shopping cart, checkout, and order confirmation.",
      },
      {
        title: "Product Catalogue Management",
        description:
          "Upload unlimited products with photos, descriptions, prices, variants (size, colour), and stock levels.",
      },
      {
        title: "Mobile Money Integration",
        description:
          "Customers pay with Orange Money and Africell Money, Sierra Leone's most widely used payment methods.",
      },
      {
        title: "Bank & Card Payments",
        description:
          "Accept bank transfers and card payments, widening your customer base to those who prefer formal banking.",
      },
      {
        title: "Order Management System",
        description:
          "Admin dashboard showing all incoming orders, payment status, customer details, and fulfilment progress.",
      },
      {
        title: "Delivery Tracking",
        description:
          "Customers receive a tracking link and SMS/WhatsApp updates on the status of their delivery.",
      },
      {
        title: "Customer Notifications",
        description:
          "Automatic order confirmation, payment receipt, and delivery notifications via WhatsApp and email.",
      },
      {
        title: "Sales Analytics",
        description:
          "Track revenue, best-selling products, customer demographics, and cart abandonment, all from your admin dashboard.",
      },
    ],
    whoFor: [
      "Retailers & shops going online",
      "Fashion & clothing stores",
      "Food & grocery businesses",
      "Electronics sellers",
      "Agriculture & produce",
      "Any business selling products",
    ],
    ctaHeadline: "Sell online 24/7. Accept payment your customers trust.",
    ctaSubtext: "Orange Money · Africell Money · Card · Bank Transfer · Full store build included",
    ctaButtonLabel: "Build My Store",
    ctaHref: "/contact",
  },

  "managed-shortcode": {
    emoji: "🎧",
    tags: ["Enterprise", "Custom Short Code", "Fully Managed"],
    heroImage: "/images/managed-shortcode.jpg",
    heroImageAlt: "Illustration of two colleagues reviewing results together at a computer",
    intro:
      "Register your own short code (e.g. 8888) and let WiSabi manage inbound calls: IVR menus, agent handling, smart lookups, live dashboards, and escalation to your team.",
    features: [
      {
        title: "Full Managed or Hybrid",
        description:
          "Choose a fully outsourced call centre, or a hybrid model where your team handles escalations.",
      },
      {
        title: "IVR & ACD Routing",
        description:
          "Automated voice menus and skill-based routing get callers to the right place, fast.",
      },
      {
        title: "Central Knowledge Base",
        description:
          "Agents work from a shared knowledge base built around your organisation's information.",
      },
      {
        title: "Live Monitoring & Analytics",
        description:
          "Real-time dashboards show call volume, wait times, and agent performance as it happens.",
      },
      {
        title: "Call Recording & CDR Logs",
        description:
          "Every call is recorded and logged for quality assurance, training, and compliance.",
      },
      {
        title: "Elastic Agent Capacity",
        description:
          "Scale agent numbers up or down with demand, from a small desk to a national campaign.",
      },
    ],
    whoFor: [
      "Banks & telecoms",
      "Government agencies",
      "Insurance companies",
      "Large enterprises with their own short code",
      "Organisations running national campaigns",
    ],
    ctaHeadline: "Own the number. We run the call centre.",
    ctaSubtext: "Fully managed or hybrid · Enterprise infrastructure · Elastic capacity",
    ctaButtonLabel: "Talk to Our Team",
    ctaHref: "/contact",
  },

  training: {
    emoji: "🎓",
    tags: ["Practical Sessions", "In-Person & Online", "Certificate of Completion"],
    heroImage: "/images/training.jpg",
    heroImageAlt: "Illustration of a facilitator leading a staff training session",
    intro:
      "Your team is your greatest asset. WiSabi's Staff Productivity Training programme equips your employees with the skills to work smarter, combining customer service excellence, digital literacy, modern productivity tools, and professional communication into practical, engaging sessions delivered in Sierra Leone.",
    trainingModules: [
      {
        module: "Digital Productivity Tools",
        learn:
          "Using modern productivity software to write reports, draft emails, summarise documents, and speed up repetitive tasks",
        duration: "Half day",
      },
      {
        module: "Customer Service Excellence",
        learn:
          "Call handling, complaint resolution, empathy skills, professional language, and customer satisfaction techniques",
        duration: "Full day",
      },
      {
        module: "Digital Literacy",
        learn:
          "Email, spreadsheets, document management, cloud tools, cybersecurity basics, and internet safety",
        duration: "Full day",
      },
      {
        module: "Business Communication",
        learn:
          "Professional writing, presentation skills, meeting etiquette, report writing, and WhatsApp professional use",
        duration: "Half day",
      },
      {
        module: "Sales Techniques",
        learn:
          "Prospecting, pitching, objection handling, follow-up strategies, and closing, adapted for Sierra Leone's market",
        duration: "Full day",
      },
      {
        module: "Data & Reporting",
        learn:
          "Reading dashboards, interpreting business data, creating basic reports, and using analytics tools",
        duration: "Half day",
      },
    ],
    features: [
      {
        title: "Productivity Tools for the Workplace",
        description:
          "Staff learn to use modern productivity tools to draft communications, summarise meetings, generate reports, and handle repetitive tasks, doubling their output.",
      },
      {
        title: "Practical, Hands-On Learning",
        description:
          "No death-by-PowerPoint. Our training uses real scenarios from Sierra Leone businesses so skills transfer immediately to the job.",
      },
      {
        title: "In-Person Delivery",
        description:
          "Facilitators come to your office or training venue. Training is more effective when delivered in your team's environment.",
      },
      {
        title: "Online / Virtual Option",
        description:
          "Can't bring the whole team together? We deliver the same programme via video call, flexible for remote or distributed teams.",
      },
      {
        title: "Certificate of Completion",
        description:
          "Every participant receives a WiSabi Certificate of Completion, verifiable, professional, and meaningful for their career.",
      },
      {
        title: "Customised to Your Industry",
        description:
          "Training content is tailored to your industry. A bank's customer service training is different from a hotel's or clinic's.",
      },
    ],
    whoFor: [
      "Banks & financial services",
      "Call centres & customer service teams",
      "Sales teams",
      "Government departments",
      "NGOs & development organisations",
      "Any employer investing in their people",
    ],
    ctaHeadline: "Invest in your people. Watch your business grow.",
    ctaSubtext: "Practical sessions included · Certificate of completion · In-person & online",
    ctaButtonLabel: "Book Training",
    ctaHref: "/contact",
  },
};
