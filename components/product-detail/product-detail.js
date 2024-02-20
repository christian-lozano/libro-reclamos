import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import { Dialog, DialogBody, DialogFooter, DialogHeader, Spinner } from '@material-tailwind/react'
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
import GiaDeTallasZapatillas from "@/components/guia-tallas/GiaDeTallasZapatillas"


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
  queryID,
  product_type
}// product_type,
// onCheckoutClick,
) {
  // const [isFavorite, setIsFavorite] = useState(false)
  // const handleFavoriteClick = useCallback(
  //   () => setIsFavorite((favorite) => !favorite),
  //   []
  // )

  // const [posts, setPosts] = useState([])
console.log(product_type);
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

  const { addItem, items, removeItem ,cartTotal} = useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [activeSize, setActiveSize] = useState(100)
  const [stockProduct, setStockProduct] = useState()
  const [tallas, setTallas] = useState(String)
  const [executing, setExecuting] = useState(false)
  const [talla, setTalla] = useState(String)
  const [loaderAddProduct, setLoaderAddProduct] = useState(false)

// guía de tallas Zapatillas
  let  dataGiaTallasMujerZapatillas = {
    title:"GUÍA DE TALLAS zapatillas MUJERES",
     TABLE_HEAD :["","Adidas", "Reebok", "Nike", "Cat","Fila"],
     
     TABLE_ROWS : [
      {
        TITLE:"USA",
       ADIDAS:  "UE",
       REEBOK:"UE",
       NIKE: "UE",
       CAT:"UE",
       FILA:"UE",
      },
      {
        TITLE:"5",
       ADIDAS:  "36",
       REEBOK:"35",
       NIKE: "",
       CAT:"36",
       FILA:"35.5",
      },
  
      {
        TITLE:"5.5",
       ADIDAS:  "36.5	",
       REEBOK:"35.5",
       NIKE: "36	",
       CAT:"36.5",
       FILA:"36",
      },
      {
        TITLE:"6",
       ADIDAS:  "37.5	",
       REEBOK:"36",
       NIKE: "36.5	",
       CAT:"37",
       FILA:"36.5",
      },
      {
        TITLE:"6.5",
       ADIDAS:  "38	",
       REEBOK:"37",
       NIKE: "37.5	",
       CAT:"37.5	",
       FILA:"37.5",
      },
      {TITLE:"7",ADIDAS:"38.5",REEBOK:"37.5",NIKE: "38", CAT:"38",FILA:"38"},
     { TITLE:"7.5"	,ADIDAS:"39",REEBOK:	"38",	NIKE:"38.5",	CAT:"38.5",	FILA:"38.5"},
     { TITLE:"8"	,ADIDAS:"40",REEBOK:	"38.5",	NIKE:"39",	CAT:"39",	FILA:"39"},
     { TITLE:"8.5"	,ADIDAS:"40.5",REEBOK:"39",	NIKE:"40",	CAT:"39.5",	FILA:"40"},
     { TITLE:"9"	,ADIDAS:"41.5",REEBOK:"40",	NIKE:"40.5",	CAT:"40",	FILA:"40.5"},
     { TITLE:"9.5"	,ADIDAS:"42",REEBOK:"40.5",	NIKE:"41",	CAT:"40.5",	FILA:""},
     { TITLE:"10"	,ADIDAS:"42.5",REEBOK:"41",	NIKE:"42",	CAT:"40.5",	FILA:""},
     { TITLE:"10.5"	,ADIDAS:"43.5",REEBOK:"42",	NIKE:"42.5",	CAT:"41.5",	FILA:""},
     { TITLE:"11"	,ADIDAS:"44",REEBOK:"42.5",	NIKE:"43",	CAT:"42",	FILA:""},
     { TITLE:"11.5"	,ADIDAS:"44.5",REEBOK:"43",	NIKE:"44",	CAT:"",	FILA:""},
    
    
    ]
  
  }
  
  
  let  dataGiaTallasHombreZapatillas = {
      title:"GUÍA DE TALLAS zapatillas Hombre",

     TABLE_HEAD :["","Adidas", "Reebok", "Nike", "Cat"],

     TABLE_ROWS : [
      { TITLE:"USA", ADIDAS:  "UE", REEBOK:"UE", NIKE: "UE", CAT:"UE", },
      { TITLE:"7",ADIDAS:"40",REEBOK:"39",NIKE: "40", CAT:"40",},
      { TITLE:"7.5"	,ADIDAS:"40.5",REEBOK:	"40",	NIKE:"40.5",	CAT:"40.5",	},
      { TITLE:"8"	,ADIDAS:"41.5",REEBOK:	"40.5",	NIKE:"41",	CAT:"41",	},
      { TITLE:"8.5"	,ADIDAS:"42",REEBOK:"41",	NIKE:"42",	CAT:"41.5",	},
      { TITLE:"9"	,ADIDAS:"42.5",REEBOK:"42",	NIKE:"42.5",	CAT:"42",	},
      { TITLE:"9.5"	,ADIDAS:"43.5",REEBOK:"42.5",	NIKE:"43",	CAT:"42.5",	},
      { TITLE:"10"	,ADIDAS:"44",REEBOK:"43",	NIKE:"44",	CAT:"43",	},
      { TITLE:"10.5"	,ADIDAS:"44.5",REEBOK:"44",	NIKE:"44.5",	CAT:"43.5",	},
      { TITLE:"11"	,ADIDAS:"45",REEBOK:"44.5",	NIKE:"45",	CAT:"44",	},
      { TITLE:"11.5"	,ADIDAS:"45.5",REEBOK:"45",	NIKE:"45.5",	CAT:"44.5",	},
      { TITLE:"12"	,ADIDAS:"46",REEBOK:"45.5",	NIKE:"46",	CAT:"45",	},
      { TITLE:"12.5"	,ADIDAS:"47.5",REEBOK:"46",	NIKE:"46.5",	CAT:"45.5",	},
      { TITLE:"13"	,ADIDAS:"48",REEBOK:"47",	NIKE:"47",	CAT:"46",	},


    
    ]
  
  }
  let  dataGiaTallasNinosZapatillas = {
    title:"GUÍA DE TALLAS zapatillas niños",

   TABLE_HEAD :["","Adidas", "Reebok", "Nike", "Fila","Cat"],

   TABLE_ROWS : [
    { TITLE:"USA", ADIDAS:  "UE", REEBOK:"UE", NIKE: "UE", FILA:"UE", CAT:"UE"},
    { TITLE:"5K",ADIDAS:"20",REEBOK:"20",NIKE: "", FILA:"",},
    { TITLE:"6K"	,ADIDAS:"22",REEBOK:"22",	NIKE:"22",	FILA:"",	CAT:""},
    { TITLE:"7K"	,ADIDAS:"23.5",REEBOK:"23.5",	NIKE:"23.5",	FILA:"",	CAT:""},
    { TITLE:"8K"	,ADIDAS:"25",REEBOK:"24.5",	NIKE:"25",	FILA:"",	CAT:""},
    { TITLE:"9K"	,ADIDAS:"26",REEBOK:"25.5",	NIKE:"26",	FILA:"",	CAT:""},
    { TITLE:"10K"	,ADIDAS:"27",REEBOK:"26.5",	NIKE:"27",	FILA:"",	CAT:""},
    { TITLE:"11K"	,ADIDAS:"28.5",REEBOK:"27.5",	NIKE:"28",	FILA:"28",	CAT:"28"},
    { TITLE:"12K"	,ADIDAS:"30",REEBOK:"29",	NIKE:"29.5",	FILA:"29.5",	CAT:"29"},
    { TITLE:"13K"	,ADIDAS:"21",REEBOK:"30.5",	NIKE:"31",	FILA:"31",	CAT:"31"},
    { TITLE:"1"	,ADIDAS:"32",REEBOK:"31.5",	NIKE:"32",	FILA:"32",	CAT:"32"},
    { TITLE:"2"	,ADIDAS:"33.5",REEBOK:"32",	NIKE:"33.5",	FILA:"33.5",	CAT:"33"},
    { TITLE:"3"	,ADIDAS:"35",REEBOK:"34",	NIKE:"35",	FILA:"35",	CAT:"34"},
    { TITLE:"3.3"	,ADIDAS:"35.5",REEBOK:"34.5",	NIKE:"35.5",	FILA:"35.5",	CAT:"35"},
    { TITLE:"4"	,ADIDAS:"36",REEBOK:"35",	NIKE:"36",	FILA:"36",	CAT:"36"},
    { TITLE:"4.5"	,ADIDAS:"36.5",REEBOK:"36",	NIKE:"36.5",	FILA:"36.5",	CAT:"36.5"},
    { TITLE:"5"	,ADIDAS:"37.5",REEBOK:"36.5",	NIKE:"37.5",	FILA:"37.5",	CAT:"37"},
    { TITLE:"5.5"	,ADIDAS:"38",REEBOK:"37",	NIKE:"38",	FILA:"38",	CAT:"37.5"},
    { TITLE:"6"	,ADIDAS:"38.5",REEBOK:"38",	NIKE:"38.5",	FILA:"38.5",	CAT:"38"},
    { TITLE:"6.5"	,ADIDAS:"39",REEBOK:"38.5",	NIKE:"39",	FILA:"", CAT:"38.5"	},
 ]

}
// guía de tallas Ropa



  const [guiaTallasZapatillas, setGuiaTallasZapatillas] = useState()


  useEffect(() => {
    if (product_type === "Zapatillas") {
      switch (gender ) {
        case "Hombre":
          setGuiaTallasZapatillas(dataGiaTallasHombreZapatillas)
          break;
          case "Mujer":
            setGuiaTallasZapatillas(dataGiaTallasMujerZapatillas)
          break;
          case "Niños":
            setGuiaTallasZapatillas(dataGiaTallasNinosZapatillas)
          break;
     
      }
      
    }
  }, [gender,product_type])
  

// open modal add to cart
const [open, setOpen] = useState(false);

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
    setLoaderAddProduct(true)
    const notify = () =>
      toast((t) => (
        <div className="relative   w-full">
        <div className='w-[100vw]'></div>
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
          queryID:queryID
        })
        // setTallas('')
        setLoaderAddProduct(false)
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
    setOpen(!open)
      // notify()
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





 function BasicModal({items}) {

 

    return (
      <>

      <Dialog open={open} handler={()=>setOpen(!open)}>
      <div className='flex shadow-xl justify-between px-5 py-4 items-center'>

        <div className='text-center uppercase text-black font-bold text-2xl'>Tu Carrito 
        </div>
        <Button
            variant="text"
            color="white"
            
            onClick={()=>setOpen(!open)}
            className=" text-black  rounded-2xl"
          >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18 18 6M6 6l12 12" />
          </svg>

          </Button>
        
   
      </div>
        <div className='overflow-y-scroll h-[70vh] px-3 text-black'>
          {
            items.map(el=>(
              <div
                    key={el.id}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between justify-center items-center"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                      <img
                        className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={el.img[0]}
                        alt="Polaroid camera"
                      />
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col justify-between w-full">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 flex items-end">
                              <h2 className="xl:text-lg text-xs sm:text-xs font-bold  sm:pr-8">
                                {el.title}
                              </h2>
                            </div>
                        
                          </div>
                          <p className="text-xs sm:text-xs mb-2  dark:text-gray-600">
                            Talla: {el.talla}
                          </p>
                          
                          
                          <div className="text-xs flex justify-between items-start sm:text-xs mb-2  dark:text-gray-600">
                            Cantidad: {el.quantity}
                            <div className="flex text-sm divide-x">
                              <div className=" flex justify-end w-full items-center">
                
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="text-right">
                              <p className="xl:text-lg text-base sm:text-xs font-semibold">
                                S/{el.price}
                              </p>
                              <p className="text-base sm:text-xs line-through dark:text-gray-600">
                               S/{el.price + 200}
                              </p>
                            </div>
                    </div>
                  </div>
            ))
          }
        </div>
        <DialogFooter className='text-black flex justify-around py-5'>
          <div className='font-extrabold mb-5 text-lg'>Total<span className='font-bold ml-1'>S/{cartTotal}</span> </div>
          <div className='flex justify-around w-full'>
          <Link href={"/carrito"}>
          <Button
            variant="text"
            color="white"
            
            onClick={()=>setOpen(!open)}
            className=" bg-black text-white px-5 py-1 rounded-2xl"
          >
            <span className=' uppercase'>Ver Carrito</span>
          </Button>
          </Link>
          <Link href={"/pagar"}>
              <Button variant="gradient" className='mr-1 bg-black text-white px-5 py-1 rounded-2xl' color="green" onClick={()=>setOpen(!open)}>
                <span className=' uppercase'>Pagar</span>
              </Button>

          </Link>

          </div>
        </DialogFooter>
      </Dialog>
    </>
    );
  }


const [verGiaTallas, setVerGiaTallas] = useState(false)

  return (
    <>
<BasicModal items={items}></BasicModal>
     
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
          <div className="w-full ">
    
            {label && (
              <ProductLabel className="label-semibold">{label}</ProductLabel>
            )}
            {title && (
              <ProductTitle className="heading-4 mt-1">{title}</ProductTitle>
            )}
            <div className="text-xs mt-3 flex ">
            <span className='mr-2'> Genero:  <span className='font-bold'>{gender}</span> </span>
            <span > Marca:  <span className='font-bold'>{brand}</span> </span> {" "}
            <span className='ml-2' > Sku:  <span className='font-bold '>{objectID}</span> </span>


            </div>
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
                        className={`w-full h-10 flex justify-center items-center ${
                          activeSize === el.id
                            ? 'bg-black text-white border-2'
                            : 'bg-white  text-black border-2'
                        } border-[0.5px] border-[#cdcdcd] disabled:border-[0.5px] disabled:text-[#666666] disabled:bg-[#cccccc] disabled:line-through `}
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
             
                        {
                          !loaderAddProduct ?
                          
                         <span className='disabled:line-through w-full'>{String(el.talla)}</span> 
                          
                          : (
                            <div role="status " className='flex justify-center'>
                              <svg aria-hidden="true" class="w-5 h-5  text-gray-200 left-0 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                              <span class="sr-only">Loading...</span>
                          </div>
                          )
                          
                          }
                      </Button>
                    </div>
                  ))}
                </ul>
              </>
            )}
            {product_type === "Zapatillas" && (
            <button onClick={() => setVerGiaTallas(!verGiaTallas)} className='mt-3 border-b-[1px] border-black'>
            <svg fill="#000000" height="34px" width="34px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512.001 512.001" >

              <g id="SVGRepo_bgCarrier" stroke-width="0"/>

              <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"/>

              <g id="SVGRepo_iconCarrier"> <g> <g> <path d="M512,286.181c0-25.883-19.466-47.575-45.279-50.458c-12.791-1.428-25.452-3.799-37.631-7.046 c-47.174-12.581-175.441-69.322-213.63-86.413c-12.825-5.74-27.546-3.012-37.506,6.949l-44.676,44.676 c-4.754,4.754-11.67,6.387-18.048,4.261l-50.225-16.742c-3.717-1.239-6.212-4.702-6.212-8.618v-4.776 c0-9.136-7.432-16.568-16.568-16.568h-9.592c-13.228,0-24.24,10.342-25.07,23.542L0.048,294.51 c-0.471,8.971,2.548,17.512,8.505,24.176v37.452c0,9.136,7.432,16.568,16.568,16.568h282.187 c83.725,0,149.941-16.607,174.523-23.747c6.73-1.955,12.38-6.657,15.502-12.901l13.821-27.641 c0.569-1.137,0.837-2.364,0.837-3.585h0.01v-18.651H512z M424.96,244.167c12.946,3.454,26.4,5.973,39.982,7.49 c1.013,0.113,2.011,0.274,2.995,0.469c-2.903,0.94-6.21,1.95-9.989,3.013c-16.009,4.503-43.511,10.801-83.625,15.225 c-6.915,0.762-13.305,3.531-18.477,8.005l-11.887,10.283c-0.584-0.187-1.194-0.316-1.831-0.366 c-21.583-1.66-44.209-3.983-66.641-6.642l61.277-36.71c27.142,0.234,45.476-3.511,55.729-11.332 C405.182,238.189,416.306,241.859,424.96,244.167z M199.161,271.386c-8.488-1.26-16.685-2.512-24.5-3.733l52.459-31.426 c3.696-2.215,8.048-3.012,12.253-2.247c5.879,1.071,11.628,2.061,17.257,2.978L199.161,271.386z M281.682,240.641 c9.204,1.195,17.982,2.147,26.295,2.85l-58.325,34.941c-8.574-1.115-17.044-2.261-25.342-3.419L281.682,240.641z M327.205,303.144 l-21.91,18.953c-26.719-0.708-50.868-2.316-74.414-3.886c-30.362-2.025-61.73-4.109-98.421-4.277l-22.658-40.785 C148.438,279.946,243.427,295.818,327.205,303.144z M23.559,175.993c0.304-4.775,4.286-8.515,9.071-8.515h9.592 c0.295,0,0.534,0.239,0.534,0.534v4.776c0,10.829,6.903,20.405,17.176,23.83l50.224,16.742 c12.177,4.057,25.379,0.943,34.456-8.134l44.676-44.676c5.217-5.217,12.919-6.651,19.62-3.651c2.999,1.342,6.265,2.8,9.754,4.354 l-8.111,8.816c-2.997,3.258-2.787,8.33,0.471,11.328c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589 l11.787-12.812c4.372,1.93,8.959,3.948,13.72,6.035l-6.873,7.47c-2.997,3.258-2.787,8.33,0.471,11.328 c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589l10.62-11.544c4.502,1.955,9.108,3.946,13.788,5.961 l-5.774,6.276c-2.997,3.258-2.787,8.33,0.471,11.328c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589 l9.605-10.44c4.592,1.955,9.221,3.916,13.87,5.872l-4.84,5.261c-2.997,3.258-2.787,8.33,0.471,11.328 c1.54,1.417,3.486,2.116,5.426,2.116c2.163,0,4.32-0.871,5.901-2.589l8.777-9.54c16.93,7.023,33.704,13.798,49.148,19.745 c-22.78,5.986-69.02,3.414-129.332-7.571c-8.032-1.463-16.331,0.051-23.365,4.266l-68.84,41.241 c-25.494-4.175-44.266-7.546-51.618-8.889c-9.584-12.272-22.411-21.776-37.134-27.297l-40.02-15.007L23.559,175.993z M16.053,295.434l4.16-66.186l35.443,13.291c15.312,5.742,28.118,16.777,36.06,31.072l22.392,40.306H33.671 c-4.887,0-9.431-1.953-12.795-5.498C17.513,304.873,15.801,300.233,16.053,295.434z M482.992,328.887 c-1.13,2.259-3.183,3.964-5.634,4.675c-18.666,5.421-86.094,23.11-170.051,23.11H25.12c-0.295,0-0.534-0.239-0.534-0.534v-26.206 c0.177,0.012,0.356,0.018,0.536,0.018h102.612c38.213,0,70.682,2.164,102.08,4.257c31.662,2.111,64.401,4.294,103.147,4.294 c68.437,0,127.284-13.172,155.625-20.801L482.992,328.887z M495.966,298.918c-19.041,5.659-85.41,23.55-163.006,23.55 c-1.201,0-2.381-0.009-3.572-0.013l36.946-31.96c2.665-2.306,6.125-3.795,9.744-4.194c65.653-7.241,99.593-19.348,110.463-23.861 c5.867,6.237,9.424,14.604,9.424,23.74V298.918z"/> </g> </g> </g>

              </svg>
                  Ver Guía de Tallas

            </button>

            )}
            <Dialog
              size="xl"
              open={verGiaTallas}
              handler={() => setVerGiaTallas(!verGiaTallas)}
              className=" shadow-none"
              nonce={undefined}
              onResize={undefined}
              onResizeCapture={undefined}
            >

                          {
                            product_type === "Zapatillas" && (
                                  <GiaDeTallasZapatillas dataTallasZapatillas={guiaTallasZapatillas}></GiaDeTallasZapatillas>

                            )
                          }
      </Dialog>
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
                <Link href="/tienda">
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
                className="w-full mt-6 relative"
                disabled={
                  units_in_stock === 0 ||
                  !talla ||
                  executing ||
                  !disableLoadAddProduct || 
                  loaderAddProduct
                }
                onClick={() => onCheckoutClick()}
              >
            {
              loaderAddProduct && (

              <div role="status " className='absolute left-40'>
                  <svg aria-hidden="true" class="w-5 h-5  text-gray-200 left-0 animate-spin dark:text-gray-600 fill-black" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/><path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/></svg>
                  <span class="sr-only">Loading...</span>
              </div>

              )

            }
       
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
