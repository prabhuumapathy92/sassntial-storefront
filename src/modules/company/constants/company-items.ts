export type CompanyItem = {
  slug: string
  label: string
  eyebrow: string
  title: string
  summary: string
  intro: string
  highlights: string[]
  supportPoints: string[]
  sections?: Array<{
    title: string
    description: string
    imageAlt?: string
    imageUrl?: string
  }>
  blogPosts?: BlogPost[]
}

export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  date: string
  readTime: string
  category: string
  imageUrl?: string
  body: string[]
}

const svgDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const aboutSection01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900" fill="none">
  <defs>
    <linearGradient id="aboutBg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eaf3ff" />
      <stop offset="55%" stop-color="#f7fbff" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="aboutAccent1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd8f8" />
      <stop offset="100%" stop-color="#cfe8ff" />
    </linearGradient>
  </defs>
  <rect width="1400" height="900" fill="url(#aboutBg1)" />
  <rect x="120" y="140" width="1160" height="620" rx="48" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="200" y="230" width="420" height="18" rx="9" fill="url(#aboutAccent1)" />
  <rect x="200" y="270" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="300" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="330" width="440" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="390" width="260" height="42" rx="21" fill="#9fd8f8" />
  <text x="220" y="418" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" font-weight="700">
    Delivery Model
  </text>
  <rect x="780" y="240" width="420" height="320" rx="28" fill="#f1f5f9" />
  <text x="820" y="420" font-family="Arial, sans-serif" font-size="22" fill="#0f172a" font-weight="700">
    Training + Rollout
  </text>
</svg>
`

const aboutSection02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1400" height="900" viewBox="0 0 1400 900" fill="none">
  <defs>
    <linearGradient id="aboutBg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f7fbff" />
      <stop offset="55%" stop-color="#fff7ec" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="aboutAccent2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b6e3ff" />
      <stop offset="100%" stop-color="#9fd8f8" />
    </linearGradient>
  </defs>
  <rect width="1400" height="900" fill="url(#aboutBg2)" />
  <circle cx="260" cy="220" r="120" fill="#e1efff" />
  <circle cx="1140" cy="260" r="120" fill="#ffe8cc" />
  <rect x="160" y="300" width="1080" height="380" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="220" y="360" width="360" height="18" rx="9" fill="url(#aboutAccent2)" />
  <rect x="220" y="400" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="430" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="460" width="440" height="14" rx="7" fill="#dde7f1" />
  <text x="760" y="520" font-family="Arial, sans-serif" font-size="22" fill="#0f172a" font-weight="700">
    Adoption Readiness
  </text>
</svg>
`

const blogCard01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" fill="none">
  <defs>
    <linearGradient id="blogBg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6aa9ff" />
      <stop offset="55%" stop-color="#4c8dd9" />
      <stop offset="100%" stop-color="#2b6cb0" />
    </linearGradient>
  </defs>
  <rect width="1200" height="720" fill="url(#blogBg1)" />
  <circle cx="260" cy="200" r="110" fill="#8fbfff" />
  <circle cx="900" cy="240" r="130" fill="#7aa8e6" />
  <rect x="200" y="340" width="480" height="24" rx="12" fill="#cfe2ff" />
  <rect x="200" y="380" width="360" height="18" rx="9" fill="#b7d3ff" />
  <rect x="200" y="415" width="420" height="18" rx="9" fill="#b7d3ff" />
</svg>
`

const blogCard02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" fill="none">
  <defs>
    <linearGradient id="blogBg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#3437a8" />
      <stop offset="50%" stop-color="#2c2f8f" />
      <stop offset="100%" stop-color="#1c1f6b" />
    </linearGradient>
  </defs>
  <rect width="1200" height="720" fill="url(#blogBg2)" />
  <rect x="140" y="140" width="520" height="320" rx="20" fill="#4c4fb7" />
  <rect x="720" y="200" width="320" height="220" rx="20" fill="#5a5dc4" />
  <circle cx="920" cy="140" r="60" fill="#7a7fe0" />
  <rect x="200" y="520" width="420" height="24" rx="12" fill="#c9cbff" />
  <rect x="200" y="560" width="320" height="18" rx="9" fill="#b2b5f2" />
</svg>
`

const blogCard03Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="720" viewBox="0 0 1200 720" fill="none">
  <defs>
    <linearGradient id="blogBg3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#6f8bff" />
      <stop offset="50%" stop-color="#3c5ac4" />
      <stop offset="100%" stop-color="#243a8f" />
    </linearGradient>
  </defs>
  <rect width="1200" height="720" fill="url(#blogBg3)" />
  <rect x="160" y="180" width="360" height="260" rx="20" fill="#7da0ff" />
  <rect x="560" y="200" width="420" height="300" rx="20" fill="#4f6ed9" />
  <circle cx="920" cy="150" r="70" fill="#9db8ff" />
  <rect x="200" y="540" width="420" height="24" rx="12" fill="#d4ddff" />
</svg>
`

const createCompanyDetailPage = ({
  slug,
  label,
  eyebrow,
  summary,
  intro,
  highlights,
  supportPoints,
}: {
  slug: string
  label: string
  eyebrow: string
  summary: string
  intro: string
  highlights: string[]
  supportPoints: string[]
}): CompanyItem => ({
  slug,
  label,
  eyebrow,
  title: `${label} explained through the same shared marketing page system.`,
  summary,
  intro,
  highlights,
  supportPoints,
})

const menuCompanyItems: CompanyItem[] = [
  createCompanyDetailPage({
    slug: "our-story",
    label: "Our Story",
    eyebrow: "About Ignite",
    summary:
      "The background, delivery philosophy, and growth path behind the company.",
    intro:
      "This page explains how the team evolved, what problems it focuses on, and how delivery strategy shaped the current operating model.",
    highlights: [
      "Origin story and company direction",
      "How the delivery model was shaped",
      "Why the team focuses on practical execution",
    ],
    supportPoints: ["Background", "Positioning", "Growth"],
  }),
  createCompanyDetailPage({
    slug: "our-values",
    label: "Our Values",
    eyebrow: "About Ignite",
    summary:
      "The principles that guide delivery quality, collaboration, and client communication.",
    intro:
      "Use this page to understand the standards the team expects in planning, execution, ownership, and continuous improvement.",
    highlights: [
      "Clear communication over ambiguity",
      "Execution discipline over performative process",
      "Long-term usefulness over short-term optics",
    ],
    supportPoints: ["Clarity", "Ownership", "Durability"],
  }),
  createCompanyDetailPage({
    slug: "our-team",
    label: "Our Team",
    eyebrow: "About Ignite",
    summary:
      "An overview of the cross-functional team behind strategy, design, and delivery work.",
    intro:
      "This page gives prospects and partners a clearer sense of how the team is organized and how collaboration works across disciplines.",
    highlights: [
      "Cross-functional delivery structure",
      "Design, strategy, and platform collaboration",
      "Clear roles through launch and follow-up",
    ],
    supportPoints: ["Strategy", "Design", "Delivery"],
  }),
  createCompanyDetailPage({
    slug: "clients",
    label: "Clients",
    eyebrow: "About Ignite",
    summary:
      "Examples of the kinds of teams, contexts, and business models the company supports.",
    intro:
      "This page is designed to show who the work is for, what engagement patterns are common, and where the delivery model tends to fit best.",
    highlights: [
      "B2B, ecommerce, and multi-location contexts",
      "Programs tied to launch, growth, and enablement",
      "Structured delivery for teams with multiple stakeholders",
    ],
    supportPoints: ["Fit", "Engagements", "Use Cases"],
  }),
  createCompanyDetailPage({
    slug: "diversity-inclusion",
    label: "Diversity & Inclusion",
    eyebrow: "About Ignite",
    summary:
      "How inclusion, representation, and team access are reflected in working practices.",
    intro:
      "This page outlines the commitments and internal standards that shape hiring, collaboration, and team participation across the company.",
    highlights: [
      "Inclusive hiring and collaboration intent",
      "Respectful communication standards",
      "Broader access to opportunity and contribution",
    ],
    supportPoints: ["Hiring", "Culture", "Access"],
  }),
  createCompanyDetailPage({
    slug: "our-awards",
    label: "Our Awards",
    eyebrow: "Hire Us",
    summary:
      "Recognition, milestones, and proof points that support the company narrative.",
    intro:
      "This page gives prospects a single place to review notable recognition, delivery milestones, and the signals that reinforce credibility.",
    highlights: [
      "Recognition that supports positioning",
      "Milestones connected to delivery maturity",
      "Proof points teams can reference in evaluations",
    ],
    supportPoints: ["Recognition", "Milestones", "Credibility"],
  }),
  createCompanyDetailPage({
    slug: "referral-partner",
    label: "Become a Referral Partner",
    eyebrow: "Join Our Team",
    summary:
      "Information for consultants, partners, and operators interested in referral collaboration.",
    intro:
      "Use this page to explain how referral partnerships fit, what kinds of opportunities are relevant, and how conversations are structured.",
    highlights: [
      "Referral fit and partner profile",
      "How collaboration is coordinated",
      "What information helps qualify opportunities",
    ],
    supportPoints: ["Partners", "Referrals", "Coordination"],
  }),
  createCompanyDetailPage({
    slug: "hiring-notice",
    label: "Hiring Notice",
    eyebrow: "Join Our Team",
    summary:
      "Important information for candidates reviewing active roles and hiring expectations.",
    intro:
      "This page clarifies how the hiring process works, what communication to expect, and what standards apply across open roles.",
    highlights: [
      "How the hiring flow is structured",
      "What candidates should prepare for",
      "How role expectations are communicated",
    ],
    supportPoints: ["Process", "Expectations", "Candidates"],
  }),
]

export const companyItems: CompanyItem[] = [
  {
    slug: "about-us",
    label: "About us",
    eyebrow: "Company Overview",
    title: "A delivery team built around training, rollout, and adoption.",
    summary:
      "Learn how strategy, enablement, and product guidance are combined into one operating model for delivery teams.",
    intro:
      "Our approach is structured around continuity. The same group that helps define the rollout path also supports training, operational readiness, and the next phase of adoption.",
    highlights: [
      "Shared ownership from discovery through launch",
      "Training and operational guidance in one model",
      "Clearer coordination between product and business teams",
    ],
    supportPoints: [
      "Cross-functional planning",
      "Rollout support",
      "Post-launch enablement",
    ],
    sections: [
      {
        title: "About Us",
        description:
          "At DataSack Solutions, we deliver innovative IT services with a focus on reliability, clarity, and measurable outcomes.",
        imageAlt: "Team working on delivery planning",
        imageUrl: svgDataUri(aboutSection01Svg),
      },
      {
        title: "From rollout to adoption, we stay with you.",
        description:
          "We help teams move from training into sustained adoption by aligning stakeholders, documentation, and execution plans.",
        imageAlt: "Operational readiness and adoption",
        imageUrl: svgDataUri(aboutSection02Svg),
      },
    ],
  },
  {
    slug: "careers",
    label: "Careers",
    eyebrow: "Team Growth",
    title: "Join a team focused on practical delivery and clear execution.",
    summary:
      "Explore the kind of work, collaboration style, and delivery mindset we look for across strategy, design, and platform roles.",
    intro:
      "We look for people who can connect planning to execution. That means working across functions, simplifying complexity for clients, and helping teams move with confidence.",
    highlights: [
      "Work across strategy, design, and platform delivery",
      "Contribute to client-facing rollout and enablement programs",
      "Build systems that stay useful after launch",
    ],
    supportPoints: [
      "Collaborative delivery culture",
      "Applied learning",
      "High ownership",
    ],
  },
  {
    slug: "contact-us",
    label: "Contact Us",
    eyebrow: "Reach The Team",
    title: "Start a conversation about training, services, or rollout needs.",
    summary:
      "Use the contact page to route product, enablement, and partnership conversations to the right team quickly.",
    intro:
      "Whether you need a walkthrough, a project discussion, or a follow-up on an active engagement, the contact path is designed to reduce handoffs and connect you to the right context faster.",
    highlights: [
      "Product and training inquiries",
      "Service and delivery conversations",
      "Partnership and general support routing",
    ],
    supportPoints: [
      "Demo requests",
      "Project scoping",
      "General support",
    ],
  },
  ...menuCompanyItems,
  {
    slug: "blog",
    label: "Blog",
    eyebrow: "Company Blog",
    title: "Insights, launch notes, and delivery stories.",
    summary:
      "Updates on strategy, design, and platform delivery, with a focus on practical takeaways.",
    intro:
      "Explore product thinking, delivery lessons, and the systems we build to keep teams moving with clarity.",
    highlights: [
      "Launch notes and delivery playbooks",
      "Platform and tooling perspectives",
      "Strategic storytelling for teams",
    ],
    supportPoints: ["News", "Business", "Technology"],
    blogPosts: [
      {
        slug: "distributed-databases-agentic-ai",
        title: "Distributed Databases: Enabling Agentic AI",
        excerpt:
          "The Agentic AI Infrastructure Challenge represents a paradigm shift from traditional AI. Learn the patterns teams are adopting.",
        date: "9/21/2025",
        readTime: "5 min read",
        category: "news",
        imageUrl: svgDataUri(blogCard01Svg),
        body: [
          "Agentic AI systems need stateful, low-latency access to data across regions. That pushes teams to rethink how they store, replicate, and serve context.",
          "We outline the patterns that are emerging in production: sharded knowledge stores, locality-aware routing, and guardrails around consistency for critical workflows.",
          "The teams that move fastest align data architecture with product intent so orchestration can stay simple and predictable.",
        ],
      },
      {
        slug: "product-interfaces-2025",
        title: "Product Interfaces in 2025",
        excerpt:
          "How teams are shaping next-gen interfaces with deliberate motion, depth, and system clarity across SaaS products.",
        date: "9/18/2025",
        readTime: "4 min read",
        category: "business",
        imageUrl: svgDataUri(blogCard02Svg),
        body: [
          "Interface trends are shifting toward intentional motion and clear hierarchy. The best teams focus on framing key actions without overwhelming the user.",
          "We highlight the patterns that are working in production and how to translate them into maintainable systems.",
          "Clarity is still the most valuable feature. The tools should feel fast, not flashy.",
        ],
      },
      {
        slug: "agentic-ai-across-global-regions",
        title: "Agentic AI Across Global Regions",
        excerpt:
          "Building reliable, multi-region AI systems demands new approaches to data, orchestration, and governance.",
        date: "9/9/2025",
        readTime: "5 min read",
        category: "technology",
        imageUrl: svgDataUri(blogCard03Svg),
        body: [
          "Multi-region AI deployments require careful orchestration so latency, cost, and reliability stay within target.",
          "Teams are adopting hybrid replication strategies and separating control-plane and data-plane responsibilities.",
          "The result is a more resilient delivery pipeline that can scale with real-world usage.",
        ],
      },
      {
        slug: "design-systems-that-scale",
        title: "Design Systems That Scale",
        excerpt:
          "A practical guide to keeping UI velocity high without losing consistency or accessibility.",
        date: "8/27/2025",
        readTime: "6 min read",
        category: "design",
        imageUrl: svgDataUri(blogCard02Svg),
        body: [
          "Design systems work when they reduce decision fatigue and keep teams aligned on patterns.",
          "We outline the components that matter most and how to keep documentation light but effective.",
          "Accessibility and consistency are not tradeoffs. They are what make systems durable.",
        ],
      },
      {
        slug: "launch-readiness-checklist",
        title: "Launch Readiness Checklist",
        excerpt:
          "A step-by-step checklist to align stakeholders, content, and enablement before go-live.",
        date: "8/10/2025",
        readTime: "5 min read",
        category: "tutorial",
        imageUrl: svgDataUri(blogCard03Svg),
        body: [
          "Launch readiness is a discipline. This checklist helps teams confirm messaging, documentation, and enablement before release.",
          "We recommend reviewing it with product, marketing, and support to avoid last-minute gaps.",
          "A small investment in readiness saves large amounts of post-launch rework.",
        ],
      },
    ],
  },
]

export const getCompanyBySlug = (slug: string) =>
  companyItems.find((item) => item.slug === slug)

export const getBlogPostBySlug = (slug: string) => {
  const blogItem = companyItems.find((item) => item.slug === "blog")
  return blogItem?.blogPosts?.find((post) => post.slug === slug)
}
