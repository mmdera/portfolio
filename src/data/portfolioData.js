export const PROFILE = {
  name: "Divyansh Verma",
  shortName: "MMD",
  brand: "Master Mind Divyansh",
  role: "Full-Stack Developer · Product Builder · AI & Automation",
  editionTag: "VOL. 26 / ISSUE NO. 04 — THE DIGITAL EDITION",
  established: "EST. 2024",
  titles: [
    "Full-Stack Developer",
    "Product Builder",
    "AI & Automation Developer",
    "Founder & Lead Architect"
  ],
  tagline: "I engineer visions into compelling digital experiences.",
  editorialHeadline: [
    "IDEAS",
    "INTO",
    "DIGITAL",
    "EXPERIENCES."
  ],
  statement: "I turn ambitious ideas into digital products people remember. Operating at the intersection of Swiss editorial precision, robust full-stack architecture, and fluid kinetic engineering.",
  location: "Lucknow, Uttar Pradesh, India",
  coordinates: "Lucknow, UP, India",
  status: "Available for select commissions",
  whatsappNumber: "+91 8765989913",
  whatsappInternational: "918765989913",
  email: "divyanshbuilds@gmail.com",
  website: "divyanshbuilds.com",
  resumePath: "/Divyansh_Verma_Resume.pdf",
  avatarImage: "/images/divyansh-avatar-v2.png",
  bio: [
    "Development is not merely writing functional code — it is deliberate structural typography, tactile spatial rhythm, and engineering seamless software architectures.",
    "Whether orchestrating an e-commerce platform with automated delivery pipelines, crafting a bespoke hospitality brand experience, or engineering a connected personal productivity OS, I build digital flagships built for endurance and conversion."
  ]
};

export const PHILOSOPHY = [
  {
    number: "01",
    label: "FOUNDATION",
    title: "DESIGN IS NOT DECORATION.",
    subtitle: "Aesthetics engineered through architecture",
    description: "A premium interface means nothing if the underlying architecture doesn't support it. I engineer aesthetics with semantic rigor, zero layout shift, and uncompromising structural clarity."
  },
  {
    number: "02",
    label: "EXPERIENCE",
    title: "CODE IS NOT THE PRODUCT.",
    subtitle: "The tactile user experience is the product",
    description: "The experience is the product. Clean code is a prerequisite for an effortless user experience. The true craft is how fluid, intuitive, and unforgettable the software feels to the person using it."
  },
  {
    number: "03",
    label: "LEVERAGE",
    title: "AUTOMATE THE ORDINARY.",
    subtitle: "Liberate human bandwidth for creative thought",
    description: "AI and workflows should automate repetitive tasks and free human effort for creative problem-solving. From intelligent intake pipelines to automated background tasks, routine operations belong to machines."
  }
];

// MANDATORY EXACT ORDER:
// 01 - CAFÉ
// 02 - FITNESS & ATHLETICS
// 03 - MMD STUDIO
// 04 - TRACKEN
export const FEATURED_PROJECTS = [
  {
    id: "cafe",
    index: "01",
    number: "Nº 01",
    title: "NOIRÉ CAFÉ",
    client: "Noir Cafe & Kitchen",
    category: "HOSPITALITY / CLIENT WORK",
    deliverable: "Bespoke Hospitality Digital Presence",
    tagline: "Warm editorial photography, rich image composition, and dining atmosphere",
    description: "A modern café website developed for a client, presenting a hospitality brand through a distinctive digital presence. Features warm editorial photography, rich image composition, restrained typography, and an atmosphere appropriate to hospitality.",
    liveUrl: "https://mmdera.github.io/cafe/",
    image: "/projects/cafe.jpg",
    accentColor: "#E64B35",
    tags: ["HTML5", "Modern CSS", "Vanilla JavaScript", "Responsive Design", "Hospitality UX"],
    role: "Digital Design & Frontend Engineering",
    year: "2026",
    specs: [
      { label: "TYPOGRAPHY", val: "Editorial Serif & Swiss Grotesk" },
      { label: "CLIENT", val: "Noir Hospitality" },
      { label: "DELIVERABLE", val: "Interactive Digital Menu & Brand Web" },
      { label: "SPEED", val: "0 Layout Shift / Fast Mobile Load" }
    ],
    highlights: [
      "Rich editorial food & beverage presentation with curated dish layouts",
      "Seamless zero-friction WhatsApp table reservation & pickup workflow",
      "Tailored warm aesthetic matching physical café ambient lighting",
      "Lightweight responsive architecture designed for instant mobile browsing"
    ]
  },
  {
    id: "fitness",
    index: "02",
    number: "Nº 02",
    title: "FORGE ATHLETICS",
    client: "Forge Fitness Club",
    category: "FITNESS / CLIENT WORK",
    deliverable: "High-Energy Athletic Business Platform",
    tagline: "High-impact visual treatment, kinetic typography, and membership conversion",
    description: "A website developed for a fitness business, demonstrating the ability to create a business-specific digital experience with stronger typography, contrasting composition, dynamic layouts, and an energetic visual treatment.",
    liveUrl: "https://mmdera.github.io/fa/",
    image: "/projects/forge-athletics.jpg",
    accentColor: "#3158D8",
    tags: ["High-Energy UI", "Interactive Timetable", "Modern CSS", "Mobile-First", "Direct Intake"],
    role: "UI/UX & Frontend Architecture",
    year: "2026",
    specs: [
      { label: "SECTOR", val: "Strength & Conditioning" },
      { label: "DELIVERY", val: "High-Conversion Web Application" },
      { label: "PERFORMANCE", val: "Sub-Second First Contentful Paint" },
      { label: "INTEGRATION", val: "Pass Reservation & Coaching Intake" }
    ],
    highlights: [
      "Dynamic training program schedules and tiered membership displays",
      "High-contrast editorial typography conveying power and athletic discipline",
      "Conversion-focused call-to-actions for trial sessions and coaching consults",
      "Ergonomic touch-optimized layouts tested across mobile form factors"
    ]
  },
  {
    id: "mmd-studio",
    index: "03",
    number: "Nº 03",
    title: "MMD STUDIO",
    client: "Master Mind Divyansh Platform",
    category: "E-COMMERCE / MY BUSINESS",
    deliverable: "Proprietary Commerce & Fulfillment Engine",
    tagline: "End-to-end commerce architecture, edge serverless, and logistics integration",
    description: "My business and e-commerce platform, representing my independent product-building and full-stack development work. Combines interface imagery, product presentation, and carefully arranged technical metadata into an active commerce engine.",
    liveUrl: "https://mmdstudio.divyansh-mastermind05.workers.dev/",
    image: "/projects/mmd-studio.jpg",
    accentColor: "#E7BC49",
    tags: ["Next.js", "Cloudflare Workers", "Payment Gateway", "Shipping APIs", "Full-Stack"],
    role: "Founder & Full-Stack System Architect",
    year: "2026",
    specs: [
      { label: "INFRASTRUCTURE", val: "Cloudflare Edge Global Workers" },
      { label: "PAYMENT", val: "Secure Automated Checkout Flow" },
      { label: "LOGISTICS", val: "Live Pincode & Shipping Verification" },
      { label: "STATUS", val: "Active Independent Business" }
    ],
    highlights: [
      "Custom headless storefront engineered for instantaneous catalog navigation",
      "Serverless backend workflows hosted on ultra-low-latency edge nodes",
      "Integrated payment processing pipelines and live address validation",
      "Automated order notification triggers and inventory synchronization"
    ]
  },
  {
    id: "tracken",
    index: "04",
    number: "Nº 04",
    title: "TRACKEN",
    client: "TRACKEN Digital Tools",
    category: "PRODUCTIVITY / DIGITAL PRODUCT",
    deliverable: "Personal Progress OS & Analytics Dashboard",
    tagline: "Granular activity logging, progress metrics, and unified workflow dashboards",
    description: "My productivity and tracking platform, demonstrating product thinking and the development of a digital tool. Features a structured, interface-oriented presentation capturing daily tasks, study sessions, focus timers, and personal analytics.",
    liveUrl: "https://tracken.in/",
    image: "/projects/tracken.jpg",
    accentColor: "#171717",
    tags: ["React", "Analytics Engine", "Task Architecture", "Focus Timers", "Local Storage"],
    role: "Founder & Lead Product Architect",
    year: "2026",
    specs: [
      { label: "PLATFORM", val: "Web Application & Personal OS" },
      { label: "AUDIENCE", val: "Students, Aspirants & Professionals" },
      { label: "METRICS", val: "Study Hours, Tasks, Financial Tracking" },
      { label: "ARCH", val: "Reactive Local-First Architecture" }
    ],
    highlights: [
      "Unified workspace harmonizing study sessions, task queues, and habit logs",
      "Automated progress metrics with visual trend analysis and focus tracking",
      "Custom calculation engines for personal daily planning and finance",
      "Responsive, local-first reactive UI engineered for daily friction-free use"
    ]
  }
];

// SECONDARY ARCHIVE ONLY — NEVER APPEARS IN FEATURED:
export const ARCHIVE_PROJECTS = [
  {
    id: "lms",
    index: "05",
    number: "ARCH-01",
    title: "EDUIQ LMS",
    category: "ACADEMIC OPERATING SYSTEM",
    year: "2026",
    description: "A premium academic portal and learning management platform designed for course navigation, performance metrics, and automated study workflows.",
    liveUrl: "https://mmdera.github.io/lms/",
    image: "/projects/lms.jpg",
    tags: ["Frontend UI", "Academic Dashboards", "Responsive Design"]
  },
  {
    id: "fyntrack",
    index: "06",
    number: "ARCH-02",
    title: "FYNTRACK",
    category: "CALCULATOR HUB & FINANCIAL TOOLS",
    year: "2026",
    description: "A comprehensive calculator suite for personal finance, compounding interest, loan amortization, GPA calculations, and everyday numerical modeling.",
    liveUrl: "https://masterminddivyansh.github.io/fyntrack/",
    image: "/projects/fyntrack.jpg",
    tags: ["Financial Math", "Reactive Calculators", "Tooling"]
  }
];

export const CAPABILITIES = [
  {
    number: "01",
    label: "CAPABILITY 01",
    title: "Premium Website Development",
    subtitle: "Editorial digital publications & bespoke flagships",
    description: "Crafting bespoke web presence with custom pointer interactions, asymmetric Swiss layouts, kinetic typography, and micro-animations. No generic templates — every experience is custom-tailored.",
    technologies: ["HTML5", "Modern CSS", "JavaScript (ESNext)", "GSAP", "Custom Motion Systems"]
  },
  {
    number: "02",
    label: "CAPABILITY 02",
    title: "Business & Hospitality Platforms",
    subtitle: "Commercial online presences engineered for conversion",
    description: "Designing and engineering tailored online presences for dining venues, athletics facilities, consulting firms, and local enterprises, equipped with direct conversion paths and WhatsApp booking.",
    technologies: ["Responsive Architecture", "Menu & Catalog Engines", "WhatsApp CRM", "Local SEO"]
  },
  {
    number: "03",
    label: "CAPABILITY 03",
    title: "E-Commerce Development",
    subtitle: "High-performance digital storefronts & fulfillment pipelines",
    description: "Building custom digital storefronts with rapid page transitions, secure checkout workflows, real-time inventory management, and automated shipping tracking integrations.",
    technologies: ["Next.js", "Payment Gateways", "Shipping APIs", "Cloudflare Edge", "Webhooks"]
  },
  {
    number: "04",
    label: "CAPABILITY 04",
    title: "Full-Stack Web Applications",
    subtitle: "Complex productivity tools turned into effortless interfaces",
    description: "Architecting interactive dashboards, progress tracking platforms, and specialized SaaS tools that deliver real-time data insights, responsive ergonomics, and robust performance.",
    technologies: ["React", "TypeScript", "REST APIs", "Local-First Storage", "Analytics Engines"]
  },
  {
    number: "05",
    label: "CAPABILITY 05",
    title: "AI & Workflow Automation",
    subtitle: "Intelligent systems liberating human focus",
    description: "Connecting fragmented operations into automated pipelines. From intelligent client intake workflows to programmatic report generation and automated communication.",
    technologies: ["Python", "LLM APIs", "Automation Workflows", "Data Pipelines", "Prompt Engineering"]
  },
  {
    number: "06",
    label: "CAPABILITY 06",
    title: "Website Redesigns & Performance Overhauls",
    subtitle: "Revamping sluggish legacy sites into high-speed flagships",
    description: "Diagnosing performance bottlenecks, rebuilding outdated UI structures, and transforming clunky web pages into high-speed, mobile-optimized experiences that pass Core Web Vitals.",
    technologies: ["Core Web Vitals", "LCP / INP / CLS Optimization", "Clean CSS Refactoring", "Semantic HTML"]
  }
];

export const TECHNOLOGIES = [
  { group: "CORE FOUNDATION", items: ["HTML5", "CSS3 / Modern CSS", "JavaScript (ESNext)", "TypeScript"] },
  { group: "FRAMEWORKS & LIBS", items: ["React 19", "Next.js", "Node.js", "GSAP / ScrollTrigger"] },
  { group: "DATA & SYSTEMS", items: ["Python", "REST APIs", "Cloudflare Edge", "Payment Gateways"] },
  { group: "AI & TOOLING", items: ["LLM Workflows", "Automation Pipelines", "Figma", "Git & GitHub"] }
];

export const PROCESS_STEPS = [
  {
    step: "01",
    phase: "UNDERSTAND",
    name: "Understand the Requirement",
    desc: "Understand the idea, goals, requirements, audience, and functional parameters before writing a single line of code."
  },
  {
    step: "02",
    phase: "DEFINE",
    name: "Define the Direction",
    desc: "Establish the typographic system, layout composition, technical stack, motion rules, and backend data flows."
  },
  {
    step: "03",
    phase: "BUILD",
    name: "Precision Engineering",
    desc: "Develop the interface and underlying functionality with semantic rigor, clean CSS architecture, and responsive precision."
  },
  {
    step: "04",
    phase: "REFINE",
    name: "Stress-Test & Polish",
    desc: "Test, improve, and polish the experience. Audit frame rates, test responsive viewports, validate form flows, and optimize Core Web Vitals."
  },
  {
    step: "05",
    phase: "LAUNCH",
    name: "Deploy & Hand Over",
    desc: "Deploy and deliver the completed project with production hosting, domain configuration, SEO metadata, and full operational handoff."
  }
];

export const PROJECT_TYPES = [
  "Business website",
  "E-commerce",
  "Web application",
  "Landing page",
  "Portfolio",
  "Website redesign",
  "Custom digital product",
  "Other"
];

export const BUDGET_OPTIONS = [
  "Under ₹5,000",
  "₹5,000–₹10,000",
  "₹10,000–₹25,000",
  "₹25,000–₹50,000",
  "₹50,000+",
  "Not sure yet"
];

export const TIMELINE_OPTIONS = [
  "As soon as possible",
  "Within two weeks",
  "Within one month",
  "Within two to three months",
  "Flexible"
];
