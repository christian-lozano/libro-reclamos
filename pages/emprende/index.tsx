import {
  Button,
  Tab,
  TabPanel,
  Tabs,
  TabsBody,
  TabsHeader,
} from '@material-tailwind/react'
import React from 'react'

import type { SearchPageLayoutProps } from '@/layouts/search-page-layout'
import {
  SearchPageLayout,
  getStaticPropsPage,
} from '@/layouts/search-page-layout'

export default function Home(props: SearchPageLayoutProps) {
  // const { items, cartTotal } = useCart()

  // const [domLoaded, setDomLoaded] = useState(false)

  // useEffect(() => {
  //   setDomLoaded(true)
  // }, [])

  const dataEmprende = [
    {
      id: 'as12321d213',
      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/a8092058-5eae-4d09-9df9-4f066ee0a966___ec5fe3c96a0dec59974be71a435545f2.png',
      title: 'Gana hasta un 35% por tus ventas',
    },
    {
      id: 'a3sdsa1234112321d213',

      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/a88c40df-d351-486a-b4ed-f4e4b8057126___5208e3b26b5cc34a3de320369aae7fb2.png',
      title: 'Trabaja con las mejores marcas',
    },
    {
      id: 'a3s12322351ed211d122213',
      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/454b1174-e673-4553-94e1-52fc112c15be___155617834f474132c7b99430e289c9b0.png',
      title: 'Entregas a todo el Perú',
    },
    {
      id: 'a1s123213df12e12321d213',

      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/0b7b64c3-d16b-46f3-8020-3bfafbd444c0___53675cfa8bfb06aae8dc4798b959b067.png',
      title: 'Garantía de compra',
    },
    {
      id: 'aass1232asd12351d213',

      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/23fefe16-7dba-4b6b-a6b6-3c0a489d170b___a463340b403ca93a3c4803137ffd84e6.png',
      title: 'Promociones exclusivas',
    },
  ]

  const dataSocios = [
    {
      label: 'Emprendedores',
      value: 'Emprendedores',
      img: 'https://res.cloudinary.com/da868wsih/image/upload/v1702597771/fritz-ecommerce/emprende/web_f619vq.jpg',
      title: `Beneficios`,
      arr: [
        'Gana descuentos de hasta 35% en tus compras.',
        'Productos seleccionados',
        'Construye tu red de afiliados y Gana Bonos por Afiliación.',
        'Catálogos personalizados',
        'Participa en sorteos y gana muchos premios.',
      ],
      subTitle: 'Requisitos:',
      arrSub: [
        'Cualquier cliente compras mayores a 3 productos',
        'Tener espíritu emprendedor y voluntad de progreso',
      ],
    },
    {
      label: 'Mayoristas',
      value: 'Mayoristas',
      img: 'https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/senor-dos_fhq6pr.jpg',
      title: `Beneficios`,
      arr: [
        'Gana descuentos de mas de 35% en tus compras.',
        'Sin limite de compras',
        'Apoyo publicitario para hacer crecer tu red',
        'Guía de tallas y catálogos',
        'Participa en sorteos y gana muchos premios.',
      ],
      subTitle: 'Requisitos :',
      arrSub: [
        'Tener una empresa online o física(ruc)',
        'Volúmenes de compra a partir de una caja sellada',
        'Tener voluntad de progreso',
      ],
    },
  ]
  const data3pasos = [
    {
      title: '1. Contacta a uno de nuestros asesores',
      parrafo: 'Presiona el Botón de: Contactar a un Asesor',
    },
    {
      title: '2. Solicita tu catalogo',
      parrafo: 'Realiza tu primera cotización por WhatsApp',
    },

    {
      title: '¡Gana!',
      parrafo: 'Comparte tus catálogos y disfruta de tus ganancias.',
    },
  ]

  return (
    <SearchPageLayout {...props}>
      <div className=" pt-14 md:pt-16">
        <div className="">
          <img
            src="https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/portada-fritz_c7ncub.jpg"
            alt=""
            className="hidden md:block"
          />
          <img
            src="https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/celular-pt-fritz_z6fpcs.jpg"
            alt=""
            className="block md:hidden"
          />
        </div>

        <div className="bg-white">
          <div className="container flex flex-col mx-auto bg-white">
            <div className="w-full draggable">
              <div className="container flex flex-col items-center gap-16 mx-auto mt-32">
                <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-5">
                  {/*  */}
                  {dataEmprende.map((el) => (
                    <div
                      key={el.id}
                      className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
                    >
                      <span>
                        <img src={el.img} alt="" className="w-32" />
                      </span>
                      <p className="laptop:text-xl 2xl:text-lg font-extrabold text-center text-dark-grey-900">
                        {el.title}
                      </p>
                    </div>
                  ))}
                </div>
                {/* 
              /*---------------------------------*/
                /* ¡Inicia a tu manera y gana! page Emprende*/
                /* ---------------------------------*/}

                {/* ------------------------------ */}
                <Tabs value="Emprendedores" className="">
                  <h4 className="text-center   text-2xl py-7">
                    ¡Inicia a tu manera y gana!
                  </h4>
                  <TabsHeader
                    className="bg-transparent"
                    indicatorProps={{
                      className: 'bg-gray-900/10 shadow-none !text-gray-900',
                    }}
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    {dataSocios.map(({ label, value }) => (
                      <Tab
                        key={value}
                        value={value}
                        className="text-lg font-bold mb-5"
                        nonce={undefined}
                        onResize={undefined}
                        onResizeCapture={undefined}
                      >
                        {label}
                      </Tab>
                    ))}
                  </TabsHeader>
                  {/* ------------------------------------------------------ */}
                  <TabsBody
                    nonce={undefined}
                    onResize={undefined}
                    onResizeCapture={undefined}
                  >
                    {dataSocios.map(
                      ({ value, title, img, arr, arrSub, subTitle }) => (
                        <TabPanel
                          key={value}
                          value={value}
                          className="text-black"
                        >
                          <div className="flex flex-col laptop:flex-row xl:flex-row">
                            <div>
                              <img src={img} alt="" />
                            </div>
                            <div className="xl:px-5">
                              <div className="text-center text-3xl font-bold my-7">
                                {title}
                              </div>
                              <ul className="flex flex-col">
                                {arr.map((el, i) => (
                                  <li
                                    key={i}
                                    className="my-3 mx-3 font-semibold"
                                  >
                                    - {el}
                                  </li>
                                ))}
                              </ul>
                              {/* sub title */}
                              <div className="xl:px-5">
                                <div className="text-center text-3xl font-bold my-7">
                                  {subTitle}
                                </div>
                                <ul className="flex flex-col">
                                  {arrSub.map((el, i) => (
                                    <li
                                      key={i}
                                      className="my-3 mx-3 font-semibold"
                                    >
                                      - {el}
                                    </li>
                                  ))}
                                </ul>
                              </div>
                            </div>
                          </div>
                        </TabPanel>
                      )
                    )}
                  </TabsBody>

                  {/* ---------------------------------------------------------------- */}

                  <div className="flex justify-center flex-col items-center mt-10 ">
                    <h5 className="my-10  text-2xl">
                      Afíliate en 3 simples pasos
                    </h5>

                    <div className="md:flex flex-col xl:flex-row w-5/6">
                      <img
                        className="md:w-5/12 xl:w-6/12"
                        src="https://res.cloudinary.com/da868wsih/image/upload/v1701370312/fritz-ecommerce/emprende/fritz_fpssom.jpg"
                        alt=""
                      />

                      <div className="px-10 flex flex-col items-start justify-center">
                        {data3pasos.map((el, i) => (
                          <div key={i} className=" flex flex-col mt-3">
                            <p className="text-lg font-bold my-3">{el.title}</p>
                            <p className="text-base text-start xl:text-start ">
                              {el.parrafo}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* ---------------------------------------------------------------- */}
                  <div className="w-full flex  justify-center my-20 ">
                    <div className="flex flex-col">
                      <div>
                        <h6 className="text-center text-3xl">
                          ¡Empieza ahora!
                        </h6>
                      </div>
                      <div className="mt-10 flex flex-col md:flex-row justify-center items-center h-3/5 w-full">
                        {/* <a
                          href="https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            className="text-base"
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            Regístrate por WhatsApp
                          </Button>
                        </a> */}

                        <a
                          href="https://api.whatsapp.com/send/?phone=51983478551&text&type=phone_number&app_absent=0"
                          target="_blank"
                          rel="noreferrer"
                        >
                          <Button
                            className="lg:ml-5 text-base mt-5 md:mt-0"
                            nonce={undefined}
                            onResize={undefined}
                            onResizeCapture={undefined}
                          >
                            Contactar a un Asesor
                          </Button>
                        </a>
                      </div>
                    </div>
                  </div>
                </Tabs>
              </div>
            </div>
          </div>
        </div>
      </div>
    </SearchPageLayout>
  )
}


export const getStaticProps = async () => {
  const resPortadaDesktop = await fetch(
    'https://www.fritzsport.pe/api/emprende/portadaDesktop'
  )

  const resPortadaMobil = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosPortadaMobil'
  )
  const resLoMasNuevo = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosLoMasNuevo'
  )
  const resDestacado = await fetch(
    'https://www.fritzsport.pe/api/ninos/ninosEstilosDestacados'
  )
  const resSliderMarcas = await fetch(
    'https://www.fritzsport.pe/api/home/homeSliderMarcas'
  )

  const NinosPortadaDesktop = await resPortadaDesktop.json()
  const NinosPortadaMobil = await resPortadaMobil.json()
  const NinosLoMasNuevo = await resLoMasNuevo.json()
  const NinosDestacado = await resDestacado.json()
  const homeSliderMarcas = await resSliderMarcas.json()
  getStaticPropsPage(Home)
  return {
    props: {
      NinosPortadaDesktop,
      NinosPortadaMobil,
      NinosLoMasNuevo,
      NinosDestacado,
      homeSliderMarcas,
    },
    // MujerPortadaDesktop,
    revalidate: 80, // In seconds
  }
}