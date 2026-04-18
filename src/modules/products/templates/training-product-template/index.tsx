import { HttpTypes } from "@medusajs/types"
import {
  getTrainingSpeaker,
  getTrainingLevel,
  getTrainingDuration,
  getTrainingCategory,
} from "@modules/store/lib/training-catalog"
import Image from "next/image"
import React, { Suspense } from "react"
import ProductActionsWrapper from "../product-actions-wrapper"
import RelatedProducts from "@modules/products/components/related-products"
import SkeletonRelatedProducts from "@modules/skeletons/templates/skeleton-related-products"

const TrainingProductTemplate = ({
  product,
  region,
  countryCode,
  images,
}: {
  product: HttpTypes.StoreProduct
  region: HttpTypes.StoreRegion
  countryCode: string
  images: HttpTypes.StoreProductImage[]
}) => {
  const speaker = getTrainingSpeaker(product)
  const level = getTrainingLevel(product)
  const duration = getTrainingDuration(product)
  const category = getTrainingCategory(product)
  const imageSrc = product.thumbnail || images?.[0]?.url || null
  const trainingFacts = [
    { label: "Level", value: level },
    { label: "Speaker", value: speaker },
    { label: "Duration", value: duration },
    { label: "Category", value: category },
  ]

  return (
    <div
      className="min-h-screen bg-[linear-gradient(180deg,#f4f7fb_0%,#ffffff_24%,#f5f8fc_100%)]"
      suppressHydrationWarning
    >
      <div
        className="content-container mx-auto px-4 py-4 sm:px-5 lg:px-6 lg:py-6"
        suppressHydrationWarning
      >
        <section className="overflow-hidden rounded-[20px] bg-white shadow-[0_20px_48px_-36px_rgba(15,23,42,0.2)]">
          <div className="grid gap-0 lg:grid-cols-[minmax(0,1fr)_370px] lg:items-start">
            <div className="flex flex-col px-6 py-6 sm:px-8 sm:py-8 lg:px-12 lg:py-10">
              <div className="mb-4 h-1.5 w-16 rounded-full bg-[#0078d4]" />
              <p className="text-[11px] font-semibold uppercase tracking-[0.46em] text-[#5f728f]">
                Training program
              </p>
              <h1 className="mt-3 max-w-3xl text-[20px] font-semibold leading-[1.25] text-slate-950">
                {product.title}
              </h1>
              <p className="mt-4 max-w-2xl text-[15px] leading-7 text-slate-600 sm:text-[16px]">
                Admin-authored content from the DIN panel is rendered with a cleaner,
                Microsoft-style hierarchy, calmer spacing, and sharper typography.
              </p>

              <div className="mt-6 flex flex-wrap items-center gap-3">
                <a
                  href="#overview"
                  className="inline-flex items-center justify-center rounded-md bg-[#0078d4] px-4 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#106ebe]"
                >
                  View overview
                </a>
                <a
                  href="#actions"
                  className="inline-flex items-center justify-center rounded-md border border-[#cfd9e8] bg-white px-4 py-2.5 text-sm font-semibold text-slate-900 transition-colors hover:bg-[#f4f8fc]"
                >
                  Explore options
                </a>
              </div>

              <div className="mt-6 grid overflow-hidden rounded-[18px] border border-[#dbe6f2] bg-[#fbfdff] sm:grid-cols-2 xl:grid-cols-4">
                {trainingFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="border-b border-[#e5edf7] px-4 py-3.5 sm:border-r xl:border-b-0"
                  >
                    <p className="text-[9px] font-semibold uppercase tracking-[0.34em] text-[#6b7f9c]">
                      {fact.label}
                    </p>
                    <p className="mt-1.5 text-[14px] font-semibold text-slate-950">{fact.value}</p>
                  </div>
                ))}
              </div>
            </div>

            <aside id="actions" className="border-t border-[#e6edf6] bg-[#f8fbff] px-5 py-5 sm:px-6 lg:border-l lg:border-t-0 lg:p-5 lg:sticky lg:top-8">
              <div className="overflow-hidden rounded-[20px] bg-white shadow-[0_16px_42px_-30px_rgba(15,23,42,0.2)]">
                <div className="relative aspect-[16/9] bg-slate-100">
                  {imageSrc ? (
                    <Image
                      src={imageSrc}
                      alt={`${product.title} webinar preview`}
                      fill
                      sizes="(max-width: 1024px) 100vw, 370px"
                      className="object-cover"
                    />
                  ) : (
                    <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_top_left,#e0f2fe,transparent_42%),radial-gradient(circle_at_bottom_right,#f1f5f9,transparent_40%),linear-gradient(135deg,#f8fafc,#ffffff)] text-sm font-medium text-slate-400">
                      Preview unavailable
                    </div>
                  )}
                </div>
                <Suspense
                  fallback={
                    <div className="p-4 text-center text-[13px] text-slate-500">
                      Loading webinar options...
                    </div>
                  }
                >
                  <ProductActionsWrapper
                    id={product.id}
                    region={region}
                    isTrainingTemplate={true}
                  />
                </Suspense>
              </div>
            </aside>
          </div>
        </section>

        <div className="mt-8 grid gap-8 lg:grid-cols-[minmax(0,1fr)_370px] lg:items-start">
          <div className="flex flex-col gap-6">
            <section
              id="overview"
              className="overflow-hidden rounded-[18px] bg-white shadow-[0_10px_30px_-26px_rgba(15,23,42,0.16)]"
            >
             
              <div className="px-5 py-4 sm:px-6 sm:py-5">
                <div
                  className="product-description max-w-none text-[14px] leading-7 text-slate-600"
                  suppressHydrationWarning
                  dangerouslySetInnerHTML={{ __html: product.description ?? "" }}
                />
              </div>
            </section>

            <div>
              <Suspense fallback={<SkeletonRelatedProducts />}>
                <RelatedProducts product={product} countryCode={countryCode} />
              </Suspense>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainingProductTemplate
