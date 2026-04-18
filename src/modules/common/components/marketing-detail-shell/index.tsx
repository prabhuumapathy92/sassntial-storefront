import { ReactNode } from "react"

import LocalizedClientLink from "@modules/common/components/localized-client-link"

type BreadcrumbItem = {
  label: string
  href?: string
}

type HeroAction = {
  label: string
  href: string
  variant?: "primary" | "secondary"
}

type CredibilityItem = {
  label: string
  title: string
  meta: string
}

type FeatureCard = {
  title: string
  description: string
  bullets?: string[]
}

type RelatedLink = {
  href: string
  label: string
  description: string
  eyebrow?: string
}

type MarketingDetailShellProps = {
  breadcrumbs: BreadcrumbItem[]
  eyebrow?: string
  title: string
  description: string
  heroVariant?: "default" | "immersive"
  actions?: HeroAction[]
  heroNote?: string
  heroImage?: {
    src: string
    alt: string
  }
  proofTitle?: string
  proofItems?: CredibilityItem[]
  sectionEyebrow?: string
  sectionTitle: string
  sectionIntro?: string
  featureCards?: FeatureCard[]
  children?: ReactNode
  childrenWide?: boolean
  relatedTitle?: string
  relatedHref?: string
  relatedLabel?: string
  relatedLinks?: RelatedLink[]
}

const defaultProofItems: CredibilityItem[] = [
  {
    label: "Trusted Delivery",
    title: "Launch-ready systems",
    meta: "Strategy, training, and rollout support",
  },
  {
    label: "Cross-functional",
    title: "Design + platform + enablement",
    meta: "Built for product and operations teams",
  },
  {
    label: "Structured Execution",
    title: "Clear handoff models",
    meta: "Repeatable programs with usable documentation",
  },
  {
    label: "Operational Focus",
    title: "Measured outcomes",
    meta: "Delivery plans shaped around real adoption",
  },
]

const getCardMonogram = (title: string, index: number) => {
  const words = title
    .split(/\s+/)
    .map((word) => word.replace(/[^a-zA-Z0-9]/g, ""))
    .filter(Boolean)

  if (words.length === 0) {
    return String(index + 1).padStart(2, "0")
  }

  if (words.length === 1) {
    return words[0].slice(0, 2).toUpperCase()
  }

  return `${words[0][0]}${words[1][0]}`.toUpperCase()
}

const MarketingDetailShell = ({
  breadcrumbs,
  eyebrow,
  title,
  description,
  heroVariant = "default",
  actions = [],
  heroNote,
  heroImage,
  proofTitle = "THE LEADER IN DIGITAL ENABLEMENT",
  proofItems = defaultProofItems,
  sectionEyebrow,
  sectionTitle,
  sectionIntro,
  featureCards = [],
  children,
  childrenWide = false,
  relatedTitle,
  relatedHref,
  relatedLabel = "View All",
  relatedLinks = [],
}: MarketingDetailShellProps) => {
  const isImmersiveHero = heroVariant === "immersive"

  return (
    <div className="pb-14 small:pb-20">
      <section className="marketing-hero">
        <div className={isImmersiveHero ? "w-full" : "content-container py-6 small:py-8"}>
          <div
            className={`marketing-hero-panel overflow-hidden border border-white/10 ${
              isImmersiveHero
                ? "marketing-hero-panel-immersive border-x-0 rounded-none"
                : "rounded-[30px]"
            }`}
          >
            <div
              className={
                isImmersiveHero
                  ? "relative min-h-[460px] small:min-h-[540px] large:min-h-[620px]"
                  : "grid min-h-[360px] large:grid-cols-[minmax(0,0.92fr)_minmax(340px,0.88fr)]"
              }
            >
              {isImmersiveHero && (
                <div className="marketing-hero-media marketing-hero-media-immersive absolute inset-0">
                  {heroImage ? (
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="h-full w-full object-cover object-[68%_center]"
                    />
                  ) : (
                    <div className="marketing-hero-placeholder h-full w-full" />
                  )}
                </div>
              )}

              <div
                className={`relative z-[1] ${
                  isImmersiveHero
                    ? "mx-auto flex w-full max-w-[1440px] px-7 py-10 small:px-8 small:py-12 large:px-8 large:py-14"
                    : "px-6 py-8 small:px-8 small:py-10 large:px-12 large:py-12"
                }`}
              >
                <div className={isImmersiveHero ? "marketing-immersive-copy" : ""}>
                  <div
                    className={`flex flex-wrap items-center gap-3 font-semibold text-white/70 ${
                      isImmersiveHero
                        ? "marketing-immersive-breadcrumbs"
                        : "text-[10px] uppercase tracking-[0.24em]"
                    }`}
                  >
                    {breadcrumbs.map((item, index) => (
                      <div key={`${item.label}-${index}`} className="flex items-center gap-3">
                        {item.href ? (
                          <LocalizedClientLink
                            href={item.href}
                            className="transition-colors duration-200 hover:text-white"
                          >
                            {item.label}
                          </LocalizedClientLink>
                        ) : (
                          <span className="text-white">{item.label}</span>
                        )}
                        {index < breadcrumbs.length - 1 && (
                          isImmersiveHero ? (
                            <span className="text-white/70">/</span>
                          ) : (
                            <span className="h-1 w-1 rounded-full bg-[#f59e0b]" />
                          )
                        )}
                      </div>
                    ))}
                  </div>

                  {eyebrow && (
                    <p
                      className={`mt-6 font-semibold text-[#f59e0b] ${
                        isImmersiveHero
                          ? "text-[0.95rem] uppercase tracking-[0.24em]"
                          : "text-[11px] uppercase tracking-[0.3em]"
                      }`}
                    >
                      {eyebrow}
                    </p>
                  )}

                  <h1
                    className={`mt-6 uppercase text-white ${
                      isImmersiveHero
                        ? "marketing-immersive-title"
                        : "max-w-[16ch] text-3xl font-black leading-[0.95] tracking-[0.015em] small:text-4xl large:text-[3.65rem]"
                    }`}
                  >
                    {title}
                  </h1>

                  <p
                    className={`mt-5 text-slate-200 ${
                      isImmersiveHero
                        ? "marketing-immersive-body"
                        : "max-w-[34rem] text-sm leading-7 small:text-base"
                    }`}
                  >
                    {description}
                  </p>

                  {actions.length > 0 && (
                    <div className="mt-10 flex flex-col gap-3 small:flex-row">
                      {actions.map((action) => {
                        const isSecondary = action.variant === "secondary"

                        return (
                          <LocalizedClientLink
                            key={`${action.href}-${action.label}`}
                            href={action.href}
                            className={
                              isSecondary
                                ? "inline-flex min-h-11 items-center justify-center rounded-full border border-white/20 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-white transition-colors duration-200 hover:bg-white/10"
                                : `inline-flex items-center justify-center transition-transform duration-200 hover:-translate-y-0.5 ${
                                    isImmersiveHero
                                      ? "w-fit rounded-[999px] bg-[linear-gradient(90deg,#f2b544_0%,#ee6b4b_100%)] px-[30px] py-4 text-[0.98rem] font-bold uppercase leading-6 tracking-[0.03em] text-white shadow-[0_18px_34px_rgba(238,107,75,0.28)]"
                                      : "min-h-11 w-fit rounded-[999px] bg-[#f59e0b] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-950"
                                  }`
                            }
                          >
                            {action.label}
                          </LocalizedClientLink>
                        )
                      })}
                    </div>
                  )}

                  {heroNote && (
                    isImmersiveHero ? (
                      <div className="mt-7 flex items-center gap-4 text-[0.98rem] italic text-white">
                        <span className="flex h-[50px] w-[50px] items-center justify-center rounded-full bg-[#2494f2] shadow-[0_14px_24px_rgba(36,148,242,0.28)]">
                          <svg
                            viewBox="0 0 24 24"
                            className="h-6 w-6"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.6"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            aria-hidden="true"
                          >
                            <path d="M4 13.5 9.2 18 20 6" />
                            <path d="M8.5 8.5 4 13" />
                            <path d="M15.5 15.5 20 11" />
                          </svg>
                        </span>
                        <p className="drop-shadow-[0_2px_6px_rgba(0,0,0,0.2)]">
                          {heroNote}
                        </p>
                      </div>
                    ) : (
                      <p className="mt-6 text-xs text-slate-300">
                        {heroNote}
                      </p>
                    )
                  )}
                </div>
              </div>

              {!isImmersiveHero && (
                <div className="marketing-hero-media min-h-[280px]">
                  {heroImage ? (
                    <img
                      src={heroImage.src}
                      alt={heroImage.alt}
                      className="h-full w-full object-cover"
                    />
                  ) : (
                    <div className="marketing-hero-placeholder h-full w-full" />
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white">
        <div className="content-container py-8 small:py-10">
          <p className="text-center text-sm font-black uppercase tracking-[0.18em] text-[#0b78b5]">
            {proofTitle}
          </p>

          <div className="mt-8 grid gap-4 small:grid-cols-2 large:grid-cols-4">
            {proofItems.map((item) => (
              <article
                key={`${item.label}-${item.title}`}
                className="rounded-[24px] border border-[#e6edf5] bg-white px-5 py-5 text-center shadow-[0_16px_30px_rgba(15,23,42,0.06)]"
              >
                <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                  {item.label}
                </p>
                <h2 className="mt-3 text-lg font-bold uppercase tracking-[0.04em] text-slate-900">
                  {item.title}
                </h2>
                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {item.meta}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="marketing-pattern-surface">
        <div className="content-container py-12 small:py-16">
          <div className="mx-auto max-w-[840px] text-center">
            {sectionEyebrow && (
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">
                {sectionEyebrow}
              </p>
            )}

            <h2 className="mt-3 text-2xl font-black uppercase tracking-[0.04em] text-[#0b78b5] small:text-3xl">
              {sectionTitle}
            </h2>

            {sectionIntro && (
              <p className="mx-auto mt-4 max-w-[42rem] text-sm leading-7 text-slate-500 small:text-base">
                {sectionIntro}
              </p>
            )}
          </div>

          {featureCards.length > 0 && (
            <div className="mx-auto mt-10 grid max-w-[1080px] gap-5 medium:grid-cols-2 large:grid-cols-3">
              {featureCards.map((card, index) => (
                <article
                  key={`${card.title}-${index}`}
                  className="rounded-[24px] border border-[#ebf0f5] bg-white px-5 py-5 shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
                >
                  <div className="flex items-center gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#eaf6fd] text-xs font-black uppercase tracking-[0.12em] text-[#0b78b5]">
                      {getCardMonogram(card.title, index)}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {card.title}
                    </h3>
                  </div>

                  <p className="mt-4 text-sm leading-7 text-slate-500">
                    {card.description}
                  </p>

                  {card.bullets && card.bullets.length > 0 && (
                    <ul className="mt-4 grid gap-2">
                      {card.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 text-sm leading-6 text-slate-600"
                        >
                          <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              ))}
            </div>
          )}

          {children && (
            <div className={`mx-auto mt-10 ${childrenWide ? "max-w-[1480px]" : "max-w-[1080px]"}`}>
              {children}
            </div>
          )}

          {relatedLinks.length > 0 && (
            <div className="mx-auto mt-12 max-w-[1080px] rounded-[30px] border border-[#e6edf5] bg-white px-6 py-6 shadow-[0_18px_36px_rgba(15,23,42,0.06)] small:px-8 small:py-8">
              <div className="flex flex-col gap-3 small:flex-row small:items-end small:justify-between">
                <div>
                  <p className="text-[11px] font-semibold uppercase tracking-[0.28em] text-slate-400">
                    Keep Exploring
                  </p>
                  <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.03em] text-slate-900">
                    {relatedTitle || "Related Pages"}
                  </h2>
                </div>

                {relatedHref && (
                  <LocalizedClientLink
                    href={relatedHref}
                    className="text-sm font-semibold uppercase tracking-[0.18em] text-[#0b78b5] transition-colors duration-200 hover:text-slate-900"
                  >
                    {relatedLabel}
                  </LocalizedClientLink>
                )}
              </div>

              <div className="mt-6 grid gap-4 large:grid-cols-3">
                {relatedLinks.map((item) => (
                  <LocalizedClientLink
                    key={`${item.href}-${item.label}`}
                    href={item.href}
                    className="group rounded-[22px] border border-[#edf2f7] bg-[#fbfdff] px-5 py-5 transition-colors duration-200 hover:bg-white"
                  >
                    {item.eyebrow && (
                      <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-slate-400">
                        {item.eyebrow}
                      </p>
                    )}
                    <h3 className="mt-3 text-lg font-bold uppercase tracking-[0.03em] text-slate-900 transition-colors duration-200 group-hover:text-[#0b78b5]">
                      {item.label}
                    </h3>
                    <p className="mt-3 text-sm leading-7 text-slate-500">
                      {item.description}
                    </p>
                  </LocalizedClientLink>
                ))}
              </div>
            </div>
          )}
        </div>
      </section>
    </div>
  )
}

export default MarketingDetailShell
