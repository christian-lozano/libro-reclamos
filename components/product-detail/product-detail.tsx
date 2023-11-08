import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useCart } from 'react-use-cart'

import { ProductDescription } from '@/components/product/product-description'
import { ProductLabel } from '@/components/product/product-label'
import type { ProductPriceCurrency } from '@/components/product/product-price'
import { ProductPrice } from '@/components/product/product-price'
import type { ProductSizeType } from '@/components/product/product-sizes'
import { ProductSizes } from '@/components/product/product-sizes'
import type { ProductTagType } from '@/components/product/product-tag'
import { ProductTag } from '@/components/product/product-tag'
import { ProductTitle } from '@/components/product/product-title'
import type { ProductHit } from '@/typings/hits'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'

import { ProductDetails } from '../product/product-detail'

export type ProductDetailProps = {
  id?: string
  image?: string[]
  label?: string
  title?: string
  description?: string
  tags?: ProductTagType[]
  rating?: number
  reviews?: number
  available?: boolean
  sizes?: ProductSizeType[]
  price?: number
  originalPrice?: number
  currency?: ProductPriceCurrency
  popular?: boolean
  related?: ProductHit[] | null
  // onCheckoutClick?: MouseEventHandler<HTMLButtonElement>
}

// export type ProductDetailRatingProps = Pick<ProductDetailProps, 'reviews'>

// function ProductDetailRating({ reviews }: ProductDetailRatingProps) {
//   return (
//     <a href="#reviews" className="body-bold underline">
//       ({reviews} reviews)
//     </a>
//   )
// }

export function ProductDetail({
  id,
  image,
  label,
  title,
  description,
  tags,
  // rating,
  // reviews,
  available,
  sizes,
  price,
  originalPrice,
  currency,
  popular,
  related,
}: // onCheckoutClick,
ProductDetailProps) {
  // const [isFavorite, setIsFavorite] = useState(false)
  // const handleFavoriteClick = useCallback(
  //   () => setIsFavorite((favorite) => !favorite),
  //   []
  // )

  const { addItem } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  // const handleCheckoutClick = useCallback(
  const onCheckoutClick = () => {
    const notify = () => toast(`Agregaste ${title} al Carrito `)
    notify()
    addItem({
      img: image,
      title,
      precio: price,
      id: String(id),
      price: Number(price),
    })
  }
  //   [onCheckoutClick]
  // const handleCheckoutClick = useCallback(
  //   (e: MouseEvent<HTMLButtonElement>) => {
  //     if (typeof onCheckoutClick === 'function') onCheckoutClick(e)
  //   },
  //   [onCheckoutClick]
  // )

  return (
    <div className="flex flex-col  gap-6 mb-12 laptop:my-8 xl:flex-row laptop:flex-row">
      <div className="laptop:w-8/12 flex justify-center ">
        <div className="flex flex-col items-center  laptop:min-h-[500px] w-full ">
          {image && (
            <ProductDetails
              src={image}
              alt={title}
              className="w-7/8 laptop:w-2/4"
            />
          )}
        </div>
        <div>
          {related?.map((el) => (
            <div key={el.sku} className="hidden">
              <img src={el.image_urls[0]} alt="" />
            </div>
          ))}
        </div>
      </div>

      <div className="laptop:w-4/12">
        {label && (
          <ProductLabel className="label-semibold">{label}</ProductLabel>
        )}
        {title && (
          <ProductTitle className="heading-4 mt-1">{title}</ProductTitle>
        )}
        {/* {typeof rating !== 'undefined' && (
          <ProductRating
            rating={rating}
            reviews={reviews}
            reviewComponent={ProductDetailRating}
            className="mt-4"
            classNameStar="w-5 h-5"
          />
        )} */}
        {description && (
          <ProductDescription className="body-regular mt-6">
            {description}
          </ProductDescription>
        )}
        {tags && tags.length > 0 && (
          <div className="flex flex-col items-start gap-1 mt-6">
            {tags.map((tag) => (
              <ProductTag key={tag.label} label={tag.label} theme={tag.theme} />
            ))}
          </div>
        )}
        {price && (
          <ProductPrice
            price={price}
            originalPrice={originalPrice}
            currency={currency}
            className="flex-row-reverse items-center justify-end gap-4 not-italic font-bold mt-3"
            classNamePrice="heading-4"
            classNameOriginalPrice="text-xl"
          />
        )}
        {sizes && sizes.length > 0 && <ProductSizes sizes={sizes} />}

        <Button
          type="primary"
          size="large"
          className="w-full mt-6"
          disabled={available}
          onClick={() => onCheckoutClick()}
        >
          <IconLabel
            icon={ShoppingBagIcon}
            label="Agregar al Carrito"
            labelPosition="right"
            className="gap-3"
            classNameLabel="btn-bold"
          />
        </Button>
        {domLoaded && (
          <Toaster
            toastOptions={{
              className: '',
              style: {
                backgroundColor: '#000',
                border: '1px solid #ae946d',
                fontSize: '11px',
                padding: '9px',
                color: '#fff',
              },
            }}
            position="top-left"
            reverseOrder={true}
          />
        )}
        {popular && (
          <div className="mt-2">
            <span className="text-brand-nebula font-bold"></span>
          </div>
        )}
      </div>
    </div>
  )
}
