import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

import { Button } from '@/components/@ui/button/button'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const { items, cartTotal } = useCart()

  const [domLoaded, setDomLoaded] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  return (
    <SearchPageLayout {...props}>
      <div className="  py-16">
        {/* <div className="flex flex-col items-center border-b bg-white py-4 sm:flex-row sm:px-10 lg:px-20 xl:px-32">
          <a href="#" className="text-2xl font-bold text-gray-800">
            sneekpeeks
          </a>
          <div className="mt-4 py-2 text-xs sm:mt-0 sm:ml-auto sm:text-base">
            <div className="relative">
              <ul className="relative flex w-full items-center justify-between space-x-2 sm:space-x-4">
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-emerald-200 text-xs font-semibold text-emerald-700"
                    href="#"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                  </a>
                  <span className="font-semibold text-gray-900">Shop</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-600 text-xs font-semibold text-white ring ring-gray-600 ring-offset-2"
                    href="#"
                  >
                    2
                  </a>
                  <span className="font-semibold text-gray-900">Shipping</span>
                </li>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-4 w-4 text-gray-400"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                <li className="flex items-center space-x-3 text-left sm:space-x-4">
                  <a
                    className="flex h-6 w-6 items-center justify-center rounded-full bg-gray-400 text-xs font-semibold text-white"
                    href="#"
                  >
                    3
                  </a>
                  <span className="font-semibold text-gray-500">Payment</span>
                </li>
              </ul>
            </div>
          </div>
        </div> */}
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Resumen del pedido</p>
            <p className="text-gray-400">
              Revisa tus artículos. Y seleccione un método de envío adecuado.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {domLoaded &&
                items.map((el, i) => (
                  <div
                    key={i}
                    className="flex flex-col rounded-lg bg-white sm:flex-row"
                  >
                    <img
                      className="m-2 h-24 w-28 rounded-md border object-cover object-center"
                      src={el.img[0]}
                      alt=""
                    />
                    <div className="flex w-full flex-col px-4 py-4">
                      <span className="font-semibold">{el.title}</span>
                      {/* <span className="float-right text-gray-400">
                    42EU - 8.5U
                  </span> */}
                      <p className="text-lg font-bold">S/{el.price}</p>
                      <p className="text-lg font-bold">
                        Cantidad : ({el.quantity})
                      </p>
                    </div>
                  </div>
                ))}
            </div>

            <p className="mt-8 text-lg font-medium">Métodos de envío</p>
            <form className="mt-5 grid gap-6">
              {/* <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_1"
                  type="radio"
                  name="radio"
                  checked={true}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_1"
                >
                  <img
                    className="w-14 object-contain"
                    src="/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Entrega Fedex</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Days
                    </p>
                  </div>
                </label>
              </div> */}
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  checked={true}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <img
                    className="w-14 object-contain"
                    src="https://componentland.com/images/naorrAeygcJzX0SyNI4Y0.png"
                    alt=""
                  />
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Entrega Fedex</span>
                    <p className="text-slate-500 text-sm leading-6">
                      Delivery: 2-4 Dias
                    </p>
                  </div>
                </label>
              </div>
            </form>
          </div>
          <div className="mt-10 bg-gray-50 px-4 pt-8 lg:mt-0">
            <p className="text-xl font-medium">Detalles del pago</p>
            <p className="text-gray-400">
              Complete su pedido proporcionando sus datos de pago.
            </p>
            <div className="">
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Nombre y Apellido
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="NOMBRES"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4 text-gray-400"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15 9h3.75M15 12h3.75M15 15h3.75M4.5 19.5h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5zm6-10.125a1.875 1.875 0 11-3.75 0 1.875 1.875 0 013.75 0zm1.294 6.336a6.721 6.721 0 01-3.17.789 6.721 6.721 0 01-3.168-.789 3.376 3.376 0 016.338 0z"
                      />
                    </svg>
                  </div>
                </div>

                <input
                  type="text"
                  name="credit-expiry"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="APELLIDOS"
                />
              </div>
              {/*  */}
              <label
                htmlFor="email"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Email
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="email"
                  name="email"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="tu.email@gmail.com"
                />
                <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 text-gray-400"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                    />
                  </svg>
                </div>
              </div>
              {/*  */}
              <label
                htmlFor="card-no"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Detalles
              </label>
              <div className="flex">
                <div className="relative w-7/12 flex-shrink-0">
                  <input
                    type="text"
                    id="card-no"
                    name="card-no"
                    className="w-full rounded-md border border-gray-200 px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Documento de Identidad"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <svg
                      className="h-4 w-4 text-gray-400"
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      viewBox="0 0 16 16"
                    >
                      <path d="M11 5.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-1z" />
                      <path d="M2 2a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H2zm13 2v5H1V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1zm-1 9H2a1 1 0 0 1-1-1v-1h14v1a1 1 0 0 1-1 1z" />
                    </svg>
                  </div>
                </div>
                <input
                  type="text"
                  name="credit-expiry"
                  className="w-full rounded-md border border-gray-200 px-2 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Teléfono"
                />
              </div>
              {/*  */}
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Dirección de Envio
              </label>
              <div className="flex flex-col sm:flex-row">
                <div className="relative flex-shrink-0 sm:w-7/12">
                  <input
                    type="text"
                    id="billing-address"
                    name="billing-address"
                    className="w-full rounded-md border border-gray-200 px-4 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                    placeholder="Dirección"
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/b15bfeb63d8381b63973169f3dbaffc3.svg"
                      alt=""
                    />
                  </div>
                </div>
                <select
                  name="billing-state"
                  className="w-full rounded-md border border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option defaultValue="State">Provincia</option>
                  <option value="Amazonas">Amazonas</option>
                  <option value="Ancash">Ancash</option>
                  <option value="Apurímac">Apurímac</option>
                  <option value="Arequipa">Arequipa</option>
                  <option value="Ayacucho">Ayacucho</option>
                  <option value="Cajamarca">Cajamarca</option>
                  <option value="Callao">Callao</option>
                  <option value="Cuzco">Cuzco </option>
                  <option value="Huancavelica">Huancavelica</option>
                  <option value="Huánuco">Huánuco</option>
                  <option value="Ica">Ica</option>
                  <option value="Junín">Junín</option>
                  <option value="La_Libertad">La Libertad</option>
                  <option value="Lambayeque">Lambayeque</option>
                  <option value="Lima">Lima</option>
                  <option value="Loreto">Loreto</option>
                  <option value="Madre_de_Dios">Madre de Dios</option>
                  <option value="Moquegua">Moquegua</option>
                  <option value="Pasco">Pasco</option>
                  <option value="Piura">Piura</option>
                  <option value="Puno">Puno</option>
                  <option value="San_Martín">San Martín</option>
                  <option value="Tacna">Tacna</option>
                  <option value="Tumbes">Tumbes</option>
                  <option value="Ucayali">Ucayali</option>
                </select>
                <select
                  name="billing-state"
                  className="w-full rounded-md border  border-gray-200 px-4 py-3 text-sm shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                >
                  <option defaultValue="State">Distrito</option>
                  <option value="">ANCON</option>
                  <option value="">ATE</option>
                  <option value="">BARRANCO</option>
                  <option value="">BREÑA</option>
                  <option value="">CARABAYLLO</option>
                  <option value="">CHACLACAYO</option>
                  <option value="">CHORRILLOS</option>
                  <option value="">CIENEGUILLA</option>
                  <option value="">COMAS</option>
                  <option value="">EL AGUSTINO</option>
                  <option value="">INDEPENDENCIA</option>
                  <option value="">JESUS MARIA</option>
                  <option value="">LA MOLINA</option>
                  <option value="">LA VICTORIA</option>
                  <option value="">LIMA</option>
                  <option value="">LINCE</option>
                  <option value="">LOS OLIVOS</option>
                  <option value="">LURIGANCHO</option>
                  <option value="">LURIN</option>
                  <option value="">MAGDALENA DEL MAR</option>
                  <option value="">MIRAFLORES</option>
                  <option value="">PACHACAMAC</option>
                  <option value="">PUCUSANA</option>
                  <option value="">PUEBLO LIBRE</option>
                  <option value="">PUENTE PIEDRA</option>
                  <option value="">PUNTA HERMOSA</option>
                  <option value="">PUNTA NEGRA</option>
                  <option value="">RIMAC</option>
                  <option value="">SAN BARTOLO</option>
                  <option value="">SAN BORJA</option>
                  <option value="">SAN ISIDRO</option>
                  <option value="">SAN JUAN DE LURIGANCHO</option>
                  <option value="">SAN JUAN DE MIRAFLORES</option>
                  <option value="">SAN LUIS</option>
                  <option value="">SAN MARTIN DE PORRES</option>
                  <option value="">SAN MIGUEL</option>
                  <option value="">SANTA ANITA</option>
                  <option value="">SANTA MARIA DEL MAR</option>
                  <option value="">SANTA ROSA</option>
                  <option value="">SANTIAGO DE SURCO</option>
                  <option value="">SURQUILLO</option>
                  <option value="">VILLA EL SALVADOR</option>
                  <option value="">VILLA MARIA DEL TRIUNFO</option>
                </select>
              </div>
              <label
                htmlFor="card-holder"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Información Adicional
              </label>
              <div className="relative">
                <input
                  type="text"
                  id="card-holder"
                  name="card-holder"
                  className="w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 focus:border-blue-500 focus:ring-blue-500"
                  placeholder="Información Adicional de Envio"
                />
              </div>

              {/* <!-- Total --> */}
              {domLoaded && (
                <div>
                  <div className="mt-6 border-t border-b py-2">
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">
                        Subtotal
                      </p>
                      <p className="font-semibold text-gray-900">
                        S/{cartTotal}
                      </p>
                    </div>
                    <div className="flex items-center justify-between">
                      <p className="text-sm font-medium text-gray-900">Envío</p>
                      <p className="font-semibold text-gray-900">S/8.00</p>
                    </div>
                  </div>
                  <div className="mt-6 flex items-center justify-between">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      S/{cartTotal}
                    </p>
                  </div>
                </div>
              )}
            </div>
            <Button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
              Realizar pedido{' '}
            </Button>
          </div>
        </div>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
