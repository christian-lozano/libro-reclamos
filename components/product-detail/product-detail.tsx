import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useCart } from 'react-use-cart'

import { ProductDescription } from '@/components/product/product-description'
import { ProductLabel } from '@/components/product/product-label'
import type { ProductPriceCurrency } from '@/components/product/product-price'
import { ProductPrice } from '@/components/product/product-price'
import type { ProductSizeType } from '@/components/product/product-sizes'
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
  objectID?: string
  description?: string
  tags?: ProductTagType[]
  rating?: number
  reviews?: number
  available?: boolean
  sizes?: ProductSizeType[]
  price?: number
  units_in_stock?: number

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
  objectID,
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
  units_in_stock,
}: // onCheckoutClick,
ProductDetailProps) {
  // const [isFavorite, setIsFavorite] = useState(false)
  // const handleFavoriteClick = useCallback(
  //   () => setIsFavorite((favorite) => !favorite),
  //   []
  // )

  const { addItem, items } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [activeSize, setActiveSize] = useState(100)
  const [talla, setTalla] = useState(String)

  const handleActiveTalla = (i: number, size: string) => {
    setActiveSize(i)
    setTalla(size)
  }

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  // const handleCheckoutClick = useCallback(
  const onCheckoutClick = () => {
    const notify = () =>
      toast((t) => (
        <div className="relative flex">
          <span className="px-5"> {`Agregaste ${title} al Carrito `} </span>
          <Button
            className="absolute right-0"
            onClick={() => toast.dismiss(t.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>
        </div>
      ))

    // toast(`Agregaste ${title} al Carrito `)

    notify()
    const filter = {
      id: String(objectID),
      talla,
    }
    const itemsCart = items.filter(function (item) {
      for (const key in filter) {
        if (item[key] === undefined || item[key]) return false
      }
      return true
    })
    if (itemsCart) {
      addItem({
        img: image,
        title,
        precio: price,
        id: String(`${objectID}_${talla}`),
        price: Number(price),
        talla,
        units_in_stock,
      })
    } else {
      addItem({
        img: image,
        title,
        precio: price,
        id: String(objectID),
        price: Number(price),
        talla,
        units_in_stock,
      })
    }
  }
  //   [onCheckoutClick]
  // const handleCheckoutClick = useCallback(
  //   (e: MouseEvent<HTMLButtonElement>) => {
  //     if (typeof onCheckoutClick === 'function') onCheckoutClick(e)
  //   },
  //   [onCheckoutClick]
  // )

  return (
    <div className="flex flex-col  gap-6 mb-12 laptop:my-8 xl:flex-row laptop:flex-row ">
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
      <div className="hidden">{available}</div>
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
        {sizes && sizes.length > 0 && (
          <>
            <ul className="grid grid-cols-4 gap-3 mt-6">
              {sizes.map((el, i) => (
                <div key={i}>
                  <Button
                    disabled={units_in_stock === 0}
                    className={`w-full h-10 ${
                      activeSize === i
                        ? 'bg-black text-white border-2'
                        : 'bg-white  text-black border-2'
                    }`}
                    nonce={undefined}
                    onClick={() => handleActiveTalla(i, el.size)}
                  >
                    {el.size}
                  </Button>
                </div>
              ))}
            </ul>
          </>
        )}
        {units_in_stock === 0 ? (
          <div className="flex flex-col justify-around items-center w-full">
            <span className=" tex-center bg-red-900 text-white px-3 py-1 mt-5 rounded-lg">
              {units_in_stock === 0 && 'Sin Stock'}
            </span>
            <Link href="/catalog">
              <Button type="primary" size="large" className="w-full mt-6">
                <IconLabel
                  icon={ShoppingBagIcon}
                  label="Ver Mas"
                  labelPosition="right"
                  className="gap-3"
                  classNameLabel="btn-bold"
                />
              </Button>
            </Link>
          </div>
        ) : (
          <Button
            type="primary"
            size="large"
            className="w-full mt-6"
            disabled={units_in_stock === 0 || !talla}
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
        )}

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
