import { HttpTypes } from "@medusajs/types"
import Image from "next/image"

import { getProductPrice } from "@lib/util/get-product-price"
import LocalizedClientLink from "@modules/common/components/localized-client-link"
import {
  getTrainingInitials,
  getTrainingSpeaker,
  getTrainingSummary,
  getTrainingTime,
} from "@modules/store/lib/training-catalog"

const truncateCopy = (value: string, maxLength = 180) => {
  if (value.length <= maxLength) {
    return value
  }

  return `${value.slice(0, maxLength - 1).trimEnd()}...`
}

const TrainingProductRow = ({
  product,
}: {
  product: HttpTypes.StoreProduct
}) => {
  const speaker = getTrainingSpeaker(product)
  const summary = getTrainingSummary(product)
  const time = getTrainingTime(product)
  const avatarLabel = speaker || product.title
  const initials = getTrainingInitials(avatarLabel)
  const { cheapestPrice } = getProductPrice({ product })
  const priceLabel = cheapestPrice?.calculated_price ?? "Contact for pricing"

  return (
    <li>
      <article className="border border-[#dbe3ef] bg-white px-4 py-4 shadow-[0_12px_40px_rgba(15,23,42,0.05)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_45px_rgba(44,124,247,0.12)] small:px-7 small:py-6">
        <LocalizedClientLink
          href={`/products/${product.handle}`}
          className="inline-flex max-w-full"
        >
          <h3 className="truncate text-[1.02rem] font-semibold leading-tight text-[#0f172a] transition hover:text-[#2c7cf7] small:text-[1.1rem]">
            {product.title}
          </h3>
        </LocalizedClientLink>



        <div className="mt-3 flex flex-wrap items-center gap-x-3 gap-y-2 text-[14px] text-[#6b7280] small:mt-4 small:gap-x-4 small:gap-y-3 small:text-[15px]">
          <div className="relative flex h-10 w-10 shrink-0 items-center justify-center overflow-hidden rounded-full bg-gradient-to-br from-[#dce9ff] to-[#f5fbff] text-sm font-semibold text-[#1d4ed8] small:h-12 small:w-12">
            {product.thumbnail ? (
              <Image
                src={product.thumbnail}
                alt={avatarLabel}
                fill
                className="object-cover"
                sizes="48px"
              />
            ) : (
              initials
            )}
          </div>

          <span>{speaker ? `by ${speaker}` : "by"}</span>
          <span className="text-[#c0c8d4]">|</span>
          <span>{time ? `time: ${time}` : "time:"}</span>
          <span className="text-[#c0c8d4]">|</span>
          <span className="font-medium text-[#0f172a]">Price: {priceLabel}</span>
          <span className="text-[#c0c8d4]">|</span>
          <LocalizedClientLink
            href={`/products/${product.handle}`}
            className="font-medium text-[#2c7cf7] transition hover:text-[#1d4ed8]"
          >
            View Details
          </LocalizedClientLink>
        </div>
      </article>
    </li>
  )
}

export default TrainingProductRow
