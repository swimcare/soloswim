import NumberFormat from "react-number-format";

/**
 * Shows current price; if on sale, also shows struck-through list price + % badge.
 */
function PriceDisplay({
  price,
  oldPrice,
  discountPercent,
  className = "",
  oldPriceClassName = "text-red-500 line-through",
  badgeClassName = "text-main font-semibold text-xs md:text-sm self-center",
  size = "md",
}) {
  const priceClass =
    size === "lg"
      ? "font-bold text-navy-light1 text-lg lg:text-2xl"
      : size === "sm"
        ? "text-tiny"
        : "font-lexend text-tiny md:text-lg font-semibold";

  const showSale = oldPrice != null && Number(oldPrice) > Number(price);

  return (
    <div className={`flex flex-wrap items-baseline gap-x-2 gap-y-1 ${className}`}>
      <p className={priceClass}>
        <NumberFormat
          value={price}
          decimalSeparator=","
          displayType="text"
          prefix={"€ "}
          decimalScale={2}
          fixedDecimalScale={true}
        />
      </p>
      {showSale && (
        <>
          <p className={`${size === "lg" ? "text-lg lg:text-2xl" : "text-tiny md:text-base"} ${oldPriceClassName}`}>
            <NumberFormat
              value={oldPrice}
              decimalSeparator=","
              displayType="text"
              prefix={"€ "}
              decimalScale={2}
              fixedDecimalScale={true}
            />
          </p>
          {discountPercent > 0 && (
            <span className={badgeClassName}>-{discountPercent}%</span>
          )}
        </>
      )}
    </div>
  );
}

export default PriceDisplay;
