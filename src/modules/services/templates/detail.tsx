import MarketingDetailShell from "@modules/common/components/marketing-detail-shell"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SeoServiceGrid, {
  aiSeoServiceCards,
} from "@modules/common/components/seo-service-grid"
import {
  ServiceItem,
  serviceItems,
} from "@modules/services/constants/service-items"

const ServiceDetailTemplate = ({ service }: { service: ServiceItem }) => {
  const relatedServices = serviceItems
    .filter((candidate) => candidate.slug !== service.slug)
    .slice(0, 3)
  const isSeoService = service.slug === "seo"

  const featureCards =
    service.sections?.map((section) => ({
      title: section.title,
      description: section.description,
      bullets: section.items,
    })) ??
    service.capabilities
      .filter(Boolean)
      .map((capability) => ({
        title: capability,
        description: service.intro,
      }))
  const seoDifferentiators = [
    "AI-driven insights and automation",
    "Optimized for zero-click searches and AI discovery",
    "Focus on topical authority and long-term growth",
    "Data-backed strategies for measurable results",
  ]
  const seoProofItems = [
    {
      label: "AI-Driven",
      title: "Insights and automation",
      meta: "Continuous optimization backed by live data signals",
    },
    {
      label: "Discovery Ready",
      title: "Built for AI search",
      meta: "Structured for zero-click search and answer engines",
    },
    {
      label: "Authority Focus",
      title: "Topical depth that compounds",
      meta: "Semantic SEO and long-term authority building",
    },
    {
      label: "Measured Impact",
      title: "Data-backed performance",
      meta: "Traffic, rankings, and conversion outcomes tied together",
    },
  ]
  const seoTrends = [
    "Generative Engine Optimization (GEO)",
    "Answer Engine Optimization (AEO)",
    "Semantic SEO and topic clusters",
    "Voice and conversational search",
    "Google AI Overviews optimization",
    "E-E-A-T focused content",
    "Zero-click search optimization",
  ]

  return (
    <MarketingDetailShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: service.label },
      ]}
      eyebrow={isSeoService ? undefined : service.eyebrow || "Service Detail"}
      title={
        isSeoService
          ? "AI-POWERED SEO SERVICES"
          : service.title
      }
      description={
        isSeoService
          ? "Drive smarter growth with next-generation SEO powered by AI, automation, and data intelligence. At SaaSntial, we go beyond traditional SEO by integrating GEO, AEO, and advanced analytics to help your brand rank across search engines, AI platforms, and voice assistants."
          : service.intro
      }
      heroVariant={isSeoService ? "immersive" : "default"}
      actions={[
        {
          label: isSeoService ? "Get Started Today" : "Request Free Proposal",
          href: "/company/contact-us",
        },
        ...(isSeoService
          ? [
              {
                label: "Request A Free SEO Audit",
                href: "/company/contact-us",
                variant: "secondary" as const,
              },
            ]
          : [{ label: "All Services", href: "/services", variant: "secondary" as const }]),
      ]}
      heroNote={
        isSeoService
          ? "Built for search engines, AI platforms, and conversational discovery."
          : "Every service page now uses the same marketing layout, with only the underlying content changing per route."
      }
      proofItems={isSeoService ? seoProofItems : undefined}
      heroImage={
        isSeoService
          ? {
              src: "/multi-location-banner.jpg",
              alt: "Team collaborating in an office meeting",
            }
          : service.sections?.[0]?.imageUrl
          ? {
              src: service.sections[0].imageUrl,
              alt: service.sections[0].imageAlt || service.label,
            }
          : undefined
      }
      proofTitle={isSeoService ? "WHY SAASNTIAL FOR SEO?" : "THE LEADER IN TRAINING SERVICES"}
      sectionEyebrow={isSeoService ? "Earned Media" : service.label}
      sectionTitle={isSeoService ? "Our Core SEO Solutions" : `${service.label} Services Include`}
      sectionIntro={
        isSeoService
          ? "Next-generation SEO execution built around technical performance, intent-driven content, AI discovery, and measurable growth."
          : service.summary ||
            "Structured service packages built to connect planning, rollout, and measurable execution."
      }
      featureCards={isSeoService ? [] : featureCards}
      childrenWide={isSeoService}
      relatedTitle="Explore Related Services"
      relatedHref="/services"
      relatedLinks={relatedServices.map((item) => ({
        href: `/services/${item.slug}`,
        label: item.label,
        description: item.summary || item.intro,
        eyebrow: item.eyebrow || "Service",
      }))}
    >
      {isSeoService && (
        <>
          <SeoServiceGrid
            cards={aiSeoServiceCards}
            ctaLabel="Request A Free SEO Audit"
          />

          <div className="mx-auto mt-12 grid max-w-[1160px] gap-6 large:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)]">
            <article className="rounded-[24px] border border-[#e7edf4] bg-white px-6 py-7 shadow-[0_18px_34px_rgba(15,23,42,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">
                Why SaaSntial
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.03em] text-slate-900">
                Search growth built for the AI era
              </h3>
              <ul className="mt-6 grid gap-3">
                {seoDifferentiators.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-3 text-sm leading-7 text-slate-600"
                  >
                    <span className="mt-2 h-1.5 w-1.5 rounded-full bg-[#f59e0b]" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>

            <article className="rounded-[24px] border border-[#e7edf4] bg-white px-6 py-7 shadow-[0_18px_34px_rgba(15,23,42,0.05)]">
              <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">
                Trends We Leverage
              </p>
              <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.03em] text-slate-900">
                Key SEO trends we leverage
              </h3>
              <div className="mt-6 flex flex-wrap gap-3">
                {seoTrends.map((trend) => (
                  <span
                    key={trend}
                    className="rounded-full border border-[#e8eef5] bg-[#fbfdff] px-4 py-2 text-sm text-slate-600"
                  >
                    {trend}
                  </span>
                ))}
              </div>
            </article>
          </div>

          <div className="mx-auto mt-10 max-w-[1160px] rounded-[28px] border border-[#e6edf5] bg-white px-6 py-8 text-center shadow-[0_18px_36px_rgba(15,23,42,0.06)] small:px-8">
            <p className="text-[11px] font-semibold uppercase tracking-[0.3em] text-[#f59e0b]">
              Call To Action
            </p>
            <h3 className="mt-3 text-2xl font-black uppercase tracking-[0.03em] text-slate-900 small:text-3xl">
              Ready to dominate search in the AI era?
            </h3>
            <p className="mx-auto mt-4 max-w-[48rem] text-sm leading-7 text-slate-600 small:text-base">
              Partner with SaaSntial to transform your SEO strategy and unlock
              sustainable, high-quality growth.
            </p>
            <div className="mt-7 flex flex-col items-center justify-center gap-3 small:flex-row">
              <LocalizedClientLink
                href="/company/contact-us"
                className="inline-flex min-h-11 items-center justify-center rounded-full bg-[#f59e0b] px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-950 transition-transform duration-200 hover:-translate-y-0.5"
              >
                Get Started Today
              </LocalizedClientLink>
              <LocalizedClientLink
                href="/company/contact-us"
                className="inline-flex min-h-11 items-center justify-center rounded-full border border-slate-200 px-6 py-3 text-[11px] font-semibold uppercase tracking-[0.24em] text-slate-700 transition-colors duration-200 hover:border-slate-300 hover:bg-slate-50"
              >
                Request A Free SEO Audit
              </LocalizedClientLink>
            </div>
          </div>
        </>
      )}
    </MarketingDetailShell>
  )
}

export default ServiceDetailTemplate
