import React from 'react'
import {
    Button,
    Tab,
    TabPanel,
    Tabs,
    TabsBody,
    TabsHeader,
  } from '@material-tailwind/react'
export default function ContentEmprende({props}) {
    if(!props.PortadaMobil || !props.PortadaDesktop) return <div>Cargando..</div>

  return (
    <div className=" pt-14 md:pt-16">
    <div className="">

    {
        props.PortadaDesktop.map(el=>(

            <img
                src={el.secure_url}
                alt=""
                className="hidden md:block"
            />
            
        ))
    }
    {
        props.PortadaMobil.map(el=>(

            <img
                src="https://res.cloudinary.com/da868wsih/image/upload/v1701370311/fritz-ecommerce/emprende/celular-pt-fritz_z6fpcs.jpg"
                alt=""
                className="block md:hidden"
            />
            
        ))
    }

    </div>

    <div className="bg-white">
      <div className="container flex flex-col mx-auto bg-white">
        <div className="w-full draggable">
          <div className="container flex flex-col items-center gap-16 mx-auto mt-32">
            <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-2 lg:grid-cols-5">
              {/*  */}
              {props.BeneficiosGrid.map((el) => (
                <div
                  key={el._id}
                  className="flex flex-col items-center gap-3 px-8 py-10 bg-white rounded-3xl shadow-main"
                >
                  <span>
                    <img src={el.secure_url} alt="" className="w-32" />
                  </span>
                  {/* <p className="laptop:text-xl 2xl:text-lg font-extrabold text-center text-dark-grey-900">
                    {el.title}
                  </p> */}
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
                {/* {dataSocios.map(({ label, value }) => (
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
                ))} */}
              </TabsHeader>
{/*     
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
              </TabsBody> */}

              {/* ---------------------------------------------------------------- */}

              <div className="flex justify-center flex-col items-center mt-10 ">
                <h5 className="my-10  text-2xl">
                  Afíliate en 3 simples pasos
                </h5>

                <div className="md:flex flex-col xl:flex-row w-5/6">
                {
                    props.ImageCardPasos.map(el=>(

                        <img
                            className="md:w-5/12 xl:w-6/12"
                            src={el.secure_url}
                            alt=""
                        />
                    ))
                }

                  <div className="px-10 flex flex-col items-start justify-center">
                    {/* {props.PasosList.map((el, i) => (
                      <div key={i} className=" flex flex-col mt-3">
                        <p className="text-lg font-bold my-3">{el.title}</p>
                        <p className="text-base text-start xl:text-start ">
                          {el.parrafo}
                        </p>
                      </div>
                    ))} */}
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
  )
}
