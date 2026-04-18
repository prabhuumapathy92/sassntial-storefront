export type ServiceItem = {
  slug: string
  label: string
  eyebrow: string
  title: string
  summary: string
  intro: string
  capabilities: string[]
  outcomes: string[]
  sections?: Array<{
    title: string
    description: string
    items?: string[]
    imageAlt?: string
    imageUrl?: string
  }>
}

const svgDataUri = (svg: string) =>
  `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`

const brandingSection01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg1" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#e6f3ff" />
      <stop offset="55%" stop-color="#fff7ea" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent1" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd8f8" />
      <stop offset="100%" stop-color="#cde9ff" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg1)" />
  <circle cx="220" cy="160" r="120" fill="#e1efff" />
  <circle cx="980" cy="220" r="140" fill="#ffe8cc" />
  <rect x="140" y="260" width="520" height="380" rx="36" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="180" y="320" width="320" height="16" rx="8" fill="url(#accent1)" />
  <rect x="180" y="360" width="380" height="14" rx="7" fill="#dbe7f3" />
  <rect x="180" y="390" width="340" height="14" rx="7" fill="#dbe7f3" />
  <rect x="180" y="420" width="300" height="14" rx="7" fill="#dbe7f3" />
  <rect x="180" y="470" width="220" height="42" rx="21" fill="#9fd8f8" />
  <text x="200" y="498" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" font-weight="700">
    Brand Strategy
  </text>
  <text x="720" y="520" font-family="Arial, sans-serif" font-size="48" fill="#0f172a" font-weight="700">
    BRANDING
  </text>
  <text x="720" y="565" font-family="Arial, sans-serif" font-size="18" fill="#475569">
    Identity, voice, and launch systems
  </text>
</svg>
`

const brandingSection02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg2" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#fff7f0" />
      <stop offset="50%" stop-color="#f1f5ff" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent2" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#cfe8ff" />
      <stop offset="100%" stop-color="#9fd8f8" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg2)" />
  <rect x="120" y="140" width="960" height="620" rx="48" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="190" y="210" width="360" height="20" rx="10" fill="url(#accent2)" />
  <rect x="190" y="260" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="190" y="290" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="190" y="320" width="440" height="14" rx="7" fill="#dde7f1" />
  <rect x="190" y="370" width="260" height="42" rx="21" fill="#9fd8f8" />
  <text x="210" y="398" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" font-weight="700">
    Graphic Design
  </text>
  <rect x="640" y="220" width="340" height="250" rx="28" fill="#f1f5f9" />
  <rect x="680" y="260" width="260" height="20" rx="10" fill="#cbd5e1" />
  <rect x="680" y="300" width="220" height="14" rx="7" fill="#d6e0ea" />
  <rect x="680" y="330" width="240" height="14" rx="7" fill="#d6e0ea" />
  <rect x="640" y="500" width="340" height="200" rx="28" fill="#fff1e6" />
  <text x="700" y="620" font-family="Arial, sans-serif" font-size="22" fill="#0f172a" font-weight="700">
    UI and UX
  </text>
</svg>
`

const experienceSection01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg3" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef6ff" />
      <stop offset="55%" stop-color="#fdf5ff" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent3" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b6e3ff" />
      <stop offset="100%" stop-color="#9fd8f8" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg3)" />
  <rect x="130" y="170" width="940" height="560" rx="48" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="200" y="240" width="420" height="20" rx="10" fill="url(#accent3)" />
  <rect x="200" y="290" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="320" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="350" width="440" height="14" rx="7" fill="#dde7f1" />
  <rect x="200" y="410" width="300" height="42" rx="21" fill="#9fd8f8" />
  <text x="220" y="438" font-family="Arial, sans-serif" font-size="16" fill="#0f172a" font-weight="700">
    UX Strategy
  </text>
  <rect x="720" y="250" width="300" height="200" rx="24" fill="#f1f5f9" />
  <rect x="720" y="470" width="300" height="200" rx="24" fill="#fff1e6" />
  <text x="760" y="570" font-family="Arial, sans-serif" font-size="20" fill="#0f172a" font-weight="700">
    Journeys
  </text>
</svg>
`

const experienceSection02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg4" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f7fbff" />
      <stop offset="50%" stop-color="#fff7ec" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent4" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd8f8" />
      <stop offset="100%" stop-color="#bde5ff" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg4)" />
  <circle cx="260" cy="220" r="120" fill="#e1efff" />
  <circle cx="940" cy="260" r="120" fill="#ffe8cc" />
  <rect x="160" y="300" width="880" height="380" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="220" y="360" width="360" height="20" rx="10" fill="url(#accent4)" />
  <rect x="220" y="410" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="440" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="470" width="440" height="14" rx="7" fill="#dde7f1" />
  <text x="700" y="520" font-family="Arial, sans-serif" font-size="24" fill="#0f172a" font-weight="700">
    Interface Systems
  </text>
</svg>
`

const technologiesSection01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg5" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#eef7ff" />
      <stop offset="50%" stop-color="#f3f8ff" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent5" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd8f8" />
      <stop offset="100%" stop-color="#bde5ff" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg5)" />
  <rect x="150" y="170" width="900" height="560" rx="42" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="220" y="250" width="420" height="20" rx="10" fill="url(#accent5)" />
  <rect x="220" y="300" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="330" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="360" width="440" height="14" rx="7" fill="#dde7f1" />
  <rect x="720" y="260" width="260" height="180" rx="24" fill="#f1f5f9" />
  <rect x="720" y="470" width="260" height="180" rx="24" fill="#fff1e6" />
  <text x="250" y="430" font-family="Arial, sans-serif" font-size="20" fill="#0f172a" font-weight="700">
    Platform Enablement
  </text>
</svg>
`

const technologiesSection02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg6" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f7fbff" />
      <stop offset="55%" stop-color="#fff7ec" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent6" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b6e3ff" />
      <stop offset="100%" stop-color="#9fd8f8" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg6)" />
  <circle cx="260" cy="220" r="120" fill="#e1efff" />
  <circle cx="940" cy="260" r="120" fill="#ffe8cc" />
  <rect x="180" y="300" width="840" height="380" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="240" y="360" width="360" height="20" rx="10" fill="url(#accent6)" />
  <rect x="240" y="410" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="240" y="440" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="240" y="470" width="440" height="14" rx="7" fill="#dde7f1" />
  <text x="700" y="520" font-family="Arial, sans-serif" font-size="22" fill="#0f172a" font-weight="700">
    Integration Planning
  </text>
</svg>
`

const marketingSection01Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg7" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f4f8ff" />
      <stop offset="50%" stop-color="#fff5ec" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent7" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#9fd8f8" />
      <stop offset="100%" stop-color="#cfe8ff" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg7)" />
  <rect x="140" y="170" width="920" height="560" rx="44" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="220" y="250" width="420" height="20" rx="10" fill="url(#accent7)" />
  <rect x="220" y="300" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="330" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="220" y="360" width="440" height="14" rx="7" fill="#dde7f1" />
  <rect x="700" y="260" width="280" height="180" rx="24" fill="#f1f5f9" />
  <rect x="700" y="470" width="280" height="180" rx="24" fill="#fff1e6" />
  <text x="250" y="430" font-family="Arial, sans-serif" font-size="20" fill="#0f172a" font-weight="700">
    Launch Programs
  </text>
</svg>
`

const marketingSection02Svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="1200" height="900" viewBox="0 0 1200 900" fill="none">
  <defs>
    <linearGradient id="bg8" x1="0" y1="0" x2="1" y2="1">
      <stop offset="0%" stop-color="#f7fbff" />
      <stop offset="50%" stop-color="#fff7ec" />
      <stop offset="100%" stop-color="#ffffff" />
    </linearGradient>
    <linearGradient id="accent8" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%" stop-color="#b6e3ff" />
      <stop offset="100%" stop-color="#9fd8f8" />
    </linearGradient>
  </defs>
  <rect width="1200" height="900" fill="url(#bg8)" />
  <circle cx="260" cy="220" r="120" fill="#e1efff" />
  <circle cx="940" cy="260" r="120" fill="#ffe8cc" />
  <rect x="180" y="300" width="840" height="380" rx="40" fill="#ffffff" stroke="#e2e8f0" stroke-width="2" />
  <rect x="240" y="360" width="360" height="20" rx="10" fill="url(#accent8)" />
  <rect x="240" y="410" width="520" height="14" rx="7" fill="#dde7f1" />
  <rect x="240" y="440" width="480" height="14" rx="7" fill="#dde7f1" />
  <rect x="240" y="470" width="440" height="14" rx="7" fill="#dde7f1" />
  <text x="700" y="520" font-family="Arial, sans-serif" font-size="22" fill="#0f172a" font-weight="700">
    Growth Reporting
  </text>
</svg>
`

const createServiceDetailPage = ({
  slug,
  label,
  eyebrow,
  summary,
  intro,
  capabilities,
  outcomes,
}: {
  slug: string
  label: string
  eyebrow: string
  summary: string
  intro: string
  capabilities: string[]
  outcomes: string[]
}): ServiceItem => ({
  slug,
  label,
  eyebrow,
  title: `${label} programs built for structured execution and measurable growth.`,
  summary,
  intro,
  capabilities,
  outcomes,
  sections: [
    {
      title: `${label} strategy and execution`,
      description: intro,
      items: capabilities,
    },
    {
      title: `What teams gain from ${label.toLowerCase()}`,
      description:
        "Each page follows the same shared design system, but the messaging and focus points are specific to the service area.",
      items: outcomes,
    },
  ],
})

const menuServiceItems: ServiceItem[] = [
  createServiceDetailPage({
    slug: "content-marketing",
    label: "Content Marketing",
    eyebrow: "Owned Media",
    summary:
      "Editorial planning, content systems, and campaign-ready storytelling for demand generation teams.",
    intro:
      "We plan, produce, and operationalize content programs that support search visibility, sales enablement, and repeatable campaign execution.",
    capabilities: [
      "Editorial calendars and topic architecture",
      "Campaign content production and repurposing",
      "Sales and lifecycle content planning",
    ],
    outcomes: [
      "Consistent publishing systems",
      "Stronger alignment between content and conversion goals",
      "Reusable assets for multiple channels",
    ],
  }),
  createServiceDetailPage({
    slug: "conversion-rate-optimization",
    label: "Conversion Rate Optimization",
    eyebrow: "Owned Media",
    summary:
      "Testing programs and journey refinement focused on improving action rates across key landing experiences.",
    intro:
      "We evaluate friction points, shape experiment plans, and refine pages so teams can improve conversion without rebuilding the full experience.",
    capabilities: [
      "Landing page and funnel audits",
      "Experiment design and prioritization",
      "Offer, messaging, and layout refinement",
    ],
    outcomes: [
      "Higher confidence in page changes",
      "Clearer prioritization for revenue-impacting tests",
      "Better conversion performance over time",
    ],
  }),
  createServiceDetailPage({
    slug: "creative-branding",
    label: "Creative & Branding",
    eyebrow: "Owned Media",
    summary:
      "Brand systems, campaign visuals, and creative direction built for consistency across channels.",
    intro:
      "We create the visual and verbal systems teams need to launch campaigns, product initiatives, and brand updates with more consistency.",
    capabilities: [
      "Visual identity and campaign concepts",
      "Creative systems for ads, landing pages, and sales materials",
      "Guidelines and reusable creative assets",
    ],
    outcomes: [
      "Stronger brand consistency",
      "Faster creative production cycles",
      "Clearer design direction across teams",
    ],
  }),
  createServiceDetailPage({
    slug: "website-development",
    label: "Website Development",
    eyebrow: "Owned Media",
    summary:
      "Frontend, CMS, and landing page implementation support built around reliable delivery.",
    intro:
      "We help teams ship marketing sites and conversion experiences with cleaner implementation plans, tighter QA, and maintainable frontends.",
    capabilities: [
      "Marketing site and landing page builds",
      "CMS implementation and component systems",
      "QA readiness and launch coordination",
    ],
    outcomes: [
      "Faster delivery from approved designs",
      "Cleaner handoff between design and engineering",
      "More reliable release cycles",
    ],
  }),
  createServiceDetailPage({
    slug: "wordpress-development",
    label: "WordPress Development",
    eyebrow: "Owned Media",
    summary:
      "WordPress delivery support for content-driven teams that need scalable publishing and maintainable templates.",
    intro:
      "We structure WordPress builds around editorial workflows, template reuse, and reliable launch practices for growth teams.",
    capabilities: [
      "Custom theme and template implementation",
      "Publishing workflow refinement",
      "Performance and plugin review",
    ],
    outcomes: [
      "Better CMS usability for content teams",
      "Cleaner template governance",
      "Reduced operational issues during updates",
    ],
  }),
  createServiceDetailPage({
    slug: "reporting-data-analytics",
    label: "Reporting & Data Analytics",
    eyebrow: "Owned Media",
    summary:
      "Measurement frameworks, dashboards, and reporting routines that connect channel activity to business decisions.",
    intro:
      "We shape reporting systems that help teams move past surface metrics and understand what is driving performance, cost, and opportunity.",
    capabilities: [
      "KPI framework design",
      "Dashboard planning and data-source alignment",
      "Leadership reporting summaries",
    ],
    outcomes: [
      "Clearer visibility into campaign health",
      "More useful reporting for stakeholders",
      "Better prioritization based on signal rather than noise",
    ],
  }),
  createServiceDetailPage({
    slug: "email-sms-marketing",
    label: "Email & SMS Marketing",
    eyebrow: "Owned Media",
    summary:
      "Lifecycle messaging programs that connect onboarding, nurture, retention, and promotional communication.",
    intro:
      "We design messaging sequences and campaign structures so customer communication stays timely, segmented, and operationally sustainable.",
    capabilities: [
      "Lifecycle flow architecture",
      "Campaign planning and segmentation",
      "Performance review and optimization",
    ],
    outcomes: [
      "Stronger retention and re-engagement patterns",
      "More coordinated owned-channel messaging",
      "Better use of customer intent signals",
    ],
  }),
  createServiceDetailPage({
    slug: "lifecycle-marketing",
    label: "Lifecycle Marketing",
    eyebrow: "Owned Media",
    summary:
      "Customer-journey programs that connect acquisition, activation, retention, and expansion efforts.",
    intro:
      "We build lifecycle strategies that align audience state, message timing, and channel execution into a coherent operating model.",
    capabilities: [
      "Lifecycle stage mapping",
      "Cross-channel nurture and retention planning",
      "Operational playbooks for recurring campaigns",
    ],
    outcomes: [
      "More coherent customer journeys",
      "Better coordination across teams and tools",
      "Improved retention-oriented execution",
    ],
  }),
  createServiceDetailPage({
    slug: "seo",
    label: "SEO",
    eyebrow: "Earned Media",
    summary:
      "AI-powered SEO services built to improve visibility across search engines, AI platforms, and conversational discovery experiences.",
    intro:
      "Drive smarter growth with AI-powered SEO, automation, GEO, AEO, and advanced analytics that help your brand rank across modern search experiences.",
    capabilities: [
      "Technical SEO optimization and Core Web Vitals improvements",
      "On-page, content, and topic-cluster strategy",
      "AI SEO for GEO, AEO, and conversational discovery",
    ],
    outcomes: [
      "Stronger visibility across search and AI answer surfaces",
      "Qualified organic traffic and measurable conversions",
      "Long-term authority growth supported by automation and analytics",
    ],
  }),
  createServiceDetailPage({
    slug: "local-seo",
    label: "Local SEO",
    eyebrow: "Earned Media",
    summary:
      "Location-based visibility programs for brands operating across multiple markets or service areas.",
    intro:
      "We structure local search programs around listings, local content, and market-level optimization so teams can improve local discovery.",
    capabilities: [
      "Location page and listing strategy",
      "Multi-location visibility planning",
      "Local performance monitoring",
    ],
    outcomes: [
      "Better local search consistency",
      "Stronger location-level discoverability",
      "Clearer operations for distributed teams",
    ],
  }),
  createServiceDetailPage({
    slug: "ai-seo",
    label: "AI SEO",
    eyebrow: "Earned Media",
    summary:
      "Search programs adapted for AI-assisted discovery, answer experiences, and evolving query behavior.",
    intro:
      "We help teams adjust search content and technical patterns for a landscape shaped by AI summaries, answer engines, and intent-rich discovery.",
    capabilities: [
      "Content structuring for AI-assisted search",
      "Entity and authority planning",
      "Search-format experimentation and review",
    ],
    outcomes: [
      "More resilient search planning",
      "Better readiness for changing discovery models",
      "Clearer experimentation paths for search teams",
    ],
  }),
  createServiceDetailPage({
    slug: "digital-pr",
    label: "Digital PR",
    eyebrow: "Earned Media",
    summary:
      "Story development and outreach programs that support authority building, awareness, and link acquisition.",
    intro:
      "We shape narratives, media hooks, and outreach operations so teams can build authority with purposeful visibility programs.",
    capabilities: [
      "Narrative development and campaign hooks",
      "Outreach planning and asset support",
      "Authority-building program coordination",
    ],
    outcomes: [
      "Clearer market-facing stories",
      "Better support for earned visibility efforts",
      "More intentional authority-building initiatives",
    ],
  }),
  createServiceDetailPage({
    slug: "social-media-management",
    label: "Social Media Management",
    eyebrow: "Earned Media",
    summary:
      "Channel planning, calendar management, and publishing systems for ongoing social execution.",
    intro:
      "We help teams operationalize social channels with stronger planning, better campaign alignment, and clearer editorial consistency.",
    capabilities: [
      "Channel strategy and role definition",
      "Publishing cadence and content planning",
      "Cross-channel campaign coordination",
    ],
    outcomes: [
      "More consistent social execution",
      "Better alignment with campaign calendars",
      "Clearer ownership across social workflows",
    ],
  }),
  createServiceDetailPage({
    slug: "ppc",
    label: "PPC",
    eyebrow: "Paid Media",
    summary:
      "Paid search program planning and optimization designed around efficiency, intent, and measurable pipeline impact.",
    intro:
      "We help teams structure paid search accounts and reporting loops so campaign decisions are faster, clearer, and tied to business outcomes.",
    capabilities: [
      "Account structure and keyword strategy",
      "Landing page and offer alignment",
      "Bid, budget, and reporting optimization",
    ],
    outcomes: [
      "Clearer paid search decision-making",
      "Better coordination between ads and landing experiences",
      "More useful performance reporting",
    ],
  }),
  createServiceDetailPage({
    slug: "paid-social-advertising",
    label: "Paid Social Advertising",
    eyebrow: "Paid Media",
    summary:
      "Audience, message, and creative planning for social ad programs across launch and demand-generation campaigns.",
    intro:
      "We build paid social systems that connect targeting, creative, and campaign structure into more intentional acquisition programs.",
    capabilities: [
      "Audience and offer planning",
      "Creative testing structures",
      "Campaign optimization and reporting",
    ],
    outcomes: [
      "More disciplined paid social testing",
      "Better creative-to-audience alignment",
      "Stronger visibility into paid social performance",
    ],
  }),
  createServiceDetailPage({
    slug: "display-advertising",
    label: "Display Advertising",
    eyebrow: "Paid Media",
    summary:
      "Display programs focused on awareness, retargeting, and message reinforcement across the buying journey.",
    intro:
      "We plan display programs with clearer segmentation, creative roles, and reporting frameworks so awareness efforts stay useful.",
    capabilities: [
      "Awareness and retargeting strategy",
      "Creative variant planning",
      "Placement review and reporting",
    ],
    outcomes: [
      "Clearer role for display within the mix",
      "Better message reinforcement across channels",
      "More accountable awareness programs",
    ],
  }),
  createServiceDetailPage({
    slug: "influencer-marketing",
    label: "Influencer Marketing",
    eyebrow: "Paid Media",
    summary:
      "Partner and creator programs designed to support reach, credibility, and campaign storytelling.",
    intro:
      "We help teams structure influencer initiatives with clearer partner selection, campaign goals, and content expectations.",
    capabilities: [
      "Creator fit and partnership planning",
      "Campaign brief and asset coordination",
      "Performance review and follow-up planning",
    ],
    outcomes: [
      "More structured creator collaborations",
      "Better campaign coherence across paid and partner content",
      "Clearer measurement for influencer initiatives",
    ],
  }),
]

export const serviceItems: ServiceItem[] = [
  {
    slug: "branding",
    label: "Branding",
    eyebrow: "",
    title: "Build a brand system teams can scale with confidence.",
    summary:"",
    intro:
      "We shape brand foundations that help product, sales, and leadership teams communicate with one voice across every launch moment.",
    capabilities: [
      "",
      "Visual direction and identity systems",
      "Launch kits for internal and external teams",
    ],
    outcomes: [
      "",
      "",
      "Consistent brand decisions from strategy to execution",
    ],
    sections: [
      {
        title: "Branding is more than visuals - it is our voice.",
        description:
          "We craft brands, products, websites, and growth programs with strategy, design, and technology.",
        items: [
          "Logo design and brand guidelines",
          "Graphic design",
          "Diagrams and infographics",
          "Motion graphics and animations",
          "Mockups",
          "Editing and VFX",
        ],
        imageAlt: "Branding workshop and identity sketches",
        imageUrl: svgDataUri(brandingSection01Svg),
      },
      {
        title: "Graphic Design",
        description:
          "Design human-centered interfaces across platforms that are clear, elegant, and delightful.",
        items: [
          "UI and UX design",
          "Website design",
          "Mobile experience",
          "Commerce experience",
          "Human-machine interface",
        ],
        imageAlt: "Graphic design process with printed materials",
        imageUrl: svgDataUri(brandingSection02Svg),
      },
    ],
  },
  {
    slug: "experience-design",
    label: "Experience Design",
    eyebrow: "UX Strategy",
    title: "Design journeys that feel clear, useful, and conversion-ready.",
    summary:
      "Service blueprints, interface systems, and customer flows designed around actual business goals.",
    intro:
      "From discovery to interface refinement, we focus on experiences that reduce friction for customers and internal operators alike.",
    capabilities: [
      "Customer journey mapping and service flows",
      "Wireframes, UI systems, and component patterns",
      "Conversion-focused landing and campaign design",
    ],
    outcomes: [
      "More coherent digital touchpoints",
      "Better handoff between design and development",
      "Fewer usability blockers in launch cycles",
    ],
    sections: [
      {
        title: "Design journeys that feel clear, useful, and conversion-ready.",
        description:
          "We plan the path from discovery to action with structured flows, clear moments of intent, and reusable UX patterns.",
        items: [
          "Customer journey mapping and service flows",
          "Wireframes, UI systems, and component patterns",
          "Conversion-focused landing and campaign design",
          "Usability refinement and friction removal",
        ],
        imageAlt: "Experience design journey mapping",
        imageUrl: svgDataUri(experienceSection01Svg),
      },
      {
        title: "Interface systems that scale with your product.",
        description:
          "Create consistent components and interaction rules so teams can ship faster without losing quality.",
        items: [
          "Design system foundations",
          "Component libraries and tokens",
          "Prototyping and interaction specs",
          "Handoff and documentation",
        ],
        imageAlt: "Interface system components",
        imageUrl: svgDataUri(experienceSection02Svg),
      },
    ],
  },
  {
    slug: "technologies",
    label: "Technologies",
    eyebrow: "Platform Enablement",
    title: "Connect the tools, workflows, and systems behind delivery.",
    summary:
      "Technical planning, integration support, and platform guidance that make launches more reliable.",
    intro:
      "We align storefront, content, and operational tools so the product experience is supported by stable, maintainable delivery systems.",
    capabilities: [
      "Implementation planning and solution mapping",
      "Platform audits and integration guidance",
      "Frontend refinement for content and commerce teams",
    ],
    outcomes: [
      "Cleaner technical decision-making",
      "Reduced launch risk across environments",
      "Better alignment between business goals and platform setup",
    ],
    sections: [
      {
        title: "Connect the tools, workflows, and systems behind delivery.",
        description:
          "We align storefront, content, and operational tools so the product experience is supported by stable, maintainable delivery systems.",
        items: [
          "Implementation planning and solution mapping",
          "Platform audits and integration guidance",
          "Frontend refinement for content and commerce teams",
          "Deployment readiness and QA checks",
        ],
        imageAlt: "Platform enablement planning",
        imageUrl: svgDataUri(technologiesSection01Svg),
      },
      {
        title: "Integration plans that keep launches predictable.",
        description:
          "Structure data flows, environments, and delivery checklists so teams can ship confidently.",
        items: [
          "Data flow and API design reviews",
          "Infrastructure alignment and environment strategy",
          "Performance checks and observability setup",
          "Documentation and runbooks",
        ],
        imageAlt: "Integration planning systems",
        imageUrl: svgDataUri(technologiesSection02Svg),
      },
    ],
  },
  {
    slug: "marketing",
    label: "Marketing",
    eyebrow: "Growth Programs",
    title: "Turn launches into structured demand-generation programs.",
    summary:
      "Campaign planning, content systems, and measurement models built for sustained traction.",
    intro:
      "We create the planning and content structure needed to carry a launch forward into repeatable marketing execution.",
    capabilities: [
      "Campaign architecture and go-to-market planning",
      "Content systems for sales and demand teams",
      "Performance reporting and optimization loops",
    ],
    outcomes: [
      "More focused launch communication",
      "Stronger coordination between teams and channels",
      "Clearer reporting on impact and next actions",
    ],
    sections: [
      {
        title: "Turn launches into structured demand-generation programs.",
        description:
          "We build the campaign architecture and content systems needed to sustain momentum after launch.",
        items: [
          "Campaign planning and go-to-market sequencing",
          "Content systems for sales and demand teams",
          "Audience segmentation and messaging",
          "Launch readiness checklists",
        ],
        imageAlt: "Launch program planning",
        imageUrl: svgDataUri(marketingSection01Svg),
      },
      {
        title: "Measurement loops that keep growth accountable.",
        description:
          "Set up reporting and optimization routines so teams see what is working and what needs adjustment.",
        items: [
          "Performance reporting dashboards",
          "Channel health monitoring",
          "Experiment tracking and optimization",
          "Insights summaries for leadership",
        ],
        imageAlt: "Marketing performance reporting",
        imageUrl: svgDataUri(marketingSection02Svg),
      },
    ],
  },
  ...menuServiceItems,
]

export const getServiceBySlug = (slug: string) =>
  serviceItems.find((service) => service.slug === slug)
