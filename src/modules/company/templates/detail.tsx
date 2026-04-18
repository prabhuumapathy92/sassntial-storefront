import MarketingDetailShell from "@modules/common/components/marketing-detail-shell"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  CompanyItem,
  companyItems,
} from "@modules/company/constants/company-items"
import ContactDetailTemplate from "@modules/company/templates/contact-detail"

const CompanyDetailTemplate = ({ item }: { item: CompanyItem }) => {
  if (item.slug === "contact-us") {
    return <ContactDetailTemplate item={item} />
  }

  const relatedItems = companyItems
    .filter(
      (candidate) =>
        candidate.slug !== item.slug && candidate.slug !== "contact-us"
    )
    .slice(0, 3)

  if (item.slug === "blog") {
    const posts = item.blogPosts ?? []

    return (
      <MarketingDetailShell
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Company", href: "/company" },
          { label: item.label },
        ]}
        eyebrow={item.eyebrow}
        title={item.title}
        description={item.intro}
        actions={[
          { label: "Contact Us", href: "/company/contact-us" },
          { label: "All Company Pages", href: "/company", variant: "secondary" },
        ]}
        heroNote="The shared page shell is applied here too, while the article list remains specific to the blog section."
        proofTitle="COMPANY INSIGHTS AND DELIVERY NOTES"
        sectionEyebrow="Featured Posts"
        sectionTitle="Recent Articles"
        sectionIntro={item.summary}
        featureCards={item.highlights.map((highlight, index) => ({
          title: item.supportPoints[index] || `Insight ${index + 1}`,
          description: highlight,
        }))}
      >
        <div className="grid gap-5 medium:grid-cols-2 large:grid-cols-3">
          {posts.map((post) => (
            <article
              key={post.slug}
              className="overflow-hidden rounded-[24px] border border-[#e6edf5] bg-white shadow-[0_16px_34px_rgba(15,23,42,0.06)]"
            >
              <div className="aspect-[16/9] overflow-hidden bg-slate-100">
                {post.imageUrl ? (
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <div className="marketing-hero-placeholder h-full w-full" />
                )}
              </div>

              <div className="px-5 py-5">
                <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-slate-400">
                  {post.category} | {post.readTime}
                </p>
                <h3 className="mt-3 text-lg font-bold uppercase tracking-[0.03em] text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-slate-500">
                  {post.excerpt}
                </p>
                <LocalizedClientLink
                  href={`/company/blog/${post.slug}`}
                  className="mt-5 inline-flex items-center text-sm font-semibold uppercase tracking-[0.18em] text-[#0b78b5] transition-colors duration-200 hover:text-slate-900"
                >
                  Read Article
                </LocalizedClientLink>
              </div>
            </article>
          ))}
        </div>
      </MarketingDetailShell>
    )
  }

  const featureCards =
    item.sections?.map((section) => ({
      title: section.title,
      description: section.description,
    })) ??
    item.highlights.map((highlight, index) => ({
      title: item.supportPoints[index] || `Focus ${index + 1}`,
      description: highlight,
    }))

  return (
    <MarketingDetailShell
      breadcrumbs={[
        { label: "Home", href: "/" },
        { label: "Company", href: "/company" },
        { label: item.label },
      ]}
      eyebrow={item.eyebrow}
      title={item.title}
      description={item.intro}
      actions={[
        { label: "Contact Us", href: "/company/contact-us" },
        { label: "All Company Pages", href: "/company", variant: "secondary" },
      ]}
      heroNote="This page now uses the same shared hero, proof strip, and card-based content structure as the rest of the marketing pages."
      heroImage={
        item.sections?.[0]?.imageUrl
          ? {
              src: item.sections[0].imageUrl,
              alt: item.sections[0].imageAlt || item.label,
            }
          : undefined
      }
      proofTitle="COMPANY PAGES IN ONE SHARED SYSTEM"
      sectionEyebrow={item.label}
      sectionTitle={`${item.label} Highlights`}
      sectionIntro={item.summary}
      featureCards={featureCards}
      relatedTitle="Explore Related Company Pages"
      relatedHref="/company"
      relatedLinks={relatedItems.map((relatedItem) => ({
        href: `/company/${relatedItem.slug}`,
        label: relatedItem.label,
        description: relatedItem.summary,
        eyebrow: relatedItem.eyebrow,
      }))}
    />
  )
}

export default CompanyDetailTemplate
