import MarketingDetailShell from "@modules/common/components/marketing-detail-shell"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import SeoServiceGrid, {
  multiLocationSeoServiceCards,
} from "@modules/common/components/seo-service-grid"
import {
  WhoWeServeItem,
  whoWeServeItems,
} from "@modules/who-we-serve/constants/who-we-serve-items"

const WhoWeServeDetailTemplate = ({ item }: { item: WhoWeServeItem }) => {
  const relatedItems = whoWeServeItems
    .filter((candidate) => candidate.slug !== item.slug)
    .slice(0, 3)

  const isMultiLocation = item.slug === "multi-location-businesses"

  const breadcrumbs = isMultiLocation
    ? [
        { label: "Home", href: "/" },
        { label: "Services", href: "/services" },
        { label: "Search Engine Optimization Agency" },
      ]
    : [
        { label: "Home", href: "/" },
        { label: "Who We Serve", href: "/who-we-serve" },
        { label: item.label },
      ]

  const title = isMultiLocation
    ? "TURN SEARCH INTO REVENUE WITH OUR EXPERT SEO MARKETING AGENCY"
    : item.title

  const description = isMultiLocation
    ? "REAL GROWTH GOES BEYOND RANKINGS. AS THE BEST SEO AGENCY, WE DRIVE TARGETED VISIBILITY THAT TURNS CLICKS INTO CUSTOMERS."
    : item.intro

  const actions = isMultiLocation
    ? [
        { label: "Request A Free Proposal", href: "/company/contact-us" as const },
      ]
    : [
        { label: "Contact Us", href: "/company/contact-us" as const },
        { label: "All Segments", href: "/who-we-serve" as const, variant: "secondary" as const },
      ]

  return (
    <MarketingDetailShell
      breadcrumbs={breadcrumbs}
      eyebrow={isMultiLocation ? undefined : item.eyebrow}
      title={title}
      description={description}
      heroVariant={isMultiLocation ? "immersive" : "default"}
      actions={actions}
      heroImage={
        isMultiLocation
          ? {
              src: "/multi-location-banner.jpg",
              alt: "Team collaborating in an office meeting",
            }
          : undefined
      }
      heroNote={
        isMultiLocation
          ? "We email qualified businesses within one business day"
          : "Audience and industry pages now use the same shared design pattern as services and company content."
      }
      proofTitle="WHO WE SERVE"
      sectionEyebrow={isMultiLocation ? "Business Types" : item.eyebrow}
      sectionTitle={
        isMultiLocation
          ? "Multi-Location Digital Marketing Services Include"
          : `${item.label} Highlights`
      }
      sectionIntro={
        isMultiLocation
          ? item.summary
          : item.summary
      }
      featureCards={
        isMultiLocation
          ? []
          : item.highlights.map((highlight, index) => ({
              title: item.supportPoints[index] || `Focus ${index + 1}`,
              description: highlight,
            }))
      }
      childrenWide={isMultiLocation}
      relatedTitle="Explore Related Segments"
      relatedHref="/who-we-serve"
      relatedLinks={relatedItems.map((relatedItem) => ({
        href: `/who-we-serve/${relatedItem.slug}`,
        label: relatedItem.label,
        description: relatedItem.summary,
        eyebrow: relatedItem.eyebrow,
      }))}
    >
      {isMultiLocation && (
        <SeoServiceGrid
          cards={multiLocationSeoServiceCards}
          ctaLabel="Request A Free Proposal"
        />
      )}
    </MarketingDetailShell>
  )
}

export default WhoWeServeDetailTemplate
