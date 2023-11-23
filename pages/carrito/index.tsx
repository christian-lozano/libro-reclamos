import Link from 'next/link'
import React, { useState, useEffect } from 'react'
import { useCart } from 'react-use-cart'

import { Button } from '@/components/@ui/button/button'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const { items, removeItem, cartTotal, updateItemQuantity } = useCart()
  return (
    <SearchPageLayout {...props}>
      <div className="py-16">
        <h1 className="mb-10 text-center text-2xl font-bold">CARRITO</h1>
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl justify-center px-1 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {domLoaded &&
              items.map((el) => (
                <li
                  key={el.id}
                  className="flex flex-col py-6 px-5 sm:flex-row sm:justify-between items-center"
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
                          <div className="space-y-1">
                            <h2 className="xl:text-lg text-base font-bold  sm:pr-8">
                              {el.title}
                            </h2>
                            {/* <p className="text-sm dark:text-gray-400">
                            Classic
                          </p> */}
                          </div>
                          <div className="text-right">
                            <p className="xl:text-lg text-base font-semibold">
                              S/{el.price}
                            </p>
                            <p className="text-sm line-through dark:text-gray-600">
                              S/75.50
                            </p>
                          </div>
                        </div>
                        <div className="flex text-sm divide-x">
                          <div>
                            <span className="mr-1">Talla:</span>
                            {el.talla}.5
                          </div>
                          {/* <div className="flex items-center border-gray-100">
                            <Button
                              className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() =>
                                updateItemQuantity(
                                  el.id,
                                  Number(el.quantity) - 1
                                )
                              }
                            >
                              {' '}
                              -{' '}
                            </Button>
                            <input
                              className="xl:h-8 xl:w-8 h-7 w-8 border bg-white text-center text-xs outline-none"
                              type="number"
                              value={el.quantity}
                            />
                            <Button
                              className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50"
                              onClick={() =>
                                updateItemQuantity(
                                  el.id,
                                  Number(el.quantity) + 1
                                )
                              }
                            >
                              {' '}
                              +{' '}
                            </Button>
                          </div> */}
                          <div className=" flex justify-end w-full items-center ">
                            <Button
                              className="px-2 py-1 pl-0 space-x-1 cursor-pointer"
                              onClick={() => removeItem(el.id)}
                            >
                              <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 512 512"
                                className="w-4 h-4 fill-current ml-3"
                              >
                                <path d="M96,472a23.82,23.82,0,0,0,23.579,24H392.421A23.82,23.82,0,0,0,416,472V152H96Zm32-288H384V464H128Z"></path>
                                <rect
                                  width="32"
                                  height="200"
                                  x="168"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="240"
                                  y="216"
                                ></rect>
                                <rect
                                  width="32"
                                  height="200"
                                  x="312"
                                  y="216"
                                ></rect>
                                <path d="M328,88V40c0-13.458-9.488-24-21.6-24H205.6C193.488,16,184,26.542,184,40V88H64v32H448V88ZM216,48h80V88H216Z"></path>
                              </svg>
                              {/* <span>Remover</span> */}
                            </Button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            {/* pruductos  carrito*/}
          </div>
          {/* precios */}

          {domLoaded && (
            <div className="mt-6 h-full 2xl:top-20 sticky self-start rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
              <div className="mb-2 flex justify-between">
                <p className="text-gray-700">Subtotal</p>
                <p className="text-gray-700">S/{cartTotal}</p>
              </div>
              <div className="flex justify-between">
                <p className="text-gray-700">Delivery</p>
                <p className="text-gray-700">S/4.99</p>
              </div>
              <hr className="my-4" />
              <div className="flex justify-between">
                <p className="text-lg font-bold">Total</p>
                <div className="">
                  <p className="mb-1 text-lg font-bold">S/{cartTotal}</p>
                  {/* <p className="text-sm text-gray-700">including VAT</p> */}
                </div>
              </div>
              <div className="fixed md:relative bottom-4 w-full flex justify-center left-0">
                <Link href={'/pagar'} className="w-full">
                  <span className="mt-6 cursor-pointer w-full text-center text-lg  bg-[#ae946d] py-3  font-bold text-white hover:bg-[#b99d73]">
                    PAGAR
                  </span>
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
