"use client"

import { Funnel, MagnifyingGlass } from "@medusajs/icons"
import { usePathname, useRouter, useSearchParams } from "next/navigation"
import { useEffect, useState } from "react"

import { SortOptions } from "@modules/store/components/refinement-list/sort-products"
import { TrainingCatalogOption } from "@modules/store/lib/training-catalog"

type TrainingCatalogFiltersProps = {
  initialQuery?: string
  initialCategory?: string
  initialSpeaker?: string
  initialMonth?: string
  sortBy: SortOptions
  categoryOptions: TrainingCatalogOption[]
  speakerOptions: TrainingCatalogOption[]
  monthOptions: TrainingCatalogOption[]
}

const sortOptions: Array<{ label: string; value: SortOptions }> = [
  { label: "Latest Arrivals", value: "created_at" },
  { label: "Price: Low to High", value: "price_asc" },
  { label: "Price: High to Low", value: "price_desc" },
]

const filterFieldClassName =
  "h-12 w-full rounded-none border border-[#d7dce5] bg-white px-4 text-sm text-[#0f172a] outline-none transition focus:border-[#2c7cf7] focus:ring-2 focus:ring-[#bfdbfe]"

const summaryValue = (value?: string, fallback = "All") =>
  value && value.trim().length ? value : fallback

const FilterSelect = ({
  label,
  value,
  onChange,
  placeholder,
  options,
}: {
  label: string
  value?: string
  onChange: (value: string) => void
  placeholder: string
  options: TrainingCatalogOption[]
}) => {
  return (
    <label className="block">
      {label ? (
        <span className="mb-2 block text-sm font-semibold text-[#243244]">
          {label}
        </span>
      ) : null}
      <select
        value={value ?? ""}
        onChange={(event) => onChange(event.target.value)}
        className={filterFieldClassName}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}

const TrainingCatalogFilters = ({
  initialQuery,
  initialCategory,
  initialSpeaker,
  initialMonth,
  sortBy,
  categoryOptions,
  speakerOptions,
  monthOptions,
}: TrainingCatalogFiltersProps) => {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const currentQuery = searchParams.get("q") ?? ""
  const [searchValue, setSearchValue] = useState(initialQuery ?? "")

  const pushWithUpdates = (updates: Record<string, string | null>) => {
    const params = new URLSearchParams(searchParams.toString())

    Object.entries(updates).forEach(([key, value]) => {
      if (value && value.trim().length) {
        params.set(key, value)
      } else {
        params.delete(key)
      }
    })

    params.delete("page")

    const queryString = params.toString()
    router.push(queryString ? `${pathname}?${queryString}` : pathname)
  }

  useEffect(() => {
    setSearchValue(currentQuery)
  }, [currentQuery])

  useEffect(() => {
    if (searchValue === currentQuery) {
      return
    }

    const timeoutId = window.setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString())

      if (searchValue.trim().length) {
        params.set("q", searchValue)
      } else {
        params.delete("q")
      }

      params.delete("page")

      const queryString = params.toString()
      router.replace(queryString ? `${pathname}?${queryString}` : pathname)
    }, 150)

    return () => window.clearTimeout(timeoutId)
  }, [currentQuery, pathname, router, searchParams, searchValue])

  const handleReset = () => {
    setSearchValue("")
    router.replace(pathname)
  }

  return (
    <aside className="self-start overflow-hidden border border-[#d8deea] bg-white shadow-[0_20px_60px_rgba(15,23,42,0.08)]">
      <div className="flex items-center gap-3 bg-[#2c7cf7] px-4 py-4 text-white small:px-6 small:py-5">
        <Funnel className="h-5 w-5" />
        <div>
          <p className="text-lg font-semibold">Filters</p>          
        </div>
      </div>

      <div className="space-y-4 bg-white px-4 py-4 small:space-y-5 small:px-6 small:py-6">
        <label className="block">          
          <div className="relative">
            <MagnifyingGlass className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
            <input
              type="search"
              value={searchValue}
              onChange={(event) => setSearchValue(event.target.value)}
              placeholder="Enter keyword..."
              className={`${filterFieldClassName} pl-11`}
            />
          </div>
        </label>

        <FilterSelect
          label=""
          value={initialCategory}
          onChange={(value) => pushWithUpdates({ category: value || null })}
          placeholder="All categories"
          options={categoryOptions}
        />

        <FilterSelect
          label=""
          value={initialSpeaker}
          onChange={(value) => pushWithUpdates({ speaker: value || null })}
          placeholder="All speakers"
          options={speakerOptions}
        />

        <FilterSelect
          label=""
          value={initialMonth}
          onChange={(value) => pushWithUpdates({ month: value || null })}
          placeholder="All months"
          options={monthOptions}
        />

        <label className="block">          
          <select
            value={sortBy}
            onChange={(event) =>
              pushWithUpdates({ sortBy: event.target.value || null })
            }
            className={filterFieldClassName}
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <div className="pt-2">
          <button
            type="button"
            onClick={handleReset}
            className="w-full rounded-none border border-[#d7dce5] bg-white px-4 py-2.5 text-sm font-medium text-[#64748b] transition hover:text-[#2c7cf7] small:py-3"
          >
            Reset filters
          </button>
        </div>
      </div>      
    </aside>
  )
}

export default TrainingCatalogFilters
