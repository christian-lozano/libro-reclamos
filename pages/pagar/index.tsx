import { Option, Select } from '@material-tailwind/react'
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

  const changeHandlerSelect = (
    e: React.ChangeEvent<HTMLInputElement>,
    nombre: string
  ) => {
    setAllValues({ ...allValues, [nombre]: e })
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

  const changeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
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
                  className="peer-checked:border-2 peer-checked:border-gray-700 peer-checked:bg-gray-50 flex cursor-pointer Select-none rounded-lg border border-gray-300 p-4"
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
                        ? 'border-red-200 focus:border-red-200 '
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
                      ? 'border-red-200 focus:border-red-200'
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                  } px-2 py-3 text-sm shadow-sm outline-none focus:z-10  `}
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
                      ? 'border-red-200 focus:border-red-200 '
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
                        ? 'border-red-200 focus:border-red-200 '
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
                      ? 'border-red-200 focus:border-red-200 '
                      : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                  } px-2 py-3 text-sm shadow-sm outline-none focus:z-10  `}
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
                  <Select
                    nonce={undefined}
                    name="provincia"
                    label="Provincia"
                    className={`w-full rounded-md border ${
                      allValues.provincia.length === 0
                        ? 'border-red-200 focus:border-red-200 '
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 mr-1 `}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onChange={(e = '') =>
                      changeHandlerSelect(e.nativeEvent, (nombre = 'provincia'))
                    }
                  >
                    <Option value="Amazonas">Amazonas</Option>
                    <Option value="Ancash">Ancash</Option>
                    <Option value="Apurímac">Apurímac</Option>
                    <Option value="Arequipa">Arequipa</Option>
                    <Option value="Ayacucho">Ayacucho</Option>
                    <Option value="Cajamarca">Cajamarca</Option>
                    <Option value="Callao">Callao</Option>
                    <Option value="Cuzco">Cuzco </Option>
                    <Option value="Huancavelica">Huancavelica</Option>
                    <Option value="Huánuco">Huánuco</Option>
                    <Option value="Ica">Ica</Option>
                    <Option value="Junín">Junín</Option>
                    <Option value="La_Libertad">La Libertad</Option>
                    <Option value="Lambayeque">Lambayeque</Option>
                    <Option value="Lima">Lima</Option>
                    <Option value="Loreto">Loreto</Option>
                    <Option value="Madre_de_Dios">Madre de Dios</Option>
                    <Option value="Moquegua">Moquegua</Option>
                    <Option value="Pasco">Pasco</Option>
                    <Option value="Piura">Piura</Option>
                    <Option value="Puno">Puno</Option>
                    <Option value="San_Martín">San Martín</Option>
                    <Option value="Tacna">Tacna</Option>
                    <Option value="Tumbes">Tumbes</Option>
                    <Option value="Ucayali">Ucayali</Option>
                  </Select>
                </label>
                <label
                  htmlFor="card-holder"
                  className="mt-4 mb-2 block text-sm font-medium w-full ml-1"
                >
                  <Select
                    label="Distrito"
                    id="sadas"
                    name="distrito"
                    className={`w-full rounded-md border ${
                      allValues.distrito.length === 0
                        ? 'border-red-200 focus:border-red-200'
                        : 'border-gray-200 focus:border-gray-200 focus:ring-gray-200  '
                    } w-full rounded-md border border-gray-200 px-4 py-3  text-sm uppercase shadow-sm outline-none focus:z-10 `}
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                    onChange={(
                      e: React.ChangeEvent<HTMLInputElement> = 'cercado de lima'
                    ) => changeHandlerSelect(e, (nombre = 'distrito'))}
                  >
                    <Option value="ANCON">ANCON</Option>
                    <Option value="ATE">ATE</Option>
                    <Option value="BARRANCO">BARRANCO</Option>
                    <Option value="BREÑA">BREÑA</Option>
                    <Option value="CARABAYLLO">CARABAYLLO</Option>
                    <Option value="CHACLACAYO">CHACLACAYO</Option>
                    <Option value="CHORRILLOS">CHORRILLOS</Option>
                    <Option value="CIENEGUILLA">CIENEGUILLA</Option>
                    <Option value="COMAS">COMAS</Option>
                    <Option value="EL AGUSTINO">EL AGUSTINO</Option>
                    <Option value="INDEPENDENCIA">INDEPENDENCIA</Option>
                    <Option value="JESUS MARIA">JESUS MARIA</Option>
                    <Option value="LA MOLINA">LA MOLINA</Option>
                    <Option value="LA VICTORIA">LA VICTORIA</Option>
                    <Option value="LIMA">LIMA</Option>
                    <Option value="LINCE">LINCE</Option>
                    <Option value="LOS OLIVOS">LOS OLIVOS</Option>
                    <Option value="LURIGANCHO">LURIGANCHO</Option>
                    <Option value="LURIN">LURIN</Option>
                    <Option value="MAGDALENA DEL MAR">MAGDALENA DEL MAR</Option>
                    <Option value="MIRAFLORES">MIRAFLORES</Option>
                    <Option value="PACHACAMAC">PACHACAMAC</Option>
                    <Option value="PUCUSANA">PUCUSANA</Option>
                    <Option value="PUEBLO LIBRE">PUEBLO LIBRE</Option>
                    <Option value="PUENTE PIEDRA">PUENTE PIEDRA</Option>
                    <Option value="PUNTA HERMOSA">PUNTA HERMOSA</Option>
                    <Option value="PUNTA NEGRA">PUNTA NEGRA</Option>
                    <Option value="RIMAC">RIMAC</Option>
                    <Option value="SAN BARTOLO">SAN BARTOLO</Option>
                    <Option value="SAN BORJA">SAN BORJA</Option>
                    <Option value="SAN ISIDRO">SAN ISIDRO</Option>
                    <Option value="SAN JUAN DE LURIGANCHO">
                      SAN JUAN DE LURIGANCHO
                    </Option>
                    <Option value="SAN JUAN DE MIRAFLORES">
                      SAN JUAN DE MIRAFLORES
                    </Option>
                    <Option value="SAN LUIS">SAN LUIS</Option>
                    <Option value="SAN MARTIN DE PORRES">
                      SAN MARTIN DE PORRES
                    </Option>
                    <Option value="SAN MIGUEL">SAN MIGUEL</Option>
                    <Option value="SANTA ANITA">SANTA ANITA</Option>
                    <Option value="SANTA MARIA DEL MAR">
                      SANTA MARIA DEL MAR
                    </Option>
                    <Option value="SANTA ROSA">SANTA ROSA</Option>
                    <Option value="SANTIAGO DE SURCO">SANTIAGO DE SURCO</Option>
                    <Option value="SURQUILLO">SURQUILLO</Option>
                    <Option value="VILLA EL SALVADOR">VILLA EL SALVADOR</Option>
                    <Option value="VILLA MARIA DEL TRIUNFO">
                      VILLA MARIA DEL TRIUNFO
                    </Option>
                  </Select>
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
                  onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                    setCheckoutPago(e.target.value)
                  }
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
