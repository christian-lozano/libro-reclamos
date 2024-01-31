import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import { Spinner } from '@material-tailwind/react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import toast, { Toaster } from 'react-hot-toast'
import { useCart } from 'react-use-cart'

import { ProductDescription } from '@/components/product/product-description'
import { ProductLabel } from '@/components/product/product-label'

import { ProductPrice } from '@/components/product/product-price'

import { ProductTag } from '@/components/product/product-tag'
import { ProductTitle } from '@/components/product/product-title'

import { solicitudAlgoliaStock } from '@/utils/solicitud-stock'
import { Button } from '@ui/button/button'
import { IconLabel } from '@ui/icon-label/icon-label'

import { ProductDetails } from '../product/product-detail'


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
  gender,
  brand,
}// product_type,
// onCheckoutClick,
) {
  // const [isFavorite, setIsFavorite] = useState(false)
  // const handleFavoriteClick = useCallback(
  //   () => setIsFavorite((favorite) => !favorite),
  //   []
  // )

  // const [posts, setPosts] = useState([])

  // function fetchPosts() {
  //   const client = algoliasearch(
  //     'GXNXE1S5A4',
  //     '890e7784e4e4e090caf2b3c4eab906c6'
  //   )
  //   const index = client.initIndex('pwa_ecom_ui_template_products')
  //   index
  //     .search(`${brand}`, {
  //       facetFilters: [`gender:${gender}`],
  //     })
  //     .then(({ hits }) => {
  //       setPosts(hits)

  //       // console.log(hits)
  //     })
  //     .catch((error) => {
  //       console.log(error.message, 'ocurrio un error')
  //     })
  // }

  // useEffect(() => {
  //   fetchPosts()
  // }, [])
  // console.log(posts)

  const { addItem, items, removeItem } = useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [activeSize, setActiveSize] = useState(100)
  const [stockProduct, setStockProduct] = useState()
  const [tallas, setTallas] = useState(String)
  const [executing, setExecuting] = useState(false)
  const [talla, setTalla] = useState(String)

  const [dataTallas, setDataTallas] = useState(sizes)
  const handleActiveTalla = (i, size, stock, talla) => {
    setStockProduct(stock)
    setActiveSize(i)
    setTallas(size)
    setTalla(talla)
  }
  function Loading({ disableLoadAddProduct = true }) {
    return (
      <Spinner
        className={`h-4 w-4 ${!disableLoadAddProduct ? 'hidden' : 'block'}`}
        onResize={undefined}
        onResizeCapture={undefined}
      />
    )
  }
  useEffect(() => {
    // const itemsStock = items.find(function (item) {
    //   // const objetID = item.id
    //   // const indiceId = objetID.indexOf('_')
    //   // const extraidaObjetId = objetID.substring(0, indiceId)
    //   return item.objectID === objectID
    // })
    solicitudAlgoliaStock(
      items,
      setExecuting,
      removeItem,
      objectID,
      setTalla,
      setActiveSize
    )
  }, [items])


const solicitudAlgoliaCarrito = (items,tallas) =>{

  let newTallas = []

  tallas.map(el=>{

    newTallas.push(el)
  })
  items.map(itemsCarrito=>{
    newTallas.map(tallasActuales=>{
      if (itemsCarrito.id === tallasActuales.id) {
              if (itemsCarrito.talla === tallasActuales.talla) {
               

                tallasActuales.stock = tallasActuales.stock- itemsCarrito.quantity
                return tallasActuales
              
            
            
              }
      }

    })
  })
  console.log(newTallas);
  setTallas(newTallas);
}


  const [disableLoadAddProduct, setDisableLoadAddProduct] = useState(
    Boolean(true)
  )
  useEffect(() => {
    setDomLoaded(true)
  }, [])
  // const handleCheckoutClick = useCallback(
  // console.log(sizes)
  const router = useRouter()
  const onCheckoutClick = async () => {
    const notify = () =>
      toast((t) => (
        <div className="relative   w-full">
          <span className="px-1 2xl:text-sm laptop:text-lg w-full">
            {`Agregaste:`} <br />
            <span className="font-extrabold px-1">{`${title}`}</span>
            <span>al Carrito </span>
            {``}
          </span>
          <Button
            className="absolute right-0 top-0 ml-5"
            onClick={() => toast.dismiss(t.id)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="laptop:w-6 laptop:h-6 2xl:w-4 2xl:h-4 w-3 h-3"
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
    const dataObjectStock = {
      objectID,
      tallas: dataTallas,
      id: tallas,
      tallasActuales: sizes,
      units_in_stock,
    }
    try {
      const res = await fetch(`/api/consultaStock`, {
        method: 'POST',
        body: JSON.stringify(dataObjectStock),
        headers: {
          'Content-Type': 'application/json',
          'Access-Control-Allow-Origin': '*',
          'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
          'Access-Control-Allow-Headers': '*',
        },
      })
      const data = await res.json()
      console.log(res.status)
      if (res.status === 201) {
        // router.reload()
        console.log(data.msg)

        setDataTallas(data.msg.tallas)
        addItem({
          img: image,
          title,
          precio: price,
          objectID,
          // id: String(`${objectID}_${talla}`),
          id: String(`${tallas}`),
          price: Number(price),
          tallas: data.msg.talla,
          talla,
          stockProductActual: stockProduct,
        })
        // setTallas('')
        setTalla('')
        setStockProduct('')
        setActiveSize('')
        // router.push(data.msg)
        // router.refresh()
        // alert(data.msg)
      }
      if (res.status === 400) {
        console.log(data.msg)
        router.reload()
      }
      // console.log(data);
    } catch (error) {
      console.log(error)
    }

    //   notify()
    //   const filter = {
    //     id: String(objectID),
    //     talla,
    //   }
    //   const itemsCart = items.filter(function (item) {
    //     for (const key in filter) {
    //       if (item[key] === undefined || item[key]) return false
    //     }
    //     return true
    //   })
    //   if (itemsCart) {
    //     addItem({
    //       img: image,
    //       title,
    //       precio: price,
    //       objectID,
    //       // id: String(`${objectID}_${talla}`),
    //       id: String(`${objectID}_${talla}`),
    //       price: Number(price),
    //       talla,
    //       units_in_stock,
    //     })
    //   } else {
    //     addItem({
    //       img: image,
    //       title,
    //       precio: price,
    //       id: String(objectID),
    //       price: Number(price),
    //       talla,
    //       units_in_stock,
    //     })
    //   }
    //   setDisableLoadAddProduct(true)
  }
  //   [onCheckoutClick]
  // const handleCheckoutClick = useCallback(
  //   (e: MouseEvent<HTMLButtonElement>) => {
  //     if (typeof onCheckoutClick === 'function') onCheckoutClick(e)
  //   },
  //   [onCheckoutClick]
  // )

  useEffect(() => {
    setDisableLoadAddProduct(true)
    setExecuting(false)
    solicitudAlgoliaCarrito(items,sizes)
  }, [items])
  // console.log(tallas);
  return (
    <>
      <div className="hidden">
        {gender} {brand}
      </div>
      <div className="flex flex-col xl:justify-center gap-1 mb-12 laptop:my-8 xl:flex-row laptop:flex-row ">
        <div className="laptop:w-12/12 flex justify-center ">
          <div className="flex flex-col items-center  laptop:min-h-[500px] w-full ">
            {image && (
              <ProductDetails
                src={image}
                alt={title}
                className="w-7/8 laptop:w-11/12 xl:w-9/12"
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
        <div className="laptop:w-4/12 xl:w-5/12 flex flex-col items-center ">
          <div className="w-full">
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
                  <ProductTag
                    key={tag.label}
                    label={tag.label}
                    theme={tag.theme}
                  />
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
            {dataTallas && dataTallas.length > 0 && (
              <>
                <ul className="grid grid-cols-4 gap-3 mt-6">
                  {dataTallas.map((el, i) => (
                    <div key={el.id}>
                      <Button
                        disabled={
                          el.stock <= 0 || executing || !disableLoadAddProduct || units_in_stock === 0
                        }
                        className={`w-full h-10 ${
                          activeSize === el.id
                            ? 'bg-black text-white border-2'
                            : 'bg-white  text-black border-2'
                        }`}
                        nonce={undefined}
                        onClick={() =>
                          handleActiveTalla(
                            el.id,
                            String(el.id),
                            units_in_stock,
                            el.talla
                          )
                        }
                      >
                        {String(el.talla)}
                      </Button>
                    </div>
                  ))}
                </ul>
              </>
            )}

            {/* <CalmButton
          units_in_stock={units_in_stock}
          talla={talla}
          executing={executing}
          setExecuting={setExecuting}
          onClick={onCheckoutClick}
        >
          Agregar Productos
        </CalmButton> */}
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
                disabled={
                  units_in_stock === 0 ||
                  !talla ||
                  executing ||
                  !disableLoadAddProduct
                }
                onClick={() => onCheckoutClick()}
              >
                <Loading disableLoadAddProduct={!disableLoadAddProduct} />
                <IconLabel
                  icon={ShoppingBagIcon}
                  label="Agregar al Carrito"
                  labelPosition="right"
                  className="gap-3"
                  classNameLabel="btn-bold"
                />
              </Button>
            )}
            {/* <ButtonGetStrockProducts /> */}
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
      </div>

      {/* <div className="grid grid-cols-5">
        {posts.map((el, i) => (
          <ProductCardHitComponent hit={el} />
        ))}
      </div> */}
      {/* <ProductsShowcase
        title="Recomendado Para ti"
        indexId="mujer"
        query="Mujer"
        ruleContexts={['Mujer']}
        className="laptop:bg-gray-50"
        hitComponent={ProductCardHitShowcase}
      /> */}
      {/* <SearchPageLayout>
        <div>
          <ProductsShowcase
            // indexId="recommended"
            title="Recomendado para ti"
            query={`${gender} ${brand} `}
            hitComponent={ProductCardHitShowcase}
          />
        </div>
      </SearchPageLayout> */}
    </>
  )
}
