
import {  Dialog, DialogBody, Drawer, IconButton } from '@material-tailwind/react'
import React, { useEffect, useState } from 'react'
import { IconLabel } from '../@ui/icon-label/icon-label'
import PinDropIcon from '@material-design-icons/svg/outlined/pin_drop.svg'
import { useRouter } from 'next/router'
import { SearchPageLayout } from '@/layouts/search-page-layout'
import { Configure } from 'react-instantsearch-core'
import { ProductCardHitShowcase } from '../product-card/product-card-hit'
import { ProductsShowcase } from '../products-showcase/products-showcase'
import ShoppingBagIcon from '@material-design-icons/svg/outlined/shopping_bag.svg'
import { useCart } from 'react-use-cart'
import { Link } from '@ui/link/link'
import { Button } from '../@ui/button/button'

export default function NavUbicanosEmergente() {

  const { items, removeItem, cartTotal, totalItems, emptyCart, isEmpty } =
    useCart()
  const [domLoaded, setDomLoaded] = useState(false)
  const [tiendaLima, setTiendaLima] = useState(false)
  const [tiendaAguasVerdes, setTiendaAguasVerdes] = useState(false)
  const [openCart, setOpen] = useState(false)

  const [openUbi, setOpenUbicanos] = useState(false)

  const router = useRouter()


  function reloadPage() {
    router.reload()
  }

  const handlerRemoveItems = ()=>{
    emptyCart()
    reloadPage()
  } 



  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <div>
                    {/* carrito y ubicanos Icons */}
                  <div className="flex items-center w-28 justify-around">

                              {/* Ubicanos*/}
                            <button onClick={() => setOpenUbicanos(!openUbi)} >
                              <IconLabel icon={PinDropIcon} />
                            </button>

                                {/* CARRITO*/}
                            <button onClick={()=>setOpen(!openCart)}>
                                <IconLabel icon={ShoppingBagIcon} />
                                <span className="absolute bg-black text-white rounded-full w-5">
                                  {totalItems}
                                </span>
                            </button>
                  </div>
             <Drawer
        open={openCart}
        placement="right"
        size={500}
        nonce={undefined}
        // onClose={() => setOpen(false)}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div className="mb-2 flex items-center justify-between p-4 absolute right-0">
          <IconButton
            variant="text"
            color="blue-gray"
            nonce={undefined}
            onClick={() => setOpen(!openCart)}
            onResize={undefined}
            onResizeCapture={undefined}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </IconButton>
        </div>
        <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 xl:p-10 2xl:p-8  dark:bg-gray-900 dark:text-gray-100">
          <div className="flex">
            <h2 className="text-2xl font-semibold ">Carrito</h2>
            <Button
              className="px-2 ml-5 py-1 pl-0 space-x-1 cursor-pointer"
              onClick={handlerRemoveItems}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
                className="w-4 h-4 fill-current ml-3"
              >
                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                <rect width="32" height="200" x="168" y="216"></rect>
                <rect width="32" height="200" x="240" y="216"></rect>
                <rect width="32" height="200" x="312" y="216"></rect>
                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
              </svg>
              {/* <span>Remover</span> */}
            </Button>
          </div>
          {domLoaded && isEmpty ? (
            <div className="w-full flex justify-center items-end ">
                <h4 className="text-center">Tu Carrito Esta Vació</h4>
              </div>
      
          ) : (
            <div className="flex flex-col divide-y divide-gray-700   overflow-y-auto h-[calc(96vh-345px)]">
              {domLoaded &&
                items.map((el) => (
                  <a href={`/product/${el.objectID}?queryID=${el.queryID}`}>
                  <div
                    key={el.id}
                    className="flex flex-col py-6 sm:flex-row sm:justify-between items-center"
                  >
                    <div className="flex w-full space-x-2 sm:space-x-4 items-center">
                      {/* <img
                        className="flex-shrink-0 object-cover w-24 h-24 dark:border-transparent rounded outline-none sm:w-32 sm:h-32 dark:bg-gray-500"
                        src={el.img[0]}
                        alt="Polaroid camera"
                      /> */}
                      <div className="flex justify-center items-center w-full h-full">
                        <div className="flex flex-col justify-between w-full">
                          <div className="flex justify-between w-full pb-2 space-x-2">
                            <div className="space-y-1 flex items-end">
                              <h2 className="xl:text-lg text-xs sm:text-xs font-bold  sm:pr-8">
                                {el.title}
                              </h2>
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
                    </div>
                  </div>

                  </a>
                ))}
            </div>
          )}

          {/* <!-- Sub total --> */}
          {domLoaded && (
            <div className="flex justify-center p-5">
              <div className="w-full absolute  rounded-lg border  bottom-0 bg-white px-6 py-3 shadow-md md:mt-0 ">
                <div className="mb-2 flex justify-between">
                  <p className="text-gray-700">Subtotal</p>
                  <p className="text-gray-700">S/{cartTotal}</p>
                </div>
                {/* <div className="flex justify-between">
                  <p className="text-gray-700">Delivery</p>
                  <p className="text-gray-700">S/4.99</p>
                </div> */}
                <hr className="my-4" />
                <div className="flex justify-between">
                  <p className="text-lg font-bold dark:text-[var(--dark-mode)]">
                    Total
                  </p>
                  <div className="">
                    <p className="mb-1 text-lg font-bold dark:text-[var(--dark-mode)]">
                      S/{cartTotal}
                    </p>
                    {/* <p className="text-sm text-gray-700 uppercase">Incluye igv</p> */}
                  </div>
                </div>

                <Link
                  href={'/carrito'}
                  className="flex w-full justify-center"
                  onClick={() => setOpen(!openCart)}
                >
                  <span className="mt-6 w-full uppercase rounded-md text-center bg-[#ae946d] py-1.5  text-blue-50 hover:bg-blue-gray-900 font-semibold">
                    ver carrito
                  </span>
                </Link>
                <Link
                  href={'/pagar'}
                  className="flex w-full justify-center"
                  onClick={() => setOpen(!openCart)}
                >
                  <span className="mt-2 w-full uppercase rounded-md text-center bg-[#ae946d] py-1.5  text-blue-50 hover:bg-blue-gray-900 font-semibold">
                    Pagar
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </Drawer>

      <Dialog
        size="md"
        open={openUbi}
        handler={() => setOpenUbicanos(!openUbi)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <DialogBody
          nonce={undefined}
          onResize={undefined}
          onResizeCapture={undefined}
        >
          <div className="h-[15vh] w-full flex flex-col items-center justify-around">
            <Button
              className="bg-black rounded-xl w-4/6 py-2 text-sm md:text-base text-white"
              onClick={() => setTiendaLima(!tiendaLima)}
            >
              Tienda Lima
            </Button>
            <Button
              className="bg-black rounded-xl w-4/6 py-2 text-sm md:text-base text-white"
              onClick={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
            >
              Tienda Tumbes
            </Button>
          </div>
        </DialogBody>
      </Dialog>
      {/* lima */}
      <Dialog
        size="md"
        open={tiendaLima}
        handler={() => setTiendaLima(!tiendaLima)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div>
          <Button
            className="bg-black w-10 h-10 rounded-full absolute right-0 flex justify-center items-center m-5"
            onClick={() => setTiendaLima(!tiendaLima)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d975.4430350206259!2d-77.03339623037913!3d-12.059192787751336!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105c8b939925501%3A0x56ad230febd44ef4!2sFritz!5e0!3m2!1ses!2spe!4v1698078808081!5m2!1ses!2spe"
            className="w-full rounded-3xl"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Dialog>
      {/* aguas verdes */}
      <Dialog
        size="md"
        open={tiendaAguasVerdes}
        handler={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
        className=" shadow-none"
        nonce={undefined}
        onResize={undefined}
        onResizeCapture={undefined}
      >
        <div>
          <Button
            className="bg-black w-10 h-10 rounded-full absolute right-0 flex justify-center items-center m-5"
            onClick={() => setTiendaAguasVerdes(!tiendaAguasVerdes)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#fff"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </Button>

          <iframe
            title="maps"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3982.4530787859594!2d-80.25130761573114!3d-3.4819409329065985!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x90339b82eee5b451%3A0xa414ce6fadeef6ff!2sFRITZ!5e0!3m2!1ses!2spe!4v1698079176305!5m2!1ses!2spe"
            className="w-full rounded-3xl"
            height="450"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </Dialog>
    </div>
  )
}
