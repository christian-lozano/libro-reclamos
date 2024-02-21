import classNames from 'classnames'

export type ProductPriceCurrency = {
  symbol: string
  position: 'prefix' | 'suffix'
}

export type ProductPriceProps = {
  price: number
  originalPrice?: number
  currency?: ProductPriceCurrency
  descuento?: number
  precision?: number
  className?: string
  classNamePrice?: string
  classNameOriginalPrice?: string
}

export function ProductPrice({
  price,
  descuento,
  originalPrice,
  currency,
  precision = 2,
  className = 'items-baseline gap-2 italic',
  classNamePrice,
  classNameOriginalPrice,
}: ProductPriceProps) {
  // const solesSimbol = currency.position
  // console.log(currency.symbol)
  const porcentajeDescuento = descuento

  const precio = price

  const operation = (Number(porcentajeDescuento) / 100) * Number(precio)

  const resultado = Number(precio) - operation

  return (
    <div className={classNames('flex', className)}>
      <span className="font-semibold text-xs line-through text-[#767677]">
        {currency === undefined ? 'S/' : 'S/'}{' '}
        {price.toFixed(precision).toLocaleString()}
      </span>
      <span className={classNames('text-venus-base font-bold', classNamePrice)}>
        {currency === undefined ? 'S/' : 'S/'}
        {/* {currency?.position === 'prefix' ? currency.symbol : null}
        {currency?.position === 'suffix' ? currency.symbol : null} */}

        {resultado.toFixed(precision).toLocaleString()}
      </span>

      {originalPrice && (
        <span
          className={classNames(
            'text-neutral-dark text-xs line-through',
            classNameOriginalPrice
          )}
        >
          {currency?.position === 'prefix' ? currency.symbol : null}
          {originalPrice.toFixed(precision).toLocaleString()}
          {currency?.position === 'suffix' ? currency.symbol : null}
        </span>
      )}
    </div>
  )
}
