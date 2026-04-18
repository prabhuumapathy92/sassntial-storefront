import LocalizedClientLink from "@modules/common/components/localized-client-link"

type CopySegment = {
  text: string
  accent?: boolean
}

export type SeoServiceCard = {
  title: string
  icon:
    | "megaphone"
    | "directory"
    | "cursor"
    | "ppc"
    | "mail"
    | "store"
    | "globe"
    | "analytics"
  segments: CopySegment[]
}

export const multiLocationSeoServiceCards: SeoServiceCard[] = [
  {
    title: "Local SEO",
    icon: "megaphone",
    segments: [
      {
        text: "We'll help you attract high-quality search traffic by targeting relevant industry keywords and fully optimizing content for each location, building a scalable ",
      },
      { text: "local SEO strategy", accent: true },
      { text: " that maximizes visibility across all markets." },
    ],
  },
  {
    title: "Local Listings & Directory Management",
    icon: "directory",
    segments: [
      {
        text: "Our multi-location marketing agency takes advantage of your business's physical address for each store, helping you rank ",
      },
      { text: "Google Business Profile", accent: true },
      {
        text: " Pages and land in the Map results. In turn, your audiences can easily find each of your locations online.",
      },
    ],
  },
  {
    title: "Localized Website Development",
    icon: "cursor",
    segments: [
      {
        text: "We design and develop WordPress websites to maximize user experience, SEO results, and ",
      },
      { text: "conversion rate optimization", accent: true },
      {
        text: ". Our team can support any or all parts of building a cohesive website including sitemap integration, customizable widgets, ",
      },
      { text: "SEO optimized", accent: true },
      { text: " content, site speed, mobile optimization and more." },
    ],
  },
  {
    title: "Multi-Location PPC Campaigns",
    icon: "ppc",
    segments: [
      { text: "Our multi-location marketing agency can develop " },
      { text: "paid media campaigns", accent: true },
      {
        text: " that connect with audiences across all locations with paid search, display, and other ads. We pinpoint your audience and connect with them throughout their customer journey through intent-driven campaigns to drive revenue growth.",
      },
    ],
  },
  {
    title: "Social Media Marketing",
    icon: "mail",
    segments: [
      {
        text: "Our multi-location marketing services help you connect with audiences on the ",
      },
      { text: "social media platforms", accent: true },
      {
        text: " they use, from Facebook and LinkedIn to Instagram and TikTok. We'll use a combination of locally targeted posts and ads to reach audiences and boost engagement with your brand's social media profiles.",
      },
    ],
  },
  {
    title: "Geo-Targeted Content Marketing",
    icon: "store",
    segments: [
      {
        text: "Web pages, blog posts, videos, images, SMS marketing, emails, and other content should all use geo-targeting to help you reach local audiences for every location. We'll develop and curate ",
      },
      { text: "high-quality content", accent: true },
      {
        text: " that establishes a strong connection with audiences, converting web traffic into leads and leads into loyal customers.",
      },
    ],
  },
  {
    title: "Lifecycle Marketing",
    icon: "globe",
    segments: [
      {
        text: "Maximize your multi-location marketing ROI with a fully integrated and cohesive ",
      },
      { text: "lifecycle marketing strategy", accent: true },
      {
        text: " that seamlessly guides potential customers into loyal consumers. We'll build email and SMS campaigns based on personalization, tailoring messages to your customer on channels that will reach them.",
      },
    ],
  },
  {
    title: "Reporting & Analytics",
    icon: "analytics",
    segments: [
      {
        text: "Our team of experts focus on data-driven multi-location marketing decisions. We are quick to ensure data is ",
      },
      { text: "accurate", accent: true },
      {
        text: ", stakeholders are properly informed and data is secure, providing a steady stream of growth opportunities.",
      },
    ],
  },
]

export const aiSeoServiceCards: SeoServiceCard[] = [
  {
    title: "Technical SEO Optimization",
    icon: "directory",
    segments: [
      {
        text: "We build a strong foundation with optimized site architecture, Core Web Vitals, crawlability, indexing, and structured data to ensure peak search performance.",
      },
    ],
  },
  {
    title: "On-Page & Content SEO",
    icon: "store",
    segments: [
      {
        text: "Our strategy focuses on intent-driven content, semantic SEO, and keyword clustering to improve rankings, engagement, and topical authority.",
      },
    ],
  },
  {
    title: "AI SEO (GEO & AEO)",
    icon: "globe",
    segments: [
      {
        text: "We optimize your content for AI search experiences, including Google AI Overviews, voice search, and conversational queries, ensuring your brand appears in AI-generated answers.",
      },
    ],
  },
  {
    title: "Keyword & Topic Strategy",
    icon: "cursor",
    segments: [
      {
        text: "We go beyond keywords by building topic clusters and content ecosystems, targeting high-intent queries that drive qualified traffic and conversions.",
      },
    ],
  },
  {
    title: "Link Building & Authority Growth",
    icon: "megaphone",
    segments: [
      {
        text: "We strengthen your domain with high-quality backlinks and authority signals aligned with ",
      },
      { text: "E-E-A-T", accent: true },
      { text: " principles." },
    ],
  },
  {
    title: "Performance Tracking & Automation",
    icon: "analytics",
    segments: [
      {
        text: "Using AI-powered tools, we continuously monitor rankings, user behavior, and conversions to optimize performance and maximize ROI.",
      },
    ],
  },
]

const SeoServiceIcon = ({
  icon,
}: {
  icon: SeoServiceCard["icon"]
}) => {
  const shared = {
    className: "h-8 w-8",
    viewBox: "0 0 32 32",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: "2.4",
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  }

  switch (icon) {
    case "megaphone":
      return (
        <svg {...shared}>
          <path d="M6 17.5v-3.5l12-4.5v12.5L6 17.5Z" />
          <path d="M18 12h3.5c2.2 0 4 1.8 4 4s-1.8 4-4 4H18" />
          <path d="m9 18.5 2 6h3l-1.5-5.2" />
        </svg>
      )
    case "directory":
      return (
        <svg {...shared}>
          <circle cx="16" cy="16" r="6.2" />
          <path d="M16 3.8v3.1M16 25.1v3.1M28.2 16h-3.1M6.9 16H3.8M24.5 7.5l-2.2 2.2M9.7 22.3l-2.2 2.2M24.5 24.5l-2.2-2.2M9.7 9.7 7.5 7.5" />
          <circle cx="16" cy="16" r="1.7" fill="currentColor" stroke="none" />
        </svg>
      )
    case "cursor":
      return (
        <svg {...shared}>
          <path d="M6.5 5.5 21 14l-6.7 1.6 3.3 7-3.6 1.7-3.3-7L6.5 21V5.5Z" />
          <path d="m20.6 8.7 5.2-2.1" />
        </svg>
      )
    case "ppc":
      return (
        <svg {...shared}>
          <circle cx="16" cy="16" r="8" />
          <path d="M11.5 12.5h6.3a2.4 2.4 0 0 1 0 4.8h-3.6a2.3 2.3 0 0 0 0 4.7h6" />
          <path d="M16 9.2v13.6M25 7l2.4-2.4M5 25l2.4-2.4M7 7 4.6 4.6M27.4 27.4 25 25" />
        </svg>
      )
    case "mail":
      return (
        <svg {...shared}>
          <path d="M5 9h22v14H5z" />
          <path d="m6.5 10.5 9.5 7 9.5-7" />
        </svg>
      )
    case "store":
      return (
        <svg {...shared}>
          <path d="M7 12.5h18v13H7z" />
          <path d="M10 12.5V8h12v4.5" />
          <path d="M12 17h8M12 21h5" />
        </svg>
      )
    case "globe":
      return (
        <svg {...shared}>
          <circle cx="16" cy="16" r="9" />
          <path d="M7 16h18M16 7a14 14 0 0 1 0 18M16 7a14 14 0 0 0 0 18" />
        </svg>
      )
    case "analytics":
      return (
        <svg {...shared}>
          <path d="M6 24h20" />
          <path d="M9.5 21V13M16 21V9M22.5 21v-6" />
          <path d="m8.5 10 5.3-3.6L20 10l4.5-5" />
        </svg>
      )
  }
}

const SeoServiceGrid = ({
  cards,
  ctaLabel,
  ctaHref = "/company/contact-us",
}: {
  cards: SeoServiceCard[]
  ctaLabel: string
  ctaHref?: string
}) => {
  return (
    <div className="mx-auto max-w-[1160px]">
      <div className="mb-6 flex justify-center">
        <span className="h-px w-20 bg-slate-300" />
      </div>

      <div className="grid grid-cols-1 gap-3 medium:grid-cols-2 large:grid-cols-4">
        {cards.map((card) => (
          <article
            key={card.title}
            className="h-full min-h-[300px] rounded-[2px] border border-[#eef2f6] bg-white px-5 py-6 shadow-[0_8px_18px_rgba(15,23,42,0.03)]"
          >
            <div className="scale-90 origin-top-left text-[#213567]">
              <SeoServiceIcon icon={card.icon} />
            </div>

            <h3 className="mt-3 max-w-[17ch] font-[Arial_Narrow,Roboto_Condensed,Helvetica_Neue,Arial,sans-serif] text-[0.78rem] font-black uppercase leading-[1.02] tracking-[0.01em] text-slate-900">
              {card.title}
            </h3>

            <p className="mt-5 text-[0.84rem] leading-[1.42] text-[#203d73]">
              {card.segments.map((segment, index) => (
                <span
                  key={`${card.title}-${index}`}
                  className={segment.accent ? "font-semibold text-[#ee6b4b]" : undefined}
                >
                  {segment.text}
                </span>
              ))}
            </p>
          </article>
        ))}
      </div>

      <div className="mt-8 flex justify-center">
        <LocalizedClientLink
          href={ctaHref}
          className="inline-flex items-center justify-center rounded-[999px] bg-[linear-gradient(90deg,#f2b544_0%,#ee6b4b_100%)] px-[26px] py-3.5 text-[0.86rem] font-bold uppercase leading-6 tracking-[0.03em] text-white shadow-[0_18px_34px_rgba(238,107,75,0.24)] transition-transform duration-200 hover:-translate-y-0.5"
        >
          {ctaLabel}
        </LocalizedClientLink>
      </div>
    </div>
  )
}

export default SeoServiceGrid
