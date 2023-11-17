import React, { useEffect, useState } from 'react'
import { useCart } from 'react-use-cart'

import { Button } from '@/components/@ui/button/button'
import { Link } from '@/components/@ui/link/link'
import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  const { items, cartTotal } = useCart()
  // console.log(items)

  const [domLoaded, setDomLoaded] = useState(false)
  const [checkoutPago, setCheckoutPago] = useState(false)
  const [validate, setValidate] = useState(false)

  useEffect(() => {
    setDomLoaded(true)
  }, [])
  const [allValues, setAllValues] = useState({
    nombre: '',
    apellido: '',
    email: '',
    documento: '',
    telefono: '',
    direccion: '',
    provincia: '',
    distrito: '',
    adicional: '',
  })

  const changeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setAllValues({ ...allValues, [e.target.name]: e.target.value })
    if (
      allValues.nombre.length >= 5 &&
      allValues.apellido.length >= 5 &&
      allValues.email.length >= 5 &&
      allValues.documento.length >= 5 &&
      allValues.telefono.length >= 5 &&
      allValues.direccion.length >= 5 &&
      allValues.provincia.length >= 2 &&
      allValues.distrito.length >= 2 &&
      allValues.adicional.length >= 3
    ) {
      setValidate(true)
    }
  }

  return (
    <SearchPageLayout {...props}>
      <div className="  py-16">
        <div className="grid sm:px-10 lg:grid-cols-2 lg:px-20 xl:px-32">
          <div className="px-4 pt-8">
            <p className="text-xl font-medium">Resumen del pedido</p>
            <p className="text-gray-400">
              Revisa tus artículos. Y seleccione un método de envío adecuado.
            </p>
            <div className="mt-8 space-y-3 rounded-lg border bg-white px-2 py-4 sm:px-6">
              {domLoaded &&
                items.map((el) => (
                  <li
                    key={el.id}
                    className="flex flex-col py-6  sm:flex-row sm:justify-between items-center"
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
                              <h2 className="xl:text-lg laptop:text-base font-bold text-xs   sm:pr-8">
                                {el.title}
                              </h2>
                              <p className="text-sm dark:text-gray-400">
                                <p className="text-sm font-bold">
                                  Cantidad : ({el.quantity})
                                </p>
                                <p className="text-sm font-bold">
                                  Talla : {el.talla}
                                </p>
                              </p>
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
                          <div className="flex text-sm divide-x"></div>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
            </div>

            <p className="mt-8 text-lg font-medium">Métodos de envío</p>
            <form className="mt-5 grid gap-6">
              <div className="relative">
                <input
                  className="peer hidden"
                  id="radio_2"
                  type="radio"
                  name="radio"
                  defaultChecked={true}
                />
                <span className="peer-checked:border-gray-700 absolute right-4 top-1/2 box-content block h-3 w-3 -translate-y-1/2 rounded-full border-8 border-gray-300 bg-white"></span>
                <label
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer select-none rounded-lg border border-gray-300 p-4"
                  htmlFor="radio_2"
                >
                  <div className="ml-5">
                    <span className="mt-2 font-semibold">Recojo en Tienda</span>
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
                    name="nombre"
                    className={`w-full rounded-md border ${
                      allValues.nombre.length === 0
                        ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10  `}
                    placeholder="NOMBRES"
                    onChange={(e) => changeHandler(e)}
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
                  name="apellido"
                  className={`w-full rounded-md border ${
                    allValues.apellido.length === 0
                      ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                  } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 `}
                  placeholder="APELLIDOS"
                  onChange={(e) => changeHandler(e)}
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
                  className={`w-full rounded-md border ${
                    allValues.email.length === 0
                      ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                  } px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10  `}
                  placeholder="tu.email@gmail.com"
                  onChange={(e) => changeHandler(e)}
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
                    type="email"
                    id="card-no"
                    name="documento"
                    className={`w-full rounded-md border ${
                      allValues.documento.length === 0
                        ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10  `}
                    placeholder="Documento de Identidad"
                    onChange={(e) => changeHandler(e)}
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
                  name="telefono"
                  className={`w-full rounded-md border ${
                    allValues.telefono.length === 0
                      ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                  } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 `}
                  placeholder="Teléfono"
                  onChange={(e) => changeHandler(e)}
                />
              </div>
              {/*  */}
              <label
                htmlFor="billing-address"
                className="mt-4 mb-2 block text-sm font-medium"
              >
                Dirección de Envio
              </label>
              <div className="flex flex-col sm:flex-row mb-3">
                <div className="relative flex-shrink-0 sm:w-full">
                  <input
                    type="text"
                    id="billing-address"
                    name="direccion"
                    className={`w-full rounded-md border ${
                      allValues.direccion.length === 0
                        ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } px-2 py-3 pl-11 text-sm shadow-sm outline-none focus:z-10  `}
                    placeholder="Dirección"
                    onChange={changeHandler}
                  />
                  <div className="pointer-events-none absolute inset-y-0 left-0 inline-flex items-center px-3">
                    <img
                      className="h-4 w-4 object-contain"
                      src="https://flagpack.xyz/_nuxt/b15bfeb63d8381b63973169f3dbaffc3.svg"
                      alt=""
                    />
                  </div>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row">
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium w-full"
                >
                  Provincia
                  <select
                    name="provincia"
                    className={`w-full rounded-md border ${
                      allValues.provincia.length === 0
                        ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 mr-1 `}
                    onBlur={undefined}
                    onChange={(e) => changeHandler(e)}
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
                </label>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium w-full ml-1"
                >
                  Distrito
                  <select
                    id="sadas"
                    name="distrito"
                    className={`w-full rounded-md border ${
                      allValues.distrito.length === 0
                        ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 `}
                    onBlur={undefined}
                    onChange={(e) => changeHandler(e)}
                  >
                    <option defaultValue="State">Distrito</option>
                    <option value="ANCON">ANCON</option>
                    <option value="ATE">ATE</option>
                    <option value="BARRANCO">BARRANCO</option>
                    <option value="BREÑA">BREÑA</option>
                    <option value="CARABAYLLO">CARABAYLLO</option>
                    <option value="CHACLACAYO">CHACLACAYO</option>
                    <option value="CHORRILLOS">CHORRILLOS</option>
                    <option value="CIENEGUILLA">CIENEGUILLA</option>
                    <option value="COMAS">COMAS</option>
                    <option value="EL AGUSTINO">EL AGUSTINO</option>
                    <option value="INDEPENDENCIA">INDEPENDENCIA</option>
                    <option value="JESUS MARIA">JESUS MARIA</option>
                    <option value="LA MOLINA">LA MOLINA</option>
                    <option value="LA VICTORIA">LA VICTORIA</option>
                    <option value="LIMA">LIMA</option>
                    <option value="LINCE">LINCE</option>
                    <option value="LOS OLIVOS">LOS OLIVOS</option>
                    <option value="LURIGANCHO">LURIGANCHO</option>
                    <option value="LURIN">LURIN</option>
                    <option value="MAGDALENA DEL MAR">MAGDALENA DEL MAR</option>
                    <option value="MIRAFLORES">MIRAFLORES</option>
                    <option value="PACHACAMAC">PACHACAMAC</option>
                    <option value="PUCUSANA">PUCUSANA</option>
                    <option value="PUEBLO LIBRE">PUEBLO LIBRE</option>
                    <option value="PUENTE PIEDRA">PUENTE PIEDRA</option>
                    <option value="PUNTA HERMOSA">PUNTA HERMOSA</option>
                    <option value="PUNTA NEGRA">PUNTA NEGRA</option>
                    <option value="RIMAC">RIMAC</option>
                    <option value="SAN BARTOLO">SAN BARTOLO</option>
                    <option value="SAN BORJA">SAN BORJA</option>
                    <option value="SAN ISIDRO">SAN ISIDRO</option>
                    <option value="SAN JUAN DE LURIGANCHO">
                      SAN JUAN DE LURIGANCHO
                    </option>
                    <option value="SAN JUAN DE MIRAFLORES">
                      SAN JUAN DE MIRAFLORES
                    </option>
                    <option value="SAN LUIS">SAN LUIS</option>
                    <option value="SAN MARTIN DE PORRES">
                      SAN MARTIN DE PORRES
                    </option>
                    <option value="SAN MIGUEL">SAN MIGUEL</option>
                    <option value="SANTA ANITA">SANTA ANITA</option>
                    <option value="SANTA MARIA DEL MAR">
                      SANTA MARIA DEL MAR
                    </option>
                    <option value="SANTA ROSA">SANTA ROSA</option>
                    <option value="SANTIAGO DE SURCO">SANTIAGO DE SURCO</option>
                    <option value="SURQUILLO">SURQUILLO</option>
                    <option value="VILLA EL SALVADOR">VILLA EL SALVADOR</option>
                    <option value="VILLA MARIA DEL TRIUNFO">
                      VILLA MARIA DEL TRIUNFO
                    </option>
                  </select>
                </label>
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
                  name="adicional"
                  className={`w-full rounded-md border ${
                    allValues.adicional.length === 0
                      ? 'border-red-200 focus:border-red-200 focus:border-red-200'
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200 '
                  } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 `}
                  placeholder="Información Adicional de Envio"
                  onChange={(e) => setCheckoutPago(e.target.value)}
                />
              </div>

              {/* <!-- Total --> */}
              {domLoaded && (
                <div className="border-b-2 pb-2">
                  <div className="mt-6 border-t border-b py-2 ">
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
                  <div className="mt-6 flex items-center justify-between ">
                    <p className="text-sm font-medium text-gray-900">Total</p>
                    <p className="text-2xl font-semibold text-gray-900">
                      S/{cartTotal}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <form action="/api/checkout" method="POST">
              <input type="hidden" name="nombre" value="nombre" />

              <input
                type="hidden"
                name="productos"
                value={items.map(
                  (el) => ` ${el.id}_${el.quantity}_${String(el.talla)}`
                )}
              />
              <input
                type="hidden"
                name="stock"
                value={items.map(
                  (el) =>
                    `${String(el.quantity)}_` +
                    `${String(el.id)}_` +
                    `${String(el.units_in_stock)}`
                )}
              />

              <input type="hidden" name="apellido" value="apellido" />
              <input type="hidden" name="typedocumento" value="documento" />

              <input type="hidden" name="sede" value="sede" />
              <input type="hidden" name="cede" value="La Victoria" />
              <input type="hidden" name="transporte" value="transporte" />
              <input type="hidden" name="vehiculo" value="vehiculo" />
              <input type="hidden" name="placa" value="placa" />
              <input type="hidden" name="monto" value={cartTotal} />
              {/* <input
                          type="hidden"
                          name="fecha"
                          value={dataPedidos.fecha}
                        /> */}
              {/* terminos y condiciones */}
              <div className="text-center xl:block hidden text-gray-400 text-xs mb-3 mt-3">
                Tus datos personales se utilizarán para procesar tu pedido,
                mejorar tu experiencia en esta web y otros propósitos descritos
                en nuestra
                <Link
                  href="/pyp"
                  target="_blank"
                  className="focus:outline-none underline mr-1 text-gray-400 "
                >
                  <i className="mdi mdi-beer-outline mr-1 "></i>
                  política de privacidad
                </Link>
                y nuestros
                <Link
                  href="/tyc"
                  target="_blank"
                  className="focus:outline-none underline mr-1 text-gray-400 "
                >
                  <i className="mdi mdi-beer-outline mr-1 "></i>términos y
                  condiciones.
                </Link>
              </div>

              <div className=" xl:flex items-center  flex z-10 justify-center mt-3 laptop:mt-0">
                <div className="inline-flex items-center">
                  <label
                    className="relative flex cursor-pointer items-center rounded-full p-3"
                    htmlFor="checkbox-8"
                    data-ripple-dark="true"
                  >
                    <input
                      // checked={checkoutPago}
                      type="checkbox"
                      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-black checked:bg-black checked:before:bg-black hover:before:opacity-10"
                      id="checkbox-8"
                      onChange={(e) => setCheckoutPago(e.target.checked)}
                    />
                    <div className="pointer-events-none absolute top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4 text-white opacity-0 transition-opacity peer-checked:opacity-100">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-3.5 w-3.5"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        stroke="currentColor"
                        strokeWidth="1"
                      >
                        <path
                          fillRule="evenodd"
                          d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                    </div>
                  </label>
                </div>
                <span className="text-gray-400 text-sm  "> Acepto los</span>{' '}
                <Link
                  href="/tyc"
                  target="_blank"
                  className="focus:outline-none underline mr-1 text-sm  text-gray-400 "
                  rel="noreferrer"
                >
                  <i className="mdi mdi-beer-outline mr-1 "></i>Términos &
                  Condiciones.
                </Link>
              </div>
              {/* ---- */}

              {checkoutPago && items.length > 0 && validate ? (
                <input
                  // disabled={checkoutPago}
                  type="submit"
                  value="Realizar pedido"
                  className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white cursor-pointer"
                />
              ) : (
                <Button
                  // disabled={true}

                  className="mt-4 mb-8 w-full rounded-md bg-red-900 px-6 py-3 font-medium text-white cursor-pointer"
                  // onClick={(e) => HandleDisableCheckout(e)}
                >
                  Realizar pedido
                </Button>
              )}
            </form>

            {/* <Button className="mt-4 mb-8 w-full rounded-md bg-gray-900 px-6 py-3 font-medium text-white">
           
            </Button> */}
          </div>
        </div>
      </div>
    </SearchPageLayout>
  )
}

export const getStaticProps = () => getStaticPropsPage(Home)
