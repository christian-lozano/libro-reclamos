import React from 'react'
import { useMediaQuery } from 'react-responsive'

import { Link } from '../@ui/link/link'

const imgSection = {
  imgMd:
    'https://br.puma.com/media/contentmanager/content/23AW_Ecom_TS_Football_Gear-Up-Pack_Q4_FullBleedHero_Large_TabMob_1536x1536_Combined-Player-Ultra-Future_2_1.jpg',
  imgXl:
    'https://br.puma.com/media/contentmanager/content/23AW_Ecom_TS_Football_Gear-Up-Pack_Q4_FullBleedHero_Large_Desktop_1440x500_Combined-Player-Ultra-Future.jpg',
}

export function BannerPromociones() {
  const isDesktopOrLaptop = useMediaQuery({
    query: '(min-width: 1224px)',
  })
  return (
    <div className="flex items-center">
      <section
        className={`w-full bg-cover bg-center py-8 pb-14 2xl:py-40 xl:py-40 lg:py-30 md:py-20`}
      >
        <div className=" w-full text-center text-white relative">
          {isDesktopOrLaptop ? (
            <img
              src={imgSection.imgXl}
              className="w-full h-full hidden md:hidden  lg:block laptop:block 2xl:block"
              alt=""
            />
          ) : (
            <img
              src={imgSection.imgMd}
              className="w-full h-full block md:block laptop:hidden laptop:hidden laptop:hidden"
              alt=""
            />
          )}

          {/* desktop */}

          {isDesktopOrLaptop ? (
            <div className="absolute top-0 w-full h-full  ">
              <div className=" h-full w-full flex-col  flex justify-center items-end ">
                <div className="w-full 2xl:w-full flex flex-col items-start ">
                  <div className="w-full ">
                    <h1 className="xl:text-4xl md:text-3xl 2xl:text-6xl font-bold  py-5 w-full text-center ">
                      Nuevos Ingresos
                    </h1>
                  </div>
                  <div className="w-full flex justify-center  ">
                    <div className="flex justify-around ">
                      <Link href="/mujer">
                        <span className="text-black bg-white p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-base">
                          Tienda Hombre
                        </span>
                      </Link>

                      <Link href="/hombre">
                        <span className="text-black bg-white p-3  md:p-2 font-bold mr-6  text-sm 2xl:text-base">
                          Tienda Mujer
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ) : (
            <div className=" top-0 w-full h-full ">
              <div className=" h-full w-full flex-col  flex justify-center items-center ">
                <div className="w-full flex flex-col items-center ">
                  <div className=" ">
                    <h1 className="xl:text-4xl text-black text-xl md:text-3xl 2xl:text-6xl font-bold text-left py-5 ">
                      FOREVER. CLASSIC.
                    </h1>
                  </div>
                  <div className="w-full flex justify-center  ">
                    <div className="flex justify-around w-full">
                      <Link href="#">
                        <span className="text-white bg-black p-3 font-sans md:p-2 font-medium md:px-5 md:py-3   mr-6  text-sm 2xl:text-base">
                          TIENDA HOMBRE
                        </span>
                      </Link>
                      <Link href="#">
                        <span className="text-white bg-black p-3 font-sans md:p-2 font-medium md:px-5 md:py-3   mr-6 text-sm 2xl:text-base ">
                          TIENDA MUJER
                        </span>
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
          {/* mobil */}
        </div>
      </section>
    </div>
  )
}
