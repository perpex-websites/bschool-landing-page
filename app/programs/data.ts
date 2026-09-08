export type ProgramData = {
  id: string;
  name: string;
  badge: string;
  matchScore: number;
  eyebrow: string;
  format: string;
  price: string;
  duration: string;
  weeklyCommitment: string;
  batchStarts: string;
  seatsLeft: number;
  tagline: string;
  description: string;
  whyFitReason: string;
  fitBullets: string[];
  modules: {
    number: string;
    title: string;
    description: string;
    topics: string[];
  }[];
  outcomes: string[];
  mentors: {
    name: string;
    role: string;
    company: string;
    avatar: string;
  }[];
  faqs: {
    question: string;
    answer: string;
  }[];
};

export const programsData: Record<string, ProgramData> = {
  growthx: {
    id: "growthx",
    name: "GrowthX Foundations",
    badge: "RECOMMENDED FOR BEGINNERS & ASPIRING ENTREPRENEURS",
    matchScore: 96,
    eyebrow: "FOUNDATIONAL LEARNING PATH",
    format: "100% Online & Self-Paced",
    price: "Accessible Entry Path",
    duration: "6 Weeks",
    weeklyCommitment: "2–4 hours / week",
    batchStarts: "Delta Batch · October 2026",
    seatsLeft: 35,
    tagline: "Build the Core Business Mindset & Validate Your First Idea",
    description: "A focused, structured online program designed for professionals, students, and aspiring founders who want to master business fundamentals without overwhelming their schedule.",
    whyFitReason: "Based on your answers, you're looking for strong foundational knowledge and a flexible schedule. GrowthX gives you step-by-step clarity without requiring full-time commitment.",
    fitBullets: [
      "Flexible self-paced schedule tailored for 2–4 hours weekly commitment",
      "Focus on core business principles, customer discovery & MVP frameworks",
      "Practical templates to test and validate business ideas rapidly",
      "Access to weekly online Q&A sessions and founder community"
    ],
    modules: [
      {
        number: "01",
        title: "Entrepreneurial Mindset & Business Foundations",
        description: "Deconstruct how successful businesses create, deliver, and capture value.",
        topics: ["Mental models of founders", "Identifying market gaps", "Evaluating business opportunities"]
      },
      {
        number: "02",
        title: "Customer Discovery & Problem Validation",
        description: "Learn how to talk to potential customers and validate real pain points.",
        topics: ["User interview techniques", "Mapping customer journeys", "Problem vs solution fit"]
      },
      {
        number: "03",
        title: "Building Your Minimum Viable Product (MVP)",
        description: "Transform ideas into testable prototypes quickly and cost-effectively.",
        topics: ["Lean product development", "No-code prototyping tools", "Validation metrics"]
      },
      {
        number: "04",
        title: "Unit Economics & Pricing Fundamentals",
        description: "Understand the financial building blocks of a profitable business model.",
        topics: ["Cost structures & revenue streams", "Pricing strategies", "Calculating margin & breakeven"]
      },
      {
        number: "05",
        title: "Initial Go-to-Market & Customer Acquisition",
        description: "Discover low-cost, high-impact strategies to get your first 100 users.",
        topics: ["Organic acquisition channels", "Content & positioning", "Conversion basics"]
      },
      {
        number: "06",
        title: "Execution Roadmap & Next Steps",
        description: "Synthesize your learnings into an actionable business execution plan.",
        topics: ["Structuring your 90-day plan", "Pitching your idea", "Joining the alumni network"]
      }
    ],
    outcomes: [
      "Validated business concept with real customer feedback",
      "A complete 1-Page Lean Business Plan & financial model",
      "Confidence to launch your first venture or advance your career"
    ],
    mentors: [
      { name: "Anand Verma", role: "Former Product Lead", company: "Zomato", avatar: "AV" },
      { name: "Priya Nair", role: "Growth Strategist", company: "Ex-Freshworks", avatar: "PN" }
    ],
    faqs: [
      {
        question: "Can I take this while working full-time or studying?",
        answer: "Yes! GrowthX is specifically engineered for busy individuals, requiring only 2–4 hours of focused time per week."
      },
      {
        question: "What if I don't have a concrete business idea yet?",
        answer: "Module 1 and 2 guide you step-by-step through idea generation and market gap identification."
      }
    ]
  },
  hybrid: {
    id: "hybrid",
    name: "Online + Hybrid Builder",
    badge: "BEST FIT FOR EARLY-STAGE BUILDERS & PROFESSIONALS",
    matchScore: 98,
    eyebrow: "PRACTICAL APPLICATION PATH",
    format: "Online + Hybrid Live Workshops",
    price: "Middle-Tier Experience",
    duration: "12 Weeks",
    weeklyCommitment: "5–7 hours / week",
    batchStarts: "Delta Batch · October 2026",
    seatsLeft: 22,
    tagline: "Accelerate Your Business with Guided Mentorship & Execution",
    description: "A comprehensive program combining flexible online modules with interactive weekend workshops, live case studies, and personalized peer feedback.",
    whyFitReason: "Your profile indicates you have practical intent and are ready to dedicate 5–7 hours weekly. The Hybrid model gives you the perfect balance of guided accountability and real-world application.",
    fitBullets: [
      "Interactive hybrid sessions with active founders and industry experts",
      "Hands-on teardowns of your business model and acquisition funnels",
      "Structured peer working groups for accountability and networking",
      "Direct feedback from mentors on your business collateral"
    ],
    modules: [
      {
        number: "01",
        title: "Deep Market Sizing & Competitor Analysis",
        description: "Analyze market dynamics and position your business for competitive moat.",
        topics: ["TAM/SAM/SOM calculation", "Competitor matrix mapping", "Unfair advantage identification"]
      },
      {
        number: "02",
        title: "Value Proposition & Product-Market Fit",
        description: "Refine your core offering until customers actively demand it.",
        topics: ["Positioning frameworks", "Retention & engagement loops", "PMF survey metrics"]
      },
      {
        number: "03",
        title: "Digital Marketing & Scalable Acquisition Funnels",
        description: "Design automated marketing systems that convert prospects into paying clients.",
        topics: ["Paid & organic growth channels", "Funnel conversion optimization", "Copywriting for sales"]
      },
      {
        number: "04",
        title: "Financial Engineering & Cash Flow Operations",
        description: "Master financial modeling, budgeting, and unit economics.",
        topics: ["CAC to LTV optimization", "Working capital management", "Financial forecasting"]
      },
      {
        number: "05",
        title: "Operations, Team & Legal Foundations",
        description: "Set up the legal, structural, and operational systems to scale smoothly.",
        topics: ["Entity registration & IP", "Contract basics", "Hiring early team members"]
      },
      {
        number: "06",
        title: "Pitch Desk & Growth Presentation",
        description: "Present your business model to mentors for structured critique.",
        topics: ["Pitch deck storytelling", "Objection handling", "Growth milestone setting"]
      }
    ],
    outcomes: [
      "Operational business funnel with live traffic and conversion data",
      "Detailed 3-year financial model and unit economics blueprint",
      "Tested value proposition with active peer & mentor validation"
    ],
    mentors: [
      { name: "Rohan Kapoor", role: "Venture Partner", company: "PeakXV Alumni", avatar: "RK" },
      { name: "Sneha Menon", role: "Head of Marketing", company: "Ex-Razorpay", avatar: "SM" }
    ],
    faqs: [
      {
        question: "How are the hybrid sessions conducted?",
        answer: "Hybrid sessions combine high-energy interactive weekend webinars with optional local meetup group sessions."
      },
      {
        question: "Will I get 1-on-1 feedback on my business?",
        answer: "Yes, mentor office hours are built into the 12-week schedule for personal feedback."
      }
    ]
  },
  cohort: {
    id: "cohort",
    name: "PerpeX Cohort B-School",
    badge: "FLAGSHIP IMMERSIVE FOUNDER PROGRAM",
    matchScore: 99,
    eyebrow: "PREMIUM COHORT EXPERIENCE",
    format: "Exclusive Cohort + 1-on-1 Pitch Desk",
    price: "₹95,000",
    duration: "16 Weeks",
    weeklyCommitment: "8–12+ hours / week",
    batchStarts: "Delta Batch · October 2026",
    seatsLeft: 12,
    tagline: "The Elite Path for Founders Ready to Build, Scale & Pitch",
    description: "An intensive cohort experience designed for serious entrepreneurs and founders. Features KSUM Grant Guidance, 1-on-1 pitch desk sessions, and high-impact peer networking.",
    whyFitReason: "Your ambitious goals, experience level, and dedicated time commitment make you an ideal candidate for our flagship Cohort B-School. This program gives you direct access to grants, mentors, and investor desks.",
    fitBullets: [
      "Dedicated KSUM Grant Guidance & Pitch Desk advisory",
      "1-on-1 mentorship with seasoned venture operators & startup founders",
      "Exclusive access to private founder retreats & investor network",
      "Complete hands-on assistance with fundraising decks & grant applications"
    ],
    modules: [
      {
        number: "01",
        title: "Advanced Founder Strategy & Venture Economics",
        description: "Master high-level strategic decision-making and venture creation.",
        topics: ["Moat building & defensibility", "Platform business models", "Scale economics"]
      },
      {
        number: "02",
        title: "Scale Acquisition Systems & B2B/B2C Engines",
        description: "Build repeatable sales engines and high-volume acquisition machines.",
        topics: ["Enterprise sales pipelines", "Growth loops & viral mechanics", "Performance marketing at scale"]
      },
      {
        number: "03",
        title: "Financial Engineering & Cap Table Management",
        description: "Navigate startup valuations, equity distribution, and cap table structures.",
        topics: ["Cap table optimization", "SAFE notes & term sheets", "Investor-grade financial modeling"]
      },
      {
        number: "04",
        title: "KSUM Grant Guidance & Non-Dilutive Funding",
        description: "Tap into state & central government startup grants, subsidies, and schemes.",
        topics: ["KSUM grant application blueprint", "DPIIT recognition", "Grant pitch preparation"]
      },
      {
        number: "05",
        title: "Investor Pitch Desk & Storytelling",
        description: "Craft a narrative that captures angel investors and VC attention.",
        topics: ["10-slide deck mastery", "Data-driven narrative design", "Mock investor panel defense"]
      },
      {
        number: "06",
        title: "Demo Day & Lifetime Founder Network",
        description: "Present your venture live on Demo Day to invited angels and mentors.",
        topics: ["Live Demo Day presentation", "Post-program advisory access", "Lifetime founder club membership"]
      }
    ],
    outcomes: [
      "Grant-ready application for KSUM and government funding schemes",
      "Investor-grade pitch deck & financial model vetted by founders",
      "Direct introductions to mentors, angel networks, and early investors"
    ],
    mentors: [
      { name: "Dr. Vikram Sethi", role: "Serial Entrepreneur", company: "3x Founder (1 Exit)", avatar: "VS" },
      { name: "Meera Krishnan", role: "Grant & Policy Advisor", company: "KSUM Partner Desk", avatar: "MK" },
      { name: "Siddharth Roy", role: "Angel Investor", company: "Early Stage Syndicate", avatar: "SR" }
    ],
    faqs: [
      {
        question: "Is KSUM Grant Guidance guaranteed?",
        answer: "Our team directly reviews and helps structure your application to ensure maximum alignment with official grant criteria."
      },
      {
        question: "How selective is the Cohort B-School?",
        answer: "We cap each cohort at 35 seats to ensure intimate mentorship and high-quality peer interactions."
      }
    ]
  }
};
