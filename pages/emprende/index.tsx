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
      title: ' Gana hasta un 25% por tus ventas',
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
      title: 'Cambios y garantías',
    },
    {
      id: 'aass1232asd12351d213',

      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/23fefe16-7dba-4b6b-a6b6-3c0a489d170b___a463340b403ca93a3c4803137ffd84e6.png',
      title: 'Eventos y muchos premios',
    },
  ]

  const dataSocios = [
    {
      label: 'Directores',
      value: 'Directores',
      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/ce6123a7-34ba-45bb-81c3-721dcbf7e5b5___4577b42cb77fd7bae2aadb2da3bfffa6.png',
      title: `Beneficios`,
      arr: [
        'Gana descuentos de hasta 25% en tus compras.',
        'Gana premios increíbles por Compras Personales acumuladas del mes',
        'Construye tu red de afiliados y Gana Bonos por Afiliación.',
        'Participa en las reuniones anuales para los mejores socios.',
        'Participa en sorteos y gana muchos premios.',
      ],
      subTitle: 'Requisitos:',
      arrSub: [
        'Realiza tu primera compra de S/. 299.00 a precio Socio y empieza a ganar.',
      ],
    },
    {
      label: 'Socios',
      value: 'Socios',
      img: 'https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/8610d923-a622-426c-95b6-785ce52a2ac3___313d275379cc31011295beb958aa049a.png',
      title: `Beneficios`,
      arr: [
        'Gana comisiones de hasta 10% por las ventas de tu red de Socios',
        'Flete gratis para tus pedidos, si superas monto mínimo',
        'Apoyo publicitario para hacer crecer tu red',
        'Participación en evento exclusivos: Convención Directores y Capacitaciones',
        'Participa en sorteos y gana muchos premios.',
      ],
      subTitle: 'Requisitos :',
      arrSub: [
        'Tener una red de Socios',
        'Tener espíritu emprendedor y voluntad de progreso',
        'Enviar su postulación por Whatsapp al (936121553 opción 2)',
      ],
    },
  ]
  const data3pasos = [
    {
      title: '1. Regístrate',
      parrafo:
        ' Ingresa tus datos en el botón Inscríbete aquí o contáctate con un asesor. ',
    },
    {
      title: '2. Tu primera compra',
      parrafo:
        'Realiza tu primera compra de s/299.00 para comenzar tu negocio.',
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
            src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/87e2b249-950c-4fc0-a060-6c769f732812___be97d770f6dca434a84e79c1f491ba5c.png"
            alt=""
            className="hidden md:block"
          />
          <img
            src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/b7ca8649-5884-4e95-a25d-07ae91224897___be2aa7b36484dbb9b8c3811cc9004bab.png"
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
                <Tabs value="Directores" className="">
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
                        src="https://footloose.vtexassets.com/assets/vtex.file-manager-graphql/images/383d673e-4393-4c04-a0c6-418627b4903b___ff7dcb03be130144b141d54b8335719e.png"
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
                        <a
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
                        </a>

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
                            llama a un Asesor
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

export const getStaticProps = () => getStaticPropsPage(Home)
