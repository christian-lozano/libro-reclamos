import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Button } from '../@ui/button/button'
import { Link } from '../@ui/link/link'

export function BannerPromociones({ props }) {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })

  if (!props.homePromoMobil || !props.homePromoDesktop)
    return <div>Cargando</div>
  console.log(props.homePromoDesktop[0].button_url)
  return (
    <div className="flex items-center">
      <section
        className={`w-full bg-cover bg-center py-8 pb-14 2xl:py-40 xl:py-40 lg:py-30 md:py-20`}
      >
        <div className=" w-full text-center text-white relative">
          {isDesktopOrLaptop && (
            <>
              {props.homePromoDesktop.map((el) => (
                <img
                  src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710778357/fritz_sport/adidas_4_iijrua.jpg"
                  className="w-full h-full"
                  alt=""
                />
              ))}
            </>
          )}

          {!isDesktopOrLaptop && (
            <>
              <>
                {props.homePromoMobil.map((el) => (
                  <img
                    src="https://res.cloudinary.com/dmtq82guq/image/upload/v1710778363/fritz_sport/adidas_4_2_dyrysx.jpg"
                    className="w-full h-full "
                    alt=""
                  />
                ))}
              </>
            </>
          )}
          {/* desktop */}

          {isDesktopOrLaptop && props.homePromoDesktop ? (
            <div className="absolute flex items-end py-10 top-0  w-full h-full  ">
              <div className=" h-3/4 w-2/4 ml-48  flex-col  flex justify-end   items-end ">
                <div className="w-full 2xl:w-full flex flex-col items-start ">
                  {/* <div className="w-full ">
                    <h1 className="xl:text-4xl md:text-3xl 2xl:text-6xl font-bold  py-5 w-full text-center text-black ">
                      Nuevos Ingresos
                    </h1>
                  </div> */}
                  <div className="w-full flex  justify-start items-end h-full  ">
                    <div className="flex justify-around ">
                      <Link href={`${props.homePromoDesktop[0].button_url}`}>
                        <Button
                          className={`bg-white flex justify-around text-lg font-medium border border-black shadow-lg text-black w-64 py-2 px-2 rounded-sm uppercase`}
                        >
                          Comprar Ahora
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth={1.5}
                            stroke="currentColor"
                            className="w-6 h-6"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                            />
                          </svg>
                        </Button>
                      </Link>

                      {/* <Link href="/hombre">
                        <span className="text-black bg-white p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-base">
                          Tienda Mujer
                        </span>
                      </Link> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <>
              {props.homePromoMobil.map((el) => (
                <div className=" top-0 w-full h-full ">
                  <div className=" h-full w-full flex-col  flex justify-center items-center ">
                    <div className="w-full flex flex-col items-center ">
                      <div className=" ">
                        <h1 className="xl:text-4xl text-black text-xl md:text-3xl 2xl:text-6xl font-bold text-left py-5 ">
                          {el.title_banner}
                        </h1>
                      </div>
                      <div className="w-full flex justify-center  ">
                        <div className="flex justify-around w-full">
                          <Link href="/hombre">
                            <span className="flex justify-center items-center text-white bg-black p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-xl">
                              HOMBRE
                              <span className="ml-2">
                                {' '}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="#fff"
                                  className="w-4 h-4 laptop:w-5 laptop:h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </Link>
                          <Link href="/mujer">
                            <span className="flex justify-center items-center text-white bg-black p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-xl">
                              MUJER
                              <span className="ml-2">
                                {' '}
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  strokeWidth="1.5"
                                  stroke="#fff"
                                  className="w-4 h-4 laptop:w-5 laptop:h-5"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                                  ></path>
                                </svg>
                              </span>
                            </span>
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </>
          )}
          {/* mobil */}
        </div>
      </section>
    </div>
  )
}
