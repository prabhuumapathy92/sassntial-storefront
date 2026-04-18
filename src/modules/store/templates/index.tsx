import { Suspense } from "react"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"

import TrainingCatalog from "./training-catalog"

const PRODUCT_LIMIT = 12
const validSortOptions: SortOptions[] = [
  "created_at",
  "price_asc",
  "price_desc",
]
const validPageSizes = [12, 20, 40]

const StoreTemplate = ({
  sortBy,
  page,
  limit,
  searchQuery,
  category,
  speaker,
  month,
  countryCode,
}: {
  sortBy?: string
  page?: string
  limit?: string
  searchQuery?: string
  category?: string
  speaker?: string
  month?: string
  countryCode: string
}) => {
  const requestedPage = Number.parseInt(page || "1", 10)
  const pageNumber =
    Number.isFinite(requestedPage) && requestedPage > 0 ? requestedPage : 1
  const sort = validSortOptions.includes(sortBy as SortOptions)
    ? (sortBy as SortOptions)
    : "created_at"
  const requestedLimit = Number.parseInt(limit || `${PRODUCT_LIMIT}`, 10)
  const pageSize = validPageSizes.includes(requestedLimit)
    ? requestedLimit
    : PRODUCT_LIMIT
  const fallbackCards = Array.from({ length: 4 })

  return (
    <section
      className="relative overflow-hidden bg-[linear-gradient(180deg,#eef4ff_0%,#f7f9fd_22%,#ffffff_100%)]"
      data-testid="category-container"
    >
      <div className="content-container py-3 small:py-0">
        <Suspense
          fallback={
            <div className="grid items-start gap-4 small:grid-cols-[minmax(280px,300px)_minmax(0,1fr)] small:gap-8 medium:grid-cols-[320px_minmax(0,1fr)]">
              <div className="min-h-[720px] border border-[#d8deea] bg-white" />
              <div className="space-y-4 small:space-y-6">
                <div className="border border-[#dbe3ef] bg-white p-5 small:p-7">
                  <div className="h-4 w-24 bg-[#e6ebf3]" />
                  <div className="mt-4 h-10 w-72 bg-[#e6ebf3]" />
                  <div className="mt-5 h-12 w-full bg-[#f2f5fa]" />
                </div>
                <div className="space-y-3 small:space-y-4">
                  {fallbackCards.map((_, index) => (
                    <div
                      key={index}
                      className="h-48 border border-[#dbe3ef] bg-white"
                    />
                  ))}
                </div>
              </div>
            </div>
          }
        >
          <TrainingCatalog
            sortBy={sort}
            page={pageNumber}
            limit={pageSize}
            searchQuery={searchQuery}
            category={category}
            speaker={speaker}
            month={month}
            countryCode={countryCode}
          />
        </Suspense>
      </div>
    </section>
  )
}

export default StoreTemplate
