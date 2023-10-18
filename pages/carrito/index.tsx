import Link from 'next/link'
import React from 'react'

import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  return (
    <SearchPageLayout {...props}>
      <div className="  py-16">
        <h1 className="mb-10 text-center text-2xl font-bold">CARRITO</h1>
        <div className="mx-auto max-w-5xl 2xl:max-w-7xl justify-center px-1 md:flex md:space-x-6 xl:px-0">
          <div className="rounded-lg md:w-2/3">
            {/* pruductos  carrito*/}
            <div className="justify-between mb-6 rounded-lg bg-white  shadow-md flex sm:justify-start">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/380190/24/sv01/fnd/EEA/fmt/png/Zapatillas-CA-Pro-Classic"
                alt="product-image"
                className="rounded-lg sm:w-40 w-40  xl:w-52 2xl:w-64"
              />
              <div className="2xl:ml-10 sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 xl:py-10 py-0  sm:mt-0 flex flex-col 2xl:justify-around 2xl:h-full">
                  <h2 className="text-lg 2xl:text-xl font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <div className="flex flex-col 2xl:justify-evenly 2xl:h-24">
                    <label className="text-[#777] 2xl:text-base">
                      Color:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        Rosa
                      </span>
                    </label>
                    <label className="text-[#777] 2xl:text-base">
                      Talla:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        42
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex xl:p-6 md:py-6 justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      -{' '}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      +{' '}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm 2xl:text-base font-bold">S/259.00</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="justify-between mb-6 rounded-lg bg-white  shadow-md flex sm:justify-start">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/386373/01/sv01/fnd/EEA/fmt/png/Zapatillas-RBD-Game-Low"
                alt="product-image"
                className="rounded-lg sm:w-40 w-40  xl:w-52 2xl:w-64"
              />
              <div className="2xl:ml-10 sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 xl:py-10 py-0  sm:mt-0 flex flex-col 2xl:justify-around 2xl:h-full">
                  <h2 className="text-lg 2xl:text-xl font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <div className="flex flex-col 2xl:justify-evenly 2xl:h-24">
                    <label className="text-[#777] 2xl:text-base">
                      Color:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        Rosa
                      </span>
                    </label>
                    <label className="text-[#777] 2xl:text-base">
                      Talla:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        42
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex xl:p-6 md:py-6 justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      -{' '}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      +{' '}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm 2xl:text-base font-bold">S/259.00</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
            {/*  */}
            <div className="justify-between mb-6 rounded-lg bg-white  shadow-md flex sm:justify-start">
              <img
                src="https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_450,h_450/global/379300/01/sv01/fnd/EEA/fmt/png/Zapatillas-de-baloncesto-All-Pro-NITRO-Scoot"
                alt="product-image"
                className="rounded-lg sm:w-40 w-40  xl:w-52 2xl:w-64"
              />
              <div className="2xl:ml-10 sm:ml-4 sm:flex sm:w-full sm:justify-between">
                <div className="mt-5 xl:py-10 py-0  sm:mt-0 flex flex-col 2xl:justify-around 2xl:h-full">
                  <h2 className="text-lg 2xl:text-xl font-bold text-gray-900">
                    Nike Air Max 2019
                  </h2>
                  <div className="flex flex-col 2xl:justify-evenly 2xl:h-24">
                    <label className="text-[#777] 2xl:text-base">
                      Color:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        Rosa
                      </span>
                    </label>
                    <label className="text-[#777] 2xl:text-base">
                      Talla:
                      <span className="text-black ml-2 text-sm 2xl:text-base">
                        42
                      </span>
                    </label>
                  </div>
                </div>
                <div className="mt-4 flex xl:p-6 md:py-6 justify-between sm:space-y-6 sm:mt-0 sm:block sm:space-x-6">
                  <div className="flex items-center border-gray-100">
                    <span className="cursor-pointer rounded-l bg-gray-100 py-1 px-3.5 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      -{' '}
                    </span>
                    <input
                      className="h-8 w-8 border bg-white text-center text-xs outline-none"
                      type="number"
                      defaultValue="2"
                      min="1"
                    />
                    <span className="cursor-pointer rounded-r bg-gray-100 py-1 px-3 duration-100 hover:bg-blue-500 hover:text-blue-50">
                      {' '}
                      +{' '}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <p className="text-sm 2xl:text-base font-bold">S/259.00</p>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="h-5 w-5 cursor-pointer duration-150 hover:text-red-500"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* precios */}
          <div className="mt-6 h-full 2xl:top-20 sticky self-start rounded-lg border bg-white p-6 shadow-md md:mt-0 md:w-1/3">
            <div className="mb-2 flex justify-between">
              <p className="text-gray-700">Subtotal</p>
              <p className="text-gray-700">S/129.99</p>
            </div>
            <div className="flex justify-between">
              <p className="text-gray-700">Delivery</p>
              <p className="text-gray-700">S/4.99</p>
            </div>
            <hr className="my-4" />
            <div className="flex justify-between">
              <p className="text-lg font-bold">Total</p>
              <div className="">
                <p className="mb-1 text-lg font-bold">S/134.98</p>
                {/* <p className="text-sm text-gray-700">including VAT</p> */}
              </div>
            </div>
            <div className="fixed md:relative bottom-0 w-full flex justify-center left-0">
              <Link href={'/pagar'} className="w-full">
                <span className="mt-6 w-full text-center text-lg  bg-[#ae946d] py-3  font-bold text-white hover:bg-[#b99d73]">
                  PAGAR
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
